import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { about, contact, companyOverview, hero, works } from "../data";
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

const HOME_SECTION_CLASS = "py-16 md:py-24";

function renderHeroTitle(): string {
  return hero.title
    .split("\n")
    .map((line, index) => {
      return `<span class="block text-primary text-lg md:text-2xl ${
        index === 1 ? "whitespace-nowrap" : ""
      }">${line}</span>`;
    })
    .join("");
}

/* --- ヒーローセクション --- */
function renderHeroSection(): string {
  return `
    <section id="hero" class="hero-section flex items-center bg-white relative overflow-visible md:pt-[90px]">
      <div class="relative z-10 ${CONTENT_SHELL_CLASS} pb-0 md:py-20">
        <div class="hero-stage relative">
          <div class="grid items-center gap-0 md:grid-cols-[1fr_2fr] md:gap-0">
            <div class="hidden md:block"></div>
            <div class="relative fade-up opacity-0 translate-y-10" style="transition-delay: 0.08s">
              <div class="hero-media relative w-full md:ml-auto overflow-visible">
                <img src="${hero.image}" alt="KOKI INTERNATIONAL" class="hero-bg absolute inset-x-0 w-full object-cover rounded-[1.5rem] shadow-lg">
              </div>
            </div>
          </div>
          <div class="hero-copy fade-up opacity-0 translate-y-10 absolute inset-x-0 bottom-0 z-20 text-left md:left-8 lg:left-10 md:right-auto md:bottom-auto md:top-[46%] md:-translate-y-1/2 md:w-[60%] lg:w-[55%]" style="transition-delay: 0.14s">
              <div class="hero-copy-panel px-5 pt-12 pb-5 sm:px-6 sm:pt-14 sm:pb-6 md:px-0 md:py-0">
              <div class="flex flex-col items-start mb-3">
                <img src="${hero.logo}" alt="KOKI LOGO" class="h-32 md:h-44 mb-4 select-none" style="user-drag: none;" draggable="false">
                <p class="text-primary text-base md:text-lg font-semibold tracking-widest mb-3">KOKI INTERNATIONAL CO., LTD</p>
                <h1 class="hero-text font-bold text-gray-800 leading-[1.08] whitespace-normal drop-shadow-[0_3px_12px_rgba(255,255,255,0.55)] text-[clamp(2.2rem,6.4vw,5.3rem)]">
                  ${renderHeroTitle()}
                </h1>
              </div>
              <div class="flex justify-start mt-4 mb-4">
                <div class="w-20 h-[3px] bg-[#b8922a] rounded"></div>
              </div>
              <p class="text-gray-600 text-lg md:text-2xl leading-relaxed max-w-xl">${hero.slogan
                .split("\n")
                .map((line) => `<span class=\"block\">${line}</span>`)
                .join("")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* --- 社長ご挨拶 --- */
function renderAboutSection(): string {
  return `
    <section id="about" class="pt-6 pb-16 md:py-24 bg-white relative overflow-hidden">
      <div class="${CONTENT_SHELL_CLASS}">
        
        <!-- タイトル -->
        <div class="mb-8 fade-up opacity-0 translate-y-10">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide about-title">
            社長挨拶
          </h2>
          <p class="text-gray-400 text-sm mt-3">President's Message</p>
        </div>

        <div class="grid md:grid-cols-[auto_1fr] gap-10 items-start">

          <!-- 左：文章 -->
          <div class="fade-up opacity-0 translate-y-10">
            <div class="about-text space-y-4">
              ${about.paragraphs
                .map((p) =>
                  p === "" ? `<div class="h-2"></div>` : `<p>${p}</p>`,
                )
                .join("")}
            </div>
          </div>

          <!-- 右：背景＋論語 -->
          <div class="fade-up opacity-0 translate-y-10 w-full relative" style="transition-delay:0.08s">

            <!-- 背景画像 -->
            <div class="absolute inset-0 z-0 overflow-hidden rounded-2xl">
              <img src="${about.image}" class="w-full h-full object-cover" />
            </div>

            <!-- 論語カード -->
            <div class="relative z-10 flex items-center justify-center h-full py-10">
              <div class="about-quote-card-container">
                <div class="text-primary text-5xl font-bold mb-4" style="font-family: serif;">"</div>
                <p class="italic leading-loose mb-4 whitespace-nowrap">士不可以不弘毅、任重而道遠</p>
                <p class="text-primary text-sm mb-6">— 論語 —</p>
                <div class="border-t border-gray-200 pt-6">
                  <div class="text-primary text-2xl font-bold mb-2" style="font-family: serif;">弘毅</div>
                  <p class="text-gray-500 text-xs tracking-widest">KO · KI</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  `;
}

/* --- 事業内容（詳細リスト） --- */
function renderWorksSection(): string {
  return `
    <section id="works" class="${HOME_SECTION_CLASS} bg-gray-50">
      <div class="${CONTENT_SHELL_CLASS}">
        ${renderSectionHeading("事業内容", "Services")}
        <div class="space-y-14 mt-8 md:space-y-20">
          ${works
            .map(
              (work, i) => `
            <div class="grid items-center gap-8 md:grid-cols-2 md:gap-12 work-item opacity-0 translate-y-10 ${work.reverse ? "md:[&>:first-child]:order-2 md:[&>:last-child]:order-1" : ""}">
              <div class="work-img overflow-hidden rounded-xl shadow-md">
                <img src="${work.image}" alt="${work.title}" class="work-media-image w-full h-[220px] sm:h-64 object-cover transition-transform duration-500">
              </div>
              <div class="fade-up opacity-0 translate-y-10" style="transition-delay: ${i * 0.05}s">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-10 h-0.5 bg-primary"></div>
                  <span class="text-primary text-sm font-semibold tracking-wider">SERVICE 0${i + 1}</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-4">
                  ${work.title}
                </h3>
                <p class="text-gray-600 leading-relaxed whitespace-pre-line">${work.description}</p>
              </div>
            </div>
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
    <section id="company" class="py-12 md:py-16 bg-white">
      <div class="${CONTENT_SHELL_CLASS}">
        ${renderSectionHeading("会社概要", "Company Overview")}
        <div class="fade-up opacity-0 translate-y-10 mt-8 md:mt-10">
          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <tbody>
                <tr>
                  <th class="border-b-2 border-primary bg-white px-5 py-4 text-left font-semibold text-gray-800 w-32">会社名</th>
                  <td class="border-b border-gray-200 px-5 py-4 text-gray-700">${companyOverview.companyName}</td>
                </tr>
                <tr>
                  <th class="border-b-2 border-primary bg-white px-5 py-4 text-left font-semibold text-gray-800">所在地</th>
                  <td class="border-b border-gray-200 px-5 py-4 text-gray-700 whitespace-pre-line text-sm">${companyOverview.location}</td>
                </tr>
                <tr>
                  <th class="border-b-2 border-primary bg-white px-5 py-4 text-left font-semibold text-gray-800">代表取締役</th>
                  <td class="border-b border-gray-200 px-5 py-4 text-gray-700">${companyOverview.ceo}</td>
                </tr>
                <tr>
                  <th class="border-b-2 border-primary bg-white px-5 py-4 text-left font-semibold text-gray-800">設立日</th>
                  <td class="border-b border-gray-200 px-5 py-4 text-gray-700">${companyOverview.established}</td>
                </tr>
                <tr>
                  <th class="border-b-2 border-primary bg-white px-5 py-4 text-left font-semibold text-gray-800">資本金</th>
                  <td class="border-b border-gray-200 px-5 py-4 text-gray-700">${companyOverview.capital}</td>
                </tr>
                <tr>
                  <th class="border-b-2 border-primary bg-white px-5 py-4 text-left font-semibold text-gray-800">連絡先</th>
                  <td class="border-b border-gray-200 px-5 py-4 text-gray-700">${companyOverview.phone}</td>
                </tr>
                <tr>
                  <th class="border-b-2 border-primary bg-white px-5 py-4 text-left font-semibold text-gray-800">メール</th>
                  <td class="border-b border-gray-200 px-5 py-4 text-gray-700">${companyOverview.email}</td>
                </tr>
                <tr>
                  <th class="border-b-2 border-primary bg-white px-5 py-4 text-left font-semibold text-gray-800">取引銀行</th>
                  <td class="border-b border-gray-200 px-5 py-4 text-gray-700">${companyOverview.bankName}</td>
                </tr>
                <tr>
                  <th class="border-b-2 border-primary bg-white px-5 py-4 text-left font-semibold text-gray-800">業務内容</th>
                  <td class="border-b border-gray-200 px-5 py-4 text-gray-700">
                    <ul class="list-disc list-inside space-y-1">
                      ${companyOverview.services
                        .map((service) => `<li class="text-sm">${service}</li>`)
                        .join("")}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th class="bg-white px-5 py-4 text-left font-semibold text-gray-800 whitespace-nowrap">パートナー会社</th>
                  <td class="px-5 py-4 text-gray-700">
                    <div>${companyOverview.partnerCompany}</div>
                    <a href=${companyOverview.partnerWebsite} target="_blank" class="text-primary hover:text-gray-700 transition-colors text-sm">${companyOverview.partnerWebsite}</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
                <a href="tel:${contact.phone}" class="text-gray-700 hover:text-primary transition-colors">${contact.phone}</a>
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
                style="border: 0;" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div class="fade-up opacity-0 translate-y-10 bg-white rounded-2xl p-8 sm:p-10 md:p-8 shadow-sm border border-gray-200 w-full order-2 md:order-none" style="transition-delay: 0.1s">            <h3 class="text-2xl sm:text-2xl md:text-lg font-bold text-gray-800 mb-6">
              お問い合わせフォーム
            </h3>
            <form id="contact-form" class="space-y-6 md:space-y-4">
              <input type="hidden" name="_language" value="ja">
              <input type="hidden" name="_subject" value="お問い合わせ">

              <div>
                <label class="block text-base md:text-sm text-gray-600 mb-2 md:mb-1">
                  会社名 <span class="text-red-400">*</span>
                </label>
                <input type="text" name="company" id="company"
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
                <textarea name="message" id="message" rows="5"
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
                    <a href="${BASE}#privacy-policy" class="text-primary hover:underline" target="_blank">
                      プライバシーポリシー
                    </a>
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

// AJAX 提交表单（不跳转页面）
function initContactFormHandler(): void {
  setTimeout(() => {
    const form = document.getElementById("contact-form");
    if (!form) return;

    // 类型断言：告诉 TypeScript 这是一个表单元素
    const formElement = form as HTMLFormElement;

    formElement.addEventListener("submit", async function (event) {
      event.preventDefault();

      const statusDiv = document.getElementById("form-status");
      const submitBtn = formElement.querySelector('button[type="submit"]');
      const originalText = submitBtn?.textContent || "送信する";

      // ========== 获取字段值 ==========
      const company =
        (
          document.getElementById("company") as HTMLInputElement
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

      // ========== 1. 检查必填字段 ==========
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

      // ========== 2. 邮箱格式验证 ==========
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

      // ========== 3. 电话格式验证（日本手机/固定电话） ==========
      // 日本电话格式：0XX-XXXX-XXXX 或 0XXXXXXXXXX
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

      // 显示加载状态
      if (statusDiv) {
        statusDiv.classList.remove("hidden");
        statusDiv.textContent = "送信中...";
        statusDiv.className = "mt-4 text-sm text-blue-600";
      }
      if (submitBtn) submitBtn.textContent = "送信中...";

      // 获取表单数据
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

// 在 renderHomePage 中调用
export function renderHomePage(app: HTMLDivElement): () => void {
  cleanupHomeScrollEffect?.();
  cleanupHomeScrollEffect = null;
  cleanupHomeHeaderMenu?.();
  cleanupHomeHeaderMenu = null;

  app.innerHTML = `
    ${renderHeader()}
    ${renderHeroSection()}
    ${renderAboutSection()}
    ${renderWorksSection()}
    ${renderCompanyOverviewSection()}
    ${renderContactSection()}
    ${renderFooter()}
  `;

  initHomeScrollEffects();
  cleanupHomeHeaderMenu = initHeaderMobileMenu();
  initContactFormHandler();

  return () => {
    cleanupHomeScrollEffect?.();
    cleanupHomeScrollEffect = null;
    cleanupHomeHeaderMenu?.();
    cleanupHomeHeaderMenu = null;
  };
}
