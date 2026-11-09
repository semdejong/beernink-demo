import type { Faq } from "@/content";

export default function FaqList({ items, title = "Vragen" }: { items: Faq[]; title?: string }) {
  return (
    <section data-section="faq" aria-labelledby="faq-titel">
      <h2 id="faq-titel" className="mb-6">{title}</h2>
      <div className="border-y border-navy/30">
        {items.map((item) => (
          <details key={item.q} className="border-b border-navy/15 last:border-b-0">
            <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4 py-3 text-lg font-semibold text-navy">
              {item.q}
            </summary>
            <p className="max-w-[42rem] pb-4">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
