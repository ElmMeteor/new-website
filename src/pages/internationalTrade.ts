import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { internationalTradeData } from "../data";
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
let cleanupInternationalScrollEffect: (() => void) | null = null;
let cleanupInternationalHeaderMenu: (() => void) | null = null;

function renderHeroSection(): string {
  return renderUnifiedHero({
    id: "international-trade",
    eyebrow: "GLOBAL BUSINESS",
    title: internationalTradeData.title,
    lead: internationalTradeData.leadLines[0],
    description: internationalTradeData.leadLines[1],
    image: `${BASE}assets/service-global.jpg`,
    imageAlt: "国際貿易のイメージ",
  });
}

function renderServicesSection(): string {
  const services = [
    {
      title: "輸出販売・輸入販売",
      paragraphs: internationalTradeData.wholesaleParagraphs,
    },
    {
      title: "貿易コンサルティング",
      paragraphs: internationalTradeData.oemParagraphs,
    },
  ];

  return `
    <section class="${PAGE_SECTION_CLASS} dx-services">
      <div class="${CONTENT_SHELL_CLASS} dx-content-shell">
        ${renderUnifiedSectionHeading("OUR SERVICE", "日本と海外をつなぐ事業支援")}
        <div class="dx-service-grid unified-two-column-grid">
          ${services
            .map(
              (service) => `
                <article class="dx-service-card fade-up opacity-0 translate-y-10">
                  <h3>${service.title}</h3>
                  <div class="unified-card-copy">
                    ${service.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
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
    <section class="${PAGE_SECTION_CLASS} dx-closing">
      <div class="${CONTENT_SHELL_CLASS} dx-content-shell">
        <div class="dx-closing-panel fade-up opacity-0 translate-y-10">
          <p class="dx-eyebrow">OUR APPROACH</p>
          <h2>${internationalTradeData.closingTitle}</h2>
          <div class="unified-closing-copy">
            ${internationalTradeData.closingParagraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderInternationalTradePage(): () => void {
  cleanupInternationalScrollEffect?.();
  cleanupInternationalHeaderMenu?.();

  const app = document.querySelector<HTMLDivElement>("#app")!;
  app.innerHTML = `
    ${renderHeader(false)}
    ${renderHeroSection()}
    ${renderServicesSection()}
    ${renderClosingSection()}
    ${renderFooter()}
  `;

  cleanupInternationalScrollEffect = createStandardPageScrollEffect();
  cleanupInternationalHeaderMenu = initHeaderMobileMenu();

  return () => {
    cleanupInternationalScrollEffect?.();
    cleanupInternationalScrollEffect = null;
    cleanupInternationalHeaderMenu?.();
    cleanupInternationalHeaderMenu = null;
  };
}
