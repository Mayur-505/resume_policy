import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Resume - Build ATS-Friendly Resumes with AI",
  description:
    "Create professional, recruiter-approved resumes instantly with AI. Evaluate ATS score, generate AI summaries, and export clean PDFs.",
  keywords: [
    "AI Resume Builder",
    "ATS Checker",
    "Resume Optimization",
    "AI CV Generator",
    "Professional Resume Templates",
  ],
  icons: {
    icon: "/main-logo.png",
    shortcut: "/main-logo.png",
    apple: "/main-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" data-scroll-behavior="smooth">
      <body
        className="bg-[#f8fafc] text-slate-900 min-h-screen flex flex-col font-sans selection:bg-indigo-500/20 selection:text-indigo-900"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
