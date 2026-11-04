"use client";

import { useState } from "react";

// Submissions are emailed by Web3Forms to the address the access key was
// created for. Set NEXT_PUBLIC_WEB3FORMS_KEY in Vercel (Settings → Environment
// Variables) to a key created for sales@olyndra.ai; without it, the original
// olyndra.ai key is used.
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "aaea8fcf-7152-4f73-96ca-d2a8f539fcca";

type Status = "idle" | "sending" | "sent" | "error";

async function submit(form: HTMLFormElement, subject: string, fromName: string) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject,
      from_name: fromName,
      ...Object.fromEntries(new FormData(form).entries()),
    }),
  });
  if (!res.ok) throw new Error(String(res.status));
}

function useSubmit(subject: string, fromName: string) {
  const [status, setStatus] = useState<Status>("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      await submit(form, subject, fromName);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return { status, onSubmit };
}

/* Hero: email only */
export function EarlyAccessForm() {
  const { status, onSubmit } = useSubmit("Early access request (olyndra.ai)", "olyndra.ai early access");
  if (status === "sent") {
    return <p className="font-heading font-semibold text-white">Thanks. You&apos;re on the list.</p>;
  }
  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="hero-email" className="sr-only">Email</label>
        <input
          id="hero-email"
          name="email"
          type="email"
          required
          placeholder="Your email"
          className="flex-1 rounded-full bg-white px-5 py-3 text-sm text-navy placeholder:text-body/70 outline-none focus:ring-2 focus:ring-white/70"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-mint px-7 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-mint-2 disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Request access"}
        </button>
      </div>
      <p className="mt-4 text-xs text-white/70">
        {status === "error" ? "That didn't send. Email contact@olyndra.ai instead." : "No spam, ever. We respect your privacy."}
      </p>
    </form>
  );
}

/* Bottom: email + message */
export function ContactForm() {
  const { status, onSubmit } = useSubmit("Message from olyndra.ai contact form", "olyndra.ai contact");
  if (status === "sent") {
    return <p className="text-center font-heading font-semibold text-navy">Thanks. We read every message and will reply ourselves.</p>;
  }
  const field = "w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-navy placeholder:text-body/70 outline-none focus:border-blue focus:ring-2 focus:ring-blue/20";
  return (
    <form onSubmit={onSubmit} className="mx-auto flex max-w-md flex-col gap-3">
      <label htmlFor="contact-email" className="sr-only">Email</label>
      <input id="contact-email" name="email" type="email" required placeholder="Your email" className={field} />
      <label htmlFor="contact-message" className="sr-only">Message</label>
      <textarea id="contact-message" name="message" rows={5} required placeholder="Your message" className={`${field} resize-none`} />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-mint py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-mint-2 disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>
      {status === "error" && <p className="text-center text-xs">That didn&apos;t send. Email contact@olyndra.ai instead.</p>}
    </form>
  );
}
