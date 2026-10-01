"use client";

import {
  Mail,
  Building2,
  HelpCircle,
  Globe,
  Sparkles,
  FileCheck2,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactPageClient() {
  const faqs = [
    {
      question: "How does the AI Resume ATS Score calculation work?",
      answer:
        "Our ATS evaluation engine parses your resume against standardized Applicant Tracking System rules. It measures keyword frequency, section formatting, action verbs, font readability, and contact clarity to output a score from 0 to 100 with actionable feedback.",
    },
    {
      question: "Is my personal resume data stored securely?",
      answer:
        "Yes, absolutely. We prioritize user privacy and data encryption. Your personal information, work history, and contact details are stored with strict end-to-end encryption and are never sold or shared with third-party advertisers.",
    },
    {
      question: "Can I export my generated resume in PDF format?",
      answer:
        "Yes! You can download your resume as a clean, high-resolution PDF or DOCX file at any time. Our PDF renderer uses standardized system fonts to ensure no broken glyphs or red boxes appear.",
    },
    {
      question: "What should I do if my AI prompt generation fails?",
      answer:
        "Ensure your internet connection is active. If an AI generation times out, simply retry after a few seconds or check our service status on this support page.",
    },
    {
      question: "Is AI Resume free to use?",
      answer:
        "Yes! Core resume editing, ATS checking, and standard template exports are available to all users. We offer premium AI capabilities for unlimited resume rewrites.",
    },
  ];

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-xs sm:text-sm font-semibold shadow-sm">
          <Mail className="h-4 w-4 text-purple-700" />
          <span>Direct Support & Business Communication</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Official support channels for{" "}
          <span className="font-bold text-slate-900">AI Resume</span>{" "}
          Application &{" "}
          <span className="font-bold text-slate-900">Gree Web Solutions</span>.
        </p>
      </div>

      {/* Main Reference Card Container */}
      <div className="max-w-5xl mx-auto bg-white border border-slate-200/90 shadow-xl rounded-3xl p-6 sm:p-12 mb-20">
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium mb-8">
          For technical support, feature feedback, privacy questions, or
          business inquiries regarding{" "}
          <strong className="text-slate-900 font-extrabold">AI Resume</strong>,
          please contact our team at{" "}
          <strong className="text-slate-900 font-extrabold">
            Gree Web Solutions
          </strong>{" "}
          through any of the channels below.
        </p>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {/* Email Support */}
          <div className="p-6 sm:p-8 rounded-2xl bg-purple-50/70 border border-purple-100 space-y-4 hover:border-purple-300 hover:shadow-md transition-all">
            <div className="h-12 w-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 shadow-sm">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg sm:text-xl">
              Email Support
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Send direct questions or bug reports to our dedicated support
              inbox.
            </p>
            <a
              href="mailto:info@greewebsolutions.com"
              className="inline-block text-base sm:text-lg font-bold text-purple-700 hover:text-purple-900 transition-colors underline underline-offset-4"
            >
              info@greewebsolutions.com
            </a>
          </div>

          {/* Official Website */}
          <div className="p-6 sm:p-8 rounded-2xl bg-purple-50/70 border border-purple-100 space-y-4 hover:border-purple-300 hover:shadow-md transition-all">
            <div className="h-12 w-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 shadow-sm">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg sm:text-xl">
              Official Website
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Explore developer portfolio and official company announcements.
            </p>
            <a
              href="https://greewebsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-base sm:text-lg font-bold text-purple-700 hover:text-purple-900 transition-colors underline underline-offset-4"
            >
              https://greewebsolutions.com
            </a>
          </div>
        </div>

        {/* Bottom AI Resume Platform Highlights Block */}
        <div className="p-6 sm:p-8 rounded-2xl bg-purple-50/70 border border-purple-100 space-y-5">
          <h3 className="font-bold text-slate-900 text-base sm:text-lg">
            AI Resume Platform Highlights & Organization
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="h-11 w-11 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0 shadow-sm">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-extrabold text-purple-700 uppercase tracking-wider">
                  AI ATS OPTIMIZER
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900">
                  Real-Time Score & Match
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="h-11 w-11 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0 shadow-sm">
                <FileCheck2 className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-extrabold text-purple-700 uppercase tracking-wider">
                  SMART EXPORT
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900">
                  Clean Recruiter PDFs
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="h-11 w-11 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0 shadow-sm">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-extrabold text-purple-700 uppercase tracking-wider">
                  DEVELOPMENT TEAM
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900">
                  Gree Web Solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="max-w-5xl mx-auto pt-14 border-t border-slate-200">
        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-xs sm:text-sm font-semibold shadow-sm">
            <HelpCircle className="h-4 w-4 text-purple-700" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Got Questions? We Have Answers
          </h2>
        </div>

        {/* Outer Border Card Container */}
        <div className="bg-white border border-slate-200/90 shadow-xl rounded-3xl p-6 sm:p-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="last:border-b-0 last:mb-0"
              >
                <AccordionTrigger className="text-slate-900 hover:text-purple-700 text-base sm:text-lg font-bold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
