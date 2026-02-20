terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "wk-portfolio-tfstate"
    key    = "portfolio/terraform.tfstate"
    region = "ap-northeast-2"
  }
}

provider "aws" {
  region = "ap-northeast-2"
}

provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

variable "domain_name" {
  description = "커스텀 도메인 (비워두면 CloudFront 기본 도메인 사용)"
  type        = string
  default     = ""
}

variable "enable_domain" {
  description = "도메인 + ACM 인증서 활성화 여부"
  type        = bool
  default     = false
}

locals {
  project = "wk-portfolio"
  tags = {
    Project   = "wk-portfolio"
    ManagedBy = "terraform"
  }
}

# ─── S3 버킷 ───
resource "aws_s3_bucket" "site" {
  bucket = "${local.project}-site"
  tags   = local.tags
}

resource "aws_s3_bucket_public_access_block" "site" {
  bucket                  = aws_s3_bucket.site.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_website_configuration" "site" {
  bucket = aws_s3_bucket.site.id
  index_document { suffix = "index.html" }
  error_document { key = "404.html" }
}

# ─── CloudFront OAC ───
resource "aws_cloudfront_origin_access_control" "site" {
  name                              = "${local.project}-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# ─── Route53 (도메인 활성화 시에만) ───
resource "aws_route53_zone" "main" {
  count = var.enable_domain ? 1 : 0
  name  = var.domain_name
  tags  = local.tags
}

# ─── ACM 인증서 (도메인 활성화 시에만) ───
resource "aws_acm_certificate" "site" {
  count                     = var.enable_domain ? 1 : 0
  provider                  = aws.us_east_1
  domain_name               = var.domain_name
  subject_alternative_names = ["*.${var.domain_name}"]
  validation_method         = "DNS"
  tags                      = local.tags
  lifecycle { create_before_destroy = true }
}

resource "aws_route53_record" "cert_validation" {
  count = var.enable_domain ? 1 : 0

  zone_id = aws_route53_zone.main[0].zone_id
  name    = tolist(aws_acm_certificate.site[0].domain_validation_options)[0].resource_record_name
  type    = tolist(aws_acm_certificate.site[0].domain_validation_options)[0].resource_record_type
  records = [tolist(aws_acm_certificate.site[0].domain_validation_options)[0].resource_record_value]
  ttl     = 300
}

resource "aws_acm_certificate_validation" "site" {
  count                   = var.enable_domain ? 1 : 0
  provider                = aws.us_east_1
  certificate_arn         = aws_acm_certificate.site[0].arn
  validation_record_fqdns = [aws_route53_record.cert_validation[0].fqdn]
}

# ─── CloudFront Distribution ───
resource "aws_cloudfront_distribution" "site" {
  enabled             = true
  default_root_object = "index.html"
  comment             = "Michael Kim Portfolio"
  price_class         = "PriceClass_200"
  aliases             = var.enable_domain ? [var.domain_name, "www.${var.domain_name}"] : []
  tags                = local.tags

  origin {
    domain_name              = aws_s3_bucket.site.bucket_regional_domain_name
    origin_id                = "s3-origin"
    origin_access_control_id = aws_cloudfront_origin_access_control.site.id
  }

  default_cache_behavior {
    target_origin_id       = "s3-origin"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true

    forwarded_values {
      query_string = false
      cookies { forward = "none" }
    }

    min_ttl     = 0
    default_ttl = 3600
    max_ttl     = 86400
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  restrictions {
    geo_restriction { restriction_type = "none" }
  }

  viewer_certificate {
    cloudfront_default_certificate = var.enable_domain ? false : true
    acm_certificate_arn            = var.enable_domain ? aws_acm_certificate_validation.site[0].certificate_arn : null
    ssl_support_method             = var.enable_domain ? "sni-only" : null
    minimum_protocol_version       = var.enable_domain ? "TLSv1.2_2021" : "TLSv1"
  }
}

# ─── S3 버킷 정책 ───
resource "aws_s3_bucket_policy" "site" {
  bucket = aws_s3_bucket.site.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Sid       = "AllowCloudFront"
      Effect    = "Allow"
      Principal = { Service = "cloudfront.amazonaws.com" }
      Action    = "s3:GetObject"
      Resource  = "${aws_s3_bucket.site.arn}/*"
      Condition = {
        StringEquals = {
          "AWS:SourceArn" = aws_cloudfront_distribution.site.arn
        }
      }
    }]
  })
}

# ─── Route53 A 레코드 (도메인 활성화 시에만) ───
resource "aws_route53_record" "root" {
  count   = var.enable_domain ? 1 : 0
  zone_id = aws_route53_zone.main[0].zone_id
  name    = var.domain_name
  type    = "A"
  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www" {
  count   = var.enable_domain ? 1 : 0
  zone_id = aws_route53_zone.main[0].zone_id
  name    = "www.${var.domain_name}"
  type    = "A"
  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}
