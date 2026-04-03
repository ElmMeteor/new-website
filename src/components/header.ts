// src/components/header.ts
import { navItems, hero } from "../data";

const BASE = import.meta.env.BASE_URL;

export function renderHeader(): string {
  return `
<header id="header" class="fixed top-0 w-full z-50">
  <div class="header-inner max-w-7xl mx-auto flex items-center px-6 md:px-10">
    <a href="${BASE}#hero" class="header-logo flex items-center gap-2">
      <img src="${hero.logo}" alt="KOKI INTERNATIONAL" class="header-logo-img">
      <span class="header-logo-text">KOKI INTERNATIONAL</span>
    </a>
    <button
      id="headerMenuButton"
      class="header-menu-btn ml-auto md:hidden"
      type="button"
      aria-label="メニューを開く"
      aria-expanded="false"
      aria-controls="mobileNav"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav class="hidden md:flex items-center gap-4 ml-auto">
      ${navItems
        .slice(0, -1)
        .map(
          (item) =>
            `<a href="${item.href}" class="header-nav-link">${item.name}</a>`,
        )
        .join("")}
      <a href="${BASE}#contact" class="btn-primary header-contact-btn text-xs px-5 py-2">お問い合わせ</a>
    </nav>
  </div>
  <nav id="mobileNav" class="mobile-nav md:hidden" aria-label="モバイルナビゲーション">
    <div class="mobile-nav-panel">
      ${navItems
        .map(
          (item) =>
            `<a href="${item.href}" class="mobile-nav-link">${item.name}</a>`,
        )
        .join("")}
    </div>
  </nav>
</header>
  `;
}
