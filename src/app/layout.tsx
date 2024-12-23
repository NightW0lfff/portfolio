import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Long Nguyen | Software Engineer Portfolio",
  description:
    "Explore Long Nguyen's portfolio showcasing expertise in software engineering, web development, and innovative tech solutions. Let's build something great together.",
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
  // authors: "Long Nguyen",
  // robots: "index, follow",
  // openGraph: {
  //   title: "Long Nguyen | Software Engineer Portfolio",
  //   description: "Showcasing Long Nguyen's skills in software engineering and web development with projects demonstrating modern tech and design expertise.",
  //   url: "https://longnguyen.tech",
  //   type: "website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
