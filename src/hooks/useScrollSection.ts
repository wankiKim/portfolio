"use client";

import { useState, useEffect } from "react";

const SECTIONS = [
  "hero",
  "about",
  "journey",
  "capabilities",
  "skills",
  "projects",
  "contact",
];

export function useScrollSection() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return { activeSection, sections: SECTIONS };
}
