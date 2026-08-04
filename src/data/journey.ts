import { JourneyPhase } from "@/types";
import type { Locale } from "@/context/LanguageContext";

const journeyKo: JourneyPhase[] = [
  { phase: 1, title: "기초를 다지다", period: "2006 ~ 2013", icon: "Code", description: "통신 서버, PKI 보안 프로토콜, 게임 서버까지 — C/C++과 Java로 시스템의 뼈대를 만들던 시절. 로우레벨에서 시작해 네트워크·DB·서버 운영의 견고한 기초를 쌓았습니다.", highlights: ["TCP/IP 통신 서버 개발", "PKI 보안 프로토콜", "MFC 임베디드 개발", "게임 서버 & GM 툴"] },
  { phase: 2, title: "글로벌로 나아가다", period: "2016 ~ 2020", icon: "Globe", description: "인도네시아 결제 시스템 연동, 키오스크 서버 개발, 블록체인 토큰 개발 — 해외 파견을 통해 글로벌 경험을 쌓고, 핀테크 영역으로 확장했습니다.", highlights: ["인도네시아 PG사 결제 연동", "ERC20 & 스텔라 토큰 개발", "Flutter 크로스플랫폼 앱", "해외 파견 근무"] },
  { phase: 3, title: "깊이를 더하다", period: "2020 ~ 2024", icon: "Layers", description: "암호화폐 거래소를 설계하고 운영하며 MSA, 보안 인증, 대규모 시스템 아키텍처를 체득. ISMS-P 인증 대응과 우즈베키스탄 은행·정부 연동으로 금융 시스템 전문성을 입증했습니다.", highlights: ["코인 거래소 풀 사이클 개발·운영", "Spring Cloud MSA 아키텍처", "ISMS-P 보안 인증 대응", "우즈베키스탄 은행·정부(One ID) 연동"] },
  { phase: 4, title: "AI 네이티브로 확장하다", period: "2025 ~ 현재", icon: "Sparkles", description: "연구소장으로서 무인카페 플랫폼을 펌웨어부터 클라우드까지 수직 통합하고, 레거시 시스템의 MSA 전환을 이끌며, Claude Code 중심의 AI 네이티브 개발로 팀 규모의 결과물을 만들어냅니다.", highlights: ["무인카페 플랫폼 수직 통합 (펌웨어→클라우드)", "레거시 → MSA 전환 3회 완주", "로우코드 플랫폼 HunikFlow 설계", "Claude Code 기반 AI 네이티브 개발"] },
];

const journeyEn: JourneyPhase[] = [
  { phase: 1, title: "Building the Foundation", period: "2006 ~ 2013", icon: "Code", description: "Telecom servers, PKI security protocols, game servers — building system backbones with C/C++ and Java. Starting low-level to lay rock-solid foundations in networking, databases, and server operations.", highlights: ["TCP/IP server development", "PKI security protocols", "MFC embedded development", "Game servers & GM tools"] },
  { phase: 2, title: "Going Global", period: "2016 ~ 2020", icon: "Globe", description: "Indonesian payment integrations, kiosk servers, blockchain tokens — gaining global experience through overseas assignments and expanding into fintech.", highlights: ["Indonesia PG payment integration", "ERC20 & Stellar token development", "Flutter cross-platform apps", "Overseas assignments"] },
  { phase: 3, title: "Deepening Expertise", period: "2020 ~ 2024", icon: "Layers", description: "Designed and operated crypto exchanges, mastering MSA, security certification, and large-scale architecture. Proven financial-systems expertise through ISMS-P certification and Uzbekistan bank/government integrations.", highlights: ["Full-cycle exchange development & ops", "Spring Cloud MSA architecture", "ISMS-P security certification", "Uzbekistan bank & gov (One ID) integration"] },
  { phase: 4, title: "Expanding AI-Native", period: "2025 ~ Present", icon: "Sparkles", description: "As R&D Lab Director: vertically integrating an unmanned-café platform from firmware to cloud, leading legacy-to-MSA conversions, and delivering team-scale output through Claude Code–centered AI-native development.", highlights: ["Unmanned-café platform, firmware to cloud", "Three legacy → MSA conversions shipped", "HunikFlow low-code platform design", "AI-native development with Claude Code"] },
];

export const journeyPhases = journeyKo;
export function getJourney(locale: Locale) {
  return locale === "en" ? journeyEn : journeyKo;
}
