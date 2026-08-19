# Nitrogen Junkie (Omar Sherif) — Website

A cinematic, single-page site built around the concept **"Go Below the Surface."**
Plain HTML/CSS/JS — no build step, no framework, nothing to install.

## What changed in this latest pass
- **Rebranded to Nitrogen Junkie.** New logo (favicon + nav bar), site name,
  and page title all updated. The Instagram link across the whole site now
  points to https://www.instagram.com/nitrogen.junkiee/
- **Floating Instagram button** added (bottom-right, all pages) so visitors
  can message you in one tap from anywhere on the site.
- **Audio removed completely.** No sound toggle, no `<audio>` element, no
  audio-related JS or CSS anywhere.
- **Mobile navigation fixed** — a proper hamburger menu opens a full-screen
  link panel on mobile/tablet.
- **Mobile now matches desktop** — the six experience rows were hiding their
  images entirely on mobile; they now show correctly.
- **Gallery flip cards** — every gallery tile flips on hover (desktop) or tap
  (mobile) to reveal a short caption on the back.
- **Basic SEO pass** — improved `<title>`/meta description with real
  keywords, Open Graph + Twitter Card tags, JSON-LD structured data (Person
  schema for Omar/Nitrogen Junkie), `sitemap.xml`, and `robots.txt`.
- Verified zero horizontal overflow and zero console errors at 375, 390, 428,
  768, 1024, 1280, 1440, and 1920px.

## ⚠️ One thing you need to do before this SEO work is fully live
`index.html`, `sitemap.xml`, and `robots.txt` all have a placeholder domain:
`https://YOUR-DOMAIN-HERE.com/`. Once you have your real domain (or your
final Vercel URL), find-and-replace that placeholder in all three files —
otherwise search engines will be pointed at a fake address.

## Deploy it — Vercel in under a minute
This is a fully static site, no build step needed:
1. vercel.com → **Add New → Project → Deploy without Git**, or `npx vercel`
   from inside this folder.
2. Drag the whole folder in (or `vercel deploy` from inside it).
3. Framework preset: **Other**. Build command: none. Output directory: `.`

## File structure
- `index.html` — page shell + SEO meta tags + structured data. Sections are
  empty containers filled in by `script.js` from `content.js`.
- `content.js` — **the only file you should need to edit for words, links, or
  media.** Brand name, Instagram/email, every headline, and every media slot
  lives here.
- `media.js` — turns each `content.js` media entry into a real `<img>` (or a
  placeholder scene if `src` is `null`).
- `script.js` — renders every section and wires up interactions: custom
  cursor, mobile nav menu, floating Instagram button, nav scroll state, the
  depth-gauge indicator, scroll reveals, and the gallery flip.
- `styles.css` — all design tokens live at the top as CSS custom properties.
- `sitemap.xml` / `robots.txt` — basic SEO files (need your real domain — see
  the warning above).
- `assets/img/logo.png` — the Nitrogen Junkie logo used in the nav bar.
- `assets/img/favicon-32.png` / `favicon-512.png` — favicon + Apple touch icon.

## About your other images
You're uploading the rest of your images yourself — nothing about how they're
referenced was changed in this pass, only the new logo/favicon assets were
added.

One thing still worth double-checking: `content.js` references
`dolphins-sataya.jpeg` in three places but `dolphins-sataya.jpg` (no "e") in
the gallery's Dolphins tile — and similarly `pier-gear.jpeg` vs `pier-gear.jpg`
in a couple of spots. Make sure both spellings exist in your `assets/img/`
folder, or pick one and update the others to match.
