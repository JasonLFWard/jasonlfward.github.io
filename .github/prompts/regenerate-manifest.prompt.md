---
mode: agent
description: "Regenerate the image manifest for this static portfolio after adding or removing photo files."
---

# Regenerate image manifest

Run this from the repository root:

```bash
node scripts/generate-image-manifest.mjs
```

Then verify that:
- `images.json` reflects the current folders and files under `images/`
- generated URLs remain relative and URL-safe
- no hand-edited manifest changes are needed beyond the generator output
