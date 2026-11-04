import { Globe, Bot, ShieldCheck, Zap, Hash, FileText } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EarlyAccessForm, ContactForm } from "@/components/forms";

const features = [
  { icon: Globe, title: "Borderless payments", body: "Move money across borders in seconds, not days. One account for every currency your business touches." },
  { icon: Bot, title: "Agentic intelligence", body: "AI agents that read your cash flow, automate compliance and surface the decisions that matter." },
  { icon: ShieldCheck, title: "Enterprise-grade security", body: "Bank-level encryption, multi-factor authentication and real-time fraud detection, around the clock." },
  { icon: Zap, title: "Decisions in real time", body: "Decisions made from live bank data in minutes, with the reasoning shown rather than hidden." },
  { icon: Hash, title: "We say the number", body: "Fixed, plain figures. No rates “tailored to your needs” and no hidden fees." },
  { icon: FileText, title: "Plain-English agreements", body: "Short sentences a director can read in one sitting, including what happens if something goes wrong." },
];

const platform = [
  { title: "Accounts", body: "Multi-currency business accounts for companies that trade in more than one country." },
  { title: "Payments", body: "Cross-border transfers that arrive in seconds, at a price you see before you send." },
  { title: "Credit", body: "Business loans decided online in minutes, with a fixed rate for the term." },
  { title: "Agents", body: "An AI agent team for treasury, compliance and reporting that documents every decision." },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-blue text-white">
        <Header />
        <div className="container-x py-20 text-center md:py-28">
          <h1 className="mx-auto max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-[52px]">
            The fintech for international entrepreneurs
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Financial infrastructure that lets entrepreneurs move money without borders,
            make smarter decisions with AI-powered insights, and scale globally. Request
            early access and be first in line when we launch.
          </p>
          <div className="mt-10">
            <EarlyAccessForm />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-6 bg-white">
        <div className="container-x py-20 md:py-28">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold leading-snug md:text-4xl">
            Secure, fast and intelligent. Built for how entrepreneurs actually work.
          </h2>
          <div className="mx-auto mt-16 grid max-w-4xl gap-x-12 gap-y-14 sm:grid-cols-2 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title}>
                <f.icon className="h-6 w-6 text-blue" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="eyebrow mt-5 text-navy">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-flex rounded-full border border-line px-6 py-2.5 text-sm font-medium text-navy transition-colors hover:border-blue hover:text-blue"
            >
              Ask us about the platform
            </a>
          </div>
        </div>
      </section>

      {/* Company */}
      <section id="company" className="scroll-mt-6 bg-bg">
        <div className="container-x py-20 md:py-28">
          <h2 className="text-3xl font-bold md:text-4xl">Built by people who have built banks</h2>
          <p className="mt-5 max-w-2xl leading-relaxed">
            Olyndra was founded by{" "}
            <a href="https://www.linkedin.com/in/rickyknox/" target="_blank" rel="noopener noreferrer" className="font-medium text-blue hover:underline">Ricky Knox</a>{" "}
            and{" "}
            <a href="https://www.linkedin.com/in/noamzeigerson/" target="_blank" rel="noopener noreferrer" className="font-medium text-blue hover:underline">Noam Zeigerson</a>,
            two operators with twenty years inside banking and fintech, from Barclays and Bank
            Hapoalim to Tandem, Azimo and Small World. We have watched how slow, opaque and
            expensive money becomes the moment a business crosses a border. Olyndra is the
            system we wished existed.
          </p>
          <div className="mt-12 border-t border-line" />
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
            {platform.map((p) => (
              <div key={p.title}>
                <h3 className="eyebrow text-navy">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-6 bg-bg-soft">
        <div className="container-x py-20 text-center md:py-28">
          <p className="eyebrow">Get started</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Get in touch with us</h2>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
