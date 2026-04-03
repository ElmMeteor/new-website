// src/components/footer.ts
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
      { label: "国際貿易", href: "#works" },
      { label: "金融事業", href: "#works" },
      { label: "リサイクル事業", href: "#works" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "会社概要", href: "#about" },
      { label: "経営理念", href: "#about" },
    ],
  },
  {
    title: "RECRUIT",
    links: [{ label: "求人情報", href: "#recruitment" }],
  },
  {
    title: "CONTACT",
    links: [{ label: "お問い合わせ", href: "#contact" }],
  },
  {
    title: "INFORMATION",
    links: [
      { label: "プライバシーポリシー", href: "#" },
      { label: "サイトマップ", href: "#" },
    ],
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
  <div class="w-full px-6 md:px-10">
    <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
      <div class="col-span-2 md:col-span-1">
        <p class="text-white font-bold text-sm mb-1">KOKI INTERNATIONAL</p>
        <p class="text-gray-400 text-xs mb-4">株式会社 弘毅インターナショナル</p>
        <p class="text-gray-500 text-xs leading-relaxed">人・物・情報・技術を<br>国際的につなぐ</p>
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
