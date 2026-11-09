import Link from "next/link";
import { detailFor, type Project } from "@/content";

export default function WorkRegister({ projects }: { projects: Project[] }) {
  return (
    <ul className="border-t border-navy/30">
      {projects.map((project) => {
        const detail = detailFor(project.slug);
        return (
          <li key={project.slug} className="grid gap-1 border-b border-navy/20 py-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)_auto] md:items-baseline md:gap-6">
            <Link href={`/projecten/${project.slug}`} className="font-display text-3xl font-semibold leading-tight text-navy">
              {project.title}
            </Link>
            <p>
              {detail.place ? `${detail.place}. ` : ""}
              {detail.scope}.
            </p>
            <Link href={`/projecten/${project.slug}`} className="link inline-flex min-h-11 items-center font-semibold">
              Bekijk
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
