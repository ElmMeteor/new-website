(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/new-website/`,t={title:`株式会社
弘毅インターナショナル`,image:`${e}assets/CompanyPhilosophy.svg`,logo:`${e}assets/logo.svg`},n={title:`会社理念`,paragraphs:[`広い器量と強い意志を持って、`,`国際ビジネスの発展に貢献します。`,``,`私たちは、革新的なソフトウェア開発と`,`グローバルな視点での事業展開を通じて`,`お客様の成功と社会の発展に寄与します。`,``,`「信頼は人から」をモットーに`,`お客様満足度No.1企業を目指します。`,``,`世の為、人の為`,`幸せなれるように努めます。`],image:`${e}assets/CompanyPhilosophy.svg`},r=[{title:`システム開発事業`,description:`ソフトウェア開発、システムの設計・開発・運用、SESサービスを行っております。
お客様のご要望に沿ったシステムをご提供いたします。`,image:`${e}assets/SystemDevelopmentBusiness.jpg`,link:`/#system-development`},{title:`国際貿易`,description:`日中を中心とした国際貿易業務を展開しております。
輸出入業務や国内流通を通じて、国境を越えたビジネスの架橋となります。`,image:`${e}assets/ChinaJapanTrade.jpg`,reverse:!0},{title:`金融事業`,description:`金融サービスおよび投資関連事業を展開しております。
国内外の投資支援や企業進出に関するコンサルティングを提供いたします。`,image:`${e}assets/FinancialBusiness.jpg`},{title:`リサイクル事業`,description:`金属スクラップ等のリサイクル事業を展開しております。
資源の有効活用を通じて、環境に配慮した事業活動を行っております。`,image:`${e}assets/RecyclingBusiness.jpg`,reverse:!0}],i=[{name:`HOME`,href:`#hero`},{name:`システム開発事業`,href:`#system-development`},{name:`国際貿易`,href:`#works`},{name:`金融事業`,href:`#works`},{name:`リサイクル事業`,href:`#works`},{name:`求人情報`,href:`#recruitment`},{name:`お問い合わせ`,href:`#contact`}],a={title:`お問い合わせ`,info:`ご質問やご相談がございましたら、お気軽にご連絡ください。`,phone:`092-686-8911`,address:`〒812-0012 福岡市博多区博多駅中央街8番1号
JRJP博多ビル 3F`,hours:`Mon-Fri 9:00－18:00`},o={title:`システム開発事業`,subtitle:`SERVICE`,mainImage:`${e}assets/tesad.svg`,vision:[`お客様の課題を解決するソフトウェア開発に注力しています。`,`小規模ながらも迅速・柔軟に対応できる体制を整えています。`,`日々の業務改善や効率化をサポートするシステムを提供します。`,`社員一人ひとりの成長とチーム力を大切にしています。`,`地域や社会への貢献も忘れず、利益の一部を社会活動に還元します。`],services:[{title:`システム設計・開発・運用サポート`,align:`left`,content:[`お客様の要望に合わせて、システムの設計から開発、運用までサポートします。`,`中小規模の案件でも迅速に対応できる柔軟な体制です。`,`安心して利用できるシステム環境の提供を目指しています。`],highlightLast:!0},{title:`業務改善コンサルティング`,align:`right`,content:[`現状の課題や運用上の問題点を整理し、改善提案を行います。`,`シンプルで実現可能なソリューションに重点を置いています。`],highlightLast:!1},{title:`ソフトウェア保守・運用支援`,align:`left`,content:[`既存システムの運用サポートやトラブル対応を行います。`,`小規模チームならではの迅速な対応で、業務に支障を出さない運用を実現します。`],highlightLast:!1}]};function s(){return`
<header id="header" class="fixed top-0 w-full flex justify-between items-center px-10 py-6 z-50 transition bg-black/80 backdrop-blur-sm border-b border-gold/20">
  <div class="font-semibold tracking-widest text-gold text-sm md:text-base">KOKI INTERNATIONAL</div>
  <nav class="flex gap-8 text-sm">
    ${i.map(e=>`<a href="${e.href}" class="text-gray-300 hover:text-gold transition">${e.name}</a>`).join(``)}
  </nav>
</header>
  `}function c(){return`
<div class="bg-black/95 border-t border-gold/20 py-12 px-10">
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      <div>
        <h3 class="text-gold font-bold text-lg mb-4 tracking-wide">SERVICE</h3>
        <ul class="space-y-2">
          <li><a href="/#system-development" class="text-gray-400 hover:text-gold transition text-sm">システム開発事業</a></li>
          <li><a href="#" class="text-gray-400 hover:text-gold transition text-sm">国際貿易</a></li>
          <li><a href="#" class="text-gray-400 hover:text-gold transition text-sm">金融事業</a></li>
          <li><a href="#" class="text-gray-400 hover:text-gold transition text-sm">リサイクル事業</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-gold font-bold text-lg mb-4 tracking-wide">COMPANY</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-400 hover:text-gold transition text-sm">会社概要</a></li>
          <li><a href="#" class="text-gray-400 hover:text-gold transition text-sm">社長ご挨拶</a></li>
          <li><a href="#" class="text-gray-400 hover:text-gold transition text-sm">会社理念</a></li>
        </ul>
      </div>
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
      <div>
        <h3 class="text-gold font-bold text-lg mb-4 tracking-wide">INFORMATION</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-400 hover:text-gold transition text-sm">プライバシーポリシー</a></li>
          <li><a href="#" class="text-gray-400 hover:text-gold transition text-sm">サイトマップ</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-gold/20 pt-8 text-center">
      <p class="text-gray-500 text-sm">Copyright © 2023 株式会社弘毅インターナショナル All Rights Reserved.</p>
    </div>
  </div>
</div>
  `}function l(){let e=document.querySelector(`#app`);e.innerHTML=`
    ${s()}
    
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
    <span class="text-gold text-sm tracking-wider">${o.subtitle}</span>
  </div>
  <h1 class="text-4xl md:text-5xl font-bold text-white mb-4" style="font-family: 'Noto Serif JP', 'Yu Mincho', serif;">${o.title}</h1>
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
    ${o.vision.map((e,t)=>`
      <p class="text-gray-300 leading-relaxed mb-3 ${t===o.vision.length-1?`text-gold font-semibold`:``}">${e}</p>
    `).join(``)}
  </div>
</div>

          <!-- 服务项目 -->
          ${o.services.map((e,t)=>`
            <div class="fade-up opacity-0 translate-y-10 transition-all duration-700 mb-16" style="transition-delay: ${t*.1}s">
              ${e.align===`left`?`
                <div class="border-l-4 border-gold pl-6 mb-6">
                  <h2 class="text-2xl md:text-3xl font-bold text-gold" style="font-family: 'Noto Serif JP', 'Yu Mincho', serif;">${e.title}</h2>
                </div>
                <div class="space-y-3 text-gray-300 leading-relaxed">
                  ${e.content.map((t,n)=>`
                    <p class="${e.highlightLast&&n===e.content.length-1?`text-gold`:``}">${t}</p>
                  `).join(``)}
                </div>
              `:`
                <div class="max-w-3xl ml-auto text-right">
                  <div class="border-r-4 border-gold pr-6 mb-6">
                    <h2 class="text-2xl md:text-3xl font-bold text-gold" style="font-family: 'Noto Serif JP', 'Yu Mincho', serif;">${e.title}</h2>
                  </div>
                  ${e.content.map(e=>`
                    <p class="text-gray-300 leading-relaxed">${e}</p>
                  `).join(``)}
                </div>
              `}
            </div>
          `).join(``)}

        </div>
      </div>
    </main>
    
    ${c()}
  `,u(),d()}function u(){let e=document.getElementById(`codeLinesLeft`),t=document.getElementById(`codeLinesRight`);if(!e||!t)return;let n=[`> const system = new Development();`,`> system.design(client.needs);`,`> system.develop(solution);`,`> system.deploy(architecture);`,`> // 日本から世界へ`,`> const trust = '信頼は人から';`,`> class SES {`,`>   provide() { return 'solution'; }`,`>   support() { return '24/7'; }`,`> }`,`> while(true) { innovate(); }`,`> // KOKI INTERNATIONAL`,`> export const mission = '弘毅';`,`> npm run develop`,`> git commit -m 'build system'`,`> // お客様満足度No.1`,`> system.operate();`,`> system.maintain();`,`> // 安心して利用できる`,`> console.log('Hello World');`];for(let t=0;t<40;t++){let r=document.createElement(`div`);r.className=`code-line`,r.textContent=n[t%n.length],r.style.animationDelay=`${t*.2}s`,r.style.animationDuration=`14s`,e.appendChild(r)}for(let e=0;e<40;e++){let r=document.createElement(`div`);r.className=`code-line`,r.textContent=n[e%n.length],r.style.animationDelay=`${e*.25+2}s`,r.style.animationDuration=`16s`,t.appendChild(r)}}function d(){let e=document.getElementById(`header`),t=document.querySelectorAll(`.fade-up`);window.addEventListener(`scroll`,()=>{let n=window.scrollY,r=window.innerHeight;e&&(n>50?(e.classList.add(`bg-black`,`shadow-lg`),e.classList.remove(`bg-black/80`)):(e.classList.remove(`bg-black`,`shadow-lg`),e.classList.add(`bg-black/80`))),t.forEach(e=>{e.getBoundingClientRect().top<r*.85&&(e.classList.remove(`opacity-0`,`translate-y-10`),e.classList.add(`opacity-100`,`translate-y-0`))})}),window.dispatchEvent(new Event(`scroll`))}var f=document.querySelector(`#app`);function p(){f.innerHTML=`
    ${s()}
    
    <!-- Hero -->
    <section id="hero" class="h-screen flex items-center justify-start relative overflow-hidden">
      <div class="ml-10 md:ml-20 z-10 relative">
        <div class="mb-6 fade-up opacity-0 translate-y-10 transition-all duration-700">
          <img src="${t.logo}" alt="KOKI INTERNATIONAL" class="h-12 md:h-16 w-auto object-contain">
        </div>
        <div class="mb-4 fade-up opacity-0 translate-y-10 transition-all duration-700" style="transition-delay: 0.1s">
          <span class="text-gold text-sm tracking-wider">KOKI INTERNATIONAL</span>
        </div>
        <h1 class="hero-text text-[48px] md:text-[80px] font-light tracking-wide leading-tight opacity-0 transform translate-y-10 text-white" style="font-family: 'Noto Serif JP', 'Hina Mincho', 'Yu Mincho', 'Hiragino Mincho Pro', 'MS PMincho', serif; font-weight: 400; letter-spacing: 0.1em; text-align: left;">
          ${t.title.replace(`
`,`<br/>`)}
        </h1>
        <div class="mt-8 fade-up opacity-0 translate-y-10 transition-all duration-700" style="transition-delay: 0.2s">
          <div class="w-16 h-px bg-gold"></div>
          <p class="text-gray-400 text-sm mt-4 tracking-wider">世の為、人の為、幸せなれるように努めます。</p>
        </div>
      </div>
      <img src="${t.image}" alt="Hero" class="hero-bg absolute top-0 left-0 w-full h-full object-cover z-0">
    </section>

    <!-- ABOUT -->
    <section id="about" class="min-h-screen flex items-center px-10 md:px-20 py-20 bg-black">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="fade-up opacity-0 translate-y-10 transition-all duration-700">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-8 h-px bg-gold"></div>
              <span class="text-gold text-sm tracking-wider">PHILOSOPHY</span>
            </div>
            <h2 class="text-3xl mb-6 font-bold text-white" style="font-family: 'Noto Serif JP', 'Yu Mincho', serif;">${n.title}</h2>
            ${n.paragraphs.map(e=>`<p class="text-gray-300 leading-loose mb-4">${e===``?`<br/>`:e}</p>`).join(``)}
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

    <!-- WORKS -->
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
          ${r.map(e=>`
              <div class="group grid md:grid-cols-2 gap-10 items-center work-item opacity-0 translate-y-10 transition-all duration-700">
                <!-- 图片区域 - 可点击 -->
                <div class="work-img h-[300px] ${e.reverse?`order-2 md:order-1`:``} overflow-hidden rounded-lg border border-gold/20">
                  ${e.link?`<a href="${e.link}">`:``}
                    <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                  ${e.link?`</a>`:``}
                </div>
                <!-- 文字区域 - title可点击 -->
                <div class="${e.reverse?`order-1 md:order-2`:``}">
                  <h3 class="text-2xl mb-3 font-semibold text-gold">
                    ${e.link?`<a href="${e.link}" class="hover:text-gold/80 transition-colors">${e.title}</a>`:e.title}
                  </h3>
                  <p class="text-gray-400 leading-relaxed whitespace-pre-line">${e.description}</p>
                </div>
              </div>
            `).join(``)}
        </div>
      </div>
    </section>

    <!-- 按钮区域 -->
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
        <p class="text-center text-gray-500 text-sm mt-8 fade-up opacity-0 translate-y-10 transition-all duration-700">${a.info}</p>
        <div class="mt-12 max-w-md mx-auto fade-up opacity-0 translate-y-10 transition-all duration-700">
          <div class="border-t border-gold/20 pt-6 space-y-3 text-left">
            <div class="flex"><span class="w-24 text-gray-500 text-sm">TEL</span><span class="text-gray-300 text-sm"><a href="tel:${a.phone}" class="hover:text-gold transition">${a.phone}</a></span></div>
            <div class="flex"><span class="w-24 text-gray-500 text-sm">ADDRESS</span><span class="text-gray-300 text-sm whitespace-pre-line">${a.address}</span></div>
            <div class="flex"><span class="w-24 text-gray-500 text-sm">HOURS</span><span class="text-gray-300 text-sm">${a.hours}</span></div>
          </div>
        </div>
      </div>
    </section>

    ${c()}
  `,m()}function m(){let e=document.getElementById(`header`),t=document.querySelector(`.hero-text`),n=document.querySelector(`.hero-bg`),r=document.querySelectorAll(`.work-img`),i=document.querySelectorAll(`.fade-up, .work-item`);window.addEventListener(`scroll`,()=>{let a=window.scrollY,o=window.innerHeight;a>50?(e.classList.add(`bg-black`,`shadow-lg`),e.classList.remove(`bg-black/80`)):(e.classList.remove(`bg-black`,`shadow-lg`),e.classList.add(`bg-black/80`)),t&&n&&(t.style.transform=`translateY(${a*.3}px)`,n.style.transform=`translateY(${a*.1}px) scale(1.05)`),r.forEach(e=>{let t=e.getBoundingClientRect().top+a;e.style.transform=`translateY(${(a-t)*.2}px)`}),i.forEach(e=>{e.getBoundingClientRect().top<o*.85&&(e.classList.remove(`opacity-0`,`translate-y-10`),e.classList.add(`opacity-100`,`translate-y-0`))}),t&&t.getBoundingClientRect().top<o*.85&&(t.classList.remove(`opacity-0`,`translate-y-10`),t.classList.add(`opacity-100`,`translate-y-0`))}),window.dispatchEvent(new Event(`scroll`))}function h(){window.location.hash===`#system-development`?l():p()}window.addEventListener(`hashchange`,h),h();