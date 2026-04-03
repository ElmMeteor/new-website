import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { recyclingBusinessData } from "../data";
import {
  createScrollEffect,
  revealFadeUpElements,
  toggleHeaderScrolledState,
} from "../utils/scroll";
import { initHeaderMobileMenu } from "../utils/headerMenu";

const BASE = import.meta.env.BASE_URL;

let cleanupRecyclingBusinessScrollEffect: (() => void) | null = null;
let cleanupRecyclingBusinessHeaderMenu: (() => void) | null = null;

function renderIntroSection(): string {
  return `
    <section id="recycling-business" class="bg-white" style="padding-top: 80px;">
      <div class="w-full px-6 md:px-10 py-16">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <div class="fade-up opacity-0 translate-y-10 overflow-hidden rounded-2xl shadow-md order-2 lg:order-1">
            <img src="${BASE}assets/RecyclingBusiness.jpg" alt="リサイクル事業" class="w-full h-full object-cover min-h-[300px] md:min-h-[420px]">
          </div>
          <div class="fade-up opacity-0 translate-y-10 order-1 lg:order-2" style="transition-delay: 0.08s">
            <p class="text-primary text-xs font-semibold tracking-widest mb-3">RECYCLING BUSINESS</p>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">${recyclingBusinessData.title}</h1>
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
    <section class="py-20" style="background: #f9fafb;">
      <div class="w-full px-6 md:px-10">
        <div class="space-y-6">
          ${recyclingBusinessData.sections
            .map(
              (section, idx) => `
            <article class="fade-up opacity-0 translate-y-10 rounded-2xl border border-gray-200 bg-white p-8 ${section.align === "right" ? "md:text-right" : ""}" style="transition-delay: ${idx * 0.08}s">
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
    <section class="py-20 bg-white">
      <div class="w-full px-6 md:px-10">
        <div class="fade-up opacity-0 translate-y-10 rounded-2xl border border-primary/25 p-10">
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
  const header = document.getElementById("header");
  const fadeItems = document.querySelectorAll<HTMLElement>(".fade-up");

  cleanupRecyclingBusinessScrollEffect = createScrollEffect(
    ({ scrollY, viewportHeight }) => {
      toggleHeaderScrolledState(header, scrollY);
      revealFadeUpElements(fadeItems, viewportHeight);
    },
  );
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
