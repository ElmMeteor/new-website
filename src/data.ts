export interface Project {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

// Hero 区域
export const hero = {
  title: "株式会社\n弘毅インターナショナル",
  image: "./src/assets/CompanyPhilosophy.svg",
  logo: "./src/assets/logo.svg",
};

// 公司理念（会社理念）
export const about = {
  title: "会社理念",
  paragraphs: [
    "広い器量と強い意志を持って、",
    "国際ビジネスの発展に貢献します。",
    "",
    "私たちは、革新的なソフトウェア開発と",
    "グローバルな視点での事業展開を通じて、",
    "お客様の成功と社会の発展に寄与します。",
    "",
    "「信頼は人から」をモットーに、",
    "お客様満足度No.1企業を目指します。",
    "",
    "世の為、人の為、",
    "幸せなれるように努めます。",
  ],
  image: "./src/assets/CompanyPhilosophy.svg",
};

// 事业内容（事業案内）
export const works: Project[] = [
  {
    title: "システム開発事業",
    description:
      "ソフトウェア開発、システム設計・開発・運用、SESサービス。クライアント様のニーズに見合うシステム設計・開発・運用等業務を行います。",
    image: "./src/assets/SystemDevelopmentBusiness.jpg",
  },
  {
    title: "国際貿易",
    description:
      "日中を中心とした国際貿易業務。国境線のないビジネスの展開で、日中の架橋になれるように力を注ぎます。",
    image: "./src/assets/ChinaJapanTrade.jpg",
    reverse: true,
  },
  {
    title: "金融事業",
    description:
      "金融サービス、投資関連事業。様々な課題や将来起こる問題に合わせたソリューションをご提案いたします。",
    image: "./src/assets/FinancialBusiness.jpg",
  },
  {
    title: "リサイクル事業",
    description:
      "希少金属資源のリサイクル、環境事業。情報セキュリティを確保された状態を保ち、安心して利用できる環境を提供しています。",
    image: "./src/assets/RecyclingBusiness.jpg",
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

// 会社情報（侧边栏）
export const companyInfo = {
  name: "株式会社 弘毅インターナショナル",
  nameEn: "KOKI INTERNATIONAL CO.,LTD",
  mission: [
    "会社経営していく上で",
    "広い器量と",
    "強い意志を持って、",
    "国際ビジネス",
    "を取り込んでいきます。",
  ],
  vision: ["世の為、", "人の為、", "幸せなれるように", "努めます。"],
};

// 导航菜单
export const navItems = [
  { name: "HOME", href: "#hero" },
  { name: "システム開発事業", href: "#works" },
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

// 推荐文章数据
export const recommendedArticles = [
  {
    title: "AIと生きる、「意味を可視化する文脈編集業」へ",
    date: "2025年6月18日",
    image: "https://via.placeholder.com/400x300?text=Article+1", // 替换为实际图片URL
    link: "#",
  },
  {
    title: "社長になって5年。一人ではつくれなかった、会社のかたち",
    date: "2025年5月1日",
    image: "https://via.placeholder.com/400x300?text=Article+2",
    link: "#",
  },
  {
    title: "デザインを飛躍させるためのコンセプトメイキング",
    date: "2023年11月10日",
    image: "https://via.placeholder.com/400x300?text=Article+3",
    link: "#",
  },
  {
    title: "傾聴して、「らしさ」をかたちにする",
    date: "2024年12月17日",
    image: "https://via.placeholder.com/400x300?text=Article+4",
    link: "#",
  },
  {
    title: "エルのブランディングは「らしさ」によって愛されること",
    date: "2024年9月13日",
    image: "https://via.placeholder.com/400x300?text=Article+5",
    link: "#",
  },
];

// 联系方式
export const contact = {
  title: "お問い合わせ",
  info: "ご質問やご相談がございましたら、お気軽にご連絡ください。",
  email: "info@koki-intl.jp",
  phone: "03-XXXX-XXXX",
  address: "〒000-0000 東京都千代田区",
};
