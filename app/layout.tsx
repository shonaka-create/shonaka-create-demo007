import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "社会福祉法人 三恵会",
    template: "%s | 社会福祉法人 三恵会",
  },
  description:
    "埼玉県さいたま市西区で特別養護老人ホーム・デイサービス・地域包括支援センターなどを運営する社会福祉法人 三恵会の公式サイトです。",
  keywords: [
    "三恵会",
    "社会福祉法人",
    "特別養護老人ホーム",
    "三恵苑",
    "ひかわ",
    "富士見園",
    "さいたま市",
    "介護",
    "デイサービス",
    "地域包括支援センター",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bg text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
