"use client";

import Link from "next/link";
import { ShieldCheck, Lock, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicyClient() {
  const lastUpdated = "October 1, 2026";

  const policySections = [
    {
      id: "introduction",
      title: "1. Introduction & Overview",
      content:
        "Welcome to AI Resume ('we', 'our', or 'us'). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you access or use our AI Resume Builder web application, ATS Checker services, and related tools.",
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      content:
        "We collect personal information that you voluntarily provide to us when creating an account, generating a resume, or communicating with us. This includes: \n\n• Personal Contact Details: Name, email address, phone number, and location specified in your resume profile.\n• Career & Educational Data: Work history, job titles, achievements, skills, certifications, and educational degrees entered in the resume editor.\n• Uploaded Documents: PDF or DOCX files uploaded for parsing or ATS score calculation.\n• Technical & Usage Data: IP addresses, browser types, operating system details, and session analytics collected automatically.",
    },
    {
      id: "ai-processing",
      title: "3. How We Use Artificial Intelligence (AI)",
      content:
        "Our application integrates Artificial Intelligence (AI) technology to process your resume prompts, format summaries, and optimize bullet points. \n\n• No Training on Personal Data: Your submitted personal data, resumes, and contact details are NEVER used to train public AI models.\n• Ephemeral API Requests: AI generation requests are transmitted via secure HTTPS connections and discarded after your response is formatted.",
    },
    {
      id: "data-storage",
      title: "4. Data Storage & Security Measures",
      content:
        "We enforce industry-standard security protocols to safeguard your information: \n\n• Encrypted Storage: Saved resumes and user records are stored in secure databases utilizing TLS 1.3 encryption in transit and AES-256 encryption at rest.\n• AWS Cloud Architecture: PDF documents and templates are stored securely in isolated Amazon S3 buckets with strict access control policies.\n• Access Controls: Only authorized systems and key management services have limited access to database resources.",
    },
    {
      id: "sharing",
      title: "5. Information Sharing & Third Parties",
      content:
        "We do NOT sell, rent, or trade your personal information to third-party advertisers or recruitment agencies. We only share data with trusted infrastructure service providers (e.g. cloud host, database cluster) required to deliver our core application functionality under strict confidentiality terms.",
    },
    {
      id: "user-rights",
      title: "6. Your Rights & Data Deletion",
      content:
        "You retain complete ownership over your resume data. You have the right to:\n\n• Access & Export: Download or view all stored resume data at any time.\n• Edit & Modify: Update or correct your resume fields directly from your user dashboard.\n• Permanent Account Deletion: Request the complete, permanent deletion of your account and all associated resumes by contacting info@greewebsolutions.com.",
    },
    {
      id: "contact-dpo",
      title: "7. Contact Our Data Protection Desk",
      content:
        "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection Desk:\n\nEmail: info@greewebsolutions.com\nOrganization: Gree Web Solutions Data Protection Team",
    },
  ];

  return (
    <div className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Header Banner */}
      <div className="text-center space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-semibold">
          <ShieldCheck className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-600" />
          <span>Official Privacy Policy</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
          Privacy Policy & <span className="text-gradient">Data Protection</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          Last Updated & Effective Date: <span className="text-slate-900 font-semibold">{lastUpdated}</span>
        </p>
      </div>

      {/* Quick Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        <Card className="glass-card bg-white border-slate-200 shadow-md hover:shadow-lg transition-all">
          <CardContent className="p-6 space-y-2.5">
            <Lock className="h-6 w-6 text-indigo-600" />
            <h3 className="font-extrabold text-slate-900 text-lg">No Data Selling</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Your resume data is strictly private and never sold to third parties.</p>
          </CardContent>
        </Card>

        <Card className="glass-card bg-white border-slate-200 shadow-md hover:shadow-lg transition-all">
          <CardContent className="p-6 space-y-2.5">
            <ShieldCheck className="h-6 w-6 text-emerald-600" />
            <h3 className="font-extrabold text-slate-900 text-lg">Encrypted Storage</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Rest assured with TLS & AES-256 cloud encryption for all documents.</p>
          </CardContent>
        </Card>

        <Card className="glass-card bg-white border-slate-200 shadow-md hover:shadow-lg transition-all">
          <CardContent className="p-6 space-y-2.5">
            <FileText className="h-6 w-6 text-purple-600" />
            <h3 className="font-extrabold text-slate-900 text-lg">Full Data Control</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">You can edit, export, or permanently delete your account anytime.</p>
          </CardContent>
        </Card>
      </div>

      {/* Policy Content Body */}
      <div className="glass-card rounded-3xl p-8 sm:p-14 border border-slate-200 space-y-12 shadow-xl bg-white">
        {policySections.map((section) => (
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
            <h4 className="text-lg font-extrabold text-slate-900">Have questions regarding your data privacy?</h4>
            <p className="text-sm text-slate-600 font-medium">Contact our dedicated legal and data desk for quick answers.</p>
          </div>
          <Link href="/contact">
            <Button size="lg" className="gap-2 shadow-md text-base font-bold px-6">
              Contact Privacy Team <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

