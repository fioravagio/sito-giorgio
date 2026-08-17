import { Handshake, MapPinned, Store } from "lucide-react";
import { ContactBand, PageHero, PageStructuredData, PhotoGrid, SectionHeading } from "../../components/PageElements";
import { buildPageMetadata, pageSeo } from "../../lib/site";

export const metadata = buildPageMetadata(pageSeo.territorio);

const focusAreas = [
  {
    icon: Handshake,
    title: "Associazioni e comunità",
    text: "Collaborazione con associazioni, comitati e gruppi locali per costruire iniziative condivise.",
  },
  {
    icon: MapPinned,
    title: "Luoghi e spazi pubblici",
    text: "Attenzione ai quartieri, alle frazioni e ai luoghi in cui la comunità si incontra e cresce.",
  },
  {
    icon: Store,
    title: "Commercio di prossimità",
    text: "Valorizzazione delle attività locali e delle occasioni che mettono in relazione imprese e territorio.",
  },
];

const photos = [
  { src: "civica-gransasso-gruppo.jpg", title: "Fare rete", caption: "Persone e realtà del territorio riunite intorno a obiettivi comuni." },
  { src: "civica-conferenza.jpg", title: "Confronto pubblico", caption: "Incontri e occasioni di ascolto sui temi che riguardano la comunità." },
  { src: "territorio-legumi-negozio.jpg", title: "Prodotti e identità", caption: "Attività e produzioni che raccontano il legame con i luoghi." },
  { src: "retail-tigre-ingresso.jpg", title: "Attività commerciali", caption: "Nuove aperture e iniziative che animano l’economia locale." },
  { src: "retail-tigre-taglio-nastro.jpg", title: "Inaugurazioni", caption: "Momenti pubblici di incontro tra imprese, istituzioni e cittadini." },
  { src: "tennis-foro-campo.jpg", title: "Sport e socialità", caption: "Lo sport come occasione di partecipazione, aggregazione e racconto." },
];

export default function TerritorioPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageStructuredData page={pageSeo.territorio} type="CollectionPage" />
      <PageHero
        eyebrow="L’Aquila e comunità locali"
        title="Territorio e associazionismo"
        description="Progetti, relazioni e iniziative che nascono dall’ascolto delle persone e dal lavoro insieme alle realtà locali. Un impegno concreto per valorizzare comunità, attività e spazi condivisi."
        image="/assets/civica-gransasso-gruppo.jpg"
        imageAlt="Gruppo riunito sul Gran Sasso durante un’iniziativa territoriale"
      />

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Ambiti di lavoro"
            title="Connessioni che diventano progetti"
            description="Il territorio non è soltanto un luogo: è una rete di persone, competenze e bisogni. Il lavoro parte dal dialogo e si traduce in occasioni di partecipazione."
          />
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {focusAreas.map((item) => (
              <article key={item.title} className="rounded-3xl border border-zinc-200 bg-[#FAFAF8] p-6">
                <item.icon className="h-7 w-7 text-[#A17B2C]" aria-hidden="true" />
                <h2 className="mt-5 text-lg font-bold text-zinc-950">{item.title}</h2>
                <p className="mt-2 leading-relaxed text-zinc-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-[#F7F5EF]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Galleria"
            title="Persone, luoghi e iniziative"
            description="Una selezione di momenti legati alla vita del territorio, alle attività locali e alle occasioni di incontro."
          />
          <PhotoGrid items={photos} />
        </div>
      </section>

      <ContactBand
        title="Proponi un’iniziativa sul territorio"
        text="Se rappresenti un’associazione, un’attività o un gruppo locale, raccontami il progetto e gli obiettivi."
        subject="Proposta per il territorio"
      />
    </main>
  );
}
