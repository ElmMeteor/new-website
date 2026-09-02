import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { systemDevelopment } from "../data";
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
let cleanupSystemScrollEffect: (() => void) | null = null;
let cleanupSystemHeaderMenu: (() => void) | null = null;

function renderHeroSection(): string {
  return renderUnifiedHero({
    id: "system-development",
    eyebrow: "SYSTEM DEVELOPMENT",
    title: systemDevelopment.title,
    lead: "開発から運用まで、業務に寄り添うシステムをご提供します。",
    description: systemDevelopment.vision[0],
    image: `${BASE}assets/service-system.jpg`,
    imageAlt: "システム開発事業のイメージ",
  });
}

function renderServicesSection(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} dx-services">
      <div class="${CONTENT_SHELL_CLASS} dx-content-shell">
        ${renderUnifiedSectionHeading("OUR SERVICE", "システム開発のサービス内容")}
        <div class="dx-service-grid">
          ${systemDevelopment.services
            .map(
              (service) => `
                <article class="dx-service-card fade-up opacity-0 translate-y-10">
                  <h3>${service.title}</h3>
                  <div class="unified-card-copy">
                    ${service.content.map((paragraph) => `<p>${paragraph}</p>`).join("")}
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

function renderStrengthSection(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} dx-closing">
      <div class="${CONTENT_SHELL_CLASS} dx-content-shell">
        <div class="dx-closing-panel fade-up opacity-0 translate-y-10">
          <p class="dx-eyebrow">OUR STRENGTH</p>
          <h2>迅速で柔軟な開発体制</h2>
          <div class="unified-closing-copy">
            ${systemDevelopment.vision.slice(1).map((paragraph) => `<p>${paragraph}</p>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderSystemDevelopmentPage(): () => void {
  cleanupSystemScrollEffect?.();
  cleanupSystemHeaderMenu?.();

  const app = document.querySelector<HTMLDivElement>("#app")!;
  app.innerHTML = `
    ${renderHeader(false)}
    ${renderHeroSection()}
    ${renderServicesSection()}
    ${renderStrengthSection()}
    ${renderFooter()}
  `;

  cleanupSystemScrollEffect = createStandardPageScrollEffect();
  cleanupSystemHeaderMenu = initHeaderMobileMenu();

  return () => {
    cleanupSystemScrollEffect?.();
    cleanupSystemScrollEffect = null;
    cleanupSystemHeaderMenu?.();
    cleanupSystemHeaderMenu = null;
  };
}
