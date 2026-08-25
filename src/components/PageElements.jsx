import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { absoluteUrl, SITE_URL } from "../lib/site";
import SiteImage from "./SiteImage";

export function PageStructuredData({ page, type = "WebPage" }) {
  const url = absoluteUrl(page.path);
  const breadcrumbName = page.title.split("|")[0].trim();
  const breadcrumbId = `${url}#breadcrumb`;
  const webPage = {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: "it-IT",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    ...(page.image ? { primaryImageOfPage: absoluteUrl(page.image) } : {}),
    ...(page.path === "/" ? { mainEntity: { "@id": `${SITE_URL}/#person` } } : {}),
    ...(page.path !== "/" ? { breadcrumb: { "@id": breadcrumbId } } : {}),
  };
  const graph = [webPage];

  if (page.path !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: breadcrumbName,
          item: url,
        },
      ],
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
          /</g,
          "\\u003c",
        ),
      }}
    />
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imageOverlay,
  children,
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F7F5EF] via-white to-[#EFE8D7]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_400px_at_85%_0%,rgba(200,161,74,0.2),transparent)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
        <div className={image ? "lg:col-span-6" : "lg:col-span-8"}>
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8A6A25]">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-tight text-zinc-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
            {description}
          </p>
          {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
        </div>

        {image && (
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-zinc-100 shadow-[0_18px_45px_rgba(0,0,0,0.12)] ring-1 ring-zinc-200">
              <SiteImage
                src={image}
                alt={imageAlt}
                sizes="(max-width: 1024px) 100vw, 50vw"
                preload
                className="h-full w-full object-cover"
              />
              {imageOverlay}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A6A25]">
          {eyebrow}
        </p>
      )}
      <h2 className="accent-bar mt-2 font-display text-2xl font-bold text-zinc-950 sm:text-3xl">
        {title}
      </h2>
      {description && <p className="mt-4 leading-relaxed text-zinc-600">{description}</p>}
    </div>
  );
}

export function PhotoGrid({ items, className = "md:grid-cols-3", aspect = "aspect-[4/3]" }) {
  return (
    <div className={`mt-8 grid gap-4 sm:grid-cols-2 ${className}`}>
      {items.map((item) => (
        <figure
          key={item.src}
          className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
        >
          <div className={`${aspect} overflow-hidden bg-zinc-100`}>
            <SiteImage
              src={item.src.startsWith("/") ? item.src : `/assets/${item.src}`}
              alt={item.alt || item.title || ""}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
          {(item.title || item.caption) && (
            <figcaption className="p-4">
              {item.title && <p className="font-semibold text-zinc-950">{item.title}</p>}
              {item.caption && <p className="mt-1 text-sm leading-relaxed text-zinc-600">{item.caption}</p>}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

export function ContactBand({ title, text }) {
  return (
    <section className="bg-zinc-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <h2 className="font-display text-2xl font-bold">{title}</h2>
          <p className="mt-2 max-w-2xl text-zinc-300">{text}</p>
        </div>
        <Link
          href="/contatti/"
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-2xl bg-[#C8A14A] px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-[#E0C273] md:self-auto"
        >
          Contattami <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
