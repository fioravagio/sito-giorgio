import { createHash } from "node:crypto";
import { access, mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const ROOT = process.cwd();
const ASSET_ROOT = path.join(ROOT, "public", "assets");
const MANIFEST_PATH = path.join(ROOT, "tests", "image-assets-manifest.json");
const SOURCE_MAP_PATH = path.join(ROOT, "src", "data", "image-assets.js");
const APPLY = process.argv.includes("--apply");
const VERSION = 1;
const MAX_DIMENSION = 2048;
const MAX_FILE_SIZE = 2 * 1024 * 1024;
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const formatBytes = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)} MB`;
const hash = (buffer) => createHash("sha256").update(buffer).digest("hex");

async function exists(filename) {
  try {
    await access(filename);
    return true;
  } catch {
    return false;
  }
}

async function imageFiles() {
  return (await readdir(ASSET_ROOT, { withFileTypes: true }))
    .filter(
      (entry) =>
        entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()),
    )
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, "it"));
}

async function record(filename) {
  const filePath = path.join(ASSET_ROOT, filename);
  const [buffer, fileStats, metadata] = await Promise.all([
    readFile(filePath),
    stat(filePath),
    sharp(filePath).metadata(),
  ]);

  return {
    sha256: hash(buffer),
    bytes: fileStats.size,
    width: metadata.width || null,
    height: metadata.height || null,
  };
}

async function optimize(filename) {
  const filePath = path.join(ASSET_ROOT, filename);
  const extension = path.extname(filename).toLowerCase();
  const source = await readFile(filePath);
  let pipeline = sharp(source, { failOn: "warning" })
    .rotate()
    .resize({
      width: MAX_DIMENSION,
      height: MAX_DIMENSION,
      fit: "inside",
      withoutEnlargement: true,
    });

  if (extension === ".png") {
    pipeline = pipeline.png({
      compressionLevel: 9,
      adaptiveFiltering: true,
      palette: true,
      quality: 92,
      colours: 256,
      effort: 10,
    });
  } else if (extension === ".webp") {
    pipeline = pipeline.webp({ quality: 82, effort: 6 });
  } else {
    pipeline = pipeline.jpeg({ quality: 82, progressive: true, mozjpeg: true });
  }

  const output = await pipeline.toBuffer();
  if (output.length < source.length) {
    await writeFile(filePath, output);
    return { changed: true, before: source.length, after: output.length };
  }

  return { changed: false, before: source.length, after: source.length };
}

const files = await imageFiles();
const changes = [];

if (APPLY) {
  for (const filename of files) {
    const result = await optimize(filename);
    if (result.changed) changes.push({ filename, ...result });
  }
}

const assets = {};
const problems = [];
let totalBytes = 0;

for (const filename of files) {
  try {
    const item = await record(filename);
    assets[filename] = item;
    totalBytes += item.bytes;
    if (!item.width || !item.height) {
      problems.push(`${filename}: dimensioni non leggibili`);
    }
    if (
      item.bytes > MAX_FILE_SIZE ||
      item.width > MAX_DIMENSION ||
      item.height > MAX_DIMENSION
    ) {
      problems.push(
        `${filename}: ${item.width}×${item.height}, ${formatBytes(item.bytes)}`,
      );
    }
  } catch (error) {
    problems.push(`${filename}: ${error.message}`);
  }
}

if (APPLY) {
  await mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
  await mkdir(path.dirname(SOURCE_MAP_PATH), { recursive: true });
  await writeFile(
    MANIFEST_PATH,
    `${JSON.stringify({ version: VERSION, assets }, null, 2)}\n`,
    "utf8",
  );
  await writeFile(
    SOURCE_MAP_PATH,
    `// Generato da scripts/image-assets.mjs. Non modificare manualmente.\nexport const imageAssets = ${JSON.stringify(
      Object.fromEntries(
        Object.entries(assets).map(([filename, item]) => [
          filename,
          { width: item.width, height: item.height },
        ]),
      ),
      null,
      2,
    )};\n`,
    "utf8",
  );
} else if (!(await exists(MANIFEST_PATH))) {
  problems.push("manifest immagini assente; eseguire npm run images:optimize");
} else {
  const manifest = JSON.parse(await readFile(MANIFEST_PATH, "utf8"));
  if (manifest.version !== VERSION) problems.push("versione manifest non aggiornata");
  for (const filename of files) {
    if (manifest.assets?.[filename]?.sha256 !== assets[filename]?.sha256) {
      problems.push(`${filename}: file modificato dopo l’ottimizzazione`);
    }
  }
  for (const filename of Object.keys(manifest.assets || {})) {
    if (!assets[filename]) problems.push(`${filename}: voce obsoleta nel manifest`);
  }
}

if (APPLY) {
  const before = changes.reduce((sum, item) => sum + item.before, 0);
  const after = changes.reduce((sum, item) => sum + item.after, 0);
  console.log(
    `Immagini ottimizzate: ${changes.length}. Riduzione: ${formatBytes(before)} → ${formatBytes(after)}.`,
  );
}

console.log(`Immagini verificate: ${files.length}, peso totale ${formatBytes(totalBytes)}.`);

if (problems.length) {
  console.error("Controllo immagini non superato:");
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log(
  `Controllo immagini superato: massimo ${MAX_DIMENSION}px e ${formatBytes(MAX_FILE_SIZE)} per file.`,
);
