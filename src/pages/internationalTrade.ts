import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { internationalTradeData } from "../data";
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

let cleanupInternationalTradeScrollEffect: (() => void) | null = null;
let cleanupInternationalTradeHeaderMenu: (() => void) | null = null;

function renderHeroSection(): string {
  return `
    <section id="international-trade" class="bg-white ${PAGE_BANNER_OFFSET_CLASS}">
      <div class="${CONTENT_SHELL_CLASS} py-14 md:py-16">
        <div class="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div class="fade-up opacity-0 translate-y-10">
            <p class="text-primary text-xs font-semibold tracking-widest mb-3">INTERNATIONAL TRADE</p>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">${internationalTradeData.title}</h1>
            <div class="flex justify-start mb-4">
                <div class="w-16 h-[3px] bg-[#b8922a] rounded"></div>
            </div>
            <div class="space-y-2 text-gray-600 leading-relaxed">
              ${internationalTradeData.leadLines
                .map((line) => `<p>${line}</p>`)
                .join("")}
            </div>
          </div>
          <div class="fade-up opacity-0 translate-y-10 ${MEDIA_FRAME_CLASS} h-[220px] sm:h-[280px] md:h-[420px]" style="transition-delay: 0.08s">
            <img src="${BASE}assets/ChinaJapanTrade.jpg" alt="国際貿易" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderWholesaleSection(): string {
  return `
    <section class="${PAGE_SECTION_CLASS}" style="background: #fdf8f0;">
      <div class="${CONTENT_SHELL_CLASS}">
        <div class="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div class="fade-up opacity-0 translate-y-10 ${CONTENT_CARD_CLASS}">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-5">${internationalTradeData.wholesaleTitle}</h2>
            <div class="space-y-3 text-gray-600 leading-relaxed">
              ${internationalTradeData.wholesaleParagraphs
                .map((text) => `<p>${text}</p>`)
                .join("")}
            </div>
          </div>
          <div class="fade-up opacity-0 translate-y-10 ${MEDIA_FRAME_CLASS} h-[220px] sm:h-[260px] md:h-[320px]" style="transition-delay: 0.08s">
            <img src="${BASE}assets/hero.jpg" alt="輸出販売・輸入販売" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderOemSection(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} bg-white">
      <div class="${CONTENT_SHELL_CLASS} space-y-10">
        <div class="fade-up opacity-0 translate-y-10 ${CONTENT_CARD_SOFT_CLASS}">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-5">${internationalTradeData.oemTitle}</h2>
          <div class="space-y-3 text-gray-600 leading-relaxed">
            ${internationalTradeData.oemParagraphs.map((text) => `<p>${text}</p>`).join("")}
          </div>
        </div>
        <div class="fade-up opacity-0 translate-y-10" style="transition-delay: 0.08s">
          <div class="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
            <div class="${MEDIA_FRAME_CLASS} h-[220px] sm:h-[260px] md:h-[320px]">
              <img src="${BASE}assets/ChinaJapanTrade.jpg" alt="OEM製品提供" class="w-full h-full object-cover">
            </div>
            <div class="rounded-2xl border border-primary/25 bg-white p-6 md:p-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-5">${internationalTradeData.oemSupplyTitle}</h3>
              <div class="space-y-3 text-gray-600 leading-relaxed mb-6">
                ${internationalTradeData.oemSupplyParagraphs
                  .map((text) => `<p>${text}</p>`)
                  .join("")}
              </div>
              <p class="text-primary font-semibold">${internationalTradeData.supportMessage}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderClosingSection(): string {
  return `
    <section class="${PAGE_SECTION_CLASS}" style="background: #fdf8f0;">
      <div class="${CONTENT_SHELL_CLASS}">
        <div class="fade-up opacity-0 translate-y-10 ${CONTENT_CARD_CLASS} md:p-10">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-5">${internationalTradeData.closingTitle}</h2>
          <div class="space-y-3 text-gray-600 leading-relaxed">
            ${internationalTradeData.closingParagraphs
              .map((text) => `<p>${text}</p>`)
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function initScrollEffects(): void {
  cleanupInternationalTradeScrollEffect = createStandardPageScrollEffect();
}

export function renderInternationalTradePage(): () => void {
  cleanupInternationalTradeScrollEffect?.();
  cleanupInternationalTradeScrollEffect = null;
  cleanupInternationalTradeHeaderMenu?.();
  cleanupInternationalTradeHeaderMenu = null;

  const app = document.querySelector<HTMLDivElement>("#app")!;

  app.innerHTML = `
    ${renderHeader()}
    ${renderHeroSection()}
    ${renderWholesaleSection()}
    ${renderOemSection()}
    ${renderClosingSection()}
    ${renderFooter()}
  `;

  initScrollEffects();
  cleanupInternationalTradeHeaderMenu = initHeaderMobileMenu();

  return () => {
    cleanupInternationalTradeScrollEffect?.();
    cleanupInternationalTradeScrollEffect = null;
    cleanupInternationalTradeHeaderMenu?.();
    cleanupInternationalTradeHeaderMenu = null;
  };
}
