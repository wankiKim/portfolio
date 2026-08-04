"use client";

import { useEffect, useState } from "react";

const LINES = [
  "$ boot --profile michael",
  "  firmware ............. ok",
  "  kiosk (electron) ..... ok",
  "  backend (msa x3) ..... ok",
  "  cloud (aws/tf) ....... ok",
  "  ai agent ............. ok",
  "  18y of shipping ...... ready",
];

export default function TerminalBoot() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= LINES.length) return;
    const line = LINES[lineIndex];
    const timer = setTimeout(
      () => {
        if (charIndex < line.length) {
          setCharIndex((c) => c + 1);
        } else {
          setLineIndex((l) => l + 1);
          setCharIndex(0);
        }
      },
      lineIndex === 0 ? 45 : 12
    );
    return () => clearTimeout(timer);
  }, [lineIndex, charIndex]);

  const done = lineIndex >= LINES.length;

  return (
    <div className="w-full max-w-sm rounded-lg border border-card-border bg-card/80 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-card-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-card-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-card-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-muted/70">
          session
        </span>
      </div>
      <pre className="min-h-[176px] px-4 py-3 font-mono text-xs leading-relaxed text-muted">
        {LINES.slice(0, lineIndex).map((l, i) => (
          <div key={i}>
            {l.startsWith("$") ? (
              <span className="text-foreground">{l}</span>
            ) : (
              <>
                {l.split("...")[0]}
                <span className="text-card-border">{l.match(/\.+/)?.[0]?.slice(0, -1) ?? ""}</span>
                <span className={l.includes("ready") ? "text-accent" : "text-green-500/80"}>
                  {l.trim().endsWith("ready") ? " ready" : " ok"}
                </span>
              </>
            )}
          </div>
        ))}
        {!done && (
          <div>
            <span className={LINES[lineIndex].startsWith("$") ? "text-foreground" : ""}>
              {LINES[lineIndex].slice(0, charIndex)}
            </span>
            <span className="type-cursor text-accent">▍</span>
          </div>
        )}
        {done && (
          <div>
            <span className="text-foreground">$ </span>
            <span className="type-cursor text-accent">▍</span>
          </div>
        )}
      </pre>
    </div>
  );
}
