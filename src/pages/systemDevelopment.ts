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
      
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl"></div>
      </div>
      
      <!-- 🔽 收紧这里 -->
      <div class="relative ${CONTENT_SHELL_CLASS} py-16 md:py-20 lg:py-24">
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

      <div class="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="w-full h-auto text-white">
          <path fill="currentColor" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  `;
}

function renderVisionSection(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} bg-white relative overflow-hidden">
      
      <div class="${CONTENT_SHELL_CLASS} py-6 md:py-8">
        <div class="flex flex-col items-center text-center mb-6">
          ${renderSectionHeading("私たちの強み", "Our Strength")}
        </div>
        
        <div class="max-w-3xl mx-auto">
          <div class="fade-up opacity-0 translate-y-10">
            <div class="relative bg-gradient-to-r from-amber-50/50 to-white rounded-2xl shadow-md p-8 md:p-10 border border-amber-100">
              
              <div class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-300 rounded-full"></div>
              
              <div class="relative pl-6 space-y-4">
                ${systemDevelopment.vision
                  .map((line, idx) => {
                    const isLast = idx === systemDevelopment.vision.length - 1;
                    return `
                      <p class="leading-relaxed text-gray-700 ${
                        isLast ? "text-amber-700 font-semibold" : ""
                      }">
                        ${line}
                      </p>
                    `;
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

function renderServiceItem(
  service: SystemDevelopmentService,
  index: number,
): string {
  const gradients = [
    "from-amber-400 to-amber-500",
    "from-amber-500 to-amber-600",
    "from-amber-300 to-amber-500",
    "from-amber-400 to-amber-600",
  ];
  const gradient = gradients[index % gradients.length];

  return `
    <article class="group ${CONTENT_CARD_CLASS} fade-up opacity-0 translate-y-10 relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-amber-100 hover:border-amber-200">
      
      <div class="h-1 bg-gradient-to-r ${gradient}"></div>

      <div class="p-6 md:p-7">
        <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors">
          ${service.title}
        </h3>

        <div class="space-y-2">
          ${service.content
            .map((text, i) => {
              const isHighlighted =
                service.highlightLast && i === service.content.length - 1;

              return `
                <div class="flex gap-2 items-start">
                  <span class="flex-shrink-0 w-1 h-1 rounded-full ${
                    isHighlighted ? "bg-amber-500" : "bg-amber-300"
                  } mt-2"></span>
                  <p class="leading-relaxed text-sm ${
                    isHighlighted
                      ? "text-amber-700 font-medium"
                      : "text-gray-600"
                  }">
                    ${text}
                  </p>
                </div>
              `;
            })
            .join("")}
        </div>
      </div>
    </article>
  `;
}

function renderServicesSection(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} bg-gradient-to-b from-amber-50/20 to-white relative overflow-hidden">
      
      <!-- 🔽 收紧这里 -->
      <div class="${CONTENT_SHELL_CLASS} py-6 md:py-8">
        
        <div class="flex flex-col items-center text-center mb-6">
          ${renderSectionHeading("サービス内容", "Services")}
        </div>

        <div class="grid gap-5 md:grid-cols-2 lg:gap-6">
          ${systemDevelopment.services
            .map((service, idx) => renderServiceItem(service, idx))
            .join("")}
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
