import { Capability } from "@/types";
import type { Locale } from "@/context/LanguageContext";

const capKo: Capability[] = [
  { title: "시스템 아키텍처", icon: "LayoutDashboard", description: "MSA·이벤트 드리븐 설계 — 이벤트 발행 보장(Outbox), 분산 트랜잭션(Saga), 표준 이벤트 형식(CloudEvents), 같은 요청이 두 번 와도 한 번만 처리되게 하는 장치를 공용 라이브러리로 묶고, ArchUnit으로 아키텍처 규칙을 CI에서 강제합니다." },
  { title: "레거시 현대화", icon: "RefreshCw", description: "PHP·Django·Java 모놀리스를 MSA로 전환해 실운영까지 완주 3회. 조금씩 갈아끼우는 스트랭글러 방식, 구·신 시스템 동작 일치 검증, 전환 당일 절차서, NCP→AWS 무중단 마이그레이션까지." },
  { title: "핀테크 & 블록체인", icon: "Wallet", description: "Rust 매칭 엔진·선물 청산·펀딩비 엔진 구현, 복식 원장·낙관적 잠금 기반 정산 플랫폼, ISMS-P 인증 대응, Master/Visa·현지 은행 결제 연동." },
  { title: "IoT & 하드웨어", icon: "Cpu", description: "hex 역분석으로 복원한 ATmega2560 펌웨어, RS-232 시리얼 디바이스 5종 제어, 결제 단말 3사 추상화, 오프라인 우선 키오스크, 기기 WebSocket 게이트웨이." },
  { title: "AI & 자동화", icon: "Sparkles", description: "OpenAI·Claude 기반 CS 응대 AI, 14개 LLM 프로바이더 통합 모듈, Claude Code 중심 AI 네이티브 워크플로우로 15개+ 프로덕션 프로젝트 구축." },
  { title: "풀스택 개발", icon: "Code", description: "Java·Go·Python 백엔드, React·Angular·Vue 프론트엔드, Electron 데스크톱, Unity·Kotlin 게임 서버까지 — DB 설계에서 배포까지 전 영역." },
  { title: "DevOps & 인프라", icon: "Server", description: "AWS(ECS Fargate, EKS, RDS, MSK), Terraform IaC, Blue-Green 배포, OIDC 무키 CI/CD, Prometheus·Grafana·OpenTelemetry 관측 체계 구축." },
  { title: "글로벌 개발", icon: "Globe", description: "우즈베키스탄·인도네시아 해외 파견. 현지 은행·정부 시스템(One ID) 연동, 다국어(4개 국어)·다중 통화 서비스 설계." },
  { title: "프로젝트 매니지먼트", icon: "Users", description: "10인 이상 팀 리딩, 해외 거래소 PM, 연구소장으로서 기술 전략 수립. 기획부터 배포·운영까지 전 과정을 관리합니다." },
];

const capEn: Capability[] = [
  { title: "System Architecture", icon: "LayoutDashboard", description: "MSA and event-driven design — Outbox, Saga, CloudEvents, and idempotency standardized as libraries, with architecture rules enforced in CI via ArchUnit." },
  { title: "Legacy Modernization", icon: "RefreshCw", description: "Three legacy-to-MSA conversions (PHP, Django, Java) carried all the way to production. Strangler pattern, parity verification, cutover runbooks, zero-downtime NCP→AWS migration." },
  { title: "FinTech & Blockchain", icon: "Wallet", description: "Rust matching engines, futures liquidation & funding-rate engines, double-entry-ledger settlement platforms, ISMS-P certification, Mastercard/Visa and local bank integrations." },
  { title: "IoT & Hardware", icon: "Cpu", description: "ATmega2560 firmware recovered via hex reverse engineering, RS-232 control of 5 device types, 3-vendor payment-terminal abstraction, offline-first kiosks, device WebSocket gateways." },
  { title: "AI & Automation", icon: "Sparkles", description: "CS response AI on OpenAI/Claude, a 14-provider LLM integration module, and 15+ production projects built on a Claude Code–centered AI-native workflow." },
  { title: "Full-Stack Development", icon: "Code", description: "Java/Go/Python backends, React/Angular/Vue frontends, Electron desktop, Unity and Kotlin game servers — everything from DB design to deployment." },
  { title: "DevOps & Infra", icon: "Server", description: "AWS (ECS Fargate, EKS, RDS, MSK), Terraform IaC, Blue-Green deployments, keyless OIDC CI/CD, observability with Prometheus, Grafana, and OpenTelemetry." },
  { title: "Global Development", icon: "Globe", description: "On-site work in Uzbekistan and Indonesia. Local bank and government (One ID) integrations, quad-lingual and multi-currency service design." },
  { title: "Project Management", icon: "Users", description: "Led teams of 10+, managed overseas exchange projects, set tech strategy as R&D Lab Director. Full lifecycle from planning to deployment and operations." },
];

export const capabilities = capKo;
export function getCapabilities(locale: Locale) {
  return locale === "en" ? capEn : capKo;
}
