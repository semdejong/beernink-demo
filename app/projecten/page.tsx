import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import PageIntro from "@/components/PageIntro";
import { Frame } from "@/components/Frame";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Schilderwerk van Schildersbedrijf Beernink: Villa Flora, De Duif Mode, boerderij Wassink, woonboerderij Hoitink en meer.",
};

export default function ProjectenPage() {
  return (
    <>
      <PageIntro
        title="Projecten"
        lede="Villa Flora, Te Hietbrink, De Duif Mode, de boerderij van familie Wassink en de woonboerderij van familie Hoitink. Elk project met de foto en het bijschrift erbij."
        crumbs={[{ label: "Projecten" }]}
      />
      <div data-section="projecten" className="mx-auto w-full max-w-[1120px] px-5 py-6">
        {content.projects.map((project) => (
          <article key={project.slug} className="grid items-center gap-6 border-b border-navy/25 py-10 md:grid-cols-2 md:gap-10">
            <Frame photo={project.photos[0]} sizes="(min-width: 768px) 48vw, 100vw" />
            <div>
              <h2 className="text-[2.4rem]">{project.title}</h2>
              <p className="mt-3 max-w-[38rem]">{project.summary}</p>
              <p className="mt-4">
                <Link href={`/projecten/${project.slug}`} className="link font-semibold">Bekijk het project</Link>
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
