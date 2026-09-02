import { CONTENT_SHELL_CLASS, PAGE_BANNER_OFFSET_CLASS } from "./page.ts";
import { isMobileViewport } from "./scroll.ts";

type UnifiedHeroOptions = {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  description: string;
  image: string;
  imageAlt: string;
  longTitle?: boolean;
};

export function renderUnifiedHero(options: UnifiedHeroOptions): string {
  const heroImage = isMobileViewport()
    ? ""
    : `
        <div class="dx-hero-image fade-up opacity-0 translate-y-10">
          <img src="${options.image}" alt="${options.imageAlt}">
        </div>`;

  return `
    <section id="${options.id}" class="${PAGE_BANNER_OFFSET_CLASS} dx-hero unified-subpage-hero">
      <div class="${CONTENT_SHELL_CLASS} dx-hero-grid">
        <div class="dx-hero-copy fade-up opacity-0 translate-y-10">
          <p class="dx-eyebrow">${options.eyebrow}</p>
          <h1 class="subpage-title${options.longTitle ? " subpage-title-long" : ""}">${options.title}</h1>
          <p class="dx-hero-lead">${options.lead}</p>
          <div class="dx-gold-line" aria-hidden="true"></div>
          <p class="dx-hero-introduction">${options.description}</p>
        </div>
        ${heroImage}
      </div>
    </section>
  `;
}

export function renderUnifiedSectionHeading(
  eyebrow: string,
  title: string,
): string {
  return `
    <div class="dx-section-heading fade-up opacity-0 translate-y-10">
      <p>${eyebrow}</p>
      <h2>${title}</h2>
    </div>
  `;
}
