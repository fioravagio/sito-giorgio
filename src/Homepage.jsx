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
    title: "DJ ed eventi",
    description:
      "Musica, tecnica e organizzazione per locali, ristoranti, format ed eventi privati.",
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
    title: "Grafica e branding",
    description:
      "Materiali per eventi, attività commerciali, social, campagne e stampa.",
    href: "/grafica-branding/",
    cta: "Vedi i progetti",
  },
];

export default function Homepage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <PageHero
        eyebrow="Giorgio Fioravanti · L’Aquila"
        title="Territorio, eventi, comunicazione."
        description="Un unico spazio per conoscere il mio impegno civico, le attività sul territorio, i progetti musicali e grafici, il mototurismo e i contenuti multimediali. Ogni area ha ora una pagina dedicata, più semplice da consultare e condividere."
        image="/assets/pol-hero-gransasso.jpg"
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
          href="/contatti/"
          className="inline-flex items-center rounded-2xl border border-zinc-400 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:border-[#8A6A25] hover:text-[#76591D]"
        >
          Contattami
        </Link>
      </PageHero>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Le attività"
            title="Scegli il percorso che vuoi approfondire"
            description="La homepage offre una panoramica essenziale. Da qui puoi entrare direttamente nella pagina completa di ogni attività, senza dover scorrere un’unica pagina molto lunga."
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
