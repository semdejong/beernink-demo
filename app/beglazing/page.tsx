import type { Metadata } from "next";
import Link from "next/link";
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

const chapters = [
  {
    title: "Isolatieglas",
    text: "Isolatieglas, geleverd en geplaatst. Op de foto zit het in een erker.",
  },
  {
    title: "Veiligheidsglas",
    text: "Gelaagd veiligheidsglas. Op de foto ligt het op een overkapping.",
  },
  {
    title: "Figuurglas",
    text: "Figuurglas, onder meer Mousseline Pratolina in een voordeur.",
  },
  {
    title: "Glas in lood",
    text: "Glas in lood, hier in een erker. Het glas hoort bij hetzelfde adres als het schilderwerk.",
  },
];

export default function BeglazingPage() {
  const { glassPhotos, faqs } = content;
  return (
    <>
      <PageIntro
        title="Beglazing"
        lede="U kunt niet alleen voor schilderwerk terecht bij Schildersbedrijf Beernink. Wij leveren en plaatsen ook allerhande soorten beglazing."
        crumbs={[{ label: "Beglazing" }]}
      />
      <div className="mx-auto w-full max-w-[1120px] space-y-16 px-5 py-12">
        <p className="max-w-[42rem]">
          Vier soorten die wij noemen: isolatieglas, veiligheidsglas, figuurglas en glas in lood. Hieronder elk met de foto en het bijschrift.
        </p>
        {glassPhotos.map((photo, index) => {
          const chapter = chapters[index];
          const flip = index % 2 === 1;
          return (
            <section key={photo.src} data-section="soorten" aria-labelledby={`glas-${index}`} className="grid items-center gap-8 border-t border-navy/25 pt-10 md:grid-cols-2">
              <div className={flip ? "md:order-2" : ""}>
                <h2 id={`glas-${index}`}>{chapter.title}</h2>
                <p className="mt-4 max-w-[36rem]">{chapter.text}</p>
              </div>
              <Frame photo={photo} sizes="(min-width: 768px) 46vw, 100vw" />
            </section>
          );
        })}
        <p className="max-w-[42rem]">
          Kozijnen en deuren schilderen wij ook, met verf op waterbasis als er gespoten wordt.{" "}
          <Link href="/schilderwerk" className="link font-semibold">Naar schilderwerk</Link>.
        </p>
        <FaqList items={faqs.glas} />
        <section data-section="offerte" aria-labelledby="glas-offerte">
          <h2 id="glas-offerte">Glas laten plaatsen</h2>
          <p className="mt-4 mb-6 max-w-[42rem]">Bel of mail voor een vrijblijvende offerte. Noem het type glas en waar het moet komen: erker, voordeur, overkapping of iets anders.</p>
          <CtaPair mailSubject="Vrijblijvende offerte beglazing" />
        </section>
      </div>
    </>
  );
}
