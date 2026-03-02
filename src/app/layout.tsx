import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { CustomCursor } from "@/components/custom-cursor";
import { PageTransition } from "@/components/page-transition";
import { ScrollProgress } from "@/components/scroll-progress";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

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
  metadataBase: new URL("https://portfolio-futuristic.vercel.app"),
  title: "FABIANO OlIVEIRA SILVA | QA Engineer & Full-Stack Developer",
  description:
    "Portfólio moderno com experiências web premium, animações fluidas e interações 3D.",
  keywords: [
    "QA Engineer",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "Three.js",
    "Portfolio",
  ],
  openGraph: {
    title: "FABIANO OlIVEIRA SILVA | Portfolio",
    description:
      "Experiências de front-end e QA com design futurista, performance e 3D interativo.",
    url: "https://portfolio-futuristic.vercel.app",
    siteName: "FABIANO OlIVEIRA SILVA Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollProgress />
          <ThemeToggle />
          <CustomCursor />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
