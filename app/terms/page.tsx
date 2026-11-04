import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = { title: "Terms of Service | Olyndra" };

// The Terms of Service text lives in content/terms.tsx — edit it there.
import { TermsofServiceContent } from "@/content/terms";

export default function Page() {
  return (
    <main>
      <Header />
      <article className="container-x max-w-3xl py-16 lg:py-24">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <div className="prose-olyndra mt-8">
          <TermsofServiceContent />
        </div>
      </article>
      <Footer />
    </main>
  );
}
