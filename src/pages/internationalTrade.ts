// src/pages/internationalTrade.ts
import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { internationalTradeData } from "../data";
import { initHeaderMobileMenu } from "../utils/headerMenu";
import {
  CONTENT_CARD_CLASS,
  CONTENT_CARD_SOFT_CLASS,
  CONTENT_SHELL_CLASS,
  PAGE_BANNER_OFFSET_CLASS,
  PAGE_SECTION_CLASS,
  createStandardPageScrollEffect,
  renderSectionHeading,
} from "../utils/page.ts";

let cleanupInternationalTradeScrollEffect: (() => void) | null = null;
let cleanupInternationalTradeHeaderMenu: (() => void) | null = null;

function renderHeroSection(): string {
  return `
    <section id="international-trade" class="${PAGE_BANNER_OFFSET_CLASS} relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 international-hero-pattern"></div>
      </div>
      
      <div class="absolute top-20 right-20 w-64 h-64 border-2 border-primary/20 rounded-full"></div>
      <div class="absolute bottom-20 left-20 w-96 h-96 border-2 border-primary/10 rounded-full"></div>
      
      <div class="relative ${CONTENT_SHELL_CLASS} py-16 md:py-20 lg:py-24">
        <div class="max-w-4xl mx-auto text-center">
          <div class="fade-up opacity-0 translate-y-10">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 shadow-sm">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span class="text-primary text-sm font-medium tracking-wider">INTERNATIONAL TRADE</span>
            </div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight mb-6">
              ${internationalTradeData.title}
            </h1>
            <div class="space-y-3 text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
              ${internationalTradeData.leadLines
                .map((line) => `<p>${line}</p>`)
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderWholesaleSection(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} bg-white relative overflow-hidden">
      <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-200 via-amber-400 to-amber-200"></div>
      
      <div class="${CONTENT_SHELL_CLASS} py-8 md:py-10">
        <div class="flex flex-col items-center text-center mb-6">
          ${renderSectionHeading("輸出販売・輸入販売", "Import / Export")}
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="fade-up opacity-0 translate-y-10">
            <div class="relative ${CONTENT_CARD_CLASS} bg-gradient-to-br from-white to-amber-50/30 rounded-3xl shadow-xl p-8 md:p-10 border border-primary/20">
              <div class="absolute top-6 right-6 text-6xl text-primary/20 font-serif">"</div>
              
              <div class="relative space-y-4 text-gray-600 leading-relaxed">
                ${internationalTradeData.wholesaleParagraphs
                  .map((text) => `<p class="text-gray-700">${text}</p>`)
                  .join("")}
              </div>
              
              <div class="mt-6 pt-5 border-t border-primary/20">
                <div class="flex justify-center gap-2">
                  <div class="w-2 h-2 rounded-full bg-primary/50"></div>
                  <div class="w-2 h-2 rounded-full bg-primary/70"></div>
                  <div class="w-2 h-2 rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderOemSection(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} bg-gradient-to-b from-amber-50/30 to-white relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-20 w-3 h-3 bg-primary/50 rounded-full"></div>
        <div class="absolute top-40 left-40 w-2 h-2 bg-primary/60 rounded-full"></div>
        <div class="absolute bottom-32 right-32 w-4 h-4 bg-primary/40 rounded-full"></div>
        <div class="absolute bottom-60 left-60 w-2 h-2 bg-primary/50 rounded-full"></div>
      </div>
      
      <div class="relative ${CONTENT_SHELL_CLASS} py-8 md:py-10">
        <div class="flex flex-col items-center text-center mb-6">
          ${renderSectionHeading("貿易コンサルティング", "Consulting")}
        </div>
        
        <div class="fade-up opacity-0 translate-y-10">
          <div class="relative ${CONTENT_CARD_SOFT_CLASS} bg-white rounded-3xl shadow-lg p-8 md:p-10 border-l-8 border-l-primary">
            <div class="space-y-4 text-gray-600 leading-relaxed">
              ${internationalTradeData.oemParagraphs.map((text) => `<p class="text-gray-700">${text}</p>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderClosingSection(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} bg-white relative overflow-hidden">
      <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
      
      <div class="${CONTENT_SHELL_CLASS} py-8 md:py-10">
        <div class="flex flex-col items-center text-center mb-6">
          ${renderSectionHeading(internationalTradeData.closingTitle, "Closing")}
        </div>
        
        <div class="max-w-3xl mx-auto">
          <div class="fade-up opacity-0 translate-y-10">
            <div class="relative ${CONTENT_CARD_CLASS} bg-primary/5 rounded-3xl p-8 md:p-10 text-center border border-primary/25 shadow-sm">
              <div class="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-xl"></div>
              <div class="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-xl"></div>
              <div class="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-xl"></div>
              <div class="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-xl"></div>
              
              <div class="relative space-y-3 text-gray-600 leading-relaxed">
                ${internationalTradeData.closingParagraphs
                  .map((text, idx) => {
                    const isLast =
                      idx ===
                      internationalTradeData.closingParagraphs.length - 1;
                    return `<p class="${isLast ? "text-primary font-semibold mt-4 pt-3 border-t border-primary/25" : "text-gray-700"}">${text}</p>`;
                  })
                  .join("")}
              </div>
            </div>
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
    ${renderHeader(false)}
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
