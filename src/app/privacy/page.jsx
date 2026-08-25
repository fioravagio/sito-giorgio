import Link from "next/link";
import { PageStructuredData } from "../../components/PageElements";
import { buildPageMetadata, pageSeo, SITE_EMAIL } from "../../lib/site";

export const metadata = buildPageMetadata(pageSeo.privacy);

const externalLinkClass =
  "font-medium text-[#76591D] underline underline-offset-4 hover:text-[#5E4717]";

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={externalLinkClass}
    >
      {children}
    </a>
  );
}

function PrivacySection({ title, children }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-zinc-950">{title}</h2>
      <div className="mt-2 space-y-3 leading-relaxed text-zinc-700">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F7F5EF] text-zinc-800">
      <PageStructuredData page={pageSeo.privacy} />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <Link
          href="/"
          className="text-sm font-semibold text-[#76591D] underline underline-offset-4 hover:text-[#5E4717]"
        >
          Torna al sito
        </Link>

        <h1 className="mt-6 font-display text-3xl font-bold text-zinc-950 sm:text-4xl">
          Privacy e cookie
        </h1>
        <p className="mt-4 leading-relaxed text-zinc-600">
          Questa informativa descrive i trattamenti di dati personali collegati alla
          consultazione di giorgiofioravanti.it, ai contatti volontari e all’eventuale
          attivazione dei contenuti YouTube.
        </p>

        <div className="mt-10 space-y-9 rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft sm:p-8">
          <PrivacySection title="Titolare del trattamento">
            <p>
              Il titolare del trattamento è Giorgio Fioravanti. Per informazioni o per
              esercitare i tuoi diritti puoi scrivere a{" "}
              <a href={`mailto:${SITE_EMAIL}`} className={externalLinkClass}>
                {SITE_EMAIL}
              </a>
              .
            </p>
          </PrivacySection>

          <PrivacySection title="Dati tecnici di navigazione">
            <p>
              I sistemi che rendono disponibile il sito possono acquisire dati tecnici
              trasmessi automaticamente dal dispositivo, come indirizzo IP, data e ora
              della richiesta, pagina richiesta, tipo di browser e dispositivo, esito
              della risposta e identificativi tecnici di sicurezza.
            </p>
            <p>
              Questi dati sono trattati per erogare il sito, garantirne stabilità e
              sicurezza, prevenire abusi e diagnosticare problemi tecnici. La base
              giuridica è il legittimo interesse del titolare alla corretta e sicura
              gestione del sito, ai sensi dell’articolo 6, paragrafo 1, lettera f) del
              GDPR.
            </p>
          </PrivacySection>

          <PrivacySection title="Dati inviati volontariamente">
            <p>
              L’invio di un’email comporta il trattamento dell’indirizzo del mittente,
              del contenuto del messaggio e degli eventuali ulteriori dati o allegati
              comunicati. Il conferimento è facoltativo, ma senza i dati necessari non
              è possibile rispondere alla richiesta.
            </p>
            <p>
              I dati vengono usati per rispondere, valutare proposte o collaborazioni e,
              quando richiesto, svolgere attività precontrattuali. Le basi giuridiche
              sono l’esecuzione di misure adottate su richiesta dell’interessato e il
              legittimo interesse a gestire la corrispondenza; eventuali obblighi di
              legge costituiscono un’ulteriore base applicabile.
            </p>
          </PrivacySection>

          <PrivacySection title="YouTube e collegamenti esterni">
            <p>
              Il player YouTube non viene collegato automaticamente: la connessione a
              youtube-nocookie.com avviene soltanto dopo aver premuto “Carica il video”.
              Da quel momento Google e YouTube possono ricevere dati tecnici e usare
              cookie o tecnologie analoghe secondo le proprie regole. L’attivazione è
              facoltativa e si basa sul consenso espresso tramite il pulsante; ricaricando
              la pagina il player torna disattivato.
            </p>
            <p>
              Anche i collegamenti verso social network, servizi di messaggistica e siti
              esterni trasferiscono l’utente al relativo fornitore soltanto dopo un clic.
              Consulta le{" "}
              <ExternalLink href="https://policies.google.com/privacy?hl=it">
                norme sulla privacy di Google e YouTube
              </ExternalLink>
              .
            </p>
          </PrivacySection>

          <PrivacySection title="Cookie e strumenti di misurazione">
            <p>
              Il sito non utilizza un proprio sistema di registrazione, non installa
              strumenti di profilazione o pubblicità e non integra piattaforme autonome
              di analytics. Eventuali tecnologie dei servizi esterni possono essere
              attivate solo nelle condizioni descritte sopra.
            </p>
          </PrivacySection>

          <PrivacySection title="Fornitori e destinatari">
            <p>
              I dati possono essere trattati, nei limiti necessari, dai fornitori tecnici
              impiegati per rendere disponibili i servizi: Vercel Inc. per hosting,
              distribuzione e sicurezza; il fornitore Libero/Italiaonline per la posta
              elettronica; Google/YouTube solo quando viene attivato il player o aperto un
              loro collegamento.
            </p>
            <p>
              Maggiori informazioni sono disponibili nel{" "}
              <ExternalLink href="https://vercel.com/legal/dpa">
                Data Processing Addendum di Vercel
              </ExternalLink>
              {" "}e nell’
              <ExternalLink href="https://info.libero.it/privacy/libero-mail/">
                informativa di Libero Mail
              </ExternalLink>
              . I dati possono inoltre essere comunicati quando richiesto dalla legge o
              dall’autorità competente.
            </p>
          </PrivacySection>

          <PrivacySection title="Trasferimenti fuori dallo Spazio economico europeo">
            <p>
              Alcuni fornitori hanno sede o infrastrutture anche fuori dallo Spazio
              economico europeo. Quando necessario, i trasferimenti sono disciplinati
              dagli strumenti indicati dai fornitori, come decisioni di adeguatezza,
              Data Privacy Framework o Clausole contrattuali standard approvate dalla
              Commissione europea. Consulta la documentazione di Vercel sopra indicata e
              le{" "}
              <ExternalLink href="https://policies.google.com/privacy/frameworks?hl=it">
                informazioni di Google sui trasferimenti dei dati
              </ExternalLink>
              .
            </p>
          </PrivacySection>

          <PrivacySection title="Tempi di conservazione">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                I dati tecnici sono conservati per il tempo necessario a sicurezza,
                funzionamento e diagnosi, secondo i limiti e le configurazioni del
                servizio di hosting, quindi cancellati o resi anonimi salvo obblighi di
                legge.
              </li>
              <li>
                La corrispondenza priva di seguito contrattuale viene conservata, di
                regola, non oltre 12 mesi dall’ultima comunicazione. Se nasce un rapporto
                o una controversia, i dati pertinenti possono essere conservati per la
                relativa durata e per i successivi termini previsti dalla legge.
              </li>
              <li>
                Il sito non conserva una profilazione o uno storico dell’attivazione del
                player YouTube; gli eventuali dati raccolti dal servizio esterno seguono
                i tempi indicati da Google.
              </li>
            </ul>
          </PrivacySection>

          <PrivacySection title="Diritti dell’interessato">
            <p>
              Nei casi previsti dagli articoli 15–22 del GDPR puoi chiedere accesso,
              rettifica, cancellazione, limitazione, portabilità dei dati oppure opporti
              al trattamento. Quando il trattamento si basa sul consenso puoi revocarlo
              in qualsiasi momento, senza pregiudicare la liceità del trattamento già
              svolto.
            </p>
            <p>
              Puoi presentare la richiesta al titolare tramite l’indirizzo email indicato
              sopra. Hai inoltre il diritto di proporre reclamo al Garante per la
              protezione dei dati personali: consulta la pagina ufficiale su{" "}
              <ExternalLink href="https://www.garanteprivacy.it/home/diritti/come-agire-per-tutelare-i-tuoi-dati-personali">
                esercizio dei diritti e reclami
              </ExternalLink>
              .
            </p>
          </PrivacySection>

          <PrivacySection title="Sicurezza e decisioni automatizzate">
            <p>
              Sono adottate misure tecniche proporzionate alla natura del sito, tra cui
              connessione HTTPS e intestazioni di sicurezza. Il sito non svolge processi
              decisionali automatizzati né profilazione degli utenti.
            </p>
          </PrivacySection>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-zinc-600">
          Ultimo aggiornamento: 25 agosto 2026. L’informativa viene rivista quando
          cambiano funzioni, fornitori o modalità di trattamento del sito.
        </p>
      </div>
    </main>
  );
}
