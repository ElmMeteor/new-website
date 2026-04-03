import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { recyclingBusinessData } from "../data";
import { initHeaderMobileMenu } from "../utils/headerMenu";
import {
  CONTENT_CARD_CLASS,
  CONTENT_SHELL_CLASS,
  MEDIA_FRAME_CLASS,
  PAGE_BANNER_OFFSET_CLASS,
  PAGE_SECTION_CLASS,
  createStandardPageScrollEffect,
} from "../utils/page.ts";

const BASE = import.meta.env.BASE_URL;

let cleanupRecyclingBusinessScrollEffect: (() => void) | null = null;
let cleanupRecyclingBusinessHeaderMenu: (() => void) | null = null;

function renderIntroSection(): string {
  return `
    <section id="recycling-business" class="bg-white ${PAGE_BANNER_OFFSET_CLASS}">
      <div class="${CONTENT_SHELL_CLASS} py-14 md:py-16">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <div class="fade-up opacity-0 translate-y-10 ${MEDIA_FRAME_CLASS} order-2 lg:order-1 h-[240px] sm:h-[300px] md:h-[420px]">
            <img src="${BASE}assets/RecyclingBusiness.jpg" alt="リサイクル事業" class="w-full h-full object-cover">
          </div>
          <div class="fade-up opacity-0 translate-y-10 order-1 lg:order-2" style="transition-delay: 0.08s">
            <p class="text-primary text-xs font-semibold tracking-widest mb-3">RECYCLING BUSINESS</p>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">${recyclingBusinessData.title}</h1>
            <div class="flex justify-start mb-4">
                <div class="w-16 h-[3px] bg-[#b8922a] rounded"></div>
            </div>
            <div class="space-y-2 text-gray-600 leading-relaxed mb-8">
              ${recyclingBusinessData.leadLines.map((line) => `<p>${line}</p>`).join("")}
            </div>
            <p class="text-gray-800 font-semibold">${recyclingBusinessData.mainTitle}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderBusinessSections(): string {
  return `
    <section class="${PAGE_SECTION_CLASS}" style="background: #f9fafb;">
      <div class="${CONTENT_SHELL_CLASS}">
        <div class="space-y-6">
          ${recyclingBusinessData.sections
            .map(
              (section, idx) => `
            <article class="fade-up opacity-0 translate-y-10 ${CONTENT_CARD_CLASS} ${section.align === "right" ? "md:text-right" : ""}" style="transition-delay: ${idx * 0.08}s">
              <h3 class="text-2xl font-bold text-gray-800 mb-3">${section.title}</h3>
              <div class="w-8 h-0.5 bg-primary mb-4"></div>
              <div class="space-y-2 text-gray-600 leading-relaxed">
                ${section.paragraphs.map((text) => `<p>${text}</p>`).join("")}
              </div>
            </article>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderClosingSection(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} bg-white">
      <div class="${CONTENT_SHELL_CLASS}">
        <div class="fade-up opacity-0 translate-y-10 rounded-2xl border border-primary/25 bg-white p-6 md:p-10">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-5">${recyclingBusinessData.closingTitle}</h2>
          <div class="space-y-2 text-gray-600 leading-relaxed">
            ${recyclingBusinessData.closingParagraphs
              .map((text) => `<p>${text}</p>`)
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function initScrollEffects(): void {
  cleanupRecyclingBusinessScrollEffect = createStandardPageScrollEffect();
}

export function renderRecyclingBusinessPage(): () => void {
  cleanupRecyclingBusinessScrollEffect?.();
  cleanupRecyclingBusinessScrollEffect = null;
  cleanupRecyclingBusinessHeaderMenu?.();
  cleanupRecyclingBusinessHeaderMenu = null;

  const app = document.querySelector<HTMLDivElement>("#app")!;

  app.innerHTML = `
    ${renderHeader()}
    ${renderIntroSection()}
    ${renderBusinessSections()}
    ${renderClosingSection()}
    ${renderFooter()}
  `;

  initScrollEffects();
  cleanupRecyclingBusinessHeaderMenu = initHeaderMobileMenu();

  return () => {
    cleanupRecyclingBusinessScrollEffect?.();
    cleanupRecyclingBusinessScrollEffect = null;
    cleanupRecyclingBusinessHeaderMenu?.();
    cleanupRecyclingBusinessHeaderMenu = null;
  };
}
