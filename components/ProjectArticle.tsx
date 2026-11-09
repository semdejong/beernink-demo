import Link from "next/link";
import { content, detailFor, type Project } from "@/content";
import { Frame } from "@/components/Frame";
import PageIntro from "@/components/PageIntro";
import CtaPair from "@/components/CtaPair";
import WorkRegister from "@/components/WorkRegister";

export default function ProjectArticle({ project }: { project: Project }) {
  const detail = detailFor(project.slug);
  const related = content.projects.filter((item) => item.slug !== project.slug && detailFor(item.slug).scope === detail.scope).slice(0, 3);
  const [lead, ...rest] = project.photos;

  return (
    <>
      <PageIntro
        title={project.title}
        lede={detail.place ? `${detail.scope} · ${detail.place}` : detail.scope}
        crumbs={[{ href: "/projecten", label: "Projecten" }, { label: project.title }]}
      >
        <CtaPair />
      </PageIntro>
      <article data-section="project" className="mx-auto w-full max-w-[1120px] px-5 py-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_17rem]">
          <div className="max-w-[42rem] space-y-4">
            {project.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="h-fit border border-navy bg-warm p-5" aria-label="Gegevens bij dit werk">
            <p className="text-sm font-semibold tracking-[0.14em] text-navy uppercase">{detail.scope}</p>
            {detail.place ? (
              <p className="mt-3 font-display text-[1.85rem] leading-tight text-navy">
                {detail.place.split(", ").map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </p>
            ) : null}
            <p className="mt-4">
              <Link href={detail.serviceHref} className="link font-semibold">{detail.serviceLabel}</Link>
            </p>
            <p className="mt-3">De opnamen staan hieronder, met het bijschrift erbij.</p>
          </aside>
        </div>

        <div className="mt-10">
          <Frame photo={lead} sizes="(min-width: 1024px) 1080px, 100vw" />
        </div>
        {rest.length > 0 ? (
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {rest.map((photo) => (
              <Frame key={photo.src} photo={photo} sizes="(min-width: 768px) 50vw, 100vw" />
            ))}
          </div>
        ) : null}

        {related.length > 0 ? (
          <div className="mt-16">
            <h2>Ander {detail.scope.toLowerCase()}</h2>
            <div className="mt-6">
              <WorkRegister projects={related} />
            </div>
          </div>
        ) : null}

        <p className="mt-10">
          <Link href="/projecten" className="link font-semibold">Alle projecten</Link>
        </p>
      </article>
    </>
  );
}
