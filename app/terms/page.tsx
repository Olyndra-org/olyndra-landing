import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = { title: "Terms of Service | Olyndra" };

// TODO: replace the body below with the existing Terms of Service text from the
// current olyndra.ai repository (app/terms/page.tsx).
export default function Page() {
  return (
    <main>
      <Header />
      <article className="container-x max-w-3xl py-16 lg:py-24">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="mt-6 leading-relaxed">Paste the existing Terms of Service here.</p>
      </article>
      <Footer />
    </main>
  );
}
