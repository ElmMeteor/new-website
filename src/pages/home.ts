import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { about, contact, hero, works } from "../data";
import {
  createScrollEffect,
  isMobileViewport,
  revealFadeUpElements,
  toggleHeaderScrolledState,
} from "../utils/scroll";
import { initHeaderMobileMenu } from "../utils/headerMenu";
import { CONTENT_SHELL_CLASS, renderSectionHeading } from "../utils/page.ts";

let cleanupHomeScrollEffect: (() => void) | null = null;
let cleanupHomeHeaderMenu: (() => void) | null = null;

const HOME_SECTION_CLASS = "py-16 md:py-24";

function renderHeroTitle(): string {
  return hero.title
    .split("\n")
    .map((line) => {
      const highlightedLine = line.replace(
        "インターナショナル",
        '<span class="text-primary">インターナショナル</span>',
      );

      return `<span class="block">${highlightedLine}</span>`;
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
          <div class="hero-copy fade-up opacity-0 translate-y-10 absolute inset-x-0 bottom-0 z-20 text-left md:left-0 md:right-auto md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:w-[58%] lg:w-[52%]" style="transition-delay: 0.14s">
            <div class="hero-copy-panel px-5 pt-12 pb-5 sm:px-6 sm:pt-14 sm:pb-6 md:px-0 md:py-0">
              <p class="text-primary text-sm md:text-base font-semibold tracking-widest mb-3">KOKI INTERNATIONAL CO., LTD</p>
              <h1 class="hero-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-800 leading-[1.08] whitespace-normal md:whitespace-nowrap drop-shadow-[0_3px_12px_rgba(255,255,255,0.55)]">
                ${renderHeroTitle()}
              </h1>
              <div class="flex justify-start mt-4 mb-4">
                <div class="w-20 h-[3px] bg-[#b8922a] rounded"></div>
              </div>
              <p class="text-gray-600 leading-relaxed max-w-xl">人・物・情報・技術を国際的につなぐ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* --- 私たちについて --- */
function renderAboutSection(): string {
  return `
    <section id="about" class="pt-4 pb-14 sm:pt-6 sm:pb-16 md:py-24 bg-white relative overflow-hidden">
      <div class="about-glow" aria-hidden="true"></div>
      <div class="${CONTENT_SHELL_CLASS}">
        <div class="text-left mb-2 fade-up opacity-0 translate-y-10">
          <h2 class="text-2xl font-bold text-gray-800" style="text-align: left; font-size: 1.75rem; font-weight: 700; letter-spacing: 0.05em;">私たちについて</h2>
          <div class="flex justify-start mt-2 mb-3">
            <div class="w-16 h-0.5 bg-primary"></div>
          </div>
          <p class="text-gray-500 text-sm">About Us</p>
        </div>
        <div class="about-grid relative grid items-start gap-10 mt-4 sm:mt-6 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
          <div class="about-connector hidden md:block" aria-hidden="true"></div>
          <div class="about-copy flex flex-col items-start gap-3 lg:flex-row lg:items-start lg:gap-4 lg:justify-start">
            <div class="fade-up opacity-0 translate-y-10 w-full lg:w-auto min-w-0">
              <h3 class="text-xl font-bold text-gray-800 mb-4">${about.title}</h3>
              ${about.paragraphs
                .map((p) =>
                  p === ""
                    ? `<div class="mb-3"></div>`
                    : `<p class="text-gray-600 leading-relaxed mb-2">${p}</p>`,
                )
                .join("")}
            </div>
            <div class="fade-up opacity-0 translate-y-10 w-full lg:w-[260px] xl:w-[300px] lg:flex-none lg:self-start max-w-sm mx-auto lg:mx-0" style="transition-delay: 0.08s">
              <div class="about-quote-card bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 text-center w-full">
                <div class="text-primary text-5xl font-bold mb-4" style="font-family: serif;">"</div>
                <p class="text-gray-700 italic leading-loose mb-4">士不可以不弘毅、任重而道遠</p>
                <p class="text-primary text-sm">— 論語 —</p>
                <div class="mt-6 pt-6 border-t border-gray-200">
                  <div class="text-primary text-2xl font-bold" style="font-family: serif;">弘毅</div>
                  <p class="text-gray-400 text-xs mt-1">KO · KI</p>
                </div>
              </div>
            </div>
          </div>
          <div class="about-visual fade-up opacity-0 translate-y-10 overflow-hidden rounded-2xl shadow-md h-[240px] sm:h-[280px] md:h-[360px]" style="transition-delay: 0.1s">
            <img src="${about.image}" alt="Company Philosophy" class="w-full h-full object-cover">
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
                ${work.link ? `<a href="${work.link}">` : ""}
                <img src="${work.image}" alt="${work.title}" class="work-media-image w-full h-[220px] sm:h-64 object-cover transition-transform duration-500">
                ${work.link ? "</a>" : ""}
              </div>
              <div class="fade-up opacity-0 translate-y-10" style="transition-delay: ${i * 0.05}s">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-10 h-0.5 bg-primary"></div>
                  <span class="text-primary text-sm font-semibold tracking-wider">SERVICE 0${i + 1}</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-4">
                  ${work.link ? `<a href="${work.link}" class="hover:text-primary transition-colors">${work.title}</a>` : work.title}
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

/* --- お問い合わせ --- */
function renderContactSection(): string {
  return `
    <section id="contact" class="${HOME_SECTION_CLASS} bg-gray-50">
      <div class="${CONTENT_SHELL_CLASS}">
        ${renderSectionHeading(contact.title, "Contact")}
        <div class="mt-8 grid items-start gap-6 md:grid-cols-2 md:gap-8 w-full max-w-5xl mx-auto">
          <div class="fade-up opacity-0 translate-y-10 w-full">
            <p class="text-gray-600 leading-relaxed mb-8">${contact.info}</p>
            <div class="space-y-4 text-left">
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
          </div>
          <div class="fade-up opacity-0 translate-y-10 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 w-full" style="transition-delay: 0.1s">
            <h3 class="text-lg font-bold text-gray-800 mb-6">お問い合わせフォーム</h3>
            <form class="space-y-4" onsubmit="return false;">
              <div>
                <label class="block text-sm text-gray-600 mb-1">会社名 <span class="text-red-400">*</span></label>
                <input type="text" class="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-primary" placeholder="例：株式会社○○">
              </div>
              <div>
                <label class="block text-sm text-gray-600 mb-1">お名前 <span class="text-red-400">*</span></label>
                <input type="text" class="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-primary" placeholder="例：山田 太郎">
              </div>
              <div>
                <label class="block text-sm text-gray-600 mb-1">メールアドレス <span class="text-red-400">*</span></label>
                <input type="email" class="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-primary" placeholder="例：example@mail.com">
              </div>
              <div>
                <label class="block text-sm text-gray-600 mb-1">電話番号</label>
                <input type="tel" class="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-primary" placeholder="例：092-000-0000">
              </div>
              <div>
                <label class="block text-sm text-gray-600 mb-1">お問い合わせ内容</label>
                <textarea rows="4" class="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-primary resize-none" placeholder="ご相談内容をご記入ください"></textarea>
              </div>
              <button type="submit" class="btn-primary w-full justify-center">送信する</button>
            </form>
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
    ${renderContactSection()}
    ${renderFooter()}
  `;

  initHomeScrollEffects();
  cleanupHomeHeaderMenu = initHeaderMobileMenu();

  return () => {
    cleanupHomeScrollEffect?.();
    cleanupHomeScrollEffect = null;
    cleanupHomeHeaderMenu?.();
    cleanupHomeHeaderMenu = null;
  };
}
