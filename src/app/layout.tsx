import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Provider from "./rotation/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "league of legends",
  description: "롤에 기본적인 정보를 제공하는 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-700">
          <nav className="container mx-auto flex justify-between px-8 py-4">
            <Link href={"/"}>홈</Link>
            <Link href={"/champions"}>챔피언 목록</Link>
            <Link href={"/items"}>아이템 목록</Link>
            <Link href={"/rotation"}>챔피언 로테이션</Link>
          </nav>
        </header>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
