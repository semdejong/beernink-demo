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

export default function WandPage() {
  const { wandPhotos, faqs, projects } = content;
  const plafond = projects.find((project) => project.slug === "stucwerk-plafond");
  const [stuc, glasweefsel, behang, behangTwee] = wandPhotos;
  const withoutPhoto = [
    { title: "Sierpleister", text: "Het aanbrengen van sierpleister." },
    { title: "Granolmuren", text: "Het egaliseren van granolmuren." },
    { title: "Structuurverf", text: "Het aanbrengen van structuurverf." },
  ];

  return (
    <>
      <PageIntro
        title="Wandafwerking"
        lede="Met een nieuw behang of een andere kleur verf geeft u een ruimte een andere sfeer. Laat u het grondig aanpakken, dan kunt u jaren genieten van een mooi interieur."
        crumbs={[{ label: "Wandafwerking" }]}
      />
      <div className="mx-auto w-full max-w-[1120px] space-y-16 px-5 py-12">
        <section data-section="aanbod" aria-labelledby="aanbod-titel" className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 id="aanbod-titel">Stucwerk</h2>
            <p className="mt-4">Schildersbedrijf Beernink heeft ruime ervaring in verschillende soorten wandafwerking. Het stucwerk van muren verzorgen wij graag, zoals in de woning waar daarna glasvlies op de muren kwam.</p>
            <p className="mt-4">
              <Link href="/projecten/stucwerk-plafond" className="link font-semibold">Stucwerk en behangen plafond</Link>
            </p>
          </div>
          <Frame photo={stuc} sizes="(min-width: 768px) 46vw, 100vw" />
        </section>

        <section data-section="overig" aria-labelledby="overig-titel" className="bg-warm px-5 py-8 md:px-8">
          <h2 id="overig-titel">Sierpleister, granol en structuurverf</h2>
          <p className="mt-3 max-w-[40rem]">Naast stucwerk, weefsel en behang verzorgen wij ook deze afwerkingen.</p>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {withoutPhoto.map((item) => (
              <li key={item.title} className="border-t border-navy pt-3">
                <p className="font-display text-3xl font-semibold text-navy">{item.title}</p>
                <p className="mt-2">{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section data-section="weefsel" aria-labelledby="weefsel-titel" className="grid items-center gap-8 md:grid-cols-2">
          <Frame photo={glasweefsel} sizes="(min-width: 768px) 46vw, 100vw" />
          <div>
            <h2 id="weefsel-titel">Glasweefsel en wandweefsel</h2>
            <p className="mt-4">Wij brengen glasweefsel of wandweefsel aan. Bij Te Hietbrink zijn de gestucte wanden met glasvlies beplakt en daarna gesausd.</p>
            <p className="mt-4">
              <Link href="/projecten/te-hietbrink" className="link font-semibold">Te Hietbrink</Link>
            </p>
          </div>
        </section>

        <section data-section="behang" aria-labelledby="behang-titel">
          <h2 id="behang-titel">Behang op muren en plafonds</h2>
          <p className="mt-4 max-w-[42rem]">
            Wij behangen muren en plafonds. In één woning is het zachtboardplafond tussen de balken eerst geschilderd en daarna met patroonbehang bekleed. Ornamenten zitten tussen de balken.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <Frame photo={behang} sizes="(min-width: 768px) 46vw, 100vw" />
            <Frame photo={behangTwee} sizes="(min-width: 768px) 46vw, 100vw" />
            {plafond ? (
              <>
                <Frame photo={plafond.photos[1]} sizes="(min-width: 768px) 46vw, 100vw" />
                <Frame photo={plafond.photos[2]} sizes="(min-width: 768px) 46vw, 100vw" />
              </>
            ) : null}
          </div>
        </section>

        <FaqList items={faqs.wand} />
        <section data-section="offerte" aria-labelledby="wand-offerte">
          <h2 id="wand-offerte">Vrijblijvende offerte</h2>
          <p className="mt-4 mb-6 max-w-[42rem]">Vertel ons welke ruimte u wilt aanpakken: muur, plafond, of allebei. Bel of mail, dan maken wij een duidelijke offerte of begroting.</p>
          <CtaPair mailSubject="Vrijblijvende offerte wandafwerking" />
        </section>
      </div>
    </>
  );
}
