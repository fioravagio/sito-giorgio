"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "../lib/site";
import SiteBrand from "./SiteBrand";

function isCurrent(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center gap-4 px-4 sm:min-h-[76px] sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Giorgio Fioravanti — torna alla homepage"
          className="mr-auto inline-flex shrink-0 rounded-sm"
        >
          <SiteBrand size="header" preload />
        </Link>

        <nav aria-label="Navigazione principale" className="hidden xl:block">
          <ul className="flex items-center gap-5 text-sm text-zinc-700">
            {navigation.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={current ? "page" : undefined}
                    className={`rounded-lg py-2 transition-colors hover:text-zinc-950 ${
                      current ? "font-semibold text-[#8A6A25]" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href="/contatti/"
          onClick={() => setOpen(false)}
          className="hidden rounded-2xl bg-[#4A4A4A] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#8A6A25] sm:inline-flex xl:ml-1"
        >
          Contattami
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-300 text-zinc-900 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Chiudi il menu" : "Apri il menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Navigazione principale mobile"
          className="border-t border-zinc-200 bg-white px-4 py-4 xl:hidden"
        >
          <ul className="mx-auto grid max-w-7xl gap-1 sm:grid-cols-2">
            {navigation.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={current ? "page" : undefined}
                    className={`block rounded-xl px-3 py-3 text-sm ${
                      current
                        ? "bg-[#F7F1E2] font-semibold text-[#76591D]"
                        : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
