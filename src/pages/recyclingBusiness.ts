// src/pages/recyclingBusiness.ts
import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { recyclingBusinessData } from "../data";
import { initHeaderMobileMenu } from "../utils/headerMenu";
import {
  CONTENT_CARD_CLASS,
  CONTENT_SHELL_CLASS,
  PAGE_BANNER_OFFSET_CLASS,
  PAGE_SECTION_CLASS,
  createStandardPageScrollEffect,
  renderSectionHeading,
} from "../utils/page.ts";

let cleanupRecyclingBusinessScrollEffect: (() => void) | null = null;
let cleanupRecyclingBusinessHeaderMenu: (() => void) | null = null;

function renderIntroSection(): string {
  return `
    <section id="recycling-business" class="${PAGE_BANNER_OFFSET_CLASS} relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <!-- 背景装饰 - 波浪点阵 -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 50% 50%, #d97706 2px, transparent 2px); background-size: 30px 30px;"></div>
      </div>
      
      <!-- 装饰圆环 -->
      <div class="absolute top-1/4 left-10 w-32 h-32 rounded-full border border-amber-200/30"></div>
      <div class="absolute bottom-1/4 right-10 w-48 h-48 rounded-full border border-amber-200/20"></div>
      
      <div class="relative ${CONTENT_SHELL_CLASS} py-16 md:py-20 lg:py-24">
        <div class="max-w-3xl mx-auto text-center">
          <div class="fade-up opacity-0 translate-y-10">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 mb-6 shadow-sm">
              <span class="w-2 h-2 bg-amber-500 rounded-full"></span>
              <span class="text-amber-700 text-sm font-medium tracking-wider">RECYCLING BUSINESS</span>
            </div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight mb-6">
              ${recyclingBusinessData.title}
            </h1>
            <div class="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full mx-auto mb-6"></div>
            <div class="space-y-3 text-gray-600 text-base leading-relaxed">
              ${recyclingBusinessData.leadLines.map((line) => `<p>${line}</p>`).join("")}
            </div>
            <div class="mt-6 inline-block px-4 py-2 bg-amber-100/50 rounded-full">
              <p class="text-amber-700 font-semibold text-sm">${recyclingBusinessData.mainTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderBusinessSections(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} bg-white relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 right-0 w-64 h-64 bg-amber-50/50 rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative ${CONTENT_SHELL_CLASS} py-8 md:py-10">
        <div class="flex flex-col items-center text-center mb-8">
          ${renderSectionHeading("事業内容", "Services")}
        </div>
        
        <div class="space-y-4">
          ${recyclingBusinessData.sections
            .map(
              (section, idx) => `
            <div class="fade-up opacity-0 translate-y-10 group" style="transition-delay: ${idx * 0.06}s">
              <div class="relative ${CONTENT_CARD_CLASS} bg-gradient-to-r from-white to-amber-50/20 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-amber-100 hover:border-amber-200 overflow-hidden">
                <!-- 左侧彩色条 -->
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-300"></div>
                
                <div class="pl-5">
                  <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-3">${section.title}</h3>
                  <div class="w-10 h-0.5 bg-amber-400 rounded mb-4"></div>
                  <div class="space-y-2 text-gray-600 text-sm leading-relaxed">
                    ${section.paragraphs.map((text) => `<p class="text-gray-600">${text}</p>`).join("")}
                  </div>
                </div>
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

function renderClosingSection(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} bg-gradient-to-b from-amber-50/30 to-white relative overflow-hidden">
      <div class="${CONTENT_SHELL_CLASS} py-8 md:py-10">
        <div class="flex flex-col items-center text-center mb-6">
          ${renderSectionHeading(recyclingBusinessData.closingTitle, "Closing")}
        </div>
        
        <div class="max-w-3xl mx-auto">
          <div class="fade-up opacity-0 translate-y-10">
            <div class="relative ${CONTENT_CARD_CLASS} bg-white rounded-2xl shadow-md p-8 md:p-10 border border-amber-100">
              <!-- 四角装饰 -->
              <div class="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-200 rounded-tl-lg"></div>
              <div class="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-200 rounded-tr-lg"></div>
              <div class="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-200 rounded-bl-lg"></div>
              <div class="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-200 rounded-br-lg"></div>
              
              <div class="relative space-y-3 text-gray-600 leading-relaxed text-center">
                ${recyclingBusinessData.closingParagraphs
                  .map((text, idx) => {
                    const isLast =
                      idx ===
                      recyclingBusinessData.closingParagraphs.length - 1;
                    return `<p class="${isLast ? "text-amber-700 font-semibold mt-3 pt-2" : "text-gray-600"}">${text}</p>`;
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
  cleanupRecyclingBusinessScrollEffect = createStandardPageScrollEffect();
}

export function renderRecyclingBusinessPage(): () => void {
  cleanupRecyclingBusinessScrollEffect?.();
  cleanupRecyclingBusinessScrollEffect = null;
  cleanupRecyclingBusinessHeaderMenu?.();
  cleanupRecyclingBusinessHeaderMenu = null;

  const app = document.querySelector<HTMLDivElement>("#app")!;

  app.innerHTML = `
    ${renderHeader(false)}
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
