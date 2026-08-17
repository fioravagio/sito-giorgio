import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#F7F5EF] px-4 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6A25]">
          Errore 404
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-zinc-950">
          Pagina non trovata
        </h1>
        <p className="mt-3 text-zinc-600">
          Il contenuto richiesto non è disponibile o è stato spostato.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white"
        >
          Torna alla homepage
        </Link>
      </div>
    </main>
  );
}
