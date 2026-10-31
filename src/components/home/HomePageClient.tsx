"use client";

import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  ArrowRight,
  Layers,
  Bot,
  Download,
  Award,
  TrendingUp,
  FileText,
  Wand2,
  Trophy,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePageClient() {
  const features = [
    {
      icon: Bot,
      title: "AI Power Resume Builder",
      description:
        "Instant bullet-point optimization & summaries customized for your target job title using AI.",
    },
    {
      icon: FileCheck,
      title: "Real-Time ATS Checker",
      description:
        "Get instant compatibility score against hiring software (ATS) with actionable keyword gap analysis.",
    },
    {
      icon: Layers,
      title: "Recruiter-Approved Templates",
      description:
        "Clean, typography-focused modern designs created to pass screening algorithms and impress recruiters.",
    },
    {
      icon: Download,
      title: "Clean PDF & DOCX Export",
      description:
        "Pixel-perfect export without broken fonts or weird missing-glyph boxes. Guaranteed standard compliance.",
    },
  ];

  const templates = [
    {
      name: "Minimalist Slate",
      category: "Clean & Modern",
      tag: "Popular",
      badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
      topBar: "from-indigo-600 via-indigo-500 to-purple-600",
      icon: FileText,
      description: "Sleek single-column layout optimized for Tech, Product & Engineering roles.",
    },
    {
      name: "Corporate Brief",
      category: "Executive",
      tag: "Recruiter Choice",
      badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
      topBar: "from-purple-600 via-purple-500 to-pink-600",
      icon: Briefcase,
      description: "Structured two-column architecture tailored for Management, Sales & Finance.",
    },
    {
      name: "Creative Accent",
      category: "Design & Media",
      tag: "Stylish",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      topBar: "from-emerald-600 via-teal-500 to-cyan-600",
      icon: Layers,
      description: "Vibrant accent headers designed specifically for Designers, Marketers & Creators.",
    },
  ];

  const steps = [
    {
      step: "01",
      icon: FileText,
      title: "Enter Information or Import PDF",
      description:
        "Type your complete work experience manually or import an existing PDF/DOCX resume file in seconds. Our smart system accurately organizes your personal details, education history, and key career skills automatically.",
    },
    {
      step: "02",
      icon: Wand2,
      title: "AI Instant ATS Optimization",
      description:
        "Our intelligent AI engine evaluates your resume content against modern recruiter algorithms. It automatically enhances action verbs, optimizes keyword density for target roles, and fixes formatting errors instantly.",
    },
    {
      step: "03",
      icon: Trophy,
      title: "Download & Land Interviews",
      description:
        "Export pixel-perfect, recruiter-approved PDF resumes ready to submit to top employers worldwide. Increase your interview callbacks by 3x and accelerate your job application success effortlessly and for free.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-blue-500/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold tracking-wide backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-indigo-600 animate-pulse" />
            <span>AI-Powered Resume & ATS Checker Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Craft Recruiter-Ready Resumes in <span className="text-gradient">Minutes with AI</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Beat Applicant Tracking Systems (ATS), boost your resume score to 90+, and get 3x more interview callbacks.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://play.google.com/store/apps/details?id=com.ai_resume.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base gap-2 font-bold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg transition-all"
            >
              Build My AI Resume Now <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base gap-2 font-semibold rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition-all bg-white shadow-sm"
            >
              <FileCheck className="h-5 w-5 text-indigo-600" /> Contact Support
            </Link>
          </div>

          {/* Social Proof Badges */}
          <div className="pt-8 flex items-center justify-center gap-8 text-xs text-slate-600 border-t border-slate-200 max-w-lg mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" /> 100% Free Templates
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-indigo-600" /> No Credit Card Required
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-amber-600" /> ATS Guaranteed
            </div>
          </div>
        </div>

        {/* Floating ATS Score Mockup Card */}
        <div className="mt-16 max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 glow-purple shadow-xl relative bg-white/95">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Left Score Gauge */}
            <div className="flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-slate-50 via-indigo-50/20 to-slate-50/80 rounded-2xl border border-slate-200/90 shadow-sm relative overflow-hidden">
              {/* Subtle ambient glow behind circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-emerald-500/10 blur-xl pointer-events-none rounded-full" />

              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90 drop-shadow-sm" viewBox="0 0 36 36">
                  <path
                    className="text-slate-200"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-emerald-500"
                    strokeDasharray="88, 100"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-black text-slate-900 tracking-tight">88<span className="text-sm font-bold text-slate-500">/100</span></span>
                  <span className="text-[10px] text-emerald-700 font-extrabold tracking-wider bg-emerald-100/90 px-2 py-0.5 rounded-full mt-0.5 border border-emerald-300/60 uppercase">EXCELLENT</span>
                </div>
              </div>
              
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-indigo-200 text-indigo-800 text-xs font-bold shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Target: Software Engineer</span>
              </div>
            </div>

            {/* Right Detailed Analysis Breakdown */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-indigo-600" /> Live ATS Check Analysis
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                  Ready to Apply
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between text-slate-700">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Action Verbs & Achievements
                  </span>
                  <span className="font-bold text-emerald-600">95% Match</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Required Technical Skills
                  </span>
                  <span className="font-bold text-emerald-600">88% Match</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Formatting & Font Standards
                  </span>
                  <span className="font-bold text-emerald-600">100% Pass</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-600 bg-indigo-50/70 p-3 rounded-xl border border-indigo-100">
                <span className="flex items-center gap-1.5 font-bold text-indigo-900">
                  <Sparkles className="h-4 w-4 text-indigo-600" /> AI Recommendation:
                </span>
                <span>Add 2 quantified bullet points to boost score to 95+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Everything You Need to <span className="text-gradient">Get Hired Faster</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Engineered specifically to solve ATS rejection and present your qualifications with maximum impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <Card key={idx} className="glass-card hover:-translate-y-1 transition-all duration-300 bg-white border-slate-200">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                  <feat.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-100/60 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              3 Simple Steps to Your <span className="text-gradient">Perfect Resume</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, idx) => (
              <div key={idx} className="relative glass-card p-8 rounded-3xl border border-slate-200 space-y-4 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-black text-indigo-400/30 block">{item.step}</span>
                  <div className="h-12 w-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shadow-sm">
                    <item.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Proven <span className="text-gradient">Resume Templates</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Designed to impress both ATS algorithms and human recruiters across tech, business, and creative fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((tpl, idx) => (
            <Card key={idx} className="overflow-hidden group bg-white border border-slate-200/90 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
              {/* Top Accent Gradient Stripe */}
              <div className={`h-2.5 w-full bg-gradient-to-r ${tpl.topBar}`} />

              <CardContent className="p-7 space-y-6">
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-3.5 py-1.5 rounded-full font-bold border ${tpl.badgeBg}`}>
                    {tpl.tag}
                  </span>
                  <div className="h-11 w-11 rounded-2xl bg-slate-100/80 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-indigo-50 group-hover:border-indigo-200 group-hover:text-indigo-600 transition-colors">
                    <tpl.icon className="h-5.5 w-5.5" />
                  </div>
                </div>

                {/* Simulated Mini Resume Blueprint Mockup */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2.5 group-hover:bg-indigo-50/30 transition-colors">
                  <div className="flex items-center gap-2.5 border-b border-slate-200/60 pb-2">
                    <div className="h-7 w-7 rounded-full bg-slate-200 shrink-0" />
                    <div className="space-y-1 flex-1">
                      <div className="h-2.5 w-24 bg-slate-300 rounded" />
                      <div className="h-2 w-16 bg-slate-200 rounded" />
                    </div>
                  </div>
                  <div className="space-y-1.5 pt-1">
                    <div className="h-2 w-full bg-slate-200/80 rounded" />
                    <div className="h-2 w-4/5 bg-slate-200/80 rounded" />
                    <div className="h-2 w-3/5 bg-slate-200/80 rounded" />
                  </div>
                </div>

                {/* Info & Title */}
                <div className="space-y-1">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{tpl.category}</span>
                  <h4 className="text-xl font-extrabold text-slate-900">{tpl.name}</h4>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed pt-1">{tpl.description}</p>
                </div>

                {/* CTA Button */}
                <Link
                  href="https://play.google.com/store/apps/details?id=com.ai_resume.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 border border-slate-300 text-slate-800 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 font-bold transition-all shadow-sm rounded-xl text-sm mt-2"
                >
                  Use This Template <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-10 sm:p-16 md:p-19 text-center space-y-8 relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 shadow-2xl">
          {/* Decorative Glow Elements */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/20 blur-[130px] pointer-events-none rounded-full" />
          <div className="absolute -bottom-24 right-10 w-[400px] h-[300px] bg-purple-500/20 blur-[130px] pointer-events-none rounded-full" />

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-indigo-400 animate-pulse" />
            <span>Start Building Your AI Resume Today</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white max-w-3xl mx-auto leading-tight tracking-tight">
            Ready to Land Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">Dream Job?</span>
          </h2>

          {/* Description */}
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            Join thousands of job seekers who generated ATS-optimized resumes and landed interviews at top companies worldwide.
          </p>

          {/* Action Button */}
          <div className="pt-2 flex justify-center">
            <Link
              href="https://play.google.com/store/apps/details?id=com.ai_resume.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-2 sm:py-3.5 text-base sm:text-lg font-extrabold shadow-2xl bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl gap-3 transition-all hover:scale-104 border border-white/20"
            >
              Get Started Now — It's Free <ArrowRight className="h-6 w-6" />
            </Link>
          </div>

          {/* Trust & Guarantee Badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300 font-semibold border-t border-slate-800/80 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400" /> Free PDF Export
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4.5 w-4.5 text-indigo-400" /> 100% Privacy Protected
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4.5 w-4.5 text-amber-400" /> ATS Guaranteed
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
