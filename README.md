# Pearl & Indigo Website

Rebuilt website for **Pearl & Indigo** (AI portraits studio + website/app digital services),
with every issue from the October 2026 content audit fixed. Built with Vite + React +
TypeScript + Tailwind CSS v4 + React Router — Lovable's native stack, ready to import.

## Pages

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Studio-focused hero, fork-in-the-road Studio/Digital cards, how-it-works, testimonials, FAQ |
| `/ai-portraits-studio` | Studio | **Rewritten** — replaces the interior-design template that was live by mistake |
| `/digital` | Digital | Fixed CTAs (all → `/free-quote`), corrected pricing ($75/$199/$349 hosting) |
| `/the-selfie-secret` | Selfie Secret | Lead magnet page, working form, fixed privacy/terms links |
| `/free-quote` | Quote | **Rebuilt** — real 2-step quote form (was lorem ipsum) |
| `/contact` | Contact | Contact info + working form |
| `/privacy` | Privacy Policy | **New** — real policy (was pointing to example.com) |
| `/terms` | Terms of Service | **New** |

Also: consistent nav + footer on every page, real social links, SEO title/meta per page,
consistent pricing (headshots from $49; web packages $497/$997/$1,997/$2,497).

## Forms → GoHighLevel

All forms post via `src/lib/lead.ts` to the webhook URL in `.env`:

1. Copy `.env.example` to `.env`
2. In GoHighLevel: Automations → Workflows → new workflow → trigger **Inbound Webhook** → copy the webhook URL
3. Paste it as `VITE_LEAD_WEBHOOK_URL` in `.env`
4. Rebuild / redeploy

Without a webhook configured, forms show a success state locally (handy for testing in Lovable).

## Import into Lovable

1. In Lovable: **New Project → Import from GitHub** → select this repository
2. Lovable will install dependencies and start the dev server automatically
3. Set the `VITE_LEAD_WEBHOOK_URL` environment variable in Lovable's project settings
4. Publish from Lovable when ready, then point your domain at it

## Local development

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production build → dist/
```

## Brand

- Deep Indigo `#2E3A67` · Pearl White `#FAF8F5` · Soft Gold `#C9A96E` · Warm Charcoal `#3D3D3D`
- Headings: Playfair Display · Body: Lato
- Buttons: teal `#188bf6`
