"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Locale = "ko" | "en";

interface LanguageContextType {
  locale: Locale;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "ko",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ko");
  const toggle = () => setLocale((prev) => (prev === "ko" ? "en" : "ko"));

  return (
    <LanguageContext.Provider value={{ locale, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
