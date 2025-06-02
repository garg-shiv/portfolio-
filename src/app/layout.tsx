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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: "Shivanshu Garg | Portfolio",
  description: "Hi, I'm Shivanshu Garg. A software developer specializing in building exceptional digital experiences.",
  keywords: ["Shivanshu Garg", "portfolio", "web developer","full-stack developer","competitive programmer", "nextjs", "react"],
  authors: [{ name: "Shivanshu Garg", url: "www.linkedin.com/in/garg-shiv/" }],
  openGraph: {
    title: "Shivanshu Garg | Portfolio",
    description: "Creative developer passionate about modern, accessible web apps.",
    siteName: "Shivanshu Garg's Portfolio",
    images: [
      {
        url: "/site-preview.png",
        width: 1200,
        height: 630,
        alt: "Shivanshu Garg's Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivanshu Garg's | Portfolio",
    description: "Check out my work as a web developer.",
    images: ["/site-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
