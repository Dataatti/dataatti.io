/**
 * Consulting packages shown in the "Packages" section.
 * Content mirrors the Holvi store (https://holvi.com/shop/dataatti/).
 * The store URLs live ONLY in this file, so they are easy to swap when the store changes.
 */
import type { ImageMetadata } from "astro";
import aiOnboarding from "../assets/packages/ai-onboarding.png";
import devWorkflow from "../assets/packages/dev-workflow.png";
import orgAdoption from "../assets/packages/org-adoption.png";

export interface ConsultingPackage {
  title: string;
  /** Product image from the Holvi store. */
  image: ImageMetadata;
  /** What the customer gets (Holvi product description). */
  includes: string[];
  /** Optional session length, e.g. "90 minutes". Not rendered while empty. */
  duration?: string;
  /** Holvi product page. */
  url: string;
}

export const pricing = {
  /** Price without VAT, shown on every card. */
  price: "499 €",
  vatNote: "VAT 0 %",
  buttonLabel: "Book on Holvi",
  durationLabel: "Length",
};

export const shop = {
  url: "https://holvi.com/shop/dataatti/",
  linkLabel: "See the whole shop on Holvi",
};

export const packages: ConsultingPackage[] = [
  {
    title: "AI employee onboarding and adaptation",
    image: aiOnboarding,
    includes: [
      "Suggestions for choosing the tooling",
      "Concrete examples of use cases",
      "Proven methods of spreading usage across the organisation",
    ],
    url: "https://holvi.com/shop/dataatti/product/5464243dc2b16543350f89a23dc91627/",
  },
  {
    title: "Dev workflow level up",
    image: devWorkflow,
    includes: [
      "Assessment of the current workflow AI readiness",
      "Concrete actions for taking steps towards the next level",
      "Suggested schedule for implementing these steps with resources to support it",
    ],
    url: "https://holvi.com/shop/dataatti/product/2762f32876aa0c9ae9f244b670c46eee/",
  },
  {
    title: "Organisational AI adoption",
    image: orgAdoption,
    includes: [
      "Simple examples of how different functions could take AI into use",
      "Proven methods of taking these examples into daily practice across the organisation",
    ],
    url: "https://holvi.com/shop/dataatti/product/59089a5bc6f94f508dfec32af53a3f4c/",
  },
];
