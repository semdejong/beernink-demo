import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import PageIntro from "@/components/PageIntro";
import { Frame } from "@/components/Frame";
import FaqList from "@/components/FaqList";
import CtaPair from "@/components/CtaPair";

export const metadata: Metadata = {
  title: "Wandafwerking",
  description:
    "Stucwerk, sierpleister, granolmuren, structuurverf, glasweefsel, wandweefsel en behang. Schildersbedrijf Beernink, Winterswijk.",
};

const finishes = [
  "het stucwerk van uw muren",
  "het aanbrengen van sierpleister",
  "het egaliseren van granolmuren",
  "het aanbrengen van structuurverf",
  "het aanbrengen van glasweefsel of wandweefsel",
  "het behangen van muren of plafonds",
];

export default function WandPage() {
  const { wandPhotos, faqs } = content;
  return (
    <>
      <PageIntro
        title="Wandafwerking"
        lede="Met een nieuw behang of een andere kleur verf geeft u een ruimte een andere sfeer. Laat u het grondig aanpakken, dan kunt u jaren genieten van een mooi interieur."
        crumbs={[{ label: "Wandafwerking" }]}
      />
      <div className="mx-auto w-full max-w-[1120px] space-y-14 px-5 py-12">
        <section data-section="aanbod" aria-labelledby="aanbod-titel">
          <h2 id="aanbod-titel">Wat wij voor u verzorgen</h2>
          <p className="mt-4 max-w-[42rem]">Schildersbedrijf Beernink heeft ruime ervaring in verschillende soorten wandafwerking. Zo verzorgen wij voor u graag:</p>
          <ul className="marks mt-4 max-w-[42rem]">
            {finishes.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
        <section data-section="fotos" aria-labelledby="wandfotos-titel">
          <h2 id="wandfotos-titel">Voorbeelden</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {wandPhotos.map((photo) => (
              <Frame key={photo.src} photo={photo} sizes="(min-width: 768px) 46vw, 100vw" />
            ))}
          </div>
          <p className="mt-6 max-w-[42rem]">
            Het plafondproject en Te Hietbrink laten stucwerk, glasvlies en behang in een woning zien.{" "}
            <Link href="/projecten/stucwerk-plafond" className="link font-semibold">Stucwerk en behangen plafond</Link>
            {" · "}
            <Link href="/projecten/te-hietbrink" className="link font-semibold">Te Hietbrink</Link>
          </p>
        </section>
        <FaqList items={faqs.wand} />
        <section data-section="offerte" aria-labelledby="wand-offerte">
          <h2 id="wand-offerte">Vrijblijvende offerte</h2>
          <p className="mt-4 mb-6 max-w-[42rem]">Vertel ons welke ruimte u wilt aanpakken. Bel of mail, dan maken wij een duidelijke offerte of begroting.</p>
          <CtaPair mailSubject="Vrijblijvende offerte wandafwerking" />
        </section>
      </div>
    </>
  );
}
