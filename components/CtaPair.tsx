import { content, offerteMailto } from "@/content";

export default function CtaPair({
  offerteLabel = "Vrijblijvende offerte",
  mailSubject = "Vrijblijvende offerte",
}: {
  offerteLabel?: string;
  mailSubject?: string;
}) {
  const { contact } = content;
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a href={contact.phoneTel} data-cta="bellen" className="btn btn-primary">
        Bel {contact.phoneDisplay}
      </a>
      <a href={offerteMailto(contact.email, mailSubject)} data-cta="offerte" className="btn btn-secondary">
        {offerteLabel}
      </a>
    </div>
  );
}
