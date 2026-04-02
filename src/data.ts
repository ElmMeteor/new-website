export interface Project {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  link?: string;
}

// 统一 base
const BASE = import.meta.env.BASE_URL;

// Hero 区域
export const hero = {
  title: "株式会社\n弘毅インターナショナル",
  image: `${BASE}assets/CompanyPhilosophy.svg`,
  logo: `${BASE}assets/logo.svg`,
};

// 公司理念
export const about = {
  title: "会社理念",
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
  image: `${BASE}assets/CompanyPhilosophy.svg`,
};

// 事业内容
export const works: Project[] = [
  {
    title: "システム開発事業",
    description:
      "ソフトウェア開発、システムの設計・開発・運用、SESサービスを行っております。\nお客様のご要望に沿ったシステムをご提供いたします。",
    image: `${BASE}assets/SystemDevelopmentBusiness.jpg`,
    link: "/#system-development",
  },
  {
    title: "国際貿易",
    description:
      "日中を中心とした国際貿易業務を展開しております。\n輸出入業務や国内流通を通じて、国境を越えたビジネスの架橋となります。",
    image: `${BASE}assets/ChinaJapanTrade.jpg`,
    reverse: true,
  },
  {
    title: "金融事業",
    description:
      "金融サービスおよび投資関連事業を展開しております。\n国内外の投資支援や企業進出に関するコンサルティングを提供いたします。",
    image: `${BASE}assets/FinancialBusiness.jpg`,
  },
  {
    title: "リサイクル事業",
    description:
      "金属スクラップ等のリサイクル事業を展開しております。\n資源の有効活用を通じて、環境に配慮した事業活動を行っております。",
    image: `${BASE}assets/RecyclingBusiness.jpg`,
    reverse: true,
  },
];

// 求人情報（招聘信息）
export const recruitment = {
  title: "求人情報",
  items: [
    { date: "2022/10/14", title: "スタッフ募集情報", link: "#" },
    { date: "2022/10/14", title: "外国人留学生募集情報", link: "#" },
    { date: "2022/10/14", title: "正社員募集情報", link: "#" },
  ],
};

// 会社情報
export const companyInfo = {
  name: "株式会社 弘毅インターナショナル",
  nameEn: "KOKI INTERNATIONAL CO.,LTD",
  mission: [
    "会社経営していく上で",
    "広い器量と",
    "強い意志を持って",
    "国際ビジネスを取り込んでいきます。",
  ],
  vision: ["世の為", "人の為", "幸せなれるように努めます。"],
};

// 导航菜单
export const navItems = [
  { name: "HOME", href: "#hero" },
  { name: "システム開発事業", href: "#system-development" },
  { name: "国際貿易", href: "#works" },
  { name: "金融事業", href: "#works" },
  { name: "リサイクル事業", href: "#works" },
  { name: "求人情報", href: "#recruitment" },
  { name: "お問い合わせ", href: "#contact" },
];

// 底部导航
export const footerNavItems = [
  "システム開発事業",
  "国際貿易",
  "金融事業",
  "リサイクル事業",
  "求人情報",
  "お問い合わせ",
];

// 联系方式
export const contact = {
  title: "お問い合わせ",
  info: "ご質問やご相談がございましたら、お気軽にご連絡ください。",
  phone: "092-686-8911",
  address: "〒812-0012 福岡市博多区博多駅中央街8番1号\nJRJP博多ビル 3F",
  hours: "Mon-Fri 9:00－18:00",
};

// 在 data.ts 末尾添加

// 系统开发事业页面数据
export const systemDevelopment = {
  // 页面标题
  title: "システム開発事業",
  subtitle: "SERVICE",

  // 主视觉图片
  mainImage: `${BASE}assets/tesad.svg`,
  // mainImage: "http://koki-intl.jp/upload/images/20240702_153118.png",

  // 理念介绍（右对齐区域）
  vision: [
    "お客様の課題を解決するソフトウェア開発に注力しています。",
    "小規模ながらも迅速・柔軟に対応できる体制を整えています。",
    "日々の業務改善や効率化をサポートするシステムを提供します。",
    "社員一人ひとりの成長とチーム力を大切にしています。",
    "地域や社会への貢献も忘れず、利益の一部を社会活動に還元します。",
  ],

  // 服务项目
  services: [
    {
      title: "システム設計・開発・運用サポート",
      align: "left",
      content: [
        "お客様の要望に合わせて、システムの設計から開発、運用までサポートします。",
        "中小規模の案件でも迅速に対応できる柔軟な体制です。",
        "安心して利用できるシステム環境の提供を目指しています。",
      ],
      highlightLast: true,
    },
    {
      title: "業務改善コンサルティング",
      align: "right",
      content: [
        "現状の課題や運用上の問題点を整理し、改善提案を行います。",
        "シンプルで実現可能なソリューションに重点を置いています。",
      ],
      highlightLast: false,
    },
    {
      title: "ソフトウェア保守・運用支援",
      align: "left",
      content: [
        "既存システムの運用サポートやトラブル対応を行います。",
        "小規模チームならではの迅速な対応で、業務に支障を出さない運用を実現します。",
      ],
      highlightLast: false,
    },
  ],
};
