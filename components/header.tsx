"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";

const links = [
  { href: "/#features", label: "Platform" },
  { href: "/#company", label: "Company" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-40 bg-blue text-white">
      <div className="container-x flex h-20 items-center justify-between">
        <Logo light />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="text-sm font-medium text-white/85 hover:text-white">
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-full border border-white/70 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-blue"
          >
            Contact us
          </Link>
        </nav>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="container-x pb-6 md:hidden" aria-label="Main">
          <div className="flex flex-col gap-1 rounded-xl bg-white/10 p-3">
            {links.map((l) => (
              <Link key={l.label} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-medium text-white hover:bg-white/10">
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
