import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const files = Object.fromEntries(
  await Promise.all(
    [
      "src/app/globals.css",
      "src/app/youtube-media/page.jsx",
      "src/components/PageElements.jsx",
      "src/components/SiteBrand.jsx",
      "src/components/SiteHeader.jsx",
      "src/components/YouTubeEmbed.jsx",
    ].map(async (filename) => [
      filename,
      await readFile(path.join(root, filename), "utf8"),
    ]),
  ),
);

const requirements = [
  {
    file: "src/components/SiteBrand.jsx",
    pattern: "xl:h-[124px] xl:w-[124px]",
    message: "il marchio home deve raggiungere la misura massima solo da xl",
  },
  {
    file: "src/components/SiteBrand.jsx",
    pattern: "lg:text-[1.15rem] xl:text-[1.6rem]",
    message: "il nome deve avere una misura intermedia su iPad orizzontale",
  },
  {
    file: "src/components/SiteBrand.jsx",
    pattern: "tracking-[0.16em] sm:tracking-[0.167em]",
    message: "il nome deve rientrare anche nella viewport minima di 320 px",
  },
  {
    file: "src/components/SiteHeader.jsx",
    pattern: "max-h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain",
    message: "il menu mobile deve restare scorrevole nelle viewport basse",
  },
  {
    file: "src/app/youtube-media/page.jsx",
    pattern: "min-h-[220px]",
    message: "il contenitore YouTube deve avere spazio sufficiente sui telefoni",
  },
  {
    file: "src/components/YouTubeEmbed.jsx",
    pattern: "sm:h-full sm:min-h-0",
    message: "il player deve tornare al rapporto video dai breakpoint tablet",
  },
  {
    file: "src/components/PageElements.jsx",
    pattern: "(max-width: 1023px) 100vw, 50vw",
    message: "l’immagine hero deve seguire il breakpoint reale a due colonne",
  },
  {
    file: "src/app/globals.css",
    pattern: 'url("/assets/fonts/DejaVuSans-subset.woff2")',
    message: "il wordmark deve usare il font WOFF2 alleggerito",
  },
  {
    file: "src/app/globals.css",
    pattern: 'url("/assets/fonts/DejaVuSans-Bold-subset.woff2")',
    message: "il nome deve usare il font WOFF2 bold alleggerito",
  },
];

const problems = requirements
  .filter(({ file, pattern }) => !files[file].includes(pattern))
  .map(({ message }) => message);

if (/\bmin-width\s*:\s*320px\b/.test(files["src/app/globals.css"])) {
  problems.push("il body impone ancora una larghezza minima di 320 px");
}

for (const fontName of [
  "DejaVuSans-subset.woff2",
  "DejaVuSans-Bold-subset.woff2",
]) {
  const font = await stat(path.join(root, "public", "assets", "fonts", fontName));
  if (font.size > 64 * 1024) {
    problems.push(`${fontName} supera il limite concordato di 64 KB`);
  }
}

if (problems.length) {
  console.error("Controllo responsive non superato:");
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log(
  "Responsive verificato: telefono, tablet e iPad protetti dai breakpoint concordati.",
);
