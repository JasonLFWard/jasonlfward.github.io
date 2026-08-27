---
mode: agent
description: "Add a new photo collection to the portfolio and regenerate the manifest without breaking the static site layout."
---

# Add a new photo folder

Use this workflow when adding a new album or collection to the portfolio.

1. Create a new folder under `images/` with a clear, URL-safe name.
2. Add the image files to that folder.
3. Regenerate the manifest:

```bash
node scripts/generate-image-manifest.mjs
```

4. Validate that:
   - the new folder appears in `images.json`
   - each image path is relative and URL-safe
   - the generated caption names are readable and not broken by special characters
   - the static site still loads without introducing a build step

5. Keep the existing Windows XP / Win98 / Win2000 design intact and avoid changing the app’s core structure unless the user asks for a redesign.
