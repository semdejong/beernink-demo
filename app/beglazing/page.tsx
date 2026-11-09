import type { Metadata } from "next";
import { content } from "@/content";
import PageIntro from "@/components/PageIntro";
import { Frame } from "@/components/Frame";
import FaqList from "@/components/FaqList";
import CtaPair from "@/components/CtaPair";

export const metadata: Metadata = {
  title: "Beglazing",
  description:
    "Isolatieglas, veiligheidsglas, figuurglas en glas in lood. Geleverd en geplaatst door Schildersbedrijf Beernink in Winterswijk.",
};

const kinds = ["isolatieglas", "veiligheidsglas", "figuurglas", "glas in lood"];

export default function BeglazingPage() {
  const { glassPhotos, faqs } = content;
  return (
    <>
      <PageIntro
        title="Beglazing"
        lede="U kunt niet alleen voor schilderwerk terecht bij Schildersbedrijf Beernink. Wij leveren en plaatsen ook allerhande soorten beglazing."
        crumbs={[{ label: "Beglazing" }]}
      />
      <div className="mx-auto w-full max-w-[1120px] space-y-14 px-5 py-12">
        <section data-section="soorten" aria-labelledby="soorten-titel">
          <h2 id="soorten-titel">Soorten glas</h2>
          <ul className="marks mt-4">
            {kinds.map((kind) => <li key={kind}>{kind}</li>)}
          </ul>
        </section>
        <section data-section="fotos" aria-labelledby="glasfotos-titel">
          <h2 id="glasfotos-titel" className="sr-only">Foto’s van geplaatst glas</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {glassPhotos.map((photo) => (
              <Frame key={photo.src} photo={photo} sizes="(min-width: 768px) 46vw, 100vw" />
            ))}
          </div>
        </section>
        <FaqList items={faqs.glas} />
        <section data-section="offerte" aria-labelledby="glas-offerte">
          <h2 id="glas-offerte">Glas laten plaatsen</h2>
          <p className="mt-4 mb-6 max-w-[42rem]">Bel of mail voor een vrijblijvende offerte. Noem het type glas en waar het moet komen.</p>
          <CtaPair mailSubject="Vrijblijvende offerte beglazing" />
        </section>
      </div>
    </>
  );
}
