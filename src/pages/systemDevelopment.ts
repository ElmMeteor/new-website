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

let cleanupSystemDevelopmentScrollEffect: (() => void) | null = null;
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
    <div class="fade-up opacity-0 translate-y-10 transition-all duration-700">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-8 h-px bg-gold"></div>
        <span class="text-gold text-sm tracking-wider">${systemDevelopment.subtitle}</span>
      </div>
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-4" style="font-family: 'Noto Serif JP', 'Yu Mincho', serif;">${systemDevelopment.title}</h1>
      <div class="w-20 h-0.5 bg-gold"></div>
    </div>
  `;
}

function renderSummarySection(): string {
  return `
    <div class="fade-up opacity-0 translate-y-10 transition-all duration-700 my-16 flex justify-end" style="transition-delay: 0.05s">
      <div class="relative inline-block">
        <div class="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold/50"></div>
        <div class="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold/50"></div>
        <div class="text-right pl-6 pr-6 pt-4 pb-4">
          <div class="flex justify-start items-center gap-3 mb-2">
            <div class="w-8 h-px bg-gold/50"></div>
            <span class="text-gold text-xs tracking-wider">—— 信頼と革新 ——</span>
          </div>
          <p class="text-gray-300 text-sm tracking-wide leading-relaxed whitespace-nowrap">
            お客様の課題を迅速・丁寧に解決する、信頼できるシステム開発チーム。
          </p>
        </div>
      </div>
    </div>
  `;
}

function renderVisionSection(): string {
  return `
    <div class="fade-up opacity-0 translate-y-10 transition-all duration-700" style="transition-delay: 0.1s">
      <div class="max-w-3xl ml-auto text-right">
        ${systemDevelopment.vision
          .map(
            (text, idx) =>
              `<p class="text-gray-300 leading-relaxed mb-3 ${idx === systemDevelopment.vision.length - 1 ? "text-gold font-semibold" : ""}">${text}</p>`,
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
  if (service.align === "left") {
    return `
      <div class="fade-up opacity-0 translate-y-10 transition-all duration-700 mb-16" style="transition-delay: ${idx * 0.1}s">
        <div class="border-l-4 border-gold pl-6 mb-6">
          <h2 class="text-2xl md:text-3xl font-bold text-gold" style="font-family: 'Noto Serif JP', 'Yu Mincho', serif;">${service.title}</h2>
        </div>
        <div class="space-y-3 text-gray-300 leading-relaxed">
          ${service.content
            .map(
              (text, i) =>
                `<p class="${service.highlightLast && i === service.content.length - 1 ? "text-gold" : ""}">${text}</p>`,
            )
            .join("")}
        </div>
      </div>
    `;
  }

  return `
    <div class="fade-up opacity-0 translate-y-10 transition-all duration-700 mb-16" style="transition-delay: ${idx * 0.1}s">
      <div class="max-w-3xl ml-auto text-right">
        <div class="border-r-4 border-gold pr-6 mb-6">
          <h2 class="text-2xl md:text-3xl font-bold text-gold" style="font-family: 'Noto Serif JP', 'Yu Mincho', serif;">${service.title}</h2>
        </div>
        ${service.content
          .map((text) => `<p class="text-gray-300 leading-relaxed">${text}</p>`)
          .join("")}
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
    <main class="pt-32 pb-20 bg-black min-h-screen relative overflow-hidden">
      ${renderCodeBackgroundLayer()}
      <div class="relative z-10">
        <div class="max-w-6xl mx-auto px-10">
          ${renderTitleSection()}
          ${renderSummarySection()}
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

  const app = document.querySelector<HTMLDivElement>("#app")!;

  app.innerHTML = `
    ${renderHeader()}
    ${renderMainContent()}
    ${renderFooter()}
  `;

  // 初始化代码背景
  initCodeBackground();
  initScrollEffects();

  return () => {
    cleanupSystemDevelopmentScrollEffect?.();
    cleanupSystemDevelopmentScrollEffect = null;
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

  const lineCount = 28;

  // 左右两侧分别使用不同速度与延迟，形成错层流动感。
  appendCodeLines(
    leftContainer,
    CODE_SNIPPETS,
    lineCount,
    (index) => index * 0.2,
    "14s",
  );
  appendCodeLines(
    rightContainer,
    CODE_SNIPPETS,
    lineCount,
    (index) => index * 0.25 + 2,
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
