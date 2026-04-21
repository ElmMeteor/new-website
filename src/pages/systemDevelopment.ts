// src/pages/systemDevelopment.ts
import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { systemDevelopment } from "../data";
import { initHeaderMobileMenu } from "../utils/headerMenu";
import {
  CONTENT_CARD_CLASS,
  CONTENT_SHELL_CLASS,
  PAGE_BANNER_OFFSET_CLASS,
  PAGE_SECTION_CLASS,
  createStandardPageScrollEffect,
  renderSectionHeading,
} from "../utils/page.ts";

let cleanupSystemDevelopmentScrollEffect: (() => void) | null = null;
let cleanupSystemDevelopmentHeaderMenu: (() => void) | null = null;
type SystemDevelopmentService = (typeof systemDevelopment.services)[number];

function renderHeroSection(): string {
  return `
    <section id="system-development" class="${PAGE_BANNER_OFFSET_CLASS} relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <!-- 背景装饰保持不变 -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative ${CONTENT_SHELL_CLASS} py-20 md:py-28 lg:py-32">
        <div class="max-w-4xl mx-auto text-center">
          <div class="fade-up opacity-0 translate-y-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 backdrop-blur-sm border border-amber-200 mb-6">
              <span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
              <span class="text-amber-800/80 text-xs font-medium tracking-wider">SYSTEM DEVELOPMENT</span>
            </div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight mb-6">
              ${systemDevelopment.title}
            </h1>
          </div>
        </div>
      </div>
      
      <!-- 波浪装饰 -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="w-full h-auto text-white">
          <path fill="currentColor" fill-opacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  `;
}

function renderVisionSection(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} bg-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>
      
      <div class="${CONTENT_SHELL_CLASS}">
        ${renderSectionHeading("私たちの強み", "Our Strength")}
        
        <div class="mt-12 group">
          <div class="relative rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-8 md:p-10 fade-up opacity-0 translate-y-10 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div class="absolute -top-5 -left-5 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div class="absolute -bottom-5 -right-5 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
            
            <div class="relative z-10 space-y-4">
              ${systemDevelopment.vision
                .map((line, idx) => {
                  const isLast = idx === systemDevelopment.vision.length - 1;
                  return `
                    <p class="leading-relaxed text-gray-700 ${isLast ? "text-primary font-semibold text-lg" : ""}">
                      ${line}
                    </p>
                  `;
                })
                .join("")}
            </div>
            
            <div class="mt-8 pt-6 border-t border-gray-100">
              <div class="flex items-center gap-3 text-gray-400 text-sm">
                <span class="text-4xl leading-none">"</span>
                <span>私たちの信念を形にした指針</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderServiceItem(
  service: SystemDevelopmentService,
  index: number,
): string {
  const gradients = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-emerald-500 to-teal-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-blue-500",
    "from-rose-500 to-orange-500",
  ];
  const gradient = gradients[index % gradients.length];

  return `
    <article class="group ${CONTENT_CARD_CLASS} fade-up opacity-0 translate-y-10 relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
      <div class="h-2 bg-gradient-to-r ${gradient}"></div>
      
      <div class="p-6 md:p-8">
        <div class="w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
          <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors">${service.title}</h3>
        
        <div class="space-y-3">
          ${service.content
            .map((text, i) => {
              const isHighlighted =
                service.highlightLast && i === service.content.length - 1;
              return `
                <div class="flex gap-3 items-start ${isHighlighted ? "bg-primary/5 -mx-2 px-2 py-1 rounded-lg" : ""}">
                  <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full ${isHighlighted ? "bg-primary" : "bg-gray-300"} mt-2"></span>
                  <p class="leading-relaxed ${isHighlighted ? "text-primary font-semibold" : "text-gray-600"}">
                    ${text}
                  </p>
                </div>
              `;
            })
            .join("")}
        </div>
      </div>
      
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
    </article>
  `;
}

function renderServicesSection(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-40 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative ${CONTENT_SHELL_CLASS}">
        ${renderSectionHeading("サービス内容", "Services")}
        
        <div class="mt-12 grid gap-8 md:grid-cols-2 lg:gap-10">
          ${systemDevelopment.services.map((service, idx) => renderServiceItem(service, idx)).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderMainContent(): string {
  return `
    <main id="system-development" class="min-h-screen bg-white">
      ${renderHeroSection()}
      ${renderVisionSection()}
      ${renderServicesSection()}
    </main>
  `;
}

export function renderSystemDevelopmentPage(): () => void {
  cleanupSystemDevelopmentScrollEffect?.();
  cleanupSystemDevelopmentScrollEffect = null;
  cleanupSystemDevelopmentHeaderMenu?.();
  cleanupSystemDevelopmentHeaderMenu = null;

  const app = document.querySelector<HTMLDivElement>("#app")!;

  app.innerHTML = `
    ${renderHeader(false)}
    ${renderMainContent()}
    ${renderFooter()}
  `;

  cleanupSystemDevelopmentScrollEffect = createStandardPageScrollEffect();
  cleanupSystemDevelopmentHeaderMenu = initHeaderMobileMenu();

  return () => {
    cleanupSystemDevelopmentScrollEffect?.();
    cleanupSystemDevelopmentScrollEffect = null;
    cleanupSystemDevelopmentHeaderMenu?.();
    cleanupSystemDevelopmentHeaderMenu = null;
  };
}
