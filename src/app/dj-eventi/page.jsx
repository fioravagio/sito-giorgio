import { CalendarDays, Headphones, RadioTower } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactBand, PageHero, PageStructuredData, PhotoGrid, SectionHeading } from "../../components/PageElements";
import { buildPageMetadata, pageSeo } from "../../lib/site";

export const metadata = buildPageMetadata(pageSeo.djEventi);

const services = [
  { icon: Headphones, title: "DJ set", text: "Selezione House e Amapiano adattata al pubblico, al luogo e al momento della serata." },
  { icon: RadioTower, title: "Setup tecnico", text: "Consolle Denon Prime 4+ e configurazione tecnica modulabile in base alle esigenze dell’evento." },
  { icon: CalendarDays, title: "Format ed eventi", text: "Supporto nella costruzione del format, nel calendario e nella comunicazione dell’appuntamento." },
];

const djPhotos = [
  { src: "dj-consolle-2026.jpg", title: "La mia consolle", caption: "Un setup che mette insieme piatti, controller e strumenti per la selezione musicale.", alt: "La consolle di Giorgio Fioravanti con piatti e controller DJ" },
  { src: "dj-estate-2026.jpg", title: "Estate 2026", caption: "Un DJ set serale all’aperto, tra musica e atmosfera estiva.", alt: "Giorgio Fioravanti alla consolle durante una serata estiva" },
  { src: "hero-dj.jpg", title: "DJ set", caption: "Musica e atmosfera costruite per il contesto dell’evento." },
  { src: "dj-aperitivo-terrazza.jpg", title: "Aperitivo in terrazza", caption: "Un format musicale pensato per accompagnare incontro e convivialità." },
  { src: "dj-club-folla.jpg", title: "Club", caption: "Energia in pista e lettura del pubblico durante la serata." },
  { src: "dj-spiaggia-amici.jpg", title: "Eventi all’aperto", caption: "Musica in contesti estivi e informali." },
  { src: "dj-indoor.jpg", title: "Indoor", caption: "Setup compatto e curato per spazi interni." },
  { src: "dj-palco-amici.jpg", title: "Palco", caption: "Eventi condivisi con artisti, organizzatori e collaboratori." },
  { src: "dj-pioneer.jpg", title: "Consolle", caption: "Esperienza tecnica maturata con setup differenti." },
];

export default function DjEventiPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageStructuredData page={pageSeo.djEventi} type="CollectionPage" />
      <PageHero
        eyebrow="Selezione musicale e atmosfera"
        title="DJ ed eventi"
        description="DJ set, format musicali e gestione operativa per locali, ristoranti, eventi privati e iniziative pubbliche. Musica, tecnica e comunicazione lavorano insieme per dare identità a ogni appuntamento."
        image="/assets/hero-dj.jpg"
        imageAlt="Giorgio Fioravanti alla consolle durante un DJ set"
        betweenContent={
          <Image
            src="/assets/brand/gf-dj-logo-black.svg"
            alt="Logo Giorgio Fioravanti DJ"
            width={3143}
            height={3071}
            unoptimized
            className="h-auto w-32 sm:w-40 lg:w-full lg:max-w-[168px]"
          />
        }
      />

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Servizi" title="Un format costruito sul contesto" />
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-zinc-200 p-6 shadow-sm">
                <service.icon className="h-7 w-7 text-[#A17B2C]" aria-hidden="true" />
                <h2 className="mt-5 text-lg font-bold">{service.title}</h2>
                <p className="mt-2 leading-relaxed text-zinc-600">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-[#F7F5EF]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Galleria" title="Serate, consolle e comunicazione" />
          <PhotoGrid
            items={djPhotos}
            className="lg:grid-cols-4"
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
          />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Oltre la consolle"
            title="Il lavoro dietro un evento"
            description="La musica è una parte della mia attività. Manifestazioni, appuntamenti nei locali e feste private raccontano anche il lavoro organizzativo: dalla costruzione del programma alla collaborazione con le persone coinvolte."
          />
          <Link href="/organizzazione-eventi/" className="mt-6 inline-flex rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-[#76591D] hover:border-[#8A6A25]">
            Scopri l’organizzazione di eventi
          </Link>
        </div>
      </section>

      <ContactBand
        title="Organizziamo il prossimo evento"
        text="Indica data, luogo, tipo di pubblico e durata: potrò rispondere con una proposta più precisa."
        subject="Richiesta DJ set o evento"
      />
    </main>
  );
}
