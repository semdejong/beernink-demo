import { content, offerteMailto } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";

export default function MobileBar() {
  const { contact } = content;
  return (
    <div data-section="snelbalk" className="no-print fixed inset-x-0 bottom-0 z-40 border-t border-navy bg-cream md:hidden">
      <div className="flex justify-center border-b border-navy/15">
        <SleadsBadge />
      </div>
      <div className="flex">
        <a href={contact.phoneTel} data-cta="bellen" className="btn btn-primary flex-1 px-2">
          Bel {contact.phoneDisplay}
        </a>
        <a href={offerteMailto(contact.email)} data-cta="offerte" className="btn btn-secondary flex-1 px-2">
          Offerte
        </a>
      </div>
    </div>
  );
}
