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
    title: "Attività Politica",
    desc: "Progetti per L'Aquila, partecipazione, idee concrete per la città.",
    cta: "Scopri iniziative",
    href: "#civica",
  },
  {
    icon: Users,
    title: "Territorio & Associazioni",
    desc: "Community locali, prodotti tipici, montagna e turismo lento.",
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

/* ---------- GALLERIE ---------- */

/* DJ & EVENTI */
const djGallery = [
  { src: "/assets/hero-dj.jpg", alt: "DJ set in club con la pista piena" },
  { src: "/assets/dj-aperitivo-terrazza.jpg", alt: "Console all'aperto Yoichi" },
  { src: "/assets/dj-spiaggia-amici.jpg", alt: "DJ set estivo con amici" },
  { src: "/assets/grafica-dj-donna-zelinda.jpg", alt: "Locandina Donna Zelinda" },
  { src: "/assets/grafica-dj-mamarita.jpg", alt: "Locandina MamaRita" },
];

/* POLITICA — nomi corretti */
const politicaGallery = [
  {
    src: "/assets/civica-conferenza.jpg",
    alt: "Conferenza stampa L'Aquila Città di Montagna",
  },
  {
    src: "/assets/civica-gransasso-gruppo.jpg",
    alt: "Evento politico con rappresentanti istituzionali",
  },
];

/* TERRITORIO & ASSOCIAZIONI */
const territorioGallery = [
  {
    src: "/assets/territorio-legumi-negozio.jpg",
    alt: "Prodotti tipici e legumi in negozio",
  },
  {
    src: "/assets/neve-altopiano-selfie.jpg",
    alt: "Selfie sulla neve negli altipiani",
  },
];

/* MOTOTURISMO */
const mototurismoGallery = [
  { src: "/assets/moto-appennino-strada.jpg", alt: "Moto in Appennino" },
  { src: "/assets/moto-gruppo-bosco.jpg", alt: "Gruppo motociclisti nel bosco" },
  { src: "/assets/moto-dolomiti.jpg", alt: "Dolomiti in moto" },
  { src: "/assets/moto-stelvio.jpg", alt: "Stelvio in moto" },
  { src: "/assets/moto-alpi-neve.jpg", alt: "Alpi con neve" },
];

/* YOUTUBE & SPORT */
const youtubeGallery = [
  { src: "/assets/tennis-foro-folla.jpg", alt: "Folla al Foro Italico" },
  { src: "/assets/tennis-foro-campo.jpg", alt: "Campo Centrale Foro Italico" },
];

/* DESIGN & RETAIL */
const designGallery = [
  {
    src: "/assets/retail-tigre-ingresso.jpg",
    alt: "Inaugurazione Tigre",
    title: "Tigre — Ingresso",
    desc: "Shooting e comunicazione inaugurazione.",
  },
  {
    src: "/assets/retail-tigre-taglio-nastro.jpg",
    alt: "Taglio del nastro",
    title: "Tigre — Taglio del nastro",
    desc: "Documentazione fotografica istituzionale.",
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
    <div className="min-h-screen bg-gradient-to-b from-[#E6E0D6] via-white to-[#E6E0D6] text-[#111111]">

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/75 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-xl">
            Giorgio Fioravanti
          </a>
          <nav className="hidden md:flex gap-6 text-sm text-zinc-700">
            <a href="#dj">DJ & Eventi</a>
            <a href="#civica">Politica</a>
            <a href="#associazionismo">Territorio & Associazioni</a>
            <a href="#mototurismo">Mototurismo</a>
            <a href="#youtube">YouTube</a>
            <a href="#design">Grafica</a>
            <a href="#contatti">Contatti</a>
          </nav>
          <Button className="hidden md:block rounded-2xl bg-[#C8A14A] hover:bg-[#b48d39] text-white">
            Prenota
          </Button>
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
                DJ & organizzatore di eventi, attivo nei progetti
                dell'Aquila, creator su YouTube e graphic designer.
                Un unico hub per tutto ciò che faccio: chiaro, rapido, di qualità.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="rounded-2xl bg-[#C8A14A] hover:bg-[#b48d39] text-white">
                  Prenota un DJ Set <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="rounded-2xl border-[#C8A14A] text-[#C8A14A] hover:bg-[#F2E4C4]">
                  Scrivimi
                </Button>
              </div>

              {/* cards attività */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                {activities.map((a) => (
                  <Card key={a.title} className="rounded-2xl bg-white border border-zinc-200 hover:shadow-lg transition">
                    <CardContent className="p-4">
                      <a.icon className="h-6 w-6 text-[#C8A14A]" />
                      <div className="mt-2 font-semibold">{a.title}</div>
                      <p className="text-sm text-zinc-600">{a.desc}</p>
                      <a href={a.href} className="mt-2 inline-flex items-center text-sm font-medium text-[#C8A14A] hover:underline">
                        {a.cta} <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* HERO IMG */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-zinc-200 bg-zinc-100">
                <img src="/assets/hero-dj.jpg" alt="DJ Set" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-white/10 to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DJ & EVENTI */}
      <section id="dj" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle icon={Headphones}>DJ & Eventi</SectionTitle>

          <p className="mt-3 text-zinc-600 max-w-prose">
            Set House/Amapiano, format eleganti, gestione tecnica,
            comunicazione e logistica eventi.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {djGallery.map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden bg-white ring-1 ring-zinc-200">
                <img src={img.src} alt={img.alt} className="w-full h-56 object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {upcoming.map((ev) => (
              <Card key={ev.title} className="rounded-2xl bg-white border border-zinc-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-[#C8A14A]" /> {ev.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-zinc-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-zinc-900">{ev.place}</div>
                      <a href="#" className="inline-flex items-center font-medium text-[#C8A14A] hover:underline">
                        Dettagli <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                    <div className="px-2 py-1 rounded-lg bg-[rgba(200,161,74,0.15)] text-xs font-semibold">
                      {ev.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* POLITICA */}
      <section id="civica" className="py-16 bg-gradient-to-b from-[#E6E0D6] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionTitle icon={Megaphone}>Attività Politica</SectionTitle>

          <p className="mt-3 text-zinc-600 max-w-prose">
            Proposte concrete per L'Aquila: città di montagna, turismo,
            sport, spazi urbani, giovani.  
            Conferenze stampa, incontri istituzionali e attività politiche.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {politicaGallery.map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden bg-white ring-1 ring-zinc-200">
                <img src={img.src} alt={img.alt} className="w-full h-72 object-cover" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TERRITORIO & ASSOCIAZIONI */}
      <section id="associazionismo" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionTitle icon={Users}>Territorio & Associazioni</SectionTitle>

          <p className="mt-3 text-zinc-600 max-w-prose">
            Progetti dal basso, comunità locali, eventi territoriali.
            Valorizzazione di prodotti tipici, montagna e borghi.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {territorioGallery.map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden bg-white ring-1 ring-zinc-200">
                <img src={img.src} alt={img.alt} className="w-full h-72 object-cover" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MOTOTURISMO */}
      <section id="mototurismo" className="py-16 bg-gradient-to-b from-white to-[#E6E0D6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionTitle icon={Users}>Mototurismo</SectionTitle>

          <p className="mt-3 text-zinc-600 max-w-prose">
            Fondatore della community <strong>Gran Sasso Bikers</strong>.  
            Itinerari lenti, panorami, Dolomiti, Stelvio e viaggi in moto.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mototurismoGallery.map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden bg-white ring-1 ring-zinc-200">
                <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* YOUTUBE */}
      <section id="youtube" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionTitle icon={Youtube}>YouTube & Media</SectionTitle>

          <p className="mt-3 text-zinc-600 max-w-prose">
            Storytelling tra concerti, DJ set e grandi eventi sportivi.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">

            <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-zinc-200">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allowFullScreen
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {youtubeGallery.map((img) => (
                <div key={img.src} className="rounded-2xl overflow-hidden ring-1 ring-zinc-200 bg-white">
                  <img src={img.src} alt={img.alt} className="w-full h-32 object-cover" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* DESIGN */}
      <section id="design" className="py-16 bg-gradient-to-b from-[#E6E0D6] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionTitle icon={Palette}>Grafica & Branding</SectionTitle>

          <p className="mt-3 text-zinc-600 max-w-prose">
            Volantini per supermercati, branding, prodotti editoriali e comunicazione visuale.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {designGallery.map((item) => (
              <Card key={item.src} className="rounded-2xl overflow-hidden bg-white border border-zinc-200">
                <CardContent className="p-0">
                  <img src={item.src} alt={item.alt} className="w-full aspect-[4/5] object-cover" />
                  <div className="p-4">
                    <div className="font-semibold">{item.title}</div>
                    <p className="text-sm text-zinc-600">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                Eventi, proposte, video e nuovi progetti.
              </p>
              <form className="mt-4 flex gap-2" onSubmit={(e)=>e.preventDefault()}>
                <Input type="email" placeholder="La tua email" value={email} onChange={(e)=>setEmail(e.target.value)} className="rounded-2xl" />
                <Button className="rounded-2xl bg-[#C8A14A] hover:bg-[#b48d39] text-white">Iscriviti</Button>
              </form>
            </div>

            <Card className="rounded-2xl bg-white border border-zinc-200">
              <CardHeader><CardTitle>Contatti</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>Email: <a className="text-[#C8A14A] hover:underline" href="mailto:info@example.com">info@example.com</a></p>
                <p>WhatsApp: <a className="text-[#C8A14A] hover:underline" href="#">+39 3XX XXX XXXX</a></p>
                <p>Instagram: <a className="text-[#C8A14A] hover:underline" href="https://www.instagram.com/fioravagio/" target="_blank" rel="noreferrer">@fioravagio</a></p>
                <p>Facebook: <a className="text-[#C8A14A] hover:underline" href="https://www.facebook.com/giorgio.fioravanti/" target="_blank" rel="noreferrer">giorgio.fioravanti</a></p>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-[#E6E0D6] text-sm text-zinc-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="font-semibold">Giorgio Fioravanti</div>
              <p className="mt-2 max-w-xs">Musica, territorio e design.</p>
            </div>
            <div>
              <div className="font-semibold">Sezioni</div>
              <ul className="mt-2 space-y-1">
                <li><a href="#dj" className="hover:underline">DJ & Eventi</a></li>
                <li><a href="#civica" className="hover:underline">Politica</a></li>
                <li><a href="#associazionismo" className="hover:underline">Territorio & Associazioni</a></li>
                <li><a href="#mototurismo" className="hover:underline">Mototurismo</a></li>
                <li><a href="#youtube" className="hover:underline">YouTube</a></li>
                <li><a href="#design" className="hover:underline">Grafica</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            © {new Date().getFullYear()} Giorgio Fioravanti — Tutti i diritti riservati.
          </div>
        </div>
      </footer>
    </div>
  );
}