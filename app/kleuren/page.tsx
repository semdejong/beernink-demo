import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import PageIntro from "@/components/PageIntro";
import ColourBoard from "@/components/ColourBoard";
import ColourSpecimen from "@/components/ColourSpecimen";
import FaqList from "@/components/FaqList";
import CtaPair from "@/components/CtaPair";

export const metadata: Metadata = {
  title: "Kleuren en advies",
  description:
    "Authentieke kleuren van Schildersbedrijf Beernink: Standgroen, mergelwit, Gelders blauw en meer. Kleuradvies in Winterswijk.",
};

export default function KleurenPage() {
  const { colours, faqs } = content;
  return (
    <>
      <PageIntro
        title="Kleuren en advies"
        lede="Om u een indruk te geven van de mogelijke kleuren hebben wij hieronder enkele authentieke kleuren weergegeven. Eerst als bord, daarna als losse stalen met hun naam."
        crumbs={[{ label: "Kleuren" }]}
      />
      <div className="mx-auto w-full max-w-[1120px] space-y-16 px-5 py-12">
        <section data-section="streekkleuren" aria-labelledby="bord-titel">
          <h2 id="bord-titel">Streekkleurenbord</h2>
          <p className="mt-4 max-w-[42rem]">
            Standgroen, Rijtuigengroen, Monumentengroen, Grachtengroen, Mergelwit, Bentheimergeel, Zandsteengeel, Okergeel, Zweeds rood, Engels rood, Gelders blauw en Drents bruin.
          </p>
          <div className="mt-8">
            <ColourBoard colours={colours} columns="page" />
          </div>
        </section>

        <section data-section="stalen" aria-labelledby="stalen-titel">
          <h2 id="stalen-titel">De stalen</h2>
          <p className="mt-4 mb-8 max-w-[42rem]">
            Uiteraard zijn er veel meer kleuren waaruit u kunt kiezen. Neem contact met ons op voor een kleuradvies. De boerderij van familie Wassink is geschilderd in herkenbare streekkleuren.{" "}
            <Link href="/projecten/wassink" className="link font-semibold">Bekijk die boerderij</Link>.
          </p>
          <ColourSpecimen colours={colours} />
        </section>

        <FaqList items={faqs.kleuren} />
        <section data-section="offerte" aria-labelledby="kleur-offerte">
          <h2 id="kleur-offerte">Vraag een kleuradvies</h2>
          <p className="mt-4 mb-6 max-w-[42rem]">
            Noem het pand en of het om binnen- of buitenwerk gaat. Wij geven kleuradvies en maken een vrijblijvende offerte of begroting.
          </p>
          <CtaPair offerteLabel="Mail voor kleuradvies" mailSubject="Kleuradvies" />
        </section>
      </div>
    </>
  );
}
