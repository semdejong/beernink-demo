import { content } from "@/content";
import CtaPair from "@/components/CtaPair";
import OfferteForm from "@/components/OfferteForm";

export default function OffertePanel({
  title = "Vrijblijvende offerte",
  intro = "Bel of mail ons voor een duidelijke offerte of begroting. Het formulier opent uw e-mailprogramma. Er wordt niets automatisch verzonden.",
}: {
  title?: string;
  intro?: string;
}) {
  const { contact } = content;
  return (
    <section data-section="offerte" id="offerte" aria-labelledby="offerte-titel" className="scroll-mt-36">
      <h2 id="offerte-titel" className="mb-4">{title}</h2>
      <p className="mb-6 max-w-[42rem]">{intro}</p>
      <CtaPair />
      <p className="mt-4 mb-8 max-w-[42rem]">
        E-mail:{" "}
        <a className="link font-semibold" href={`mailto:${contact.email}`} data-cta="mailen">
          {contact.email}
        </a>
      </p>
      <OfferteForm />
    </section>
  );
}
