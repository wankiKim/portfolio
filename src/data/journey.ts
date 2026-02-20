import { JourneyPhase } from "@/types";
import type { Locale } from "@/context/LanguageContext";

const journeyKo: JourneyPhase[] = [
  { phase: 1, title: "기초를 다지다", period: "2006 ~ 2013", icon: "Code", description: "통신 서버, 보안 프로토콜, 게임 서버까지 — C/C++과 Java로 시스템의 뼈대를 만들던 시절. 로우레벨부터 시작해 견고한 기초를 쌓았습니다.", highlights: ["TCP/IP 통신 서버 개발", "PKI 보안 프로토콜", "MFC 임베디드 개발", "게임 서버 & GM 툴"] },
  { phase: 2, title: "글로벌로 나아가다", period: "2016 ~ 2020", icon: "Globe", description: "인도네시아 결제 시스템 연동, 키오스크 서버 개발, 블록체인 토큰 개발 — 해외 파견을 통해 글로벌 경험을 쌓고, 핀테크 영역으로 확장했습니다.", highlights: ["인도네시아 PG사 연동", "ERC20 & 스텔라 토큰 개발", "Flutter 크로스플랫폼 앱", "해외 파견 근무"] },
  { phase: 3, title: "깊이를 더하다", period: "2020 ~ 2024", icon: "Layers", description: "암호화폐 거래소를 설계하고 운영하며 MSA, 보안 인증, 대규모 시스템 아키텍처를 경험. ISMS-P 인증과 글로벌 결제 연동으로 전문성을 입증했습니다.", highlights: ["코인 거래소 풀 사이클 개발", "Spring Cloud MSA 아키텍처", "ISMS-P 보안 인증 대응", "우즈베키스탄 은행·정부 연동"] },
  { phase: 4, title: "AI 시대를 이끌다", period: "2025 ~ 현재", icon: "Sparkles", description: "AI Agent 개발, Claude Code 활용 개발 생산성 혁신, MSA 기반 ERP 설계 — 기술 리더로서 AI 네이티브 개발을 실천하고 있습니다.", highlights: ["CS 응대 AI Agent 설계·구현", "Claude Code 기반 AI 네이티브 개발", "무인 머신 (Electron + React)", "연구소장으로서 기술 전략 수립"] },
];

const journeyEn: JourneyPhase[] = [
  { phase: 1, title: "Building the Foundation", period: "2006 ~ 2013", icon: "Code", description: "From telecom servers to security protocols to game servers — building system backbones with C/C++ and Java. Starting from low-level to establish a rock-solid foundation.", highlights: ["TCP/IP server development", "PKI security protocols", "MFC embedded development", "Game server & GM tools"] },
  { phase: 2, title: "Going Global", period: "2016 ~ 2020", icon: "Globe", description: "Indonesia payment integration, kiosk servers, blockchain tokens — gained global experience through overseas deployment and expanded into FinTech.", highlights: ["Indonesia PG integration", "ERC20 & Stellar token dev", "Flutter cross-platform apps", "Overseas deployment"] },
  { phase: 3, title: "Deepening Expertise", period: "2020 ~ 2024", icon: "Layers", description: "Designed and operated crypto exchanges, mastering MSA, security certification, and large-scale architecture. Proven through ISMS-P certification and global payment integration.", highlights: ["Full-cycle exchange dev", "Spring Cloud MSA", "ISMS-P security certification", "Uzbekistan bank/gov integration"] },
  { phase: 4, title: "Leading the AI Era", period: "2025 ~ Present", icon: "Sparkles", description: "AI Agent development, revolutionizing dev productivity with Claude Code, MSA-based ERP design — practicing AI-native development as a tech leader.", highlights: ["CS AI Agent design & build", "AI-native dev with Claude Code", "Unmanned machine (Electron + React)", "Tech strategy as Lab Director"] },
];

export const journeyPhases = journeyKo;
export function getJourney(locale: Locale) {
  return locale === "en" ? journeyEn : journeyKo;
}
