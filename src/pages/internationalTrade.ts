import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { internationalTradeData } from "../data";
import {
  createScrollEffect,
  revealFadeUpElements,
  toggleHeaderScrolledState,
} from "../utils/scroll";
import { initHeaderMobileMenu } from "../utils/headerMenu";

const BASE = import.meta.env.BASE_URL;

let cleanupInternationalTradeScrollEffect: (() => void) | null = null;
let cleanupInternationalTradeHeaderMenu: (() => void) | null = null;

function renderHeroSection(): string {
  return `
    <section class="bg-white" style="padding-top: 80px;">
      <div class="w-full px-6 md:px-10 py-16">
        <div class="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div class="fade-up opacity-0 translate-y-10">
            <p class="text-primary text-xs font-semibold tracking-widest mb-3">INTERNATIONAL TRADE</p>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">${internationalTradeData.title}</h1>
            <div class="heading-border justify-start"><div class="heading-border-inner"></div></div>
            <div class="space-y-2 text-gray-600 leading-relaxed">
              ${internationalTradeData.leadLines
                .map((line) => `<p>${line}</p>`)
                .join("")}
            </div>
          </div>
          <div class="fade-up opacity-0 translate-y-10 overflow-hidden rounded-2xl shadow-md h-[260px] md:h-[420px]" style="transition-delay: 0.08s">
            <img src="${BASE}assets/ChinaJapanTrade.jpg" alt="国際貿易" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderWholesaleSection(): string {
  return `
    <section class="py-20" style="background: #fdf8f0;">
      <div class="w-full px-6 md:px-10">
        <div class="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div class="fade-up opacity-0 translate-y-10 bg-white rounded-2xl border border-gray-200 p-8">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-5">${internationalTradeData.wholesaleTitle}</h2>
            <div class="space-y-3 text-gray-600 leading-relaxed">
              ${internationalTradeData.wholesaleParagraphs
                .map((text) => `<p>${text}</p>`)
                .join("")}
            </div>
          </div>
          <div class="fade-up opacity-0 translate-y-10 overflow-hidden rounded-2xl shadow-sm h-[220px] md:h-[320px]" style="transition-delay: 0.08s">
            <img src="${BASE}assets/hero.jpg" alt="輸出販売・輸入販売" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderOemSection(): string {
  return `
    <section class="py-20 bg-white">
      <div class="w-full px-6 md:px-10 space-y-10">
        <div class="fade-up opacity-0 translate-y-10 bg-gray-50 rounded-2xl border border-gray-200 p-8">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-5">${internationalTradeData.oemTitle}</h2>
          <div class="space-y-3 text-gray-600 leading-relaxed">
            ${internationalTradeData.oemParagraphs.map((text) => `<p>${text}</p>`).join("")}
          </div>
        </div>
        <div class="fade-up opacity-0 translate-y-10" style="transition-delay: 0.08s">
          <div class="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
            <div class="overflow-hidden rounded-2xl shadow-sm h-[240px] md:h-[320px]">
              <img src="${BASE}assets/ChinaJapanTrade.jpg" alt="OEM製品提供" class="w-full h-full object-cover">
            </div>
            <div class="bg-white rounded-2xl border border-primary/25 p-8">
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
    <section class="py-20" style="background: #fdf8f0;">
      <div class="w-full px-6 md:px-10">
        <div class="fade-up opacity-0 translate-y-10 bg-white rounded-2xl border border-gray-200 p-8 md:p-10">
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
  const header = document.getElementById("header");
  const fadeItems = document.querySelectorAll<HTMLElement>(".fade-up");

  cleanupInternationalTradeScrollEffect = createScrollEffect(
    ({ scrollY, viewportHeight }) => {
      toggleHeaderScrolledState(header, scrollY);
      revealFadeUpElements(fadeItems, viewportHeight);
    },
  );
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
