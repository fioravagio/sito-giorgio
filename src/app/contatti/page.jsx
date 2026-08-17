import { Facebook, Instagram, Mail, MessageCircle, Youtube } from "lucide-react";
import { PageHero, PageStructuredData, SectionHeading } from "../../components/PageElements";
import { buildPageMetadata, pageSeo, SITE_EMAIL } from "../../lib/site";

export const metadata = buildPageMetadata(pageSeo.contatti);

const contacts = [
  { icon: Mail, label: "Email", value: SITE_EMAIL, href: `mailto:${SITE_EMAIL}` },
  { icon: MessageCircle, label: "Messenger", value: "Scrivi su Messenger", href: "https://m.me/giorgio.fioravanti" },
  { icon: Instagram, label: "Instagram", value: "@fioravagio", href: "https://www.instagram.com/fioravagio/" },
  { icon: Facebook, label: "Facebook", value: "Giorgio Fioravanti", href: "https://www.facebook.com/giorgio.fioravanti/" },
  { icon: Youtube, label: "YouTube", value: "@fioravanti81", href: "https://www.youtube.com/@fioravanti81" },
];

const requestTypes = [
  ["DJ set ed eventi", "DJ%20set%20ed%20eventi"],
  ["Progetto grafico", "Progetto%20grafico"],
  ["Territorio e associazioni", "Territorio%20e%20associazioni"],
  ["Attività civica o istituzionale", "Attivit%C3%A0%20civica%20o%20istituzionale"],
];

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageStructuredData page={pageSeo.contatti} type="ContactPage" />
      <PageHero
        eyebrow="Contatti diretti"
        title="Parliamo del tuo progetto"
        description="Per eventi, collaborazioni, grafica, iniziative sul territorio o attività istituzionali puoi contattarmi direttamente attraverso il canale che preferisci."
      >
        <a href={`mailto:${SITE_EMAIL}`} className="inline-flex items-center gap-2 rounded-2xl bg-[#4A4A4A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#8A6A25]">
          <Mail className="h-4 w-4" aria-hidden="true" /> Scrivimi via email
        </a>
      </PageHero>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Canali" title="Scegli come contattarmi" description="I collegamenti social si aprono sui rispettivi servizi esterni." />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contacts.map((contact) => {
              const external = contact.href.startsWith("http");
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group rounded-2xl border border-zinc-200 p-5 transition hover:border-[#D9BE7D] hover:shadow-md"
                >
                  <contact.icon className="h-6 w-6 text-[#A17B2C]" aria-hidden="true" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">{contact.label}</p>
                  <p className="mt-1 font-semibold text-zinc-950 group-hover:underline">{contact.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-[#F7F5EF]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Richieste" title="Parti dall’argomento" description="Questi collegamenti preparano un’email con l’oggetto già compilato." />
          <div className="mt-8 flex flex-wrap gap-3">
            {requestTypes.map(([label, subject]) => (
              <a key={label} href={`mailto:${SITE_EMAIL}?subject=${subject}`} className="rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-800 hover:border-[#8A6A25] hover:text-[#76591D]">
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
