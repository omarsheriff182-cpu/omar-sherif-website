/**
 * ============================================================
 * MEDIA RENDERING LAYER
 * ============================================================
 * Every placeholder is assigned a "scene" — a lightweight,
 * CSS-driven treatment (gradient + light + grain + drift) that
 * reads as cinematic underwater atmosphere rather than a broken
 * image icon. When `src` is filled in on a content.js media
 * object, this layer renders the real <img>/<video> instead and
 * the scene treatment is skipped automatically — no other code
 * needs to change.
 * ============================================================
 */

// Maps each placeholderId to a visual "scene" token (see styles.css
// for the .scene-* definitions) and a drift speed for subtle motion.
const SCENE_MAP = {
  "hero": "scene-open-blue",
  "portrait": "scene-topside",
  "intro-underwater": "scene-open-blue",
  "stage-arrive": "scene-topside",
  "stage-descend": "scene-descend",
  "stage-explore": "scene-reef",
  "stage-connect": "scene-reef",
  "stage-surface": "scene-topside",
  "exp-diving": "scene-open-blue",
  "exp-guiding": "scene-reef",
  "exp-intro": "scene-shallow",
  "exp-courses": "scene-shallow",
  "exp-boat": "scene-topside",
  "exp-dolphin": "scene-dolphin",
  "dest-elquseir": "scene-reef",
  "dest-portghalib": "scene-topside",
  "dest-marsaalam": "scene-sun",
  "special-elphinstone": "scene-shark",
  "special-salem": "scene-wreck",
  "sataya-boat": "scene-topside",
  "sataya-dolphins-boat": "scene-dolphin",
  "sataya-snorkel": "scene-shallow",
  "sataya-underwater": "scene-dolphin",
  "sataya-sunset": "scene-sun",
  "sataya-evening": "scene-sun",
  "gallery-1": "scene-open-blue",
  "gallery-2": "scene-reef",
  "gallery-3": "scene-dolphin",
  "gallery-4": "scene-topside",
  "gallery-5": "scene-shark",
  "gallery-6": "scene-wreck",
  "gallery-7": "scene-topside",
  "gallery-8": "scene-sun",
  "guest-1": "scene-topside",
  "guest-2": "scene-reef",
  "guest-3": "scene-sun",
};

/**
 * Builds the DOM for a media object from content.js.
 * @param {object} m - a media entry ({type, src, poster, alt, placeholderId})
 * @param {object} [opts]
 * @param {boolean} [opts.eager] - skip lazy-loading (use for hero only)
 * @returns {HTMLElement}
 */
function buildMedia(m, opts = {}) {
  const wrap = document.createElement("div");
  wrap.className = "media";

  if (m.src) {
    // Real asset path — replaces the placeholder automatically.
    if (m.type === "video") {
      const video = document.createElement("video");
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = opts.eager ? "auto" : "metadata";
      if (m.poster) video.poster = m.poster;
      video.setAttribute("aria-label", m.alt || "");
      // Autoplay is handled by the shared viewport observer in script.js
      // (initVideoAutoplay) so clips only play while actually visible —
      // it plays immediately on load for eager (hero) media.
      video.classList.add("js-observe-video");
      const source = document.createElement("source");
      source.src = m.src;
      source.type = "video/mp4";
      video.appendChild(source);
      wrap.appendChild(video);
      wrap.dataset.videoEl = "true";
      if (opts.eager) {
        video.autoplay = true;
      }
    } else {
      const img = document.createElement("img");
      img.src = m.src;
      img.alt = m.alt || "";
      img.loading = opts.eager ? "eager" : "lazy";
      if (m.focus) img.style.objectPosition = m.focus;
      wrap.appendChild(img);
    }
    return wrap;
  }

  // Placeholder scene treatment.
  const scene = SCENE_MAP[m.placeholderId] || "scene-open-blue";
  wrap.classList.add("media--placeholder", scene);
  wrap.setAttribute("role", "img");
  wrap.setAttribute("aria-label", m.alt || "");

  const rays = document.createElement("span");
  rays.className = "media__rays";
  wrap.appendChild(rays);

  const grain = document.createElement("span");
  grain.className = "media__grain";
  wrap.appendChild(grain);

  const drift = document.createElement("span");
  drift.className = "media__drift";
  wrap.appendChild(drift);

  return wrap;
}

/** Fills an existing container element with built media (helper for markup-first sections). */
function mountMedia(container, m, opts) {
  if (!container) return;
  container.appendChild(buildMedia(m, opts));
}
