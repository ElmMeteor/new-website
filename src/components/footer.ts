// src/components/Footer.ts
type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const footerColumns: FooterSection[] = [
  {
    title: "SERVICE",
    links: [
      { label: "システム開発事業", href: "/#system-development" },
      { label: "国際貿易", href: "#" },
      { label: "金融事業", href: "#" },
      { label: "リサイクル事業", href: "#" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "会社概要", href: "#" },
      { label: "社長ご挨拶", href: "#" },
      { label: "会社理念", href: "#" },
    ],
  },
  {
    title: "RECRUIT",
    links: [
      { label: "求人情報", href: "#" },
      { label: "スタッフ募集", href: "#" },
    ],
  },
  {
    title: "CONTACT",
    links: [{ label: "お問い合わせ", href: "#" }],
  },
  {
    title: "INFORMATION",
    links: [
      { label: "プライバシーポリシー", href: "#" },
      { label: "サイトマップ", href: "#" },
    ],
  },
];

function renderFooterLinks(links: FooterLink[], extraClass = ""): string {
  return `<ul class="space-y-2 ${extraClass}">${links
    .map(
      (link) =>
        `<li><a href="${link.href}" class="text-gray-400 hover:text-gold transition text-sm">${link.label}</a></li>`,
    )
    .join("")}</ul>`;
}

export function renderFooter(): string {
  const [service, company, recruit, contact, information] = footerColumns;

  return `
<div class="bg-black/95 border-t border-gold/20 py-12 px-10">
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      <div>
        <h3 class="text-gold font-bold text-lg mb-4 tracking-wide">${service.title}</h3>
        ${renderFooterLinks(service.links)}
      </div>
      <div>
        <h3 class="text-gold font-bold text-lg mb-4 tracking-wide">${company.title}</h3>
        ${renderFooterLinks(company.links)}
      </div>
      <div>
        <h3 class="text-gold font-bold text-lg mb-4 tracking-wide">${recruit.title}</h3>
        ${renderFooterLinks(recruit.links, "mb-6")}
        <h3 class="text-gold font-bold text-lg mb-4 tracking-wide">${contact.title}</h3>
        ${renderFooterLinks(contact.links)}
      </div>
      <div>
        <h3 class="text-gold font-bold text-lg mb-4 tracking-wide">${information.title}</h3>
        ${renderFooterLinks(information.links)}
      </div>
    </div>
    <div class="border-t border-gold/20 pt-8 text-center">
      <p class="text-gray-500 text-sm">Copyright © 2023 株式会社弘毅インターナショナル All Rights Reserved.</p>
    </div>
  </div>
</div>
  `;
}
