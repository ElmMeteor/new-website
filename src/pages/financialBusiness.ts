// src/pages/financialBusiness.ts
import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { financialBusinessData } from "../data";
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

let cleanupFinancialBusinessScrollEffect: (() => void) | null = null;
let cleanupFinancialBusinessHeaderMenu: (() => void) | null = null;

function renderBannerSection(): string {
  return `
    <section id="financial-business" class="${PAGE_BANNER_OFFSET_CLASS} relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <!-- 背景装饰 - 斜线图案 -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, #d97706 0px, #d97706 2px, transparent 2px, transparent 8px);"></div>
      </div>
      
      <!-- 装饰圆点 -->
      <div class="absolute top-32 left-16 w-3 h-3 bg-amber-300/40 rounded-full"></div>
      <div class="absolute bottom-32 right-16 w-4 h-4 bg-amber-400/30 rounded-full"></div>
      <div class="absolute top-1/2 right-1/4 w-2 h-2 bg-amber-200/50 rounded-full"></div>
      
      <div class="relative ${CONTENT_SHELL_CLASS} py-16 md:py-20 lg:py-24">
        <div class="max-w-4xl mx-auto text-center">
          <div class="fade-up opacity-0 translate-y-10">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 mb-6 shadow-sm">
              <span class="w-2 h-2 bg-amber-500 rounded-full"></span>
              <span class="text-amber-700 text-sm font-medium tracking-wider">FINANCIAL BUSINESS</span>
            </div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight mb-6">
              ${financialBusinessData.title}
            </h1>
            <div class="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full mx-auto mb-6"></div>
            <div class="space-y-3 text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
              ${financialBusinessData.leadLines.map((line) => `<p>${line}</p>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderConsultingSection(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} bg-white relative overflow-hidden">
      <!-- 顶部装饰线 -->
      <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
      
      <div class="${CONTENT_SHELL_CLASS} py-8 md:py-10">
        <div class="flex flex-col items-center text-center mb-6">
          ${renderSectionHeading(financialBusinessData.consultingTitle, "Consulting")}
          <p class="text-amber-600 text-sm font-medium mt-2">${financialBusinessData.consultingSubtitle}</p>
        </div>
        
        <div class="max-w-3xl mx-auto">
          <div class="fade-up opacity-0 translate-y-10">
            <div class="relative ${CONTENT_CARD_SOFT_CLASS} bg-gradient-to-br from-white to-amber-50/20 rounded-2xl shadow-md p-8 md:p-10 border border-amber-100">
              <!-- 左侧装饰竖条 -->
              <div class="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-300 rounded-full"></div>
              
              <div class="relative pl-6 space-y-3 text-gray-600 leading-relaxed">
                ${financialBusinessData.consultingParagraphs
                  .map((text) => `<p class="text-gray-700">${text}</p>`)
                  .join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderServiceBlocks(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} bg-gradient-to-b from-amber-50/30 to-white relative overflow-hidden">
      <div class="${CONTENT_SHELL_CLASS} py-8 md:py-10">
        <div class="flex flex-col items-center text-center mb-8">
          ${renderSectionHeading("サービス内容", "Services")}
        </div>
        
        <div class="grid md:grid-cols-2 gap-6">
          ${financialBusinessData.serviceBlocks
            .map(
              (block, idx) => `
            <div class="fade-up opacity-0 translate-y-10 group" style="transition-delay: ${idx * 0.05}s">
              <div class="relative ${CONTENT_CARD_CLASS} bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-amber-100 hover:border-amber-200">
                <!-- 顶部彩色条 -->
                <div class="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 rounded-full"></div>
                
                <h3 class="text-xl font-bold text-gray-800 mb-3 pt-2">${block.title}</h3>
                <div class="space-y-2 text-gray-600 text-sm leading-relaxed">
                  ${block.paragraphs.map((text) => `<p class="text-gray-600">${text}</p>`).join("")}
                </div>
                
                <!-- 装饰小圆点 -->
                <div class="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-amber-200 group-hover:bg-amber-400 transition-colors"></div>
              </div>
            </div>
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
    ${renderHeader(false)}
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
