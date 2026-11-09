import Link from "next/link";
import type { Project } from "@/content";
import { Frame } from "@/components/Frame";
import PageIntro from "@/components/PageIntro";
import CtaPair from "@/components/CtaPair";

export default function ProjectArticle({ project }: { project: Project }) {
  return (
    <>
      <PageIntro title={project.title} lede={project.summary} crumbs={[{ href: "/projecten", label: "Projecten" }, { label: project.title }]}>
        <CtaPair />
      </PageIntro>
      <article data-section="project" className="mx-auto w-full max-w-[1120px] px-5 py-10">
        <div className="max-w-[42rem] space-y-4">
          {project.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {project.photos.map((photo) => (
            <Frame key={photo.src} photo={photo} sizes="(min-width: 768px) 50vw, 100vw" />
          ))}
        </div>
        <p className="mt-10">
          <Link href="/projecten" className="link font-semibold">Alle projecten</Link>
        </p>
      </article>
    </>
  );
}
