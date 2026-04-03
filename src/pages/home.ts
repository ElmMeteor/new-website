import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { about, contact, hero, works } from "../data";
import {
  createScrollEffect,
  isMobileViewport,
  revealFadeUpElements,
  toggleHeaderScrolledState,
} from "../utils/scroll";

let cleanupHomeScrollEffect: (() => void) | null = null;

function renderHeroSection(): string {
  return `
    <section id="hero" class="h-screen flex items-center justify-start relative overflow-hidden">
      <div class="ml-10 md:ml-20 z-10 relative">
        <div class="mb-6 fade-up opacity-0 translate-y-10 transition-all duration-700">
          <img src="${hero.logo}" alt="KOKI INTERNATIONAL" class="h-12 md:h-16 w-auto object-contain">
        </div>
        <div class="mb-4 fade-up opacity-0 translate-y-10 transition-all duration-700" style="transition-delay: 0.1s">
          <span class="text-gold text-sm tracking-wider">KOKI INTERNATIONAL</span>
        </div>
        <h1 class="hero-text text-[48px] md:text-[80px] font-light tracking-wide leading-tight opacity-0 transform translate-y-10 text-white" style="font-family: 'Noto Serif JP', 'Hina Mincho', 'Yu Mincho', 'Hiragino Mincho Pro', 'MS PMincho', serif; font-weight: 400; letter-spacing: 0.1em; text-align: left;">
          ${hero.title.replace("\n", "<br/>")}
        </h1>
        <div class="mt-8 fade-up opacity-0 translate-y-10 transition-all duration-700" style="transition-delay: 0.2s">
          <div class="w-16 h-px bg-gold"></div>
          <p class="text-gray-400 text-sm mt-4 tracking-wider">世の為、人の為、幸せなれるように努めます。</p>
        </div>
      </div>
      <img src="${hero.image}" alt="Hero" class="hero-bg absolute top-0 left-0 w-full h-full object-cover z-0">
    </section>
  `;
}

function renderAboutSection(): string {
  return `
    <section id="about" class="min-h-screen flex items-center px-10 md:px-20 py-20 bg-black">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="fade-up opacity-0 translate-y-10 transition-all duration-700">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-8 h-px bg-gold"></div>
              <span class="text-gold text-sm tracking-wider">PHILOSOPHY</span>
            </div>
            <h2 class="text-3xl mb-6 font-bold text-white" style="font-family: 'Noto Serif JP', 'Yu Mincho', serif;">${about.title}</h2>
            ${about.paragraphs.map((p) => `<p class="text-gray-300 leading-loose mb-4">${p === "" ? "<br/>" : p}</p>`).join("")}
          </div>
          <div class="fade-up opacity-0 translate-y-10 transition-all duration-700">
            <div class="border border-gold/30 rounded-lg p-8 bg-black/40 backdrop-blur-sm">
              <div class="text-center">
                <div class="text-gold text-6xl mb-4 font-serif">"</div>
                <p class="text-gray-300 italic leading-relaxed">士不可以不弘毅、任重而道遠</p>
                <p class="text-gold text-sm mt-4">— 論語 —</p>
                <div class="mt-8 pt-6 border-t border-gold/20">
                  <div class="text-gold text-2xl font-serif">弘毅</div>
                  <p class="text-gray-500 text-xs mt-2">KO·KI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderWorkItem(): string {
  return works
    .map(
      (work) => `
        <div class="group grid md:grid-cols-2 gap-10 items-center work-item opacity-0 translate-y-10 transition-all duration-700">
          <div class="work-img h-[300px] ${work.reverse ? "order-2 md:order-1" : ""} overflow-hidden rounded-lg border border-gold/20">
            ${work.link ? `<a href="${work.link}">` : ""}
              <img src="${work.image}" alt="${work.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            ${work.link ? "</a>" : ""}
          </div>
          <div class="${work.reverse ? "order-1 md:order-2" : ""}">
            <h3 class="text-2xl mb-3 font-semibold text-gold">
              ${work.link ? `<a href="${work.link}" class="hover:text-gold/80 transition-colors">${work.title}</a>` : work.title}
            </h3>
            <p class="text-gray-400 leading-relaxed whitespace-pre-line">${work.description}</p>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderWorksSection(): string {
  return `
    <section id="works" class="min-h-screen px-10 md:px-20 py-20 bg-black/90">
      <div class="max-w-6xl mx-auto">
        <div class="fade-up opacity-0 translate-y-10 transition-all duration-700 mb-12">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-gold"></div>
            <span class="text-gold text-sm tracking-wider">SERVICES</span>
          </div>
          <h2 class="text-3xl font-bold text-white" style="font-family: 'Noto Serif JP', 'Yu Mincho', serif;">事業内容</h2>
          <div class="w-16 h-px bg-gold mt-4"></div>
        </div>
        <div class="space-y-20">${renderWorkItem()}</div>
      </div>
    </section>
  `;
}

function renderContactSection(): string {
  return `
    <section class="py-20 px-10 bg-black">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row gap-8 justify-center items-center">
          <a href="#recruitment" class="btn-gold group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-lg border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 w-64">
            <span class="relative z-10 font-semibold text-lg">求人情報</span>
            <span class="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-20"></span>
            <span class="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">→</span>
          </a>
          <a href="#contact" class="btn-gold group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-lg border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 w-64">
            <span class="relative z-10 font-semibold text-lg">お問い合わせ</span>
            <span class="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-20"></span>
            <span class="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">→</span>
          </a>
        </div>
        <p class="text-center text-gray-500 text-sm mt-8 fade-up opacity-0 translate-y-10 transition-all duration-700">${contact.info}</p>
        <div class="mt-12 max-w-md mx-auto fade-up opacity-0 translate-y-10 transition-all duration-700">
          <div class="border-t border-gold/20 pt-6 space-y-3 text-left">
            <div class="flex"><span class="w-24 text-gray-500 text-sm">TEL</span><span class="text-gray-300 text-sm"><a href="tel:${contact.phone}" class="hover:text-gold transition">${contact.phone}</a></span></div>
            <div class="flex"><span class="w-24 text-gray-500 text-sm">ADDRESS</span><span class="text-gray-300 text-sm whitespace-pre-line">${contact.address}</span></div>
            <div class="flex"><span class="w-24 text-gray-500 text-sm">HOURS</span><span class="text-gray-300 text-sm">${contact.hours}</span></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function initHomeScrollEffects(): void {
  const header = document.getElementById("header");
  const heroText = document.querySelector<HTMLElement>(".hero-text");
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

      if (enableParallax && heroText && heroBg) {
        heroText.style.transform = `translateY(${scrollY * 0.3}px)`;
        heroBg.style.transform = `translateY(${scrollY * 0.1}px) scale(1.05)`;
      }

      if (enableParallax) {
        workImages.forEach((image) => {
          const offset = image.getBoundingClientRect().top + scrollY;
          image.style.transform = `translateY(${(scrollY - offset) * 0.2}px)`;
        });
      }

      revealPendingItems(viewportHeight);
      if (heroText) {
        revealFadeUpElements([heroText], viewportHeight);
      }
    },
  );
}

export function renderHomePage(app: HTMLDivElement): () => void {
  cleanupHomeScrollEffect?.();
  cleanupHomeScrollEffect = null;

  app.innerHTML = `
    ${renderHeader()}
    ${renderHeroSection()}
    ${renderAboutSection()}
    ${renderWorksSection()}
    ${renderContactSection()}
    ${renderFooter()}
  `;

  initHomeScrollEffects();

  return () => {
    cleanupHomeScrollEffect?.();
    cleanupHomeScrollEffect = null;
  };
}
