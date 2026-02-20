import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "김완기 | 풀스택 개발자 포트폴리오",
  description:
    "18년+ 경력의 풀스택 개발자 김완기입니다. MSA 아키텍처, 핀테크, AI Agent 개발 전문.",
  keywords: [
    "김완기",
    "풀스택 개발자",
    "MSA",
    "Spring Boot",
    "AI Agent",
    "포트폴리오",
  ],
  openGraph: {
    title: "김완기 | 풀스택 개발자 포트폴리오",
    description:
      "18년+ 경력의 풀스택 개발자. MSA 아키텍처, 핀테크, AI Agent 개발.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
