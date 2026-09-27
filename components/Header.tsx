"use client";

import Image from "next/image";
import { useState } from "react";
import { navLinks, profile } from "@/lib/data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4 sm:px-8">
      <div className="max-w-[1280px] mx-auto bg-surface-container-low/80 backdrop-blur-2xl border titanium-border rounded-2xl px-5 sm:px-6 py-3.5 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-primary/30">
        {/* Brand & Status */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a className="flex items-center gap-3 group" href="#">
            <Image
              alt={`${profile.name} Logo`}
              width={36}
              height={36}
              className="w-9 h-9 rounded-xl object-contain border border-primary/30 group-hover:border-primary transition-all duration-300 shadow-md group-hover:scale-105"
              src={profile.avatar}
            />
            <div className="flex flex-col">
              <span className="font-sans font-bold text-sm tracking-tight text-white flex items-center gap-1.5 group-hover:text-primary transition-colors">
                {profile.name}
              </span>
              <span className="font-mono text-[10px] text-outline tracking-wider uppercase">
                {profile.role}
              </span>
            </div>
          </a>
          <div className="hidden lg:inline-flex items-center gap-2 pl-3 border-l border-white/10 px-3 py-1 rounded-full bg-secondary/5 border-secondary/20 animate-badge-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary beacon-pulse"></span>
            </span>
            <span className="font-mono text-[11px] text-secondary tracking-wide font-medium">
              Open for GenAI &amp; Agentic Architect Roles
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs tracking-wider text-on-surface-variant">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Action */}
        <div className="flex items-center gap-3">
          <a
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-primary text-on-primary hover:bg-[#ffcd8a] transition-all amber-glow hover:shadow-[0_0_25px_rgba(255,193,116,0.5)] hover:scale-105 active:scale-95 shimmer-btn"
            href={`mailto:${profile.email}`}
          >
            <span>Get in Touch -&gt;</span>
          </a>
          <a
            className="sm:hidden p-2 rounded-lg bg-primary text-on-primary hover:scale-105 transition-transform"
            href={`mailto:${profile.email}`}
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
          </a>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg bg-surface-container-high border border-white/10 text-white"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="material-symbols-outlined text-[18px]">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="max-w-[1280px] mx-auto mt-2 bg-surface-container-low/95 backdrop-blur-2xl border titanium-border rounded-2xl px-5 py-4 flex flex-col gap-3 font-mono text-xs tracking-wider text-on-surface-variant md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="hover:text-primary transition-colors py-1"
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
