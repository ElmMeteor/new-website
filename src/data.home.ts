import type { Contact, NavItem, Project } from "./types/siteData";

const BASE = import.meta.env.BASE_URL;

export const hero = {
  title: "ITで、企業の未来をつくる。",
  image: `${BASE}assets/hero-it-team.jpg`,
  logo: `${BASE}assets/logo-hd.png`,
  slogan: "株式会社弘毅インターナショナルは、システム開発・IT人材・DX支援を通じて、お客様の業務効率化と事業成長をサポートします。",
};

export const vision = {
  title: "技術と人をつなぎ、未来のビジネスをつくる。",
  keywords: ["信頼", "技術", "挑戦"],
  paragraphs: [
    "社名の「弘毅」は、『論語』にある「士不可以不弘毅、任重而道遠」という言葉に由来しています。",
    "「広い心と強い意志を持ち、重い責任を担いながら、遠い道を歩み続ける」。",
    "この精神を会社経営の基本理念として、目の前の課題に誠実に向き合い、お客様から信頼される企業であり続けることを大切にしています。",
  ],
  image: `${BASE}assets/vision-technology.jpg`,
};

export const presidentMessage = {
  title: "技術の先にある、人と企業の未来へ。",
  paragraphs: [
    "株式会社弘毅インターナショナルは、設立以来、システム開発を中心に、国際ビジネスなど幅広い分野に取り組んでまいりました。",
    "IT技術は日々進化し、AIやデジタル化をはじめ、社会やビジネスを取り巻く環境は大きく変化しています。",
    "私たちは、こうした変化を成長の機会と捉え、社員一人ひとりの技術力と人間力を高めながら、お客様のニーズに応えるシステム開発・ITサービスを提供してまいります。",
    "また、日本と海外をつなぐ国際的な視点を大切にし、国籍や文化の違いを越えて、人と企業がともに成長できる環境づくりにも取り組んでいきます。",
    "会社の成長は、社員の成長であり、お客様や社会への貢献につながるものだと考えています。",
    "これからも「誠実」「信頼」「挑戦」を大切に、一歩一歩着実に前進し、社員、取引先、地域社会の皆様から必要とされる企業を目指してまいります。",
    "引き続き、皆様のご支援とご愛顧を賜りますよう、心よりお願い申し上げます。",
  ],
  signature: "代表取締役　翁　儀林",
};

export const works: Project[] = [
  {
    title: "システム開発事業",
    englishTitle: "SYSTEM DEVELOPMENT",
    description: "設計・開発から保守・運用、品質検証まで、お客様の業務に寄り添うシステムをご提供します。",
    items: ["Webシステム開発", "業務システム開発", "アプリケーション開発", "保守・運用", "システム改修", "テスト・品質検証"],
    image: `${BASE}assets/service-system.jpg`,
    link: `${BASE}#system-development`,
  },
  {
    title: "IT・DX支援",
    englishTitle: "IT / DX SUPPORT",
    description: "ITの活用によって業務を見直し、企業の継続的な成長と変革を支援します。",
    items: ["業務効率化", "DX導入支援", "ITコンサルティング", "AI活用支援", "クラウド活用", "データ活用"],
    image: `${BASE}assets/service-dx.jpg`,
    link: `${BASE}#it-dx-support`,
    reverse: true,
  },
  {
    title: "国際ビジネス",
    englishTitle: "GLOBAL BUSINESS",
    description: "日中を中心とした輸出入業務や国内流通を通じて、国境を越えたビジネスの架け橋となります。",
    image: `${BASE}assets/service-global.jpg`,
    link: `${BASE}#international-trade`,
  },
  {
    title: "リサイクル事業",
    englishTitle: "RECYCLING BUSINESS",
    lead: "PC・プリンターなどのIT機器を、次の価値へ。",
    description: "不要になったIT機器の回収・リユース・リサイクルと、HDD・SSDデータの物理破壊に対応します。",
    items: ["パソコン・ノートパソコン", "液晶モニター", "プリンター・複合機", "サーバー・ネットワーク機器", "周辺機器・携帯電話等"],
    image: `${BASE}assets/service-recycling.jpg`,
    link: `${BASE}#recycling-business`,
    reverse: true,
  },
];

export const navItems: NavItem[] = [
  { name: "HOME", href: `${BASE}#hero` },
  { name: "事業内容", href: `${BASE}#works` },
  { name: "会社概要", href: `${BASE}#company` },
  { name: "求人情報", href: `${BASE}#recruit` },
  { name: "お問い合わせ", href: `${BASE}#contact` },
];

export const companyOverview = {
  companyName: "株式会社弘毅インターナショナル",
  location: "福岡市博多区",
  ceo: "翁　儀林",
  established: "平成22年5月7日",
  capital: "500万円",
  phone: "092-686-8911",
  email: "info@koki-intl.jp",
  bankName: "西日本シティ銀行　千早支店",
  services: [
    "システム開発事業",
    "IT・DX支援事業",
    "国際貿易事業",
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
