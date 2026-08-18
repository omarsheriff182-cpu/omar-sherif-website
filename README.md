# Omar Sherif — Website

A cinematic, single-page site built around the concept **"Go Below the Surface."**
Plain HTML/CSS/JS — no build step, no framework, nothing to install.

## What changed in this pass
- **Audio removed completely.** No sound toggle, no `<audio>` element, no
  audio-related JS or CSS anywhere in the project.
- **Mobile navigation fixed.** A proper hamburger menu now opens a full-screen
  link panel on mobile/tablet — the nav links no longer just disappear below
  860px.
- **Mobile now matches desktop.** The six experience rows (Diving, Guiding,
  Introduction Dives, Courses, Boat Trips, Dolphin Trip) were hiding their
  images entirely on mobile — they now show correctly, stacked under the text.
- **Gallery flip cards.** Every gallery tile now flips on hover (desktop) or
  tap (mobile/touch) to reveal a short caption on the back. Smooth 3D flip,
  no overflow, fully responsive.
- Verified zero horizontal overflow and zero console errors at 375, 390, 428,
  768, 834, 1024, 1280, 1440, and 1920px.

## Deploy it — Vercel in under a minute
This is a fully static site, so it needs no build step or config on Vercel:
1. Go to vercel.com → **Add New → Project → Deploy without Git** (or `npx vercel`
   from inside this folder if you have Node installed).
2. Drag this whole folder in (or run `vercel deploy` from inside it).
3. Framework preset: **Other**. Build command: none. Output directory: `.`

## File structure
- `index.html` — page shell only. Every section is an empty container filled
  in by `script.js` from `content.js`.
- `content.js` — **the only file you should need to edit for words, links, or
  media.** Every headline, line of copy, Instagram/email link, and media slot
  lives here in one place. Gallery items now also have a `description` field
  used on the flip-card back.
- `media.js` — turns each `content.js` media entry into a real `<img>` (or a
  cinematic placeholder if `src` is left `null`).
- `script.js` — renders every section and wires up interactions: custom
  cursor, mobile nav menu, nav scroll state, the depth-gauge scroll indicator,
  scroll reveals, and the gallery flip (hover on desktop, tap on touch).
- `styles.css` — all design tokens live at the top as CSS custom properties.

## About your images
You mentioned you'll upload all images yourself — the code was **not**
changed to reference any new/different images, only restructured so every
image already in `content.js` displays correctly on both desktop and mobile.

One thing worth double-checking on your end: `content.js` references
`dolphins-sataya.jpeg` in three places (Dolphin Trip, Sataya's main photo,
and the Sataya sequence) but `dolphins-sataya.jpg` (no "e") in the gallery's
Dolphins tile. Make sure both filenames exist in your `assets/img/` folder,
or pick one spelling and update the other three references to match — otherwise
one of those four spots will show a broken image.
