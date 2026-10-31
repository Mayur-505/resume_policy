"use client";

import Link from "next/link";
import { FileCheck2, Scale, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsClient() {
  const lastUpdated = "October 31, 2026";

  const termsSections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content:
        "By accessing or using the AI Resume web application, ATS Checker services, or API endpoints, you agree to be bound by these Terms and Conditions ('Terms'). If you do not agree to these Terms, you must immediately cease accessing or using our platform and services.",
    },
    {
      id: "accounts",
      title: "2. User Accounts & Account Security",
      content:
        "To utilize certain features such as saving resumes, generating AI summaries, or exporting PDF documents, you may be required to register an account.\n\n• Account Security: You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.\n• Accurate Information: You agree to provide accurate, current, and truthful information during registration.",
    },
    {
      id: "subscriptions",
      title: "3. Subscriptions, Billing & Free Plan",
      content:
        "AI Resume is free to use with limits and supported by ads. AI Resume PRO is an optional paid subscription.\n\n• Free plan: 1 saved resume, 5 AI requests per day, and ads. Exporting a resume may require watching a short rewarded ad.\n• PRO plan: unlimited resumes and AI requests, ATS Checker, Job Match, Interview Prep, resume import, and no ads.\n• Plans & pricing: PRO is offered as a monthly or yearly subscription at the price shown in Google Play for your country before you confirm.\n• Billing: Payment is charged to your Google Play account at confirmation of purchase. Subscriptions renew automatically at the same price unless cancelled at least 24 hours before the end of the current period.\n• Cancelling: Manage or cancel in Google Play > Payments & subscriptions. Deleting the app or your account does not cancel a subscription. After cancelling, PRO remains active until the paid period ends.\n• Refunds: All purchases are processed by Google Play; refund requests are subject to Google Play's refund policy.\n• Restore: If you reinstall the app or switch devices, use Restore Purchases on the Subscription screen while signed in to the same Google account.\n• One subscription is linked to one AI Resume account at a time.",
    },
    {
      id: "ai-disclaimer",
      title: "4. AI Generated Content & Accuracy Disclaimer",
      content:
        "Our platform utilizes Artificial Intelligence (AI) and Machine Learning models to generate resume text, suggest skill improvements, and calculate estimated ATS compatibility scores.\n\n• Verification Required: AI-generated suggestions, summaries, and achievements are provided for informational and formatting purposes only. You are solely responsible for reviewing and verifying the accuracy of all career details before submitting resumes to employers.\n• No Job Guarantee: While our platform optimizes resume formatting for Applicant Tracking Systems, we do not guarantee employment, job interviews, or offer outcomes.",
    },
    {
      id: "ownership",
      title: "5. Intellectual Property & Ownership",
      content:
        "• Your Content: You retain 100% full ownership rights to all text, personal history, employment records, and documents you input into or export from AI Resume.\n• Platform Rights: AI Resume retains all rights, title, and interest in and to the platform design, software code, branding, logos, and custom template architecture.",
    },
    {
      id: "acceptable-use",
      title: "6. Acceptable Use & Conduct",
      content:
        "You agree not to use AI Resume for any unlawful or prohibited activities, including:\n\n• Submitting fraudulent or misleading employment credentials with intent to deceive employers.\n• Attempting to reverse engineer, decompile, or extract the source code of our AI resume builder or API services.\n• Engaging in automated scraping, spamming, or disrupting database performance.",
    },
    {
      id: "limitation-liability",
      title: "7. Limitation of Liability",
      content:
        "To the maximum extent permitted by applicable law, AI Resume and its affiliates shall not be liable for any indirect, incidental, consequential, or punitive damages resulting from your use of or inability to use the platform, including lost job opportunities or data loss.",
    },
    {
      id: "modifications",
      title: "8. Service Modifications & Termination",
      content:
        "We reserve the right to modify, update, or discontinue features of AI Resume at any time with or without notice. We may terminate or suspend your account if you violate these Terms or engage in fraudulent activities.",
    },
    {
      id: "contact",
      title: "9. Contact Information",
      content:
        "For any legal inquiries or questions regarding these Terms & Conditions, please contact us at:\n\nEmail: info@greewebsolutions.com\nWeb Desk: AI Resume Legal Team (Gree Web Solutions)",
    },
  ];

  return (
    <div className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Header Banner */}
      <div className="text-center space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs sm:text-sm font-semibold">
          <Scale className="h-4 sm:h-5 w-4 sm:w-5 text-indigo-600" />
          <span>Terms of Service Agreement</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
          Terms & <span className="text-gradient">Conditions</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          Effective Date: <span className="text-slate-900 font-semibold">{lastUpdated}</span>
        </p>
      </div>

      {/* Quick Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        <Card className="glass-card bg-white border-slate-200 shadow-md hover:shadow-lg transition-all">
          <CardContent className="p-6 space-y-2.5">
            <FileCheck2 className="h-6 w-6 text-indigo-600" />
            <h3 className="font-extrabold text-slate-900 text-lg">Your Content Rights</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">You retain 100% ownership of your resume content and career data.</p>
          </CardContent>
        </Card>

        <Card className="glass-card bg-white border-slate-200 shadow-md hover:shadow-lg transition-all">
          <CardContent className="p-6 space-y-2.5">
            <AlertCircle className="h-6 w-6 text-amber-600" />
            <h3 className="font-extrabold text-slate-900 text-lg">AI Accuracy Verification</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Review and verify AI-generated text before submitting to recruiters.</p>
          </CardContent>
        </Card>

        <Card className="glass-card bg-white border-slate-200 shadow-md hover:shadow-lg transition-all">
          <CardContent className="p-6 space-y-2.5">
            <Scale className="h-6 w-6 text-emerald-600" />
            <h3 className="font-extrabold text-slate-900 text-lg">Fair & Transparent</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Clear guidelines on platform usage, privacy, and account security.</p>
          </CardContent>
        </Card>
      </div>

      {/* Terms Content Body */}
      <div className="glass-card rounded-3xl p-8 sm:p-14 border border-slate-200 space-y-12 shadow-xl bg-white">
        {termsSections.map((section) => (
          <div key={section.id} id={section.id} className="space-y-4 border-b border-slate-200 pb-10 last:border-0 last:pb-0">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-indigo-600 shrink-0" /> {section.title}
            </h2>
            <div className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium whitespace-pre-line sm:pl-9">
              {section.content}
            </div>
          </div>
        ))}

        {/* Bottom Contact CTA */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-extrabold text-slate-900">Questions about our Terms of Service?</h4>
            <p className="text-sm text-slate-600 font-medium">Reach out to our support team for clarification or legal inquiries.</p>
          </div>
          <Link href="/contact">
            <Button size="lg" className="gap-2 shadow-md text-base font-bold px-6">
              Contact Support <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

