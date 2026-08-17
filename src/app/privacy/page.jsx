import Link from "next/link";
import { PageStructuredData } from "../../components/PageElements";
import { buildPageMetadata, pageSeo, SITE_EMAIL } from "../../lib/site";

export const metadata = buildPageMetadata(pageSeo.privacy);

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F7F5EF] text-zinc-800">
      <PageStructuredData page={pageSeo.privacy} />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <Link
          href="/"
          className="text-sm font-semibold text-[#8A6A25] underline underline-offset-4"
        >
          Torna al sito
        </Link>

        <h1 className="mt-6 font-display text-3xl font-bold text-zinc-950 sm:text-4xl">
          Privacy e cookie
        </h1>
        <p className="mt-4 leading-relaxed text-zinc-600">
          Questa pagina descrive in modo sintetico come vengono trattati i dati
          personali durante la consultazione del sito di Giorgio Fioravanti.
        </p>

        <div className="mt-10 space-y-8 rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft sm:p-8">
          <section>
            <h2 className="text-lg font-semibold text-zinc-950">
              Titolare e contatti
            </h2>
            <p className="mt-2 leading-relaxed">
              Il titolare del trattamento è Giorgio Fioravanti. Per richieste
              relative alla privacy puoi scrivere a{" "}
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="font-medium text-[#8A6A25] underline underline-offset-4"
              >
                {SITE_EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-950">
              Dati tecnici di navigazione
            </h2>
            <p className="mt-2 leading-relaxed">
              Il fornitore che ospita il sito può trattare dati tecnici come
              indirizzo IP, data e ora della richiesta, dispositivo, browser e
              pagine consultate, per erogare il servizio, prevenire abusi e
              proteggere l’infrastruttura.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-950">
              Dati inviati volontariamente
            </h2>
            <p className="mt-2 leading-relaxed">
              I dati comunicati volontariamente tramite email o servizi di
              messaggistica vengono usati per rispondere alla richiesta e per
              gli eventuali adempimenti collegati. Il sito non contiene un modulo
              di iscrizione o un sistema autonomo di profilazione.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-950">
              Contenuti e collegamenti esterni
            </h2>
            <p className="mt-2 leading-relaxed">
              I video YouTube vengono caricati soltanto dopo una scelta esplicita
              dell’utente. L’attivazione del video e l’apertura dei collegamenti
              verso social network o servizi di messaggistica comportano un
              collegamento diretto con il relativo fornitore, che applica la
              propria informativa.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-950">
              Diritti e aggiornamenti
            </h2>
            <p className="mt-2 leading-relaxed">
              Puoi chiedere informazioni sui dati che ti riguardano e, nei casi
              previsti dalla normativa, accesso, rettifica, cancellazione,
              limitazione o opposizione al trattamento. Questa informativa può
              essere aggiornata quando cambiano le funzioni o i servizi del sito.
            </p>
          </section>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-zinc-500">
          Ultimo aggiornamento: 17 agosto 2026. Testo informativo generale; per
          esigenze specifiche è opportuno richiedere una valutazione professionale.
        </p>
      </div>
    </main>
  );
}
