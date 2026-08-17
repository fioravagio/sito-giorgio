export const SITE_NAME = "Giorgio Fioravanti";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://giorgiofioravanti.it"
).replace(/\/+$/, "");
export const SITE_EMAIL = "fioravagio@libero.it";
export const DEFAULT_SOCIAL_IMAGE = "/assets/pol-hero-gransasso.jpg";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Civica/Politica", href: "/civica/" },
  { label: "Territorio", href: "/territorio/" },
  { label: "DJ & Eventi", href: "/dj-eventi/" },
  { label: "Mototurismo", href: "/mototurismo/" },
  { label: "YouTube", href: "/youtube-media/" },
  { label: "Grafica", href: "/grafica-branding/" },
  { label: "Contatti", href: "/contatti/" },
];

export const pageSeo = {
  home: {
    title: "Giorgio Fioravanti | Territorio, eventi e comunicazione",
    description:
      "Sito ufficiale di Giorgio Fioravanti: attività civica per L’Aquila, eventi, DJ set, grafica, mototurismo e progetti per il territorio.",
    path: "/",
  },
  civica: {
    title: "Attività civica e politica | Giorgio Fioravanti",
    description:
      "L’impegno civico e politico di Giorgio Fioravanti per L’Aquila, il Gran Sasso, i quartieri, le frazioni e la partecipazione dei cittadini.",
    path: "/civica/",
  },
  territorio: {
    title: "Territorio e associazionismo | Giorgio Fioravanti",
    description:
      "Collaborazioni, associazioni e iniziative di Giorgio Fioravanti per valorizzare L’Aquila, il commercio locale e gli spazi della comunità.",
    path: "/territorio/",
    image: "/assets/civica-gransasso-gruppo.jpg",
    imageWidth: 960,
    imageHeight: 720,
    imageAlt: "Iniziativa di gruppo sul Gran Sasso",
  },
  djEventi: {
    title: "DJ set ed eventi a L’Aquila | Giorgio Fioravanti",
    description:
      "DJ set, format musicali e supporto operativo per locali, ristoranti, eventi privati e iniziative a L’Aquila e in Abruzzo.",
    path: "/dj-eventi/",
    image: "/assets/hero-dj.jpg",
    imageWidth: 2048,
    imageHeight: 1536,
    imageAlt: "Giorgio Fioravanti durante un DJ set",
  },
  mototurismo: {
    title: "Mototurismo e Gran Sasso Bikers | Giorgio Fioravanti",
    description:
      "Itinerari, paesaggi e community: il mototurismo di Giorgio Fioravanti tra Gran Sasso, Appennino, Alpi e Dolomiti.",
    path: "/mototurismo/",
    image: "/assets/moto-dolomiti.jpg",
    imageWidth: 2048,
    imageHeight: 1536,
    imageAlt: "Viaggio in moto sulle Dolomiti",
  },
  youtubeMedia: {
    title: "YouTube, concerti e media | Giorgio Fioravanti",
    description:
      "Video, concerti, DJ set e racconti dal territorio sul canale YouTube di Giorgio Fioravanti.",
    path: "/youtube-media/",
    image: "/assets/live-anfiteatro.jpg",
    imageWidth: 1440,
    imageHeight: 1080,
    imageAlt: "Concerto dal vivo in un anfiteatro",
  },
  graficaBranding: {
    title: "Grafica e branding | Giorgio Fioravanti",
    description:
      "Progetti grafici per eventi, attività commerciali, comunicazione territoriale, social e stampa.",
    path: "/grafica-branding/",
    image: "/assets/grafica-dj-mamarita.jpg",
    imageWidth: 1080,
    imageHeight: 1080,
    imageAlt: "Progetto grafico per la serata Mamarita",
  },
  contatti: {
    title: "Contatti | Giorgio Fioravanti",
    description:
      "Contatta Giorgio Fioravanti per eventi, collaborazioni, progetti grafici, attività territoriali e istituzionali.",
    path: "/contatti/",
  },
  privacy: {
    title: "Privacy e cookie | Giorgio Fioravanti",
    description:
      "Informazioni sul trattamento dei dati personali e sui servizi esterni presenti nel sito di Giorgio Fioravanti.",
    path: "/privacy/",
  },
};

export function absoluteUrl(pathname = "/") {
  return new URL(pathname, SITE_URL).toString();
}

export function buildPageMetadata(page) {
  const canonical = absoluteUrl(page.path);
  const imagePath = page.image || DEFAULT_SOCIAL_IMAGE;
  const image = absoluteUrl(imagePath);
  const imageWidth = page.imageWidth || 2048;
  const imageHeight = page.imageHeight || 1365;
  const imageAlt = page.imageAlt || "Giorgio Fioravanti sul Gran Sasso";

  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "it_IT",
      url: canonical,
      siteName: SITE_NAME,
      title: page.title,
      description: page.description,
      images: [
        {
          url: image,
          width: imageWidth,
          height: imageHeight,
          alt: imageAlt,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image],
    },
  };
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: SITE_URL,
      image: absoluteUrl(DEFAULT_SOCIAL_IMAGE),
      email: `mailto:${SITE_EMAIL}`,
      homeLocation: {
        "@type": "City",
        name: "L’Aquila",
      },
      sameAs: [
        "https://www.instagram.com/fioravagio/",
        "https://www.facebook.com/giorgio.fioravanti/",
        "https://www.youtube.com/@fioravanti81",
      ],
      knowsAbout: [
        "L’Aquila",
        "attività civica",
        "organizzazione di eventi",
        "DJ set",
        "grafica",
        "mototurismo",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "it-IT",
      author: { "@id": `${SITE_URL}/#person` },
    },
  ],
};
