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
    icon: Headphones,
    title: "DJ & Eventi",
    desc: "Selezioni House/Amapiano, format eleganti, gestione tecnica e comunicazione.",
    cta: "Prenota un DJ Set",
    href: "#dj",
  },
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

/* ---------- PAGINA ---------- */

export default function Homepage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0EFEB] via-white to-[#F0EFEB] text-[#111111]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/75 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-xl">
            Giorgio Fioravanti
          </a>
          <nav className="hidden md:flex gap-6 text-sm text-zinc-700">
            <a href="#dj" className="hover:text-zinc-900">
              DJ & Eventi
            </a>
            <a href="#civica" className="hover:text-zinc-900">
              Civica/Politica
            </a>
            <a href="#associazionismo" className="hover:text-zinc-900">
              Territorio & Associazionismo
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
          <div className="hidden md:block">
            <Button className="rounded-2xl !bg-[#4A4A4A] !text-white hover:!bg-[#C8A14A] hover:!text-white">
              Prenota
            </Button>
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
                DJ & organizzatore di eventi, attivo nei progetti civici
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

            {/* HERO IMAGE */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-zinc-200 bg-zinc-100">
                <img
                  src="/assets/hero-dj.jpg"
                  alt="Giorgio Fioravanti — DJ & Eventi"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-white/10 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-xl border border-zinc-200 shadow">
                  <span className="text-xs font-medium">
                    DJ &amp; Eventi
                  </span>
                </div>
              </div>
              <div className="mt-3 text-xs text-zinc-500">
                Atmosfera elegante, accenti dorati leggeri.
              </div>
            </div>
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
                    <Calendar className="h-4 w-4 text-[#C8A14A]" />{" "}
                    {ev.title}
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

      {/* POLITICA / CIVICA */}
      <section
        id="civica"
        className="py-16 bg-gradient-to-b from-[#F0EFEB] to-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle icon={Megaphone}>
            Attività Civica/Politica
          </SectionTitle>
          <p className="mt-3 text-zinc-600 max-w-prose">
            L’Aquila Città di Montagna: eventi sostenibili, sport, turismo,
            spazi per giovani e cultura. Aggiornamenti, documenti e iniziative
            con amministratori e rappresentanti politici.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden bg-white ring-1 ring-zinc-200">
              <img
                src="/assets/civica-conferenza.jpg"
                alt="Conferenza stampa L'Aquila Città di Montagna"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-white ring-1 ring-zinc-200">
              <img
                src="/assets/civica-gransasso-gruppo.jpg"
                alt="Foto con rappresentanti politici sul territorio"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>

          <div className="mt-6">
            <Button
              variant="outline"
              className="rounded-2xl !border-[#4A4A4A] !text-[#4A4A4A] hover:!border-[#C8A14A] hover:!text-[#C8A14A]"
            >
              Leggi tutte le iniziative
            </Button>
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
          <SectionTitle icon={Youtube}>YouTube & Media</SectionTitle>
          <p className="mt-3 text-zinc-600 max-w-prose">
            Highlights da concerti e contenuti DJ. Iscriviti per supportare il
            canale e scoprire nuovi video.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-zinc-200 bg-zinc-100">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <Card className="rounded-2xl bg-white border border-zinc-200">
              <CardHeader>
                <CardTitle className="text-base">Ultimi upload</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-600 space-y-3">
                <div className="flex items-center justify-between">
                  <span>Clip — Live DJ Set</span>
                  <a
                    className="text-sm font-medium text-[#C8A14A] hover:underline"
                    href="#"
                  >
                    Guarda
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Concerto — Highlights</span>
                  <a
                    className="text-sm font-medium text-[#C8A14A] hover:underline"
                    href="#"
                  >
                    Guarda
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Behind the Scenes</span>
                  <a
                    className="text-sm font-medium text-[#C8A14A] hover:underline"
                    href="#"
                  >
                    Guarda
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <Button className="rounded-2xl !bg-[#4A4A4A] !text-white hover:!bg-[#C8A14A] hover:!text-white">
              Iscriviti al canale
            </Button>
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
                  className="rounded-2xl !bg-[#4A4A4A] !text-white hover:!bg-[#C8A14A] hover:!text-white"
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
