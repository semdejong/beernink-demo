import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import PageIntro from "@/components/PageIntro";
import { Frame } from "@/components/Frame";
import FaqList from "@/components/FaqList";
import OffertePanel from "@/components/OffertePanel";

export const metadata: Metadata = {
  title: "Schilderwerk",
  description:
    "Onderhoudsschilderwerk, nieuwbouw, houtrotreparatie en spuitwerk met verf op waterbasis. Schildersbedrijf Beernink, Winterswijk.",
};

const plates = ["villa-flora", "winkelpand", "de-duif", "wassink", "hoitink", "te-hietbrink"];

export default function SchilderwerkPage() {
  const { projects, houtrot, faqs } = content;
  const shown = plates.map((slug) => projects.find((project) => project.slug === slug)).filter((project) => project != null);

  return (
    <>
      <PageIntro
        title="Schilderwerk"
        lede="Onderhoudsschilderwerk voor particulieren en bedrijven, nieuwbouw, houtrotreparatie en spuitwerk. In Winterswijk en omstreken, met Henk Jan Beernink zelf op het werk."
        crumbs={[{ label: "Schilderwerk" }]}
      />

      <div className="mx-auto w-full max-w-[1120px] space-y-16 px-5 py-12">
        <section data-section="onderhoud" aria-labelledby="onderhoud-titel">
          <h2 id="onderhoud-titel">Onderhoud aan woningen en bedrijven</h2>
          <div className="mt-4 max-w-[42rem] space-y-4">
            <p>
              Schildersbedrijf Beernink houdt zich hoofdzakelijk bezig met onderhoudsschilderwerk voor particulieren en bedrijven. Onderhoud van uw schilderwerk is bij ons in goede handen.
            </p>
            <p>
              Onze gediplomeerde medewerkers zorgen voor een zorgvuldig resultaat. Dat begint met een grondige voorbehandeling en, indien nodig, houtrotreparatie.
            </p>
            <p>
              Onderhoud aan een woning doen wij bij u thuis. Henk Jan Beernink werkt als schilder altijd mee en staat daardoor in direct contact met de opdrachtgever. Zo stemt u het werk af met iemand die zelf op de klus staat.
            </p>
          </div>
        </section>

        <section data-section="nieuwbouw" aria-labelledby="nieuwbouw-titel">
          <h2 id="nieuwbouw-titel">Nieuwbouw</h2>
          <p className="mt-4 max-w-[42rem]">
            Niet alleen verzorgen we onderhoud van schilderwerk aan woningen en bedrijfspanden. U kunt ons ook vinden op nieuwbouwprojecten.
          </p>
        </section>

        <section data-section="houtrot" aria-labelledby="houtrot-titel">
          <h2 id="houtrot-titel">Houtrotreparatie</h2>
          <p className="mt-4 max-w-[42rem]">
            Waar hout is aangetast, repareren wij dat vóór het schilderwerk. De foto’s tonen een herstelde kozijnstijl en een kozijnhoek tijdens de reparatie.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {houtrot.map((photo) => (
              <Frame key={photo.src} photo={photo} sizes="(min-width: 768px) 46vw, 100vw" />
            ))}
          </div>
        </section>

        <section data-section="spuitwerk" aria-labelledby="spuit-titel" className="border border-navy bg-cream p-6 md:p-10">
          <h2 id="spuit-titel">Airless en spuitwerk op waterbasis</h2>
          <p className="mt-4 max-w-[42rem]">
            Naast vakkundig schilderwerk hebben we ook ervaring met het airless spuiten van grote oppervlakken, en het spuiten van kozijnen, deuren en radiatoren met verf op waterbasis.
          </p>
          <ul className="marks mt-4 max-w-[42rem]">
            <li>airless spuiten van grote oppervlakken</li>
            <li>kozijnen, deuren en radiatoren</li>
            <li>verf op waterbasis</li>
          </ul>
        </section>

        <section data-section="werkwijze" aria-labelledby="werkwijze-titel">
          <h2 id="werkwijze-titel">Zo ging het bij Te Hietbrink</h2>
          <p className="mt-4 max-w-[42rem]">Klassiek woonhuis te Winterswijk. Het grenen houtwerk en de gestucte wanden zijn daar als volgt aangepakt.</p>
          <ol className="years mt-6 max-w-[40rem]">
            {content.details["te-hietbrink"].steps?.map((step) => <li key={step}>{step}</li>)}
          </ol>
          <p className="mt-4">
            <Link href="/projecten/te-hietbrink" className="link font-semibold">Bekijk Te Hietbrink</Link>
          </p>
        </section>

        <section data-section="projecten" aria-labelledby="projectplaten-titel">
          <h2 id="projectplaten-titel">Werk uit de omgeving</h2>
          <p className="mt-4 max-w-[42rem]">Een selectie uit Winterswijk en omstreken, met de namen van het pand of de familie.</p>
          <div className="mt-8 border-t border-navy/25">
            {shown.map((project) => (
              <article key={project.slug} className="grid items-center gap-6 border-b border-navy/25 py-8 md:grid-cols-2">
                <Frame photo={project.photos[0]} sizes="(min-width: 768px) 46vw, 100vw" />
                <div>
                  <h3 className="font-display text-4xl font-semibold text-navy">{project.title}</h3>
                  <p className="mt-3">{project.summary}</p>
                  <p className="mt-4">
                    <Link href={`/projecten/${project.slug}`} className="link font-semibold">Bekijk het project</Link>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <FaqList items={faqs.schilderwerk} />
        <OffertePanel />
      </div>
    </>
  );
}
