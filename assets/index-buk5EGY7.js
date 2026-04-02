(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={title:`株式会社
弘毅インターナショナル`,image:`/assets/CompanyPhilosophy.svg`,logo:`/assets/logo.svg`},t={title:`会社理念`,paragraphs:[`広い器量と強い意志を持って、`,`国際ビジネスの発展に貢献します。`,``,`私たちは、革新的なソフトウェア開発と`,`グローバルな視点での事業展開を通じて`,`お客様の成功と社会の発展に寄与します。`,``,`「信頼は人から」をモットーに`,`お客様満足度No.1企業を目指します。`,``,`世の為、人の為`,`幸せなれるように努めます。`],image:`/assets/CompanyPhilosophy.svg`},n=[{title:`システム開発事業`,description:`ソフトウェア開発、システム設計・開発・運用、SESサービス。クライアント様のニーズに見合うシステム設計・開発・運用等業務を行います。`,image:`/assets/SystemDevelopmentBusiness.jpg`},{title:`国際貿易`,description:`日中を中心とした国際貿易業務。国境線のないビジネスの展開で、日中の架橋になれるように力を注ぎます。`,image:`/assets/ChinaJapanTrade.jpg`,reverse:!0},{title:`金融事業`,description:`金融サービス、投資関連事業。様々な課題や将来起こる問題に合わせたソリューションをご提案いたします。`,image:`/assets/FinancialBusiness.jpg`},{title:`リサイクル事業`,description:`希少金属資源のリサイクル、環境事業。情報セキュリティを確保された状態を保ち、安心して利用できる環境を提供しています。`,image:`/assets/RecyclingBusiness.jpg`,reverse:!0}],r=[{name:`HOME`,href:`#hero`},{name:`システム開発事業`,href:`#works`},{name:`国際貿易`,href:`#works`},{name:`金融事業`,href:`#works`},{name:`リサイクル事業`,href:`#works`},{name:`求人情報`,href:`#recruitment`},{name:`お問い合わせ`,href:`#contact`}],i=document.querySelector(`#app`);i.innerHTML=`
<header id="header" class="fixed top-0 w-full flex justify-between items-center px-10 py-6 z-50 transition bg-black/80 backdrop-blur-sm border-b border-gold/20">
  <div class="font-semibold tracking-widest text-gold text-sm md:text-base">KOKI INTERNATIONAL</div>
  <nav class="flex gap-8 text-sm">
    ${r.map(e=>`<a href="${e.href}" class="text-gray-300 hover:text-gold transition">${e.name}</a>`).join(``)}
  </nav>
</header>
`,i.innerHTML+=`
<section id="hero" class="h-screen flex items-center justify-start relative overflow-hidden">
  <div class="ml-10 md:ml-20 z-10 relative">
    <!-- Logo -->
    <div class="mb-6 fade-up opacity-0 translate-y-10 transition-all duration-700">
      <img src="${e.logo}" alt="KOKI INTERNATIONAL" class="h-12 md:h-16 w-auto object-contain">
    </div>
    <div class="mb-4 fade-up opacity-0 translate-y-10 transition-all duration-700" style="transition-delay: 0.1s">
      <span class="text-gold text-sm tracking-wider">KOKI INTERNATIONAL</span>
    </div>
    <h1 class="hero-text text-[48px] md:text-[80px] font-light tracking-wide leading-tight opacity-0 transform translate-y-10 text-white" style="font-family: 'Noto Serif JP', 'Hina Mincho', 'Yu Mincho', 'Hiragino Mincho Pro', 'MS PMincho', serif; font-weight: 400; letter-spacing: 0.1em; text-align: left;">
      ${e.title.replace(`
`,`<br/>`)}
    </h1>
    <div class="mt-8 fade-up opacity-0 translate-y-10 transition-all duration-700" style="transition-delay: 0.2s">
      <div class="w-16 h-px bg-gold"></div>
      <p class="text-gray-400 text-sm mt-4 tracking-wider">広い器量と強い意志を持って</p>
    </div>
  </div>
  <img src="${e.image}" alt="Hero" class="hero-bg absolute top-0 left-0 w-full h-full object-cover z-0">
</section>
`,i.innerHTML+=`
<section id="about" class="min-h-screen flex items-center px-10 md:px-20 py-20 bg-black">
  <div class="max-w-6xl mx-auto">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="fade-up opacity-0 translate-y-10 transition-all duration-700">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-8 h-px bg-gold"></div>
          <span class="text-gold text-sm tracking-wider">PHILOSOPHY</span>
        </div>
        <h2 class="text-3xl mb-6 font-bold text-white" style="font-family: 'Noto Serif JP', 'Yu Mincho', serif;">${t.title}</h2>
        ${t.paragraphs.map(e=>`<p class="text-gray-300 leading-loose mb-4">${e===``?`<br/>`:e}</p>`).join(``)}
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
`,i.innerHTML+=`
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
      ${n.map(e=>`
        <div class="group grid md:grid-cols-2 gap-10 items-center work-item opacity-0 translate-y-10 transition-all duration-700">
          <div class="work-img h-[300px] ${e.reverse?`order-2 md:order-1`:``} overflow-hidden rounded-lg border border-gold/20">
            <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          </div>
          <div class="${e.reverse?`order-1 md:order-2`:``}">
            <h3 class="text-2xl mb-3 font-semibold text-gold">${e.title}</h3>
            <p class="text-gray-400 leading-relaxed">${e.description}</p>
          </div>
        </div>
      `).join(``)}
    </div>
  </div>
</section>
`,i.innerHTML+=`
<section class="py-20 px-10 bg-black">
  <div class="max-w-4xl mx-auto">
    <div class="flex flex-col md:flex-row gap-8 justify-center items-center">
      <!-- 求人情報按钮 -->
      <a href="#recruitment" class="btn-gold group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-lg border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 w-64">
        <span class="relative z-10 font-semibold text-lg">求人情報</span>
        <span class="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-20"></span>
        <span class="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">→</span>
      </a>

      <!-- お問い合わせ按钮 -->
      <a href="#contact" class="btn-gold group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-lg border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 w-64">
        <span class="relative z-10 font-semibold text-lg">お問い合わせ</span>
        <span class="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-20"></span>
        <span class="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">→</span>
      </a>
    </div>
    <p class="text-center text-gray-500 text-sm mt-8 fade-up opacity-0 translate-y-10 transition-all duration-700">
      ご質問やご相談がございましたら、お気軽にご連絡ください
    </p>
  </div>
</section>
`,i.innerHTML+=`
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
`;var a=document.getElementById(`header`),o=document.querySelector(`.hero-text`),s=document.querySelector(`.hero-bg`),c=document.querySelectorAll(`.work-img`),l=document.querySelectorAll(`.fade-up, .work-item`);window.addEventListener(`scroll`,()=>{let e=window.scrollY,t=window.innerHeight;e>50?(a.classList.add(`bg-black`,`shadow-lg`),a.classList.remove(`bg-black/80`)):(a.classList.remove(`bg-black`,`shadow-lg`),a.classList.add(`bg-black/80`)),o&&s&&(o.style.transform=`translateY(${e*.3}px)`,s.style.transform=`translateY(${e*.1}px) scale(1.05)`),c.forEach(t=>{let n=t.getBoundingClientRect().top+e;t.style.transform=`translateY(${(e-n)*.2}px)`}),l.forEach(e=>{e.getBoundingClientRect().top<t*.85&&(e.classList.remove(`opacity-0`,`translate-y-10`),e.classList.add(`opacity-100`,`translate-y-0`))}),o&&o.getBoundingClientRect().top<t*.85&&(o.classList.remove(`opacity-0`,`translate-y-10`),o.classList.add(`opacity-100`,`translate-y-0`))}),window.dispatchEvent(new Event(`scroll`));