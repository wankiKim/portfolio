import type { Locale } from "@/context/LanguageContext";

export type ProjectCategory = "featured" | "main" | "side";

export interface Project {
  name: string;
  company?: string;
  description: string;
  techStack: string[];
  visibility: "private" | "public";
  url?: string;
  category: ProjectCategory;
  metrics?: string[];
  image?: string;
}

const projectsKo: Project[] = [
  // ─── 대표 프로젝트 ───
  {
    name: "Mailbean — 무인카페 플랫폼",
    image: "/images/projects/mailbean.png",
    company: "휴니크",
    category: "featured",
    description:
      "무인 커피머신 사업의 전 레이어를 하나로 관통하는 플랫폼. 제어보드 펌웨어(ATmega2560), 결제 단말 3사·디바이스 5종을 제어하는 Electron 키오스크, Django 모놀리스(views.py 1.4만 줄)를 Java 21 MSA 19모듈로 전환 중인 SaaS 백엔드, 헤드리스 CMS 브랜드 사이트까지 — 하드웨어에서 클라우드까지 수직 통합.",
    metrics: [
      "Java 21 헥사고날 MSA 19모듈 — 아키텍처 규칙을 ArchUnit으로 CI에서 강제",
      "NCP→AWS 무중단 마이그레이션 완료 (다운타임 0)",
      "오프라인 우선 키오스크 — 네트워크가 끊겨도 매출이 끊기지 않는 설계",
      "기기 WebSocket 게이트웨이 — 1만 동시접속 폭주 대응 튜닝",
    ],
    techStack: ["Java 21", "Spring Cloud", "Electron", "React", "Django", "RabbitMQ", "AWS", "Terraform"],
    visibility: "private",
  },
  {
    name: "Zelotek — 무인매장 키오스크 SaaS",
    image: "/images/projects/zelotek.jpg",
    category: "featured",
    description:
      "스터디카페·세차·골프 등 13개 업종 무인매장을 위한 키오스크 + 프랜차이즈 원격관제 SaaS. 레거시 PHP 모놀리스(1,500파일)를 15개 Spring Boot 마이크로서비스로 전면 재구축해 실운영까지 완주. 업종별 if-else 분기를 Plugin Architecture로 대체해 신규 업종 추가 비용을 플러그인 1개 구현으로 줄였습니다.",
    metrics: [
      "Java 소스 1,432개 · 컨트롤러 139개 · Flyway 마이그레이션 457개",
      "Saga 분산 트랜잭션 + 결제 멱등성 처리",
      "카드디스펜서·현금기·RF리더 등 하드웨어 드라이버 계층 직접 구현",
      "무인정보단말기 접근성(배리어프리) 런타임 자체 구현",
    ],
    techStack: ["Java 17", "Spring Boot 3", "Eureka", "RabbitMQ", "Electron", "Next.js", "Terraform", "AWS ECS"],
    visibility: "private",
  },
  {
    name: "KoCoinEx — 암호화폐 거래소",
    image: "/images/projects/kocoinex.jpg",
    category: "featured",
    description:
      "현물·선물·OTC를 갖춘 거래소를 레거시 Java/Spring에서 Go 13개 서비스 + Rust 매칭 엔진 2개로 재플랫폼. 가격-시간 우선순위 오더북, 선물 청산·펀딩비·TP/SL 엔진, Kafka 체결 파이프라인, STOMP 실시간 시세를 구현하고 Terraform으로 AWS ECS Fargate에 배포해 라이브 데모 운영으로 검증까지 마쳤습니다.",
    metrics: [
      "Go + Rust 48,000+ LOC · MySQL 테이블 102개",
      "Rust 오더북 매칭 엔진 — BTreeMap 가격 레벨 + FIFO, 벤치마크 포함",
      "매칭 엔진 싱글톤을 코드가 아닌 인프라(Terraform)로 강제",
      "12개 마켓메이킹 봇 동시 운영, 초당 100+ 주문 처리",
    ],
    techStack: ["Go", "Rust", "Kafka", "Next.js 16", "MySQL", "MongoDB", "Redis", "Terraform"],
    visibility: "private",
  },
  {
    name: "HunikFlow — 로우코드 엔터프라이즈 플랫폼",
    company: "휴니크",
    category: "featured",
    description:
      "오픈소스 로우코드 프레임워크 Erupt(Apache 2.0)를 기반으로 전면 고도화한 엔터프라이즈 플랫폼. JPA 엔티티에 @Flow 어노테이션 하나를 선언하면 REST API·관리화면·권한·엑셀 내보내기까지 자동 생성됩니다. 엔진 위에 ERP 9모듈·MES 3모듈(OEE·SPC·MRP)을 직접 구축하고, GraalJS 동적 API·BPM 결재 엔진·14개 LLM 프로바이더 AI 모듈을 확장했습니다.",
    metrics: [
      "Maven 46모듈 · 엔티티 217개 · 약 98,000 LOC",
      "테스트 795+ · CodeQL/Qodana 정적분석",
      "UI 렌더러 4종(Ant Design·Element 등) 교체 가능 설계",
      "MES 심화 — OEE·SPC(Cp/Cpk + Nelson Rules)·BOM·MRP·Andon",
    ],
    techStack: ["Java 21", "Spring Boot", "Angular 21", "PostgreSQL 17", "GraalJS", "Redis", "Terraform"],
    visibility: "private",
  },
  {
    name: "CMS-Plug — 결제·정산 플랫폼",
    category: "featured",
    description:
      "거래처(Vendor)별 회원·지갑·수수료를 관리하는 멀티테넌트 입출금 정산 플랫폼. 복식 원장 + 낙관적 잠금 + 멱등성 필터로 금융 정합성을 보장하고, 규칙 엔진 기반 이상거래탐지(FDS)와 HMAC 웹훅 Partner API를 제공합니다. 20라운드 QA로 레이스 컨디션·N+1·수수료 반올림 오차를 하나씩 잡아낸 개선 서사가 커밋 로그에 그대로 남아 있습니다.",
    metrics: [
      "복식 원장(ledger) + 3계층 수수료 정산",
      "FDS 규칙 엔진 + 회원·계좌·IP 블랙리스트",
      "Partner API — API Key 해시 저장, IP 화이트리스트, 멱등성 필터",
      "Aurora PostgreSQL Serverless + Blue-Green 배포",
    ],
    techStack: ["Java 17", "Spring Boot 3", "QueryDSL", "Next.js 16", "Aurora PostgreSQL", "Redis", "Terraform"],
    visibility: "private",
  },

  // ─── 프로젝트 ───
  {
    name: "M500/M400 커피머신 펌웨어",
    image: "/images/projects/m500.jpg",
    company: "휴니크",
    category: "main",
    description:
      "상용 커피머신 제어보드 펌웨어를 hex 역분석으로 복원해 ATmega2560 기반으로 클린 재작성. 디스어셈블리 분석으로 원본 클럭(14.7456MHz)을 확정하고, 논블로킹 메인 루프 · 틱당 1바이트 EEPROM 쓰기 · 모터 전류 기반 위치 감지와 과부하 보호까지 구현해 실보드 검증 완료.",
    techStack: ["C/C++", "ATmega2560", "PlatformIO", "avr-gcc", "Python"],
    visibility: "private",
  },
  {
    name: "파진록 — Unity 핵앤슬래시 + MMO 백엔드",
    category: "main",
    description:
      "오픈소스 Tibia 서버(TFS)를 계정·시즌·랭킹 백엔드로 재정의하고, Unity 6 클라이언트를 자체 TCP 프로토콜로 연결한 게임 프로젝트. C++ 서버에 HTTP API 6종을 신설하고 서버 권위 치트 방지(불변식 + 증가율 상한)를 설계. Steam 출시를 준비하며 상표·폰트 라이선스·AI 에셋 리스크까지 직접 검증했습니다.",
    techStack: ["Unity 6", "C#", "C++20", "Lua", "MySQL"],
    visibility: "private",
  },
  {
    name: "RELO — 외국인 주거 플랫폼",
    category: "main",
    description:
      "한국으로 이주하는 외국인을 위한 4개 국어(KO/EN/JA/ZH) 주거 플랫폼. FastAPI 마이크로서비스 12개 + Next.js 프론트 구성으로, 다중 통화 결제(TossPayments·Stripe), AI 매물 추천, 기업 주재원 관리 대시보드까지 제공합니다.",
    techStack: ["FastAPI", "Python 3.12", "Next.js 14", "PostgreSQL", "RabbitMQ", "Docker"],
    visibility: "public",
    url: "https://github.com/wankiKim/relo",
  },
  {
    name: "MOAPICK — 의류 도매 커머스",
    image: "/images/projects/moapick.jpg",
    category: "main",
    description:
      "실운영 중인 의류 도매 커머스 + 관리자 백오피스. 도매가는 승인된 사업자 회원에게만 서버 측에서 노출하고(클라이언트 우회 차단), 서명 URL 이미지 보호 · 엑셀 대량 등록 · 부분 출고 · 네이버 카페 자동 포스팅 큐까지 운영에 필요한 기능을 풀스택으로 구현했습니다.",
    techStack: ["Next.js 16", "React 19", "SQLite", "Tailwind v4", "EC2"],
    visibility: "private",
    url: "https://moapick.shop",
  },
  {
    name: "폼팡(PomPang) — 3플랫폼 아케이드 게임",
    image: "/images/projects/pompang.png",
    category: "main",
    description:
      "와이어로 공을 터뜨리는 팡 스타일 아케이드 게임. Canvas 2D 자체 게임 엔진(RAF 루프·오브젝트 풀·스프라이트 시트) 위에 플랫폼 어댑터 계층을 두어, 단일 코드베이스로 iOS 앱스토어 · 앱인토스(토스) · 웹 3개 플랫폼에 동시 배포. 랭킹·미션·인앱결제는 별도 Node 서버가 담당합니다.",
    techStack: ["React 19", "TypeScript", "Canvas 2D", "Capacitor", "Express", "PostgreSQL"],
    visibility: "private",
  },
  {
    name: "BUJA — 부동산 AI 투자분석",
    category: "main",
    description:
      "국토교통부 실거래가 22만 건을 기반으로 OpenAI + Gemini 듀얼 AI가 병렬 분석하는 부동산 투자 리포트 플랫폼. 선형 회귀 시세 예측, 카카오맵 인프라 분석, 뉴스 정책 모니터링, 인앱결제 등급제(원자적 쿼터 관리)까지 갖춘 풀스택 서비스.",
    techStack: ["Node.js", "Flutter", "MongoDB", "GPT-4o-mini", "Gemini", "Docker"],
    visibility: "public",
    url: "https://github.com/wankiKim/BUJA",
  },
  {
    name: "bkit — Claude Code 플러그인",
    category: "main",
    description:
      "Claude Code를 위한 Vibecoding Kit. PDCA 방법론 기반 개발 워크플로우 자동화, 컨텍스트 엔지니어링 아키텍처(스킬·에이전트·훅 5계층), Electron GUI까지 포함한 AI 네이티브 개발 도구.",
    techStack: ["JavaScript", "Claude Code", "Electron", "PDCA"],
    visibility: "public",
    url: "https://github.com/wankiKim/bkit-claude-code",
  },

  // ─── 사이드 프로젝트 ───
  {
    name: "Grind — WebGL 로그라이크",
    category: "side",
    description:
      "브라우저 액션 로그라이크. 자체 GLSL 네온 글로우 셰이더와 포스트 프로세싱 파이프라인을 구현하고, 오브젝트 풀 · swap-and-pop O(1) 제거 · 프레임레이트 독립 지수감쇠 등 렌더링 최적화에 집중.",
    techStack: ["TypeScript", "PixiJS 8", "GLSL", "Vite"],
    visibility: "private",
  },
  {
    name: "Wi-Fi CSI 재실 감지",
    category: "side",
    description:
      "카메라 없이 Wi-Fi CSI 신호로 재실·움직임을 감지하는 R&D. ESP32 펌웨어(ESP-IDF/C) + z-score 통계 처리 호스트 브리지. 익명 감지와 옵트인 하트비트의 이중 트랙으로 프라이버시 문제를 설계 단계에서 해결.",
    techStack: ["ESP32", "ESP-IDF", "C", "Python"],
    visibility: "private",
  },
  {
    name: "카워치 — 중고차 시세 감시",
    category: "side",
    description:
      "중고차 매물을 30분마다 수집해 시세 대비 저평가 매물을 알리는 대시보드. 연식→모델→트림 순 적응형 시세 비교, IQR 이상치 제거, 취등록세·유지비 계산 내장. 실데이터 1.9만 대 수집·운영.",
    techStack: ["Python", "SQLite", "launchd"],
    visibility: "private",
  },
];

const projectsEn: Project[] = [
  // ─── Featured ───
  {
    name: "Mailbean — Unmanned Café Platform",
    image: "/images/projects/mailbean.png",
    company: "Hunik Inc.",
    category: "featured",
    description:
      "A platform spanning every layer of an unmanned coffee business: control-board firmware (ATmega2560), an Electron kiosk driving 3 payment-terminal vendors and 5 device types, a SaaS backend mid-migration from a Django monolith (14k-line views.py) to a 19-module Java 21 MSA, and a headless-CMS brand site — vertically integrated from hardware to cloud.",
    metrics: [
      "19-module hexagonal MSA — architecture rules enforced in CI via ArchUnit",
      "Zero-downtime NCP→AWS cloud migration",
      "Offline-first kiosk — sales continue even when the network drops",
      "Device WebSocket gateway tuned for 10k concurrent connections",
    ],
    techStack: ["Java 21", "Spring Cloud", "Electron", "React", "Django", "RabbitMQ", "AWS", "Terraform"],
    visibility: "private",
  },
  {
    name: "Zelotek — Unmanned Store Kiosk SaaS",
    image: "/images/projects/zelotek.jpg",
    category: "featured",
    description:
      "Kiosk + franchise remote-management SaaS for 13 unmanned-store industries (study cafés, car washes, golf, and more). Rebuilt a legacy PHP monolith (1,500 files) into 15 Spring Boot microservices and carried it all the way to production. Replaced per-industry if-else branching with a Plugin Architecture — adding a new industry now costs one plugin implementation.",
    metrics: [
      "1,432 Java sources · 139 controllers · 457 Flyway migrations",
      "Saga distributed transactions + payment idempotency",
      "Hands-on hardware driver layer — card dispensers, cash hoppers, RF readers",
      "Kiosk accessibility (barrier-free) runtime built in-house",
    ],
    techStack: ["Java 17", "Spring Boot 3", "Eureka", "RabbitMQ", "Electron", "Next.js", "Terraform", "AWS ECS"],
    visibility: "private",
  },
  {
    name: "KoCoinEx — Crypto Exchange",
    image: "/images/projects/kocoinex.jpg",
    category: "featured",
    description:
      "Re-platformed a full exchange (spot, futures, OTC) from legacy Java/Spring to 13 Go services + 2 Rust matching engines. Price-time priority orderbook, futures liquidation / funding-rate / TP-SL engines, Kafka execution pipeline, STOMP real-time market data — deployed to AWS ECS Fargate via Terraform and validated through a live demo run.",
    metrics: [
      "48,000+ LOC of Go + Rust · 102 MySQL tables",
      "Rust orderbook engine — BTreeMap price levels + FIFO, with benchmarks",
      "Matching-engine singleton enforced by infrastructure (Terraform), not code",
      "12 market-making bots, 100+ orders/sec",
    ],
    techStack: ["Go", "Rust", "Kafka", "Next.js 16", "MySQL", "MongoDB", "Redis", "Terraform"],
    visibility: "private",
  },
  {
    name: "HunikFlow — Low-Code Enterprise Platform",
    company: "Hunik Inc.",
    category: "featured",
    description:
      "Enterprise platform built by heavily extending Erupt, an open-source low-code framework (Apache 2.0). Declare a single @Flow annotation on a JPA entity and get REST APIs, admin screens, permissions, and Excel export automatically. On top of the engine I built 9 ERP modules and 3 MES modules (OEE, SPC, MRP), and added a GraalJS dynamic-API engine, a BPM approval workflow, and an AI module integrating 14 LLM providers.",
    metrics: [
      "46 Maven modules · 217 entities · ~98,000 LOC",
      "795+ tests · CodeQL/Qodana static analysis",
      "4 swappable UI renderers (Ant Design, Element, …)",
      "Deep MES — OEE · SPC (Cp/Cpk + Nelson Rules) · BOM · MRP · Andon",
    ],
    techStack: ["Java 21", "Spring Boot", "Angular 21", "PostgreSQL 17", "GraalJS", "Redis", "Terraform"],
    visibility: "private",
  },
  {
    name: "CMS-Plug — Payment & Settlement Platform",
    category: "featured",
    description:
      "Multi-tenant deposit/withdrawal settlement platform managing members, wallets, and fees per vendor. Financial integrity via double-entry ledger + optimistic locking + idempotency filters; rule-engine fraud detection (FDS) and an HMAC-webhook Partner API. Twenty QA rounds hunting down race conditions, N+1 queries, and fee-rounding errors — the improvement story lives in the commit log.",
    metrics: [
      "Double-entry ledger + 3-tier fee settlement",
      "FDS rule engine + member/account/IP blacklists",
      "Partner API — hashed API keys, IP allowlists, idempotency filter",
      "Aurora PostgreSQL Serverless + Blue-Green deployment",
    ],
    techStack: ["Java 17", "Spring Boot 3", "QueryDSL", "Next.js 16", "Aurora PostgreSQL", "Redis", "Terraform"],
    visibility: "private",
  },

  // ─── Projects ───
  {
    name: "M500/M400 Coffee Machine Firmware",
    image: "/images/projects/m500.jpg",
    company: "Hunik Inc.",
    category: "main",
    description:
      "Recovered a commercial coffee-machine control-board firmware via hex reverse engineering and clean-rewrote it for ATmega2560. Pinned the original clock (14.7456MHz) through disassembly analysis; implemented a fully non-blocking main loop, 1-byte-per-tick EEPROM writes, and motor-current-based position sensing with overload protection — verified on real hardware.",
    techStack: ["C/C++", "ATmega2560", "PlatformIO", "avr-gcc", "Python"],
    visibility: "private",
  },
  {
    name: "Pajinrok — Unity Hack-and-Slash + MMO Backend",
    category: "main",
    description:
      "Repurposed the open-source Tibia server (TFS) as an account/season/ranking backend and connected a Unity 6 client over a custom TCP protocol. Added 6 new HTTP APIs to the C++ server and designed server-authoritative anti-cheat (invariants + rate caps). Prepping for Steam — including hands-on trademark, font-license, and AI-asset risk vetting.",
    techStack: ["Unity 6", "C#", "C++20", "Lua", "MySQL"],
    visibility: "private",
  },
  {
    name: "RELO — Housing Platform for Expats",
    category: "main",
    description:
      "Quad-lingual (KO/EN/JA/ZH) housing platform for foreigners relocating to Korea. 12 FastAPI microservices + Next.js frontend, with multi-currency payments (TossPayments, Stripe), AI property recommendations, and corporate relocation dashboards.",
    techStack: ["FastAPI", "Python 3.12", "Next.js 14", "PostgreSQL", "RabbitMQ", "Docker"],
    visibility: "public",
    url: "https://github.com/wankiKim/relo",
  },
  {
    name: "MOAPICK — Wholesale Fashion Commerce",
    image: "/images/projects/moapick.jpg",
    category: "main",
    description:
      "Wholesale fashion commerce + back office, live in production. Wholesale prices are exposed server-side only to approved business members (no client-side bypass); signed-URL image protection, Excel bulk import, partial shipment, and a Naver Café auto-posting queue — full-stack, operations included.",
    techStack: ["Next.js 16", "React 19", "SQLite", "Tailwind v4", "EC2"],
    visibility: "private",
    url: "https://moapick.shop",
  },
  {
    name: "PomPang — 3-Platform Arcade Game",
    image: "/images/projects/pompang.png",
    category: "main",
    description:
      "Pang-style arcade game — shoot wires, pop balls. A custom Canvas 2D engine (RAF loop, object pools, sprite sheets) with a platform-adapter layer shipping one codebase to three platforms: iOS App Store, Apps-in-Toss, and web. Ranking, missions, and IAP run on a separate Node server.",
    techStack: ["React 19", "TypeScript", "Canvas 2D", "Capacitor", "Express", "PostgreSQL"],
    visibility: "private",
  },
  {
    name: "BUJA — Real Estate AI Analysis",
    category: "main",
    description:
      "Real-estate investment reports powered by dual AI (OpenAI + Gemini) analyzing 220k+ government transaction records in parallel. Linear-regression price forecasting, Kakao Map infrastructure analysis, news policy monitoring, and tiered IAP membership with atomic quota management.",
    techStack: ["Node.js", "Flutter", "MongoDB", "GPT-4o-mini", "Gemini", "Docker"],
    visibility: "public",
    url: "https://github.com/wankiKim/BUJA",
  },
  {
    name: "bkit — Claude Code Plugin",
    category: "main",
    description:
      "Vibecoding Kit for Claude Code. PDCA-driven workflow automation, a context-engineering architecture (skills, agents, 5-layer hooks), and an Electron GUI — an AI-native development toolkit.",
    techStack: ["JavaScript", "Claude Code", "Electron", "PDCA"],
    visibility: "public",
    url: "https://github.com/wankiKim/bkit-claude-code",
  },

  // ─── Side Projects ───
  {
    name: "Grind — WebGL Roguelike",
    category: "side",
    description:
      "Browser action roguelike focused on the rendering pipeline: custom GLSL neon-glow shaders, post-processing, object pools, O(1) swap-and-pop removal, and framerate-independent exponential decay everywhere.",
    techStack: ["TypeScript", "PixiJS 8", "GLSL", "Vite"],
    visibility: "private",
  },
  {
    name: "Wi-Fi CSI Presence Detection",
    category: "side",
    description:
      "Camera-free presence/motion detection R&D using Wi-Fi CSI signals. ESP32 firmware (ESP-IDF/C) + a z-score statistical host bridge. Privacy solved at design time with a dual track: anonymous sensing + opt-in heartbeat identification.",
    techStack: ["ESP32", "ESP-IDF", "C", "Python"],
    visibility: "private",
  },
  {
    name: "CarWatch — Used Car Price Monitor",
    category: "side",
    description:
      "Crawls used-car listings every 30 minutes and flags undervalued deals. Adaptive price comparison (year → model → trim, relaxing when samples run thin), IQR outlier removal, and built-in tax/maintenance cost math. 19k vehicles of real data collected and running.",
    techStack: ["Python", "SQLite", "launchd"],
    visibility: "private",
  },
];

export const projects = projectsKo;
export function getProjects(locale: Locale) {
  return locale === "en" ? projectsEn : projectsKo;
}
