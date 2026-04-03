// src/pages/recruitment.ts
import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { recruitmentPageData } from "../data";
import {
  createScrollEffect,
  revealFadeUpElements,
  toggleHeaderScrolledState,
} from "../utils/scroll";
import { initHeaderMobileMenu } from "../utils/headerMenu";

let cleanupRecruitmentScrollEffect: (() => void) | null = null;
let cleanupRecruitmentHeaderMenu: (() => void) | null = null;

/* --- バナー --- */
function renderPageBanner(): string {
  return `
    <section style="padding-top: 90px; background: linear-gradient(150deg, #fdf8f0 0%, #fbf2e3 100%);">
      <div class="w-full px-6 md:px-10 py-20 text-center fade-up opacity-0 translate-y-10">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">${recruitmentPageData.title}</h1>
        <div class="heading-border justify-center"><div class="heading-border-inner"></div></div>
        <p class="text-gray-700 w-full leading-relaxed font-semibold">${recruitmentPageData.noticeTitle}</p>
      </div>
    </section>
  `;
}

/* --- お知らせ --- */
function renderNoticeSection(): string {
  return `
    <section class="py-20 bg-white">
      <div class="w-full px-6 md:px-10">
        <div class="fade-up opacity-0 translate-y-10 rounded-2xl border border-gray-200 bg-gray-50 p-8 md:p-10 text-center">
          <div class="space-y-2 text-gray-600 leading-relaxed">
            ${recruitmentPageData.noticeLines.map((line) => `<p>${line}</p>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

/* --- 募集要項 --- */
function renderRecruitmentTable(): string {
  return `
    <section class="py-20" style="background: #fdf8f0;">
      <div class="w-full px-6 md:px-10">
        <div class="text-center mb-12 fade-up opacity-0 translate-y-10">
          <h2 class="section-heading">募集情報</h2>
          <div class="heading-border"><div class="heading-border-inner"></div></div>
        </div>
        <div class="rounded-2xl border border-gray-300 overflow-hidden bg-white fade-up opacity-0 translate-y-10">
          ${recruitmentPageData.rows
            .map(
              (row) => `
            <div class="grid md:grid-cols-[220px_1fr] border-b border-gray-200 last:border-b-0">
              <div class="bg-[#f2dcdb] px-5 py-4 text-center font-semibold text-gray-800">${row.label}</div>
              <div class="px-5 py-4 text-gray-700">
                ${row.values.map((value) => `<p class="leading-relaxed">${value}</p>`).join("")}
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

/* --- お問い合わせ CTA --- */
function renderContactCTA(): string {
  return `
    <section class="py-20 bg-white text-center">
      <div class="fade-up opacity-0 translate-y-10 w-full px-6">
        <a href="#contact" class="btn-primary">${recruitmentPageData.inquiryLabel}</a>
      </div>
    </section>
  `;
}

/* --- スクロールエフェクト --- */
function initScrollEffects(): void {
  const header = document.getElementById("header");
  const fadeItems = document.querySelectorAll<HTMLElement>(".fade-up");

  cleanupRecruitmentScrollEffect = createScrollEffect(
    ({ scrollY, viewportHeight }) => {
      toggleHeaderScrolledState(header, scrollY);
      revealFadeUpElements(fadeItems, viewportHeight);
    },
  );
}

export function renderRecruitmentPage(): () => void {
  cleanupRecruitmentScrollEffect?.();
  cleanupRecruitmentScrollEffect = null;
  cleanupRecruitmentHeaderMenu?.();
  cleanupRecruitmentHeaderMenu = null;

  const app = document.querySelector<HTMLDivElement>("#app")!;

  app.innerHTML = `
    ${renderHeader()}
    ${renderPageBanner()}
    ${renderNoticeSection()}
    ${renderRecruitmentTable()}
    ${renderContactCTA()}
    ${renderFooter()}
  `;

  initScrollEffects();
  cleanupRecruitmentHeaderMenu = initHeaderMobileMenu();

  return () => {
    cleanupRecruitmentScrollEffect?.();
    cleanupRecruitmentScrollEffect = null;
    cleanupRecruitmentHeaderMenu?.();
    cleanupRecruitmentHeaderMenu = null;
  };
}
