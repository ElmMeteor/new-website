import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { financialBusinessData } from "../data";
import { initHeaderMobileMenu } from "../utils/headerMenu";
import {
  CONTENT_CARD_CLASS,
  CONTENT_CARD_SOFT_CLASS,
  CONTENT_SHELL_CLASS,
  MEDIA_FRAME_CLASS,
  PAGE_BANNER_OFFSET_CLASS,
  PAGE_SECTION_CLASS,
  createStandardPageScrollEffect,
} from "../utils/page.ts";

const BASE = import.meta.env.BASE_URL;

let cleanupFinancialBusinessScrollEffect: (() => void) | null = null;
let cleanupFinancialBusinessHeaderMenu: (() => void) | null = null;

function renderBannerSection(): string {
  return `
    <section id="financial-business" class="${PAGE_BANNER_OFFSET_CLASS}" style="background: linear-gradient(160deg, #ffffff 0%, #f7f8fa 100%);">
      <div class="${CONTENT_SHELL_CLASS} py-16">
        <div class="fade-up opacity-0 translate-y-10 text-center">
          <p class="text-primary text-xs font-semibold tracking-widest mb-3">FINANCIAL BUSINESS</p>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">${financialBusinessData.title}</h1>
          <div class="heading-border justify-center"><div class="heading-border-inner"></div></div>
          <div class="space-y-2 text-gray-600 leading-relaxed max-w-4xl mx-auto">
            ${financialBusinessData.leadLines.map((line) => `<p>${line}</p>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderConsultingSection(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} bg-white">
      <div class="${CONTENT_SHELL_CLASS}">
        <div class="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div class="fade-up opacity-0 translate-y-10 ${MEDIA_FRAME_CLASS} h-[220px] sm:h-[280px] md:h-[420px]">
            <img src="${BASE}assets/FinancialBusiness.jpg" alt="金融事業" class="w-full h-full object-cover">
          </div>
          <div class="fade-up opacity-0 translate-y-10 ${CONTENT_CARD_SOFT_CLASS}" style="transition-delay: 0.08s">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-3">${financialBusinessData.consultingTitle}</h2>
            <p class="text-primary font-medium mb-5">${financialBusinessData.consultingSubtitle}</p>
            <div class="space-y-3 text-gray-600 leading-relaxed">
              ${financialBusinessData.consultingParagraphs
                .map((text) => `<p>${text}</p>`)
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderServiceBlocks(): string {
  return `
    <section class="${PAGE_SECTION_CLASS}" style="background: #fdf8f0;">
      <div class="${CONTENT_SHELL_CLASS}">
        <div class="space-y-6">
          ${financialBusinessData.serviceBlocks
            .map(
              (block, idx) => `
            <article class="fade-up opacity-0 translate-y-10 ${CONTENT_CARD_CLASS} ${block.align === "right" ? "md:text-right" : ""}" style="transition-delay: ${idx * 0.07}s">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">${block.title}</h3>
              <div class="space-y-2 text-gray-600 leading-relaxed">
                ${block.paragraphs.map((text) => `<p>${text}</p>`).join("")}
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

function initScrollEffects(): void {
  cleanupFinancialBusinessScrollEffect = createStandardPageScrollEffect();
}

export function renderFinancialBusinessPage(): () => void {
  cleanupFinancialBusinessScrollEffect?.();
  cleanupFinancialBusinessScrollEffect = null;
  cleanupFinancialBusinessHeaderMenu?.();
  cleanupFinancialBusinessHeaderMenu = null;

  const app = document.querySelector<HTMLDivElement>("#app")!;

  app.innerHTML = `
    ${renderHeader()}
    ${renderBannerSection()}
    ${renderConsultingSection()}
    ${renderServiceBlocks()}
    ${renderFooter()}
  `;

  initScrollEffects();
  cleanupFinancialBusinessHeaderMenu = initHeaderMobileMenu();

  return () => {
    cleanupFinancialBusinessScrollEffect?.();
    cleanupFinancialBusinessScrollEffect = null;
    cleanupFinancialBusinessHeaderMenu?.();
    cleanupFinancialBusinessHeaderMenu = null;
  };
}
