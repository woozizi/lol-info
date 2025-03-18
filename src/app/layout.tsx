import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Provider from "./rotation/provider";
import { ThemeProvider } from "next-themes";
import DarkMode from "@/components/DarkMode";

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
      <body
        className={`bg-white text-black dark:bg-black dark:text-white ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <header className="bg-gray-100 dark:bg-gray-700">
            <nav className="container mx-auto flex items-center justify-between px-8 py-4 sm:px-1 sm:py-2">
              <Link href={"/"}>홈</Link>
              <div className="flex items-center justify-center space-x-8">
                <Link href={"/champions"}>챔피언 목록</Link>
                <Link href={"/items"}>아이템 목록</Link>
                <Link href={"/rotation"}>챔피언 로테이션</Link>
                <DarkMode />
              </div>
            </nav>
          </header>

          <Provider>{children}</Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
