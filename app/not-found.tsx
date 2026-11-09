import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  description: "Deze pagina staat niet op het concept van Schildersbedrijf Beernink.",
};

export default function NotFound() {
  const { contact, services } = content;
  return (
    <section data-section="niet-gevonden" className="mx-auto w-full max-w-[1120px] px-5 py-16">
      <h1>Deze pagina bestaat niet</h1>
      <p className="mt-4 max-w-[36rem]">Het adres klopt niet op dit concept. Kies hieronder een onderdeel, of bel ons.</p>
      <ul className="mt-8 max-w-md border-t border-navy/25">
        {services.map((service) => (
          <li key={service.href} className="border-b border-navy/25">
            <Link href={service.href} className="link inline-flex min-h-11 items-center font-semibold">{service.title}</Link>
          </li>
        ))}
        <li className="border-b border-navy/25">
          <Link href="/projecten" className="link inline-flex min-h-11 items-center font-semibold">Projecten</Link>
        </li>
      </ul>
      <p className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-primary">Naar home</Link>
        <a href={contact.phoneTel} data-cta="bellen" className="btn btn-secondary">Bel {contact.phoneDisplay}</a>
      </p>
    </section>
  );
}
