import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = { title: "Privacy Policy | Olyndra" };

// The Privacy Policy text lives in content/privacy.tsx — edit it there.
import { PrivacyPolicyContent } from "@/content/privacy";

export default function Page() {
  return (
    <main>
      <Header />
      <article className="container-x max-w-3xl py-16 lg:py-24">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <div className="prose-olyndra mt-8">
          <PrivacyPolicyContent />
        </div>
      </article>
      <Footer />
    </main>
  );
}
