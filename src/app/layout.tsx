import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Analytics } from "@vercel/analytics/react";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Long Nguyen - Software Developer Portfolio",
  description:
    "Explore the portfolio of Long Nguyen, a proficient software developer specializing in creating seamless digital experiences with modern technologies.",
  keywords: [
    "Long Nguyen",
    "Software Engineer",
    "Portfolio",
    "Web Developer",
    "Tech Projects",
    "Frontend Developer",
    "Full Stack Development",
    "Tailwind CSS",
    "Next.js",
    "JavaScript Developer",
  ],
  authors: { name: "Long Nguyen" },
  robots: "index, follow",
  openGraph: {
    title: "Long Nguyen - Software Developer Portfolio",
    description:
      "Explore the portfolio of Long Nguyen, a proficient software developer specializing in creating seamless digital experiences with modern technologies.",
    url: "https://longnguyen.tech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  );
}
