import {
  createScrollEffect,
  revealFadeUpElements,
  toggleHeaderScrolledState,
} from "./scroll";

export const CONTENT_SHELL_CLASS = "w-full px-5 sm:px-6 md:px-10";
export const CONTENT_INSET_CLASS = "px-5 sm:px-6 md:px-10";
export const PAGE_SECTION_CLASS = "py-16 md:py-20";
export const PAGE_BANNER_OFFSET_CLASS = "pt-[88px] md:pt-[96px]";
export const CONTENT_CARD_CLASS =
  "rounded-2xl border border-gray-200 bg-white p-6 md:p-8";
export const CONTENT_CARD_SOFT_CLASS =
  "rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8";
export const MEDIA_FRAME_CLASS = "overflow-hidden rounded-2xl shadow-md";

export function renderSectionHeading(title: string, subtitle?: string): string {
  return `
    <div class="text-center mb-2 fade-up opacity-0 translate-y-10">
      <h2 class="section-heading">${title}</h2>
      <div class="heading-border"><div class="heading-border-inner"></div></div>
      ${subtitle ? `<p class="text-gray-500 text-sm">${subtitle}</p>` : ""}
    </div>
  `;
}

export function createStandardPageScrollEffect(
  selector = ".fade-up",
): () => void {
  const header = document.getElementById("header");
  const fadeItems = document.querySelectorAll<HTMLElement>(selector);

  return createScrollEffect(({ scrollY, viewportHeight }) => {
    toggleHeaderScrolledState(header, scrollY);
    revealFadeUpElements(fadeItems, viewportHeight);
  });
}
