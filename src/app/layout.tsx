import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import ScrollEffects from "@/components/ScrollEffects";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { contact, person, siteUrl } from "@/content/portfolio";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const heading = Manrope({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-heading", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

const title = `${person.name} — ${person.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${person.name}` },
  description: person.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: person.name, title, description: person.description, locale: "en_IN" },
  twitter: { card: "summary_large_image", title, description: person.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#0e131c" }, { media: "(prefers-color-scheme: light)", color: "#f6f7fb" }] };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.title,
  description: person.description,
  url: siteUrl,
  email: `mailto:${contact.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressCountry: "IN" },
  sameAs: [contact.github, contact.linkedin],
  knowsAbout: ["Machine Learning", "Large Language Models", "FastAPI", "Python", "PostgreSQL", "Google Cloud"],
};

// Runs before paint so the saved theme/motion preference never flashes.
const preferenceScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t}var m=localStorage.getItem('motion');if(m==='paused'){document.documentElement.dataset.motion='paused'}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="dark" data-motion="on" className={`${sans.variable} ${heading.variable} ${serif.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: preferenceScript }} />
        <a className="skip-link" href="#content">Skip to content</a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
        <ScrollEffects />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
