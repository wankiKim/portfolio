import type { Locale } from "@/context/LanguageContext";

const ui = {
  ko: {
    // Nav
    navProjects: "프로젝트",
    navExperience: "경력",
    navAbout: "소개",
    navWriting: "블로그",
    navContact: "연락하기",
    // Hero
    heroPill: "새로운 기회에 열려 있습니다",
    heroLine1: "화면부터",
    heroLine2: "펌웨어까지,",
    heroLine3accent: "전부",
    heroLine3rest: " 만듭니다.",
    heroPara:
      "실제로 쓰이는 소프트웨어를 만들고, 그것이 도는 시스템의 밑바닥까지 이해합니다. 레거시 MSA 전환 3회 완주, 거래소 매칭 엔진, 커피머신 펌웨어 역분석 — 스택에서 가장 어려운 문제를 주시면, 끝까지 책임지고 풀어냅니다.",
    heroCta1: "프로젝트 보기",
    heroCta2: "블로그",
    // Projects
    projLabel: "SELECTED WORK",
    projTitle: "실제로 쓰이는 것들.",
    projMoreLabel: "MORE PROJECTS",
    projMoreTitle: "그 외에 만든 것들.",
    projSideTitle: "사이드 프로젝트",
    // About (What I do)
    aboutLabel: "WHAT I DO",
    aboutTitle: "한 사람이, 전 레이어를.",
    // Experience
    expLabel: "WORK",
    expTitle: "18년의 경로.",
    // AI Workflow
    aiLabel: "HOW I WORK",
    aiTitle: "AI와 함께, 팀의 속도로.",
    aiSub: "18년의 엔터프라이즈 경험 + AI 페어 프로그래밍. 혼자서도 팀 규모의 시스템을 설계하고, 팀보다 빠르게 배포합니다.",
    aiLive: "라이브 데모",
    aiBlog: "개발기",
    // Writing
    writingLabel: "WRITING",
    writingTitle: "만들면서 배운 것들.",
    writingAll: "블로그 전체 보기",
    // Contact
    contactTitle: "만들 가치가 있는 일이 있나요?",
    contactSub: "레거시 전환부터 신규 플랫폼까지 — 어려운 문제일수록 좋습니다.",
    contactBtn: "연락하기",
    contactQuote: "불가능은 없다 — 무언가 훌륭한 일을 시도하다가 실패하기를 원합니다.",
    // Footer
    footerCopy: "김완기",
    footerNote: "Next.js · Tailwind CSS · AWS 위에서, Claude Code와 함께 만들었습니다.",
  },
  en: {
    navProjects: "Projects",
    navExperience: "Work",
    navAbout: "About",
    navWriting: "Writing",
    navContact: "Get in touch",
    heroPill: "Open to new opportunities",
    heroLine1: "From the screen",
    heroLine2: "to the firmware,",
    heroLine3accent: "I build it all",
    heroLine3rest: ".",
    heroPara:
      "I build software people actually use, and I understand it the whole way down. Three legacy-to-MSA conversions shipped, an exchange matching engine, coffee-machine firmware recovered by reverse engineering — give me the hardest problem in your stack, and I'll own it end to end.",
    heroCta1: "See the work",
    heroCta2: "Writing",
    projLabel: "SELECTED WORK",
    projTitle: "Things actually in production.",
    projMoreLabel: "MORE PROJECTS",
    projMoreTitle: "More things I've built.",
    projSideTitle: "Side Projects",
    aboutLabel: "WHAT I DO",
    aboutTitle: "One person, every layer.",
    expLabel: "WORK",
    expTitle: "18 years of shipping.",
    aiLabel: "HOW I WORK",
    aiTitle: "With AI, at team speed.",
    aiSub: "18 years of enterprise experience + AI pair programming. I design team-scale systems solo and deploy faster than teams.",
    aiLive: "Live Demo",
    aiBlog: "Dev Log",
    writingLabel: "WRITING",
    writingTitle: "Notes from the workshop.",
    writingAll: "View all posts",
    contactTitle: "Have something worth building?",
    contactSub: "From legacy migrations to new platforms — the harder the problem, the better.",
    contactBtn: "Get in touch",
    contactQuote: "Nothing is impossible — I'd rather fail at attempting something great.",
    footerCopy: "MICHAEL KIM",
    footerNote: "Built with Next.js, Tailwind CSS & AWS — together with Claude Code.",
  },
} as const;

export function t(locale: Locale) {
  return ui[locale];
}
