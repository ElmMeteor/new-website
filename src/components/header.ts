// src/components/header.ts
import { navItems, hero } from "../data";
import { CONTENT_INSET_CLASS } from "../utils/page.ts";
import { isMobileViewport } from "../utils/scroll.ts";

const BASE = import.meta.env.BASE_URL;

export function renderHeader(isHomePage = false): string {
  const renderLogoImage = !isMobileViewport();
  const logoContent = `
    ${renderLogoImage ? `<img src="${hero.logo}" alt="KOKI INTERNATIONAL" class="header-logo-img">` : ""}
    <span class="header-logo-text">KOKI INTERNATIONAL</span>`;
  const logo = `<a href="${BASE}#hero" class="header-logo flex items-center gap-2"${
    isHomePage ? ' data-home-anchor="hero"' : ""
  }>${logoContent}</a>`;
  const desktopItems = navItems
    .slice(0, -1)
    .map((item) =>
      `<a href="${item.href}" class="header-nav-link"${
        isHomePage ? ` data-home-anchor="${item.href.split("#")[1]}"` : ""
      }>${item.name}</a>`,
    )
    .join("");
  const mobileItems = navItems
    .map((item) =>
      `<a href="${item.href}" class="mobile-nav-link"${
        isHomePage ? ` data-home-anchor="${item.href.split("#")[1]}"` : ""
      }>${item.name}</a>`,
    )
    .join("");

  return `
<header id="header" class="fixed top-0 w-full z-50 ${isHomePage ? "is-home" : "is-subpage"}">
  <div class="header-inner max-w-7xl mx-auto flex items-center ${CONTENT_INSET_CLASS}">
    ${logo}
    <button
      id="headerMenuButton"
      class="header-menu-btn ml-auto lg:hidden"
      type="button"
      aria-label="メニューを開く"
      aria-expanded="false"
      aria-controls="mobileNav"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav class="hidden lg:flex items-center gap-4 ml-auto">
      ${desktopItems}
      <a href="${BASE}#contact" class="btn-primary header-contact-btn text-xs px-5 py-2"${isHomePage ? ' data-home-anchor="contact"' : ""}>お問い合わせ</a>
    </nav>
  </div>
  <nav id="mobileNav" class="mobile-nav lg:hidden" aria-label="モバイルナビゲーション">
    <div class="mobile-nav-panel">
      ${mobileItems}
    </div>
  </nav>
</header>
  `;
}
