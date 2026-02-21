import { Capability } from "@/types";
import type { Locale } from "@/context/LanguageContext";

const capKo: Capability[] = [
  { title: "시스템 아키텍처", icon: "LayoutDashboard", description: "MSA, Spring Cloud, Kafka 기반 대규모 시스템 설계와 구축. 인증·결제·모니터링까지 End-to-End 아키텍처 설계 경험." },
  { title: "프로젝트 매니지먼트", icon: "Users", description: "10인 이상 팀 리딩, 해외 거래소 PM, JIRA/Slack 기반 애자일 운영. 기획부터 배포까지 전 과정을 관리합니다." },
  { title: "핀테크 & 블록체인", icon: "Wallet", description: "암호화폐 거래소 개발·운영, ERC20/스텔라 토큰, ISMS-P 보안 인증, Master/Visa 카드 결제 연동 전문." },
  { title: "글로벌 개발", icon: "Globe", description: "우즈베키스탄·인도네시아 해외 파견 및 원격 협업. 현지 은행·정부 시스템 연동, 다국어 서비스 구축." },
  { title: "풀스택 개발", icon: "Code", description: "Java/Spring 백엔드, Vue.js/React 프론트엔드, Flutter 모바일. DB 설계부터 CI/CD까지 전 영역을 커버합니다." },
  { title: "AI & 자동화", icon: "Sparkles", description: "OpenAI/Claude 기반 AI Agent 개발, CS 자동화, Claude Code로 개발 워크플로우 혁신. AI 네이티브 개발 선도." },
  { title: "데이터베이스", icon: "Database", description: "MySQL, MongoDB, Oracle, Redis, MSSQL — RDBMS와 NoSQL 최적화. 인덱싱, 파티셔닝, 모니터링 구성 전문." },
  { title: "DevOps & 인프라", icon: "Server", description: "AWS (ECS Fargate, EKS, RDS, ElastiCache, MSK), Terraform IaC, CI/CD (GitHub Actions, GitLab, Jenkins), Docker. Prometheus/Grafana 모니터링 환경 구축." },
  { title: "IoT & 하드웨어", icon: "Cpu", description: "무인 커피머신 키오스크 소프트웨어 개발. RS-232 시리얼 통신, 실시간 기기 상태 모니터링(0.5초 폴링), HEX/ASCII 패킷 로깅, 우선순위 기반 명령 큐 시스템." },
];

const capEn: Capability[] = [
  { title: "System Architecture", icon: "LayoutDashboard", description: "Large-scale system design with MSA, Spring Cloud, and Kafka. End-to-end architecture from auth to payments to monitoring." },
  { title: "Project Management", icon: "Users", description: "Led teams of 10+, managed overseas exchange projects, Agile with JIRA/Slack. Full lifecycle from planning to deployment." },
  { title: "FinTech & Blockchain", icon: "Wallet", description: "Crypto exchange development & operations, ERC20/Stellar tokens, ISMS-P certification, Mastercard/Visa payment integration." },
  { title: "Global Development", icon: "Globe", description: "Deployed to Uzbekistan & Indonesia. Integrated with local banks, government systems, and built multilingual services." },
  { title: "Full-Stack Development", icon: "Code", description: "Java/Spring backend, Vue.js/React frontend, Flutter mobile. Covers everything from DB design to CI/CD." },
  { title: "AI & Automation", icon: "Sparkles", description: "AI Agent development with OpenAI/Claude, CS automation, revolutionizing dev workflow with Claude Code. Leading AI-native development." },
  { title: "Database", icon: "Database", description: "MySQL, MongoDB, Oracle, Redis, MSSQL — RDBMS and NoSQL optimization. Indexing, partitioning, and monitoring expert." },
  { title: "DevOps & Infra", icon: "Server", description: "AWS (ECS Fargate, EKS, RDS, ElastiCache, MSK), Terraform IaC, CI/CD (GitHub Actions, GitLab, Jenkins), Docker. Prometheus/Grafana monitoring setup." },
  { title: "IoT & Hardware", icon: "Cpu", description: "Unmanned coffee machine kiosk software. RS-232 serial communication, real-time device monitoring (0.5s polling), HEX/ASCII packet logging, priority-based command queue system." },
];

export const capabilities = capKo;
export function getCapabilities(locale: Locale) {
  return locale === "en" ? capEn : capKo;
}
