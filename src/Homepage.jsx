import "./index.css";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Headphones,
  Megaphone,
  Palette,
  Youtube,
  Users,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";

/* ---------- DATI ---------- */

const activities = [
  {
    icon: Megaphone,
    title: "Attività Civica/Politica",
    desc: "Progetti per L'Aquila: turismo, sport, spazi urbani, partecipazione.",
    cta: "Scopri iniziative",
    href: "#civica",
  },
  {
    icon: Users,
    title: "Territorio & Associazionismo",
    desc: "Reti locali, comitati e progettazione dal basso per valorizzare il territorio.",
    cta: "Partecipa",
    href: "#associazionismo",
  },
  {
    icon: Headphones,
    title: "DJ & Eventi",
    desc: "Selezioni House/Amapiano, format eleganti, gestione tecnica e comunicazione.",
    cta: "Prenota un DJ Set",
    href: "#dj",
  },
  {
    icon: Youtube,
    title: "YouTube & Media",
    desc: "Clip da concerti, DJ content e storytelling del territorio.",
    cta: "Guarda i video",
    href: "#youtube",
  },
  {
    icon: Palette,
    title: "Grafica & Branding",
    desc: "Volantini supermercati, loghi, layout social e stampa.",
    cta: "Vedi portfolio",
    href: "#design",
  },
  {
    icon: Users,
    title: "Mototurismo",
    desc: "Itinerari, eventi e turismo su due ruote. Community Gran Sasso Bikers.",
    cta: "Scopri la community",
    href: "#mototurismo",
  },
];

const upcoming = [
  {
    date: "Ven 22 Nov",
    title: "Yoichi — Vanity Friday",
    place: "L'Aquila",
    href: "#",
  },
  {
    date: "Sab 29 Nov",
    title: "Private Event — DJ Set",
    place: "Gran Sasso",
    href: "#",
  },
  {
    date: "Dom 14 Dic",
    title: "Christmas Aperitivo — Live DJ",
    place: "Centro Storico",
    href: "#",
  },
];

const experiencesTimeline = [
  {
    tag: "Mototurismo",
    title: "Gran Sasso Bikers",
    text: "Itinerari in moto tra Gran Sasso, Appennino e Dolomiti. Curve, passi di montagna e turismo lento.",
  },
  {
    tag: "Montagna",
    title: "Gran Sasso e trekking",
    text: "Escursioni in quota, viste ampie e territori raccontati anche fuori dalla moto.",
  },
  {
    tag: "Concerti",
    title: "Live in tutta Italia",
    text: "Concerti allo stadio, anfiteatri e festival: musica dal vivo e contenuti per YouTube.",
  },
  {
    tag: "Tempo libero",
    title: "Mercatini, stadio, città",
    text: "Giorni più normali: mercatini di Natale, partite allo stadio, giri in città.",
  },
];

// foto collegate alla timeline, usate nella galleria orizzontale
const experiencePhotos = [
  "exp-mercatino-brezel.jpg",
  "exp-stadio-tifoso.jpg",
  "exp-caseificio-vannulo.jpg",
  "exp-montagna-selfie.jpg",
];

const liveConcertPhotos = [
  "live-anfiteatro.jpg",
  "live-festival-birra.jpg",
  "live-laquila-scalinata.jpg",
  "live-olimpico-scale.jpg",
  "live-stadio-parterre.jpg",
];

const politicsPhotos = [
  {
    src: "politica-card-campo-imperatore.jpg",
    label: "Campo Imperatore",
    caption:
      "Lavoro politico sulla montagna e sul turismo in quota: strategia per L'Aquila città di montagna.",
  },
  {
    src: "politica-evento-arta.jpg",
    label: "Eventi sul territorio",
    caption:
      "Incontro istituzionale con gli enti regionali su ambiente e sviluppo.",
  },
  {
    src: "politica-cena-gruppo.jpg",
    label: "Cena con sostenitori",
    caption:
      "Serata di confronto e sostegno con militanti, amici e simpatizzanti.",
  },
  {
    src: "politica-serata-applausi.jpg",
    label: "Serata di comizio",
    caption:
      "Applausi e partecipazione durante un evento pubblico in città.",
  },
  {
    src: "politica-montagna-incontro.jpg",
    label: "Incontro in montagna",
    caption:
      "Sopralluoghi e confronti sulle politiche per la montagna aquilana.",
  },
  {
    src: "politica-montagna-sopralluogo.jpg",
    label: "Sopralluogo Gran Sasso",
    caption:
      "Verifica sul campo delle criticità e delle opportunità turistiche.",
  },
  {
    src: "politica-salvini-palco.jpg",
    label: "Comizio nazionale",
    caption:
      "Selfie dal palco durante un grande evento politico con i vertici nazionali.",
  },
  {
    src: "politica-incontro-elettorale-01.jpg",
    label: "Incontro elettorale",
    caption:
      "Momenti di confronto diretto con i cittadini durante la campagna.",
  },
  {
    src: "politica-incontro-elettorale-02.jpg",
    label: "Incontro elettorale",
    caption:
      "Dialogo con amministratori e rappresentanti del territorio.",
  },
  {
    src: "politica-incontro-elettorale-03.jpg",
    label: "Incontro elettorale",
    caption:
      "Serata di campagna elettorale in centro città.",
  },
  {
    src: "politica-camion-manifesto.jpg",
    label: "Camion vela",
    caption:
      "Il messaggio elettorale in movimento tra quartieri e frazioni.",
  },
  {
    src: "pol-camion-manifesto-centro.jpg",
    label: "Camion in centro",
    caption:
      "Mezzo pubblicitario davanti ai luoghi simbolo della città.",
  },
  {
    src: "pol-maxi-impianto-pubblicitario.jpg",
    label: "Maxi impianto",
    caption:
      "Manifesto stradale con il claim “L’Aquila che voglio”.",
  },
  {
    src: "pol-card-biondi-sindaco.jpg",
    label: "Con Biondi sindaco",
    caption:
      "Grafica ufficiale a sostegno della coalizione di centrodestra.",
  },
  {
    src: "pol-card-aperitivo-chiusura.jpg",
    label: "Aperitivo di chiusura",
    caption:
      "Invito per l’evento di chiusura della campagna elettorale.",
  },
  {
    src: "pol-card-candidatura-annuncio.jpg",
    label: "Annuncio di candidatura",
    caption:
      "Post ufficiale che presenta la candidatura al Consiglio comunale.",
  },
  {
    src: "pol-card-sassa-scuola.jpg",
    label: "Sassa – Scuola",
    caption:
      "Comunicato sulla riqualificazione dell’ex sito scolastico di Sassa.",
  },
  {
    src: "pol-torta-volantini.jpg",
    label: "Torta elettorale",
    caption:
      "Una torta scenografica per distribuire biglietti e messaggi.",
  },
  {
    src: "pol-riunione-lega-abruzzo.jpg",
    label: "Lega Abruzzo",
    caption:
      "Riunione operativa nella sede provinciale del partito.",
  },
  {
    src: "pol-trio-comizio-serale.jpg",
    label: "Team sul territorio",
    caption:
      "Serata di comizio insieme a colleghi e amministratori.",
  },
];

/* ---------- COMPONENTI ---------- */

function SectionTitle({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-3">
      {Icon && <Icon className="h-6 w-6 text-[#C8A14A]" />}
      <h2 className="accent-bar font-display text-2xl md:text-3xl font-bold text-[#111111]">
        {children}
      </h2>
    </div>
  );
}

function ImageCarousel({ items }) {
  // Normalizzo: accetto sia array di stringhe che di oggetti
  const normalized = items.map((item) => {
    if (typeof item === "string") {
      return {
        src: `/assets/${item}`,
        label: "",
        caption: "",
      };
    }

    const baseSrc = item.src?.startsWith("/assets")
      ? item.src
      : `/assets/${item.src}`;

    return {
      src: baseSrc,
      label: item.label ?? "",
      caption: item.caption ?? item.alt ?? "",
    };
  });

  return (
    <div className="mt-4 overflow-x-auto pb-4">
      <div className="flex gap-4 min-w-max">
        {normalized.map((photo) => (
          <Card
            key={photo.src}
            className="w-72 shrink-0 rounded-2xl bg-white border border-zinc-200 hover:shadow-lg transition"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-t-2xl bg-zinc-100">
              <img
                src={photo.src}
                alt={photo.caption || photo.label || ""}
                className="h-full w-full object-cover"
              />
            </div>
            {(photo.label || photo.caption) && (
              <CardContent className="p-4">
                {photo.label && (
                  <div className="font-medium text-zinc-900">
                    {photo.label}
                  </div>
                )}
                {photo.caption && (
                  <div className="text-xs text-zinc-600 mt-1">
                    {photo.caption}
                  </div>
                )}
              </CardContent>
            )}
          </Card>
        ))}
      </div>
      <div className="mt-2 text-xs text-zinc-500">
        Scorri orizzontalmente per vedere tutte le foto.
      </div>
    </div>
  );
}

function TimelineList({ items }) {
  return (
    <ol className="relative mt-6 border-l border-zinc-200 space-y-6">
      {items.map((item) => (
        <li key={item.title} className="ml-4">
          <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full border border-white bg-[#C8A14A]" />
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/3">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                {item.year}
              </p>
              <h3 className="text-sm font-semibold text-zinc-900">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-600">{item.desc}</p>
            </div>
            {item.img && (
              <div className="md:flex-1">
                <div className="rounded-2xl overflow-hidden ring-1 ring-zinc-200 bg-zinc-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-40 md:h-48 object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ---------- PAGINA ---------- */

export default function Homepage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0EFEB] via-white to-[#F0EFEB] text-[#111111]">
    
    {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/75 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          {/* Logo a sinistra */}
          <a
            href="#home"
            className="font-semibold tracking-tight text-xl whitespace-nowrap"
          >
            Giorgio Fioravanti
          </a>

          {/* Nav SEMPRE visibile, in ordine come le sezioni */}
          <nav className="flex flex-1 justify-center gap-3 md:gap-6 text-xs md:text-sm text-zinc-700 flex-wrap">
<a href="/civica" className="hover:text-zinc-900">
  Civica/Politica
</a>
            <a href="#associazionismo" className="hover:text-zinc-900">
              Territorio &amp; Associazionismo
            </a>
            <a href="#dj" className="hover:text-zinc-900">
              DJ &amp; Eventi
            </a>
            <a href="#mototurismo" className="hover:text-zinc-900">
              Mototurismo
            </a>
            <a href="#youtube" className="hover:text-zinc-900">
              YouTube
            </a>
            <a href="#design" className="hover:text-zinc-900">
              Grafica
            </a>
            <a href="#contatti" className="hover:text-zinc-900">
              Contatti
            </a>
          </nav>

          {/* Pulsante a destra → scroll a contatti, SEMPRE visibile */}
          <div className="flex-shrink-0">
            <a href="#contatti">
              <Button className="rounded-2xl !bg-[#4A4A4A] !text-white hover:!bg-[#C8A14A] hover:!text-white text-xs md:text-sm px-3 md:px-4">
                Contattami
              </Button>
            </a>
          </div>
        </div>
      </header>


      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_80%_-10%,rgba(200,161,74,0.18),transparent),radial-gradient(900px_520px_at_10%_120%,rgba(200,161,74,0.12),transparent)] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
              >
                Musica, Territorio, Design.
              </motion.h1>

              <p className="mt-4 text-lg text-zinc-600 max-w-prose">
                DJ &amp; organizzatore di eventi, attivo nei progetti civici
                dell&apos;Aquila, creator su YouTube e graphic designer. Un
                unico hub per tutto ciò che faccio: chiaro, rapido, di qualità.
              </p>

              {/* BOTTONI HERO */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="rounded-2xl !bg-[#4A4A4A] !text-white hover:!bg-[#C8A14A] hover:!text-white"
                >
                  Prenota SUBITO un DJ Set{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl !border-[#4A4A4A] !text-[#4A4A4A] hover:!border-[#C8A14A] hover:!text-[#C8A14A]"
                >
                  Scrivimi
                </Button>
              </div>

              {/* MINI GRID ATTIVITÀ */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                {activities.map((a) => (
                  <Card
                    key={a.title}
                    className="rounded-2xl bg-white border border-zinc-200 hover:shadow-lg hover:-translate-y-0.5 transition"
                  >
                    <CardContent className="p-4">
                      <a.icon className="h-6 w-6 text-[#C8A14A]" />
                      <div className="mt-2 font-semibold">{a.title}</div>
                      <p className="text-sm text-zinc-600">{a.desc}</p>
                      <a
                        href={a.href}
                        className="mt-2 inline-flex items-center text-sm font-medium text-[#C8A14A] hover:underline"
                      >
                        {a.cta}{" "}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* HERO IMAGE – POLITICA & GRAN SASSO */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-zinc-200 bg-zinc-100">
                <img
                  src="/assets/pol-hero-gransasso.jpg"
                  alt="Giorgio Fioravanti a Campo Imperatore"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-white/10 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-xl border border-zinc-200 shadow">
                  <span className="text-xs font-medium">
                    Attività politica &amp; civica
                  </span>
                </div>
              </div>
              <div className="mt-3 text-xs text-zinc-500">
                Campo Imperatore, L’Aquila — identità, territorio, futuro.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CIVICA / POLITICA */}
      <section id="civica" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle icon={Megaphone}>
            Attività civica &amp; politica
          </SectionTitle>

          <p className="mt-3 text-zinc-600 max-w-prose">
            Impegno per L&apos;Aquila tra montagna, quartieri e centro storico:
            proposte per il turismo, lo sport, gli spazi urbani e la
            partecipazione dei cittadini. Dalle campagne elettorali ai progetti
            su Campo Imperatore e Gran Sasso.
          </p>

          <div className="mt-6">
            <ImageCarousel items={politicsPhotos} />
          </div>
        </div>
      </section>

      {/* TERRITORIO & ASSOCIAZIONISMO */}
      <section id="associazionismo" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle icon={Users}>
            Territorio &amp; Associazionismo
          </SectionTitle>
          <p className="mt-3 text-zinc-600 max-w-prose">
            Collaborazioni con associazioni, comitati di quartiere e realtà
            locali. Progetti, eventi, inaugurazioni e iniziative per valorizzare
            il commercio di prossimità e gli spazi pubblici.
          </p>

          {/* GALLERY TERRITORIO + TIGRE */}
          <div className="mt-6 grid md:grid-cols-4 gap-4">
            <div className="rounded-2xl overflow-hidden bg-white ring-1 ring-zinc-200">
              <img
                src="/assets/territorio-legumi-negozio.jpg"
                alt="Prodotti tipici e legumi"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-white ring-1 ring-zinc-200">
              <img
                src="/assets/retail-tigre-ingresso.jpg"
                alt="Ingresso inaugurazione Tigre"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-white ring-1 ring-zinc-200">
              <img
                src="/assets/retail-tigre-taglio-nastro.jpg"
                alt="Taglio del nastro Tigre"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-white ring-1 ring-zinc-200">
              <img
                src="/assets/tennis-foro-folla.jpg"
                alt="Eventi sportivi e partecipazione"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <Button className="rounded-2xl !bg-[#4A4A4A] !text-white hover:!bg-[#C8A14A] hover:!text-white">
              Partecipa
            </Button>
            <Button
              variant="outline"
              className="rounded-2xl !border-[#4A4A4A] !text-[#4A4A4A] hover:!border-[#C8A14A] hover:!text-[#C8A14A]"
            >
              Scarica modulistica
            </Button>
          </div>
        </div>
      </section>

      {/* DJ & EVENTI */}
      <section id="dj" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle icon={Headphones}>DJ &amp; Eventi</SectionTitle>
          <p className="mt-3 text-zinc-600 max-w-prose">
            Set House/Amapiano, format eleganti, gestione calendario, tecnica e
            comunicazione. Setup Denon Prime 4+ e luci integrabili, eventi in
            locali, ristoranti e format privati.
          </p>

          {/* GALLERY DJ: SET + LOCANDINE */}
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              "dj-aperitivo-terrazza.jpg",
              "dj-club-folla.jpg",
              "dj-spiaggia-amici.jpg",
              "grafica-dj-mamarita.jpg",
              "grafica-dj-donna-zelinda.jpg",
            ].map((src) => (
              <div
                key={src}
                className="rounded-2xl overflow-hidden bg-white ring-1 ring-zinc-200"
              >
                <img
                  src={`/assets/${src}`}
                  alt=""
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>

          {/* EVENTI IN CALENDARIO */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {upcoming.map((ev) => (
              <Card
                key={ev.title}
                className="rounded-2xl bg-white border border-zinc-200"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-[#C8A14A]" /> {ev.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-zinc-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-zinc-900">
                        {ev.place}
                      </div>
                      <a
                        href={ev.href}
                        className="inline-flex items-center font-medium text-[#C8A14A] hover:underline"
                      >
                        Dettagli{" "}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                    <div className="px-2 py-1 rounded-lg bg-[rgba(200,161,74,0.15)] text-[#111111] text-xs font-semibold text-center">
                      {ev.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <Button className="rounded-2xl !bg-[#4A4A4A] !text-white hover:!bg-[#C8A14A] hover:!text-white">
              Richiedi disponibilità
            </Button>
            <Button
              variant="outline"
              className="rounded-2xl !border-[#4A4A4A] !text-[#4A4A4A] hover:!border-[#C8A14A] hover:!text-[#C8A14A]"
            >
              Scarica Rider Tecnico
            </Button>
          </div>
        </div>
      </section>

      {/* MOTOTURISMO */}
      <section
        id="mototurismo"
        className="py-16 bg-gradient-to-b from-white to-[#F0EFEB]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle icon={Users}>Mototurismo</SectionTitle>
          <p className="mt-3 text-zinc-600 max-w-prose">
            Il mototurismo come modo di vivere il territorio. Fondatore della
            community <span className="font-medium">Gran Sasso Bikers</span> —
            itinerari, eventi e turismo lento sulle strade d’Abruzzo e non
            solo.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden bg-white ring-1 ring-zinc-200">
              <img
                src="/assets/moto-appennino-strada.jpg"
                alt="In moto sugli Appennini"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-white ring-1 ring-zinc-200">
              <img
                src="/assets/moto-dolomiti.jpg"
                alt="Mototurismo sulle Dolomiti"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-white ring-1 ring-zinc-200">
              <img
                src="/assets/moto-stelvio.jpg"
                alt="Passo dello Stelvio in moto"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="https://www.facebook.com/GranSassoBikers/"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="rounded-2xl !bg-[#4A4A4A] !text-white hover:!bg-[#C8A14A] hover:!text-white">
                Visita la community
              </Button>
            </a>
            <Button
              variant="outline"
              className="rounded-2xl !border-[#4A4A4A] !text-[#4A4A4A] hover:!border-[#C8A14A] hover:!text-[#C8A14A]"
            >
              Unisciti ai prossimi tour
            </Button>
          </div>
        </div>
      </section>

      {/* YOUTUBE */}
      <section id="youtube" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle icon={Youtube}>YouTube &amp; Media</SectionTitle>
          <p className="mt-3 text-zinc-600 max-w-prose">
            Highlights da concerti e contenuti DJ. Iscriviti per supportare il
            canale{" "}
            <span className="font-medium">@fioravanti81</span> e scoprire i
            video della playlist{" "}
            <span className="font-medium">“Live (concerti)”</span>.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-zinc-200 bg-zinc-100">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/videoseries?list=PLccUvT8MuupAVZkBYqoqBoTU42b9Zy5sV"
                title="Playlist Live (concerti) — fioravanti81"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <Card className="rounded-2xl bg-white border border-zinc-200">
              <CardHeader>
                <CardTitle className="text-base">Ultimi contenuti</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-600 space-y-3">
                <div className="flex items-center justify-between">
                  <span>Playlist “Live (concerti)”</span>
                  <a
                    className="text-sm font-medium text-[#C8A14A] hover:underline"
                    href="https://www.youtube.com/playlist?list=PLccUvT8MuupAVZkBYqoqBoTU42b9Zy5sV"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apri playlist
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Canale YouTube @fioravanti81</span>
                  <a
                    className="text-sm font-medium text-[#C8A14A] hover:underline"
                    href="https://www.youtube.com/@fioravanti81"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Vai al canale
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Clip dai DJ set</span>
                  <a
                    className="text-sm font-medium text-[#C8A14A] hover:underline"
                    href="https://www.youtube.com/@fioravanti81/videos"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Guarda i video
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10">
            <h3 className="font-display text-xl font-bold text-[#111111]">
              Live (concerti) — galleria foto
            </h3>
            <p className="mt-1 text-sm text-zinc-600 max-w-prose">
              Alcuni momenti dai concerti in Italia: anfiteatri, stadi e
              festival che diventano contenuti video sul canale.
            </p>
            <ImageCarousel items={liveConcertPhotos} />
          </div>
        </div>
      </section>

      {/* TIMELINE ESPERIENZE */}
      <section
        id="timeline"
        className="py-16 bg-gradient-to-b from-white to-[#F7F5EF]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle icon={Users}>
            Timeline — esperienze e passioni
          </SectionTitle>
          <p className="mt-3 text-zinc-600 max-w-prose">
            Una panoramica veloce di quello che faccio fuori dalle etichette:
            mototurismo, montagna, concerti dal vivo e tempo libero. Ogni voce
            racconta un pezzo dei progetti che poi finiscono in musica, video o
            iniziative sul territorio.
          </p>

          <div className="mt-8 space-y-6">
            {experiencesTimeline.map((item) => (
              <div key={item.title} className="relative pl-6">
                <div className="absolute left-0 top-2 bottom-0 w-px bg-zinc-200" />
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#C8A14A]" />
                  <div className="bg-white rounded-2xl border border-zinc-200 p-4 w-full">
                    <div className="text-[11px] tracking-[0.12em] uppercase text-zinc-500">
                      {item.tag}
                    </div>
                    <div className="mt-1 font-semibold text-zinc-900">
                      {item.title}
                    </div>
                    <p className="mt-1 text-sm text-zinc-600">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold text-zinc-700 mb-2">
              Galleria esperienze &amp; passioni
            </h3>
            <div className="-mx-4 px-4 pb-3 flex gap-4 overflow-x-auto">
              {experiencePhotos.map((src) => (
                <div
                  key={src}
                  className="flex-shrink-0 w-72 h-48 rounded-2xl overflow-hidden ring-1 ring-zinc-200 bg-zinc-100"
                >
                  <img
                    src={`/assets/${src}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN */}
      <section
        id="design"
        className="py-16 bg-gradient-to-b from-[#F0EFEB] to-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle icon={Palette}>Grafica & Branding</SectionTitle>
          <p className="mt-3 text-zinc-600 max-w-prose">
            Volantini supermercati, loghi, layout social e stampa. Portfolio
            selezionato e pacchetti su misura.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {["Volantino Tigre", "Logo DJ", "Poster Evento"].map((name) => (
              <Card
                key={name}
                className="rounded-2xl overflow-hidden bg-white border border-zinc-200"
              >
                <CardContent className="p-0">
                  <div className="aspect-[4/5] bg-zinc-100" />
                  <div className="p-4">
                    <div className="font-medium">{name}</div>
                    <p className="text-sm text-zinc-600">
                      Descrizione breve del progetto e risultati.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <Button className="rounded-2xl !bg-[#4A4A4A] !text-white hover:!bg-[#C8A14A] hover:!text-white">
              Richiedi un preventivo
            </Button>
            <Button
              variant="outline"
              className="rounded-2xl !border-[#4A4A4A] !text-[#4A4A4A] hover:!border-[#C8A14A] hover:!text-[#C8A14A]"
            >
              Scarica portfolio PDF
            </Button>
          </div>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold">
                Rimani aggiornato
              </h3>
              <p className="mt-2 text-zinc-600 max-w-prose">
                Eventi, proposte per la città, video e progetti di design.
              </p>
              <form
                className="mt-4 flex gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <Input
                  type="email"
                  placeholder="La tua email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-2xl"
                />
                <Button
                  type="submit"
                  className="rounded-2xl !bg-[#4A4A4A] !text-white hover:!bg-[#C8A14A] hover:!text-[#C8A14A]"
                >
                  Iscriviti
                </Button>
              </form>
              <p className="mt-2 text-xs text-zinc-500">
                Niente spam. Potrai disiscriverti in ogni momento.
              </p>
            </div>
            <Card className="rounded-2xl bg-white border border-zinc-200">
              <CardHeader>
                <CardTitle className="text-base">Contatti diretti</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-600 space-y-2">
                <p>
                  Email:{" "}
                  <a
                    className="hover:underline text-[#C8A14A]"
                    href="mailto:info@example.com"
                  >
                    info@example.com
                  </a>
                </p>
                <p>
                  WhatsApp:{" "}
                  <a className="hover:underline text-[#C8A14A]" href="#">
                    +39 3XX XXX XXXX
                  </a>
                </p>
                <p>
                  Instagram:{" "}
                  <a
                    className="hover:underline text-[#C8A14A]"
                    href="https://www.instagram.com/fioravagio/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @fioravagio
                  </a>
                </p>
                <p>
                  Facebook:{" "}
                  <a
                    className="hover:underline text-[#C8A14A]"
                    href="https://www.facebook.com/giorgio.fioravanti/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    giorgio.fioravanti
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-[#F0EFEB]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-zinc-600">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="font-semibold text-[#111111]">
                Giorgio Fioravanti
              </div>
              <p className="mt-2 max-w-xs">
                Musica, territorio e design — con chiarezza e sostanza.
              </p>
            </div>
            <div>
              <div className="font-semibold text-[#111111]">Sezioni</div>
              <ul className="mt-2 space-y-1">
                <li>
                  <a className="hover:underline" href="#dj">
                    DJ &amp; Eventi
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#civica">
                    Civica/Politica
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#associazionismo">
                    Territorio &amp; Associazionismo
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#mototurismo">
                    Mototurismo
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#youtube">
                    YouTube
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#design">
                    Grafica
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-[#111111]">Legale</div>
              <ul className="mt-2 space-y-1">
                <li>
                  <a className="hover:underline" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Cookie
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Termini
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            © {new Date().getFullYear()} Giorgio Fioravanti — Tutti i diritti
            riservati.
          </div>
        </div>
      </footer>
    </div>
  );
}