/**
 * All page copy lives here (and in packages.ts). Components never hardcode text.
 */

export type IconName = "package" | "message" | "clock" | "target";

/** Shared accessibility strings. */
export const common = {
  newTab: "(opens in a new tab)",
};

export interface Link {
  label: string;
  href: string;
}

export const site = {
  url: "https://dataatti.io/",
  name: "Dataatti",
  legalName: "Dataatti Oy",
  businessId: "3172458-9",
  founder: "Petro Silenius",
  email: "hello@dataatti.io",
  phone: "+358 40 419 6798",
  linkedinPerson: "https://www.linkedin.com/in/petrosilenius/",
  linkedinCompany: "https://www.linkedin.com/company/dataatti/",
  logoAlt: "Dataatti",
  themeColor: "#ffffff",
  themeColorDark: "#0d1517",
};

export const seo = {
  title: "Dataatti | Practical AI consulting for teams",
  description:
    "Fixed-price AI consulting packages for teams: pick a package, describe your situation, and get a focused session with concrete next steps. By Petro Silenius, Dataatti.",
  ogImage: "/icons/ms-icon-310x310.png",
  ogImageAlt: "Dataatti logo",
  notFound: {
    title: "Page not found | Dataatti",
    heading: "Page not found",
    text: "The page you are looking for does not exist or has moved.",
    button: "Back to the front page",
  },
};

export const nav = {
  menuLabel: "Main menu",
  openLabel: "Open menu",
  closeLabel: "Close menu",
  links: [
    { label: "Process", href: "#process" },
    { label: "Packages", href: "#packages" },
    { label: "About", href: "#about" },
  ] satisfies Link[],
  cta: { label: "Book a session", href: "#packages" } satisfies Link,
};

export const hero = {
  title: "Practical AI for your team, without the consulting overhead",
  text: "I help teams and organisations put AI to work on real, everyday tasks. Pick a fixed-price package, tell me about your situation, and leave one focused session with concrete next steps.",
  primary: { label: "See the packages", href: "#packages" } satisfies Link,
  secondary: { label: "Get in touch", href: "#contact" } satisfies Link,
  card: {
    label: "After one session, you have",
    title: "Clear answers, not a long report",
    items: [
      "Tooling recommendations that fit your team",
      "Concrete use cases to start with",
      "A practical plan for the next steps",
    ],
  },
};

export const howItWorks = {
  id: "process",
  title: "From question to plan, fast",
  text: "Four simple steps from purchase to a session in your calendar.",
  steps: [
    {
      icon: "package",
      title: "Pick a package",
      text: "Choose the package that best matches what you want to achieve and book it in the shop.",
    },
    {
      icon: "message",
      title: "Describe your situation",
      text: "Tell me about your team and your goals as text or a voice message. Whatever is easiest for you.",
    },
    {
      icon: "clock",
      title: "Get a time slot",
      text: "Within 24 hours I will get back to you with a suggested time slot.",
    },
    {
      icon: "target",
      title: "Focused session",
      text: "We go through your topic together and you leave with concrete next steps.",
    },
  ] satisfies { icon: IconName; title: string; text: string }[],
};

export const packagesSection = {
  id: "packages",
  title: "Packages",
  text: "Three fixed-price consulting packages. Simple to buy, simple to act on.",
  includesLabel: "What you get",
  notes: [
    "Pricing is flexible for justified cases, so just ask if the price is a blocker.",
    "After the first session we can also agree on a custom partnership if you want to keep going.",
  ],
};

export const about = {
  id: "about",
  title: "About",
  name: "Petro Silenius",
  role: "Founder & consultant",
  photoAlt: "Portrait of Petro Silenius",
  linkedinLabel: "Petro Silenius on LinkedIn",
  // Use {hackathon} to place the hackathon link inside a paragraph.
  paragraphs: [
    "I have CTO-level experience from a real startup, and I work AI-first myself. My advice is practical and focused on modern technology you can put to use right away.",
    "I founded Dataatti in Turku after winning the {hackathon}.",
    "My aim is to be an accessible, lightweight alternative to traditional consulting: fixed-price packages and a quick start instead of long engagements.",
  ],
  hackathon: {
    label: "Turku city hackathon",
    href: "https://www.turku.fi/uutinen/2020-10-30_hackathonin-voittajaideaa-kehitetaan-kaupungin-avoimen-tiedon-palveluksi",
  },
};

export const contact = {
  id: "contact",
  title: "Contact",
  emailLabel: "Email",
  phoneLabel: "Phone",
  businessIdLabel: "Business ID",
  linkedinLabel: "Dataatti on LinkedIn",
  card: {
    title: "Not sure which package fits?",
    text: "Send me a message and tell me a bit about your team. I will point you in the right direction.",
    button: "Send me an email",
  },
};

export const footer = {
  // {year} is replaced at build time.
  copyright: "© Dataatti Oy {year}",
};
