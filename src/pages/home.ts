import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import {
  contact,
  companyOverview,
  hero,
  presidentMessage,
  vision,
  works,
} from "../data";
import {
  createScrollEffect,
  isMobileViewport,
  revealFadeUpElements,
  toggleHeaderScrolledState,
} from "../utils/scroll";
import { initHeaderMobileMenu } from "../utils/headerMenu";
import { CONTENT_SHELL_CLASS, renderSectionHeading } from "../utils/page.ts";

const BASE = import.meta.env.BASE_URL;

let cleanupHomeScrollEffect: (() => void) | null = null;
let cleanupHomeHeaderMenu: (() => void) | null = null;
let cleanupHomeAnchorNavigation: (() => void) | null = null;

const HOME_SECTION_CLASS = "py-16 md:py-24";

function renderHeroTitle(): string {
  return `<span>ITで、企業の</span><span><span class="koki-keyword">未来</span>をつくる。</span>`;
}

/* --- ヒーローセクション --- */
function renderHeroSection(): string {
  const renderImages = !isMobileViewport();

  return `
    <section id="hero" class="hero-section koki-hero bg-white relative overflow-hidden">
      <div class="koki-mobile-gold-flow" aria-hidden="true">
        <span class="koki-mobile-gold-curve koki-mobile-gold-curve-a"></span>
        <span class="koki-mobile-gold-curve koki-mobile-gold-curve-b"></span>
        <span class="koki-mobile-gold-curve koki-mobile-gold-curve-c"></span>
      </div>
      <div class="koki-hero-grid">
        <div class="hero-copy koki-hero-copy fade-up opacity-0 translate-y-10 home-hero-copy-reveal">
          <div class="hero-copy-panel">
            ${renderImages ? `<img src="${hero.logo}" alt="株式会社弘毅インターナショナル" class="koki-hero-logo select-none home-hero-logo-img" draggable="false">` : ""}
            <div class="koki-mobile-wordmark" aria-label="KOKI INTERNATIONAL">
              <span>KOKI</span>
              <small>INTERNATIONAL</small>
            </div>
            <p class="koki-eyebrow">KOKI INTERNATIONAL CO., LTD.</p>
            <h1 class="hero-text koki-hero-title">
              ${renderHeroTitle()}
            </h1>
            <div class="koki-accent-line"></div>
            <p class="koki-hero-slogan">${hero.slogan
                .split("\n")
                .map((line) => `<span class=\"block\">${line}</span>`)
                .join("")}</p>
          </div>
        </div>
        ${renderImages ? `
          <div class="koki-hero-media fade-up opacity-0 translate-y-10 home-hero-media-reveal">
            <img src="${hero.image}" alt="弘毅インターナショナルの企業理念" class="hero-bg">
          </div>` : ""}
      </div>
    </section>
  `;
}

/* --- OUR VISION --- */
function renderAboutSection(): string {
  const renderImages = !isMobileViewport();

  return `
    <section id="about" class="koki-vision ${HOME_SECTION_CLASS}">
      <div class="${CONTENT_SHELL_CLASS} koki-vision-grid">
        ${renderImages ? `
          <div class="koki-vision-image fade-up opacity-0 translate-y-10">
            <img src="${vision.image}" alt="弘毅の理念">
          </div>` : ""}
        <div class="koki-vision-copy fade-up opacity-0 translate-y-10">
          <p class="koki-eyebrow">OUR VISION</p>
          <h2>${vision.title}</h2>
          <div class="koki-vision-keywords">
            ${vision.keywords.map((word) => `<span>${word}</span>`).join("<i>×</i>")}
          </div>
          <blockquote>士不可以不弘毅、任重而道遠</blockquote>
          <div class="koki-body-copy">
            ${vision.paragraphs.map((p) => `<p>${p}</p>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

/* --- 事業内容（詳細リスト） --- */
function renderWorksSection(): string {
  const renderImages = !isMobileViewport();

  return `
    <section id="works" class="koki-services ${HOME_SECTION_CLASS}">
      <div class="${CONTENT_SHELL_CLASS}">
        <div class="koki-section-intro fade-up opacity-0 translate-y-10">
          <p class="koki-eyebrow">OUR SERVICES</p>
          <h2>人と企業、そして世界を結ぶ事業</h2>
          <p>信頼と技術を基盤に、四つの分野からお客様の未来を支えます。</p>
        </div>
        <div class="koki-service-grid home-works-list">
          ${works
            .map(
              (work, i) => `
            <article class="koki-service-card work-item opacity-0 translate-y-10">
                ${renderImages ? `
                  <div class="koki-service-image work-img">
                    <img src="${work.image}" alt="${work.title}" class="work-media-image">
                  </div>` : ""}
                <div class="koki-service-copy home-work-text-reveal">
                  <span>${work.englishTitle ?? `SERVICE 0${i + 1}`}</span>
                  <h3>${work.title}</h3>
                  ${work.lead ? `<h4>${work.lead}</h4>` : ""}
                  <p>${work.description}</p>
                  ${work.items ? `<ul>${work.items.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
                </div>
            </article>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

/* --- 会社概要 --- */
function renderCompanyOverviewSection(): string {
  return `
    <section id="company" class="koki-company ${HOME_SECTION_CLASS}">
      <div class="${CONTENT_SHELL_CLASS} koki-company-grid">
        <div class="fade-up opacity-0 translate-y-10">
          <p class="koki-eyebrow">COMPANY</p>
          <h2 class="koki-company-name"><span>株式会社</span><span>弘毅インターナショナル</span></h2>
          <p class="koki-company-en">KOKI INTERNATIONAL CO., LTD.</p>
        </div>
        <dl class="koki-company-list fade-up opacity-0 translate-y-10">
          <div><dt>所在地</dt><dd>${companyOverview.location}</dd></div>
          <div><dt>設立</dt><dd>2010年5月7日</dd></div>
          <div><dt>代表取締役</dt><dd>${companyOverview.ceo}</dd></div>
          <div><dt>資本金</dt><dd>${companyOverview.capital}</dd></div>
          <div><dt>事業内容</dt><dd>システム開発、IT・DX支援、国際ビジネス、リサイクル業</dd></div>
        </dl>
      </div>
    </section>
  `;
}

/* --- 社長メッセージ --- */
function renderMessageSection(): string {
  return `
    <section id="message" class="koki-message ${HOME_SECTION_CLASS}">
      <div class="${CONTENT_SHELL_CLASS} koki-message-inner">
        <div class="koki-message-heading fade-up opacity-0 translate-y-10">
          <p class="koki-eyebrow">MESSAGE</p>
          <p class="koki-section-jp">社長メッセージ</p>
          <h2><span>技術の先にある、</span><span>人と企業の<span class="koki-keyword">未来</span>へ。</span></h2>
          <div class="koki-message-line" aria-hidden="true"></div>
        </div>
        <div class="koki-message-copy koki-message-letter fade-up opacity-0 translate-y-10">
          ${presidentMessage.paragraphs.map((p) => `<p>${p}</p>`).join("")}
          <p class="koki-message-signature">${presidentMessage.signature}</p>
        </div>
      </div>
    </section>`;
}

/* --- 採用導線 --- */
function renderRecruitSection(): string {
  const renderImages = !isMobileViewport();

  return `
    <section id="recruit" class="koki-recruit">
      <div class="koki-recruit-copy fade-up opacity-0 translate-y-10">
        <p class="koki-eyebrow">RECRUIT</p>
        <h2><span>技術で<span class="koki-keyword">未来</span>をつくる仲間を</span><span>募集しています。</span></h2>
        <p>経験者・未経験者、そして外国人IT人材まで。ともに学び、成長できる仲間を求めています。</p>
        <div class="koki-recruit-tags"><span>エンジニア</span><span>システム開発</span><span>未経験者</span><span>経験者</span><span>外国人IT人材</span></div>
        <a href="${BASE}#recruitment" class="btn-primary">採用情報を見る</a>
      </div>
      ${renderImages ? `<div class="koki-recruit-image"><img src="${BASE}assets/recruit-team.jpg" alt="採用情報"></div>` : ""}
    </section>
  `;
}

/* --- お問い合わせ --- */
function renderContactSection(): string {
  return `
    <section id="contact" class="${HOME_SECTION_CLASS} bg-gray-50">
      <div class="${CONTENT_SHELL_CLASS}">
        ${renderSectionHeading(contact.title, "Contact")}
        <div class="mt-8 flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-8 w-full max-w-5xl mx-auto">
          <div class="fade-up opacity-0 translate-y-10 w-full order-1 md:order-none">
            <p class="text-gray-600 leading-relaxed mb-8">${contact.info}</p>
            <div class="space-y-4 text-left mb-8">
              <div class="flex items-start gap-4">
                <span class="text-primary font-semibold w-20 text-sm flex-shrink-0">TEL</span>
                <span class="text-gray-700">${contact.phone}</span>
              </div>
              <div class="flex items-start gap-4">
                <span class="text-primary font-semibold w-20 text-sm flex-shrink-0">ADDRESS</span>
                <span class="text-gray-700 whitespace-pre-line text-sm">${contact.address}</span>
              </div>
              <div class="flex items-start gap-4">
                <span class="text-primary font-semibold w-20 text-sm flex-shrink-0">HOURS</span>
                <span class="text-gray-700 text-sm">${contact.hours}</span>
              </div>
            </div>
            <!-- 地図 -->
            <div class="rounded-2xl overflow-hidden shadow-sm border border-gray-200 w-full h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.2613598822777!2d130.41774732607476!3d33.58811926672321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354191b85b30aa53%3A0x223d7db18c549acb!2s8-1%20Hakataekich%C5%AB%C5%8Dgai%2C%20Hakata%20Ward%2C%20Fukuoka%2C%20812-0012!5e0!3m2!1szh-CN!2sjp!4v1775205669864!5m2!1szh-CN!2sjp" 
                width="100%" 
                height="100%" 
                class="home-map-iframe" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div class="fade-up opacity-0 translate-y-10 bg-white rounded-2xl p-8 sm:p-10 md:p-8 shadow-sm border border-gray-200 w-full order-2 md:order-none home-contact-form-reveal">            <h3 class="text-2xl sm:text-2xl md:text-lg font-bold text-gray-800 mb-6">
              お問い合わせフォーム
            </h3>
            <form id="contact-form" class="space-y-6 md:space-y-4">
              <input type="hidden" name="_language" value="ja">
              <input type="hidden" name="_subject" value="お問い合わせ">

              <div>
                <label class="block text-base md:text-sm text-gray-600 mb-2 md:mb-1">
                  会社名 <span class="text-red-400">*</span>
                </label>
                <input type="text" name="company" id="contact-company"
                  class="w-full border border-gray-300 rounded px-4 py-3.5 md:py-2 text-base md:text-sm focus:outline-none focus:border-primary"
                  placeholder="例：株式会社○○" required>
              </div>
              <div>
                <label class="block text-base md:text-sm text-gray-600 mb-2 md:mb-1">
                  お名前 <span class="text-red-400">*</span>
                </label>
                <input type="text" name="name" id="name"
                  class="w-full border border-gray-300 rounded px-4 py-3.5 md:py-2 text-base md:text-sm focus:outline-none focus:border-primary"
                  placeholder="例：山田 太郎" required>
              </div>
              <div>
                <label class="block text-base md:text-sm text-gray-600 mb-2 md:mb-1">
                  メールアドレス <span class="text-red-400">*</span>
                </label>
                <input type="email" name="email" id="email"
                  class="w-full border border-gray-300 rounded px-4 py-3.5 md:py-2 text-base md:text-sm focus:outline-none focus:border-primary"
                  placeholder="例：example@mail.com" required>
              </div>
              <div>
                <label class="block text-base md:text-sm text-gray-600 mb-2 md:mb-1">
                  電話番号
                </label>
                <input type="tel" name="phone" id="phone"
                  class="w-full border border-gray-300 rounded px-4 py-3.5 md:py-2 text-base md:text-sm focus:outline-none focus:border-primary"
                  placeholder="例：092-000-0000">
              </div>
              <div>
                <label class="block text-base md:text-sm text-gray-600 mb-2 md:mb-1">
                  お問い合わせ内容
                </label>
                <textarea name="message" id="contact-message" rows="5"
                  class="w-full border border-gray-300 rounded px-4 py-3.5 md:py-2 text-base md:text-sm focus:outline-none focus:border-primary resize-none"
                  placeholder="ご相談内容をご記入ください"></textarea>
              </div>
              <div class="pt-2">
                <label class="inline-flex items-start gap-2 text-base md:text-sm text-gray-700">
                  <input
                    type="checkbox"
                    id="privacy-consent"
                    name="privacyConsent"
                    value="agreed"
                    class="mt-1 h-5 w-5 md:h-4 md:w-4 rounded border-gray-300 text-primary"
                    required
                  >
                  <span>
                    <span class="text-primary">プライバシーポリシー</span>
                    に同意します
                  </span>
                </label>
              </div>
              <button type="submit"
                class="btn-primary w-full justify-center text-base md:text-sm py-3.5 md:py-2">
                送信する
              </button>
            </form>
            <div id="form-status" class="mt-4 text-sm hidden"></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function initHomeAnchorNavigation(): () => void {
  const anchors = Array.from(
    document.querySelectorAll<HTMLAnchorElement>("a[href*='#']"),
  );
  const listeners: Array<{ anchor: HTMLAnchorElement; handler: (event: MouseEvent) => void }> = [];

  anchors.forEach((anchor) => {
    const targetId = anchor.hash.replace("#", "").trim();
    const target = targetId ? document.getElementById(targetId) : null;
    if (!target) return;

    const handler = (event: MouseEvent) => {
      event.preventDefault();
      const header = document.getElementById("header");
      const headerHeight = header?.getBoundingClientRect().height ?? 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      window.history.pushState(null, "", `#${targetId}`);
      window.scrollTo({
        top: Math.max(0, targetTop - headerHeight - 12),
        behavior: reduceMotion ? "auto" : "smooth",
      });
    };

    anchor.addEventListener("click", handler);
    listeners.push({ anchor, handler });
  });

  return () => {
    listeners.forEach(({ anchor, handler }) => {
      anchor.removeEventListener("click", handler);
    });
  };
}

/* --- スクロールエフェクト初期化 --- */
function initHomeScrollEffects(): void {
  const header = document.getElementById("header");
  const heroBg = document.querySelector<HTMLElement>(".hero-bg");
  const workImages = document.querySelectorAll<HTMLElement>(".work-img");
  const pendingFadeItems = new Set(
    document.querySelectorAll<HTMLElement>(".fade-up, .work-item"),
  );
  const enableParallax = !isMobileViewport();

  const revealPendingItems = (viewportHeight: number) => {
    const revealedItems: HTMLElement[] = [];

    pendingFadeItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < viewportHeight * 0.85) {
        item.classList.remove("opacity-0", "translate-y-10");
        item.classList.add("opacity-100", "translate-y-0");
        revealedItems.push(item);
      }
    });

    revealedItems.forEach((item) => pendingFadeItems.delete(item));
  };

  cleanupHomeScrollEffect = createScrollEffect(
    ({ scrollY, viewportHeight }) => {
      toggleHeaderScrolledState(header, scrollY);

      if (enableParallax && heroBg) {
        heroBg.style.transform = `translateY(${scrollY * 0.1}px) scale(1.05)`;
      }

      if (enableParallax) {
        workImages.forEach((image) => {
          const offset = image.getBoundingClientRect().top + scrollY;
          image.style.transform = `translateY(${(scrollY - offset) * 0.15}px)`;
        });
      }

      revealPendingItems(viewportHeight);
      const heroText = document.querySelector<HTMLElement>(".hero-text");
      if (heroText) {
        revealFadeUpElements([heroText], viewportHeight);
      }
    },
  );
}

// AJAXでフォームを送信（ページ遷移なし）
function initContactFormHandler(): void {
  setTimeout(() => {
    const form = document.getElementById("contact-form");
    if (!form) return;

    // 型アサーション: TypeScriptにフォーム要素であることを伝える
    const formElement = form as HTMLFormElement;

    formElement.addEventListener("submit", async function (event) {
      event.preventDefault();

      const statusDiv = document.getElementById("form-status");
      const submitBtn = formElement.querySelector('button[type="submit"]');
      const originalText = submitBtn?.textContent || "送信する";

      // ========== 入力値の取得 ==========
      const company =
        (
          document.getElementById("contact-company") as HTMLInputElement
        )?.value.trim() || "";
      const name =
        (document.getElementById("name") as HTMLInputElement)?.value.trim() ||
        "";
      const email =
        (document.getElementById("email") as HTMLInputElement)?.value.trim() ||
        "";
      const phone =
        (document.getElementById("phone") as HTMLInputElement)?.value.trim() ||
        "";
      const isPrivacyConsentChecked =
        (document.getElementById("privacy-consent") as HTMLInputElement)
          ?.checked || false;

      // ========== 1. 必須項目チェック ==========
      if (!company || !name || !email) {
        if (statusDiv) {
          statusDiv.classList.remove("hidden");
          statusDiv.textContent =
            "会社名、お名前、メールアドレスは必須項目です。";
          statusDiv.className = "mt-4 text-sm text-red-600";
          setTimeout(() => statusDiv.classList.add("hidden"), 3000);
        }
        return;
      }

      // ========== 2. メール形式チェック ==========
      const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
      if (!emailRegex.test(email)) {
        if (statusDiv) {
          statusDiv.classList.remove("hidden");
          statusDiv.textContent =
            "有効なメールアドレスを入力してください。（例: example@mail.com）";
          statusDiv.className = "mt-4 text-sm text-red-600";
          setTimeout(() => statusDiv.classList.add("hidden"), 3000);
        }
        return;
      }

      // ========== 3. 電話番号形式チェック（日本の携帯/固定電話） ==========
      // 日本の電話形式: 0XX-XXXX-XXXX または 0XXXXXXXXXX
      const phoneRegex = /^0\d{1,4}-\d{1,4}-\d{4}$|^0\d{9,10}$/;
      if (phone && !phoneRegex.test(phone)) {
        if (statusDiv) {
          statusDiv.classList.remove("hidden");
          statusDiv.textContent =
            "有効な電話番号を入力してください。（例: 092-000-0000 または 09012345678）";
          statusDiv.className = "mt-4 text-sm text-red-600";
          setTimeout(() => statusDiv.classList.add("hidden"), 3000);
        }
        return;
      }

      // ========== 4. プライバシーポリシー同意確認 ==========
      if (!isPrivacyConsentChecked) {
        if (statusDiv) {
          statusDiv.classList.remove("hidden");
          statusDiv.textContent =
            "送信前にプライバシーポリシーへの同意が必要です。";
          statusDiv.className = "mt-4 text-sm text-red-600";
          setTimeout(() => statusDiv.classList.add("hidden"), 3000);
        }
        return;
      }

      // 送信中の表示
      if (statusDiv) {
        statusDiv.classList.remove("hidden");
        statusDiv.textContent = "送信中...";
        statusDiv.className = "mt-4 text-sm text-blue-600";
      }
      if (submitBtn) submitBtn.textContent = "送信中...";

      // フォームデータの取得
      const formData = new FormData(formElement);
      formData.append("_next", "");

      try {
        const response = await fetch("https://formspree.io/f/xqegyzrb", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          if (statusDiv) {
            statusDiv.textContent = "送信完了！ありがとうございます。";
            statusDiv.className = "mt-4 text-sm text-green-600";
          }
          formElement.reset();
        } else {
          const errorData = await response.json();
          if (statusDiv) {
            statusDiv.textContent =
              errorData.error || "送信に失敗しました。もう一度お試しください。";
            statusDiv.className = "mt-4 text-sm text-red-600";
          }
        }
      } catch (error) {
        if (statusDiv) {
          statusDiv.textContent =
            "ネットワークエラー。接続を確認して再試行してください。";
          statusDiv.className = "mt-4 text-sm text-red-600";
        }
      } finally {
        if (submitBtn) submitBtn.textContent = originalText;
        setTimeout(() => {
          if (statusDiv) statusDiv.classList.add("hidden");
        }, 5000);
      }
    });
  }, 100);
}

// renderHomePage 内で初期化
export function renderHomePage(app: HTMLDivElement): () => void {
  cleanupHomeScrollEffect?.();
  cleanupHomeScrollEffect = null;
  cleanupHomeHeaderMenu?.();
  cleanupHomeHeaderMenu = null;
  cleanupHomeAnchorNavigation?.();
  cleanupHomeAnchorNavigation = null;

  app.innerHTML = `
    ${renderHeader(true)}
    ${renderHeroSection()}
    ${renderWorksSection()}
    ${renderAboutSection()}
    ${renderMessageSection()}
    ${renderCompanyOverviewSection()}
    ${renderRecruitSection()}
    ${renderContactSection()}
    ${renderFooter()}
  `;

  initHomeScrollEffects();
  cleanupHomeHeaderMenu = initHeaderMobileMenu();
  cleanupHomeAnchorNavigation = initHomeAnchorNavigation();
  initContactFormHandler();

  return () => {
    cleanupHomeScrollEffect?.();
    cleanupHomeScrollEffect = null;
    cleanupHomeHeaderMenu?.();
    cleanupHomeHeaderMenu = null;
    cleanupHomeAnchorNavigation?.();
    cleanupHomeAnchorNavigation = null;
  };
}
