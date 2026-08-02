import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Ahmad — AI/ML Engineer & Python Developer",
  description:
    "Muhammad Ahmad is an AI/ML Engineer and Python Developer specializing in model training, deployment, and AI-powered software solutions. Explore projects, skills, and services.",
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Python Developer",
    "Deep Learning",
    "MLOps",
    "Model Deployment",
    "NLP",
    "Computer Vision",
  ],
  authors: [{ name: "Muhammad Ahmad" }],
  openGraph: {
    title: "Muhammad Ahmad — AI/ML Engineer & Python Developer",
    description: "Building intelligent systems that learn, scale, and solve real problems.",
    type: "website",
  },
  metadataBase: new URL("https://example.com"),
};

export const viewport = {
  themeColor: "#0a0e14",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jbMono.variable}`}>
      <body data-theme="dark" className="font-body antialiased overflow-x-hidden">
        <a
          href="#main"
          className="skip-link fixed -top-10 left-3 z-[9999] bg-blue text-white px-3.5 py-2 rounded-md text-sm transition-all"
        >
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
