import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { recruitmentPageData } from "../data";
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
let cleanupRecruitmentScrollEffect: (() => void) | null = null;
let cleanupRecruitmentHeaderMenu: (() => void) | null = null;

function renderHeroSection(): string {
  return renderUnifiedHero({
    id: "recruitment",
    eyebrow: "RECRUIT",
    title: recruitmentPageData.title,
    lead: recruitmentPageData.noticeTitle,
    description: recruitmentPageData.noticeLines[0],
    image: `${BASE}assets/recruit-team.jpg`,
    imageAlt: "求人情報のイメージ",
  });
}

function renderNoticeSection(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} dx-closing recruitment-status-section">
      <div class="${CONTENT_SHELL_CLASS} dx-content-shell">
        <div class="dx-closing-panel fade-up opacity-0 translate-y-10">
          <p class="dx-eyebrow">NOW HIRING</p>
          <h2>現在募集中</h2>
          <div class="unified-closing-copy">
            ${recruitmentPageData.noticeLines.slice(1).map((line) => `<p>${line}</p>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderRecruitmentTable(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} dx-services unified-recruitment-section">
      <div class="${CONTENT_SHELL_CLASS} dx-content-shell">
        ${renderUnifiedSectionHeading("REQUIREMENTS", "募集情報")}
        <div class="unified-recruitment-table fade-up opacity-0 translate-y-10">
          ${recruitmentPageData.rows
            .map(
              (row) => `
                <div class="unified-recruitment-row">
                  <div class="unified-recruitment-label">${row.label}</div>
                  <div class="unified-recruitment-value">
                    ${row.values.map((value) => `<p>${value}</p>`).join("")}
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
        <div class="unified-page-cta fade-up opacity-0 translate-y-10">
          <a href="${BASE}#contact" class="btn-primary">${recruitmentPageData.inquiryLabel}</a>
        </div>
      </div>
    </section>
  `;
}

export function renderRecruitmentPage(): () => void {
  cleanupRecruitmentScrollEffect?.();
  cleanupRecruitmentHeaderMenu?.();

  const app = document.querySelector<HTMLDivElement>("#app")!;
  app.innerHTML = `
    ${renderHeader(false)}
    ${renderHeroSection()}
    ${renderNoticeSection()}
    ${renderRecruitmentTable()}
    ${renderFooter()}
  `;

  cleanupRecruitmentScrollEffect = createStandardPageScrollEffect();
  cleanupRecruitmentHeaderMenu = initHeaderMobileMenu();

  return () => {
    cleanupRecruitmentScrollEffect?.();
    cleanupRecruitmentScrollEffect = null;
    cleanupRecruitmentHeaderMenu?.();
    cleanupRecruitmentHeaderMenu = null;
  };
}
