"use client";

import { useState, type FormEvent } from "react";
import { content } from "@/content";

export default function OfferteForm() {
  const { contact, offerteSubjects } = content;
  const [note, setNote] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const naam = String(data.get("naam") ?? "").trim();
    const telefoon = String(data.get("telefoon") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const onderwerp = String(data.get("onderwerp") ?? "").trim();
    const bericht = String(data.get("bericht") ?? "").trim();
    const body = [
      `Naam: ${naam}`,
      `Telefoon: ${telefoon || "—"}`,
      `E-mail: ${email || "—"}`,
      `Onderwerp: ${onderwerp || "—"}`,
      "",
      bericht,
    ].join("\n");
    const href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `Vrijblijvende offerte — ${onderwerp || "schilderwerk"}`,
    )}&body=${encodeURIComponent(body)}`;
    setNote("Uw e-mailprogramma zou nu moeten openen. Het bericht wordt pas verstuurd als u het daar zelf verzendt.");
    window.location.href = href;
  }

  return (
    <form
      onSubmit={onSubmit}
      action={`mailto:${contact.email}`}
      method="post"
      encType="text/plain"
      className="grid gap-4"
    >
      <div>
        <label htmlFor="naam" className="mb-1 block font-semibold">Naam</label>
        <input id="naam" name="naam" type="text" autoComplete="name" required className="field" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="telefoon" className="mb-1 block font-semibold">Telefoon</label>
          <input id="telefoon" name="telefoon" type="tel" autoComplete="tel" className="field" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block font-semibold">E-mail</label>
          <input id="email" name="email" type="email" autoComplete="email" className="field" />
        </div>
      </div>
      <div>
        <label htmlFor="onderwerp" className="mb-1 block font-semibold">Waar gaat het om?</label>
        <select id="onderwerp" name="onderwerp" className="field" defaultValue="Onderhoudsschilderwerk">
          {offerteSubjects.map((subject) => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="bericht" className="mb-1 block font-semibold">Bericht</label>
        <textarea id="bericht" name="bericht" required className="field" />
      </div>
      <div>
        <button type="submit" data-cta="offerte" className="btn btn-primary">
          Open in uw e-mailprogramma
        </button>
      </div>
      <p className="max-w-[42rem] text-base">
        Het formulier opent een concept in uw e-mailprogramma, gericht aan {contact.email}. Deze pagina verstuurt niets vanzelf en bewaart het bericht niet.
      </p>
      {note ? <p role="status" className="max-w-[42rem] font-semibold text-navy">{note}</p> : null}
    </form>
  );
}
