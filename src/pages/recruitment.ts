// src/pages/recruitment.ts
import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { companyInfo, recruitment } from "../data";
import {
  createScrollEffect,
  revealFadeUpElements,
  toggleHeaderScrolledState,
} from "../utils/scroll";

let cleanupRecruitmentScrollEffect: (() => void) | null = null;

/* --- バナー --- */
function renderPageBanner(): string {
  return `
    <section style="padding-top: 90px; background: linear-gradient(150deg, #fdf8f0 0%, #fbf2e3 100%);">
      <div class="w-full px-6 md:px-10 py-20 text-center fade-up opacity-0 translate-y-10">
        <p class="text-primary text-xs font-semibold tracking-widest mb-3">RECRUIT</p>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">${recruitment.title}</h1>
        <div class="heading-border justify-center"><div class="heading-border-inner"></div></div>
        <p class="text-gray-600 w-full leading-relaxed">
          ${companyInfo.name}では、<br>国際ビジネスを共に担う仲間を募集しています。
        </p>
      </div>
    </section>
  `;
}

/* --- なぜ弘毅か --- */
function renderWhyJoinSection(): string {
  const benefits = [
    {
      num: "01",
      title: "グローバルな舞台",
      text: "日中を中心とした国際的なビジネス環境で、世界を相手に仕事ができます。",
    },
    {
      num: "02",
      title: "多彩な事業領域",
      text: "IT・貿易・金融・リサイクルなど複数の分野で幅広い経験を積めます。",
    },
    {
      num: "03",
      title: "成長できる環境",
      text: "広い器量と強い意志を育むため、個人の意欲を最大限サポートします。",
    },
  ];

  return `
    <section class="py-20 bg-white">
      <div class="w-full px-6 md:px-10">
        <div class="text-center mb-12 fade-up opacity-0 translate-y-10">
          <p class="text-primary text-xs font-semibold tracking-widest mb-2">WHY JOIN US</p>
          <h2 class="section-heading">弘毅インターナショナルで働く理由</h2>
          <div class="heading-border"><div class="heading-border-inner"></div></div>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          ${benefits
            .map(
              (b, i) => `
            <div class="fade-up opacity-0 translate-y-10 border border-gray-200 rounded-xl p-8 bg-white hover:shadow-md hover:border-primary transition-all" style="transition-delay: ${i * 0.1}s">
              <div class="text-primary text-3xl font-bold mb-4" style="font-family: serif; opacity: 0.5;">${b.num}</div>
              <div class="w-8 h-0.5 bg-primary mb-4"></div>
              <h3 class="font-bold text-gray-800 mb-3">${b.title}</h3>
              <p class="text-gray-600 text-sm leading-relaxed">${b.text}</p>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

/* --- 募集情報リスト --- */
function renderJobListings(): string {
  return `
    <section class="py-20" style="background: #fdf8f0;">
      <div class="w-full px-6 md:px-10">
        <div class="text-center mb-12 fade-up opacity-0 translate-y-10">
          <p class="text-primary text-xs font-semibold tracking-widest mb-2">JOB LISTINGS</p>
          <h2 class="section-heading">募集情報</h2>
          <div class="heading-border"><div class="heading-border-inner"></div></div>
        </div>
        <div class="space-y-4">
          ${recruitment.items
            .map(
              (item, i) => `
            <div class="fade-up opacity-0 translate-y-10 bg-white border border-gray-200 rounded-xl px-6 py-5 flex items-center gap-6 hover:border-primary hover:shadow-sm transition-all" style="transition-delay: ${i * 0.08}s">
              <span class="text-gray-400 text-sm whitespace-nowrap min-w-[100px]">${item.date}</span>
              <div class="w-px h-6 bg-gray-200 flex-shrink-0"></div>
              <a href="${item.link}" class="text-gray-800 hover:text-primary transition-colors font-medium flex-1">${item.title}</a>
              <span class="text-primary text-xs border border-primary rounded px-3 py-1 whitespace-nowrap flex-shrink-0">詳細を見る</span>
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
        <p class="text-primary text-xs font-semibold tracking-widest mb-3">CONTACT</p>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">ご不明な点はお気軽にご相談ください</h2>
        <div class="heading-border justify-center"><div class="heading-border-inner"></div></div>
        <p class="text-gray-600 leading-relaxed mb-8">
          採用に関するご質問や詳細は、お問い合わせフォームよりご連絡ください。
        </p>
        <a href="#contact" class="btn-primary">お問い合わせフォームへ</a>
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

  const app = document.querySelector<HTMLDivElement>("#app")!;

  app.innerHTML = `
    ${renderHeader()}
    ${renderPageBanner()}
    ${renderWhyJoinSection()}
    ${renderJobListings()}
    ${renderContactCTA()}
    ${renderFooter()}
  `;

  initScrollEffects();

  return () => {
    cleanupRecruitmentScrollEffect?.();
    cleanupRecruitmentScrollEffect = null;
  };
}
