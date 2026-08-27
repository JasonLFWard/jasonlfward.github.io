---
applyTo:
  - "index.html"
  - "images.json"
  - "scripts/**"
  - "images/**"
---

# Portfolio site guidance

Keep this repo as a lightweight static site with no build step unless the user explicitly asks for one.

- Preserve the Windows XP / Win98 / Win2000 desktop aesthetic and interaction patterns.
- Prefer small, targeted edits over large rewrites.
- Treat `index.html` as the primary app entry point and keep the page behavior compatible with the existing desktop UI.
- Treat `images.json` as generated output. Regenerate it after adding, removing, or renaming files in `images/`.
- Keep asset paths relative to the repo root and preserve URL-safe encoding for folder and file names.
- When editing image-related features, keep the local fallback path working even if Firebase is unavailable.
- Prefer simple client-side logic and avoid introducing frameworks or server dependencies without explicit approval.
- Validate that the site still loads cleanly and that manifest output reflects the real files in `images/`.
