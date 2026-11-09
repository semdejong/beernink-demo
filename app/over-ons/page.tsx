import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import PageIntro from "@/components/PageIntro";
import { Frame } from "@/components/Frame";
import CtaPair from "@/components/CtaPair";
import WorkRegister from "@/components/WorkRegister";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Schildersbedrijf Beernink is een familiebedrijf in Winterswijk sinds 1963. Henk Jan Beernink nam het in 1989 over en werkt zelf mee als schilder.",
};

export default function OverPage() {
  const { company, premises, services, projects } = content;
  return (
    <>
      <PageIntro
        title="Over ons"
        lede="Een familiebedrijf uit Winterswijk. Sinds 1963, met Henk Jan Beernink nog altijd zelf als schilder op de klus."
        crumbs={[{ label: "Over ons" }]}
      />
      <div className="mx-auto grid w-full max-w-[1120px] gap-12 px-5 py-12 lg:grid-cols-[minmax(0,1fr)_400px]">
        <div data-section="familie" className="max-w-[42rem]">
          <h2>Twee jaartallen</h2>
          <ol className="years mt-6">
            <li>
              <p className="font-display text-4xl font-semibold text-navy">{company.since}</p>
              <p className="mt-1">Het familiebedrijf is actief. Bij ons staat kwaliteit voorop, en dat heeft erin geresulteerd dat het bedrijf een goede naam heeft in Winterswijk en omstreken.</p>
            </li>
            <li>
              <p className="font-display text-4xl font-semibold text-navy">{company.takenOver}</p>
              <p className="mt-1">Henk Jan Beernink, opgegroeid met het schildersvak, neemt het bedrijf over van zijn vader. Daarvoor volgde hij de ondernemersopleiding aan de schildersvakschool {company.school}. Hij werkt als schilder altijd mee en staat daardoor in direct contact met de opdrachtgever.</p>
            </li>
          </ol>

          <h2 className="mt-12">Dit kunt u verwachten</h2>
          <ul className="marks mt-4">
            <li>gediplomeerde medewerkers</li>
            <li>duidelijke offertes of begrotingen</li>
            <li>goede kwaliteit van het geleverde schilderwerk</li>
          </ul>
          <p className="mt-4">
            In de wintermaanden kunt u extra korting krijgen op binnenschilderwerk. Vraag naar de voorwaarden.
          </p>

          <h2 className="mt-12">Waar u ons voor belt</h2>
          <ul className="mt-4 border-t border-navy/25">
            {services.map((service) => (
              <li key={service.href} className="border-b border-navy/25 py-3">
                <Link href={service.href} className="link font-semibold">{service.title}</Link>
                <p className="mt-1 max-w-[38rem]">{service.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CtaPair />
          </div>
        </div>
        <div>
          <Frame photo={premises} sizes="400px" className="w-full max-w-[400px]" />
        </div>
      </div>
      <section data-section="werk" className="mx-auto w-full max-w-[1120px] px-5 pb-16" aria-labelledby="werk-titel">
        <h2 id="werk-titel">Werk om te bekijken</h2>
        <p className="mt-3 mb-6 max-w-[40rem]">Een kort register. De foto’s en bijschriften staan bij elk project.</p>
        <WorkRegister projects={projects} />
      </section>
    </>
  );
}
