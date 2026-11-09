import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import PageIntro from "@/components/PageIntro";
import ColourBoard from "@/components/ColourBoard";
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
        lede="Om u een indruk te geven van de mogelijke kleuren hebben wij hieronder enkele authentieke kleuren weergegeven. De vlakken liggen naast elkaar, als een streekkleurenbord."
        crumbs={[{ label: "Kleuren" }]}
      />
      <div className="mx-auto w-full max-w-[1120px] space-y-14 px-5 py-12">
        <section data-section="streekkleuren" aria-labelledby="bord-titel">
          <h2 id="bord-titel">Streekkleurenbord</h2>
          <p className="mt-4 max-w-[42rem]">
            De namen zijn onder meer Standgroen, Rijtuigengroen, Monumentengroen, Grachtengroen, Mergelwit, Bentheimergeel, Zandsteengeel, Okergeel, Zweeds rood, Engels rood, Gelders blauw en Drents bruin.
          </p>
          <div className="mt-8">
            <ColourBoard colours={colours} columns="page" />
          </div>
          <p className="mt-6 max-w-[42rem]">
            Uiteraard zijn er veel meer kleuren waaruit u kunt kiezen. Neem contact met ons op voor een kleuradvies.
          </p>
          <p className="mt-4 max-w-[42rem]">
            Mergelwit is de kleur van de muren van Villa Flora aan de Wilhelminastraat.{" "}
            <Link href="/projecten/villa-flora" className="link font-semibold">Bekijk dat schilderwerk</Link>.
          </p>
        </section>
        <FaqList items={faqs.kleuren} />
        <section data-section="offerte" aria-labelledby="kleur-offerte">
          <h2 id="kleur-offerte">Vraag een kleuradvies</h2>
          <div className="mt-6">
            <CtaPair offerteLabel="Mail voor kleuradvies" mailSubject="Kleuradvies" />
          </div>
        </section>
      </div>
    </>
  );
}
