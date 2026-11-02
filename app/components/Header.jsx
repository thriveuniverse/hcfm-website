"use client";

import { useRef } from "react";
import Link from "next/link";
import { navItems } from "../lib/nav";
import BenchmarkMark from "./BenchmarkMark";

export default function Header() {
  const detailsRef = useRef(null);

  return (
    <header className="bg-ink border-b border-hline">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <BenchmarkMark />
          <span className="leading-tight">
            <span className="block font-mono text-[0.65rem] tracking-[0.16em] uppercase text-bronze">
              Historical Feasibility
            </span>
            <span className="block font-serif font-semibold text-xl text-paper">
              HCFM
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 font-mono text-xs tracking-[0.08em] uppercase text-paperdim">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-bronze transition-colors border-b border-transparent hover:border-bronze pb-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <details ref={detailsRef} className="relative md:hidden">
          <summary className="list-none cursor-pointer p-2 -mr-2">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6 text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <div className="absolute right-0 mt-2 w-56 bg-ink2 border border-hline py-2 z-50">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => { if (detailsRef.current) detailsRef.current.open = false; }}
                className="block px-4 py-2 font-mono text-xs uppercase tracking-[0.06em] text-paperdim hover:text-bronze hover:bg-ink transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
