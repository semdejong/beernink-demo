import Image from "next/image";
import Link from "next/link";
import type { Colour } from "@/content";

const groups: { title: string; names: string[] }[] = [
  { title: "Groen", names: ["Standgroen", "Rijtuigengroen", "Monumentengroen", "Grachtengroen"] },
  { title: "Licht", names: ["Mergelwit"] },
  { title: "Geel", names: ["Bentheimergeel", "Zandsteengeel", "Okergeel"] },
  { title: "Rood", names: ["Zweeds rood", "Engels rood"] },
  { title: "Blauw en bruin", names: ["Gelders blauw", "Drents bruin"] },
];

export default function ColourSpecimen({ colours }: { colours: Colour[] }) {
  const byName = new Map(colours.map((colour) => [colour.name, colour]));
  return (
    <div className="space-y-12">
      {groups.map((group) => (
        <section key={group.title} aria-labelledby={`groep-${group.title}`}>
          <h3 id={`groep-${group.title}`} className="mb-3 text-base font-semibold tracking-[0.14em] text-navy uppercase">
            {group.title}
          </h3>
          <ul className="border-t border-navy/30">
            {group.names.map((name) => {
              const colour = byName.get(name);
              if (!colour) return null;
              return (
                <li key={name} className="grid border-b border-navy/25 md:grid-cols-[minmax(8rem,14rem)_1fr]">
                  <Image
                    src={colour.src}
                    alt=""
                    width={500}
                    height={500}
                    sizes="220px"
                    className="h-20 w-full object-cover md:h-full md:min-h-28"
                  />
                  <div className="flex flex-col justify-center px-4 py-4 md:px-6">
                    <p className="font-display text-4xl font-semibold text-navy">{colour.name}</p>
                    {colour.note ? (
                      <p className="mt-2 max-w-[36rem]">
                        {colour.note}{" "}
                        <Link href="/projecten/villa-flora" className="link font-semibold">Bekijk Villa Flora</Link>.
                      </p>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
