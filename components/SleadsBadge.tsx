/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Concept door Sleads – bekijk sleads.nl"
      className="no-print fixed bottom-[4.75rem] left-3 z-50 inline-flex min-h-11 items-center gap-1.5 border border-navy/20 bg-cream px-3 py-1.5 text-xs font-medium text-ink md:bottom-4"
    >
      <span className="h-1.5 w-1.5 bg-red" aria-hidden />
      Concept door <span className="font-semibold">Sleads</span>
    </a>
  );
}
