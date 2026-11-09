import type { Metadata } from "next";
import { content } from "@/content";
import PageIntro from "@/components/PageIntro";
import OffertePanel from "@/components/OffertePanel";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schildersbedrijf Beernink, Jan Stienstraweg 4-6, 7101 DM Winterswijk. Bel 0543-516687 of mail info@schildersbedrijfbeernink.nl.",
};

export default function ContactPage() {
  const { company, contact } = content;
  return (
    <>
      <PageIntro
        title="Contact"
        lede="Bel of mail voor een vrijblijvende offerte of begroting."
        crumbs={[{ label: "Contact" }]}
      />
      <div className="mx-auto grid w-full max-w-[1120px] gap-12 px-5 py-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <section data-section="contact" aria-labelledby="adres-titel">
          <h2 id="adres-titel">Adres</h2>
          <address className="mt-4 not-italic">
            <p className="font-semibold text-navy">{company.name}</p>
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
            <p className="mt-4">{contact.kvk}</p>
            <p>{contact.btw}</p>
          </address>
          <p className="mt-4">Werkgebied: {company.area}.</p>
          <p className="mt-4">
            <a className="link font-semibold" href={contact.mapHref} target="_blank" rel="noopener noreferrer">
              Zoek Jan Stienstraweg 4-6 op de kaart
            </a>
          </p>
        </section>
        <OffertePanel />
      </div>
    </>
  );
}
