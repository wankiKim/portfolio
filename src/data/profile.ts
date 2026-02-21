import { Profile } from "@/types";
import type { Locale } from "@/context/LanguageContext";

const profileData: Record<Locale, Profile> = {
  ko: {
    name: "김완기",
    nameEn: "MICHAEL KIM",
    title: "기업부설연구소 연구소장 | 18년+ 풀스택 개발자",
    headline: "코드로 비즈니스를 설계하는 개발자",
    keywords: ["MSA 아키텍처", "핀테크 시스템", "AI Agent 개발", "글로벌 프로젝트"],
    email: "jerry10247@gmail.com",
    phone: "010-6290-3724",
    location: "경기 수원시",
    github: "wankiKim",
    summary:
      "18년간 통신 서버부터 블록체인 거래소, AI 에이전트까지 — 기술의 변화를 직접 경험하고 이끌어온 풀스택 개발자입니다. Claude, GPT-4, Gemini 등 최신 AI를 개발 워크플로우에 깊이 통합하여, 기획부터 설계·구현·배포까지 AI와 협업하는 방식으로 15개 이상의 실전 프로젝트를 구축해왔습니다. AI를 아키텍처 설계 파트너이자 코드 리뷰어로 활용하며 엔지니어링 품질을 끌어올리는 데 집중합니다.",
  },
  en: {
    name: "MICHAEL KIM",
    nameEn: "김완기",
    title: "R&D Lab Director | 18+ Years Full-Stack Developer",
    headline: "An Engineer Who Architects Business Through Code",
    keywords: ["MSA Architecture", "FinTech Systems", "AI Agent Dev", "Global Projects"],
    email: "jerry10247@gmail.com",
    phone: "010-6290-3724",
    location: "Suwon, South Korea",
    github: "wankiKim",
    summary:
      "18 years of hands-on experience from telecom servers to blockchain exchanges and AI agents — a full-stack developer who has witnessed and led every wave of tech evolution. Deeply integrating Claude, GPT-4, and Gemini into the development workflow, I've built 15+ production projects through AI collaboration from planning to deployment. I focus on leveraging AI as an architecture design partner and code reviewer to elevate engineering quality.",
  },
};

export const profile = profileData.ko;
export function getProfile(locale: Locale) {
  return profileData[locale];
}
