# Tours with Anaka

Website for Anaka's private driver tours in Georgia. All buttons open WhatsApp +995 571 001 701.

| To change... | Edit this file |
|---|---|
| Tours, prices, descriptions, WhatsApp number | `src/data/toursData.ts` |
| Your photos (use the exact file names) | `src/photos/` (see README.txt in that folder) |
| Texts of each section | `src/components/` |

Build: `npm install` then `npm run build` (output folder `dist`).
Cloudflare: build command `npm run build`, deploy command `npx wrangler deploy`, variable `NODE_VERSION` = `22`.
The Worker name inside `wrangler.jsonc` must match your Worker name in Cloudflare.
