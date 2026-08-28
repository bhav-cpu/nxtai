import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "nxtai.co.in — AI Automation Agency",
  description:
    "Automate your entire business pipeline from leads to closing with multi-agent AI systems. We build autonomous AI that drives revenue.",
  keywords: [
    "AI automation",
    "multi-agent systems",
    "lead generation",
    "AI agency",
    "business automation",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
