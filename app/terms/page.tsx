import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TERMS_HTML } from "@/content/terms";

export const metadata: Metadata = { title: "Terms of Use | Olyndra" };

// Text lives in content/terms.ts (carried over from the previous site).
export default function Page() {
  return (
    <main>
      <Header />
      <article className="container-x max-w-3xl py-16 lg:py-24">
        <h1 className="text-4xl font-bold">Terms of Use</h1>
        <div className="prose-olyndra mt-8" dangerouslySetInnerHTML={{ __html: TERMS_HTML }} />
      </article>
      <Footer />
    </main>
  );
}
