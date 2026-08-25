import { ExternalLink, Map, Mountain, Users } from "lucide-react";
import { ContactBand, PageHero, PageStructuredData, PhotoGrid, SectionHeading } from "../../components/PageElements";
import { buildPageMetadata, pageSeo } from "../../lib/site";

export const metadata = buildPageMetadata(pageSeo.mototurismo);

const values = [
  { icon: Map, title: "Itinerari", text: "Strade panoramiche, passi e percorsi scelti per vivere i territori con il ritmo giusto." },
  { icon: Mountain, title: "Paesaggio", text: "Gran Sasso, Appennino, Alpi e Dolomiti: la montagna è parte centrale dell’esperienza." },
  { icon: Users, title: "Community", text: "Gran Sasso Bikers unisce persone, uscite e una passione condivisa per il viaggio in moto." },
];

const motoPhotos = [
  { src: "moto-appennino-strada.jpg", title: "Appennino", caption: "Strade che attraversano paesaggi aperti e borghi." },
  { src: "moto-dolomiti.jpg", title: "Dolomiti", caption: "Viaggio, montagna e grandi panorami." },
  { src: "moto-stelvio.jpg", title: "Passo dello Stelvio", caption: "Uno degli itinerari simbolo del mototurismo alpino." },
  { src: "moto-curve.jpg", title: "Curve e percorso", caption: "Il piacere della guida dentro il paesaggio." },
  { src: "moto-gruppo-bosco.jpg", title: "Uscite di gruppo", caption: "Esperienze condivise e attenzione reciproca." },
  { src: "moto-selfie-montagna.jpg", title: "Soste in quota", caption: "Il viaggio comprende anche il tempo per osservare e raccontare." },
  { src: "moto-alpi-neve.jpg", title: "Alpi", caption: "Clima, altitudine e scenari che cambiano lungo il percorso." },
  { src: "neve-altopiano-selfie.jpg", title: "Altopiano", caption: "Montagna vissuta in stagioni e modi diversi." },
];

export default function MototurismoPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageStructuredData page={pageSeo.mototurismo} type="CollectionPage" />
      <PageHero
        eyebrow="Gran Sasso Bikers"
        title="Mototurismo"
        description="La moto come modo di conoscere paesaggi, persone e comunità. Itinerari in Abruzzo e viaggi più lontani, raccontati con lo spirito del turismo lento e della condivisione."
        image="/assets/moto-dolomiti.jpg"
        imageAlt="Mototurismo sulle Dolomiti"
      >
        <a
          href="https://www.facebook.com/GranSassoBikers/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#4A4A4A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#8A6A25]"
        >
          Visita Gran Sasso Bikers <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </PageHero>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Il viaggio" title="Strade, paesaggi e persone" />
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {values.map((item) => (
              <article key={item.title} className="rounded-3xl border border-zinc-200 bg-[#FAFAF8] p-6">
                <item.icon className="h-7 w-7 text-[#A17B2C]" aria-hidden="true" />
                <h2 className="mt-5 text-lg font-bold">{item.title}</h2>
                <p className="mt-2 leading-relaxed text-zinc-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-[#F7F5EF]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Galleria" title="Dall’Appennino alle Alpi" />
          <PhotoGrid
            items={motoPhotos}
            className="lg:grid-cols-4"
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
          />
        </div>
      </section>

      <ContactBand
        title="Vuoi conoscere le prossime iniziative?"
        text="Scrivimi per informazioni sulla community e sulle attività di Gran Sasso Bikers."
        subject="Informazioni Gran Sasso Bikers"
      />
    </main>
  );
}
