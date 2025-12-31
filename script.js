/* ============================
   多言語データ
============================ */
const langData = {
  ja: {
    title: "Minecraft Launcher",
    subtitle: "快適なゲーム起動体験を、あなたに。",
    download: "ダウンロード",
    features: "特徴",
    f1: "Bedrock / Java 起動",
    f2: "アドオン管理",
    f3: "テーマ切り替え",
    f4: "Changelogs",

    // ナビゲーション
    nav_download: "ダウンロード",
    nav_addon: "アドオン管理",
    nav_license: "ライセンス",

    // ▼ 画像説明（日本語）
    s1_title: "直感的で美しいホーム画面",
    s1_text: "ランチャーのメイン画面では、Bedrock / Java の切り替えやテーマ変更がスムーズに行えます。ガラスUIを採用し、視認性と美しさを両立しました。",

    s2_title: "アドオン管理がもっと簡単に",
    s2_text: "アドオンやテクスチャの追加をワンクリックで操作可能。ZIP ファイルにも対応し、Java Edition のテクスチャ（ZIP形式）を Bedrock 統合版に自動変換できます。初心者から上級者まで快適に利用できます。",

    s3_title: "Changelogs で更新内容をすぐ確認",
    s3_text: "最新バージョンの変更点を美しいカード形式で表示。多言語対応で、世界中のユーザーにわかりやすく。",

    s4_title: "お好みのテーマカラーに",
    s4_text: "設定からテーマカラーを自由に変更可能。ダークモードもサポートし、目に優しいデザインを実現しました。",

    s5_title: "設定画面を簡素化",
    s5_text: "設定画面を直感的に設計し、ユーザーが簡単に操作できるようにしました。すべての設定項目を一目で確認できるよう整理されています。",

    addon_detail_title: "高度なアドオン管理機能",
    addon_detail_text: "ZIP ファイルをそのまま読み込み、必要なファイルを自動抽出。Java Edition のテクスチャを統合版用に変換する独自エンジンを搭載し、複数アドオンの競合チェックや自動整理にも対応しています。",

    download_title: "Minecraft Launcher ダウンロード",
    download_text: "最新版の Minecraft Launcher をこちらからダウンロードできます。Bedrock / Java の切り替え、アドオン管理、テーマ変更など多機能に対応しています。"
  },

  en: {
    title: "Minecraft Launcher",
    subtitle: "A smooth and comfortable launching experience.",
    download: "Download",
    features: "Features",
    f1: "Launch Bedrock / Java",
    f2: "Addon Management",
    f3: "Theme Switching",
    f4: "Changelogs",

    // ナビゲーション
    nav_download: "Download",
    nav_addon: "Addon Manager",
    nav_license: "License",

    s1_title: "Beautiful and Intuitive Home Screen",
    s1_text: "Switch between Bedrock and Java smoothly with a clean and modern glass UI designed for clarity and comfort.",

    s2_title: "Easier Addon Management",
    s2_text: "Add or remove addons and textures with a single click. Supports ZIP files and can convert Java Edition textures (ZIP only) into Bedrock format automatically.",

    s3_title: "Check Updates Instantly with Changelogs",
    s3_text: "View the latest changes in a clean card-style layout. Fully multilingual for global users.",

    s4_title: "Customize Your Theme Color",
    s4_text: "Choose your favorite theme color freely. Dark mode is supported for a more comfortable experience.",

    s5_title: "Simplified Settings Screen",
    s5_text: "The settings screen is designed to be intuitive and easy to navigate, with all options clearly organized.",

    addon_detail_title: "Advanced Addon Management",
    addon_detail_text: "Load ZIP files directly and extract necessary files automatically. Includes a custom engine that converts Java Edition textures into Bedrock format. Supports conflict checking and automatic organization.",

    download_title: "Download Minecraft Launcher",
    download_text: "Download the latest version of the Minecraft Launcher here. Supports Bedrock/Java switching, addon management, theme customization, and more."
  },

  zh: {
    title: "Minecraft 启动器",
    subtitle: "为您带来流畅舒适的启动体验。",
    download: "下载",
    features: "功能",
    f1: "启动 Bedrock / Java",
    f2: "附加组件管理",
    f3: "主题切换",
    f4: "更新日志",

    // ナビゲーション
    nav_download: "下载",
    nav_addon: "附加组件管理",
    nav_license: "许可证",

    s1_title: "直观且美观的主界面",
    s1_text: "主界面支持快速切换 Bedrock / Java，并采用玻璃风格 UI，兼具清晰度与美观性。",

    s2_title: "更简单的附加组件管理",
    s2_text: "一键添加或删除附加组件与材质包。支持 ZIP 文件，并可自动将 Java 版材质（ZIP）转换为基岩版格式。",

    s3_title: "快速查看更新内容",
    s3_text: "以卡片形式展示最新版本的更新内容，支持多语言，全球用户都能轻松理解。",

    s4_title: "自定义主题颜色",
    s4_text: "可自由选择主题颜色，并支持深色模式，带来更舒适的视觉体验。",

    s5_title: "简化的设置界面",
    s5_text: "设置界面设计直观，所有选项一目了然，操作简单。",

    addon_detail_title: "高级附加组件管理功能",
    addon_detail_text: "可直接加载 ZIP 文件并自动提取所需内容。内置引擎可将 Java 版材质转换为基岩版格式，并支持冲突检测与自动整理。",

    download_title: "下载 Minecraft 启动器",
    download_text: "在此下载最新版本的 Minecraft 启动器。支持 Bedrock/Java 切换、附加组件管理、主题自定义等多种功能。"
  }
};

/* ============================
   言語適用
============================ */
function applyLanguage(lang) {
  const data = langData[lang];

  // Hero
  document.getElementById("title").textContent = data.title;
  document.getElementById("subtitle").textContent = data.subtitle;

  // Navbar（完全対応）
  document.getElementById("nav_download").textContent = data.nav_download;
  document.getElementById("nav_addon").textContent = data.nav_addon;
  document.getElementById("nav_license").textContent = data.nav_license;
  document.getElementById("nav_discord").textContent = "Discord"; // 固有名詞

  // Buttons / Titles
  document.getElementById("download").textContent = data.download;
  document.getElementById("features-title").textContent = data.features;

  // Feature cards
  document.getElementById("f1").textContent = data.f1;
  document.getElementById("f2").textContent = data.f2;
  document.getElementById("f3").textContent = data.f3;
  document.getElementById("f4").textContent = data.f4;

  // Section texts
  document.getElementById("s1_title").textContent = data.s1_title;
  document.getElementById("s1_text").textContent = data.s1_text;

  document.getElementById("s2_title").textContent = data.s2_title;
  document.getElementById("s2_text").textContent = data.s2_text;

  document.getElementById("s3_title").textContent = data.s3_title;
  document.getElementById("s3_text").textContent = data.s3_text;

  document.getElementById("s4_title").textContent = data.s4_title;
  document.getElementById("s4_text").textContent = data.s4_text;

  document.getElementById("s5_title").textContent = data.s5_title;
  document.getElementById("s5_text").textContent = data.s5_text;

  document.getElementById("addon_detail_title").textContent = data.addon_detail_title;
  document.getElementById("addon_detail_text").textContent = data.addon_detail_text;

  document.getElementById("download_title").textContent = data.download_title;
  document.getElementById("download_text").textContent = data.download_text;
}

/* ============================
   言語切り替えイベント
============================ */
document.getElementById("languageSelect").addEventListener("change", (e) => {
  applyLanguage(e.target.value);
});

/* ============================
   スクロールふわっとアニメーション
============================ */
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));