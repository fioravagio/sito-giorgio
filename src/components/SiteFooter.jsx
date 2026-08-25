import Link from "next/link";
import { navigation, SITE_EMAIL } from "../lib/site";
import SiteBrand from "./SiteBrand";

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-[#F0EFEB]">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-zinc-600 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(230px,1fr)_2fr_1fr]">
          <div>
            <Link
              href="/"
              aria-label="Giorgio Fioravanti — torna alla homepage"
              className="inline-flex max-w-full rounded-sm"
            >
              <SiteBrand size="footer" />
            </Link>
            <p className="mt-4 max-w-xs leading-relaxed">
              Territorio, eventi e comunicazione, con radici a L&apos;Aquila.
            </p>
          </div>

          <nav aria-label="Navigazione nel piè di pagina">
            <p className="font-semibold text-zinc-950">Pagine</p>
            <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link className="hover:text-zinc-950 hover:underline" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-semibold text-zinc-950">Contatti e privacy</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="hover:text-zinc-950 hover:underline" href={`mailto:${SITE_EMAIL}`}>
                  {SITE_EMAIL}
                </a>
              </li>
              <li>
                <Link className="hover:text-zinc-950 hover:underline" href="/privacy/">
                  Privacy e cookie
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-8 border-t border-zinc-300 pt-6 text-xs">
          © {new Date().getFullYear()} Giorgio Fioravanti — Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
