# Sito personale di Giorgio Fioravanti

Sito realizzato con Next.js App Router e pubblicato su Vercel.

## Struttura

Il progetto usa Next.js 16 con App Router. Le pagine pubbliche sono generate
staticamente e comprendono homepage, attività civica, territorio, DJ ed eventi,
mototurismo, YouTube, grafica, contatti e privacy.

## Sviluppo locale

Richiede Node.js 22.12 o successivo.

```bash
npm ci
npm run check
npm run dev
```

L’anteprima è disponibile su `http://localhost:3000`.

Per configurare l’indirizzo pubblico e predisporre Search Console:

```bash
cp .env.example .env.local
```

`NEXT_PUBLIC_SITE_URL` deve contenere `https://giorgiofioravanti.it` senza
barra finale. Le anteprime Vercel devono continuare a usare l’indirizzo canonico
di produzione, per evitare duplicati nei motori di ricerca.

## Controlli prima della pubblicazione

```bash
npm run lint
npm run build:verify
npm audit
```

In alternativa, `npm run check` esegue insieme lint e verifica della build.

`build:verify` controlla le immagini, genera tutte le pagine e verifica i
principali segnali SEO nell’HTML prodotto.

Quando vengono aggiunte o sostituite fotografie, eseguire prima:

```bash
npm run images:optimize
```

## Pubblicazione su Vercel

1. Collegare a Vercel il repository GitHub `fioravagio/sito-giorgio`.
2. Lasciare il framework Next.js rilevato automaticamente.
3. Impostare `NEXT_PUBLIC_SITE_URL` con l’URL di produzione.
4. Aggiungere `GOOGLE_SITE_VERIFICATION` quando Google fornisce il codice.
5. Pubblicare e verificare che `/robots.txt` e `/sitemap.xml` rispondano.

## Google Search Console

1. Creare una proprietà con prefisso URL per l’indirizzo pubblico definitivo.
2. Scegliere la verifica tramite tag HTML e copiare soltanto il valore del
   campo `content` nella variabile Vercel `GOOGLE_SITE_VERIFICATION`.
3. Pubblicare nuovamente il sito e completare la verifica in Search Console.
4. Inviare `https://giorgiofioravanti.it/sitemap.xml`.
5. Controllare dopo alcuni giorni indicizzazione, usabilità mobile e Core Web
   Vitals.

L’indirizzo tecnico `sito-giorgio.vercel.app` viene reindirizzato in modo
permanente al dominio personale per evitare contenuti duplicati.

## Protezioni e privacy

Il sito imposta Content Security Policy, HSTS, protezione anti-iframe,
Referrer Policy e Permissions Policy. Il player YouTube usa il dominio
`youtube-nocookie.com` e viene caricato soltanto dopo l’azione dell’utente.
