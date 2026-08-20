(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  /* ============================================================
     RENDER: NAV
     ============================================================ */
  function renderNav() {
    const links = $("navLinks");
    CONTENT.nav.links.forEach((l) => {
      const a = el("a", "", l.label);
      a.href = l.href;
      links.appendChild(a);
    });
  }

  /* ============================================================
     RENDER: HERO
     ============================================================ */
  function renderHero() {
    $("heroEyebrow").textContent = CONTENT.hero.eyebrow;
    $("heroTitle").textContent = CONTENT.hero.title;
    $("heroSubtitle").textContent = CONTENT.hero.subtitle;
    $("heroDepthLabel").textContent = CONTENT.hero.depthLabel;

    mountMedia($("heroMedia"), CONTENT.hero.media, { eager: true });

    const ctas = $("heroCtas");
    const primary = el("a", "btn btn--primary", CONTENT.hero.ctaPrimary.label);
    primary.href = CONTENT.hero.ctaPrimary.href;
    const secondary = el("a", "btn btn--ghost", CONTENT.hero.ctaSecondary.label);
    secondary.href = CONTENT.hero.ctaSecondary.href;
    ctas.append(primary, secondary);
  }

  /* ============================================================
     RENDER: INTRO
     ============================================================ */
  function renderIntro() {
    $("introEyebrow").textContent = CONTENT.intro.eyebrow;
    const lines = $("introLines");
    CONTENT.intro.lines.forEach((line, i) => {
      const p = el("p", i === 0 ? "intro__lead" : "body-lg", line);
      p.style.marginTop = i === 0 ? "0" : "0.9rem";
      lines.appendChild(p);
    });
    mountMedia($("introPortrait"), CONTENT.intro.portrait);
    mountMedia($("introUnderwater"), CONTENT.intro.underwater);
  }

  /* ============================================================
     RENDER: JOURNEY
     ============================================================ */
  function renderJourney() {
    $("journeyEyebrow").textContent = CONTENT.journey.eyebrow;
    $("journeyTitle").textContent = CONTENT.journey.title;
    const list = $("journeyList");
    CONTENT.journey.stages.forEach((stage, i) => {
      const row = el("div", "journey__stage reveal");
      const copy = el("div");
      const index = el("span", "journey__stage-index", `0${i + 1} — Stage`);
      const title = el("h3", "journey__stage-title", stage.title);
      const p = el("p", "journey__stage-copy", stage.copy);
      copy.append(index, title, p);
      const mediaWrap = el("div", "journey__stage-media");
      mountMedia(mediaWrap, stage.media);
      row.append(copy, mediaWrap);
      list.appendChild(row);
    });
  }

  /* ============================================================
     RENDER: EXPERIENCES
     ============================================================ */
  function renderExperiences() {
    $("experiencesEyebrow").textContent = CONTENT.experiences.eyebrow;
    $("experiencesTitle").textContent = CONTENT.experiences.title;
    const list = $("experiencesList");
    CONTENT.experiences.items.forEach((item, i) => {
      const row = el("a", "exp-row reveal");
      row.href = "#contact";
      row.dataset.cursor = "EXPLORE";

      const mediaWrap = el("div", "exp-row__media");
      mountMedia(mediaWrap, item.media);

      const index = el("span", "exp-row__index", `0${i + 1}`);
      const textWrap = el("div", "exp-row__text");
      const title = el("h3", "exp-row__title", item.title);
      const copy = el("p", "exp-row__copy", item.copy);
      textWrap.append(title, copy);
      const arrow = el("span", "exp-row__arrow", "View →");

      row.append(mediaWrap, index, textWrap, arrow);
      list.appendChild(row);
    });
  }

  /* ============================================================
     RENDER: DESTINATIONS
     ============================================================ */
  function renderDestinations() {
    $("destinationsEyebrow").textContent = CONTENT.destinations.eyebrow;
    $("destinationsTitle").textContent = CONTENT.destinations.title;
    const grid = $("destinationsGrid");
    CONTENT.destinations.items.forEach((d) => {
      const card = el("div", "dest-card reveal");
      card.tabIndex = 0;
      mountMedia(card, d.media);
      const scrim = el("div", "dest-card__scrim");
      const content = el("div", "dest-card__content");
      content.append(
        el("h3", "dest-card__name", d.name),
        el("p", "dest-card__copy", d.copy)
      );
      card.append(scrim, content);
      grid.appendChild(card);
    });
  }

  /* ============================================================
     RENDER: SPECIAL EXPERIENCES
     ============================================================ */
  function renderSpecial() {
    $("specialEyebrow").textContent = CONTENT.special.eyebrow;
    $("specialTitle").textContent = CONTENT.special.title;
    const list = $("specialList");

    CONTENT.special.items.forEach((item) => {
      const section = el("div", "special-item");
      section.id = item.id;

      const mediaWrap = el("div", "special-item__media");
      mountMedia(mediaWrap, item.media, { eager: !!item.media.src });

      const scrim = el("div", "special-item__scrim");

      const content = el("div", "special-item__content reveal");
      content.append(
        el("span", "special-item__place", item.place),
        el("span", "special-item__kicker", item.kicker),
        el("h3", "special-item__headline", item.headline),
        el("p", "body-lg special-item__copy", item.copy)
      );

      if (item.facts) {
        const facts = el("div", "sataya__facts");
        item.facts.forEach((f) => facts.appendChild(el("span", "sataya__fact", f)));
        content.appendChild(facts);
      }

      section.append(mediaWrap, scrim, content);
      list.appendChild(section);

      if (item.sequence) {
        const seqWrap = el("div", "sataya__sequence");
        item.sequence.forEach((m) => {
          const frame = el("div", "sataya__frame reveal");
          mountMedia(frame, m);
          seqWrap.appendChild(frame);
        });
        list.appendChild(seqWrap);
      }
    });
  }

  /* ============================================================
     RENDER: GALLERY
     ============================================================ */
  function renderGallery() {
    $("galleryEyebrow").textContent = CONTENT.gallery.eyebrow;
    $("galleryTitle").textContent = CONTENT.gallery.title;
    const grid = $("galleryGrid");
    CONTENT.gallery.items.forEach((g) => {
      const item = el("div", `gallery__item gallery__item--${g.size} reveal`);
      item.tabIndex = 0;
      item.dataset.cursor = "VIEW";
      item.setAttribute("role", "button");
      item.setAttribute("aria-label", `View photo: ${g.description || g.category}`);

      const flip = el("div", "gallery__flip");

      const front = el("div", "gallery__flip-face gallery__flip-front");
      mountMedia(front, g.media);
      front.appendChild(el("span", "gallery__tag", g.category));

      const back = el("div", "gallery__flip-face gallery__flip-back");
      back.appendChild(el("p", "gallery__desc", g.description || g.category));

      flip.append(front, back);
      item.appendChild(flip);

      // Every photo opens full-size in the lightbox on click or tap.
      if (g.media.src) {
        const openThis = () => openLightbox(g.media.src, g.media.alt, g.description || g.category);
        item.addEventListener("click", openThis);
        item.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openThis();
          }
        });
      }

      grid.appendChild(item);
    });
  }

  /* ============================================================
     RENDER: JOURNAL
     ============================================================ */
  function renderJournal() {
    $("journalEyebrow").textContent = CONTENT.journal.eyebrow;
    $("journalTitle").textContent = CONTENT.journal.title;
    const grid = $("journalGrid");
    CONTENT.journal.posts.forEach((post) => {
      const card = el("article", "journal-card reveal");
      const mediaWrap = el("div", "journal-card__media");
      mountMedia(mediaWrap, post.media);
      const body = el("div", "journal-card__body");
      body.append(
        el("span", "journal-card__category", post.category),
        el("h3", "journal-card__title", post.title),
        el("p", "journal-card__excerpt", post.excerpt)
      );
      card.append(mediaWrap, body);
      grid.appendChild(card);
    });
  }

  /* ============================================================
     RENDER: TESTIMONIALS
     ============================================================ */
  function renderTestimonials() {
    $("testimonialsEyebrow").textContent = CONTENT.testimonials.eyebrow;
    $("testimonialsTitle").textContent = CONTENT.testimonials.title;
    const grid = $("testimonialsGrid");
    CONTENT.testimonials.items.forEach((t) => {
      const card = el("div", "testimonial-card reveal");
      const photo = el("div", "testimonial-card__photo");
      mountMedia(photo, t.photo);
      const emoji = el("p", "testimonial-card__emoji", t.emoji || "");
      card.append(photo, emoji);
      grid.appendChild(card);
    });
  }

  /* ============================================================
     RENDER: CONNECTION
     ============================================================ */
  function renderConnection() {
    $("connectionTitle").textContent = CONTENT.connection.title;
    const lines = $("connectionLines");
    CONTENT.connection.lines.forEach((l) => lines.appendChild(el("span", "", l)));
  }

  /* ============================================================
     RENDER: FINAL CTA
     ============================================================ */
  function renderFinalCta() {
    $("finalEyebrow").textContent = CONTENT.finalCta.eyebrow;
    $("finalTitle").textContent = CONTENT.finalCta.title;
    $("finalCopy").textContent = CONTENT.finalCta.copy;
    const ctas = $("finalCtas");
    const primary = el("a", "btn btn--primary", CONTENT.finalCta.ctaPrimary.label);
    primary.href = CONTENT.finalCta.ctaPrimary.href.startsWith("#") ? CONTENT.finalCta.ctaPrimary.href : CONTENT.contact.emailUrl;
    const secondary = el("a", "btn btn--ghost", CONTENT.finalCta.ctaSecondary.label);
    secondary.href = CONTENT.contact.instagramUrl;
    secondary.target = "_blank";
    secondary.rel = "noopener";
    ctas.append(primary, secondary);
  }

  /* ============================================================
     RENDER: FOOTER
     ============================================================ */
  function renderFooter() {
    $("footerMark").textContent = CONTENT.brand.name;
    $("footerTagline").textContent = CONTENT.footer.tagline;
    $("footerLocation").textContent = CONTENT.brand.location;
    const links = $("footerLinks");
    const insta = el("a", "", CONTENT.contact.instagramLabel);
    insta.href = CONTENT.contact.instagramUrl;
    insta.target = "_blank";
    insta.rel = "noopener";
    const instaSecondary = el("a", "", CONTENT.contact.instagramLabelSecondary);
    instaSecondary.href = CONTENT.contact.instagramUrlSecondary;
    instaSecondary.target = "_blank";
    instaSecondary.rel = "noopener";
    const mail = el("a", "", CONTENT.contact.emailLabel);
    mail.href = CONTENT.contact.emailUrl;
    links.append(insta, instaSecondary, mail);
    $("footerCopyright").textContent = `© ${new Date().getFullYear()} ${CONTENT.brand.name}. All rights reserved.`;
  }

  function renderInstaFloat() {
    const btn = $("instaFloat");
    if (!btn) return;
    btn.href = CONTENT.contact.instagramUrl;
  }

  /* ============================================================
     INTERACTION: NAV SCROLL STATE
     ============================================================ */
  function initNavScroll() {
    const nav = $("nav");
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        nav.classList.toggle("is-scrolled", window.scrollY > 40);
        ticking = false;
      });
    });
  }

  /* ============================================================
     INTERACTION: MOBILE NAV MENU
     ============================================================ */
  function initMobileNav() {
    const toggle = $("navToggle");
    const links = $("navLinks");
    if (!toggle || !links) return;

    function closeMenu() {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
    function openMenu() {
      links.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    }

    toggle.addEventListener("click", () => {
      const isOpen = links.classList.contains("is-open");
      if (isOpen) closeMenu();
      else openMenu();
    });

    // Closing on link tap lets the anchor jump happen underneath cleanly.
    links.addEventListener("click", (e) => {
      if (e.target.closest("a")) closeMenu();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ============================================================
     INTERACTION: CUSTOM CURSOR
     ============================================================ */
  function initCursor() {
    const cursor = $("cursor");
    const label = $("cursorLabel");
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    window.addEventListener("mousemove", (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    });

    const targets = [
      { selector: ".exp-row, .dest-card, .gallery__item, [data-cursor]", label: (n) => n.dataset.cursor || "VIEW", cta: false },
      { selector: ".btn, .sataya__frame", label: () => "EXPLORE", cta: true },
    ];

    document.addEventListener("mouseover", (e) => {
      const hit = e.target.closest(".exp-row, .dest-card, .gallery__item, .btn, .sataya__frame, [data-cursor]");
      if (!hit) return;
      const isCta = hit.matches(".btn, .sataya__frame");
      label.textContent = hit.dataset.cursor || (isCta ? "EXPLORE" : "VIEW");
      cursor.classList.add("is-active");
      cursor.classList.toggle("is-cta", isCta);
    });
    document.addEventListener("mouseout", (e) => {
      const hit = e.target.closest(".exp-row, .dest-card, .gallery__item, .btn, .sataya__frame, [data-cursor]");
      if (!hit) return;
      cursor.classList.remove("is-active", "is-cta");
    });
  }

  /* ============================================================
     INTERACTION: SCROLL REVEALS
     ============================================================ */
  function initReveals() {
    const items = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((item) => io.observe(item));
  }

  /* ============================================================
     INTERACTION: GALLERY LIGHTBOX
     Opens any gallery photo full-size on click/tap; closes on the
     close button, a backdrop click, or Escape.
     ============================================================ */
  let lightboxLastFocus = null;

  function openLightbox(src, alt, caption) {
    const box = $("lightbox");
    const img = $("lightboxImg");
    const captionEl = $("lightboxCaption");
    if (!box || !img) return;
    lightboxLastFocus = document.activeElement;
    img.src = src;
    img.alt = alt || "";
    captionEl.textContent = caption || "";
    box.classList.add("is-open");
    box.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $("lightboxClose").focus();
  }

  function closeLightbox() {
    const box = $("lightbox");
    if (!box || !box.classList.contains("is-open")) return;
    box.classList.remove("is-open");
    box.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lightboxLastFocus) lightboxLastFocus.focus();
  }

  function initLightbox() {
    const box = $("lightbox");
    if (!box) return;
    $("lightboxClose").addEventListener("click", closeLightbox);
    box.addEventListener("click", (e) => {
      if (e.target === box) closeLightbox();
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
    });
  }

  /* ============================================================
     INTERACTION: VIDEO VIEWPORT AUTOPLAY
     Plays each real <video> only while it's actually visible, and
     pauses it the moment it scrolls out of view — keeps the page
     light even with several clips on it.
     ============================================================ */
  function initVideoAutoplay() {
    const videos = document.querySelectorAll("video.js-observe-video");
    if (!videos.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );
    videos.forEach((v) => io.observe(v));
  }

  /* ============================================================
     INTERACTION: DEPTH GAUGE
     ============================================================ */
  function initDepthGauge() {
    const track = $("gaugeTrack");
    const fill = $("gaugeFill");
    const marker = $("gaugeMarker");
    const label = $("gaugeLabel");
    const stops = CONTENT.depthGauge.stops
      .map((s) => ({ ...s, node: document.getElementById(s.id) }))
      .filter((s) => s.node);

    let ticking = false;
    function update() {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / docHeight)) : 0;

      fill.style.height = `${progress * 100}%`;
      marker.style.top = `${progress * 100}%`;

      // Determine current section for the label.
      let current = stops[0];
      const scrollMid = window.scrollY + window.innerHeight * 0.4;
      stops.forEach((s) => {
        if (s.node.offsetTop <= scrollMid) current = s;
      });
      label.textContent = current.label;
      ticking = false;
    }
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    });
    update();
  }

  /* ============================================================
     INTERACTION: SOUND TOGGLE (ambience is optional & user-initiated)
     ============================================================ */
  /* ============================================================
     INTERACTION: CONNECTION SECTION PARTICLES
     ============================================================ */
  function initConnectionParticles() {
    const canvas = $("connectionCanvas");
    const ctx = canvas.getContext("2d");
    const section = $("connection");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let particles = [];
    let raf = null;
    let visible = false;

    function resize() {
      canvas.width = section.clientWidth * devicePixelRatio;
      canvas.height = section.clientHeight * devicePixelRatio;
      canvas.style.width = section.clientWidth + "px";
      canvas.style.height = section.clientHeight + "px";
      const count = Math.round((section.clientWidth * section.clientHeight) / 26000);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: (Math.random() * 1.6 + 0.5) * devicePixelRatio,
        s: Math.random() * 0.25 + 0.05,
        o: Math.random() * 0.5 + 0.15,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y -= p.s * devicePixelRatio;
        if (p.y < -10) p.y = canvas.height + 10;
        ctx.beginPath();
        ctx.fillStyle = `rgba(127, 217, 207, ${p.o})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      if (visible) raf = requestAnimationFrame(draw);
    }

    if (!reduceMotion) {
      resize();
      window.addEventListener("resize", resize);
      const io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !raf) draw();
      });
      io.observe(section);
    }
  }

  /* ============================================================
     INIT
     ============================================================ */
  function init() {
    renderNav();
    renderHero();
    renderIntro();
    renderJourney();
    renderExperiences();
    renderDestinations();
    renderSpecial();
    renderGallery();
    renderJournal();
    renderTestimonials();
    renderConnection();
    renderFinalCta();
    renderFooter();
    renderInstaFloat();

    initNavScroll();
    initMobileNav();
    initCursor();
    initReveals();
    initDepthGauge();
    initConnectionParticles();
    initVideoAutoplay();
    initLightbox();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
