// src/components/footer.ts
import { CONTENT_SHELL_CLASS } from "../utils/page.ts";

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const BASE = import.meta.env.BASE_URL;

const footerColumns: FooterSection[] = [
  {
    title: "SERVICE",
    links: [
      { label: "システム開発事業", href: `${BASE}#system-development` },
      { label: "国際貿易", href: `${BASE}#international-trade` },
      { label: "金融事業", href: `${BASE}#financial-business` },
      { label: "リサイクル事業", href: `${BASE}#recycling-business` },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "会社概要", href: `${BASE}#about` },
      { label: "経営理念", href: `${BASE}#about` },
    ],
  },
  {
    title: "RECRUIT",
    links: [{ label: "求人情報", href: `${BASE}#recruitment` }],
  },
  {
    title: "CONTACT",
    links: [{ label: "お問い合わせ", href: `${BASE}#contact` }],
  },
  {
    title: "INFORMATION",
    links: [{ label: "プライバシーポリシー", href: `${BASE}#privacy-policy` }],
  },
];

function renderFooterLinks(links: FooterLink[]): string {
  return `<ul class="space-y-2">${links
    .map(
      (link) =>
        `<li><a href="${link.href}" class="text-gray-500 hover:text-primary transition-colors text-sm">${link.label}</a></li>`,
    )
    .join("")}</ul>`;
}

export function renderFooter(): string {
  const [service, company, recruit, contact, information] = footerColumns;

  return `
<footer class="bg-gray-800 text-white pt-16 pb-8">
  <div class="${CONTENT_SHELL_CLASS}">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-12">
      <div class="sm:col-span-2 md:col-span-1">
        <p class="text-white font-bold text-sm mb-1">KOKI INTERNATIONAL</p>
        <p class="text-gray-400 text-xs mb-4">株式会社 弘毅インターナショナル</p>
      </div>
      <div>
        <h3 class="text-white font-semibold text-sm mb-4 tracking-wide">${service.title}</h3>
        ${renderFooterLinks(service.links)}
      </div>
      <div>
        <h3 class="text-white font-semibold text-sm mb-4 tracking-wide">${company.title}</h3>
        ${renderFooterLinks(company.links)}
        <h3 class="text-white font-semibold text-sm mt-6 mb-4 tracking-wide">${recruit.title}</h3>
        ${renderFooterLinks(recruit.links)}
      </div>
      <div>
        <h3 class="text-white font-semibold text-sm mb-4 tracking-wide">${contact.title}</h3>
        ${renderFooterLinks(contact.links)}
      </div>
      <div>
        <h3 class="text-white font-semibold text-sm mb-4 tracking-wide">${information.title}</h3>
        ${renderFooterLinks(information.links)}
      </div>
    </div>
    <div class="border-t border-gray-700 pt-6 text-center">
      <p class="text-gray-500 text-xs">Copyright © 2023 株式会社弘毅インターナショナル All Rights Reserved.</p>
    </div>
  </div>
</footer>
  `;
}
