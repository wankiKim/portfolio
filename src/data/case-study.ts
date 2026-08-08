import type { Locale } from "@/context/LanguageContext";

export interface CaseDiagram {
  id: string;
  label: string;
  caption: string;
  src: string;
}

export interface CaseFinding {
  title: string;
  body: string;
}

export interface CaseStudy {
  name: string;
  tagline: string;
  summary: string;
  stats: { value: string; label: string }[];
  diagrams: CaseDiagram[];
  findings: CaseFinding[];
  liveUrl: string;
  blogUrl: string;
  techStack: string[];
}

const DIAGRAMS = {
  deploy: "/diagrams/kocoinex-deploy.html",
  settle: "/diagrams/kocoinex-settle.html",
  market: "/diagrams/kocoinex-market.html",
};

const ko: CaseStudy = {
  name: "KoCoinEx",
  tagline: "현물 · 선물 · OTC 를 갖춘 암호화폐 거래소",
  summary:
    "레거시 Java/Spring 거래소를 Go 13개 서비스 + Rust 매칭 엔진 2개로 재플랫폼하고, 지금은 EC2 한 대 위 컨테이너 21개로 라이브 운영합니다. 아래 구조도는 실제 배포된 코드를 근거로 그렸습니다.",
  stats: [
    { value: "57k", label: "Go + Rust 코드 줄 수" },
    { value: "21", label: "라이브 컨테이너" },
    { value: "102", label: "MySQL 표" },
    { value: "0.004%", label: "잡아낸 체결 유실률" },
  ],
  diagrams: [
    {
      id: "deploy",
      label: "배포 구성",
      caption:
        "CloudFront 3개가 원본 이름으로 갈라지고, Caddy 가 연결 단계에서 앱을 구분한다. 관리형 DB·Kafka 없이 한 대 안에서 전부 돈다.",
      src: DIAGRAMS.deploy,
    },
    {
      id: "settle",
      label: "주문 → 체결 → 정산",
      caption:
        "정산이 놓친 체결을 어떻게 되찾는지까지 담았다. 같은 체결을 두 소비자가 따로 받아 두면 차집합이 곧 유실분이 된다.",
      src: DIAGRAMS.settle,
    },
    {
      id: "market",
      label: "시세 파이프라인",
      caption:
        "체결이 원장에 적히고 봉으로 집계되어 차트에 닿기까지. 저장된 봉에 아직 집계되지 않은 꼬리를 얹어야 '지금' 까지 이어진다.",
      src: DIAGRAMS.market,
    },
  ],
  findings: [
    {
      title: "체결마다 트랜잭션을 열면 따라잡지 못한다",
      body: "커밋의 디스크 동기화는 건수에 정비례합니다. 실측 파티션당 초당 30건인데 봇이 만드는 체결은 초당 39건이라 격차가 계속 벌어졌고, 그 줄 뒤에 선 이용자 주문은 몇 시간 뒤에야 반영됐습니다. 심볼로 묶어 200건 또는 200ms 단위로 처리하도록 바꿨습니다.",
    },
    {
      title: "오프셋은 '처리했는가' 가 아니라 '꺼냈는가' 로 전진한다",
      body: "자동 커밋이 5초 타이머로 도는 동안 큐와 묶음에 앉아 있던 체결은 프로세스가 죽으면 영영 오지 않습니다. 2시간 214,482건 중 8건이 그렇게 사라졌고, 사라진 시각은 컨테이너 재시작 시점에 뭉쳐 있었습니다.",
    },
    {
      title: "오더북은 메모리에만 있다",
      body: "엔진이 죽으면 오더북은 통째로 사라지는데 DB 주문은 '거래중' 으로 남아 어느 오더북에도 없는 유령이 됩니다. 재기동 80분 뒤 미체결의 94~98% 가 재기동 이전 것이었습니다. 기동할 때 미체결을 오더북으로 되돌리도록 고쳤습니다.",
    },
    {
      title: "원인을 못 찾아도 돈을 묶어둘 수는 없다",
      body: "다 체결됐는데 닫히지 않은 주문이 남습니다. 원인 하나는 찾아 고쳤고 나머지는 아직 못 찾았습니다. 대신 '더 채울 수 없는 주문' 만 골라 유예를 두고 거둡니다. 한 건이라도 거두면 위쪽에 버그가 남아 있다는 뜻이라 반드시 기록합니다.",
    },
  ],
  liveUrl: "https://exchange.agentmichael.me",
  blogUrl: "https://wankikim.github.io/project/exchange-consistency-deep-dive/",
  techStack: ["Go 1.23", "Rust", "Kafka", "Next.js 16", "MySQL", "Redis", "Docker", "Terraform"],
};

const en: CaseStudy = {
  name: "KoCoinEx",
  tagline: "A crypto exchange with spot, futures, and OTC",
  summary:
    "Re-platformed a legacy Java/Spring exchange into 13 Go services + 2 Rust matching engines; it now runs live in 21 containers on a single EC2 box. The diagrams below were drawn from the deployed code.",
  stats: [
    { value: "57k", label: "lines of Go + Rust" },
    { value: "21", label: "live containers" },
    { value: "102", label: "MySQL tables" },
    { value: "0.004%", label: "trade loss rate caught" },
  ],
  diagrams: [
    {
      id: "deploy",
      label: "Deployment",
      caption:
        "Three CloudFront distributions split by origin hostname, and Caddy tells the apps apart at connection time. No managed DB or Kafka — it all runs inside one box.",
      src: DIAGRAMS.deploy,
    },
    {
      id: "settle",
      label: "Order → match → settle",
      caption:
        "Including how settlement recovers trades it lost. Two consumers read the same trades, so the difference between them is exactly what went missing.",
      src: DIAGRAMS.settle,
    },
    {
      id: "market",
      label: "Market data pipeline",
      caption:
        "From a trade landing in the ledger to a candle reaching the chart. Stored candles need a freshly computed tail to reach 'now'.",
      src: DIAGRAMS.market,
    },
  ],
  findings: [
    {
      title: "One transaction per trade never catches up",
      body: "A commit's disk sync cost scales with the number of commits. Measured throughput was ~30 trades/sec per partition while the bots produced 39/sec, so the gap widened continuously and user orders queued behind them landed hours late. Batching by symbol — 200 trades or 200ms — closed it.",
    },
    {
      title: "Offsets advance on 'read', not on 'processed'",
      body: "With auto-commit on a 5-second timer, trades sitting in the lane queue and settlement batch simply never arrive if the process dies. 8 of 214,482 trades vanished over two hours, clustered exactly at container restarts.",
    },
    {
      title: "The order book lives only in memory",
      body: "When the engine dies the book vanishes, but the DB orders stay marked 'open' — ghosts belonging to no book. 80 minutes after a restart, 94–98% of open orders predated it. Startup now restores open orders back into the book.",
    },
    {
      title: "You can't leave money frozen just because you haven't found the cause",
      body: "Some fully-filled orders never close. I found and fixed one cause; the rest is still unexplained. So a sweeper closes only orders that can't be filled further, after a grace period — and logs every one, because a single sweep means the bug upstream is still there.",
    },
  ],
  liveUrl: "https://exchange.agentmichael.me",
  blogUrl: "https://wankikim.github.io/en/project/exchange-consistency-deep-dive/",
  techStack: ["Go 1.23", "Rust", "Kafka", "Next.js 16", "MySQL", "Redis", "Docker", "Terraform"],
};

export function getCaseStudy(locale: Locale): CaseStudy {
  return locale === "en" ? en : ko;
}
