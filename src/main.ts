import "./style.css";
import { hero, about, works, navItems, contact } from "./data";

const app = document.querySelector<HTMLDivElement>("#app")!;

// ---------- 渲染 Header ----------
app.innerHTML = `
<header id="header" class="fixed top-0 w-full flex justify-between items-center px-10 py-6 z-50 transition bg-black/80 backdrop-blur-sm border-b border-gold/20">
  <div class="font-semibold tracking-widest text-gold text-sm md:text-base">KOKI INTERNATIONAL</div>
  <nav class="flex gap-8 text-sm">
    ${navItems.map((item) => `<a href="${item.href}" class="text-gray-300 hover:text-gold transition">${item.name}</a>`).join("")}
  </nav>
</header>
`;

// ---------- 渲染 Hero ----------
app.innerHTML += `
<section id="hero" class="h-screen flex items-center justify-start relative overflow-hidden">
  <div class="ml-10 md:ml-20 z-10 relative">
    <!-- Logo -->
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

// ---------- 渲染 ABOUT（会社理念） ----------
app.innerHTML += `
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
            <p class="text-gray-300 italic leading-relaxed">
              士不可以不弘毅、任重而道遠
            </p>
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

// ---------- 渲染 WORKS（事業内容） ----------
app.innerHTML += `
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
    <div class="space-y-20">
      ${works
        .map(
          (w) => `
        <div class="group grid md:grid-cols-2 gap-10 items-center work-item opacity-0 translate-y-10 transition-all duration-700">
          <div class="work-img h-[300px] ${w.reverse ? "order-2 md:order-1" : ""} overflow-hidden rounded-lg border border-gold/20">
            <img src="${w.image}" alt="${w.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          </div>
          <div class="${w.reverse ? "order-1 md:order-2" : ""}">
            <h3 class="text-2xl mb-3 font-semibold text-gold">${w.title}</h3>
            <p class="text-gray-400 leading-relaxed whitespace-pre-line">${w.description}</p>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  </div>
</section>
`;

// ---------- 渲染 按钮区域（求人情報 & お問い合わせ） ----------
app.innerHTML += `
<section class="py-20 px-10 bg-black">
  <div class="max-w-4xl mx-auto">
    
    <!-- 按钮区域 -->
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

    <!-- 引导文字 -->
    <p class="text-center text-gray-500 text-sm mt-8 fade-up opacity-0 translate-y-10 transition-all duration-700">
      ${contact.info}
    </p>

    <!-- 联系方式（优化版） -->
    <div class="mt-12 max-w-md mx-auto fade-up opacity-0 translate-y-10 transition-all duration-700">
      <div class="border-t border-gold/20 pt-6 space-y-3 text-left">
        
        <div class="flex">
          <span class="w-24 text-gray-500 text-sm">TEL</span>
          <span class="text-gray-300 text-sm tracking-wide">
            <a href="tel:${contact.phone}" class="hover:text-gold transition">${contact.phone}
            </a>
          </span>
        </div>

        <div class="flex">
          <span class="w-24 text-gray-500 text-sm">ADDRESS</span>
          <span class="text-gray-300 text-sm leading-relaxed whitespace-pre-line">${contact.address}
          </span>
        </div>

        <div class="flex">
          <span class="w-24 text-gray-500 text-sm">HOURS</span>
          <span class="text-gray-300 text-sm">${contact.hours}
          </span>
        </div>

      </div>
    </div>

  </div>
</section>
`;

// ---------- 渲染 底部导航菜单 ----------
app.innerHTML += `
<div class="bg-black/95 border-t border-gold/20 py-12 px-10">
  <div class="max-w-6xl mx-auto">
    <!-- 主导航区域 - 4列布局 -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      <!-- 第1列：Service -->
      <div>
        <h3 class="text-gold font-bold text-lg mb-4 tracking-wide">SERVICE</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-400 hover:text-gold transition text-sm">システム開発事業</a></li>
          <li><a href="#" class="text-gray-400 hover:text-gold transition text-sm">国際貿易</a></li>
          <li><a href="#" class="text-gray-400 hover:text-gold transition text-sm">金融事業</a></li>
          <li><a href="#" class="text-gray-400 hover:text-gold transition text-sm">リサイクル事業</a></li>
        </ul>
      </div>
      
      <!-- 第2列：Company -->
      <div>
        <h3 class="text-gold font-bold text-lg mb-4 tracking-wide">COMPANY</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-400 hover:text-gold transition text-sm">会社概要</a></li>
          <li><a href="#" class="text-gray-400 hover:text-gold transition text-sm">社長ご挨拶</a></li>
          <li><a href="#" class="text-gray-400 hover:text-gold transition text-sm">会社理念</a></li>
        </ul>
      </div>
      
      <!-- 第3列：Recruit / Contact -->
      <div>
        <h3 class="text-gold font-bold text-lg mb-4 tracking-wide">RECRUIT</h3>
        <ul class="space-y-2 mb-6">
          <li><a href="#" class="text-gray-400 hover:text-gold transition text-sm">求人情報</a></li>
          <li><a href="#" class="text-gray-400 hover:text-gold transition text-sm">スタッフ募集</a></li>
        </ul>
        <h3 class="text-gold font-bold text-lg mb-4 tracking-wide">CONTACT</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-400 hover:text-gold transition text-sm">お問い合わせ</a></li>
        </ul>
      </div>
      
      <!-- 第4列：Information -->
      <div>
        <h3 class="text-gold font-bold text-lg mb-4 tracking-wide">INFORMATION</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-400 hover:text-gold transition text-sm">プライバシーポリシー</a></li>
          <li><a href="#" class="text-gray-400 hover:text-gold transition text-sm">サイトマップ</a></li>
        </ul>
      </div>
    </div>
    
    <!-- 底部版权 -->
    <div class="border-t border-gold/20 pt-8 text-center">
      <p class="text-gray-500 text-sm">Copyright © 2023 株式会社弘毅インターナショナル All Rights Reserved.</p>
    </div>
  </div>
</div>
`;

// ---------- 滚动和视差逻辑 ----------
const header = document.getElementById("header")!;
const heroText = document.querySelector<HTMLElement>(".hero-text")!;
const heroBg = document.querySelector<HTMLElement>(".hero-bg")!;
const workImgs = document.querySelectorAll<HTMLElement>(".work-img");
const fadeItems = document.querySelectorAll<HTMLElement>(
  ".fade-up, .work-item",
);

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;

  if (scrollY > 50) {
    header.classList.add("bg-black", "shadow-lg");
    header.classList.remove("bg-black/80");
  } else {
    header.classList.remove("bg-black", "shadow-lg");
    header.classList.add("bg-black/80");
  }

  if (heroText && heroBg) {
    heroText.style.transform = `translateY(${scrollY * 0.3}px)`;
    heroBg.style.transform = `translateY(${scrollY * 0.1}px) scale(1.05)`;
  }

  workImgs.forEach((img) => {
    const offset = img.getBoundingClientRect().top + scrollY;
    img.style.transform = `translateY(${(scrollY - offset) * 0.2}px)`;
  });

  fadeItems.forEach((el) => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < viewportHeight * 0.85) {
      el.classList.remove("opacity-0", "translate-y-10");
      el.classList.add("opacity-100", "translate-y-0");
    }
  });

  if (heroText) {
    const heroRect = heroText.getBoundingClientRect();
    if (heroRect.top < viewportHeight * 0.85) {
      heroText.classList.remove("opacity-0", "translate-y-10");
      heroText.classList.add("opacity-100", "translate-y-0");
    }
  }
});

window.dispatchEvent(new Event("scroll"));
