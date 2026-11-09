import Link from "next/link";
import type { ReactNode } from "react";

export default function PageIntro({
  title,
  lede,
  crumbs,
  children,
}: {
  title: string;
  lede: string;
  crumbs: { href?: string; label: string }[];
  children?: ReactNode;
}) {
  return (
    <header data-section="intro" className="mx-auto w-full max-w-[1120px] px-5 pt-10 pb-6 md:pt-14">
      <nav aria-label="Kruimelpad" className="mb-6 text-base">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li>
            <Link href="/" className="link">Home</Link>
          </li>
          {crumbs.map((crumb) => (
            <li key={crumb.label} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-navy">/</span>
              {crumb.href ? (
                <Link href={crumb.href} className="link">{crumb.label}</Link>
              ) : (
                <span aria-current="page">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <h1 className="max-w-[20ch]">{title}</h1>
      <p className="mt-5 max-w-[42rem] text-xl leading-relaxed">{lede}</p>
      {children ? <div className="mt-6">{children}</div> : null}
      <hr className="double-rule mt-8" />
    </header>
  );
}
