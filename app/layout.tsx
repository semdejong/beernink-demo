import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileBar from "@/components/MobileBar";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-source",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: "normal",
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: "%s · Schildersbedrijf Beernink",
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: content.company.logo ? { icon: content.company.logo } : undefined,
};

export const viewport: Viewport = { themeColor: content.colors.accent };

const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--brand": c.primary,
  "--brand-fg": c.primaryForeground,
  "--accent": c.accent,
  "--background": c.background,
  "--foreground": c.foreground,
  "--muted": c.muted,
} as CSSProperties;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  name: content.company.name,
  telephone: "+31543516687",
  email: content.contact.email,
  foundingDate: String(content.company.since),
  address: {
    "@type": "PostalAddress",
    streetAddress: content.contact.street,
    postalCode: content.contact.postalCode,
    addressLocality: content.contact.city,
    addressCountry: "NL",
  },
  areaServed: content.company.area,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={content.seo.lang} style={themeVars} className={`${sourceSans.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}>
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <a href="#inhoud" className="skip">Naar inhoud</a>
        <div className="flex min-h-full">
          <div className="sbw-rail" aria-hidden="true"><span>SBW</span></div>
          <div className="flex min-w-0 flex-1 flex-col">
            <SiteHeader />
            <main id="inhoud" className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </div>
        <MobileBar />
        <SleadsBadge />
      </body>
    </html>
  );
}
