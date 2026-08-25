import { execFileSync } from "node:child_process";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import sharp from "sharp";

const projectRoot = resolve(import.meta.dirname, "..");
const packageRoot = join(
  projectRoot,
  "design",
  "logo-personale-definitivo",
  "Giorgio-Fioravanti-Logo-Files",
);
const tempRoot = mkdtempSync(join(tmpdir(), "gf-personal-logo-"));
const fontCache = join(tempRoot, "font-cache");

const folders = {
  source: join(packageRoot, "00-Source-Master"),
  eps: join(packageRoot, "01-For-Print", "EPS"),
  pdf: join(packageRoot, "01-For-Print", "PDF"),
  svg: join(packageRoot, "02-For-Web", "SVG"),
  png: join(packageRoot, "02-For-Web", "PNG"),
  favicons: join(packageRoot, "02-For-Web", "Favicons"),
  preview: join(packageRoot, "03-Preview"),
};

Object.values(folders).forEach((folder) => mkdirSync(folder, { recursive: true }));
mkdirSync(fontCache, { recursive: true });

const palette = {
  ink: "#18181B",
  gold: "#B88A2C",
  muted: "#52525B",
  mutedDark: "#D4D4D8",
  green: "#169B62",
  white: "#FFFFFF",
  flagWhite: "#ECEBE6",
  red: "#CE2B37",
};

const variants = {
  "color-transparent": {
    background: null,
    ring: palette.gold,
    ink: palette.ink,
    muted: palette.muted,
    tricolor: [palette.green, palette.flagWhite, palette.red],
  },
  "color-dark-bg": {
    background: palette.ink,
    ring: palette.gold,
    ink: palette.white,
    muted: palette.mutedDark,
    tricolor: [palette.green, palette.flagWhite, palette.red],
  },
  "black-transparent": {
    background: null,
    ring: palette.ink,
    ink: palette.ink,
    muted: palette.ink,
    tricolor: [palette.ink, palette.ink, palette.ink],
  },
  "white-transparent": {
    background: null,
    ring: palette.white,
    ink: palette.white,
    muted: palette.white,
    tricolor: [palette.white, palette.white, palette.white],
  },
};

const compositions = {
  mark: {
    width: 1000,
    height: 1000,
    pngWidth: 3200,
    pngHeight: 3200,
    mark: { x: 500, y: 500, radii: [440, 425, 410], ringWidth: 7, scale: 1.75 },
  },
  stacked: {
    width: 1000,
    height: 1000,
    pngWidth: 3200,
    pngHeight: 3200,
    mark: { x: 500, y: 335, radii: [260, 250.5, 241], ringWidth: 4.5, scale: 1.15 },
    name: { font: "DejaVu Sans Bold", size: 48, tracking: 9, top: 650, align: "center" },
    flag: { top: 726, height: 3, widthRatio: 0.92, align: "center" },
    subtitle: { font: "DejaVu Sans", size: 22, tracking: 7, top: 766, align: "center" },
  },
  horizontal: {
    width: 1600,
    height: 600,
    pngWidth: 4800,
    pngHeight: 1800,
    mark: { x: 300, y: 300, radii: [270, 260, 250], ringWidth: 4.75, scale: 1.2 },
    textLeft: 650,
    textCenter: 1100,
    name: {
      font: "DejaVu Sans Bold",
      size: 60,
      tracking: 10,
      top: 195,
      align: "right-center",
    },
    flag: { top: 300, height: 3.5, widthRatio: 0.92, align: "right-center" },
    subtitle: {
      font: "DejaVu Sans",
      size: 25,
      tracking: 8,
      top: 345,
      align: "right-center",
    },
  },
};

const gfPaths = [
  "M-42-120H-84C-134-120-164-72-164 0S-134 120-84 120H-28V40H-100",
  "M-42-112H-84C-129-112-156-68-156 0S-129 112-84 112H-36V48H-100",
  "M-42-104H-84C-124-104-148-64-148 0S-124 104-84 104H-44V56H-100",
  "M-42-96H-84C-119-96-140-60-140 0S-119 96-84 96H-52V64H-100",
  "M0 120V-120H118",
  "M8 120V-112H118",
  "M16 120V-104H118",
  "M24 120V-96H118",
  "M32-24H96",
  "M32-16H96",
  "M32-8H96",
  "M32 0H96",
];

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function createPangoOutline({ text, font, size, tracking, key }) {
  const output = join(tempRoot, `${key}.svg`);
  const markup = `<span letter_spacing="${tracking * 1024}">${escapeXml(text)}</span>`;
  execFileSync(
    "pango-view",
    [
      "--no-display",
      "--pixels",
      `--font=${font} ${size}`,
      "--foreground=#18181B",
      "--background=transparent",
      "--margin=0",
      "--markup",
      `--text=${markup}`,
      `--output=${output}`,
    ],
    {
      env: { ...process.env, XDG_CACHE_HOME: fontCache },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );

  const svg = readFileSync(output, "utf8");
  const rootMatch = svg.match(/<svg[^>]*width="([\d.]+)" height="([\d.]+)"[^>]*>([\s\S]*)<\/svg>/);
  if (!rootMatch) throw new Error(`Impossibile leggere il testo vettoriale ${key}`);

  return {
    width: Number(rootMatch[1]),
    height: Number(rootMatch[2]),
    inner: rootMatch[3].trim(),
    raw: svg,
  };
}

const textOutlines = {};
for (const [compositionName, composition] of Object.entries(compositions)) {
  if (!composition.name) continue;
  textOutlines[compositionName] = {
    name: createPangoOutline({
      text: "GIORGIO FIORAVANTI",
      ...composition.name,
      key: `${compositionName}-name`,
    }),
    subtitle: createPangoOutline({
      text: "POLITICA · EVENTI · GRAFICA",
      ...composition.subtitle,
      key: `${compositionName}-subtitle`,
    }),
  };
}

function namespaceOutline(fragment, prefix, color) {
  return fragment.inner
    .replaceAll(/id="([^"]+)"/g, `id="${prefix}-$1"`)
    .replaceAll(/xlink:href="#([^"]+)"/g, `xlink:href="#${prefix}-$1"`)
    .replace(/<g fill="rgb\([^)]+\)" fill-opacity="1">/, `<g fill="${color}">`);
}

function textX(composition, fragment, align) {
  if (align === "left") return composition.textLeft;
  if (align === "right-center") return composition.textCenter - fragment.width / 2;
  return (composition.width - fragment.width) / 2;
}

function markSvg(mark, colors) {
  const circles = mark.radii
    .map(
      (radius) =>
        `<circle cx="${mark.x}" cy="${mark.y}" r="${radius}" fill="none" stroke="${colors.ring}" stroke-width="${mark.ringWidth}"/>`,
    )
    .join("\n  ");
  return `${circles}
  <g transform="translate(${mark.x} ${mark.y}) scale(${mark.scale}) translate(23 0)" fill="none" stroke="${colors.ink}" stroke-width="4" stroke-linecap="square" stroke-linejoin="round">
    ${gfPaths.map((path) => `<path d="${path}"/>`).join("\n    ")}
  </g>`;
}

function flagSvg(composition, nameOutline, colors) {
  const width = Math.min(
    nameOutline.width * composition.flag.widthRatio,
    composition.width - (composition.textLeft ?? 0) - 40,
  );
  const x =
    composition.flag.align === "left"
      ? composition.textLeft
      : composition.flag.align === "right-center"
        ? composition.textCenter - width / 2
        : (composition.width - width) / 2;
  const third = width / 3;
  return `<g>
    <rect x="${x}" y="${composition.flag.top}" width="${third}" height="${composition.flag.height}" fill="${colors.tricolor[0]}"/>
    <rect x="${x + third}" y="${composition.flag.top}" width="${third}" height="${composition.flag.height}" fill="${colors.tricolor[1]}"/>
    <rect x="${x + third * 2}" y="${composition.flag.top}" width="${third}" height="${composition.flag.height}" fill="${colors.tricolor[2]}"/>
  </g>`;
}

function makeSvg(compositionName, variantName) {
  const composition = compositions[compositionName];
  const colors = variants[variantName];
  const background = colors.background
    ? `<rect width="${composition.width}" height="${composition.height}" fill="${colors.background}"/>`
    : "";
  const parts = [background, markSvg(composition.mark, colors)];

  if (composition.name) {
    const outlines = textOutlines[compositionName];
    const nameX = textX(composition, outlines.name, composition.name.align);
    const subtitleX = textX(composition, outlines.subtitle, composition.subtitle.align);
    parts.push(
      `<g transform="translate(${nameX} ${composition.name.top})">${namespaceOutline(
        outlines.name,
        `${compositionName}-${variantName}-name`,
        colors.ink,
      )}</g>`,
      flagSvg(composition, outlines.name, colors),
      `<g transform="translate(${subtitleX} ${composition.subtitle.top})">${namespaceOutline(
        outlines.subtitle,
        `${compositionName}-${variantName}-subtitle`,
        colors.muted,
      )}</g>`,
    );
  }

  const label = compositionName === "mark" ? "marchio master" : `composizione ${compositionName}`;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${composition.width} ${composition.height}" role="img" aria-labelledby="title desc">
  <title id="title">Giorgio Fioravanti — ${label}</title>
  <desc id="desc">Identità personale GF con triplo cerchio e quattro linee uniformi; versione ${variantName}.</desc>
  ${parts.filter(Boolean).join("\n  ")}
</svg>
`;
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  return [0, 2, 4].map((offset) => Number.parseInt(normalized.slice(offset, offset + 2), 16) / 255);
}

function psColor(hex) {
  return `${hexToRgb(hex).map((value) => value.toFixed(6)).join(" ")} setrgbcolor`;
}

function tokenizePath(pathData) {
  return pathData.match(/[A-Za-z]|[-+]?(?:\d*\.\d+|\d+\.?)(?:[Ee][-+]?\d+)?/g) ?? [];
}

function svgPathToPostScript(pathData) {
  const tokens = tokenizePath(pathData);
  const output = [];
  let index = 0;
  let command = null;
  let currentX = 0;
  let currentY = 0;
  let startX = 0;
  let startY = 0;

  const number = () => Number(tokens[index++]);
  const hasNumber = () => index < tokens.length && !/^[A-Za-z]$/.test(tokens[index]);

  while (index < tokens.length) {
    if (/^[A-Za-z]$/.test(tokens[index])) command = tokens[index++];
    if (!command) throw new Error(`Comando SVG mancante in ${pathData}`);

    const relative = command === command.toLowerCase();
    const upper = command.toUpperCase();

    if (upper === "Z") {
      output.push("closepath");
      currentX = startX;
      currentY = startY;
      command = null;
      continue;
    }

    if (upper === "M" || upper === "L") {
      let first = true;
      while (hasNumber()) {
        let x = number();
        let y = number();
        if (relative) {
          x += currentX;
          y += currentY;
        }
        output.push(`${x} ${y} ${upper === "M" && first ? "moveto" : "lineto"}`);
        currentX = x;
        currentY = y;
        if (upper === "M" && first) {
          startX = x;
          startY = y;
        }
        first = false;
        if (index < tokens.length && /^[A-Za-z]$/.test(tokens[index])) break;
      }
      continue;
    }

    if (upper === "H") {
      while (hasNumber()) {
        let x = number();
        if (relative) x += currentX;
        output.push(`${x} ${currentY} lineto`);
        currentX = x;
        if (index < tokens.length && /^[A-Za-z]$/.test(tokens[index])) break;
      }
      continue;
    }

    if (upper === "V") {
      while (hasNumber()) {
        let y = number();
        if (relative) y += currentY;
        output.push(`${currentX} ${y} lineto`);
        currentY = y;
        if (index < tokens.length && /^[A-Za-z]$/.test(tokens[index])) break;
      }
      continue;
    }

    if (upper === "C") {
      while (hasNumber()) {
        let x1 = number();
        let y1 = number();
        let x2 = number();
        let y2 = number();
        let x = number();
        let y = number();
        if (relative) {
          x1 += currentX;
          y1 += currentY;
          x2 += currentX;
          y2 += currentY;
          x += currentX;
          y += currentY;
        }
        output.push(`${x1} ${y1} ${x2} ${y2} ${x} ${y} curveto`);
        currentX = x;
        currentY = y;
        if (index < tokens.length && /^[A-Za-z]$/.test(tokens[index])) break;
      }
      continue;
    }

    if (upper === "S") {
      throw new Error("Il convertitore PostScript non usa curve S per i testi.");
    }

    throw new Error(`Comando SVG non supportato: ${command}`);
  }

  return output.join("\n");
}

function parsePangoOutline(fragment) {
  const glyphs = new Map();
  for (const match of fragment.raw.matchAll(/<g id="(glyph-[^"]+)">([\s\S]*?)<\/g>/g)) {
    const paths = [...match[2].matchAll(/<path d="([^"]+)"\s*\/>/g)].map((path) => path[1]);
    if (paths.length) glyphs.set(match[1], paths);
  }

  const uses = [...fragment.raw.matchAll(/<use xlink:href="#(glyph-[^"]+)" x="([^"]+)" y="([^"]+)"\s*\/>/g)]
    .map((match) => ({ id: match[1], x: Number(match[2]), y: Number(match[3]) }))
    .filter((use) => glyphs.has(use.id));
  return { glyphs, uses };
}

function pangoOutlineToPs(fragment, x, top, canvasHeight, color) {
  const { glyphs, uses } = parsePangoOutline(fragment);
  const output = ["gsave", `${x} ${canvasHeight - top} translate`, "1 -1 scale", psColor(color)];
  for (const use of uses) {
    output.push("gsave", `${use.x} ${use.y} translate`, "newpath");
    for (const pathData of glyphs.get(use.id)) output.push(svgPathToPostScript(pathData));
    output.push("fill", "grestore");
  }
  output.push("grestore");
  return output.join("\n");
}

function gfPathToPs(pathData) {
  const tokens = tokenizePath(pathData);
  const output = [];
  let index = 0;
  let command = null;
  let x = 0;
  let y = 0;
  let previousControlX = 0;
  let previousControlY = 0;
  const number = () => Number(tokens[index++]);
  const hasNumber = () => index < tokens.length && !/^[A-Za-z]$/.test(tokens[index]);

  while (index < tokens.length) {
    if (/^[A-Za-z]$/.test(tokens[index])) command = tokens[index++];
    const upper = command.toUpperCase();
    if (upper === "M") {
      x = number();
      y = number();
      output.push(`${x} ${y} moveto`);
    } else if (upper === "H") {
      while (hasNumber()) {
        x = number();
        output.push(`${x} ${y} lineto`);
        if (index < tokens.length && /^[A-Za-z]$/.test(tokens[index])) break;
      }
    } else if (upper === "V") {
      while (hasNumber()) {
        y = number();
        output.push(`${x} ${y} lineto`);
        if (index < tokens.length && /^[A-Za-z]$/.test(tokens[index])) break;
      }
    } else if (upper === "C") {
      const x1 = number();
      const y1 = number();
      const x2 = number();
      const y2 = number();
      x = number();
      y = number();
      previousControlX = x2;
      previousControlY = y2;
      output.push(`${x1} ${y1} ${x2} ${y2} ${x} ${y} curveto`);
    } else if (upper === "S") {
      const x1 = 2 * x - previousControlX;
      const y1 = 2 * y - previousControlY;
      const x2 = number();
      const y2 = number();
      x = number();
      y = number();
      previousControlX = x2;
      previousControlY = y2;
      output.push(`${x1} ${y1} ${x2} ${y2} ${x} ${y} curveto`);
    } else {
      throw new Error(`Comando GF non supportato: ${command}`);
    }
  }
  return output.join("\n");
}

function markPs(composition, colors) {
  const mark = composition.mark;
  const output = [psColor(colors.ring), `${mark.ringWidth} setlinewidth`];
  for (const radius of mark.radii) {
    output.push(`newpath ${mark.x} ${composition.height - mark.y} ${radius} 0 360 arc stroke`);
  }
  output.push(
    "gsave",
    `${mark.x} ${composition.height - mark.y} translate`,
    `${mark.scale} ${-mark.scale} scale`,
    "23 0 translate",
    psColor(colors.ink),
    "4 setlinewidth",
    "0 setlinecap",
    "1 setlinejoin",
  );
  for (const pathData of gfPaths) {
    output.push("newpath", gfPathToPs(pathData), "stroke");
  }
  output.push("grestore");
  return output.join("\n");
}

function flagPs(composition, nameOutline, colors) {
  const width = Math.min(
    nameOutline.width * composition.flag.widthRatio,
    composition.width - (composition.textLeft ?? 0) - 40,
  );
  const x =
    composition.flag.align === "left"
      ? composition.textLeft
      : composition.flag.align === "right-center"
        ? composition.textCenter - width / 2
        : (composition.width - width) / 2;
  const third = width / 3;
  const y = composition.height - composition.flag.top - composition.flag.height;
  return colors.tricolor
    .map((color, index) => `${psColor(color)} ${x + third * index} ${y} ${third} ${composition.flag.height} rectfill`)
    .join("\n");
}

function makeEps(compositionName, variantName) {
  const composition = compositions[compositionName];
  const colors = variants[variantName];
  const output = [
    "%!PS-Adobe-3.0 EPSF-3.0",
    `%%Title: Giorgio Fioravanti ${compositionName} ${variantName}`,
    `%%BoundingBox: 0 0 ${composition.width} ${composition.height}`,
    `%%HiResBoundingBox: 0 0 ${composition.width} ${composition.height}`,
    "%%LanguageLevel: 2",
    "%%Pages: 1",
    "%%EndComments",
  ];

  if (colors.background) {
    output.push(psColor(colors.background), `0 0 ${composition.width} ${composition.height} rectfill`);
  }
  output.push(markPs(composition, colors));

  if (composition.name) {
    const outlines = textOutlines[compositionName];
    output.push(
      pangoOutlineToPs(
        outlines.name,
        textX(composition, outlines.name, composition.name.align),
        composition.name.top,
        composition.height,
        colors.ink,
      ),
      flagPs(composition, outlines.name, colors),
      pangoOutlineToPs(
        outlines.subtitle,
        textX(composition, outlines.subtitle, composition.subtitle.align),
        composition.subtitle.top,
        composition.height,
        colors.muted,
      ),
    );
  }

  output.push("showpage", "%%EOF", "");
  return output.join("\n");
}

async function renderAssets() {
  const generated = [];
  for (const [compositionName, composition] of Object.entries(compositions)) {
    for (const variantName of Object.keys(variants)) {
      const baseName = `giorgio-fioravanti_${compositionName}_${variantName}`;
      const svgPath = join(folders.svg, `${baseName}.svg`);
      const pngPath = join(folders.png, `${baseName}.png`);
      const epsPath = join(folders.eps, `${baseName}.eps`);
      const pdfPath = join(folders.pdf, `${baseName}.pdf`);
      const svg = makeSvg(compositionName, variantName);

      writeFileSync(svgPath, svg);
      await sharp(Buffer.from(svg), { density: 300 })
        .resize(composition.pngWidth, composition.pngHeight, { fit: "fill" })
        .png({ compressionLevel: 9, palette: false })
        .toFile(pngPath);

      writeFileSync(epsPath, makeEps(compositionName, variantName));
      execFileSync(
        "gs",
        [
          "-q",
          "-dBATCH",
          "-dNOPAUSE",
          "-dEPSCrop",
          "-sDEVICE=pdfwrite",
          "-dCompatibilityLevel=1.4",
          `-sOutputFile=${pdfPath}`,
          epsPath,
        ],
        { stdio: ["ignore", "pipe", "pipe"] },
      );
      generated.push(svgPath, pngPath, epsPath, pdfPath);
    }
  }
  return generated;
}

async function renderFavicons() {
  const faviconSvg = makeSvg("mark", "color-dark-bg");
  const faviconSvgPath = join(folders.favicons, "favicon.svg");
  writeFileSync(faviconSvgPath, faviconSvg);

  const sizes = [16, 32, 48, 180, 192, 196, 512];
  for (const size of sizes) {
    const filename =
      size === 180
        ? "apple-touch-icon.png"
        : size === 192 || size === 512
          ? `android-chrome-${size}x${size}.png`
          : `favicon-${size}x${size}.png`;
    await sharp(Buffer.from(faviconSvg), { density: 300 })
      .resize(size, size, { fit: "fill" })
      .png({ compressionLevel: 9 })
      .toFile(join(folders.favicons, filename));
  }

  copyFileSync(join(folders.favicons, "favicon-32x32.png"), join(folders.favicons, "giorgio-fioravanti_favicon-browser_32x32.png"));
  copyFileSync(join(folders.favicons, "apple-touch-icon.png"), join(folders.favicons, "giorgio-fioravanti_favicon-iphone_180x180.png"));
  copyFileSync(join(folders.favicons, "favicon-196x196.png"), join(folders.favicons, "giorgio-fioravanti_favicon-android_196x196.png"));

  execFileSync(
    "magick",
    [
      join(folders.favicons, "favicon-16x16.png"),
      join(folders.favicons, "favicon-32x32.png"),
      join(folders.favicons, "favicon-48x48.png"),
      join(folders.favicons, "favicon.ico"),
    ],
    { stdio: ["ignore", "pipe", "pipe"] },
  );
}

async function renderPreview() {
  const mark = await sharp(join(folders.png, "giorgio-fioravanti_mark_color-transparent.png"))
    .resize(600, 600, { fit: "contain" })
    .png()
    .toBuffer();
  const stacked = await sharp(join(folders.png, "giorgio-fioravanti_stacked_color-transparent.png"))
    .resize(600, 600, { fit: "contain" })
    .png()
    .toBuffer();
  const horizontal = await sharp(join(folders.png, "giorgio-fioravanti_horizontal_color-dark-bg.png"))
    .resize(2100, 788, { fit: "contain" })
    .png()
    .toBuffer();
  const labels = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="2400" height="1600">
    <style>.k{font:700 26px 'DejaVu Sans',sans-serif;letter-spacing:5px;fill:#52525B}.t{font:700 42px 'DejaVu Sans',sans-serif;letter-spacing:4px;fill:#18181B}</style>
    <text x="120" y="78" class="t">SISTEMA DI IDENTITÀ GIORGIO FIORAVANTI</text>
    <text x="310" y="735" text-anchor="middle" class="k">MASTER</text>
    <text x="1290" y="735" text-anchor="middle" class="k">VERTICALE</text>
    <text x="120" y="825" class="k">ORIZZONTALE · APPLICAZIONE PRINCIPALE SITO</text>
  </svg>`);

  await sharp({
    create: { width: 2400, height: 1600, channels: 4, background: "#F5F2EB" },
  })
    .composite([
      { input: labels, top: 0, left: 0 },
      { input: mark, top: 110, left: 90 },
      { input: stacked, top: 110, left: 990 },
      { input: horizontal, top: 840, left: 150 },
    ])
    .png({ compressionLevel: 9 })
    .toFile(join(folders.preview, "giorgio-fioravanti_brand-system-preview.png"));
}

function writeDocumentation() {
  const sourceFiles = {
    "giorgio-fioravanti_mark_master.svg": join(folders.svg, "giorgio-fioravanti_mark_color-transparent.svg"),
    "giorgio-fioravanti_stacked_master.svg": join(folders.svg, "giorgio-fioravanti_stacked_color-transparent.svg"),
    "giorgio-fioravanti_horizontal_master.svg": join(folders.svg, "giorgio-fioravanti_horizontal_color-transparent.svg"),
  };
  for (const [filename, source] of Object.entries(sourceFiles)) {
    copyFileSync(source, join(folders.source, filename));
  }

  const fontSources = [
    "/Users/giorgio.fioravanti/Library/Fonts/DejaVuSans-Bold.ttf",
    "/Users/giorgio.fioravanti/Library/Fonts/DejaVuSans.ttf",
  ];
  const fontsFolder = join(folders.source, "Fonts");
  mkdirSync(fontsFolder, { recursive: true });
  for (const fontSource of fontSources) {
    if (existsSync(fontSource)) copyFileSync(fontSource, join(fontsFolder, fontSource.split("/").at(-1)));
  }

  writeFileSync(
    join(folders.source, "palette.json"),
    `${JSON.stringify(
      {
        gold: palette.gold,
        ink: palette.ink,
        muted: palette.muted,
        tricolor: [palette.green, palette.flagWhite, palette.red],
        typeface: { name: "DejaVu Sans", wordmark: "Bold 700", subtitle: "Book 400" },
      },
      null,
      2,
    )}\n`,
  );

  writeFileSync(
    join(packageRoot, "README.txt"),
    `GIORGIO FIORAVANTI — SISTEMA DI IDENTITÀ PERSONALE

Composizioni
- mark: MASTER con solo triplo cerchio e monogramma GF; nessun nome, bandiera o sottotesto.
- stacked: marchio, nome, barra tricolore e sottotesto in composizione verticale.
- horizontal: marchio grande a sinistra; nome, barra tricolore e sottotesto a destra. È la composizione principale del sito.

Varianti per ogni composizione
- color-transparent: uso preferenziale su fondo chiaro.
- color-dark-bg: versione completa su fondo antracite.
- black-transparent: stampa monocromatica nera.
- white-transparent: applicazione negativa su fondo scuro o fotografico.

Formati
- SVG: vettoriale per web e applicazioni digitali.
- PNG: alta risoluzione sRGB, con trasparenza reale quando prevista.
- PDF ed EPS: vettoriali per stampa. Nome e sottotesto sono convertiti in tracciati.

Misure PNG
- mark: 3200 × 3200 px.
- stacked: 3200 × 3200 px.
- horizontal: 4800 × 1800 px.

Regole fondamentali
- Non modificare i tre cerchi, il numero dei quattro binari o l'apertura centrale della F.
- Non deformare né ruotare il marchio.
- Usare la versione MASTER per favicon, avatar e applicazioni molto compatte.
- Usare la versione orizzontale per testata del sito, firme e intestazioni.

Colori
- Oro: ${palette.gold}
- Antracite: ${palette.ink}
- Verde: ${palette.green}
- Bianco bandiera: ${palette.flagWhite}
- Rosso: ${palette.red}

Font
- DejaVu Sans Bold per il nome.
- DejaVu Sans per il sottotesto.
- I font sono inclusi esclusivamente per mantenere coerenza nelle future applicazioni. Informazioni licenza: https://dejavu-fonts.github.io/License.html
`,
  );
}

async function main() {
  const generated = await renderAssets();
  await renderFavicons();
  writeDocumentation();
  await renderPreview();
  console.log(`Pacchetto generato: ${packageRoot}`);
  console.log(`Asset principali: ${generated.length}`);
}

await main();
