import type { Locale } from "@/context/LanguageContext";

const ui = {
  ko: {
    // Nav
    navAbout: "소개",
    navExperience: "경력",
    navProjects: "프로젝트",
    navAI: "AI 워크플로우",
    navWriting: "블로그",
    // About
    aboutTitle: "소개",
    // Experience
    expTitle: "경력",
    // Projects
    projTitle: "프로젝트",
    projSub: "펌웨어부터 클라우드까지 — 실제로 만들고 운영한 것들",
    projFeatured: "대표 프로젝트",
    projMain: "프로젝트",
    projSide: "사이드 프로젝트",
    // AI Workflow
    aiTitle: "AI 워크플로우",
    aiSub: "18년의 엔터프라이즈 경험 + AI 페어 프로그래밍. 혼자서도 팀 규모의 시스템을 설계하고, 팀보다 빠르게 배포합니다.",
    aiLive: "라이브 데모",
    aiBlog: "개발기",
    // Writing
    writingTitle: "블로그",
    writingSub: "만들면서 배운 것들을 기록합니다",
    writingAll: "블로그 전체 보기",
    // Contact
    contactTitle: "연락처",
    contactSub: "함께 일하거나, 기술에 대해 이야기하고 싶으시다면 연락해주세요.",
    contactQuote: "불가능은 없다 — 무언가 훌륭한 일을 시도하다가 실패하기를 원합니다.",
    contactBtn: "메일 보내기",
    // Footer
    footerCopy: "김완기",
    footerNote: "Next.js · Tailwind CSS · AWS 위에서, Claude Code와 함께 만들었습니다.",
  },
  en: {
    navAbout: "About",
    navExperience: "Experience",
    navProjects: "Projects",
    navAI: "AI Workflow",
    navWriting: "Writing",
    aboutTitle: "About",
    expTitle: "Experience",
    projTitle: "Projects",
    projSub: "From firmware to cloud — things actually built and operated",
    projFeatured: "Featured",
    projMain: "Projects",
    projSide: "Side Projects",
    aiTitle: "AI Workflow",
    aiSub: "18 years of enterprise experience + AI pair programming. I design team-scale systems solo and deploy faster than teams.",
    aiLive: "Live Demo",
    aiBlog: "Dev Log",
    writingTitle: "Writing",
    writingSub: "Notes on things learned while building",
    writingAll: "View all posts",
    contactTitle: "Contact",
    contactSub: "Want to work together or talk about tech? Get in touch.",
    contactQuote: "Nothing is impossible — I'd rather fail at attempting something great.",
    contactBtn: "Say Hello",
    footerCopy: "MICHAEL KIM",
    footerNote: "Built with Next.js, Tailwind CSS & AWS — together with Claude Code.",
  },
} as const;

export function t(locale: Locale) {
  return ui[locale];
}
