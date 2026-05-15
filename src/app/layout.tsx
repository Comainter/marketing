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
    "Comainter validates, debugs, and qualifies developer issues before maintainers ever see them.",
  keywords: [
    "issue qualification",
    "developer support infrastructure",
    "maintainer workflow automation",
    "repository intelligence",
    "developer ecosystem intelligence",
  ],
  openGraph: {
    title: "Comainter | Issue Qualification Intelligence",
    description:
      "Ensure only actionable issues reach engineering teams with repository-aware support intelligence.",
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
