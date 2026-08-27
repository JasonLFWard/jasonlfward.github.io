---
mode: agent
description: "Validate the photography portfolio is consistent after image or layout updates."
---

# Portfolio validation checklist

Use this after editing the site, adding photo folders, or changing the manifest.

1. Regenerate the photo manifest:

```bash
node scripts/generate-image-manifest.mjs
```

2. Check that `images.json` matches the folders under `images/` and that the generator did not create broken paths.

3. Confirm that the site still works as a static page and that the XP-style layout remains intact.

4. If Firebase-related code changed, verify the app still falls back cleanly when Firebase config is unavailable.

5. Keep changes lightweight and avoid introducing build tooling or server dependencies unless explicitly requested.
