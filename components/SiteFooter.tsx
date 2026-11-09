import Link from "next/link";
import { content } from "@/content";

export default function SiteFooter() {
  const { company, contact, services } = content;
  return (
    <footer data-section="footer" className="border-t border-navy/20 bg-warm">
      <div className="mx-auto grid w-full max-w-[1120px] gap-8 px-5 py-10 pb-28 md:grid-cols-3 md:pb-12">
        <div>
          <p className="font-display text-3xl font-semibold text-navy">{company.name}</p>
          <p className="mt-2">Familiebedrijf sinds {company.since}</p>
          <p className="mt-3">
            {contact.street}<br />
            {contact.postalCode} {contact.city}
          </p>
          <p className="mt-3">
            <a className="link" href={contact.phoneTel} data-cta="bellen">{contact.phoneDisplay}</a>
            <br />
            <a className="link" href={`mailto:${contact.email}`} data-cta="mailen">{contact.email}</a>
          </p>
          <p className="mt-3 text-base">{contact.kvk}<br />{contact.btw}</p>
        </div>
        <div>
          <p className="font-semibold text-navy">Diensten</p>
          <ul className="mt-2">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="link inline-flex min-h-11 items-center">{service.title}</Link>
              </li>
            ))}
            <li>
              <Link href="/projecten" className="link inline-flex min-h-11 items-center">Projecten</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-navy">Concept</p>
          <p className="mt-2 max-w-[28rem]">
            Concept door{" "}
            <a href="https://sleads.nl" target="_blank" rel="noopener noreferrer" className="link font-semibold">Sleads</a>.
            Deze conceptwebsite wordt niet geïndexeerd.
          </p>
          <p className="mt-4">
            <Link href="/privacy" className="link inline-flex min-h-11 items-center">Privacy</Link>
          </p>
          <p className="mt-2">© {company.name}</p>
        </div>
      </div>
    </footer>
  );
}
