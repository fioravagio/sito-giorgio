import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";
import nextConfig from "../next.config.mjs";
import { DEFAULT_SOCIAL_IMAGE, SITE_URL, pageSeo } from "../src/lib/site.js";

const ROOT = process.cwd();
const APP_OUTPUT = path.join(ROOT, ".next", "server", "app");
const problems = [];
const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

const pages = [
  { filename: "index.html", seo: pageSeo.home },
  { filename: "civica.html", seo: pageSeo.civica },
  { filename: "territorio.html", seo: pageSeo.territorio },
  { filename: "dj-eventi.html", seo: pageSeo.djEventi },
  { filename: "mototurismo.html", seo: pageSeo.mototurismo },
  { filename: "youtube-media.html", seo: pageSeo.youtubeMedia },
  { filename: "grafica-branding.html", seo: pageSeo.graficaBranding },
  { filename: "contatti.html", seo: pageSeo.contatti },
  { filename: "privacy.html", seo: pageSeo.privacy },
];
const generatedPaths = new Set(pages.map((page) => page.seo.path));

const escapePattern = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const attribute = (tag, name) =>
  tag.match(new RegExp(`\\b${name}="([^"]*)"`, "i"))?.[1] ?? null;

for (const page of pages) {
  let html;
  try {
    html = await readFile(path.join(APP_OUTPUT, page.filename), "utf8");
  } catch {
    problems.push(`${page.filename}: pagina HTML statica non generata`);
    continue;
  }

  const canonical = new URL(page.seo.path, SITE_URL).toString();
  const imageWidth = page.seo.imageWidth || 2048;
  const imageHeight = page.seo.imageHeight || 1365;
  const expected = [
    `<title>${page.seo.title}</title>`,
    `<meta name="description" content="${page.seo.description}"`,
    `<link rel="canonical" href="${canonical}"`,
    '<meta name="robots" content="index, follow"',
    'max-image-preview:large',
    `<meta property="og:url" content="${canonical}"`,
    `<meta property="og:image:width" content="${imageWidth}"`,
    `<meta property="og:image:height" content="${imageHeight}"`,
    '<meta name="twitter:card" content="summary_large_image"',
    '"@type":"Person"',
    '"@type":"WebSite"',
    `"@id":"${canonical}#webpage"`,
    "<h1",
  ];
  if (page.seo.path !== "/") expected.push('"@type":"BreadcrumbList"');
  if (page.seo.image) {
    expected.push(
      '"primaryImageOfPage":{"@type":"ImageObject"',
      `"contentUrl":"${new URL(page.seo.image, SITE_URL)}"`,
    );
  }
  if (googleVerification) {
    expected.push(
      `<meta name="google-site-verification" content="${googleVerification}"`,
    );
  }

  for (const marker of expected) {
    if (!html.includes(marker)) problems.push(`${page.filename}: manca ${marker}`);
  }

  for (const forbidden of [
    "cdn.tailwindcss.com",
    "info@example.com",
    "+39 3XX",
    'href="#"',
  ]) {
    if (html.includes(forbidden)) {
      problems.push(`${page.filename}: contiene il segnaposto ${forbidden}`);
    }
  }

  const imageTags = html.match(/<img\b[^>]*>/g) || [];
  for (const imageTag of imageTags) {
    if (!/\bwidth="\d+"/.test(imageTag) || !/\bheight="\d+"/.test(imageTag)) {
      problems.push(`${page.filename}: immagine senza dimensioni intrinseche`);
      break;
    }
    if (attribute(imageTag, "alt") === null) {
      problems.push(`${page.filename}: immagine senza attributo alt`);
      break;
    }
  }

  const h1Count = (html.match(/<h1\b/g) || []).length;
  if (h1Count !== 1) {
    problems.push(`${page.filename}: trovati ${h1Count} titoli h1 invece di uno`);
  }
  const mainCount = (html.match(/<main\b/g) || []).length;
  if (mainCount !== 1) {
    problems.push(`${page.filename}: trovati ${mainCount} elementi main invece di uno`);
  }

  const timeTags = html.match(/<time\b[^>]*>/g) || [];
  for (const timeTag of timeTags) {
    if (attribute(timeTag, "datetime") === null) {
      problems.push(`${page.filename}: elemento time senza data leggibile dalle macchine`);
    }
  }

  const anchorTags = html.match(/<a\b[^>]*>/g) || [];
  for (const anchorTag of anchorTags) {
    const href = attribute(anchorTag, "href");
    if (!href) continue;

    if (attribute(anchorTag, "target") === "_blank") {
      const rel = attribute(anchorTag, "rel") || "";
      if (!rel.includes("noopener") || !rel.includes("noreferrer")) {
        problems.push(`${page.filename}: link esterno in nuova scheda senza rel sicuro`);
      }
    }

    if (href.startsWith("#")) {
      const targetId = href.slice(1);
      if (targetId && !html.includes(`id="${targetId}"`)) {
        problems.push(`${page.filename}: ancora interna senza destinazione ${href}`);
      }
      continue;
    }
    if (/^(mailto:|tel:)/.test(href)) continue;

    const linkUrl = new URL(href, SITE_URL);
    if (linkUrl.origin === new URL(SITE_URL).origin) {
      const pathWithSlash =
        linkUrl.pathname === "/" || linkUrl.pathname.endsWith("/")
          ? linkUrl.pathname
          : `${linkUrl.pathname}/`;
      if (!generatedPaths.has(pathWithSlash)) {
        problems.push(`${page.filename}: collegamento interno non generato ${href}`);
      }
    }
  }

  if (!new RegExp(`<html[^>]+lang="it"`).test(html)) {
    problems.push(`${page.filename}: lingua italiana non dichiarata`);
  }
  if (new RegExp(`<title>${escapePattern(page.seo.title)}[^<]+`).test(html)) {
    problems.push(`${page.filename}: titolo duplicato o alterato`);
  }
}

const [robots, sitemap, manifestText] = await Promise.all([
  readFile(path.join(APP_OUTPUT, "robots.txt.body"), "utf8"),
  readFile(path.join(APP_OUTPUT, "sitemap.xml.body"), "utf8"),
  readFile(path.join(APP_OUTPUT, "manifest.webmanifest.body"), "utf8"),
]);

const manifest = JSON.parse(manifestText);
const maskableIcons = (manifest.icons || []).filter((icon) =>
  String(icon.purpose || "").split(/\s+/).includes("maskable"),
);
if (!maskableIcons.length) {
  problems.push("manifest web app senza icona maskable");
}
for (const icon of manifest.icons || []) {
  if (!icon.src?.startsWith("/")) {
    problems.push(`manifest web app con percorso icona non valido: ${icon.src}`);
    continue;
  }

  const iconPath =
    icon.src === "/icon.svg"
      ? path.join(ROOT, "src", "app", "icon.svg")
      : path.join(ROOT, "public", icon.src.replace(/^\/+/, ""));
  try {
    const iconMetadata = await sharp(iconPath).metadata();
    const declaredSize = String(icon.sizes || "").match(/^(\d+)x(\d+)$/);
    if (
      declaredSize &&
      (iconMetadata.width !== Number(declaredSize[1]) ||
        iconMetadata.height !== Number(declaredSize[2]))
    ) {
      problems.push(
        `manifest web app: ${icon.src} non corrisponde alla misura dichiarata`,
      );
    }
  } catch {
    problems.push(`manifest web app: icona non leggibile ${icon.src}`);
  }
}

if (!robots.includes("User-Agent: *") || !robots.includes("Allow: /")) {
  problems.push("robots.txt non consente la scansione pubblica");
}
if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) {
  problems.push("robots.txt non indica la sitemap");
}
for (const page of pages) {
  const canonical = new URL(page.seo.path, SITE_URL).toString();
  if (!sitemap.includes(`<loc>${canonical}</loc>`)) {
    problems.push(`sitemap.xml non contiene ${canonical}`);
  }
}

for (const page of pages) {
  const imagePath = page.seo.image || DEFAULT_SOCIAL_IMAGE;
  const expectedWidth = page.seo.imageWidth || 2048;
  const expectedHeight = page.seo.imageHeight || 1365;
  const socialImagePath = path.join(ROOT, "public", imagePath.replace(/^\/+/, ""));
  const socialImage = await sharp(socialImagePath).metadata();
  if (socialImage.width !== expectedWidth || socialImage.height !== expectedHeight) {
    problems.push(
      `${page.filename}: immagine social dichiarata ${expectedWidth}×${expectedHeight} ma file ${socialImage.width}×${socialImage.height}`,
    );
  }
}

if (nextConfig.trailingSlash !== true) {
  problems.push("Next.js non impone URL con barra finale");
}
const redirects = await nextConfig.redirects();
const legacyDomainRedirect = redirects.find(
  (redirect) =>
    redirect.has?.some(
      (condition) =>
        condition.type === "host" && condition.value === "sito-giorgio.vercel.app",
    ) && redirect.destination === `${SITE_URL}/:path*`,
);
if (!legacyDomainRedirect?.permanent) {
  problems.push("redirect permanente dal dominio Vercel al dominio personale assente");
}
const headers = await nextConfig.headers();
const securityHeaderNames = new Set(
  headers.flatMap((rule) => rule.headers || []).map((item) => item.key.toLowerCase()),
);
for (const header of [
  "x-content-type-options",
  "x-frame-options",
  "referrer-policy",
  "permissions-policy",
  "cross-origin-opener-policy",
  "strict-transport-security",
  "content-security-policy",
]) {
  if (!securityHeaderNames.has(header)) problems.push(`header di sicurezza assente: ${header}`);
}
const contentSecurityPolicy = headers
  .flatMap((rule) => rule.headers || [])
  .find((item) => item.key.toLowerCase() === "content-security-policy")?.value;
if (!contentSecurityPolicy?.includes("frame-src https://www.youtube-nocookie.com")) {
  problems.push("Content Security Policy non consente il player YouTube in modalità privacy");
}
if (!contentSecurityPolicy?.includes("frame-ancestors 'none'")) {
  problems.push("Content Security Policy non impedisce l’inclusione del sito in iframe esterni");
}
if (contentSecurityPolicy?.includes("'unsafe-eval'")) {
  problems.push("Content Security Policy di produzione consente unsafe-eval");
}

if (problems.length) {
  console.error("Controllo SEO non superato:");
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log(
  `SEO verificata: ${pages.length} pagine statiche, canonical, social metadata, dati strutturati, robots e sitemap validi.`,
);
