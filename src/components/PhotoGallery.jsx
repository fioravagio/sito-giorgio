"use client";

import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SiteImage from "./SiteImage";

const assetPath = (src) => src.startsWith("/") ? src : `/assets/${src}`;

export default function PhotoGallery({ items, className, aspect, sizes }) {
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const isOpen = selected !== null;
  const current = isOpen ? items[selected] : null;

  useEffect(() => {
    if (!isOpen) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element.showModal();
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function move(direction) {
    setSelected((index) => (index + direction + items.length) % items.length);
  }

  return (
    <>
      <div className={`mt-8 grid gap-4 sm:grid-cols-2 ${className}`}>
        {items.map((item, index) => (
          <figure key={item.src} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <button
              type="button"
              aria-label={`Ingrandisci: ${item.title || item.caption || `foto ${index + 1}`}`}
              aria-haspopup="dialog"
              onClick={() => setSelected(index)}
              className={`group relative block w-full cursor-zoom-in overflow-hidden bg-zinc-100 ${aspect}`}
            >
              <SiteImage
                src={assetPath(item.src)}
                alt={item.alt || ""}
                sizes={sizes}
                className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.02] ${item.fit === "contain" ? "object-contain" : "object-cover"}`}
                style={item.position ? { objectPosition: item.position } : undefined}
              />
              <span className="pointer-events-none absolute bottom-3 right-3 rounded-lg bg-black/65 p-2 text-white">
                <Expand className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>
            {(item.title || item.caption) && (
              <figcaption className="p-4">
                {item.title && <p className="font-semibold text-zinc-950">{item.title}</p>}
                {item.caption && <p className="mt-1 text-sm leading-relaxed text-zinc-600">{item.caption}</p>}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        aria-label="Galleria fotografica"
        className="fixed inset-0 m-auto h-[100dvh] max-h-none w-screen max-w-none flex-col bg-zinc-950 p-4 text-white backdrop:bg-black/80 open:flex sm:p-6"
        onCancel={(event) => { event.preventDefault(); setSelected(null); }}
        onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
          if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
        }}
      >
        {current && (
          <>
            <div className="mb-4 flex shrink-0 items-center justify-between gap-4">
              <p className="text-sm text-zinc-300" aria-live="polite">{selected + 1} / {items.length}</p>
              <button type="button" onClick={() => setSelected(null)} aria-label="Chiudi la foto" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 hover:bg-white/10">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="min-h-0 flex-1">
              <SiteImage src={assetPath(current.src)} alt={current.alt || current.title || ""} sizes="100vw" quality={82} className="h-full w-full object-contain" />
            </div>
            <div className="mx-auto mt-4 flex w-full max-w-5xl shrink-0 items-center gap-3 sm:gap-6">
              <button type="button" onClick={() => move(-1)} aria-label="Foto precedente" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/30 hover:bg-white/10">
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <div className="max-h-[25dvh] min-w-0 flex-1 overflow-y-auto text-center" aria-live="polite">
                {current.title && <p className="text-sm font-semibold sm:text-base">{current.title}</p>}
                {current.caption && <p className="mt-1 text-xs leading-relaxed text-zinc-300 sm:text-sm">{current.caption}</p>}
              </div>
              <button type="button" onClick={() => move(1)} aria-label="Foto successiva" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/30 hover:bg-white/10">
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
