// Shared site data — single source of truth for nav, contact, socials, pricing.

export const BRAND = {
  name: "Pearl & Indigo",
  tagline: "Where beauty meets meaning",
  emailStudio: "info@pearlandindigo.com",
  emailDigital: "digital@pearlandindigo.com",
  phone: "416-846-6037",
  address: "49 High Street, Barrie, Ontario L4N 5J4",
  hours: "Mon–Sat 9am–8pm · Sun closed",
};

export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/pearl.and.indigo/" },
  { label: "TikTok", href: "https://tiktok.com/@pearlandindigo" },
  { label: "Pinterest", href: "https://pinterest.com/pearlandindigo/" },
  { label: "Linktree", href: "https://linktr.ee/pearlandindigo" },
];

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Studio", to: "/ai-portraits-studio" },
  { label: "Digital", to: "/digital" },
  { label: "Free Guide", to: "/the-selfie-secret" },
  { label: "Quote", to: "/free-quote" },
  { label: "Contact", to: "/contact" },
];

export const STUDIO_PACKAGES = [
  {
    name: "Professional Headshots",
    price: "from $49",
    tiers: ["Starter $49", "Signature $89", "Luxury $179"],
    blurb:
      "LinkedIn-ready, hyper-realistic headshots generated from your selfies. Look like the top 1% in your field — no awkward photoshoot, no $500 photographer fee, no 3-week wait.",
  },
  {
    name: "Fantasy & Travel",
    price: "from $39",
    tiers: ["Spark $39", "Story $69", "Epic $139"],
    blurb:
      "Place yourself anywhere — Santorini sunsets, Paris streets, fantasy worlds. Stunning, share-worthy portraits that look like a professional shoot on location.",
  },
  {
    name: "Pet Portraits",
    price: "from $39",
    tiers: ["Good Boy/Girl", "Best in Show", "Top Dog"],
    blurb:
      "Turn your pet's photos into frame-worthy art. The perfect gift for the pet-obsessed — or a tribute to a beloved companion.",
  },
];

export const DIGITAL_PACKAGES = [
  {
    name: "Bronze",
    price: "$497",
    unit: "one-time",
    delivery: "3–5 business days",
    revisions: "2 revision rounds",
    features: ["1-page website", "Mobile responsive", "Contact form", "Basic SEO setup"],
    hosting: "$75/mo",
    hostingDetail: "hosting, security, backups + 2 content updates/mo",
  },
  {
    name: "Silver",
    price: "$997",
    unit: "one-time",
    delivery: "5–7 business days",
    revisions: "4 revision rounds",
    features: [
      "Up to 5 pages",
      "SEO setup",
      "Google Business Profile setup",
      "Booking integration",
      "Basic copywriting assistance",
    ],
    hosting: "$199/mo",
    hostingDetail: "hosting, security, backups + 4 content updates/mo",
  },
  {
    name: "Gold",
    price: "$1,997",
    unit: "one-time",
    delivery: "7–10 business days",
    revisions: "6 revision rounds",
    features: [
      "Up to 10 pages",
      "Full SEO",
      "Booking integration",
      "Full branding touch-up",
      "Full copywriting assistance",
    ],
    hosting: "$349/mo",
    hostingDetail: "hosting, security, backups + 6 content updates/mo",
  },
  {
    name: "Authority Builder",
    price: "$2,497",
    unit: "one-time",
    delivery: "21–30 business days",
    revisions: "6 revision rounds",
    features: [
      "Everything in Gold",
      "Professional AI portrait suite (10 images)",
      "Book formatting with proprietary template",
      "Launch strategy guide",
    ],
    hosting: "$349/mo",
    hostingDetail: "hosting, security, backups + 6 content updates/mo",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I was nervous the AI wouldn't capture my likeness, but the portraits look exactly like me — only more polished. My LinkedIn profile has never looked this good.",
    name: "Nicole D.",
    detail: "Professional Headshots client",
  },
  {
    quote:
      "The portrait of me with my dog made me tear up. It's now framed in my living room and everyone asks where I had it done.",
    name: "Barry B.",
    detail: "Pet Portrait client",
  },
  {
    quote:
      "My Greece fantasy shoot looks like I actually flew there. I've never had photos of myself I love this much.",
    name: "Emma M.",
    detail: "Fantasy & Travel client",
  },
];
