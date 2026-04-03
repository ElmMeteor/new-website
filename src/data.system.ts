import type { SystemDevelopmentData } from "./types/siteData";

const BASE = import.meta.env.BASE_URL;

export const systemDevelopment: SystemDevelopmentData = {
  title: "システム開発事業",
  subtitle: "SERVICE",
  mainImage: `${BASE}assets/tesad.svg`,
  vision: [
    "お客様の課題を解決するソフトウェア開発に注力しています。",
    "小規模ながらも迅速・柔軟に対応できる体制を整えています。",
    "日々の業務改善や効率化をサポートするシステムを提供します。",
    "社員一人ひとりの成長とチーム力を大切にしています。",
    "地域や社会への貢献も忘れず、利益の一部を社会活動に還元します。",
  ],
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
