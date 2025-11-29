"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#161616] text-white border-t border-[#222]">
      {/* Main footer content */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-6 md:py-7">
        {/* Middle section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-6 md:mb-7">
          {/* Column 1: Logo */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#212121] flex items-center justify-center flex-shrink-0">
                <span className="text-[#FF3426] font-normal text-[10px]">LC</span>
              </div>
              <span
                className="text-sm md:text-base font-normal"
                style={{
                  fontFamily:
                    "'KinoCustom', 'Helvetica Neue', Arial, sans-serif",
                }}
              >
                LumaCraft
              </span>
            </div>
            <p className="text-[#666666] text-[11px] md:text-sm leading-relaxed">
              Professional video creation tools for creators.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h5 className="text-[#777777] font-normal text-[10px] uppercase tracking-widest mb-2">
              LumaCraft
            </h5>
            <ul className="space-y-1.5">
              <li>
                <Link
                  href="/presets"
                  className="text-[#CCCCCC] text-[11px] md:text-sm hover:text-[#FF3426] transition-colors"
                >
                  Presets
                </Link>
              </li>
              <li>
                <Link
                  href="/lessons"
                  className="text-[#CCCCCC] text-[11px] md:text-sm hover:text-[#FF3426] transition-colors"
                >
                  Lessons
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[#CCCCCC] text-[11px] md:text-sm hover:text-[#FF3426] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/download"
                  className="text-[#CCCCCC] text-[11px] md:text-sm hover:text-[#FF3426] transition-colors"
                >
                  Download
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h5 className="text-[#777777] font-normal text-[10px] uppercase tracking-widest mb-2">
              Social Media
            </h5>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CCCCCC] text-[11px] md:text-sm hover:text-[#FF3426] transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CCCCCC] text-[11px] md:text-sm hover:text-[#FF3426] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CCCCCC] text-[11px] md:text-sm hover:text-[#FF3426] transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://threads.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CCCCCC] text-[11px] md:text-sm hover:text-[#FF3426] transition-colors"
                >
                  Threads
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h5 className="text-[#777777] font-normal text-[10px] uppercase tracking-widest mb-2">
              Support
            </h5>
            <ul className="space-y-1.5">
              <li>
                <Link
                  href="/quick-start"
                  className="text-[#CCCCCC] text-[11px] md:text-sm hover:text-[#FF3426] transition-colors"
                >
                  Quick Start
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-[#CCCCCC] text-[11px] md:text-sm hover:text-[#FF3426] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#CCCCCC] text-[11px] md:text-sm hover:text-[#FF3426] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/updates"
                  className="text-[#CCCCCC] text-[11px] md:text-sm hover:text-[#FF3426] transition-colors"
                >
                  Updates
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1a1a1a] my-6 md:my-7" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-[#666666] text-[10px] md:text-sm">
            COPYRIGHT 2025 — LUMACRAFT
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-[#666666] text-[10px] md:text-sm hover:text-[#FF3426] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[#666666] text-[10px] md:text-sm hover:text-[#FF3426] transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="text-[#666666] text-[10px] md:text-sm hover:text-[#FF3426] transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
