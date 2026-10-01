import Link from "next/link";
import Image from "next/image";
import { Sparkles, Mail, ShieldCheck, FileCheck2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#0f172a] text-slate-100 relative overflow-hidden">
      {/* Glow background decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative overflow-hidden shrink-0 rounded-[10px] transition-transform duration-300 ease-out group-hover:scale-105 transform-gpu">
                <Image
                  src="/main-logo.png"
                  alt="AI Resume Logo"
                  width={40}
                  height={40}
                  className="object-contain rounded-[10px]"
                />
              </div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-indigo-300 transition-colors duration-300">
                AI Resume
              </span>
            </Link>
            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              Empowering job seekers worldwide with AI-driven, ATS-compliant resume builder, instant scoring & instant formatting.
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-indigo-300 font-bold">
              <ShieldCheck className="h-4.5 w-4.5 text-emerald-400" /> 100% Privacy Protected & Secure
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-extrabold text-white tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm sm:text-base text-slate-300 font-medium">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home Landing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Features */}
          <div>
            <h3 className="text-base font-extrabold text-white tracking-wider uppercase mb-4">Core Platform</h3>
            <ul className="space-y-3 text-sm sm:text-base text-slate-300 font-medium">
              <li className="flex items-center gap-2.5">
                <FileCheck2 className="h-4.5 w-4.5 text-indigo-400 shrink-0" /> ATS Compatibility Score
              </li>
              <li className="flex items-center gap-2.5">
                <Sparkles className="h-4.5 w-4.5 text-purple-400 shrink-0" /> AI Summary & Bullet Point Writer
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck className="h-4.5 w-4.5 text-indigo-400 shrink-0" /> Clean PDF & DOCX Export
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4.5 w-4.5 text-emerald-400 shrink-0" /> 24/7 Support Desk
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-base font-extrabold text-white tracking-wider uppercase mb-4">Support & Contact</h3>
            <p className="text-sm sm:text-base text-slate-300 font-medium mb-4">
              Have questions or need assistance with your resume generation?
            </p>
            <a
              href="mailto:info@greewebsolutions.com"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-sm sm:text-base font-bold text-indigo-300 hover:bg-white/20 hover:text-white transition-all shadow-md backdrop-blur-sm"
            >
              <Mail className="h-4.5 w-4.5 text-indigo-400" /> info@greewebsolutions.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-300 font-medium">
          <p>© {currentYear} AI Resume. Developed by <span className="text-white font-extrabold">Gree Web Solutions</span>. All Rights Reserved.</p>
          <div className="flex items-center gap-6 font-semibold text-sm text-slate-300">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
