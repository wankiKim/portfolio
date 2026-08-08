import type { Locale } from "@/context/LanguageContext";

export interface WritingItem {
  title: string;
  date: string;
  url: string;
  tag: string;
}

const BLOG = "https://wankikim.github.io";
// 영문 글은 /en/ 아래에 따로 있다. 영문 목록에서 한글 글로 보내지 않도록 분리.
const BLOG_EN = `${BLOG}/en`;

const writingKo: WritingItem[] = [
  {
    title: "Claude Code로 거래소 만들기(5) — 조용히 돈이 새는 곳들",
    date: "2026.08",
    url: `${BLOG}/project/exchange-consistency-deep-dive/`,
    tag: "정합성 · 분산시스템",
  },
  {
    title: "Claude Code로 거래소 만들기(4) — 내렸던 거래소를 EC2 한 대에 다시 올렸다",
    date: "2026.08",
    url: `${BLOG}/project/exchange-single-node-redeploy/`,
    tag: "AWS · 인프라",
  },
  {
    title: "Claude Code로 거래소 만들기(3) — Java를 버리고 Go+Rust로 갈아엎은 이야기",
    date: "2026.08",
    url: `${BLOG}/project/exchange-replatform-go-rust/`,
    tag: "Go · Rust · MSA",
  },
  {
    title: "views.py 14,000줄과의 이별 — Django 모놀리스를 Java 21 MSA로 옮기는 중입니다",
    date: "2026.08",
    url: `${BLOG}/project/django-to-java-msa-strangler/`,
    tag: "레거시 전환",
  },
  {
    title: "커피머신 펌웨어를 hex 역분석으로 다시 만든 이야기 — 클럭이 16MHz가 아니었다",
    date: "2026.08",
    url: `${BLOG}/project/coffee-machine-firmware-reverse-engineering/`,
    tag: "임베디드",
  },
  {
    title: "어노테이션 하나로 ERP 화면이 나온다 — 오픈소스 Erupt를 우리 플랫폼으로 고도화하기",
    date: "2026.08",
    url: `${BLOG}/project/hunikflow-lowcode-platform/`,
    tag: "플랫폼 설계",
  },
  {
    title: "AI와 함께 코드를 쓴다는 것 — 15개 프로젝트를 지나며 배운 것들",
    date: "2026.02",
    url: `${BLOG}/essay/what-i-learned-from-15-projects/`,
    tag: "에세이",
  },
];

const writingEn: WritingItem[] = [
  {
    title: "Building an Exchange with Claude Code (5) — Where the Money Quietly Leaks",
    date: "2026.08",
    url: `${BLOG_EN}/project/exchange-consistency-deep-dive/`,
    tag: "Consistency · Distributed Systems",
  },
  {
    title: "Building an Exchange with Claude Code (4) — Putting the Exchange I Took Down Back on One EC2 Box",
    date: "2026.08",
    url: `${BLOG_EN}/project/exchange-single-node-redeploy/`,
    tag: "AWS · Infrastructure",
  },
  {
    title: "Building an Exchange with Claude Code (3) — Ditching Java for Go+Rust",
    date: "2026.08",
    url: `${BLOG_EN}/project/exchange-replatform-go-rust/`,
    tag: "Go · Rust · MSA",
  },
  {
    title: "Farewell to a 14,000-line views.py — Migrating a Django Monolith to Java 21 MSA",
    date: "2026.08",
    url: `${BLOG_EN}/project/django-to-java-msa-strangler/`,
    tag: "Legacy Migration",
  },
  {
    title: "Rebuilding Coffee-Machine Firmware from Hex — The Clock Wasn't 16MHz",
    date: "2026.08",
    url: `${BLOG_EN}/project/coffee-machine-firmware-reverse-engineering/`,
    tag: "Embedded",
  },
  {
    title: "One Annotation, a Full ERP Screen — Extending Open-Source Erupt into Our Platform",
    date: "2026.08",
    url: `${BLOG_EN}/project/hunikflow-lowcode-platform/`,
    tag: "Platform Design",
  },
  {
    title: "Writing Code with AI — Lessons from 15 Projects",
    date: "2026.02",
    url: `${BLOG_EN}/essay/what-i-learned-from-15-projects/`,
    tag: "Essay",
  },
];

export function getWriting(locale: Locale) {
  return locale === "en" ? writingEn : writingKo;
}
