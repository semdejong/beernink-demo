"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const { company, nav, contact } = content;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [seenPath, setSeenPath] = useState(pathname);
  if (seenPath !== pathname) {
    setSeenPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header data-section="masthead" className="sticky top-0 z-40 border-b border-navy/20 bg-cream">
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-3 px-5 py-3">
        <Link href="/" className="flex min-h-11 items-center gap-3" aria-label={`${company.name}, naar home`}>
          <Image
            src={company.logo}
            alt=""
            width={453}
            height={155}
            priority
            className="h-11 w-auto md:h-14"
          />
        </Link>
        <div className="flex items-center gap-2">
          <a href={contact.phoneTel} data-cta="bellen" className="btn btn-primary px-3 md:px-4" aria-label={`Bel ${contact.phoneDisplay}`}>
            <span className="md:hidden" aria-hidden="true">Bel</span>
            <span className="hidden md:inline">Bel {contact.phoneDisplay}</span>
          </a>
          <button
            type="button"
            className="btn btn-secondary px-3 md:hidden"
            aria-expanded={open}
            aria-controls="hoofdmenu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Sluit" : "Menu"}
          </button>
        </div>
      </div>
      <nav aria-label="Hoofdmenu" className="mx-auto hidden w-full max-w-[1120px] gap-x-5 gap-y-1 px-5 pb-3 md:flex md:flex-wrap">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
            className={`inline-flex min-h-11 items-center underline-offset-4 ${isCurrent(pathname, item.href) ? "font-semibold text-navy underline" : "text-ink hover:text-navy hover:underline"}`}
          >
            {item.label}
          </Link>
        ))}
        <SleadsBadge className="ml-auto" />
      </nav>
      <nav
        id="hoofdmenu"
        aria-label="Mobiel menu"
        hidden={!open}
        className={`border-t border-navy/20 bg-cream px-5 py-2 md:hidden ${open ? "menu-in" : ""}`}
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
            className="flex min-h-11 items-center border-b border-navy/10 text-lg font-semibold text-navy"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
