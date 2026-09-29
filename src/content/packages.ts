/**
 * Consulting packages shown in the "Packages" section.
 * The Holvi store URLs live ONLY in this file, so they are easy to swap when the store changes.
 */

export interface ConsultingPackage {
  title: string;
  pitch: string;
  /** Icon shown on the card. */
  icon: "users" | "code" | "building";
  /** One line: who this package suits. Rendered under the pitch. */
  goodFit: string;
  /** What the customer gets. */
  includes: string[];
  /** Optional session length, e.g. "90 minutes". Not rendered while empty. */
  duration?: string;
  /** Holvi product page. */
  url: string;
}

export const pricing = {
  /** Price shown big on every card. */
  price: "499 €",
  vatNote: "+ VAT",
  grossNote: "626,25 € incl. VAT 25.5 %",
  buttonLabel: "Book on Holvi",
  /** Format shared by all packages (matches the hero copy: one focused session). */
  format: "One focused session",
  goodFitLabel: "Good fit if",
  durationLabel: "Length",
};

export const shop = {
  url: "https://holvi.com/shop/dataatti/",
  linkLabel: "See the whole shop on Holvi",
};

export const packages: ConsultingPackage[] = [
  {
    title: "AI employee onboarding and adaptation",
    icon: "users",
    goodFit: "your team is getting started with AI, or only some people use it so far.",
    pitch: "Get your whole team using AI in their daily work, with tools that fit.",
    includes: [
      "Tooling selection recommendations",
      "Concrete use-case examples",
      "Ways to get the whole team to adopt AI",
    ],
    url: "https://holvi.com/shop/dataatti/product/5464243dc2b16543350f89a23dc91627/",
  },
  {
    title: "Dev workflow level up",
    icon: "code",
    goodFit: "you build software and want to know what to change first to work AI-first.",
    pitch: "Find out how AI-ready your development workflow is and what to change first.",
    includes: [
      "Assessment of how AI-ready your current dev workflow is",
      "Concrete improvement actions",
      "Implementation schedule and resourcing guidance",
    ],
    url: "https://holvi.com/shop/dataatti/product/2762f32876aa0c9ae9f244b670c46eee/",
  },
  {
    title: "Organisation AI adoption",
    icon: "building",
    goodFit: "you want to see where AI helps across the whole business, not just in one team.",
    pitch: "See where AI helps across your business functions and how to make it stick.",
    includes: [
      "How different business functions can use AI",
      "Proven ways to embed AI into daily work across the organisation",
    ],
    url: "https://holvi.com/shop/dataatti/product/59089a5bc6f94f508dfec32af53a3f4c/",
  },
];
