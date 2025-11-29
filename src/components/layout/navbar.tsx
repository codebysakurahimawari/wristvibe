"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { name: "Presets", href: "/presets" },
  { name: "Creator Kit", href: "/creator-kit" },
  { name: "Lessons", href: "/lessons" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass =
    "font-normal text-sm px-4 py-1.5 rounded-full transition-all duration-300 " +
    "hover:bg-[#232323] hover:text-[#FF3426] focus:bg-[#232323] focus:text-[#FF3426]";

  const navbarWidth = scrolled ? "max-w-5xl" : "max-w-screen-xl";
  const navbarMobileWidth = scrolled ? "max-w-lg" : "max-w-screen-xl";

  return (
    <>
      {/* Desktop pill navbar */}
      <nav className="hidden lg:block w-full px-2 md:px-0 mt-4 fixed top-0 left-0 z-50 bg-transparent transition-all duration-300">
        <div
          className={`flex items-center justify-between
            bg-[#181818] border border-[#232323] rounded-full
            py-2 px-3 mx-auto
            transition-all duration-300 bg-white/8 backdrop-blur-lg
            ${navbarWidth}
          `}
        >
          <Link href="/" className="text-base font-semibold tracking-tight mr-2" style={{ fontFamily: "'KinoCustom', 'Helvetica Neue', Arial, sans-serif" }}>
            LumaCraft
          </Link>
          <ul className="flex-1 flex justify-center items-center gap-1">
            {links.map(link => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={navLinkClass}
                  tabIndex={0}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/download"
            className="px-4 py-1.5 bg-[#FF3426] text-white rounded-full font-semibold text-sm transition-all duration-300 hover:bg-[#C90018] hover:scale-105"
          >
            Download
          </Link>
        </div>
      </nav>

      {/* Tablet/Mobile navbar with hamburger & sidebar, width change on scroll too */}
      <nav className="lg:hidden w-full px-2 md:px-0 mt-4 fixed top-0 left-0 z-50 bg-transparent transition-all duration-300">
        <div className={`flex items-center justify-between
          bg-[#181818] border border-[#232323] rounded-full
          py-2 px-3 mx-auto
          transition-all duration-300
          ${navbarMobileWidth}
        `}>
          <Link href="/" className="text-base font-semibold tracking-tight" style={{ fontFamily: "'KinoCustom', 'Helvetica Neue', Arial, sans-serif" }}>
            LumaCraft
          </Link>
          <button
            aria-label="Open sidebar"
            className="ml-auto p-1.5 rounded-full bg-transparent hover:bg-[#232323] transition-all duration-300"
            onClick={() => setSidebarOpen(true)}
          >
            <svg width={22} height={22} fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <line x1={3} y1={7} x2={19} y2={7} />
              <line x1={3} y1={11} x2={19} y2={11} />
              <line x1={3} y1={15} x2={19} y2={15} />
            </svg>
          </button>
        </div>
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-25 z-50 transition-all duration-300"
              onClick={() => setSidebarOpen(false)}
            />
            <aside className="fixed top-0 left-0 h-full w-52 bg-[#181818] border-r border-[#232323] px-5 py-6 z-50 flex flex-col transition-all duration-300">
              <button
                aria-label="Close sidebar"
                className="mb-8 ml-auto p-1 rounded-full hover:bg-[#232323] transition-all duration-300"
                onClick={() => setSidebarOpen(false)}
              >
                <svg width={20} height={20} fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <line x1={5} y1={5} x2={15} y2={15} />
                  <line x1={5} y1={15} x2={15} y2={5} />
                </svg>
              </button>
              <Link href="/" className="text-lg font-semibold tracking-tight mb-7 block" style={{ fontFamily: "'KinoCustom', 'Helvetica Neue', Arial, sans-serif" }}>
                LumaCraft
              </Link>
              <ul className="flex flex-col gap-2 mb-8">
                {links.map(link => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={navLinkClass + " block text-left"}
                      tabIndex={0}
                      onClick={() => setSidebarOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/download"
                className="w-full block px-0 py-2.5 bg-[#FF3426] text-white rounded-full font-semibold text-sm transition-all duration-300 hover:bg-[#C90018] hover:scale-105 text-center"
                onClick={() => setSidebarOpen(false)}
              >
                Download
              </Link>
            </aside>
          </>
        )}
      </nav>
    </>
  );
}
