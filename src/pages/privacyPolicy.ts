import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { initHeaderMobileMenu } from "../utils/headerMenu";
import {
  CONTENT_SHELL_CLASS,
  PAGE_SECTION_CLASS,
  createStandardPageScrollEffect,
} from "../utils/page.ts";
import {
  renderUnifiedHero,
  renderUnifiedSectionHeading,
} from "../utils/unifiedPage.ts";

const BASE = import.meta.env.BASE_URL;
let cleanupPrivacyScrollEffect: (() => void) | null = null;
let cleanupPrivacyHeaderMenu: (() => void) | null = null;

const policySections = [
  {
    title: "第1条（個人情報）",
    content:
      "「個人情報」とは，個人情報保護法にいう「個人情報」を指し，氏名，メールアドレス等，特定の個人を識別できる情報をいいます。",
  },
  {
    title: "第2条（個人情報の収集方法）",
    content:
      "当社は，お問い合わせフォームの利用時に，氏名，メールアドレス等の個人情報をお預かりすることがあります。",
  },
  {
    title: "第3条（個人情報の利用目的）",
    content: `
      <p>当社が個人情報を収集・利用する目的は，以下のとおりです。</p>
      <ul><li>お問い合わせへの対応のため</li><li>必要に応じたご連絡のため</li><li>サービス向上・改善のため</li></ul>
    `,
  },
  {
    title: "第4条（個人情報の第三者提供）",
    content:
      "当社は，法令に基づく場合を除き，ユーザーの同意なく個人情報を第三者に提供することはありません。",
  },
  {
    title: "第5条（個人情報の安全管理）",
    content:
      "当社は，個人情報の漏えい，滅失または毀損の防止その他の安全管理のために必要かつ適切な措置を講じます。",
  },
  {
    title: "第6条（個人情報の開示・訂正・削除）",
    content:
      "ユーザーは，当社の保有する自己の個人情報について，開示，訂正または削除を求めることができます。",
  },
  {
    title: "第7条（プライバシーポリシーの変更）",
    content: "本ポリシーは，必要に応じて予告なく変更することがあります。",
  },
  {
    title: "第8条（お問い合わせ窓口）",
    content: `
      <p>本ポリシーに関するお問い合わせは，下記までお願いいたします。</p>
      <p>住所：〒812-0012 福岡市博多区博多駅中央街8番1号 JRJP博多ビル 3F</p>
      <p>社名：株式会社弘毅インターナショナル</p>
      <p>代表取締役：翁　儀林</p>
      <p>電話番号：092-686-8911</p>
    `,
  },
];

function renderHeroSection(): string {
  return renderUnifiedHero({
    id: "privacy-policy",
    eyebrow: "PRIVACY POLICY",
    title: "プライバシーポリシー",
    lead: "個人情報の適切な管理と保護に努めます。",
    description:
      "株式会社弘毅インターナショナル（以下，「当社」といいます。）は，本ウェブサイトにおけるユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。",
    image: `${BASE}assets/vision-technology.jpg`,
    imageAlt: "情報管理のイメージ",
    longTitle: true,
  });
}

function renderPolicySection(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} dx-services unified-policy-section">
      <div class="${CONTENT_SHELL_CLASS} dx-content-shell">
        ${renderUnifiedSectionHeading("POLICY", "個人情報保護方針")}
        <div class="unified-policy-grid">
          ${policySections
            .map(
              (section) => `
                <article class="unified-policy-card fade-up opacity-0 translate-y-10">
                  <h2>${section.title}</h2>
                  <div class="unified-policy-copy">${section.content}</div>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function renderPrivacyPolicyPage(): () => void {
  cleanupPrivacyScrollEffect?.();
  cleanupPrivacyHeaderMenu?.();

  const app = document.querySelector<HTMLDivElement>("#app")!;
  app.innerHTML = `
    ${renderHeader(false)}
    ${renderHeroSection()}
    ${renderPolicySection()}
    ${renderFooter()}
  `;

  cleanupPrivacyScrollEffect = createStandardPageScrollEffect();
  cleanupPrivacyHeaderMenu = initHeaderMobileMenu();

  return () => {
    cleanupPrivacyScrollEffect?.();
    cleanupPrivacyScrollEffect = null;
    cleanupPrivacyHeaderMenu?.();
    cleanupPrivacyHeaderMenu = null;
  };
}
