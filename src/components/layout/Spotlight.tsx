"use client";

import { useEffect, useState } from "react";

export default function Spotlight() {
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 hidden transition duration-300 lg:block"
      style={{
        background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(45, 212, 191, 0.05), transparent 80%)`,
      }}
    />
  );
}
