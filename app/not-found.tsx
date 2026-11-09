import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  description: "Deze pagina staat niet op het concept van Schildersbedrijf Beernink.",
};

export default function NotFound() {
  const { contact } = content;
  return (
    <section data-section="niet-gevonden" className="mx-auto w-full max-w-[1120px] px-5 py-20">
      <h1>Deze pagina bestaat niet</h1>
      <p className="mt-4 max-w-[36rem]">Het adres klopt niet op dit concept. Ga terug naar het begin of neem contact op.</p>
      <p className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-primary">Naar home</Link>
        <a href={contact.phoneTel} data-cta="bellen" className="btn btn-secondary">Bel {contact.phoneDisplay}</a>
      </p>
    </section>
  );
}
