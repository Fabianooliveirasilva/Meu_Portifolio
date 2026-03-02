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
  metadataBase: new URL("https://my-portfolio-azure-beta-74.vercel.app"),
  title: "FABIANO OlIVEIRA SILVA | QA Engineer Freelancer",
  description:
    "QA Engineer Freelancer no Brasil especializado em testes manuais, automação E2E com Cypress, API testing e qualidade de aplicações web.",
  keywords: [
    "QA Engineer Freelancer Brasil",
    "QA Engineer",
    "Teste de Software",
    "Automação de Testes",
    "Cypress",
    "API Testing",
    "Jira",
    "Next.js",
    "Portfolio QA",
  ],
  alternates: {
    canonical: "https://my-portfolio-azure-beta-74.vercel.app",
  },
  openGraph: {
    title: "FABIANO OlIVEIRA SILVA | QA Engineer Freelancer",
    description:
      "Portfólio com foco em QA, automação de testes, API validation e qualidade de software em ambientes ágeis.",
    url: "https://my-portfolio-azure-beta-74.vercel.app",
    siteName: "FABIANO OlIVEIRA SILVA Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FABIANO OlIVEIRA SILVA | QA Engineer Freelancer",
    description:
      "QA Engineer Freelancer: testes manuais, automação E2E, API testing e qualidade de software.",
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
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "FABIANO OlIVEIRA SILVA",
    jobTitle: "QA Engineer Freelancer",
    url: "https://my-portfolio-azure-beta-74.vercel.app",
    sameAs: [
      "https://github.com/Fabianooliveirasilva",
      "https://linkedin.com/in/seu-usuario",
    ],
    knowsAbout: [
      "Manual Testing",
      "Regression Testing",
      "Exploratory Testing",
      "Cypress",
      "API Testing",
      "Jira",
      "SQL",
    ],
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <script
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            type="application/ld+json"
          />
          <ScrollProgress />
          <ThemeToggle />
          <CustomCursor />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
