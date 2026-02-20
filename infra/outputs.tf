output "s3_bucket" {
  value = aws_s3_bucket.site.bucket
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain" {
  value = aws_cloudfront_distribution.site.domain_name
}

output "site_url" {
  value = var.enable_domain ? "https://${var.domain_name}" : "https://${aws_cloudfront_distribution.site.domain_name}"
}

output "nameservers" {
  value       = var.enable_domain ? aws_route53_zone.main[0].name_servers : []
  description = "도메인 등록기관에 이 네임서버를 설정해주세요"
}
