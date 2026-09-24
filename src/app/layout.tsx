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
  title: "Comainter | Issue Qualification Intelligence",
  description:
    "Comainter qualifies developer issues before they interrupt engineering teams.",
  keywords: [
    "developer support",
    "issue qualification",
    "maintainer workflow automation",
    "repository intelligence",
    "support engineering",
  ],
  openGraph: {
    title: "Comainter | Issue Qualification Intelligence",
    description:
      "Developer support infrastructure for qualifying issues, routing evidence, and reducing maintainer interruption.",
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
