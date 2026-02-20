import type { Locale } from "@/context/LanguageContext";

const ui = {
  ko: {
    // Hero
    heroBtn1: "더 알아보기",
    heroBtn2: "연락하기",
    // About
    aboutSub: "경력 타임라인",
    aboutFold: "접기",
    aboutMore: (n: number) => `+ ${n}개 더보기`,
    // Journey
    journeySub: "18년, 4단계의 성장 이야기",
    // Capabilities
    capSub: "핵심 역량",
    // Skills
    skillSub: "기술 스택",
    // AI Workflow
    aiSub: "18년의 엔터프라이즈 경험 + AI 페어 프로그래밍. 혼자서도 팀 규모의 시스템을 설계하고, 팀보다 빠르게 배포합니다.",
    aiWorkflow: "워크플로우",
    aiCases: "실전 사례",
    aiCta1: '"10명이 3개월 걸릴 일을, 1명이 3주 만에 끝낸다"',
    aiCta2: "18년 아키텍처 경험 + Claude Code = 엔터프라이즈급 1인 개발의 새로운 기준",
    // Projects
    projSub: "프로젝트",
    // Contact
    contactSub: "함께 일하거나, 기술에 대해 이야기하고 싶으시다면 연락해주세요.",
    contactQuote: "불가능은 없다 — 무언가 훌륭한 일을 시도하다가 실패하기를 원합니다.",
    // Footer
    footerCopy: "김완기",
  },
  en: {
    heroBtn1: "Learn More",
    heroBtn2: "Contact",
    aboutSub: "Career Timeline",
    aboutFold: "Show Less",
    aboutMore: (n: number) => `+ ${n} more`,
    journeySub: "18 Years, 4 Phases of Growth",
    capSub: "Core Competencies",
    skillSub: "Tech Stack",
    aiSub: "18 years of enterprise experience + AI pair programming. I design team-scale systems solo and deploy faster than teams.",
    aiWorkflow: "Workflow",
    aiCases: "Case Studies",
    aiCta1: '"What takes a team of 10 three months, I finish alone in 3 weeks"',
    aiCta2: "18 years of architecture experience + Claude Code = A new standard for solo enterprise development",
    projSub: "Projects",
    contactSub: "Want to work together or talk about tech? Get in touch.",
    contactQuote: "Nothing is impossible — I'd rather fail at attempting something great.",
    footerCopy: "MICHAEL KIM",
  },
} as const;

export function t(locale: Locale) {
  return ui[locale];
}
