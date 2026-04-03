// src/pages/systemDevelopment.ts
import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { systemDevelopment } from "../data";
import {
  createScrollEffect,
  isMobileViewport,
  revealFadeUpElements,
  toggleHeaderScrolledState,
} from "../utils/scroll";
import { initHeaderMobileMenu } from "../utils/headerMenu";

let cleanupSystemDevelopmentScrollEffect: (() => void) | null = null;
let cleanupSystemDevelopmentHeaderMenu: (() => void) | null = null;
type SystemDevelopmentService = (typeof systemDevelopment.services)[number];

const CODE_SNIPPETS = [
  "> const system = new Development();",
  "> system.design(client.needs);",
  "> system.develop(solution);",
  "> system.deploy(architecture);",
  "> // 日本から世界へ",
  "> const trust = '信頼は人から';",
  "> class SES {",
  ">   provide() { return 'solution'; }",
  ">   support() { return '24/7'; }",
  "> }",
  "> while(true) { innovate(); }",
  "> // KOKI INTERNATIONAL",
  "> export const mission = '弘毅';",
  "> npm run develop",
  "> git commit -m 'build system'",
  "> // お客様満足度No.1",
  "> system.operate();",
  "> system.maintain();",
  "> // 安心して利用できる",
  "> console.log('Hello World');",
];

function renderCodeBackgroundLayer(): string {
  return `
    <div class="code-bg" id="codeBg">
      <div class="code-lines-left" id="codeLinesLeft"></div>
      <div class="code-lines-right" id="codeLinesRight"></div>
    </div>
  `;
}

function renderTitleSection(): string {
  return `
    <div class="fade-up opacity-0 translate-y-10 text-center mb-4">
      <p class="text-primary text-sm font-semibold tracking-widest mb-3">${systemDevelopment.subtitle}</p>
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">${systemDevelopment.title}</h1>
      <div class="heading-border justify-center"><div class="heading-border-inner"></div></div>
    </div>
  `;
}

function renderVisionSection(): string {
  return `
    <div class="fade-up opacity-0 translate-y-10 w-full text-center mb-16" style="transition-delay: 0.05s">
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
        ${systemDevelopment.vision
          .map(
            (text, idx) =>
              `<p class="leading-relaxed mb-3 ${idx === systemDevelopment.vision.length - 1 ? "text-primary font-semibold" : "text-gray-600"}">${text}</p>`,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderServiceItem(
  service: SystemDevelopmentService,
  idx: number,
): string {
  const isLeft = service.align === "left";
  return `
    <div class="fade-up opacity-0 translate-y-10 grid md:grid-cols-2 gap-12 items-start mb-16 ${!isLeft ? "md:[&>:first-child]:order-2 md:[&>:last-child]:order-1" : ""}" style="transition-delay: ${idx * 0.1}s">
      <div class="bg-primary/5 rounded-xl p-8 border border-primary/20">
        <div class="w-10 h-1 bg-primary rounded mb-4"></div>
        <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-4">${service.title}</h2>
        <div class="space-y-3">
          ${service.content
            .map(
              (text, i) =>
                `<p class="${service.highlightLast && i === service.content.length - 1 ? "text-primary font-semibold" : "text-gray-600"} leading-relaxed">${text}</p>`,
            )
            .join("")}
        </div>
      </div>
      <div class="flex items-center justify-center">
        <div class="text-primary/20 text-9xl font-bold select-none" style="font-family: serif;">0${idx + 1}</div>
      </div>
    </div>
  `;
}

function renderServicesSection(): string {
  return systemDevelopment.services
    .map((service, idx) => renderServiceItem(service, idx))
    .join("");
}

function renderMainContent(): string {
  return `
    <main id="system-development" class="pt-20 pb-20 bg-gray-50 min-h-screen relative overflow-hidden">
      ${renderCodeBackgroundLayer()}
      <div class="relative z-10">
        <div class="w-full px-6 md:px-10 py-16">
          ${renderTitleSection()}
          ${renderVisionSection()}
          ${renderServicesSection()}
        </div>
      </div>
    </main>
  `;
}

function appendCodeLines(
  container: HTMLElement,
  snippets: string[],
  total: number,
  delayBuilder: (index: number) => number,
  duration: string,
): void {
  for (let i = 0; i < total; i++) {
    const line = document.createElement("div");
    line.className = "code-line";
    line.textContent = snippets[i % snippets.length];
    line.style.animationDelay = `${delayBuilder(i)}s`;
    line.style.animationDuration = duration;
    container.appendChild(line);
  }
}

export function renderSystemDevelopmentPage(): () => void {
  cleanupSystemDevelopmentScrollEffect?.();
  cleanupSystemDevelopmentScrollEffect = null;
  cleanupSystemDevelopmentHeaderMenu?.();
  cleanupSystemDevelopmentHeaderMenu = null;

  const app = document.querySelector<HTMLDivElement>("#app")!;

  app.innerHTML = `
    ${renderHeader()}
    ${renderMainContent()}
    ${renderFooter()}
  `;

  initCodeBackground();
  initScrollEffects();
  cleanupSystemDevelopmentHeaderMenu = initHeaderMobileMenu();

  return () => {
    cleanupSystemDevelopmentScrollEffect?.();
    cleanupSystemDevelopmentScrollEffect = null;
    cleanupSystemDevelopmentHeaderMenu?.();
    cleanupSystemDevelopmentHeaderMenu = null;
  };
}

function initCodeBackground() {
  const leftContainer = document.getElementById("codeLinesLeft");
  const rightContainer = document.getElementById("codeLinesRight");
  const codeBackground = document.getElementById("codeBg");
  if (!leftContainer || !rightContainer) {
    return;
  }

  if (isMobileViewport()) {
    if (codeBackground) {
      codeBackground.style.display = "none";
    }
    return;
  }

  const lineCount = 24;

  appendCodeLines(
    leftContainer,
    CODE_SNIPPETS,
    lineCount,
    (index) => index * 0.25,
    "14s",
  );
  appendCodeLines(
    rightContainer,
    CODE_SNIPPETS,
    lineCount,
    (index) => index * 0.3 + 2,
    "16s",
  );
}

function initScrollEffects() {
  const header = document.getElementById("header");
  const fadeItems = document.querySelectorAll<HTMLElement>(".fade-up");

  cleanupSystemDevelopmentScrollEffect = createScrollEffect(
    ({ scrollY, viewportHeight }) => {
      toggleHeaderScrolledState(header, scrollY);
      revealFadeUpElements(fadeItems, viewportHeight);
    },
  );
}
