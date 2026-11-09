/**
 * Gegevens van Schildersbedrijf Beernink voor deze conceptsite.
 * Alleen feiten die op de contactpagina en de eigen projectteksten staan.
 */

export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export type Faq = { q: string; a: string };

export type Colour = {
  name: string;
  src: string;
  featured?: boolean;
  note?: string;
};

export type ProjectDetail = {
  place?: string;
  scope: "Buitenwerk" | "Binnenwerk";
  serviceHref: string;
  serviceLabel: string;
  steps?: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  paragraphs: string[];
  photos: Photo[];
};

const photo = (
  src: string,
  width: number,
  height: number,
  alt: string,
  caption: string,
): Photo => ({ src, width, height, alt, caption });

export const content = {
  slug: "beernink-demo",

  company: {
    name: "Schildersbedrijf Beernink",
    tagline: "Schilderwerk met Achterhoekse zorgvuldigheid",
    description:
      "Familiebedrijf sinds 1963 in Winterswijk. Onderhoudsschilderwerk, wandafwerking, beglazing en kleuradvies, met Henk Jan Beernink zelf op de steiger.",
    logo: "/img/schildersbedrijf-beernink-logo.png",
    city: "Winterswijk",
    region: "Achterhoek",
    since: 1963,
    takenOver: 1989,
    owner: "Henk Jan Beernink",
    school: "NIMETO Utrecht",
    area: "Winterswijk en omstreken",
  },

  colors: {
    primary: "#C4122E",
    primaryForeground: "#FFFFFF",
    accent: "#00205B",
    background: "#F4F0E6",
    foreground: "#1C1C1C",
    muted: "#E8E4DC",
  },

  seo: {
    title: "Schildersbedrijf Beernink | Schilder in Winterswijk",
    description:
      "Schildersbedrijf Beernink is een familiebedrijf in Winterswijk, sinds 1963. Onderhoudsschilderwerk, wandafwerking, beglazing en kleuradvies. Vraag vrijblijvend een offerte aan.",
    lang: "nl",
  },

  contact: {
    phoneDisplay: "0543-516687",
    phoneTel: "tel:+31543516687",
    email: "info@schildersbedrijfbeernink.nl",
    street: "Jan Stienstraweg 4-6",
    postalCode: "7101 DM",
    city: "Winterswijk",
    kvk: "KvK Zutphen reg.nr. 08048084",
    btw: "Btw.nr. 101710872B01",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Jan%20Stienstraweg%204-6%2C%207101%20DM%20Winterswijk",
  },

  nav: [
    { label: "Schilderwerk", href: "/schilderwerk" },
    { label: "Wandafwerking", href: "/wandafwerking" },
    { label: "Beglazing", href: "/beglazing" },
    { label: "Kleuren", href: "/kleuren" },
    { label: "Projecten", href: "/projecten" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ],

  promises: [
    { title: "Sinds 1963", text: "Familiebedrijf in Winterswijk en omstreken." },
    { title: "Gediplomeerde medewerkers", text: "Goede kwaliteit van het geleverde schilderwerk." },
    { title: "Duidelijke offertes", text: "Of begrotingen. Vrijblijvend, op aanvraag." },
  ],

  services: [
    {
      href: "/schilderwerk",
      title: "Schilderwerk",
      text: "Onderhoudsschilderwerk voor woningen en bedrijven, nieuwbouw, houtrotreparatie en spuitwerk met verf op waterbasis.",
      image: photo(
        "/img/schildersbedrijf-beernink-2.jpg",
        900,
        675,
        "Karakteristiek winkelpand na het schilderwerk, met licht lijstwerk op de gevel",
        "Karakteristiek winkelpand, het eindresultaat",
      ),
    },
    {
      href: "/wandafwerking",
      title: "Wandafwerking",
      text: "Stucwerk, sierpleister, egaliseren van granolmuren, structuurverf, glasweefsel of wandweefsel, en behangen van muren of plafonds.",
      image: photo(
        "/img/schildersbedrijf-beernink-12.jpg",
        900,
        675,
        "Balkenplafond met ornamenten en patroonbehang tussen de balken",
        "Eindresultaat met ornamenten en patroonbehang tussen de balken",
      ),
    },
    {
      href: "/beglazing",
      title: "Beglazing",
      text: "Isolatieglas, veiligheidsglas, figuurglas en glas in lood. Wij leveren en plaatsen het glas.",
      image: photo(
        "/img/glas-in-lood-schildersbedrijf-beernink.jpg",
        900,
        675,
        "Erker met glas-in-loodramen",
        "Erker met glas-in-lood",
      ),
    },
    {
      href: "/kleuren",
      title: "Kleuren en advies",
      text: "Authentieke kleuren uit de streek, van mergelwit tot Gelders blauw. Vraag ons om een kleuradvies.",
      image: null,
    },
  ],

  colours: [
    { name: "Standgroen", src: "/img/sikkens-standgroen.png", featured: true },
    { name: "Rijtuigengroen", src: "/img/sikkens-rijtuigengroen.png", featured: true },
    { name: "Monumentengroen", src: "/img/sikkens-monumentengroen.png", featured: true },
    { name: "Grachtengroen", src: "/img/siikkens-grachtengroen.png", featured: true },
    {
      name: "Mergelwit",
      src: "/img/sikkens-mergelwit.png",
      featured: true,
      note: "Deze kleur is gekozen voor de muren van Villa Flora aan de Wilhelminastraat te Winterswijk.",
    },
    { name: "Bentheimergeel", src: "/img/sikkens-bentheimergeel.png", featured: true },
    { name: "Zandsteengeel", src: "/img/sikkens-zandsteengeel.png" },
    { name: "Okergeel", src: "/img/sikkens-okergeel.png" },
    { name: "Zweeds rood", src: "/img/sikkens-zweeds-rood.png", featured: true },
    { name: "Engels rood", src: "/img/sikkens-engels-rood.png" },
    { name: "Gelders blauw", src: "/img/sikkens-gelders-blauw.png", featured: true },
    { name: "Drents bruin", src: "/img/sikkens-drents-bruin.png" },
  ] as Colour[],

  premises: photo(
    "/img/schildersbedrijf-beernink-bedrijfspand-400x300.jpg",
    400,
    300,
    "Bedrijfspand van Schildersbedrijf Beernink aan de Jan Stienstraweg in Winterswijk",
    "Bedrijfspand, Jan Stienstraweg 4-6 in Winterswijk",
  ),

  projects: [
    {
      slug: "villa-flora",
      title: "Schilderwerk statige Villa Flora",
      summary:
        "Deze prachtige villa staat aan de Wilhelminastraat te Winterswijk. De buitenzijde is geschilderd in mergelwit.",
      paragraphs: [
        "Deze prachtige villa staat aan de Wilhelminastraat te Winterswijk.",
        "De gehele buitenzijde is door ons geschilderd waarbij voor de muren een authentieke kleur mergelwit is gekozen.",
        "De voordeurpartij heeft prachtig smeedwerk.",
      ],
      photos: [
        photo(
          "/img/schildersbedrijf-beernink-27.jpg",
          900,
          675,
          "Statige Villa Flora aan de Wilhelminastraat te Winterswijk, lichte gevel met donkere kozijnen",
          "Statige Villa Flora in de Wilhelminastraat te Winterswijk",
        ),
        photo(
          "/img/schildersbedrijf-beernink-28.jpg",
          675,
          900,
          "Voordeur van Villa Flora met sierlijk smeedwerk in het glas",
          "Voordeurpartij met prachtig smeedwerk",
        ),
        photo(
          "/img/schildersbedrijf-beernink-29.jpg",
          675,
          900,
          "Gevelvlak van Villa Flora, geschilderd in mergelwit, met lijstwerk rond het raam",
          "Muren geschilderd in de authentieke kleur mergelwit",
        ),
        photo(
          "/img/schildersbedrijf-beernink-30.jpg",
          900,
          675,
          "Villa Flora na het buitenschilderwerk, gezien vanaf de straat",
          "Een mooi eindresultaat",
        ),
      ],
    },
    {
      slug: "te-hietbrink",
      title: "Te Hietbrink, Winterswijk",
      summary:
        "Klassiek woonhuis. Grenen houtwerk schoongekrabd en afgelakt met verf op waterbasis. Gestucte wanden met glasvlies, daarna gesausd.",
      paragraphs: [
        "Klassiek woonhuis te Winterswijk.",
        "In deze woning hebben we het grenen houtwerk geheel schoongekrabd met behulp van een afbijtmiddel. Daarna is het gegrond, geplamuurd, voorgelakt en afgelakt met verf op waterbasis.",
        "De gestucte wanden zijn met glasvlies beplakt en daarna gesausd.",
      ],
      photos: [
        photo(
          "/img/stucwerkmuren-beplakt-met-glasvlies-schildersbedrijf-beernink.jpg",
          900,
          675,
          "Gestucte muren beplakt met glasvlies",
          "Stucwerkmuren beplakt met glasvlies",
        ),
        photo(
          "/img/wandweefsel-schildersbedrijf-beernink.jpg",
          675,
          900,
          "Paneeldeur en wand na glasvlies en sauswerk",
          "Muren beplakt met glasvlies en daarna gesausd",
        ),
      ],
    },
    {
      slug: "de-duif",
      title: "Winkelpand De Duif Mode",
      summary:
        "Schilderwerk aan het winkelpand van De Duif Mode te Winterswijk. Steiger over de luifel; de redcedar luifel transparant afgewerkt.",
      paragraphs: [
        "Schilderwerk aan het winkelpand van De Duif Mode te Winterswijk.",
        "Voor dit project hebben we een steiger over de luifel heen gebouwd.",
        "De redcedar luifel heeft een transparante afwerking gekregen.",
      ],
      photos: [
        photo(
          "/img/steiger-plaatsne-de-duif-winterswijk-schildersbedrijf-beernink.jpg",
          675,
          900,
          "Steiger over de luifel van het winkelpand van De Duif Mode",
          "Steiger over de luifel heen gebouwd",
        ),
      ],
    },
    {
      slug: "winkelpand",
      title: "Karakteristiek winkelpand",
      summary: "Schilderwerk aan een karakteristiek winkelpand, van steiger tot eindresultaat.",
      paragraphs: [
        "Schilderwerk aan een karakteristiek winkelpand.",
        "De foto’s tonen het pand tijdens de werkzaamheden en het eindresultaat.",
      ],
      photos: [
        photo(
          "/img/schildersbedrijf-beernink-1.jpg",
          900,
          675,
          "Karakteristiek winkelpand in de steigers tijdens het schilderwerk",
          "Tijdens de werkzaamheden",
        ),
        photo(
          "/img/schildersbedrijf-beernink-2.jpg",
          900,
          675,
          "Hetzelfde karakteristieke winkelpand na het schilderwerk",
          "Het eindresultaat",
        ),
      ],
    },
    {
      slug: "wassink",
      title: "Boerderij familie Wassink",
      summary:
        "Schilderwerk aan een boerderij in herkenbare streekkleuren. De schuur is geschilderd met zwarte houtcoat, als vervanger voor carboleum.",
      paragraphs: [
        "Schilderwerk aan de boerderij van familie Wassink, in herkenbare streekkleuren.",
        "De schuur is geschilderd met zwarte houtcoat, als vervanger voor carboleum.",
      ],
      photos: [
        photo(
          "/img/boerderij-wassink-de-waal-schildersbedrijf-beernink.jpg",
          900,
          675,
          "Boerderij van familie Wassink, geschilderd in herkenbare streekkleuren",
          "Boerderij met herkenbare streekkleuren",
        ),
      ],
    },
    {
      slug: "hoitink",
      title: "Woonboerderij familie Hoitink",
      summary: "Schilderwerk aan de woonboerderij van familie Hoitink.",
      paragraphs: [
        "Schilderwerk aan de woonboerderij van familie Hoitink.",
        "Op de foto: de gevel en het balkenplafond van de overkapping.",
      ],
      photos: [
        photo(
          "/img/schildersbedrijf-beernink-36.jpg",
          900,
          675,
          "Gevel en balkenplafond van de overkapping bij woonboerderij Hoitink",
          "Schilderwerk gevel en balkenplafond overkapping",
        ),
      ],
    },
    {
      slug: "stucwerk-plafond",
      title: "Stucwerk en behangen plafond",
      summary:
        "Stucwerk op de muren, glasvlies, en een zachtboardplafond tussen de balken behangen met patroonbehang.",
      paragraphs: [
        "In deze woning hebben we het stucwerk van de muren verzorgd en de muren behangen met glasvlies.",
        "Het zachtboardplafond tussen de balken is behangen met patroonbehang. Het plafond is voor het behangen geschilderd.",
      ],
      photos: [
        photo(
          "/img/stucwerk-schildersbedrijf-beernink.jpg",
          900,
          675,
          "Muren tijdens het stucwerk",
          "Stucwerk muren",
        ),
        photo(
          "/img/schildersbedrijf-beernink-10.jpg",
          900,
          675,
          "Balkenplafond met zachtboardplaten vóór het behangen",
          "Balkenplafond met zachtboardplaten (voor)",
        ),
        photo(
          "/img/schildersbedrijf-beernink-12.jpg",
          900,
          675,
          "Balkenplafond na het aanbrengen van ornamenten en patroonbehang",
          "Eindresultaat met ornamenten en patroonbehang tussen de balken (na)",
        ),
      ],
    },
  ] satisfies Project[],

  details: {
    "villa-flora": {
      place: "Wilhelminastraat, Winterswijk",
      scope: "Buitenwerk",
      serviceHref: "/schilderwerk",
      serviceLabel: "Schilderwerk",
    },
    "te-hietbrink": {
      place: "Winterswijk",
      scope: "Binnenwerk",
      serviceHref: "/schilderwerk",
      serviceLabel: "Schilderwerk",
      steps: [
        "Het grenen houtwerk is geheel schoongekrabd met behulp van een afbijtmiddel.",
        "Daarna is het gegrond, geplamuurd, voorgelakt en afgelakt met verf op waterbasis.",
        "De gestucte wanden zijn met glasvlies beplakt en daarna gesausd.",
      ],
    },
    "de-duif": {
      place: "Winterswijk",
      scope: "Buitenwerk",
      serviceHref: "/schilderwerk",
      serviceLabel: "Schilderwerk",
      steps: [
        "Een steiger is over de luifel heen gebouwd.",
        "De redcedar luifel heeft een transparante afwerking gekregen.",
      ],
    },
    winkelpand: {
      scope: "Buitenwerk",
      serviceHref: "/schilderwerk",
      serviceLabel: "Schilderwerk",
      steps: [
        "Het pand tijdens de werkzaamheden, in de steigers.",
        "Hetzelfde pand na het schilderwerk.",
      ],
    },
    wassink: {
      scope: "Buitenwerk",
      serviceHref: "/kleuren",
      serviceLabel: "Kleuren en advies",
      steps: [
        "De boerderij is geschilderd in herkenbare streekkleuren.",
        "De schuur is geschilderd met zwarte houtcoat, als vervanger voor carboleum.",
      ],
    },
    hoitink: {
      scope: "Buitenwerk",
      serviceHref: "/schilderwerk",
      serviceLabel: "Schilderwerk",
    },
    "stucwerk-plafond": {
      scope: "Binnenwerk",
      serviceHref: "/wandafwerking",
      serviceLabel: "Wandafwerking",
      steps: [
        "Stucwerk van de muren, daarna behangen met glasvlies.",
        "Het zachtboardplafond tussen de balken is eerst geschilderd.",
        "Daarna is het plafond behangen met patroonbehang.",
      ],
    },
  } satisfies Record<string, ProjectDetail>,

  houtrot: [
    photo(
      "/img/houtrot-reparatie-schildersbedrijf-beernink.jpg",
      900,
      675,
      "Schilder bekijkt een herstelde en gegronde kozijnstijl naast een gemetselde penant",
      "Houtrotreparatie aan een kozijnstijl",
    ),
    photo(
      "/img/houtrotreparatie-schildersbedrijf-beernink.jpg",
      900,
      675,
      "Kozijnhoek met reparatiepasta tijdens de houtrotreparatie",
      "Houtrotreparatie in een kozijnhoek",
    ),
  ] satisfies Photo[],

  wandPhotos: [
    photo(
      "/img/stucwerk-schildersbedrijf-beernink.jpg",
      900,
      675,
      "Muren tijdens het stucwerk",
      "Stucwerk",
    ),
    photo(
      "/img/glasweefsel-schildersbedrijf-beernink.jpg",
      900,
      675,
      "Kamer met wandafwerking rond een raam en een radiator",
      "Glasweefsel",
    ),
    photo(
      "/img/behang-schildersbedrijf-beernink.jpg",
      900,
      675,
      "Wand met fleurig patroonbehang",
      "Fleurig patroonbehang",
    ),
    photo(
      "/img/behang-schildersbedrijf-beernink-2.jpg",
      900,
      675,
      "Kinderkamer met een andere variant patroonbehang",
      "Kinderkamer met een andere variant patroonbehang",
    ),
  ] satisfies Photo[],

  glassPhotos: [
    photo(
      "/img/isolatieglas-schildersbedrijf-beernink.jpg",
      900,
      675,
      "Isolatieglas in een erker",
      "Isolatieglas in erker",
    ),
    photo(
      "/img/veiligheidsglas-schildersbedrijf-beernink.jpg",
      900,
      675,
      "Gelaagd veiligheidsglas op een overkapping",
      "Gelaagd veiligheidsglas op overkapping",
    ),
    photo(
      "/img/figuurglas-schildersbedrijf-beernink.jpg",
      675,
      900,
      "Voordeur met figuurglas Mousseline Pratolina",
      "Figuurglas Mousseline Pratolina in voordeur",
    ),
    photo(
      "/img/glas-in-lood-schildersbedrijf-beernink.jpg",
      900,
      675,
      "Erker met glas-in-loodramen",
      "Erker met glas-in-lood",
    ),
  ] satisfies Photo[],

  faqs: {
    home: [
      {
        q: "Hoe vraag ik een offerte aan?",
        a: "Bel 0543-516687 of mail info@schildersbedrijfbeernink.nl. Wij maken een duidelijke offerte of begroting. De aanvraag is vrijblijvend.",
      },
      {
        q: "Geldt de winterkorting altijd?",
        a: "In de wintermaanden kunt u extra korting krijgen op binnenschilderwerk. Vraag naar de voorwaarden.",
      },
      {
        q: "Plaatsen jullie ook glas?",
        a: "Ja. Wij leveren en plaatsen isolatieglas, veiligheidsglas, figuurglas en glas in lood.",
      },
      {
        q: "Waar werken jullie?",
        a: "Wij werken in Winterswijk en omstreken.",
      },
      {
        q: "Werkt Henk Jan Beernink zelf mee?",
        a: "Ja. Hij is opgegroeid met het schildersvak, nam het bedrijf in 1989 over van zijn vader en werkt als schilder altijd mee. Daardoor staat hij in direct contact met de opdrachtgever.",
      },
    ],
    schilderwerk: [
      {
        q: "Wat verstaan jullie onder onderhoudsschilderwerk?",
        a: "Onderhoud van schilderwerk aan woningen en bedrijfspanden. Het begint met een grondige voorbehandeling en, indien nodig, houtrotreparatie. Onze medewerkers zijn gediplomeerd.",
      },
      {
        q: "Doen jullie ook nieuwbouw?",
        a: "Ja. U kunt ons ook vinden op nieuwbouwprojecten.",
      },
      {
        q: "Spuiten jullie met verf op waterbasis?",
        a: "Wij hebben ervaring met het airless spuiten van grote oppervlakken en met het spuiten van kozijnen, deuren en radiatoren met verf op waterbasis.",
      },
      {
        q: "Hoe vraag ik een offerte aan?",
        a: "Bel 0543-516687 of mail info@schildersbedrijfbeernink.nl. Het formulier op deze pagina opent uw eigen e-mailprogramma. Er wordt niets automatisch verzonden.",
      },
    ],
    wand: [
      {
        q: "Welke wandafwerking verzorgen jullie?",
        a: "Stucwerk, sierpleister, het egaliseren van granolmuren, structuurverf, glasweefsel of wandweefsel, en het behangen van muren of plafonds.",
      },
      {
        q: "Behangen jullie ook plafonds?",
        a: "Ja. Wij behangen muren en plafonds. Bij een balkenplafond met zachtboard is het plafond eerst geschilderd en daarna met patroonbehang bekleed.",
      },
    ],
    glas: [
      {
        q: "Welke soorten glas plaatsen jullie?",
        a: "Isolatieglas, veiligheidsglas, figuurglas en glas in lood. Een voorbeeld van figuurglas is Mousseline Pratolina in een voordeur.",
      },
      {
        q: "Kan glas samen met schilderwerk?",
        a: "Ja. Schilderwerk, wandafwerking, beglazing en houtrotreparatie vraagt u bij hetzelfde bedrijf aan.",
      },
    ],
    kleuren: [
      {
        q: "Zijn dit alle kleuren?",
        a: "Nee. Dit is een indruk van authentieke kleuren. Er zijn veel meer kleuren waaruit u kunt kiezen.",
      },
      {
        q: "Kan ik kleuradvies krijgen?",
        a: "Neem contact met ons op voor een kleuradvies. Bel 0543-516687 of mail info@schildersbedrijfbeernink.nl.",
      },
    ],
  } satisfies Record<string, Faq[]>,

  offerteSubjects: [
    "Onderhoudsschilderwerk",
    "Nieuwbouw",
    "Houtrotreparatie",
    "Spuitwerk",
    "Wandafwerking",
    "Beglazing",
    "Kleuradvies",
    "Anders",
  ],
};

export type Content = typeof content;

export function getProject(slug: string) {
  return content.projects.find((project) => project.slug === slug);
}

export function detailFor(slug: string): ProjectDetail {
  const detail = content.details[slug as keyof typeof content.details];
  if (!detail) {
    return { scope: "Buitenwerk", serviceHref: "/schilderwerk", serviceLabel: "Schilderwerk" };
  }
  return detail;
}

export function offerteMailto(email: string, subject = "Vrijblijvende offerte") {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}
