import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "社会福祉法人 三恵会｜むつ市大畑町の特別養護老人ホーム・介護サービス",
  description:
    "社会福祉法人 三恵会は青森県むつ市大畑町を拠点に、特別養護老人ホーム（延寿園）・ショートステイ（季の恵）・デイサービス・訪問介護・居宅介護支援を運営しています。",
};

const facilities = [
  {
    id: "enshuuen",
    name: "延寿園",
    type: "特別養護老人ホーム",
    description:
      "むつ市大畑町に位置する三恵会の基幹施設です。24時間365日体制の介護と、入居者一人ひとりの尊厳を大切にしたケアを提供しています。",
    overlay: "bg-[#2A6B47]/72",
    href: "/facilities/sankeien",
  },
  {
    id: "kinoegumi",
    name: "季の恵",
    type: "ショートステイ（短期入所生活介護）",
    description:
      "延寿園に併設するショートステイ施設。在宅生活を続けながら短期間の宿泊介護サービスをご利用いただけます。ご家族の介護疲れの回復にもお役立てください。",
    overlay: "bg-[#3A8060]/72",
    href: "/facilities/hikawa",
  },
];

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    name: "ふれあいかんデイサービスセンター",
    description: "日帰りで施設に通い、入浴・食事・機能訓練・レクリエーションを楽しめます。送迎付きで安心。「今日も来てよかった」と思っていただける場所づくりを大切にしています。",
    image: "/service-dayservice.jpg",
    imageAlt: "デイサービスでグループ体操を楽しむ高齢者（写真は受領次第差し替えます）",
    href: "/services/day-service",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    name: "延寿園ホームヘルプセンター",
    description: "「住み慣れた自宅で暮らし続けたい」を、ホームヘルパーが直接訪問してサポートします。身体介護・生活援助・通院同行に対応。",
    image: "/service-care.jpg",
    imageAlt: "在宅でお茶を提供する介護スタッフ（写真は受領次第差し替えます）",
    href: "/services/zaitaku-kaigo",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    name: "延寿園在宅介護支援センター",
    description: "ケアマネジャーが介護の入口から支援します。ケアプラン作成・サービス調整を一括サポート。介護についての相談は無料です。まずはお気軽にご連絡ください。",
    image: "/service-community.jpg",
    imageAlt: "ケアマネジャーによる相談対応（写真は受領次第差し替えます）",
    href: "/services/zaitaku-kaigo",
  },
];

const news = [
  {
    date: "2025年4月",
    category: "お知らせ",
    title: "令和7年度 ふれあいかんデイサービスセンター 利用者募集のご案内",
  },
  {
    date: "2025年4月",
    category: "採用情報",
    title: "令和7年度 介護職員・看護職員 積極採用中",
  },
  {
    date: "2025年3月",
    category: "お知らせ",
    title: "令和6年度 現況報告書・決算書を公開しました",
  },
  {
    date: "2025年1月",
    category: "お知らせ",
    title: "施設見学 随時受付中 ─ まずはお気軽にお問い合わせください",
  },
];

export default function TopPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative bg-primary-dark overflow-hidden"
        aria-label="メインビジュアル"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary-dark/65" aria-hidden="true" />

        {/* Decorative circles */}
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
              下北の地に根ざして、
              <br />
              ご家族と一緒に
              <br />
              支えていきます。
            </h1>
            <p className="text-white/75 text-lg leading-loose mb-10 max-w-xl">
              「天の恵み・地の恵み・人の恵み」の精神で、青森県むつ市大畑町を拠点に地域の高齢者とそのご家族を支えています。
              施設入居からデイサービス・在宅介護まで、大切なご家族の状況に合わせてご相談に応じます。
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:0175-34-3297"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-7 py-4 rounded-full border border-white/30 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0175-34-3297 電話で相談
              </a>
              <Link
                href="/facilities/sankeien"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-4 rounded-full transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                施設のご案内
              </Link>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 leading-none" aria-hidden="true">
          <svg
            viewBox="0 0 1440 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
            style={{ marginBottom: "-2px" }}
          >
            <path
              d="M0,32 C320,64 640,0 960,32 C1120,48 1280,56 1440,32 L1440,64 L0,64 Z"
              fill="#F7FAF8"
            />
          </svg>
        </div>
      </section>

      {/* ── Quick Access ── */}
      <section className="bg-bg py-10 -mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-ink-muted mb-6">どのようなご相談でも、まずはお気軽に</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mb-6">
            {[
              { label: "施設入所を検討したい", href: "/facilities/sankeien", icon: "🏠" },
              { label: "デイサービスに通いたい", href: "/services/day-service", icon: "🌞" },
              { label: "在宅介護を支援してほしい", href: "/services/zaitaku-kaigo", icon: "🏡" },
              { label: "採用情報を見たい", href: "/recruit", icon: "👩‍⚕️" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center gap-2 bg-surface hover:bg-primary-light border border-border hover:border-primary rounded-xl px-3 py-4 text-center transition-colors"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-medium text-ink leading-snug">{item.label}</span>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-ink-muted">
            お電話でのご相談：
            <a href="tel:0175-34-3297" className="font-bold text-primary hover:text-primary-dark transition-colors ml-1">
              0175-34-3297
            </a>
            <span className="text-xs text-ink-subtle ml-2">（代表 / 毎日 8:30〜17:30）</span>
          </p>
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
                青森県むつ市大畑町を拠点として、地域の高齢者が尊厳をもって生活できる環境づくりに
                取り組んでまいりました。
              </p>
              <p className="text-ink-muted leading-loose mb-8">
                特別養護老人ホーム・ショートステイ・デイサービス・訪問介護・居宅介護支援など、
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

            <div>
              {/* 施設写真プレースホルダー */}
              <div className="relative rounded-2xl overflow-hidden h-52 mb-4 bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center shadow-sm">
                <svg className="w-10 h-10 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-gray-400 font-medium">施設・活動の写真</p>
                <p className="text-xs text-gray-300 mt-1">※ 写真は受領次第差し替えます</p>
              </div>
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
                    <div className="text-ink-muted text-xs leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {facilities.map((f) => (
              <Link
                key={f.id}
                href={f.href}
                className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-primary hover:shadow-md transition-all duration-200"
              >
                {/* 施設写真プレースホルダー */}
                <div className="relative h-44 overflow-hidden bg-gray-50 border-b border-dashed border-gray-200 flex flex-col items-center justify-center">
                  <div className={`absolute inset-0 ${f.overlay} flex flex-col items-center justify-center`}>
                    <div className="text-2xl font-bold text-white mb-1">{f.name}</div>
                    <div className="text-sm text-white/90">{f.type}</div>
                    <div className="text-xs text-white/60 mt-2">※ 写真は受領次第差し替えます</div>
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
                className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-primary hover:shadow-md transition-all duration-200"
              >
                {/* サービス写真プレースホルダー */}
                <div className="relative h-40 overflow-hidden bg-gray-50 border-b border-dashed border-gray-200 flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-primary-dark/40" />
                  <div className="absolute bottom-3 left-4">
                    <div className="w-10 h-10 rounded-xl bg-white/95 text-primary flex items-center justify-center shadow-sm">
                      {s.icon}
                    </div>
                  </div>
                  <p className="relative text-xs text-white/60">※ 写真は受領次第差し替えます</p>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-ink mb-2">{s.name}</h3>
                  <p className="text-ink-muted text-sm leading-loose mb-4">
                    {s.description}
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
        </div>
      </section>

      {/* ── Recruitment CTA ── */}
      <section className="bg-primary-dark py-16 sm:py-20" aria-label="採用情報">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                地元・下北で、
                <br />
                一緒に働きませんか？
              </h2>
              <p className="text-white/75 leading-loose mb-4">
                むつ市大畑町で暮らし続けながら、地域の高齢者と向き合えるのが三恵会の仕事です。
                Uターン・地元定着を歓迎。経験・資格は問いません。
              </p>
              <p className="text-white/75 leading-loose mb-8">
                介護職・看護職・ケアマネジャー・調理員など、各種職種で仲間を募集しています。
                育児中・介護中のスタッフも多数活躍しています。
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
                { title: "介護職員", note: "正規職員・非常勤" },
                { title: "ケアマネジャー", note: "居宅介護支援" },
                { title: "看護職員", note: "正規職員・パート" },
                { title: "調理員・支援員", note: "各施設" },
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
                <time className="text-xs text-ink-muted shrink-0 w-24">
                  {item.date}
                </time>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${
                    item.category === "採用情報"
                      ? "bg-accent-light text-accent-dark"
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
            お気軽にお問い合わせください。相談は無料です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0175-34-3297"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold px-7 py-4 rounded-full transition-colors gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0175-34-3297 お電話
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white hover:bg-primary-light text-primary font-bold px-7 py-4 rounded-full border border-border transition-colors"
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
