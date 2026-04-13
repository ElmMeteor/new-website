import type { Contact, NavItem, Project } from "./types/siteData";

const BASE = import.meta.env.BASE_URL;

export const hero = {
  title: "株式会社\n弘毅インターナショナル",
  image: `${BASE}assets/CompanyPhilosophy.jpg`,
  logo: `${BASE}assets/logo.png`,
  slogan:
    "互恵関係を築ける企業\n信頼・信用を基盤に世界と繋がる企業\n笑顔を大切にする企業",
};

export const about = {
  title: "",
  paragraphs: [
    "弊社のホームページをご覧いただき、誠にありがとうございます。",
    "弘毅インターナショナルは、「強い意志」と「広い心」をもって世界に挑戦するという想いを社名に込めております。",
    "私どもは、ITビジネスと国際貿易を軸に事業を展開しております。",
    "どれほど優れたシステムであっても、それを支えるのは「人」の力であり、企業は人なりと考えております。",
    "変化の激しい現代においては、ビジネスモデルだけでなく、",
    "人材の育成と企業文化の醸成こそが企業の価値を左右するものと認識しております。",
    "今後もお客様と社員を大切にし、信頼される企業であり続けるべく、努力を重ねてまいります。",
    "引き続き、皆様のご支援とご愛顧を賜りますよう、心よりお願い申し上げます。",
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
  { name: "会社概要", href: `${BASE}#company` },
  { name: "求人情報", href: `${BASE}#recruitment` },
  { name: "お問い合わせ", href: `${BASE}#contact` },
];

export const companyOverview = {
  companyName: "株式会社弘毅インターナショナル",
  location: "〒812-0012 福岡市博多区博多駅中央街8番1号 JRJP博多ビル 3F",
  ceo: "翁　儀林",
  established: "平成22年5月7日",
  capital: "500万円",
  phone: "092-686-8911",
  email: "info@koki-intl.jp",
  bankName: "西日本シティ銀行　千早支店",
  services: [
    "システム開発事業",
    "国際貿易事業",
    "国内・海外投資に関するコンサルティング事業",
    "リサイクル事業",
  ],
  partnerCompany: "株式会社華栄商事",
  partnerWebsite: "https://kaesyouji.com/",
};

export const contact: Contact = {
  title: "お問い合わせ",
  info: "ご質問やご相談がございましたら、お気軽にご連絡ください。",
  phone: "092-686-8911",
  address: "〒812-0012 福岡市博多区博多駅中央街8番1号\nJRJP博多ビル 3F",
  hours: "Mon-Fri 9:00－18:00",
};
