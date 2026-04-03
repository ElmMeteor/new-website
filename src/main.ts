import "./style.css";
import { renderHomePage } from "./pages/home";
import { renderSystemDevelopmentPage } from "./pages/systemDevelopment";
import { renderRecruitmentPage } from "./pages/recruitment";
import { renderInternationalTradePage } from "./pages/internationalTrade";
import { renderFinancialBusinessPage } from "./pages/financialBusiness";
import { renderRecyclingBusinessPage } from "./pages/recyclingBusiness";

const app = document.querySelector<HTMLDivElement>("#app")!;
let cleanupCurrentPage: (() => void) | null = null;

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
  } else {
    cleanupCurrentPage = renderHomePage(app);
  }
}

// 监听 hash 变化
window.addEventListener("hashchange", renderPage);

// 初始渲染
renderPage();
