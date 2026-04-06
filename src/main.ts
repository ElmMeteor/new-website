import "./style.css";
import { renderHomePage } from "./pages/home";
import { renderSystemDevelopmentPage } from "./pages/systemDevelopment";
import { renderRecruitmentPage } from "./pages/recruitment";
import { renderInternationalTradePage } from "./pages/internationalTrade";
import { renderFinancialBusinessPage } from "./pages/financialBusiness";
import { renderRecyclingBusinessPage } from "./pages/recyclingBusiness";
import { renderPrivacyPolicyPage } from "./pages/privacyPolicy";

const app = document.querySelector<HTMLDivElement>("#app")!;
let cleanupCurrentPage: (() => void) | null = null;

function scrollToHashTarget(hash: string): void {
  const targetId = hash.replace("#", "").trim();

  // Wait until the new page DOM is mounted, then align to the hash anchor.
  window.requestAnimationFrame(() => {
    if (!targetId) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ block: "start", behavior: "auto" });
      return;
    }

    // Fallback for unknown hashes: keep users at top instead of jumping to bottom.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
}

// 路由控制
function renderPage() {
  cleanupCurrentPage?.();
  cleanupCurrentPage = null;

  const hash = window.location.hash;

  if (hash === "#system-development") {
    cleanupCurrentPage = renderSystemDevelopmentPage();
  } else if (hash === "#international-trade") {
    cleanupCurrentPage = renderInternationalTradePage();
  } else if (hash === "#financial-business") {
    cleanupCurrentPage = renderFinancialBusinessPage();
  } else if (hash === "#recycling-business") {
    cleanupCurrentPage = renderRecyclingBusinessPage();
  } else if (hash === "#recruitment") {
    cleanupCurrentPage = renderRecruitmentPage();
  } else if (hash === "#privacy-policy") {
    cleanupCurrentPage = renderPrivacyPolicyPage();
  } else {
    cleanupCurrentPage = renderHomePage(app);
  }

  scrollToHashTarget(hash);
}

// 监听 hash 变化
window.addEventListener("hashchange", renderPage);

// 初始渲染
renderPage();
