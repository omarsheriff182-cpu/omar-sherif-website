# Omar Sherif — Website

A cinematic, single-page site built around the concept **"Go Below the Surface."**
Plain HTML/CSS/JS — no build step, no framework, nothing to install.

## Real media status
Your uploaded photos are wired in and art-directed into the site (hero,
About, the day-in-the-life stages, all experiences, all three destinations,
the whole Sataya section, the gallery, and two guest moments). Sharks,
wrecks, Introduction Dives, and Diving Courses are still the cinematic
placeholder treatment — send real footage for those whenever you have it and
it'll drop straight in the same way. Nothing was invented.

**No video on the site right now, by design.** The project uses photos only.
The Sataya/dolphin sections (Sataya Dolphin House, Dolphin Boat Trips, and
the Dolphins tile in the gallery) all use one real still —
`assets/img/dolphins-sataya.jpg` — picked from your dolphin footage for the
clearest, best-composed frame with the pod and reef both sharp. There's no
local video file and no video-URL variable to fill in anymore, so the repo
stays small and has nothing that can hit GitHub's upload limits.

## Deploy it — Vercel in under a minute
This is a fully static site, so it needs no build step or config on Vercel:
1. Go to vercel.com → **Add New → Project → Deploy without Git** (or `npx vercel`
   from inside this folder if you have Node installed).
2. Drag this whole folder in (or run `vercel deploy` from inside it).
3. Framework preset: **Other**. Build command: none. Output directory: `.`
4. Deploy — you'll get a live `*.vercel.app` URL immediately, and can attach
   your own domain from the project's Domains tab afterwards.

Netlify, GitHub Pages, or any static host works the same way — just upload
the folder as-is.

## Open it locally
Just open `index.html` in a browser, or run a tiny local server from inside
the folder (`python3 -m http.server 8000`) and visit `localhost:8000`.

## File structure
- `index.html` — page shell only. Every section is an empty container that gets
  filled in by `script.js` from `content.js`. There is almost no copy inside
  this file on purpose.
- `content.js` — **the only file you should need to edit for words, links, or
  media.** Every headline, line of copy, Instagram/email link, and media slot
  lives here in one place.
- `media.js` — turns each `content.js` media entry into either a real
  `<img>` (if a `src` is filled in) or a cinematic placeholder "scene"
  (gradient + light rays + drifting particles) if not. You never need to
  touch this file to swap media. It can also render `<video>` if a media
  entry's `type` is `"video"` and has a `src` — that machinery is still in
  place for later, but nothing on the site currently uses it.
- `script.js` — renders the sections and wires up the interactions: custom
  cursor, nav scroll state, the depth-gauge scroll indicator, the sound
  toggle, and scroll reveals.
- `styles.css` — all design tokens (colors, type, spacing) live at the top of
  the file as CSS custom properties.
- `assets/img/` — every processed photo, already cropped, compressed, and
  web-sized. There's no `assets/video/` folder — the project ships with no
  video files at all.

## Replacing or adding media
Open `content.js`. Every media object looks like this:

```js
media: { type: "image", src: "assets/img/turtle.jpg", poster: null, alt: "…", placeholderId: "intro-underwater" }
```

Drop a new file into `assets/img/`, point `src` at it, and it replaces
whatever was there — including a placeholder scene, which disappears
automatically the moment `src` is set. Keep `alt` accurate — it's used for
screen readers.

## Replacing contact info
Also in `content.js`, under `contact:` — set `instagramUrl` and `emailUrl`.
Both are intentionally left as `#` placeholders; nothing was invented.

## Sound
The sound toggle is fully wired up but silent until you set a real ambience
file on `#ambientAudio` (see the `TODO` comment in `script.js`, `initSound`).
It will never autoplay.

## Notes
- Respects `prefers-reduced-motion`.
- Keyboard-accessible (all interactive elements are real `<a>`/`<button>`
  elements with visible focus states).
- No external JS libraries — kept deliberately light for performance.
- No video files anywhere in the project — photos only, so there's nothing
  large enough to trip GitHub's upload limits.

