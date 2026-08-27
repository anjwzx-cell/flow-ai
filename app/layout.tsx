import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Flow AI - Your Business, on Autopilot",
  description: "Empower small businesses and solopreneurs to automate lead generation and workflows with AI-powered automation. Streamline operations, capture leads, and boost conversions effortlessly.",
  keywords: ["AI automation", "workflow automation", "lead generation", "small business automation", "AI assistant"],
  openGraph: {
    title: "Flow AI - Your Business, on Autopilot",
    description: "Empower small businesses and solopreneurs to automate lead generation and workflows with AI-powered automation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow AI - Your Business, on Autopilot",
    description: "Empower small businesses and solopreneurs to automate lead generation and workflows with AI-powered automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
