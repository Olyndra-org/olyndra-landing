import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PRIVACY_HTML } from "@/content/privacy";

export const metadata: Metadata = { title: "Privacy Policy | Olyndra" };

// Text lives in content/privacy.ts (carried over from the previous site).
export default function Page() {
  return (
    <main>
      <Header />
      <article className="container-x max-w-3xl py-16 lg:py-24">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <div className="prose-olyndra mt-8" dangerouslySetInnerHTML={{ __html: PRIVACY_HTML }} />
      </article>
      <Footer />
    </main>
  );
}
