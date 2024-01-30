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

export async function generateMetadata(): Promise<Metadata> {
  const title = "정미량, 박범영 결혼합니다";
  const description = "24년 3월 30일 11시 30분, 포항 UA컨벤션 5층 메리골드홀";
  const images = "https://r2.wedding.beomyeong.miryang.dev/main.png";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
      locale: "ko_KR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
    other: {
      ["twitter:label1"]: "날짜",
      ["twitter:data1"]: "2024.03.30 11:30",
      ["twitter:label2"]: "장소",
      ["twitter:data2"]: "포항 UA컨벤션 5층 메리골드홀",
    },
  };
}
