import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-bg-soft">
      <div className="container-x py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <Logo />
            <p className="text-xs">© {new Date().getFullYear()} Olyndra. All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Footer">
            <Link href="/#features" className="hover:text-navy">Platform</Link>
            <Link href="/#company" className="hover:text-navy">Company</Link>
            <Link href="/#contact" className="hover:text-navy">Contact</Link>
            <Link href="/privacy" className="hover:text-navy">Privacy</Link>
            <Link href="/terms" className="hover:text-navy">Terms</Link>
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 text-xs leading-relaxed md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl">
            Olyndra Ltd | Registered in England and Wales | Company Number: 17171970 |
            Registered Office: 124-128 City Road, London, EC1V 2NX | contact@olyndra.ai
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/rickyknox/" target="_blank" rel="noopener noreferrer" className="hover:text-navy" aria-label="Ricky Knox on LinkedIn"><Linkedin className="h-4 w-4" /></a>
            <a href="https://www.linkedin.com/in/noamzeigerson/" target="_blank" rel="noopener noreferrer" className="hover:text-navy" aria-label="Noam Zeigerson on LinkedIn"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
