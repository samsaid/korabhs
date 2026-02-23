"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#11425D]/10 ring-1 ring-[#11425D]/30 transition-all group-hover:bg-[#11425D]/20">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 1C4.134 1 1 4.134 1 8s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 2.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z"
                fill="#11425D"
              />
            </svg>
          </div>
          <span className="text-[15px] font-semibold tracking-[-0.02em] text-slate-800">
            Kora<span className="text-[#11425D]">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-500 transition-colors hover:text-slate-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <Button
            asChild
            className="h-9 rounded-full bg-[#11425D] px-5 text-[13px] font-semibold text-white shadow-none hover:bg-[#002233] transition-colors"
          >
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-slate-500 hover:text-slate-900 hover:bg-slate-100"
            >
              <Menu size={18} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-slate-200 bg-white w-72">
            <div className="flex flex-col gap-1 pt-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-4 py-3 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-4 px-4">
                <Button
                  asChild
                  className="w-full rounded-full bg-[#11425D] text-[13px] font-semibold text-white hover:bg-[#002233]"
                >
                  <a href="#contact">Get Started</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
