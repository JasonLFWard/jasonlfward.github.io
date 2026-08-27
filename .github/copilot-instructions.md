# Copilot instructions for this repository

This repository is a static photography portfolio built as a single-page browser app with no build step. Keep changes lightweight and compatible with the existing Windows XP-style experience.

## Project structure
- `index.html` is the primary app entry point.
- `images.json` is the generated image manifest consumed by the site.
- `images/` contains the actual photo folders and assets.
- `scripts/generate-image-manifest.mjs` emits the manifest from the folders under `images/`.
- `readme.txt` contains project context and usage notes.

## Working conventions
- Preserve the current XP/Win98/Win2000 visual style and interaction patterns unless the user explicitly requests a redesign.
- Prefer small, targeted edits over broad rewrites.
- Keep the app static and browser-based; do not introduce a build system or framework unless explicitly requested.
- When adding or removing image files, regenerate `images.json` with:
  - `node scripts/generate-image-manifest.mjs`
- Do not hand-edit the generated manifest unless there is a clear, intentional reason.
- Keep relative asset paths working from the repository root and preserve folder names with URL-safe encoding.

## Content and data
- The site loads images from the `images/` directory and the `images.json` manifest.
- Backgrounds and other non-gallery assets should remain in `images/backgrounds/` when appropriate.
- Favor simple, reliable client-side logic and avoid introducing server-side requirements.

## Quality bar
- Validate changes by checking the site still loads cleanly in a browser and that any manifest updates reflect the actual files in `images/`.
- If Firebase-backed features are touched, keep a safe fallback path for local/offline operation.
- Brief, clear explanations are preferred over verbose implementation notes.
