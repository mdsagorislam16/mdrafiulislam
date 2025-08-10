import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata থেকে viewport সরিয়ে দেওয়া হয়েছে
export const metadata: Metadata = {
  title: "Md Rafiul Islam | Portfolio",
  description:
    "Md Rafiul Islam's personal portfolio website showcasing projects, skills, and contact information.",
  keywords: [
    "portfolio",
    "developer",
    "Md Rafiul Islam",
    "web development",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Md Rafiul Islam" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Md Rafiul Islam | Portfolio",
    description:
      "Welcome to Md Rafiul Islam's portfolio. Discover projects, skills, and contact details.",
    url: "",
    siteName: "Md Rafiul Islam Portfolio",
    locale: "en_US",
    type: "website",
  },
};

// এখানে viewport আলাদা ফাংশনে দেয়া হয়েছে
export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-gray-900`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
