import { FileImage, LayoutTemplate, Printer } from "lucide-react";
import { ContactBand, PageHero, PageStructuredData, SectionHeading } from "../../components/PageElements";
import { buildPageMetadata, pageSeo } from "../../lib/site";

export const metadata = buildPageMetadata(pageSeo.graficaBranding);

const services = [
  { icon: LayoutTemplate, title: "Campagne e promozioni", text: "Layout coordinati per attività commerciali, campagne informative e iniziative locali." },
  { icon: FileImage, title: "Social ed eventi", text: "Locandine e contenuti digitali riconoscibili, pensati per comunicare in modo chiaro." },
  { icon: Printer, title: "Materiali per la stampa", text: "Progetti adatti a volantini, grande formato e altri supporti promozionali." },
];

export default function GraficaBrandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageStructuredData page={pageSeo.graficaBranding} />
      <PageHero
        eyebrow="Comunicazione visiva e pubblicità"
        title="Grafica e campagne pubblicitarie"
        description="Nel mio lavoro la grafica parte dall’obiettivo della campagna: a chi parlare, quale messaggio far arrivare e dove comunicarlo. L’identità visiva, i contenuti e i materiali devono lavorare insieme, dal primo contatto alla riconoscibilità del progetto."
      />

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Ambiti" title="Dal messaggio al supporto finale" />
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
          <SectionHeading eyebrow="Il metodo" title="Una campagna deve parlare con una voce sola" />
          <div className="mt-7 grid gap-6 text-zinc-700 md:grid-cols-2 md:gap-10">
            <p className="leading-relaxed">
              Prima del formato viene il messaggio. Il punto di partenza è capire
              l’attività, il pubblico e il risultato che si vuole ottenere:
              promuovere un appuntamento, far conoscere un servizio o dare
              riconoscibilità a un progetto.
            </p>
            <div className="space-y-4 leading-relaxed">
              <p>La stessa idea deve restare chiara sui diversi supporti. Colori, immagini, parole e gerarchie visive costruiscono una comunicazione coerente, leggibile sullo schermo come sui materiali stampati.</p>
              <p>Nel percorso professionale in FiorSì Srl, tra novembre 2024 e marzo 2025, mi sono occupato anche di grafica pubblicitaria, social media management e gestione dei processi comunicativi. CorelDRAW e Adobe Photoshop fanno parte dei miei strumenti di lavoro.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactBand
        title="Hai bisogno di un progetto grafico?"
        text="Indica obiettivo, formato, tempi e materiali disponibili: potrò valutare la richiesta in modo più preciso."
        subject="Richiesta progetto grafico"
      />
    </main>
  );
}
