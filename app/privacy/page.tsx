import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = { title: "Privacy Policy | Olyndra" };

// TODO: replace the body below with the existing Privacy Policy text from the
// current olyndra.ai repository (app/privacy/page.tsx).
export default function Page() {
  return (
    <main>
      <Header />
      <article className="container-x max-w-3xl py-16 lg:py-24">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-6 leading-relaxed">Paste the existing Privacy Policy here.</p>
      </article>
      <Footer />
    </main>
  );
}
