import type { Metadata } from "next";
import Link from "next/link";
import { content, detailFor } from "@/content";
import PageIntro from "@/components/PageIntro";
import { Frame } from "@/components/Frame";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Schilderwerk van Schildersbedrijf Beernink: Villa Flora, De Duif Mode, boerderij Wassink, woonboerderij Hoitink en meer.",
};

export default function ProjectenPage() {
  const buiten = content.projects.filter((project) => detailFor(project.slug).scope === "Buitenwerk");
  const binnen = content.projects.filter((project) => detailFor(project.slug).scope === "Binnenwerk");
  const groups = [
    {
      id: "buitenwerk",
      title: "Buitenwerk",
      lede: "Gevels, luifels en boerderijen. Villa Flora in mergelwit, De Duif Mode, een karakteristiek winkelpand, familie Wassink en familie Hoitink.",
      projects: buiten,
    },
    {
      id: "binnenwerk",
      title: "Binnenwerk",
      lede: "Grenen houtwerk, glasvlies, stucwerk en een behangen balkenplafond.",
      projects: binnen,
    },
  ];

  return (
    <>
      <PageIntro
        title="Projecten"
        lede="Villa Flora, Te Hietbrink, De Duif Mode, de boerderij van familie Wassink en de woonboerderij van familie Hoitink. Elk project met de foto en het bijschrift erbij."
        crumbs={[{ label: "Projecten" }]}
      />
      <div data-section="projecten" className="mx-auto w-full max-w-[1120px] space-y-8 px-5 py-6">
        {groups.map((group) => (
          <section key={group.id} aria-labelledby={group.id} className="pt-4">
            <h2 id={group.id}>{group.title}</h2>
            <p className="mt-3 max-w-[40rem]">{group.lede}</p>
            {group.projects.map((project) => {
              const detail = detailFor(project.slug);
              return (
                <article key={project.slug} className="grid items-center gap-6 border-b border-navy/25 py-10 md:grid-cols-2 md:gap-10">
                  <Frame photo={project.photos[0]} sizes="(min-width: 768px) 48vw, 100vw" />
                  <div>
                    <p className="text-sm font-semibold tracking-[0.14em] text-navy uppercase">{detail.place ?? detail.scope}</p>
                    <h3 className="mt-2 font-display text-4xl font-semibold text-navy">{project.title}</h3>
                    <p className="mt-3 max-w-[38rem]">{project.summary}</p>
                    <p className="mt-4">
                      <Link href={`/projecten/${project.slug}`} className="link font-semibold">Bekijk het project</Link>
                    </p>
                  </div>
                </article>
              );
            })}
          </section>
        ))}
      </div>
    </>
  );
}
