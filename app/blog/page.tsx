import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お知らせ｜社会福祉法人 三恵会",
  description:
    "社会福祉法人 三恵会のお知らせ。施設の日常、イベント情報、採用情報、法人からのお知らせを発信しています。",
};

const categories = ["すべて", "お知らせ", "スタッフブログ", "イベント", "採用情報", "受賞・認定"];

const posts = [
  {
    id: 1,
    date: "2025年5月15日",
    category: "お知らせ",
    title: "令和7年度 通所介護サービス　利用者募集のご案内",
    excerpt: "三恵苑・ひかわのデイサービスでは、令和7年度の新規利用者を受け付けています。詳細はお問い合わせください。",
    color: "bg-primary-light text-primary",
  },
  {
    id: 2,
    date: "2025年5月1日",
    category: "イベント",
    title: "こどもの日 特別レクリエーションを実施しました",
    excerpt: "5月5日のこどもの日に合わせて、地域のこどもたちとの交流イベントを開催。入居者の皆さんと折り紙兜を作り、楽しいひとときを過ごしました。",
    color: "bg-green-100 text-green-700",
  },
  {
    id: 3,
    date: "2025年4月20日",
    category: "採用情報",
    title: "令和7年度 新卒・中途採用 積極募集中",
    excerpt: "介護職員・看護職員・相談員など、各職種で新卒・中途採用を積極的に行っています。まずはお気軽にお問い合わせください。",
    color: "bg-accent-light text-accent-dark",
  },
  {
    id: 4,
    date: "2025年4月5日",
    category: "スタッフブログ",
    title: "春の施設内花見を行いました🌸",
    excerpt: "三恵苑・ひかわ両施設で、中庭の桜を楽しむ花見の会を開催しました。入居者の皆さんのいきいきとした表情が印象的でした。",
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: 5,
    date: "2025年3月15日",
    category: "お知らせ",
    title: "あじさい春号（2025年3月）発行のお知らせ",
    excerpt: "法人広報誌「あじさい」の2025年春号を発行しました。広報誌ページよりPDFでご覧いただけます。",
    color: "bg-primary-light text-primary",
  },
  {
    id: 6,
    date: "2025年2月28日",
    category: "受賞・認定",
    title: "埼玉県「多様な働き方実践企業 プラチナ認定」を取得しました",
    excerpt: "令和6年2月1日付で、埼玉県が実施する「多様な働き方実践企業」制度において、最高位のプラチナ認定を取得しました。",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 7,
    date: "2025年2月14日",
    category: "イベント",
    title: "バレンタインデー特別メニューを提供しました",
    excerpt: "2月14日に、栄養士によるバレンタイン特別デザートを全入居者・利用者に提供。笑顔あふれる食事の時間となりました。",
    color: "bg-green-100 text-green-700",
  },
  {
    id: 8,
    date: "2025年1月7日",
    category: "スタッフブログ",
    title: "新年のご挨拶と書き初め大会",
    excerpt: "2025年の幕開けに、入居者の皆さんと書き初めを楽しみました。「健康」「笑顔」「感謝」など、思い思いの一文字を力強く書かれていました。",
    color: "bg-pink-100 text-pink-700",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/60 text-xs tracking-widest uppercase mb-2">News</p>
          <h1 className="text-3xl sm:text-4xl font-bold">お知らせ</h1>
          <p className="text-white/70 mt-3 text-sm leading-loose">
            三恵会からの最新情報、施設の日常、イベント報告などをお届けします。
          </p>
        </div>
      </div>

      {/* Category filters */}
      <nav className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-3">
            {categories.map((cat, idx) => (
              <button
                key={cat}
                className={`whitespace-nowrap text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                  idx === 0
                    ? "bg-primary text-white"
                    : "text-ink-muted hover:text-primary hover:bg-primary-light"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Posts grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-md hover:border-primary/30 transition-all group cursor-pointer"
            >
              {/* Color placeholder for post image */}
              <div className="h-40 bg-primary-light flex items-center justify-center">
                <div className="text-center text-primary/40">
                  <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs">写真</span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <time className="text-xs text-ink-subtle">{post.date}</time>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${post.color}`}>
                    {post.category}
                  </span>
                </div>
                <h2 className="font-bold text-ink text-base mb-2 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-ink-muted leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="flex justify-center mt-12 gap-2">
          <button className="w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
            1
          </button>
          <button className="w-10 h-10 rounded-full border border-border text-ink-muted text-sm hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
            2
          </button>
          <button className="w-10 h-10 rounded-full border border-border text-ink-muted text-sm hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
            3
          </button>
        </div>
      </div>
    </>
  );
}
