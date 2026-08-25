import { readdir, writeFile } from 'node:fs/promises';
import { extname, basename, join } from 'node:path';

const imageDirectory = new URL('../images/', import.meta.url);
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif']);
const excludedFiles = new Set(['bliss-xp.jpg']);
const files = (await readdir(imageDirectory, { withFileTypes: true }))
  .filter(entry => entry.isFile() && supportedExtensions.has(extname(entry.name).toLowerCase()) && !excludedFiles.has(entry.name))
  .map(entry => entry.name)
  .sort((left, right) => left.localeCompare(right, undefined, { numeric: true, sensitivity: 'base' }));

const manifest = files.map((file, index) => ({
  id: `image-${index + 1}`,
  url: `images/${encodeURIComponent(file)}`,
  caption: basename(file, extname(file)).replace(/[-_]+/g, ' '),
  date: '',
  size: ''
}));

await writeFile(new URL('../images.json', import.meta.url), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Wrote ${manifest.length} images to images.json`);
