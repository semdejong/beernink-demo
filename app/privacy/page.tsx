import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy op dit concept van Schildersbedrijf Beernink. Het offerteformulier opent uw e-mailprogramma en slaat niets op.",
};

export default function PrivacyPage() {
  const { company, contact } = content;
  return (
    <>
      <PageIntro
        title="Privacy"
        lede="Dit is een conceptwebsite voor Schildersbedrijf Beernink. De pagina’s worden niet door zoekmachines geïndexeerd."
        crumbs={[{ label: "Privacy" }]}
      />
      <div data-section="privacy" className="mx-auto grid w-full max-w-[1120px] gap-10 px-5 py-12 pb-16 md:grid-cols-3">
        <section aria-labelledby="formulier-titel">
          <h2 id="formulier-titel" className="text-[2rem]">Het formulier</h2>
          <p className="mt-3">
            Een offerteverzoek opent uw eigen e-mailprogramma. Dit concept slaat het formulier niet op een server op en bevestigt geen verzending. Het bericht vertrekt pas als u het zelf verstuurt.
          </p>
        </section>
        <section aria-labelledby="meten-titel">
          <h2 id="meten-titel" className="text-[2rem]">Meten</h2>
          <p className="mt-3">
            Op deze conceptsite staat een cookieloos meetpunt van Sleads, alleen om het concept te kunnen beoordelen.
          </p>
        </section>
        <section aria-labelledby="bedrijf-titel">
          <h2 id="bedrijf-titel" className="text-[2rem]">Het bedrijf</h2>
          <p className="mt-3">
            {company.name}<br />
            {contact.street}<br />
            {contact.postalCode} {contact.city}
          </p>
          <p className="mt-3">
            Telefoon{" "}
            <a className="link font-semibold whitespace-nowrap" href={contact.phoneTel} data-cta="bellen">{contact.phoneDisplay}</a>
          </p>
          <p>
            E-mail{" "}
            <a className="link font-semibold break-words" href={`mailto:${contact.email}`} data-cta="mailen">{contact.email}</a>
          </p>
          <p className="mt-3">{contact.kvk}<br />{contact.btw}</p>
          <p className="mt-4">
            <Link href="/contact" className="link font-semibold">Naar contact</Link>
          </p>
        </section>
      </div>
    </>
  );
}
