import { FileImage, LayoutTemplate, Printer } from "lucide-react";
import { ContactBand, PageHero, PageStructuredData, PhotoGrid, SectionHeading } from "../../components/PageElements";
import { buildPageMetadata, pageSeo } from "../../lib/site";

export const metadata = buildPageMetadata(pageSeo.graficaBranding);

const services = [
  { icon: LayoutTemplate, title: "Campagne e promozioni", text: "Layout coordinati per attività commerciali, campagne informative e iniziative locali." },
  { icon: FileImage, title: "Social ed eventi", text: "Locandine e contenuti digitali riconoscibili, pensati per comunicare in modo chiaro." },
  { icon: Printer, title: "Materiali per la stampa", text: "Progetti adatti a volantini, grande formato e altri supporti promozionali." },
];

const projects = [
  { src: "grafica-dj-mamarita.jpg", title: "Mamarita", caption: "Identità visiva per una serata musicale e la sua promozione social." },
  { src: "grafica-dj-donna-zelinda.jpg", title: "Donna Zelinda", caption: "Concept grafico coordinato per un appuntamento musicale." },
  { src: "pol-card-sassa-scuola.jpg", title: "Comunicazione territoriale", caption: "Contenuto informativo dedicato a un progetto per la città." },
  { src: "pol-card-candidatura-annuncio.jpg", title: "Campagna istituzionale", caption: "Messaggio e composizione visiva per una comunicazione pubblica." },
  { src: "politica-card-campo-imperatore.jpg", title: "Campo Imperatore", caption: "Racconto visivo di una proposta legata alla montagna aquilana." },
  { src: "pol-card-aperitivo-chiusura.jpg", title: "Invito evento", caption: "Grafica promozionale con informazioni e gerarchia visiva immediata." },
];

export default function GraficaBrandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageStructuredData page={pageSeo.graficaBranding} type="CollectionPage" />
      <PageHero
        eyebrow="Comunicazione visiva"
        title="Grafica e branding"
        description="Materiali per eventi, attività commerciali, comunicazione territoriale, social e stampa. Ogni progetto nasce per rendere il messaggio riconoscibile, leggibile e coerente."
        image="/assets/grafica-dj-mamarita.jpg"
        imageAlt="Locandina grafica realizzata per la serata Mamarita"
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
          <SectionHeading eyebrow="Portfolio" title="Una selezione di progetti" description="Esempi di materiali realizzati per musica, eventi e comunicazione territoriale." />
          <PhotoGrid items={projects} aspect="aspect-square" />
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
