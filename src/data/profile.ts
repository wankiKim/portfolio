import { Profile } from "@/types";
import type { Locale } from "@/context/LanguageContext";

const profileData: Record<Locale, Profile> = {
  ko: {
    name: "김완기",
    nameEn: "MICHAEL KIM",
    title: "기업부설연구소 연구소장 | 18년+ 풀스택 개발자",
    headline: "펌웨어부터 클라우드까지, 제품 전체를 설계하는 개발자",
    keywords: ["레거시 → MSA 현대화", "핀테크·거래소 시스템", "IoT & 임베디드", "AI 네이티브 개발"],
    email: "jerry10247@gmail.com",
    phone: "010-6290-3724",
    location: "경기 수원시",
    github: "wankiKim",
    summary:
      "18년간 통신 서버·핀테크·블록체인 거래소를 거쳐, 지금은 무인 매장 플랫폼과 AI 에이전트를 만듭니다. 커피머신 보드 펌웨어(hex 역분석)부터 Electron 키오스크, 19모듈 MSA 백엔드, Terraform 클라우드 인프라까지 — 제품의 전 레이어를 혼자 종주할 수 있다는 것이 가장 큰 무기입니다. PHP·Django·Java 레거시를 MSA로 전환해 실운영까지 완주한 경험이 세 번 있고, Claude Code를 설계 파트너이자 코드 리뷰어로 삼아 팀 규모의 시스템을 팀보다 빠르게 만듭니다.",
  },
  en: {
    name: "MICHAEL KIM",
    nameEn: "김완기",
    title: "R&D Lab Director | 18+ Years Full-Stack Developer",
    headline: "From Firmware to Cloud — I Build the Whole Product",
    keywords: ["Legacy → MSA Modernization", "FinTech & Exchanges", "IoT & Embedded", "AI-Native Development"],
    email: "jerry10247@gmail.com",
    phone: "010-6290-3724",
    location: "Suwon, South Korea",
    github: "wankiKim",
    summary:
      "18 years across telecom servers, fintech, and crypto exchanges — now building unmanned-store platforms and AI agents. My edge is traversing every layer of a product alone: coffee-machine firmware recovered by hex reverse engineering, Electron kiosks, a 19-module MSA backend, and Terraform-managed cloud infrastructure. I've taken legacy PHP, Django, and Java systems all the way to production as microservices three times, and I work with Claude Code as a design partner and code reviewer to ship team-scale systems faster than teams.",
  },
};

export const profile = profileData.ko;
export function getProfile(locale: Locale) {
  return profileData[locale];
}
