import { readdir, writeFile } from 'node:fs/promises';
import { extname, basename } from 'node:path';

// Keep this script filesystem-only so the browser can consume one small JSON
// file instead of trying to inspect GitHub folders at runtime.
const imageDirectory = new URL('../images/', import.meta.url);
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif']);
const excludedDirectories = new Set(['backgrounds']);
const entries = await readdir(imageDirectory, { withFileTypes: true });
const folders = entries
  .filter(entry => entry.isDirectory() && !excludedDirectories.has(entry.name))
  .sort((left, right) => left.name.localeCompare(right.name, undefined, { numeric: true, sensitivity: 'base' }));

// Folder names and file names are URL-encoded because photo folders contain
// spaces and the generated paths are used directly by the browser.
const manifest = [];
for (const folder of folders) {
  const files = (await readdir(new URL(`${encodeURIComponent(folder.name)}/`, imageDirectory), { withFileTypes: true }))
    .filter(entry => entry.isFile() && supportedExtensions.has(extname(entry.name).toLowerCase()))
    .map(entry => entry.name)
    .sort((left, right) => left.localeCompare(right, undefined, { numeric: true, sensitivity: 'base' }));

  manifest.push({
    id: folder.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    title: folder.name,
    photos: files.map((file, index) => ({
      id: `${folder.name}-${index + 1}`,
      url: `images/${encodeURIComponent(folder.name)}/${encodeURIComponent(file)}`,
      caption: basename(file, extname(file)).replace(/[-_]+/g, ' '),
      date: '',
      size: ''
    }))
  });
}

await writeFile(new URL('../images.json', import.meta.url), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Wrote ${manifest.reduce((total, folder) => total + folder.photos.length, 0)} images in ${manifest.length} folders to images.json`);
