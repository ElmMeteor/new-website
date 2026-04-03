import "./style.css";
import { renderHomePage } from "./pages/home";
import { renderSystemDevelopmentPage } from "./pages/systemDevelopment";

const app = document.querySelector<HTMLDivElement>("#app")!;
let cleanupCurrentPage: (() => void) | null = null;

// 路由控制
function renderPage() {
  cleanupCurrentPage?.();
  cleanupCurrentPage = null;

  const hash = window.location.hash;

  if (hash === "#system-development") {
    cleanupCurrentPage = renderSystemDevelopmentPage();
  } else {
    cleanupCurrentPage = renderHomePage(app);
  }
}

// 监听 hash 变化
window.addEventListener("hashchange", renderPage);

// 初始渲染
renderPage();
