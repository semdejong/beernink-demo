import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import PageIntro from "@/components/PageIntro";
import OffertePanel from "@/components/OffertePanel";
import { Frame } from "@/components/Frame";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schildersbedrijf Beernink, Jan Stienstraweg 4-6, 7101 DM Winterswijk. Bel 0543-516687 of mail info@schildersbedrijfbeernink.nl.",
};

export default function ContactPage() {
  const { company, contact, services, premises } = content;
  return (
    <>
      <PageIntro
        title="Contact"
        lede="Bel of mail voor een vrijblijvende offerte of begroting."
        crumbs={[{ label: "Contact" }]}
      />
      <div className="mx-auto grid w-full max-w-[1120px] gap-12 px-5 pt-6 pb-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:py-12">
        <section data-section="contact" aria-labelledby="adres-titel">
          <div className="border border-navy p-5 md:p-6">
            <p className="text-sm font-semibold tracking-[0.16em] text-navy uppercase">SBW · Winterswijk</p>
            <h2 id="adres-titel" className="mt-2 text-[2rem] leading-[1.05] md:mt-3 md:text-[2.4rem]">{company.name}</h2>
            <hr className="double-rule my-4" />
            <address className="not-italic">
              <p>{contact.street}</p>
              <p>{contact.postalCode} {contact.city}</p>
              <p className="mt-4">
                Tel:{" "}
                <a className="link font-semibold" href={contact.phoneTel} data-cta="bellen">{contact.phoneDisplay}</a>
              </p>
              <p>
                E-mail:{" "}
                <a className="link font-semibold" href={`mailto:${contact.email}`} data-cta="mailen">{contact.email}</a>
              </p>
              <p className="mt-3">{contact.kvk}</p>
              <p>{contact.btw}</p>
            </address>
            <p className="mt-4">Werkgebied: {company.area}.</p>
            <p className="mt-4">
              <a className="link font-semibold" href={contact.mapHref} target="_blank" rel="noopener noreferrer">
                Zoek Jan Stienstraweg 4-6 op de kaart
              </a>
            </p>
          </div>
        </section>
        <OffertePanel intro="Beschrijf het werk in het kort: onderhoud, nieuwbouw, houtrot, spuitwerk, een wand, glas of een kleur. Het formulier opent uw e-mailprogramma. Er wordt niets automatisch verzonden." />
      </div>
      <section data-section="pand" className="mx-auto grid w-full max-w-[1120px] items-center gap-10 px-5 pb-16 md:grid-cols-[400px_minmax(0,1fr)]" aria-labelledby="belt-titel">
        <Frame photo={premises} sizes="400px" className="w-full max-w-[400px]" />
        <div>
          <h2 id="belt-titel" className="text-[2rem]">Waarvoor u ons belt</h2>
          <ul className="mt-4 border-t border-navy/25 sm:grid sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.href} className="border-b border-navy/25">
                <Link href={service.href} className="link inline-flex min-h-11 items-center font-semibold">{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
