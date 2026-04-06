import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { initHeaderMobileMenu } from "../utils/headerMenu";
import {
  CONTENT_CARD_CLASS,
  CONTENT_SHELL_CLASS,
  PAGE_BANNER_OFFSET_CLASS,
  PAGE_SECTION_CLASS,
  createStandardPageScrollEffect,
} from "../utils/page.ts";

let cleanupPrivacyPolicyScrollEffect: (() => void) | null = null;
let cleanupPrivacyPolicyHeaderMenu: (() => void) | null = null;

function renderPrivacyPolicyPageBanner(): string {
  return `
    <section id="privacy-policy" class="${PAGE_BANNER_OFFSET_CLASS}" style="background: linear-gradient(150deg, #f6f8fb 0%, #eef2f7 100%);">
      <div class="${CONTENT_SHELL_CLASS} py-16 md:py-20 text-center fade-up opacity-0 translate-y-10">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">プライバシーポリシー</h1>
        <div class="heading-border justify-center"><div class="heading-border-inner"></div></div>
      </div>
    </section>
  `;
}

function renderPolicySection(): string {
  return `
    <section class="${PAGE_SECTION_CLASS} bg-white">
      <div class="${CONTENT_SHELL_CLASS}">
        <div class="fade-up opacity-0 translate-y-10 ${CONTENT_CARD_CLASS} max-w-4xl mx-auto">
          <div class="space-y-6 text-gray-700 leading-relaxed">
            <p>株式会社弘毅インターナショナル（以下，「当社」といいます。）は，本ウェブサイトにおけるユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。</p>

            <div>
              <h2 class="text-lg font-bold text-gray-800 mb-2">第1条（個人情報）</h2>
              <p>「個人情報」とは，個人情報保護法にいう「個人情報」を指し，氏名，メールアドレス等，特定の個人を識別できる情報をいいます。</p>
            </div>

            <div>
              <h2 class="text-lg font-bold text-gray-800 mb-2">第2条（個人情報の収集方法）</h2>
              <p>当社は，お問い合わせフォームの利用時に，氏名，メールアドレス等の個人情報をお預かりすることがあります。</p>
            </div>

            <div>
              <h2 class="text-lg font-bold text-gray-800 mb-2">第3条（個人情報の利用目的）</h2>
              <p class="mb-2">当社が個人情報を収集・利用する目的は，以下のとおりです。</p>
              <ul class="list-disc pl-6 space-y-1">
                <li>お問い合わせへの対応のため</li>
                <li>必要に応じたご連絡のため</li>
                <li>サービス向上・改善のため</li>
              </ul>
            </div>

            <div>
              <h2 class="text-lg font-bold text-gray-800 mb-2">第4条（個人情報の第三者提供）</h2>
              <p>当社は，法令に基づく場合を除き，ユーザーの同意なく個人情報を第三者に提供することはありません。</p>
            </div>

            <div>
              <h2 class="text-lg font-bold text-gray-800 mb-2">第5条（個人情報の安全管理）</h2>
              <p>当社は，個人情報の漏えい，滅失または毀損の防止その他の安全管理のために必要かつ適切な措置を講じます。</p>
            </div>

            <div>
              <h2 class="text-lg font-bold text-gray-800 mb-2">第6条（個人情報の開示・訂正・削除）</h2>
              <p>ユーザーは，当社の保有する自己の個人情報について，開示，訂正または削除を求めることができます。</p>
            </div>

            <div>
              <h2 class="text-lg font-bold text-gray-800 mb-2">第7条（プライバシーポリシーの変更）</h2>
              <p>本ポリシーは，必要に応じて予告なく変更することがあります。</p>
            </div>

            <div>
              <h2 class="text-lg font-bold text-gray-800 mb-2">第8条（お問い合わせ窓口）</h2>
              <p>本ポリシーに関するお問い合わせは，下記までお願いいたします。</p>
              <div class="mt-2 space-y-1 text-sm sm:text-base">
                <p>住所：〒812-0012 福岡市博多区博多駅中央街8番1号 JRJP博多ビル 3F</p>
                <p>社名：株式会社弘毅インターナショナル</p>
                <p>代表取締役：翁　儀林</p>
                <p>電話番号：092-686-8911</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderPrivacyPolicyPage(): () => void {
  cleanupPrivacyPolicyScrollEffect?.();
  cleanupPrivacyPolicyScrollEffect = null;
  cleanupPrivacyPolicyHeaderMenu?.();
  cleanupPrivacyPolicyHeaderMenu = null;

  const app = document.querySelector<HTMLDivElement>("#app")!;

  app.innerHTML = `
    ${renderHeader()}
    ${renderPrivacyPolicyPageBanner()}
    ${renderPolicySection()}
    ${renderFooter()}
  `;

  cleanupPrivacyPolicyScrollEffect = createStandardPageScrollEffect();
  cleanupPrivacyPolicyHeaderMenu = initHeaderMobileMenu();

  return () => {
    cleanupPrivacyPolicyScrollEffect?.();
    cleanupPrivacyPolicyScrollEffect = null;
    cleanupPrivacyPolicyHeaderMenu?.();
    cleanupPrivacyPolicyHeaderMenu = null;
  };
}
