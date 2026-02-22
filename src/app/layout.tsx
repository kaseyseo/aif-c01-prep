import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SessionHistoryProvider } from "@/context/SessionHistoryContext";
import { Header } from "@/components/layout/Header";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "AWS AI Practitioner Prep",
  description: "Ace your AWS Certified AI Practitioner exam with our mock tests and flashcards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8765514781671871" crossOrigin="anonymous"></script>
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        <SessionHistoryProvider>
          <Header />
          <main className="relative flex flex-col flex-1">
            {children}
          </main>
        </SessionHistoryProvider>
      </body>
      <GoogleAnalytics gaId="G-Q4YV7DX48P" />
    </html>
  );
}
