import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { Frame } from "@/components/Frame";
import CtaPair from "@/components/CtaPair";
import ColourBoard from "@/components/ColourBoard";
import FaqList from "@/components/FaqList";
import WorkRegister from "@/components/WorkRegister";

export default function HomePage() {
  const { company, contact, services, colours, projects, promises, houtrot, premises, faqs } = content;
  const hero = projects[0].photos[3];
  const villaFront = projects[0].photos[0];
  const door = projects[0].photos[1];
  const wall = projects[0].photos[2];
  const featured = colours.filter((colour) => colour.featured);
  const wand = services[1];
  const glas = services[2];

  return (
    <>
      <section data-section="hero" className="mx-auto grid w-full max-w-[1120px] items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-16">
        <div className="rise">
          <p className="mb-4 text-base font-semibold tracking-wide text-navy">
            {company.city} · sinds {company.since}
          </p>
          <h1>{company.tagline}</h1>
          <p className="mt-5 max-w-[40rem]">
            Schildersbedrijf Beernink is een familiebedrijf dat sinds {company.since} actief is. Henk Jan Beernink nam het bedrijf in {company.takenOver} over van zijn vader, na de ondernemersopleiding aan de schildersvakschool {company.school}. Hij werkt als schilder altijd mee.
          </p>
          <div className="mt-6">
            <CtaPair />
          </div>
          <p className="mt-4">
            Of mail naar{" "}
            <a className="link font-semibold" href={`mailto:${contact.email}`} data-cta="mailen">
              {contact.email}
            </a>
          </p>
        </div>
        <Frame
          photo={{ ...hero, caption: "Villa Flora aan de Wilhelminastraat, muren in mergelwit" }}
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </section>

      <section data-section="geloofwaardigheid" className="border-y border-navy/20 bg-warm" aria-label="Wat u van ons mag verwachten">
        <ul className="mx-auto grid w-full max-w-[1120px] md:grid-cols-3">
          {promises.map((item) => (
            <li key={item.title} className="border-navy/15 px-5 py-6 md:border-l md:first:border-l-0">
              <p className="min-h-[4.4rem] font-display text-[1.7rem] font-semibold leading-tight text-navy">{item.title}</p>
              <span className="my-3 block h-px w-8 bg-red" aria-hidden="true" />
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section data-section="diensten" className="mx-auto w-full max-w-[1120px] px-5 py-16 md:py-20" aria-labelledby="diensten-titel">
        <h2 id="diensten-titel" className="max-w-[16ch]">Vier ingangen, één adres</h2>
        <p className="mt-4 max-w-[40rem]">
          Schilderwerk, wandafwerking, beglazing en kleuradvies. U herkent het werk en belt of mailt voor een vrijblijvende offerte.
        </p>
        <div className="mt-8 border-t border-navy/25">
          {services.map((service, index) => (
            <article key={service.href} className={`grid items-center gap-6 border-b border-navy/25 py-8 md:grid-cols-2 md:gap-10 ${index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <h3 className="font-display text-4xl font-semibold text-navy md:text-5xl">{service.title}</h3>
                <p className="mt-3 max-w-[38rem]">{service.text}</p>
                <p className="mt-4">
                  <Link href={service.href} className="link font-semibold">
                    Bekijk {service.title.toLowerCase()}
                  </Link>
                </p>
              </div>
              {service.image ? (
                <Frame photo={service.image} sizes="(min-width: 768px) 46vw, 100vw" />
              ) : (
                <ul className="border-t border-navy/30">
                  {featured.slice(0, 4).map((colour) => (
                    <li key={colour.name} className="grid grid-cols-[5.5rem_1fr] border-b border-navy/25">
                      <Image src={colour.src} alt="" width={160} height={80} className="h-14 w-full object-cover" />
                      <span className="flex items-center px-4 font-display text-2xl font-semibold text-navy">{colour.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section data-section="streekkleuren" className="bg-warm py-16 md:py-20" aria-labelledby="kleuren-titel">
        <div className="mx-auto w-full max-w-[1120px] px-5">
          <h2 id="kleuren-titel">Streekkleurenbord</h2>
          <p className="mt-4 max-w-[40rem]">
            Om u een indruk te geven, een rij authentieke kleuren. Mergelwit gebruikten wij op de muren van Villa Flora. Er is meer keuze. Vraag ons om kleuradvies.
          </p>
          <div className="mt-8">
            <ColourBoard colours={featured} />
          </div>
          <p className="mt-6">
            <Link href="/kleuren" className="link font-semibold">Alle twaalf kleuren en advies</Link>
          </p>
        </div>
      </section>

      <section data-section="citaat" className="border-y border-navy/20">
        <div className="mx-auto grid w-full max-w-[1120px] gap-6 px-5 py-14 md:grid-cols-[minmax(0,1fr)_16rem] md:items-end">
          <blockquote className="pull">
            De gehele buitenzijde is door ons geschilderd waarbij voor de muren een authentieke kleur mergelwit is gekozen.
          </blockquote>
          <p>
            Villa Flora<br />
            Wilhelminastraat, Winterswijk
          </p>
        </div>
      </section>

      <section data-section="villa-flora" className="mx-auto w-full max-w-[1120px] px-5 py-16 md:py-20" aria-labelledby="villa-titel">
        <h2 id="villa-titel" className="max-w-[18ch]">Schilderwerk statige Villa Flora</h2>
        <p className="mt-4 max-w-[42rem]">Deze prachtige villa staat aan de Wilhelminastraat te Winterswijk.</p>
        <p className="mt-3 max-w-[42rem]">De gehele buitenzijde is door ons geschilderd waarbij voor de muren een authentieke kleur mergelwit is gekozen.</p>
        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
          <Frame photo={villaFront} sizes="(min-width: 768px) 55vw, 100vw" />
          <div className="grid gap-8">
            <Frame photo={door} sizes="(min-width: 768px) 30vw, 100vw" />
            <Frame photo={wall} sizes="(min-width: 768px) 30vw, 100vw" />
          </div>
        </div>
        <p className="mt-6">
          <Link href="/projecten/villa-flora" className="link font-semibold">Bekijk Villa Flora</Link>
        </p>
      </section>

      <section data-section="houtrot" className="border-y border-navy/20 bg-warm py-16 md:py-20" aria-labelledby="houtrot-titel">
        <div className="mx-auto w-full max-w-[1120px] px-5">
          <h2 id="houtrot-titel">Houtrotreparatie en onderhoud</h2>
          <p className="mt-4 max-w-[42rem]">
            Schildersbedrijf Beernink houdt zich hoofdzakelijk bezig met onderhoudsschilderwerk voor particulieren en bedrijven. Onderhoud van uw schilderwerk is bij ons in goede handen. Een goed resultaat begint met een grondige voorbehandeling en, indien nodig, houtrotreparatie.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {houtrot.map((photo) => (
              <Frame key={photo.src} photo={photo} sizes="(min-width: 768px) 46vw, 100vw" />
            ))}
          </div>
          <p className="mt-6">
            <Link href="/schilderwerk" className="link font-semibold">Meer over schilderwerk</Link>
          </p>
        </div>
      </section>

      <section data-section="wand-glas" className="mx-auto grid w-full max-w-[1120px] gap-12 px-5 py-16 md:grid-cols-2 md:py-20" aria-labelledby="wandglas-titel">
        <div>
          <h2 id="wandglas-titel">Wand en glas</h2>
          <h3 className="mt-6 font-display text-3xl font-semibold text-navy">Wandafwerking</h3>
          <p className="mt-3">{wand.text}</p>
          {wand.image ? <div className="mt-5"><Frame photo={wand.image} sizes="(min-width: 768px) 46vw, 100vw" /></div> : null}
          <p className="mt-4"><Link href="/wandafwerking" className="link font-semibold">Naar wandafwerking</Link></p>
        </div>
        <div className="md:pt-16">
          <h3 className="font-display text-3xl font-semibold text-navy">Beglazing</h3>
          <p className="mt-3">{glas.text}</p>
          {glas.image ? <div className="mt-5"><Frame photo={glas.image} sizes="(min-width: 768px) 46vw, 100vw" /></div> : null}
          <p className="mt-4"><Link href="/beglazing" className="link font-semibold">Naar beglazing</Link></p>
        </div>
      </section>

      <section data-section="werkregister" className="mx-auto w-full max-w-[1120px] px-5 pb-16" aria-labelledby="register-titel">
        <h2 id="register-titel">Het werk in het kort</h2>
        <p className="mt-3 mb-6 max-w-[40rem]">Buiten en binnen, met de namen van het pand of de familie. De foto’s staan op de projectpagina.</p>
        <WorkRegister projects={projects} />
      </section>

      <section data-section="winterkorting" className="bg-navy text-cream" aria-labelledby="winter-titel">
        <div className="mx-auto w-full max-w-[1120px] px-5 py-14 md:py-16">
          <hr className="rule-on-navy mb-8" />
          <h2 id="winter-titel" className="text-cream">Winterkorting op binnenschilderwerk</h2>
          <p className="mt-4 max-w-[40rem] text-cream">
            In de wintermaanden kunt u extra korting krijgen op binnenschilderwerk. Vraag naar de voorwaarden.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={contact.phoneTel} data-cta="bellen" className="btn btn-primary">Bel {contact.phoneDisplay}</a>
            <a href={`mailto:${contact.email}?subject=${encodeURIComponent("Voorwaarden winterkorting")}`} data-cta="offerte" className="btn btn-cream">
              Vraag naar de voorwaarden
            </a>
          </div>
        </div>
      </section>

      <section data-section="over" className="mx-auto grid w-full max-w-[1120px] items-start gap-10 px-5 py-16 md:grid-cols-[minmax(0,1fr)_400px] md:py-20" aria-labelledby="over-titel">
        <div>
          <h2 id="over-titel">Familiebedrijf sinds {company.since}</h2>
          <p className="mt-4 max-w-[42rem]">
            Bij ons staat kwaliteit voorop en dat heeft erin geresulteerd dat ons bedrijf een goede naam heeft in Winterswijk en omstreken.
          </p>
          <p className="mt-3 max-w-[42rem]">
            Henk Jan Beernink is opgegroeid met het schildersvak en heeft in {company.takenOver} het bedrijf van zijn vader overgenomen. Hiervoor heeft hij de ondernemersopleiding aan de schildersvakschool {company.school} gevolgd. Hij werkt als schilder altijd mee en staat daardoor in direct contact met de opdrachtgever.
          </p>
          <p className="mt-5">
            <Link href="/over-ons" className="link font-semibold">Over het familiebedrijf</Link>
          </p>
        </div>
        <Frame photo={premises} sizes="400px" className="w-full max-w-[400px]" />
      </section>

      <section className="mx-auto w-full max-w-[1120px] px-5 pb-16">
        <FaqList items={faqs.home} />
      </section>

      <section data-section="contact" id="contact" className="scroll-mt-36 border-t border-navy/20 bg-warm" aria-labelledby="contact-titel">
        <div className="mx-auto grid w-full max-w-[1120px] gap-8 px-5 py-16 md:grid-cols-2">
          <div>
            <h2 id="contact-titel">Contact</h2>
            <p className="mt-4 max-w-[36rem]">Bel of mail voor een vrijblijvende offerte of begroting.</p>
            <address className="mt-5 not-italic">
              <p className="font-semibold text-navy">{company.name}</p>
              <p>{contact.street}</p>
              <p>{contact.postalCode} {contact.city}</p>
              <p className="mt-3">
                <a className="link font-semibold" href={contact.phoneTel} data-cta="bellen">{contact.phoneDisplay}</a>
              </p>
              <p>
                <a className="link font-semibold" href={`mailto:${contact.email}`} data-cta="mailen">{contact.email}</a>
              </p>
              <p className="mt-3">{contact.kvk}</p>
              <p>{contact.btw}</p>
            </address>
            <p className="mt-4">
              <a className="link font-semibold" href={contact.mapHref} target="_blank" rel="noopener noreferrer">
                Zoek het adres op de kaart
              </a>
            </p>
          </div>
          <div>
            <CtaPair />
            <p className="mt-6">
              <Link href="/contact#offerte" className="link font-semibold" data-cta="offerte">
                Offerte via uw e-mailprogramma
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
