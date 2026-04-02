// src/pages/systemDevelopment.ts
import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";
import { systemDevelopment } from "../data";

export function renderSystemDevelopmentPage() {
  const app = document.querySelector<HTMLDivElement>("#app")!;

  app.innerHTML = `
    ${renderHeader()}
    
    <main class="pt-32 pb-20 bg-black min-h-screen relative overflow-hidden">
      
      <!-- 代码流动背景 - 左右两侧 -->
      <div class="code-bg" id="codeBg">
        <div class="code-lines-left" id="codeLinesLeft"></div>
        <div class="code-lines-right" id="codeLinesRight"></div>
      </div>
      
      <div class="relative z-10">
        <div class="max-w-6xl mx-auto px-10">
    
<!-- 页面标题 -->
<div class="fade-up opacity-0 translate-y-10 transition-all duration-700">
  <div class="flex items-center gap-3 mb-4">
    <div class="w-8 h-px bg-gold"></div>
    <span class="text-gold text-sm tracking-wider">${systemDevelopment.subtitle}</span>
  </div>
  <h1 class="text-4xl md:text-5xl font-bold text-white mb-4" style="font-family: 'Noto Serif JP', 'Yu Mincho', serif;">${systemDevelopment.title}</h1>
  <div class="w-20 h-0.5 bg-gold"></div>
</div>

<!-- 过渡区域 - 总结性文字卡片（靠右） -->
<div class="fade-up opacity-0 translate-y-10 transition-all duration-700 my-16 flex justify-end" style="transition-delay: 0.05s">
  <div class="relative inline-block">
    <!-- 左上角装饰 -->
    <div class="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold/50"></div>
    <!-- 右下角装饰 -->
    <div class="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold/50"></div>
    
    <!-- 内容 -->
    <div class="text-right pl-6 pr-6 pt-4 pb-4">
      <!-- 标题装饰线 - 放在句子左上角 -->
      <div class="flex justify-start items-center gap-3 mb-2">
        <div class="w-8 h-px bg-gold/50"></div>
        <span class="text-gold text-xs tracking-wider">—— 信頼と革新 ——</span>
      </div>
      
      <!-- 主要总结文字 - 一行 -->
      <p class="text-gray-300 text-sm tracking-wide leading-relaxed whitespace-nowrap">
        お客様の課題を迅速・丁寧に解決する、信頼できるシステム開発チーム。
      </p>
    </div>
  </div>
</div>


<!-- 理念介绍区域 -->
<div class="fade-up opacity-0 translate-y-10 transition-all duration-700" style="transition-delay: 0.1s">
  <div class="max-w-3xl ml-auto text-right">
    ${systemDevelopment.vision
      .map(
        (text, idx) => `
      <p class="text-gray-300 leading-relaxed mb-3 ${idx === systemDevelopment.vision.length - 1 ? "text-gold font-semibold" : ""}">${text}</p>
    `,
      )
      .join("")}
  </div>
</div>

          <!-- 服务项目 -->
          ${systemDevelopment.services
            .map(
              (service, idx) => `
            <div class="fade-up opacity-0 translate-y-10 transition-all duration-700 mb-16" style="transition-delay: ${idx * 0.1}s">
              ${
                service.align === "left"
                  ? `
                <div class="border-l-4 border-gold pl-6 mb-6">
                  <h2 class="text-2xl md:text-3xl font-bold text-gold" style="font-family: 'Noto Serif JP', 'Yu Mincho', serif;">${service.title}</h2>
                </div>
                <div class="space-y-3 text-gray-300 leading-relaxed">
                  ${service.content
                    .map(
                      (text, i) => `
                    <p class="${service.highlightLast && i === service.content.length - 1 ? "text-gold" : ""}">${text}</p>
                  `,
                    )
                    .join("")}
                </div>
              `
                  : `
                <div class="max-w-3xl ml-auto text-right">
                  <div class="border-r-4 border-gold pr-6 mb-6">
                    <h2 class="text-2xl md:text-3xl font-bold text-gold" style="font-family: 'Noto Serif JP', 'Yu Mincho', serif;">${service.title}</h2>
                  </div>
                  ${service.content
                    .map(
                      (text) => `
                    <p class="text-gray-300 leading-relaxed">${text}</p>
                  `,
                    )
                    .join("")}
                </div>
              `
              }
            </div>
          `,
            )
            .join("")}

        </div>
      </div>
    </main>
    
    ${renderFooter()}
  `;

  // 初始化代码背景
  initCodeBackground();
  initScrollEffects();
}

function initCodeBackground() {
  const leftContainer = document.getElementById("codeLinesLeft");
  const rightContainer = document.getElementById("codeLinesRight");
  if (!leftContainer || !rightContainer) return;

  // 代码片段
  const snippets = [
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

  // 生成左侧代码（约40行）
  for (let i = 0; i < 40; i++) {
    const line = document.createElement("div");
    line.className = "code-line";
    line.textContent = snippets[i % snippets.length];
    line.style.animationDelay = `${i * 0.2}s`;
    line.style.animationDuration = "14s";
    leftContainer.appendChild(line);
  }

  // 生成右侧代码（约40行）
  for (let i = 0; i < 40; i++) {
    const line = document.createElement("div");
    line.className = "code-line";
    line.textContent = snippets[i % snippets.length];
    line.style.animationDelay = `${i * 0.25 + 2}s`;
    line.style.animationDuration = "16s";
    rightContainer.appendChild(line);
  }
}

function initScrollEffects() {
  const header = document.getElementById("header");
  const fadeItems = document.querySelectorAll<HTMLElement>(".fade-up");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (header) {
      if (scrollY > 50) {
        header.classList.add("bg-black", "shadow-lg");
        header.classList.remove("bg-black/80");
      } else {
        header.classList.remove("bg-black", "shadow-lg");
        header.classList.add("bg-black/80");
      }
    }

    fadeItems.forEach((el) => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < viewportHeight * 0.85) {
        el.classList.remove("opacity-0", "translate-y-10");
        el.classList.add("opacity-100", "translate-y-0");
      }
    });
  });

  window.dispatchEvent(new Event("scroll"));
}
