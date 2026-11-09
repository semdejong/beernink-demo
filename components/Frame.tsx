import Image from "next/image";
import type { ReactNode } from "react";
import type { Photo } from "@/content";

function Mitres() {
  return (
    <>
      <span className="mitre tl" aria-hidden="true" />
      <span className="mitre tr" aria-hidden="true" />
      <span className="mitre bl" aria-hidden="true" />
      <span className="mitre br" aria-hidden="true" />
    </>
  );
}

export function Lijst({ children, caption, className = "" }: { children: ReactNode; caption?: string; className?: string }) {
  return (
    <figure className={`lijst ${className}`}>
      <Mitres />
      {children}
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function Frame({
  photo,
  priority = false,
  sizes = "(min-width: 1024px) 540px, 100vw",
  className = "",
}: {
  photo: Photo;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <Lijst caption={photo.caption} className={className}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        priority={priority}
        sizes={sizes}
        className="h-auto w-full"
      />
    </Lijst>
  );
}
