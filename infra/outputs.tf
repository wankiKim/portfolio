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
  value = "https://${local.domain_name}"
}

output "nameservers" {
  value       = aws_route53_zone.main.name_servers
  description = "이 네임서버를 도메인 등록기관에 설정해주세요"
}
