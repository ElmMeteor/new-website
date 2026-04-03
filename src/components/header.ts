// src/components/Header.ts
import { navItems } from "../data";

function renderNavLink(name: string, href: string): string {
  return `<a href="${href}" class="text-gray-300 hover:text-gold transition">${name}</a>`;
}

export function renderHeader(): string {
  return `
<header id="header" class="fixed top-0 w-full flex justify-between items-center px-10 py-6 z-50 transition bg-black/80 backdrop-blur-sm border-b border-gold/20">
  <div class="font-semibold tracking-widest text-gold text-sm md:text-base">KOKI INTERNATIONAL</div>
  <nav class="flex gap-8 text-sm">
    ${navItems.map((item) => renderNavLink(item.name, item.href)).join("")}
  </nav>
</header>
  `;
}
