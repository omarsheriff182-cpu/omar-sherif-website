/**
 * ============================================================
 * OMAR SHERIF — CONTENT & MEDIA CONFIGURATION
 * ============================================================
 * This is the single source of truth for every word and every
 * piece of media on the site. Nothing below the UI layer should
 * ever be hard-coded inside a component.
 *
 * TO REPLACE PLACEHOLDER MEDIA:
 * Every media entry has the shape:
 *   { type: 'video'|'image', src: null, poster: null, alt: '...' }
 * Drop a real file path into `src` (and `poster` for video) and
 * the placeholder gradient/particle treatment is automatically
 * replaced by the real asset — see media.js for how this is
 * consumed. Nothing else needs to change.
 * ============================================================
 */

const CONTENT = {

  brand: {
    name: "Let's Go Diving!",
    statement: "Reconnecting Humans with Nature✨",
    location: "Red Sea, Egypt",
  },

  contact: {
    instagramLabel: "Instagram",
    instagramUrl: "https://www.instagram.com/omar_ssherif/",
    emailLabel: "Email",
    emailUrl: "mailto:omar.sheriff182@gmail.com",
  },

  nav: {
    links: [
      { label: "Day in the Life", href: "#experience" },
      { label: "Adventures", href: "#experiences" },
      { label: "Spots", href: "#destinations" },
      { label: "Media", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
  },

  hero: {
    eyebrow: "Scuba Diving Instructor",
    title: "OMAR SHERIF",
    subtitle: "Reconnecting Humans with Nature✨",
    ctaPrimary: { label: "Explore", href: "#experience" },
    ctaSecondary: { label: "Plan Your Dive", href: "#contact" },
    depthLabel: "SURFACE",
    media: {
      type: "image",
      src: "assets/img/hero.jpg",
      poster: null,
      alt: "Omar Sherif diving along a Red Sea reef wall, bubbles rising through sunlit blue water as a buddy diver follows behind.",
      placeholderId: "hero",
    },
  },

  intro: {
    eyebrow: "Below the Surface",
    title: "Below the Surface",
    lines: [
      "I'm Omar.",
      "PADI Instructor and underwater storyteller.",
      "I spend most of my time exploring the world beneath the surface — and helping others experience it for themselves.",
    ],
    portrait: {
      type: "image",
      src: "assets/img/portrait.jpg",
      alt: "Portrait of Omar Sherif in dive gear on a jetty overlooking the Red Sea.",
      placeholderId: "portrait",
    },
    underwater: {
      type: "image",
      src: "assets/img/turtle.jpg",
      poster: null,
      alt: "A green sea turtle gliding through clear Red Sea water, sunlight breaking through the surface above.",
      placeholderId: "intro-underwater",
    },
  },

  journey: {
    eyebrow: "Your Day Below the Surface",
    title: "Your Day Below the Surface",
    stages: [
      {
        id: "arrive",
        title: "Arrive",
        copy: "Boat. Gear. Sea.",
        media: { type: "image", src: "assets/img/pier-gear.jpeg", alt: "Two divers carrying gear along a jetty lined with dive tanks.", placeholderId: "stage-arrive" },
      },
      {
        id: "descend",
        title: "Descend",
        copy: "Your first moments underwater.",
        media: { type: "image", src: "assets/img/diver-descend.jpg", poster: null, alt: "A diver descending along a Red Sea reef wall, reaching toward the camera.", placeholderId: "stage-descend" },
      },
      {
        id: "explore",
        title: "Explore",
        copy: "Reefs, marine life and the blue.",
        media: { type: "image", src: "assets/img/reef-fish.jpg", poster: null, alt: "A school of orange anthias fish over a coral reef in clear Red Sea water.", placeholderId: "stage-explore" },
      },
      {
        id: "connect",
        title: "Connect",
        copy: "Slow down. Look closer.",
        media: { type: "image", src: "assets/img/clownfish.jpg", alt: "Two clownfish sheltering in the tentacles of a sea anemone.", placeholderId: "stage-connect" },
      },
      {
        id: "surface",
        title: "Surface",
        copy: "Come back with a story.",
        media: { type: "image", src: "assets/img/beach-entry.jpeg", alt: "A diver walking out of the water onto a Red Sea beach beside a boat and palm trees.", placeholderId: "stage-surface" },
      },
    ],
  },

  experiences: {
    eyebrow: "Adventures",
    title: "What We Can Do",
    items: [
      { id: "diving", title: "private Dive guide", copy: "Explore the Red Sea, one dive at a time.", media: { type: "image", src: "assets/img/hero.jpg", poster: null, alt: "A diver in open blue water beside a Red Sea reef wall, bubbles rising.", placeholderId: "exp-diving" } },
      { id: "guiding", title: "guiding Dives", copy: "You explore. I take care of the rest.", media: { type: "image", src: "assets/img/divers-buddy.jpg", alt: "Two divers signaling OK to each other underwater.", placeholderId: "exp-guiding" } },
      { id: "introduction", title: "Introduction Dives", copy: "Your first breath underwater starts here.", media: { type: "image", src: "assets/img/intro.jpg", alt: "A first-time diver taking their first breath underwater with an instructor.", placeholderId: "exp-intro" } },
      { id: "courses", title: "Diving Courses", copy: "Learn to dive. Build confidence. Discover more.", media: { type: "image", src: "assets/img/course.jpg", alt: "A dive student practicing skills in shallow water with an instructor.", placeholderId: "exp-courses" } },
      { id: "boat-trips", title: "Boat Trips", copy: "A day on the Red Sea is more than a trip.", media: { type: "image", src: "assets/img/hahaha.jpg", alt: "Divers carrying gear along a jetty lined with dive tanks, boat trip preparation.", placeholderId: "exp-boat" } },
      { id: "dolphin-boat-trips", title: "Dolphin Trip", copy: "Go where the wild ones swim.", media: { type: "image", src: "assets/img/dolphins-sataya.jpeg", focus: "center 24%", alt: "Wild spinner dolphins swimming over a Red Sea reef.", placeholderId: "exp-dolphin" } },
    ],
  },

  destinations: {
    eyebrow: "The Red Sea",
    title: "The Red Sea",
    items: [
      { id: "el-quseir", name: "El Quseir", copy: "Quiet waters. Rich reefs. The real Red Sea.", media: { type: "image", src: "assets/img/moray-eel.jpg", alt: "A moray eel tucked into a coral outcrop, a quiet corner of the reef.", placeholderId: "dest-elquseir" } },
      { id: "port-ghalib", name: "Port Ghalib", copy: "Your gateway to some of the Red Sea's most unforgettable dives.", media: { type: "image", src: "assets/img/coral-wall-pink.jpg", alt: "A vivid reef wall of pink and white soft coral, gateway to the open blue.", placeholderId: "dest-portghalib" } },
      { id: "marsa-alam", name: "Marsa Alam", copy: "Wild nature, clear water and unforgettable encounters.", media: { type: "image", src: "assets/img/coral-wall-orange.jpg", alt: "A reef wall of orange soft coral in clear Marsa Alam water.", placeholderId: "dest-marsaalam" } },
    ],
  },

  special: {
    eyebrow: "Special Experiences",
    title: "Special Experiences",
    items: [
      {
        id: "elphinstone",
        place: "Elphinstone Reef",
        kicker: "Shark Dives",
        headline: "Meet the wild side of the Red Sea.",
        copy: "Descend into one of the Red Sea's iconic reefs and experience close encounters with its legendary sharks.",
        media: { type: "image", src: "assets/img/shark.jpg", alt: "A diver in open blue water as a shark passes at a distance near Elphinstone Reef.", placeholderId: "special-elphinstone" },
      },
      {
        id: "salem-express",
        place: "Salem Express",
        kicker: "Wreck Diving",
        headline: "Some stories are better discovered below the surface.",
        copy: "Explore the Salem Express and experience one of the Red Sea's most unforgettable wreck dives.",
        media: { type: "image", src: "assets/img/salem.jpg", alt: "The silhouette of a diver approaching the wreck of the Salem Express.", placeholderId: "special-salem" },
      },
      {
        id: "sataya",
        place: "Sataya Dolphin House",
        kicker: "Overnight Dolphin Experience",
        headline: "Two days. One night. A different kind of connection.",
        copy: "Swim and snorkel alongside wild dolphins, spend a night at sea, and experience the Red Sea at its most alive.",
        facts: ["2 Days", "1 Night", "Snorkeling", "Wild Dolphins", "Boat Life"],
        media: { type: "image", src: "assets/img/dolphins-sataya.jpeg", focus: "center 24%", alt: "A pod of wild spinner dolphins swimming over a Red Sea reef at Sataya.", placeholderId: "special-sataya" },
        sequence: [
          { type: "image", src: "assets/img/bkbk.png", alt: "Guests and crew together on the boat's swim platform at Sataya.", placeholderId: "sataya-boat" },
          { type: "image", src: "assets/img/koko.jpg", alt: "Wild dolphins swimming alongside the boat.", placeholderId: "sataya-dolphins-boat" },
          { type: "image", src: "assets/img/popo.jpg", alt: "Guests snorkeling alongside wild dolphins.", placeholderId: "sataya-snorkel" },
          { type: "image", src: "assets/img/dolphins-sataya.jpeg", focus: "center 24%", alt: "Underwater footage of a pod of wild dolphins swimming past a reef.", placeholderId: "sataya-underwater" },
          { type: "image", src: "assets/img/sunset.jpg", alt: "Sunset light over the Red Sea from the boat at Sataya.", placeholderId: "sataya-sunset" },
          { type: "image", src: "assets/img/123.jpg", alt: "A calm evening aboard the boat.", placeholderId: "sataya-evening" },
        ],
      },
    ],
  },

  gallery: {
    eyebrow: "The Ocean Through My Eyes",
    title: "The Ocean Through My Eyes",
    categories: ["Diving", "Marine Life", "Dolphins", "Sharks", "Wrecks", "Guests", "Boat Life", "Red Sea"],
    items: [
      { id: "g1", category: "Diving", size: "large", description: "Along the reef wall, every dive feels like entering another world.", media: { type: "image", src: "assets/img/diver-descend.jpg", alt: "A diver descending along a Red Sea reef wall, reaching toward the camera.", placeholderId: "gallery-1" } },
      { id: "g2", category: "Marine Life", size: "small", description: "Hidden in the coral — small encounters that stay with you.", media: { type: "image", src: "assets/img/moray-eel.jpg", alt: "A close-up of a moray eel among coral.", placeholderId: "gallery-2" } },
      { id: "g3", category: "Dolphins", size: "medium", description: "Wild dolphins, moving through open water on their own terms.", media: { type: "image", src: "assets/img/dolphins-sataya.jpg", focus: "center 24%", alt: "A pod of wild dolphins swimming over a Red Sea reef.", placeholderId: "gallery-3" } },
      { id: "g4", category: "Boat Life", size: "small", description: "The quiet rhythm of gear, tanks and the sea between dives.", media: { type: "image", src: "assets/img/pier-gear.jpg", alt: "Life aboard the dive boat between dives.", placeholderId: "gallery-4" } },
      { id: "g5", category: "Sharks", size: "large", description: "Meeting the Red Sea's legendary sharks, out in the open blue.", media: { type: "image", src: "assets/img/bew.jpg", alt: "A shark gliding through open blue water.", placeholderId: "gallery-5" } },
      { id: "g6", category: "Wrecks", size: "medium", description: "History resting quietly on the seabed, waiting to be explored.", media: { type: "image", src: "assets/img/krkr.jpg", alt: "Light filtering through the structure of a sunken wreck.", placeholderId: "gallery-6" } },
      { id: "g7", category: "Guests", size: "small", description: "The little moments that make every trip personal.", media: { type: "image", src: "assets/img/mask-turtle.jpg", alt: "A diver's mask with a small good-luck charm clipped to the gear.", placeholderId: "gallery-7" } },
      { id: "g8", category: "Red Sea", size: "medium", description: "The Red Sea, in all its color and quiet.", media: { type: "image", src: "assets/img/nudibranch.jpg", alt: "A Spanish dancer nudibranch swimming through open blue water over a school of fish.", placeholderId: "gallery-8" } },
    ],
  },

  testimonials: {
    eyebrow: "People I've Taken Below the Surface",
    title: "People I've Taken Below the Surface",
    // Photo-only cards — each just needs a photo and one sea-themed emoji.
    items: [
      { emoji: "🐬", photo: { type: "image", src: "assets/img/6666.jpg", alt: "Two divers signaling OK to each other underwater.", placeholderId: "guest-1" } },
      { emoji: "🌊", photo: { type: "image", src: "assets/img/a7a7.jpg", alt: "Guests and crew together on the boat's swim platform.", placeholderId: "guest-2" } },
      { emoji: "🐠", photo: { type: "image", src: "assets/img/bedo.jpg", alt: "Portrait of a guest.", placeholderId: "guest-3" } },
    ],
  },

  connection: {
    title: "Reconnecting Humans with Nature✨.",
    lines: ["Slow down.", "Look closer.", "Go below the surface."],
  },

  finalCta: {
    title: "Let's Go Diving.",
    eyebrow: "Coming to the Red Sea?",
    copy: "Let's plan your next experience below the surface.",
    ctaPrimary: { label: "Get in Touch", href: "#contact" },
    ctaSecondary: { label: "Instagram", href: "#" },
  },

  footer: {
    tagline: "Reconnecting Humans with Nature✨",
  },

  depthGauge: {
    // Sections mapped to a depth reading for the signature gauge.
    // Purely a storytelling device — not literal dive depths.
    stops: [
      { id: "hero", label: "SURFACE" },
      { id: "intro", label: "5M" },
      { id: "experience", label: "10M" },
      { id: "experiences", label: "15M" },
      { id: "destinations", label: "20M" },
      { id: "special", label: "DEEPER" },
      { id: "gallery", label: "DEEPER" },
      { id: "testimonials", label: "10M" },
      { id: "connection", label: "5M" },
      { id: "contact", label: "SURFACE" },
    ],
  },
};
