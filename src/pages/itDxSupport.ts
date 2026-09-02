import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { itDxSupportData } from "../data";
import { initHeaderMobileMenu } from "../utils/headerMenu";
import {
  CONTENT_SHELL_CLASS,
  PAGE_SECTION_CLASS,
  createStandardPageScrollEffect,
} from "../utils/page.ts";
import {
  renderUnifiedHero,
  renderUnifiedSectionHeading,
} from "../utils/unifiedPage.ts";

const BASE = import.meta.env.BASE_URL;
let cleanupItDxScrollEffect: (() => void) | null = null;
let cleanupItDxHeaderMenu: (() => void) | null = null;

function renderHeroSection(): string {
  return renderUnifiedHero({
    id: "it-dx-support",
    eyebrow: itDxSupportData.englishTitle,
    title: itDxSupportData.title,
    lead: itDxSupportData.lead,
    description: itDxSupportData.introduction,
    image: `${BASE}assets/service-dx.jpg`,
    imageAlt: "IT・DX支援のイメージ",
  });
}

function renderServicesSection(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} dx-services">
      <div class="${CONTENT_SHELL_CLASS} dx-content-shell">
        ${renderUnifiedSectionHeading("OUR SUPPORT", "企業の課題に合わせたIT・DX支援")}
        <div class="dx-service-grid">
          ${itDxSupportData.services
            .map(
              (service) => `
                <article class="dx-service-card fade-up opacity-0 translate-y-10">
                  <h3>${service.title}</h3>
                  <p>${service.description}</p>
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
    <section class="${PAGE_SECTION_CLASS} dx-closing">
      <div class="${CONTENT_SHELL_CLASS} dx-content-shell">
        <div class="dx-closing-panel fade-up opacity-0 translate-y-10">
          <p class="dx-eyebrow">CONSULTATION</p>
          <h2>課題の整理から、一緒に始めます。</h2>
          <p>${itDxSupportData.closing}</p>
          <a href="${BASE}#contact" class="btn-primary">お問い合わせ</a>
        </div>
      </div>
    </section>
  `;
}

export function renderItDxSupportPage(): () => void {
  cleanupItDxScrollEffect?.();
  cleanupItDxHeaderMenu?.();

  const app = document.querySelector<HTMLDivElement>("#app")!;
  app.innerHTML = `
    ${renderHeader(false)}
    ${renderHeroSection()}
    ${renderServicesSection()}
    ${renderClosingSection()}
    ${renderFooter()}
  `;

  cleanupItDxScrollEffect = createStandardPageScrollEffect();
  cleanupItDxHeaderMenu = initHeaderMobileMenu();

  return () => {
    cleanupItDxScrollEffect?.();
    cleanupItDxScrollEffect = null;
    cleanupItDxHeaderMenu?.();
    cleanupItDxHeaderMenu = null;
  };
}
