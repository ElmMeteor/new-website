// src/components/Footer.ts
export function renderFooter(): string {
  return `
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
  `;
}
