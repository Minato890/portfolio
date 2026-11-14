window.LANG = window.LANG || {};
window.LANG.ja = {
  meta: {
    title: "ディーパック・パテル",
    description: "札幌在住のソフトウェアエンジニア、ディーパック・パテルのポートフォリオです。"
  },
  nav: { about: "自己紹介", experience: "経歴", education: "学歴", skills: "スキル・資格", contact: "連絡先" },
  hero: { title: "ソフトウェアエンジニア", location: "日本、札幌" },
  sections: { work: "職歴", projects: "プロジェクト", skills: "スキル", profiles: "コーディングプロフィール", certs: "資格", hobbies: "趣味" },
  about: {
    paragraphs: [
      "はじめまして、ディーパックです。23歳、札幌に住んでいます。問題を解くのが大好きで、特に、画面と一時間くらいにらめっこしたあと、急に「あ、そういうことか」となる瞬間が好きです。何回経験しても飽きません。自分で書いたものがちゃんと動くのを見るのは、今でもこの仕事でいちばん楽しいです。",
      "ソフトウェアの仕事のほかに、インドの株式市場でオプション取引やスイングトレードをやっていた時期もあります。大学では小さな哲学サークルも運営していました。そう、考えすぎるのが好きなんです。",
      "仕事以外では、チェスを指したり、音楽をひたすら聴いたり、自分でも観すぎだなと思うくらい映画を観たりしています。あと、マックス・フェルスタッペンが大好きです。よく喋る方でもあります。もちろん、いい意味で。いろんな場所の人が世の中をどう見ているのか聞くのが好きで、同じ問題でも人によって見え方は全然違うので、この好奇心はたぶん一生尽きません。",
      "コードでも、映画でも、F1でも、特に何もなくても大丈夫です。気軽にメッセージください。あまり話すのが得意じゃなくても、ぜひ。友達になれたらうれしいです。"
    ],
    languagesHeading: "言語"
  },
  languages: {
    english:  { name: "英語",         level: "流暢" },
    hindi:    { name: "ヒンディー語", level: "母語" },
    chhattisgarhi: { name: "チャッティースガリー語", level: "母語" },
    japanese: { name: "日本語",       level: "JLPT N3、2026年12月にN2" }
  },
  projects: { demo: "開く", code: "ソースコード", live: "サイトを開く", hint: "ライブサイトを開く", groups: { frontend: "フロントエンド", data: "データ・API", automation: "自動化", stack: "使用技術" } },
  skills: { groups: { languages: "言語", tools: "フレームワーク・ツール", core: "基礎" } },
  hobbies: { open: "開く" },
  contact: { email: "メール", copy: "コピー", copied: "コピーしました", locationLabel: "所在地", location: "北海道札幌市" },

  experienceText: {
    "vista-engineer": {
      title: "ソフトウェアエンジニア",
      org: "Vista (Cimpress India)",
      location: "リモート",
      period: "2025年7月〜2026年3月",
      proofLabel: "在籍証明書",
      points: [
        "モノリシックなサービスを、Vistaのマイクロフロントエンドフレームワーク「Ubik」へ移行し、Next.jsから疎結合なアーキテクチャへ転換。",
        "インフラをCaddyからCloudflareへ、言語をJavaScriptからTypeScriptへ移行する取り組みを主導し、信頼性を向上。",
        "データベーススキーマ、RESTful APIエンドポイント、イベントストアのロジックを含む招待システムをエンドツーエンドで構築。",
        "Figmaのデザインをもとに、複数市場への展開に向けたレスポンシブなワークスペースページとメールテンプレートを開発。"
      ]
    },
    "vista-intern": {
      title: "ソフトウェアエンジニアインターン",
      org: "Vista (Cimpress India)",
      location: "リモート",
      period: "2025年1月〜2025年6月",
      proofLabel: "インターンシップ証明書",
      points: [
        "VistaPrintのページにContentful CMSを統合し、マーケティングチームが開発者の手を借りずにコンテンツを管理できるように。",
        "Contentfulでコンテンツモデルを設計し、ユーザー権限の付与を自動化してオンボーディングを効率化。",
        "Reactコンポーネントをリファクタリングし、CMS管理のコンテンツを取得・表示するGraphQLクエリを作成。",
        "CMS統合を複数の海外市場で本番公開。"
      ]
    }
  },
  educationText: {
    hokkaido: {
      title: "日本語学習",
      org: "北海道日本語学院 本校",
      location: "札幌",
      period: "2026年4月〜2027年3月",
      subjects: ["日本語"]
    },
    nit: {
      title: "情報技術 学士(B.Tech)",
      org: "国立工科大学ライプル校",
      location: "インド、ライプル",
      period: "2021年〜2025年",
      proofLabel: "教育言語証明書(英語)",
      subjects: ["Web開発", "データ構造とアルゴリズム", "データベース管理システム", "オペレーティングシステム", "工学数学", "工学物理", "計算理論", "機械学習", "基礎電気工学"]
    },
    resonance: {
      title: "JEE対策予備校(10〜11年生)",
      org: "Resonance",
      location: "インド、ラージャスターン州コタ",
      period: "2019年〜2020年",
      subjects: ["物理", "化学", "数学"]
    },
    school: {
      title: "高校課程(12年生)",
      org: "Shambhavi Public School",
      location: "インド、ライプル",
      period: "2020年〜2021年",
      subjects: ["物理", "化学", "数学", "ヒンディー語", "英語"]
    }
  },
  projectText: {
    cinema: {
      title: "Cinema & Music Library",
      description: "観た映画と聴いている音楽を記録するために作った、小さなサイトです。",
      points: [
        "ライブラリを検索でき、コレクション、ランキング、視聴ステータス、作品タイプで絞り込めます。",
        "映画のデータはNotionから、アニメのリストはMyAnimeListから、よく聴くアーティスト・曲・プレイリストはSpotifyから取得しています。",
        "ポスターはTMDBから取得し、GitHub Actionsでデータを自動更新しています。"
      ],
      shots: ["トップ12", "ライブラリ", "音楽"]
    },
    gwent: {
      title: "Gwent-Classic",
      description: "ウィッチャーの世界観にインスパイアされた、ブラウザで遊べるカードゲームです。",
      points: [
        "バニラJavaScript(ES6+)、HTML5、CSS3で開発。",
        "ターン制のルール、状態管理、リアルタイムのスコア計算を実装。",
        "元のグウェントに着想を得たCSSアニメーション付きのレスポンシブUIを設計。",
        "デッキ編集機能付きで、陣営とリーダーを選び、デッキのアップロード・ダウンロードもできます。"
      ],
      shots: ["デッキ編集", "リーダー選択", "ゲーム盤面"]
    }
  },
  certText: {
    "cert-webdev":     { title: "The Complete 2023 Web Development Bootcamp", issuer: "Udemy", year: "2023年10月" },
    "cert-css":        { title: "CSS Fundamentals: Unlock the Power of Web Styling", issuer: "LinkedIn Learning", year: "2025年12月" },
    "cert-styled":     { title: "React with Styled Components", issuer: "LinkedIn Learning", year: "2025年4月" },
    "cert-responsive": { title: "Creating a Responsive Web Design", issuer: "LinkedIn Learning", year: "2025年4月" },
    "cert-gatsby":     { title: "Learning Gatsby", issuer: "LinkedIn Learning", year: "2025年3月" },
    "cert-rest":       { title: "Building RESTful APIs with Node.js and Express", issuer: "LinkedIn Learning", year: "2025年3月" }
  },
  hobbyText: {
    movies: { title: "映画", description: "観た作品をすべて記録しています" },
    chess:  { title: "チェス", description: "chess.comで対局とパズル" },
    music:  { title: "音楽", description: "Spotifyで変わった音楽をいろいろ" }
  }
};