import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "社会福祉法人 三恵会 ─ 埼玉県さいたま市の介護サービス",
};

const facilities = [
  {
    id: "sankeien",
    name: "三恵苑",
    type: "特別養護老人ホーム",
    description:
      "昭和62年開設。さいたま市西区に位置し、100名を超える入居者が生活する基幹施設です。24時間体制の介護と、入居者一人ひとりの尊厳を大切にしたケアを提供しています。",
    color: "bg-[#2A6B47]",
    href: "/facilities#sankeien",
  },
  {
    id: "hikawa",
    name: "ひかわ",
    type: "特別養護老人ホーム",
    description:
      "地域に根ざした第2の特養として、生活リハビリと個別ケアを重視した環境を整えています。ユニット型の居室でプライバシーを確保しながら、家庭的な雰囲気の中でお過ごしいただけます。",
    color: "bg-[#3A8060]",
    href: "/facilities#hikawa",
  },
  {
    id: "fujimien",
    name: "富士見園",
    type: "養護老人ホーム",
    description:
      "環境的・経済的な理由で自宅での生活が困難な方を支援する養護老人ホームです。地域の行政と連携しながら、安心して生活できる環境を提供しています。",
    color: "bg-[#1A8066]",
    href: "/facilities#fujimien",
  },
];

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    name: "デイサービス",
    description: "日帰りで入浴・食事・機能訓練を提供。社会参加の機会を大切にしながら、在宅生活を支援します。",
    href: "/services#day",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    name: "在宅介護支援",
    description: "訪問介護・居宅介護支援を通じて、住み慣れた自宅での生活を継続できるよう専門スタッフが支援します。",
    href: "/services#home",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    name: "地域包括支援センター",
    description: "高齢者の総合相談窓口として、介護・医療・生活支援を包括的にコーディネートし、地域全体を支えます。",
    href: "/services#chiiki",
  },
];

const news = [
  {
    date: "2025年5月",
    category: "お知らせ",
    title: "令和7年度 通所介護サービス　利用者募集のご案内",
  },
  {
    date: "2025年4月",
    category: "採用情報",
    title: "令和7年度 新卒・中途採用 積極募集中",
  },
  {
    date: "2025年3月",
    category: "広報誌",
    title: "あじさい春号（2025年3月）発行のお知らせ",
  },
  {
    date: "2025年2月",
    category: "受賞・認定",
    title: "埼玉県「多様な働き方実践企業 プラチナ認定」を取得しました",
  },
];

export default function TopPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative bg-primary-dark overflow-hidden"
        aria-label="メインビジュアル"
      >
        {/* Decorative circles representing 三恵 (heaven/earth/human) */}
        <div
          className="absolute right-0 top-0 w-[600px] h-[600px] opacity-[0.06] pointer-events-none"
          aria-hidden="true"
        >
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="140" r="140" stroke="white" strokeWidth="2" />
            <circle cx="100" cy="300" r="140" stroke="white" strokeWidth="2" />
            <circle cx="300" cy="300" r="140" stroke="white" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-white/60 text-sm tracking-widest mb-4 uppercase">
              社会福祉法人 三恵会
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              地域に寄り添う
              <br />
              介護を、38年。
            </h1>
            <p className="text-white/75 text-lg leading-loose mb-10 max-w-xl">
              「天の恵み・地の恵み・人の恵み」の精神で、埼玉県さいたま市にて
              特別養護老人ホームをはじめとした介護サービスを提供しています。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/recruit"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-4 rounded-full transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                採用情報を見る
              </Link>
              <Link
                href="/facilities"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-7 py-4 rounded-full border border-white/30 transition-colors"
              >
                施設のご案内
              </Link>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg
            viewBox="0 0 1440 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,32 C320,64 640,0 960,32 C1120,48 1280,56 1440,32 L1440,64 L0,64 Z"
              fill="#F7FAF8"
            />
          </svg>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-bg py-12 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto">
            {[
              { value: "38", unit: "年", label: "地域で歩んだ歴史" },
              { value: "12", unit: "事業所", label: "多様なサービス拠点" },
              { value: "★", unit: "", label: "プラチナ認定取得（埼玉県）", isSpecial: true },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`font-bold leading-none mb-1 ${stat.isSpecial ? "text-accent text-3xl sm:text-4xl" : "text-primary text-4xl sm:text-5xl"}`}>
                  {stat.value}
                  {stat.unit && (
                    <span className="text-lg sm:text-2xl font-medium ml-1">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <div className="text-xs sm:text-sm text-ink-muted mt-1 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About preview ── */}
      <section className="bg-primary-light py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-primary text-sm font-bold tracking-widest mb-3 uppercase">
                About Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6">
                三恵会について
              </h2>
              <p className="text-ink-muted leading-loose mb-6">
                「天の恵み・地の恵み・人の恵み」── これが三恵会の名前の由来であり、私たちの根本理念です。
                昭和62年の設立以来、埼玉県さいたま市を拠点として、高齢者が尊厳をもって生活できる環境づくりに
                取り組んでまいりました。
              </p>
              <p className="text-ink-muted leading-loose mb-8">
                特別養護老人ホーム・養護老人ホーム・デイサービス・地域包括支援センターなど、
                地域のニーズに応じた多様なサービスを通じて、
                入居者・ご利用者・地域の皆さまと共に歩んでいます。
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                三恵会の理念・沿革を見る
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Decorative card */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "天の恵み", desc: "自然の豊かさと環境への感謝" },
                { label: "地の恵み", desc: "大地と地域の繋がりを大切に" },
                { label: "人の恵み", desc: "人と人との絆で支え合う" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-border"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <div className="font-bold text-ink text-sm mb-2">{item.label}</div>
                  <div className="text-ink-subtle text-xs leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Facilities ── */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold tracking-widest mb-3 uppercase">
              Facilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink">
              施設のご案内
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facilities.map((f) => (
              <Link
                key={f.id}
                href={f.href}
                className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-primary hover:shadow-md transition-all duration-200"
              >
                <div className={`${f.color} h-36 flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold mb-1">{f.name}</div>
                    <div className="text-sm opacity-80">{f.type}</div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-ink-muted text-sm leading-loose mb-4">
                    {f.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-bold group-hover:gap-2 transition-all">
                    詳しく見る
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/application"
              className="inline-flex items-center gap-2 bg-primary-light hover:bg-primary text-primary hover:text-white font-bold px-7 py-3.5 rounded-full transition-colors border border-primary/30"
            >
              入所申し込みはこちら
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold tracking-widest mb-3 uppercase">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink">
              サービスのご案内
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="group bg-white rounded-2xl p-7 border border-border hover:border-primary hover:shadow-md transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-ink mb-3">{s.name}</h3>
                <p className="text-ink-muted text-sm leading-loose mb-4">
                  {s.description}
                </p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-bold group-hover:gap-2 transition-all">
                  詳しく見る
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recruitment CTA (PROMINENT) ── */}
      <section className="bg-primary-dark py-16 sm:py-20" aria-label="採用情報">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Platinum badge */}
              <div className="inline-flex items-center gap-2 bg-yellow-400/15 text-yellow-300 text-sm font-bold px-4 py-2 rounded-full border border-yellow-400/25 mb-6">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.5l-3.71 1.95.71-4.13L2 5.5l4.15-.75L8 1z" />
                </svg>
                埼玉県 多様な働き方実践企業 プラチナ認定
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                三恵会で、
                <br />
                一緒に働きませんか？
              </h2>
              <p className="text-white/75 leading-loose mb-4">
                埼玉県から「多様な働き方実践企業 プラチナ認定」を取得。
                育児や介護との両立、フレキシブルな勤務制度など、
                スタッフが長く働き続けられる環境を整えています。
              </p>
              <p className="text-white/75 leading-loose mb-8">
                介護職・看護職・相談員・事務職など、各種職種で仲間を募集しています。
                経験者・未経験者ともに歓迎します。
              </p>
              <Link
                href="/recruit"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                採用情報・応募はこちら
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "介護職員", note: "正職員・パート・派遣" },
                { title: "看護職員", note: "正職員・パート" },
                { title: "相談員", note: "生活相談員・支援相談員" },
                { title: "事務職員", note: "施設事務・法人本部" },
              ].map((job) => (
                <div
                  key={job.title}
                  className="bg-white/10 hover:bg-white/15 rounded-xl p-5 border border-white/20 transition-colors"
                >
                  <div className="font-bold text-white text-base mb-1">
                    {job.title}
                  </div>
                  <div className="text-white/60 text-sm">{job.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── News ── */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-primary text-sm font-bold tracking-widest mb-2 uppercase">
                News
              </p>
              <h2 className="text-3xl font-bold text-ink">お知らせ</h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1 text-primary text-sm font-bold hover:gap-2 transition-all"
            >
              すべて見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="divide-y divide-border">
            {news.map((item) => (
              <div
                key={item.title}
                className="flex flex-col sm:flex-row sm:items-center gap-3 py-5 hover:bg-primary-light/30 -mx-4 px-4 rounded-lg transition-colors cursor-pointer"
              >
                <time className="text-xs text-ink-subtle shrink-0 w-24">
                  {item.date}
                </time>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${
                    item.category === "採用情報"
                      ? "bg-accent-light text-accent-dark"
                      : item.category === "受賞・認定"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-primary-light text-primary"
                  }`}
                >
                  {item.category}
                </span>
                <p className="text-sm text-ink">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link href="/blog" className="text-primary text-sm font-bold">
              すべてのお知らせを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="bg-bg py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4">
            ご相談・お問い合わせ
          </h2>
          <p className="text-ink-muted leading-loose mb-8">
            施設への入所のご相談、サービスについてのご質問、見学のご希望など、
            お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold px-7 py-4 rounded-full transition-colors"
            >
              お問い合わせフォーム
            </Link>
            <Link
              href="/application"
              className="inline-flex items-center justify-center bg-white hover:bg-primary-light text-primary font-bold px-7 py-4 rounded-full border border-border transition-colors"
            >
              入所申し込み
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
