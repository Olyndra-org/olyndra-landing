import type { Metadata } from "next";
import { Figtree, Work_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olyndra | Fintech for Entrepreneurs",
  description:
    "The Fintech for Entrepreneurs Leading Global Agentic Commerce. Secure, fast, and intelligent financial solutions.",
  metadataBase: new URL("https://www.olyndra.ai"),
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Olyndra | Fintech for Entrepreneurs",
    description: "The Fintech for Entrepreneurs Leading Global Agentic Commerce.",
    url: "https://www.olyndra.ai",
    siteName: "Olyndra",
    images: [{ url: "/icon.svg", width: 800, height: 600, alt: "Olyndra Logo" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olyndra | Fintech for Entrepreneurs",
    description: "The Fintech for Entrepreneurs Leading Global Agentic Commerce.",
    images: ["/icon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${figtree.variable} ${workSans.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
