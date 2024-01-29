import type { Metadata } from "next";
import { suit } from "./style/fonts/suit";
import "./global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={suit.className}>
      <body>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "정미량, 박범영 결혼합니다",
  description: "24년 3월 30일 11시 30분, 포항 UA컨벤션 5층 메리골드홀",
};
