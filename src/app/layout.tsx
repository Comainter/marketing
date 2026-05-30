import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Comainter",
  description:
    "Comainter answers developer questions from your logs, docs, codebase, and knowledge graph.",
  keywords: [
    "developer support",
    "github support automation",
    "slack support automation",
    "knowledge graph",
    "repository intelligence",
  ],
  openGraph: {
    title: "Comainter | Answers for Developer Questions",
    description:
      "Answer GitHub and Slack questions from logs, docs, codebase context, and a repository knowledge graph.",
    siteName: "Comainter",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <body>{children}</body>
    </html>
  );
}
