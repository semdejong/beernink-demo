/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Concept door Sleads – bekijk sleads.nl"
      className={`no-print inline-flex min-h-11 items-center gap-1.5 px-1 text-xs font-medium text-ink ${className}`}
    >
      <span className="h-1.5 w-1.5 bg-red" aria-hidden />
      Concept door <span className="font-semibold">Sleads</span>
    </a>
  );
}
