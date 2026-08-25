import "./globals.css";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import {
  DEFAULT_SOCIAL_IMAGE,
  SITE_EMAIL,
  SITE_NAME,
  SITE_URL,
  pageSeo,
  personJsonLd,
} from "../lib/site";

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: pageSeo.home.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: pageSeo.home.description,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "personal website",
  keywords: [
    "Giorgio Fioravanti",
    "L’Aquila",
    "Gran Sasso",
    "eventi",
    "DJ",
    "grafica",
    "mototurismo",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName: SITE_NAME,
    title: pageSeo.home.title,
    description: pageSeo.home.description,
    images: [
      {
        url: DEFAULT_SOCIAL_IMAGE,
        width: 2048,
        height: 1365,
        alt: "Giorgio Fioravanti sul Gran Sasso",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.home.title,
    description: pageSeo.home.description,
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
};

export const viewport = {
  colorScheme: "light",
  themeColor: "#C8A14A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" data-scroll-behavior="smooth">
      <body>
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-lg bg-white px-4 py-3 font-semibold text-zinc-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Vai al contenuto principale
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader />
        <div id="main-content" tabIndex="-1" className="scroll-mt-24">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
