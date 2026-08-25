import { CalendarDays, Headphones, RadioTower } from "lucide-react";
import Image from "next/image";
import { ContactBand, PageHero, PageStructuredData, PhotoGrid, SectionHeading } from "../../components/PageElements";
import { buildPageMetadata, pageSeo } from "../../lib/site";

export const metadata = buildPageMetadata(pageSeo.djEventi);

const services = [
  { icon: Headphones, title: "DJ set", text: "Selezione House e Amapiano adattata al pubblico, al luogo e al momento della serata." },
  { icon: RadioTower, title: "Setup tecnico", text: "Consolle Denon Prime 4+ e configurazione tecnica modulabile in base alle esigenze dell’evento." },
  { icon: CalendarDays, title: "Format ed eventi", text: "Supporto nella costruzione del format, nel calendario e nella comunicazione dell’appuntamento." },
];

const djPhotos = [
  { src: "hero-dj.jpg", title: "DJ set", caption: "Musica e atmosfera costruite per il contesto dell’evento." },
  { src: "dj-aperitivo-terrazza.jpg", title: "Aperitivo in terrazza", caption: "Un format musicale pensato per accompagnare incontro e convivialità." },
  { src: "dj-club-folla.jpg", title: "Club", caption: "Energia in pista e lettura del pubblico durante la serata." },
  { src: "dj-spiaggia-amici.jpg", title: "Eventi all’aperto", caption: "Musica in contesti estivi e informali." },
  { src: "dj-indoor.jpg", title: "Indoor", caption: "Setup compatto e curato per spazi interni." },
  { src: "dj-palco-amici.jpg", title: "Palco", caption: "Eventi condivisi con artisti, organizzatori e collaboratori." },
  { src: "dj-pioneer.jpg", title: "Consolle", caption: "Esperienza tecnica maturata con setup differenti." },
  { src: "grafica-dj-mamarita.jpg", title: "Comunicazione evento", caption: "Identità visiva coordinata con il format musicale." },
];

const archivedEvents = [
  ["22 novembre 2025", "Yoichi — Vanity Friday", "L’Aquila"],
  ["29 novembre 2025", "Private Event — DJ Set", "Gran Sasso"],
  ["14 dicembre 2025", "Christmas Aperitivo — Live DJ", "Centro storico"],
];

export default function DjEventiPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageStructuredData page={pageSeo.djEventi} type="CollectionPage" />
      <PageHero
        eyebrow="Musica e organizzazione"
        title="DJ ed eventi"
        description="DJ set, format musicali e gestione operativa per locali, ristoranti, eventi privati e iniziative pubbliche. Musica, tecnica e comunicazione lavorano insieme per dare identità a ogni appuntamento."
        image="/assets/hero-dj.jpg"
        imageAlt="Giorgio Fioravanti alla consolle durante un DJ set"
        imageOverlay={
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-4 top-4 rounded-2xl bg-black/35 p-2.5 shadow-2xl ring-1 ring-white/20 backdrop-blur-[1px] sm:right-5 sm:top-5 sm:p-3">
              <Image
                src="/assets/brand/gf-dj-logo-white.svg"
                alt="Logo Giorgio Fioravanti DJ"
                width={3143}
                height={3071}
                unoptimized
                className="h-auto w-36 drop-shadow-[0_4px_14px_rgba(0,0,0,0.65)] sm:w-44 lg:w-52"
              />
            </div>
          </div>
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
          <PhotoGrid items={djPhotos} className="lg:grid-cols-4" />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Archivio"
            title="Alcuni appuntamenti del 2025"
            description="Eventi già conclusi, conservati come riferimento delle esperienze e dei format realizzati."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {archivedEvents.map(([date, title, place]) => (
              <article key={title} className="rounded-2xl border border-zinc-200 p-5">
                <time className="text-xs font-semibold uppercase tracking-wider text-[#8A6A25]">{date}</time>
                <h2 className="mt-2 font-bold text-zinc-950">{title}</h2>
                <p className="mt-1 text-sm text-zinc-600">{place} · Evento concluso</p>
              </article>
            ))}
          </div>
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
