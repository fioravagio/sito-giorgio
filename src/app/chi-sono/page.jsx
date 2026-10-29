import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ContactBand, PageHero, PageStructuredData, SectionHeading } from "../../components/PageElements";
import { buildPageMetadata, pageSeo } from "../../lib/site";

export const metadata = buildPageMetadata(pageSeo.chiSono);

const experience = [
  {
    period: "Novembre 2024 – marzo 2025",
    organisation: "FiorSì Srl",
    role: "Amministrazione, comunicazione e grafica",
    text: "Collaborazione amministrativa professionale, social media management, grafica pubblicitaria e gestione dei processi comunicativi.",
  },
  {
    period: "Novembre 2021 – ottobre 2024",
    organisation: "ARTA Abruzzo · Distretto dell’Aquila",
    role: "Collaboratore amministrativo professionale",
    text: "Esperienza nell’area amministrativa dell’Agenzia Regionale per la Tutela dell’Ambiente, presso il distretto dell’Aquila.",
  },
  {
    period: "Ottobre 2010 – ottobre 2020",
    organisation: "SICURA Servizi alle Imprese Srl",
    role: "Amministrazione d’impresa",
    text: "Gestione della società e responsabilità organizzative nell’ambito dei servizi alle imprese.",
  },
  {
    period: "2009–2017",
    organisation: "Sicurezza sul lavoro e formazione",
    role: "RSPP esterno e formatore aziendale",
    text: "Incarichi di responsabile del servizio di prevenzione e protezione dal 2009 al 2015 e attività di formazione aziendale dal 2010 al 2017. Un percorso dedicato alla prevenzione, all’organizzazione del lavoro e alla formazione di lavoratori e imprese.",
  },
];

export default function ChiSonoPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageStructuredData page={pageSeo.chiSono} type="AboutPage" />
      <PageHero
        eyebrow="Giorgio Fioravanti · Chi sono"
        title="Un percorso tra impresa, territorio e comunicazione."
        description="La mia vita professionale ha attraversato ambiti diversi: la gestione d’impresa, la sicurezza sul lavoro, l’amministrazione e la comunicazione. La formazione negli eventi e il legame con L’Aquila tengono insieme queste esperienze e il mio impegno nella comunità."
        image="/assets/pol-hero-gransasso-home.jpg"
        imageAlt="Giorgio Fioravanti sul Gran Sasso, a Campo Imperatore"
      />

      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="La formazione" title="Progettare e gestire gli eventi" />
          <div className="mt-7 grid gap-7 md:grid-cols-2 md:gap-12">
            <div className="rounded-3xl border border-zinc-200 bg-[#F7F5EF] p-6 sm:p-8">
              <p className="text-sm font-semibold text-[#76591D]">Università degli Studi di Firenze · 2008</p>
              <h3 className="mt-3 text-xl font-bold leading-snug">Laurea in Progettazione e Gestione degli Eventi e Imprese dell’Arte e dello Spettacolo</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">Il percorso Pro.Ge.A.S. è la base della mia formazione nell’organizzazione e nella gestione di progetti culturali e di spettacolo.</p>
            </div>
            <div className="space-y-4 self-center leading-relaxed text-zinc-700">
              <p>Prima dell’università ho conseguito il diploma di maturità scientifica al Liceo Andrea Bafile dell’Aquila. Ho poi seguito la formazione per responsabile del servizio di prevenzione e protezione, con i moduli A, B e C.</p>
              <p>La dimensione organizzativa e quella creativa si ritrovano anche nella musica, nei DJ set e nella progettazione di campagne pubblicitarie e materiali di comunicazione.</p>
              <Link href="/organizzazione-eventi/" className="inline-flex items-center gap-2 font-semibold text-[#76591D] underline underline-offset-4 hover:text-[#5E4717]">L’esperienza negli eventi <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF8]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Esperienze professionali" title="Lavoro, responsabilità e competenze" />
          <ol className="mt-9 grid gap-5 md:grid-cols-2">
            {experience.map((item) => (
              <li key={item.organisation} className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
                <p className="text-sm font-semibold text-[#76591D]">{item.period}</p>
                <h3 className="mt-3 text-xl font-bold">{item.organisation}</h3>
                <p className="mt-2 font-medium text-zinc-800">{item.role}</p>
                <p className="mt-3 leading-relaxed text-zinc-600">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Il legame con L’Aquila" title="Le esperienze diventano impegno per il territorio" />
          <div className="mt-7 max-w-4xl space-y-4 leading-relaxed text-zinc-700">
            <p>Il Gran Sasso attraversa il mio percorso anche attraverso l’esperienza nel comitato civico #SaveGranSasso, nell’associazione Progetto Montagna e nel lavoro sulla Carta del Gran Sasso. Sono occasioni di partecipazione legate alla montagna e alle comunità delle aree interne.</p>
            <p>Oggi il mio impegno politico prosegue in Fratelli d’Italia, con l’incarico di responsabile provinciale del Dipartimento Imprese all’Aquila. A questo affianco l’organizzazione di eventi, la comunicazione, la musica e la passione per il mototurismo.</p>
          </div>
          <Link href="/civica/" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#76591D] underline underline-offset-4 hover:text-[#5E4717]">Il percorso civico e politico <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </section>
      <ContactBand title="Confrontiamoci su un progetto" text="Per iniziative sul territorio, eventi e collaborazioni puoi contattarmi attraverso i miei canali pubblici." />
    </main>
  );
}
