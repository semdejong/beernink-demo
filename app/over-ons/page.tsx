import type { Metadata } from "next";
import { content } from "@/content";
import PageIntro from "@/components/PageIntro";
import { Frame } from "@/components/Frame";
import CtaPair from "@/components/CtaPair";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Schildersbedrijf Beernink is een familiebedrijf in Winterswijk sinds 1963. Henk Jan Beernink nam het in 1989 over en werkt zelf mee als schilder.",
};

export default function OverPage() {
  const { company, premises } = content;
  return (
    <>
      <PageIntro
        title="Over ons"
        lede="Een familiebedrijf uit Winterswijk. Sinds 1963, met Henk Jan Beernink nog altijd zelf als schilder op de klus."
        crumbs={[{ label: "Over ons" }]}
      />
      <div className="mx-auto grid w-full max-w-[1120px] gap-10 px-5 py-12 md:grid-cols-[minmax(0,1fr)_400px]">
        <div data-section="familie" className="max-w-[42rem] space-y-4">
          <h2>Sinds {company.since}</h2>
          <p>
            Schildersbedrijf Beernink is een familiebedrijf dat sinds {company.since} actief is. Bij ons staat kwaliteit voorop en dat heeft erin geresulteerd dat ons bedrijf een goede naam heeft in Winterswijk en omstreken.
          </p>
          <p>
            Henk Jan Beernink is opgegroeid met het schildersvak en heeft in {company.takenOver} het bedrijf van zijn vader overgenomen. Hiervoor heeft hij de ondernemersopleiding aan de schildersvakschool {company.school} gevolgd. Hij werkt als schilder altijd mee en staat daardoor in direct contact met de opdrachtgever.
          </p>
          <h2 className="pt-4">Dit kunt u verwachten</h2>
          <ul className="marks">
            <li>gediplomeerde medewerkers</li>
            <li>duidelijke offertes of begrotingen</li>
            <li>goede kwaliteit van het geleverde schilderwerk</li>
          </ul>
          <p>
            In de wintermaanden kunt u extra korting krijgen op binnenschilderwerk. Vraag naar de voorwaarden.
          </p>
          <CtaPair />
        </div>
        <Frame photo={premises} sizes="400px" className="w-full max-w-[400px]" />
      </div>
    </>
  );
}
