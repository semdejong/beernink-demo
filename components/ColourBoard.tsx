import Image from "next/image";
import type { Colour } from "@/content";

export default function ColourBoard({ colours, columns = "board" }: { colours: Colour[]; columns?: "board" | "page" }) {
  const grid = columns === "board"
    ? "grid-cols-2 sm:grid-cols-4"
    : "grid-cols-2 md:grid-cols-3 xl:grid-cols-4";
  return (
    <ul className={`grid gap-px bg-navy ${grid}`}>
      {colours.map((colour) => (
        <li key={colour.name} className="bg-cream">
          <Image
            src={colour.src}
            alt=""
            width={500}
            height={500}
            sizes={columns === "board" ? "140px" : "(min-width: 1024px) 240px, 50vw"}
            className={columns === "board" ? "h-20 w-full object-cover sm:h-28" : "h-28 w-full object-cover sm:h-36"}
          />
          <p className="px-1 py-2 text-center text-sm font-semibold leading-snug text-ink">{colour.name}</p>
        </li>
      ))}
    </ul>
  );
}
