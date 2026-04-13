import type { Contact, NavItem, Project } from "./types/siteData";

const BASE = import.meta.env.BASE_URL;

export const hero = {
  title: "株式会社\n弘毅インターナショナル",
  image: `${BASE}assets/CompanyPhilosophy.jpg`,
  logo: `${BASE}assets/logo.jpeg`,
};

export const about = {
  title: "",
  paragraphs: [
    "広い器量と強い意志を持って、",
    "国際ビジネスの発展に貢献します。",
    "",
    "私たちは、革新的なソフトウェア開発と",
    "グローバルな視点での事業展開を通じて",
    "お客様の成功と社会の発展に寄与します。",
    "",
    "「信頼は人から」をモットーに",
    "お客様満足度No.1企業を目指します。",
    "",
    "世の為、人の為",
    "幸せなれるように努めます。",
  ],
  image: `${BASE}assets/about.jpg`,
};

export const works: Project[] = [
  {
    title: "システム開発事業",
    description:
      "ソフトウェア開発、システムの設計・開発・運用、SESサービスを行っております。\nお客様のご要望に沿ったシステムをご提供いたします。",
    image: `${BASE}assets/SystemDevelopmentBusiness.jpg`,
    link: `${BASE}#works`,
  },
  {
    title: "国際貿易",
    description:
      "日中を中心とした国際貿易業務を展開しております。\n輸出入業務や国内流通を通じて、国境を越えたビジネスの架橋となります。",
    image: `${BASE}assets/ChinaJapanTrade.jpg`,
    link: `${BASE}#works`,
    reverse: true,
  },
  {
    title: "金融事業",
    description:
      "金融サービスおよび投資関連事業を展開しております。\n国内外の投資支援や企業進出に関するコンサルティングを提供いたします。",
    image: `${BASE}assets/FinancialBusiness.jpg`,
    link: `${BASE}#works`,
  },
  {
    title: "リサイクル事業",
    description:
      "金属スクラップ等のリサイクル事業を展開しております。\n資源の有効活用を通じて、環境に配慮した事業活動を行っております。",
    image: `${BASE}assets/RecyclingBusiness.jpg`,
    link: `${BASE}#works`,
    reverse: true,
  },
];

export const navItems: NavItem[] = [
  { name: "HOME", href: `${BASE}#hero` },
  { name: "事業内容", href: `${BASE}#works` },
  { name: "求人情報", href: `${BASE}#recruitment` },
  { name: "お問い合わせ", href: `${BASE}#contact` },
];

export const contact: Contact = {
  title: "お問い合わせ",
  info: "ご質問やご相談がございましたら、お気軽にご連絡ください。",
  phone: "092-686-8911",
  address: "〒812-0012 福岡市博多区博多駅中央街8番1号\nJRJP博多ビル 3F",
  hours: "Mon-Fri 9:00－18:00",
};
