import { motion } from "framer-motion";
import {
  ArrowRight,
  Megaphone,
  Users,
  Headphones,
  Youtube,
  Palette,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

/* ---- DATI FOTO POLITICA ---- */

const politicsGallery = [
  {
    src: "civica-conferenza.jpg",
    label: "Conferenza civica",
    caption:
      "Incontri pubblici e momenti di confronto sulle politiche per L'Aquila.",
  },
  {
    src: "civica-gransasso-gruppo.jpg",
    label: "Gran Sasso",
    caption:
      "Lavoro di squadra sul progetto L'Aquila città di montagna.",
  },
  {
    src: "politica-card-campo-imperatore.jpg",
    label: "Campo Imperatore",
    caption:
      "La montagna come risorsa strategica per turismo, sport e sviluppo.",
  },
  {
    src: "politica-evento-arta.jpg",
    label: "Evento istituzionale",
    caption:
      "Partecipazione a incontri con rappresentanti regionali e nazionali.",
  },
  {
    src: "politica-cena-gruppo.jpg",
    label: "Cena con sostenitori",
    caption:
      "Momenti di confronto informale con sostenitori, amici e militanti.",
  },
  {
    src: "politica-serata-applausi.jpg",
    label: "Serata di comizio",
    caption:
      "Eventi pubblici in città, tra partecipazione e ascolto.",
  },
  {
    src: "politica-montagna-incontro.jpg",
    label: "Incontro in montagna",
    caption:
      "Sopralluoghi sul territorio montano per ascoltare esigenze e proposte.",
  },
  {
    src: "politica-montagna-sopralluogo.jpg",
    label: "Sopralluogo Gran Sasso",
    caption:
      "Verifica diretta delle criticità e delle potenzialità del comprensorio.",
  },
  {
    src: "politica-salvini-palco.jpg",
    label: "Comizio nazionale",
    caption:
      "Presenza sul palco in occasione di un grande evento politico.",
  },
  {
    src: "politica-incontro-elettorale-01.jpg",
    label: "Incontro elettorale",
    caption:
      "Campagna sul territorio, a contatto con i cittadini.",
  },
  {
    src: "politica-incontro-elettorale-02.jpg",
    label: "Incontro elettorale",
    caption:
      "Dialogo con amministratori e rappresentanti locali.",
  },
  {
    src: "politica-incontro-elettorale-03.jpg",
    label: "Incontro elettorale",
    caption:
      "Serata di confronto in centro storico.",
  },
  {
    src: "politica-camion-manifesto.jpg",
    label: "Camion vela",
    caption:
      "Comunicazione itinerante tra quartieri, frazioni e aree commerciali.",
  },
  {
    src: "pol-camion-manifesto-centro.jpg",
    label: "Camion in centro",
    caption:
      "Il messaggio politico nei luoghi simbolo della città.",
  },
  {
    src: "pol-maxi-impianto-pubblicitario.jpg",
    label: "Maxi impianto",
    caption:
      "Campagna su grande formato con il claim dedicato a L'Aquila.",
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
      "Invito per l’evento conclusivo della campagna elettorale.",
  },
  {
    src: "pol-card-candidatura-annuncio.jpg",
    label: "Annuncio candidatura",
    caption:
      "Presentazione ufficiale della candidatura al Consiglio comunale.",
  },
  {
    src: "pol-card-sassa-scuola.jpg",
    label: "Sassa – Scuola",
    caption:
      "Comunicazione dedicata alla riqualificazione di spazi pubblici e scolastici.",
  },
  {
    src: "pol-torta-volantini.jpg",
    label: "Torta elettorale",
    caption:
      "Una campagna che entra anche nei momenti conviviali, con creatività.",
  },
  {
    src: "pol-riunione-lega-abruzzo.jpg",
    label: "Riunione Lega Abruzzo",
    caption:
      "Lavoro di coordinamento con la struttura regionale del partito.",
  },
  {
    src: "pol-trio-comizio-serale.jpg",
    label: "Team sul territorio",
    caption:
      "Lavoro di squadra insieme ad altri amministratori e candidati.",
  },
];

/* ---- COMPONENTI ---- */

function SectionTitle({ children, icon: Icon }) {
  return (
    <div className="flex items-center gap-3">
      {Icon && <Icon className="h-6 w-6 text-[#C8A14A]" />}
      <h2 className="accent-bar font-display text-2xl md:text-3xl font-bold text-[#111111]">
        {children}
      </h2>
    </div>
  );
}

export default function CivicaPoliticaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0EFEB] via-white to-[#F0EFEB] text-[#111111]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/75 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <a
            href="/"
            className="font-semibold tracking-tight text-xl whitespace-nowrap"
          >
            Giorgio Fioravanti
          </a>

          <nav className="flex flex-1 justify-center gap-3 md:gap-6 text-xs md:text-sm text-zinc-700 flex-wrap">
            <a href="/civica" className="hover:text-zinc-900">
              Civica/Politica
            </a>
            <a href="/#associazionismo" className="hover:text-zinc-900">
              Territorio &amp; Associazionismo
            </a>
            <a href="/#dj" className="hover:text-zinc-900">
              DJ &amp; Eventi
            </a>
            <a href="/#mototurismo" className="hover:text-zinc-900">
              Mototurismo
            </a>
            <a href="/#youtube" className="hover:text-zinc-900">
              YouTube
            </a>
            <a href="/#design" className="hover:text-zinc-900">
              Grafica
            </a>
            <a href="/#contatti" className="hover:text-zinc-900">
              Contatti
            </a>
          </nav>

          <div className="flex-shrink-0">
            <a href="/#contatti">
              <Button className="rounded-2xl !bg-[#4A4A4A] !text-white hover:!bg-[#C8A14A] hover:!text-white text-xs md:text-sm px-3 md:px-4">
                Contattami
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* HERO POLITICA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_80%_-10%,rgba(200,161,74,0.18),transparent),radial-gradient(900px_520px_at_10%_120%,rgba(200,161,74,0.12),transparent)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight"
              >
                Attività civica &amp; politica
              </motion.h1>
              <p className="mt-4 text-lg text-zinc-600 max-w-prose">
                Impegno per L&apos;Aquila: visione, responsabilità e
                progettualità. Una politica radicata nel territorio, tra
                montagna, quartieri, centro storico e comunità che vivono ogni
                giorno la città.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="rounded-2xl !bg-[#4A4A4A] !text-white hover:!bg-[#C8A14A] hover:!text-white">
                  Scarica materiali &amp; comunicati
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-2xl !border-[#4A4A4A] !text-[#4A4A4A] hover:!border-[#C8A14A] hover:!text-[#C8A14A]"
                >
                  Contatta per attività istituzionali
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.18)] ring-1 ring-zinc-200 bg-zinc-100">
                <img
                  src="/assets/pol-hero-gransasso.jpg"
                  alt="Campo Imperatore e Gran Sasso"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-xl border border-zinc-200 shadow">
                  <span className="text-xs font-medium text-zinc-900">
                    L&apos;Aquila città di montagna — Campo Imperatore, Gran
                    Sasso, futuro.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORPO TESTO PRINCIPALE */}
      <main className="bg-white border-y border-zinc-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
          {/* INTRODUZIONE */}
          <section className="space-y-6">
            <SectionTitle icon={Megaphone}>
              Impegno per L&apos;Aquila: visione e responsabilità
            </SectionTitle>
            <div className="grid md:grid-cols-3 gap-6 md:gap-10 items-start">
              <div className="md:col-span-2 space-y-4 text-sm md:text-base text-zinc-700 leading-relaxed">
                <p>
                  L&apos;Aquila è una città che non assomiglia a nessun&apos;
                  altra. È un luogo in cui la storia millenaria si intreccia con
                  una quotidianità fragile, ricostruita passo dopo passo, e con
                  un&apos;energia che resiste nonostante tutto. Vivere
                  l&apos;Aquila significa conoscere il valore del sacrificio,
                  dell&apos;impegno, dello sguardo che non si arrende.
                </p>
                <p>
                  Il mio impegno civico e politico nasce da questa
                  consapevolezza: ogni scelta amministrativa, ogni progetto,
                  ogni intervento può contribuire concretamente a determinare il
                  futuro della nostra comunità. Non è un&apos;ambizione
                  personale, ma un percorso maturato nel tempo, ascoltando la
                  città nelle sue molteplici dimensioni: quartieri, frazioni,
                  attività commerciali, associazioni, istituzioni e luoghi
                  pubblici spesso lontani dai riflettori.
                </p>
                <p>
                  La politica, per me, non è un palco ma un servizio. Richiede
                  presenza costante, capacità di ascolto, rispetto delle
                  persone e delle istituzioni, visione e determinazione. Una
                  politica che non parla in astratto ma si radica nelle
                  necessità reali, trasformando richieste e segnalazioni in
                  azioni concrete.
                </p>
              </div>
              <div className="md:col-span-1">
                <Card className="rounded-2xl overflow-hidden bg-white border border-zinc-200">
                  <div className="aspect-[4/3] bg-zinc-100 overflow-hidden">
                    <img
                      src="/assets/civica-conferenza.jpg"
                      alt="Intervento durante una conferenza"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 text-xs text-zinc-600">
                    Momenti di confronto pubblico su temi legati al futuro
                    dell&apos;Aquila, tra istituzioni, associazioni e cittadini.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* PRINCIPI GUIDA */}
          <section className="space-y-6">
            <SectionTitle>Una politica fondata su metodo e serietà</SectionTitle>
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
              <div className="space-y-4 text-sm md:text-base text-zinc-700 leading-relaxed">
                <p>
                  La politica autentica non è improvvisazione, né propaganda né
                  rincorsa al consenso immediato. È un esercizio di
                  responsabilità civile. Significa assumersi impegni e
                  mantenerli, comunicare con chiarezza, rendere conto delle
                  proprie scelte, lavorare in modo ordinato e con una
                  progettualità verificabile.
                </p>
                <p>
                  Il mio approccio si fonda su alcune direttrici essenziali:
                  ascolto attivo del territorio, progettualità concreta,
                  collaborazione istituzionale, valorizzazione delle risorse
                  locali, rispetto dell&apos;identità cittadina e sguardo
                  lungo sul futuro. Ogni proposta deve poggiare su basi
                  tecniche solide e sostenibili, evitando promesse vaghe o
                  irrealizzabili.
                </p>
              </div>
              <div className="space-y-3">
                <Card className="rounded-2xl bg-[#F7F5EF] border border-zinc-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-semibold text-zinc-900">
                      I miei principi di lavoro
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-xs text-zinc-700">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Ascolto attivo e presenza costante sul territorio.</li>
                      <li>
                        Progetti concreti, sostenibili e basati su dati
                        verificabili.
                      </li>
                      <li>
                        Collaborazione tra istituzioni, professionisti e
                        cittadini.
                      </li>
                      <li>
                        Valorizzazione delle risorse locali, culturali e
                        paesaggistiche.
                      </li>
                      <li>
                        Rispetto dell&apos;identità aquilana, senza inseguire
                        modelli precostituiti.
                      </li>
                      <li>
                        Sguardo rivolto alle generazioni future, non solo alle
                        emergenze del presente.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* L'AQUILA CITTÀ DI MONTAGNA */}
          <section className="space-y-6">
            <SectionTitle>
              L&apos;Aquila città di montagna: Campo Imperatore e Gran Sasso
            </SectionTitle>
            <div className="grid md:grid-cols-3 gap-6 md:gap-10 items-start">
              <div className="md:col-span-2 space-y-4 text-sm md:text-base text-zinc-700 leading-relaxed">
                <p>
                  La montagna è il tema centrale della mia attività civica e
                  politica. Campo Imperatore, il Gran Sasso, la rete dei
                  sentieri, gli impianti sportivi, l&apos;accoglienza, la
                  mobilità e l&apos;ambiente costituiscono un patrimonio
                  straordinario e, allo stesso tempo, delicato. L&apos;Aquila
                  non è soltanto una città ai piedi della montagna: è una città
                  che dalla montagna trae identità, economia, cultura e
                  opportunità.
                </p>
                <p>
                  Lavorare su questo ambito significa affrontare questioni
                  strutturali: lo sviluppo sostenibile delle infrastrutture, il
                  potenziamento della viabilità, la programmazione turistica
                  coordinata, l&apos;innovazione tecnologica degli impianti, la
                  tutela del paesaggio naturale e una promozione capace di
                  dialogare con i mercati nazionali e internazionali.
                </p>
                <p>
                  La montagna aquilana può e deve tornare ad essere un motore
                  di sviluppo. Non un fondale scenografico, ma un sistema
                  vivo, dinamico e accessibile, in grado di generare lavoro,
                  economia, sport e nuove occasioni di crescita per giovani e
                  famiglie.
                </p>
              </div>
              <div className="space-y-4">
                <Card className="rounded-2xl overflow-hidden bg-white border border-zinc-200">
                  <div className="aspect-[4/3] bg-zinc-100 overflow-hidden">
                    <img
                      src="/assets/politica-card-campo-imperatore.jpg"
                      alt="Campo Imperatore"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 text-xs text-zinc-600">
                    Campo Imperatore e il Gran Sasso come cardine di una
                    strategia: turismo, sport, natura, mobilità e servizi
                    integrati.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* QUARTIERI, FRAZIONI, CENTRO STORICO */}
          <section className="space-y-6">
            <SectionTitle>
              Quartieri, frazioni e centro storico: un&apos;unica città
            </SectionTitle>
            <div className="grid md:grid-cols-3 gap-6 md:gap-10 items-start">
              <div className="order-2 md:order-1 md:col-span-2 space-y-4 text-sm md:text-base text-zinc-700 leading-relaxed">
                <p>
                  Il territorio comunale dell&apos;Aquila è ampio, articolato e
                  ricco di specificità. Ogni quartiere, ogni frazione, ogni
                  comunità ha una propria identità e necessita di interventi
                  mirati. La politica non deve accentuare le distanze ma
                  ridurle, costruendo una visione comune che valorizzi la
                  ricchezza delle differenze.
                </p>
                <p>
                  Il centro storico rappresenta il cuore culturale e simbolico
                  della città. La sua rinascita, dopo anni di ricostruzione, va
                  sostenuta con politiche di vivibilità, attrattività,
                  commercio, eventi culturali e una pianificazione degli spazi
                  pubblici orientata alla qualità della vita e non soltanto al
                  decoro urbano.
                </p>
                <p>
                  Quartieri e frazioni non sono periferie lontane, ma luoghi
                  vitali in cui agiscono associazioni, attività economiche,
                  comitati di cittadini e reti di volontariato. Vanno sostenuti
                  con servizi adeguati, trasporti efficienti, attenzione agli
                  spazi verdi, alle strutture sportive e alle esigenze delle
                  famiglie.
                </p>
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <Card className="rounded-2xl overflow-hidden bg-white border border-zinc-200">
                  <div className="aspect-[4/3] bg-zinc-100 overflow-hidden">
                    <img
                      src="/assets/politica-cena-gruppo.jpg"
                      alt="Cena con sostenitori"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 text-xs text-zinc-600">
                    Quartieri, frazioni, centro storico: il dialogo con le
                    persone passa anche attraverso momenti informali e
                    occasioni di ascolto diretto.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* SPAZI PUBBLICI, CULTURA, PARTECIPAZIONE */}
          <section className="space-y-6">
            <SectionTitle>
              Spazi pubblici, cultura e partecipazione
            </SectionTitle>
            <div className="grid md:grid-cols-3 gap-6 md:gap-10 items-start">
              <div className="space-y-4 text-sm md:text-base text-zinc-700 leading-relaxed md:col-span-2">
                <p>
                  Gli spazi pubblici sono il teatro della vita sociale.
                  Piazze, parchi, impianti sportivi, centri aggregativi e luoghi
                  culturali sono fondamentali per costruire una comunità viva e
                  coesa. Una città cresce quando i suoi cittadini si sentono
                  parte di un progetto condiviso.
                </p>
                <p>
                  Gli eventi culturali, le attività sportive e il volontariato
                  non sono un &quot;di più&quot; rispetto alle politiche
                  ordinarie: rappresentano un investimento diretto sulla salute
                  sociale, sull&apos;educazione, sul senso di appartenenza e
                  sull&apos;immagine stessa della città.
                </p>
                <p>
                  Gli spazi pubblici devono essere inclusivi, sicuri, vissuti,
                  accessibili e funzionali. Devono favorire la partecipazione
                  di giovani, famiglie, categorie fragili, turisti e studenti,
                  integrandosi con la vita universitaria e con le attività
                  economiche locali.
                </p>
              </div>
              <div className="space-y-4">
                <Card className="rounded-2xl overflow-hidden bg-white border border-zinc-200">
                  <div className="aspect-[4/3] bg-zinc-100 overflow-hidden">
                    <img
                      src="/assets/politica-serata-applausi.jpg"
                      alt="Evento pubblico in città"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 text-xs text-zinc-600">
                    Serate di comizio ed eventi pubblici come strumenti per
                    coinvolgere, informare e costruire partecipazione attiva.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* COMUNICAZIONE ISTITUZIONALE */}
          <section className="space-y-6">
            <SectionTitle>
              Comunicazione istituzionale: chiarezza e trasparenza
            </SectionTitle>
            <div className="grid md:grid-cols-3 gap-6 md:gap-10 items-start">
              <div className="md:col-span-2 space-y-4 text-sm md:text-base text-zinc-700 leading-relaxed">
                <p>
                  Una buona politica non vive di propaganda, ma di chiarezza.
                  La comunicazione istituzionale è un servizio ai cittadini,
                  non una vetrina personale. Significa informare in modo
                  puntuale, rendere conto delle decisioni, spiegare le ragioni
                  di una scelta, fornire dati verificabili e rispondere con
                  correttezza anche nelle situazioni più complesse.
                </p>
                <p>
                  L&apos;obiettivo è instaurare un rapporto di fiducia basato
                  sulla trasparenza, sulla disponibilità e sulla capacità di
                  trasformare le istanze che arrivano dal territorio in azioni
                  amministrative coerenti. La politica deve essere presente
                  quando c&apos;è da comunicare un risultato, ma anche quando
                  bisogna affrontare un problema o riconoscere una criticità.
                </p>
              </div>
              <div className="space-y-4">
                <Card className="rounded-2xl overflow-hidden bg-white border border-zinc-200">
                  <div className="aspect-[4/3] bg-zinc-100 overflow-hidden">
                    <img
                      src="/assets/pol-riunione-lega-abruzzo.jpg"
                      alt="Riunione politica"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 text-xs text-zinc-600">
                    La comunicazione istituzionale nasce anche dal confronto
                    interno, dal lavoro di coordinamento e dalla condivisione
                    di scelte responsabili.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* LAVORO DI SQUADRA */}
          <section className="space-y-6">
            <SectionTitle>Il valore del lavoro di squadra</SectionTitle>
            <div className="grid md:grid-cols-3 gap-6 md:gap-10 items-start">
              <div className="order-2 md:order-1 md:col-span-2 space-y-4 text-sm md:text-base text-zinc-700 leading-relaxed">
                <p>
                  Nessun progetto complesso può essere portato avanti da una
                  sola persona. Il lavoro di squadra è fondamentale, tanto a
                  livello istituzionale quanto nella relazione con il
                  territorio. Significa coinvolgere amministratori, tecnici,
                  associazioni, comitati, attività produttive, realtà giovanili,
                  mondi professionali e cittadini attivi.
                </p>
                <p>
                  Una politica efficace costruisce ponti, non muri. Mette
                  insieme competenze, energie e visioni diverse per affrontare
                  in modo condiviso le sfide più delicate. Solo una rete
                  coesa permette di immaginare politiche di lungo periodo e
                  progetti capaci di incidere davvero sulla qualità della vita
                  delle persone.
                </p>
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <Card className="rounded-2xl overflow-hidden bg-white border border-zinc-200">
                  <div className="aspect-[4/3] bg-zinc-100 overflow-hidden">
                    <img
                      src="/assets/pol-trio-comizio-serale.jpg"
                      alt="Team sul territorio"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 text-xs text-zinc-600">
                    Il lavoro di squadra come elemento decisivo: condividere
                    responsabilità, obiettivi e impegno concreto sul campo.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* VISIONE FUTURA & CONCLUSIONE */}
          <section className="space-y-6">
            <SectionTitle>
              Una visione futura per una città moderna, accogliente e
              competitiva
            </SectionTitle>
            <div className="grid md:grid-cols-3 gap-6 md:gap-10 items-start">
              <div className="md:col-span-2 space-y-4 text-sm md:text-base text-zinc-700 leading-relaxed">
                <p>
                  L&apos;Aquila deve essere una città capace di competere,
                  innovare e attrarre. Una città in cui i giovani non solo
                  studiano, ma decidono di restare; in cui le imprese trovano
                  condizioni favorevoli per crescere; in cui il patrimonio
                  storico convive con servizi moderni, mobilità sostenibile e
                  tecnologie al passo con i tempi.
                </p>
                <p>
                  Le sfide dei prossimi anni riguardano politiche giovanili,
                  mobilità, transizione ecologica, turismo culturale e
                  ambientale, rigenerazione urbana, digitalizzazione,
                  sicurezza, spazi pubblici e promozione culturale. È
                  necessario un approccio amministrativo moderno, capace di
                  integrare sviluppo economico, sostenibilità e qualità della
                  vita.
                </p>
                <p>
                  L&apos;impegno civico e politico, per me, è prima di tutto un
                  servizio. Non un titolo personale, non un esercizio
                  retorico, non un semplice ruolo pubblico. È un lavoro
                  quotidiano che richiede serietà, responsabilità e una
                  comprensione profonda dei bisogni della città.
                </p>
                <p>
                  Promuovere L&apos;Aquila significa custodire la sua storia,
                  valorizzare il suo presente e progettare il suo futuro. È un
                  percorso che non si compie da soli, ma insieme. Ed è un
                  percorso che continua, giorno dopo giorno, con la città e
                  mai lontano da essa.
                </p>
              </div>
              <div className="space-y-4">
                <Card className="rounded-2xl bg-[#F7F5EF] border border-zinc-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-semibold text-zinc-900">
                      Contatti per attività civica &amp; politica
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-xs text-zinc-700">
                    <p>
                      Per iniziative istituzionali, incontri pubblici, tavoli di
                      lavoro o confronti sul territorio:
                    </p>
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:info@example.com"
                        className="text-[#C8A14A] hover:underline"
                      >
                        info@example.com
                      </a>
                    </p>
                    <p>
                      Instagram:{" "}
                      <a
                        href="https://www.instagram.com/fioravagio/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#C8A14A] hover:underline"
                      >
                        @fioravagio
                      </a>
                    </p>
                    <p>
                      Facebook:{" "}
                      <a
                        href="https://www.facebook.com/giorgio.fioravanti/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#C8A14A] hover:underline"
                      >
                        giorgio.fioravanti
                      </a>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* GALLERIA FINALE FOTO POLITICA */}
      <section className="bg-[#F7F5EF] border-t border-zinc-200 py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <SectionTitle icon={Megaphone}>
              Galleria attività civica &amp; politica
            </SectionTitle>
            <span className="text-xs text-zinc-500">
              Una selezione di momenti dal territorio, dalle campagne e dagli
              eventi pubblici.
            </span>
          </div>
          <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {politicsGallery.map((item) => (
              <Card
                key={item.src}
                className="rounded-2xl overflow-hidden bg-white border border-zinc-200 hover:shadow-lg transition"
              >
                <div className="aspect-[4/3] bg-zinc-100 overflow-hidden">
                  <img
                    src={`/assets/${item.src}`}
                    alt={item.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-3">
                  <div className="text-xs font-semibold text-zinc-900">
                    {item.label}
                  </div>
                  <div className="mt-1 text-[11px] text-zinc-600">
                    {item.caption}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER SEMPLIFICATO */}
      <footer className="border-t border-zinc-200 bg-[#F0EFEB]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-xs md:text-sm text-zinc-600 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <div className="font-semibold text-[#111111]">
              Giorgio Fioravanti
            </div>
            <p>Impegno civico e politico per L&apos;Aquila.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a className="hover:underline" href="/#privacy">
              Privacy
            </a>
            <a className="hover:underline" href="/#cookie">
              Cookie
            </a>
            <a className="hover:underline" href="/#termini">
              Termini
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}