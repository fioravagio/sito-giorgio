import {
  ArrowRight,
  Headphones,
  Megaphone,
  Mountain,
  Palette,
  Users,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "./components/ui/card";
import { PageHero, SectionHeading } from "./components/PageElements";
import SiteBrand from "./components/SiteBrand";
import SiteImage from "./components/SiteImage";

const activities = [
  {
    icon: Megaphone,
    title: "Attività civica e politica",
    description:
      "Progetti per L’Aquila, ascolto dei cittadini, quartieri, frazioni e montagna.",
    href: "/civica/",
    cta: "Scopri l’impegno",
  },
  {
    icon: Users,
    title: "Territorio e associazionismo",
    description:
      "Collaborazioni con associazioni, comitati e realtà locali per iniziative di valore.",
    href: "/territorio/",
    cta: "Esplora i progetti",
  },
  {
    icon: Headphones,
    title: "DJ set e musica",
    description:
      "Selezione musicale, consolle e atmosfera per locali, ristoranti ed eventi privati.",
    href: "/dj-eventi/",
    cta: "Scopri i DJ set",
  },
  {
    icon: Mountain,
    title: "Mototurismo",
    description:
      "Strade, paesaggi e community tra Gran Sasso, Appennino, Alpi e Dolomiti.",
    href: "/mototurismo/",
    cta: "Segui gli itinerari",
  },
  {
    icon: Youtube,
    title: "YouTube e media",
    description:
      "Concerti, musica live e contenuti che raccontano esperienze e territorio.",
    href: "/youtube-media/",
    cta: "Guarda i contenuti",
  },
  {
    icon: Palette,
    title: "Grafica e pubblicità",
    description:
      "Materiali per eventi, attività commerciali, social, campagne e stampa.",
    href: "/grafica-branding/",
    cta: "Scopri l’attività",
  },
];

export default function Homepage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <PageHero
        brand={<SiteBrand size="home" />}
        eyebrow="L’Aquila"
        title="Territorio, eventi, comunicazione."
        description="L’Aquila è il punto di partenza del mio impegno: ascoltare le persone, lavorare sul territorio e creare occasioni di incontro. La politica, l’organizzazione di eventi, la musica e la grafica sono parti di un percorso fatto di relazioni e lavoro concreto."
        image="/assets/pol-hero-gransasso-home.jpg"
        imageAlt="Giorgio Fioravanti a Campo Imperatore, sul Gran Sasso"
      >
        <Link
          href="/civica/"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#4A4A4A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#8A6A25]"
        >
          Conosci il mio impegno
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link
          href="/organizzazione-eventi/"
          className="inline-flex items-center rounded-2xl border border-zinc-400 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:border-[#8A6A25] hover:text-[#76591D]"
        >
          Scopri gli eventi
        </Link>
      </PageHero>

      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-7 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr] md:items-center lg:gap-14 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A6A25]">Chi sono</p>
            <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Competenze diverse, un legame con la città.</h2>
            <p className="mt-4 leading-relaxed text-zinc-600">
              La mia formazione è nella progettazione e gestione degli eventi.
              Il percorso lavorativo mi ha portato dall’amministrazione d’impresa
              alla sicurezza sul lavoro, dall’esperienza in ARTA Abruzzo alla
              comunicazione e alla grafica pubblicitaria.
            </p>
          </div>
          <div>
            <p className="leading-relaxed text-zinc-600">
              Esperienze che porto anche nell’impegno per L’Aquila: conoscere
              i problemi, mettere in relazione le persone e seguire i progetti
              con attenzione.
            </p>
            <Link href="/chi-sono/" className="mt-5 inline-flex items-center gap-2 font-semibold text-[#76591D] underline underline-offset-4 hover:text-[#5E4717]">
              Conosci il mio percorso <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E0C273]">
              Organizzazione di eventi
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Dalla piazza agli eventi privati.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-zinc-300">
              Un evento prende forma molto prima che arrivi il pubblico. Nel tempo
              ho lavorato a manifestazioni, appuntamenti nei locali e feste private,
              mettendo insieme persone, spazi, musica e comunicazione.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-zinc-300">
              L’Aquila Città di Montagna 2026 racconta questo lavoro: una squadra,
              la città e la montagna riunite intorno a un progetto condiviso.
            </p>
            <Link
              href="/organizzazione-eventi/"
              className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-[#C8A14A] px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-[#E0C273]"
            >
              Esplora gli eventi realizzati
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <figure className="overflow-hidden rounded-3xl border border-white/15 bg-white/5">
            <div className="aspect-[4/3] overflow-hidden">
              <SiteImage
                src="/assets/eventi-aqcm-piazza-2026.jpg"
                alt="Il pubblico in Piazza Duomo durante L’Aquila Città di Montagna 2026"
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-zinc-300">
              L’Aquila Città di Montagna · Piazza Duomo · 23–25 ottobre 2026
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Le attività"
            title="Le persone, il territorio, le mie passioni"
            description="L’impegno per la città si intreccia con la musica, i progetti di comunicazione e la scoperta dei luoghi. Sono le esperienze attraverso cui mi racconto."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <Card
                key={activity.href}
                className="group rounded-3xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:border-[#D9BE7D] hover:shadow-lg"
              >
                <CardContent className="flex h-full flex-col p-6">
                  <activity.icon className="h-7 w-7 text-[#A17B2C]" aria-hidden="true" />
                  <h2 className="mt-5 font-display text-xl font-bold text-zinc-950">
                    {activity.title}
                  </h2>
                  <p className="mt-3 flex-1 leading-relaxed text-zinc-600">
                    {activity.description}
                  </p>
                  <Link
                    href={activity.href}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-[#8A6A25] group-hover:underline"
                  >
                    {activity.cta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-[#F7F5EF]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-bold">Hai un progetto o una proposta?</h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-zinc-600">
              Possiamo parlare di eventi, collaborazioni, comunicazione, territorio o attività istituzionali.
            </p>
          </div>
          <Link
            href="/contatti/"
            className="inline-flex items-center gap-2 justify-self-start rounded-2xl bg-[#4A4A4A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#8A6A25] md:justify-self-end"
          >
            Apri i contatti
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
