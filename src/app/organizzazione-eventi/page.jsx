import { ArrowRight, CalendarDays, ExternalLink, Handshake, MapPinned } from "lucide-react";
import Link from "next/link";
import { ContactBand, PageHero, PageStructuredData, PhotoGrid, SectionHeading } from "../../components/PageElements";
import SiteImage from "../../components/SiteImage";
import { buildPageMetadata, pageSeo } from "../../lib/site";

export const metadata = buildPageMetadata(pageSeo.organizzazioneEventi);

const aqcmPhotos = [
  { src: "eventi-aqcm-show-cooking-2026.jpg", title: "Lo show cooking", caption: "Il pubblico incontra la cucina di montagna con lo chef Davide Nanni, sabato 24 ottobre.", alt: "Il pubblico raccolto intorno allo chef Davide Nanni durante lo show cooking" },
  { src: "eventi-aqcm-davide-nanni-2026.jpg", title: "Con Davide Nanni", caption: "Un momento con lo chef in Piazza Duomo durante la manifestazione.", alt: "Giorgio Fioravanti con lo chef Davide Nanni" },
  { src: "eventi-aqcm-pista-sci-2026.jpg", title: "La montagna in piazza", caption: "La pista in Neveplast porta l’esperienza dello sci nel centro storico.", alt: "La pista da sci in Neveplast allestita in Piazza Duomo" },
  { src: "eventi-aqcm-premiazione-2026.jpg", title: "La premiazione", caption: "Un momento di riconoscimento e condivisione durante l’edizione 2026.", alt: "La consegna di un premio durante L’Aquila Città di Montagna" },
  { src: "eventi-aqcm-comunita-2026.jpg", title: "La comunità dell’evento", caption: "Le persone che hanno vissuto le attività in Piazza Duomo.", alt: "Foto di gruppo dei partecipanti alla manifestazione in Piazza Duomo", fit: "contain" },
];

const localEvents = [
  { src: "eventi-yoichi-ottobre-2026.jpg", title: "Festa privata al Yoichi", caption: "Ottobre 2026. Allestimento musicale e atmosfera per un appuntamento privato.", alt: "La consolle e la sala allestita per una festa privata al Yoichi" },
  { src: "eventi-break-ristorazione-2026.jpg", title: "Compleanno al Break Lounge Bar", caption: "Giugno 2026. La preparazione gastronomica è parte dell’esperienza dell’evento.", alt: "Ingredienti e preparazioni per l’evento al Break Lounge Bar" },
  { src: "eventi-break-allestimento-2026.jpg", title: "Il lavoro prima dell’apertura", caption: "Break Lounge Bar, giugno 2026. Spazi e attrezzature pronti per accogliere gli ospiti.", alt: "Postazione di cucina predisposta per l’evento al Break Lounge Bar" },
  { src: "civica-intervento-microfono-2026.jpg", title: "Ferragosto in spiaggia", caption: "Estate 2026. Musica e conduzione per un momento di festa all’aperto.", alt: "Giorgio Fioravanti al microfono durante una serata estiva" },
];

const approach = [
  { icon: CalendarDays, title: "Dall’idea al programma", text: "Obiettivi, tempi e contenuti si costruiscono insieme a chi promuove l’evento, tenendo conto degli spazi e del pubblico." },
  { icon: Handshake, title: "Il lavoro di squadra", text: "Mettere in relazione organizzatori, ospiti, attività locali e collaboratori è il cuore del lavoro prima e durante l’appuntamento." },
  { icon: MapPinned, title: "L’identità dei luoghi", text: "Ogni evento può raccontare un territorio: una piazza, un locale o uno spazio all’aperto diventano parte dell’esperienza." },
];

export default function OrganizzazioneEventiPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageStructuredData page={pageSeo.organizzazioneEventi} type="CollectionPage" />
      <PageHero
        eyebrow="Persone, luoghi e progetti"
        title="Organizzazione di eventi"
        description="La mia formazione nella progettazione e gestione degli eventi, all’Università di Firenze, incontra l’esperienza sul campo: manifestazioni sul territorio, iniziative nei locali e feste private. Contesti diversi, accomunati dal lavoro di squadra e dalla cura dei dettagli."
        image="/assets/eventi-aqcm-piazza-2026.jpg"
        imageAlt="Piazza Duomo animata dal pubblico di L’Aquila Città di Montagna 2026"
      >
        <a href="#eventi-realizzati" className="inline-flex items-center gap-2 rounded-2xl bg-[#4A4A4A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#8A6A25]">
          Gli eventi realizzati <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </PageHero>

      <section id="eventi-realizzati" className="scroll-mt-24 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-center gap-9 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
            <div>
              <SectionHeading eyebrow="Manifestazioni sul territorio" title="L’Aquila Città di Montagna 2026" />
              <p className="mt-6 text-sm font-semibold text-[#76591D]">
                <time dateTime="2026-10-23">23</time>–<time dateTime="2026-10-25">25 ottobre 2026</time> · Piazza Duomo, L’Aquila
              </p>
              <div className="mt-5 space-y-4 leading-relaxed text-zinc-700">
                <p>
                  Ho partecipato al lavoro organizzativo di questa edizione insieme
                  alla squadra di L’Aquila Città di Montagna. Un’esperienza che
                  unisce il mio legame con il Gran Sasso alla passione per gli eventi.
                </p>
                <p>
                  Con il tema “Montagna Capitale”, la terza edizione ha portato
                  sport, cultura e attività all’aperto nel centro storico,
                  nell’anno di L’Aquila Capitale italiana della Cultura.
                </p>
                <p>
                  Le fotografie raccontano alcuni momenti del progetto: la piazza
                  animata, lo sci su Neveplast, le premiazioni e lo show cooking
                  dello chef Davide Nanni.
                </p>
              </div>
              <a href="https://laquila2026.it/evento/laquila-citta-di-montagna-2026-montagna-capitale/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#76591D] underline underline-offset-4 hover:text-[#5E4717]">
                L’evento nel calendario di L’Aquila 2026 <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <figure className="overflow-hidden rounded-3xl border border-zinc-200 bg-[#F7F5EF]">
              <SiteImage src="/assets/eventi-aqcm-comitato-2026.jpg" alt="Giorgio Fioravanti insieme alla squadra di L’Aquila Città di Montagna 2026 davanti al palco" sizes="(max-width: 1023px) 100vw, 40vw" className="aspect-[4/5] h-auto w-full object-cover" />
              <figcaption className="p-5 text-sm leading-relaxed text-zinc-600">Insieme alla squadra di L’Aquila Città di Montagna, in Piazza Duomo.</figcaption>
            </figure>
          </div>
          <PhotoGrid items={aqcmPhotos} />
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-[#F7F5EF]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Locali ed eventi privati" title="Ogni occasione ha il suo carattere" description="Una festa privata, il compleanno di un locale, una serata in spiaggia: la cura dell’organizzazione mette insieme accoglienza, musica e convivialità." />
          <PhotoGrid items={localEvents} className="lg:grid-cols-4" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" />
          <Link href="/dj-eventi/" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#76591D] underline underline-offset-4 hover:text-[#5E4717]">
            La parte musicale: DJ set e consolle <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Il mio modo di lavorare" title="Prima delle luci, le persone" />
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {approach.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-3xl border border-zinc-200 p-6">
                <Icon className="h-7 w-7 text-[#A17B2C]" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-zinc-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactBand title="Un evento comincia da una conversazione" text="Raccontami l’occasione, il luogo e le persone a cui vuoi rivolgerti: da qui possiamo costruire il progetto." subject="Organizzazione di un evento" />
    </main>
  );
}
