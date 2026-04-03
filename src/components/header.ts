// src/components/header.ts
import { navItems, hero } from "../data";

export function renderHeader(): string {
  return `
<header id="header" class="fixed top-0 w-full z-50">
  <div class="header-inner max-w-7xl mx-auto flex items-center px-6 md:px-10">
    <a href="#hero" class="header-logo flex items-center gap-2">
      <img src="${hero.logo}" alt="KOKI INTERNATIONAL" class="header-logo-img">
      <span class="header-logo-text">KOKI INTERNATIONAL</span>
    </a>
    <nav class="hidden md:flex items-center gap-4 ml-auto">
      ${navItems
        .slice(0, -1)
        .map(
          (item) =>
            `<a href="${item.href}" class="header-nav-link">${item.name}</a>`,
        )
        .join("")}
      <a href="#contact" class="btn-primary header-contact-btn text-xs px-5 py-2">お問い合わせ</a>
    </nav>
  </div>
</header>
  `;
}
