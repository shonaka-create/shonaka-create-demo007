import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "社会福祉法人 三恵会｜むつ市大畑町の特別養護老人ホーム・介護サービス",
  description:
    "社会福祉法人 三恵会は青森県むつ市大畑町を拠点に、特別養護老人ホーム（延寿園）・ショートステイ（季の恵）・デイサービス・訪問介護・居宅介護支援を運営しています。",
};

const allServices = [
  {
    id: "enshuuen",
    name: "延寿園",
    type: "特別養護老人ホーム",
    description: "むつ市大畑町に位置する三恵会の基幹施設。24時間365日体制の介護と、入居者一人ひとりの尊厳を大切にした個別ケアを提供。看取り介護・認知症ケアにも対応します。",
    color: "bg-[#2A6B47]",
    href: "/services/enshuuen",
  },
  {
    id: "kinoegumi",
    name: "季の恵",
    type: "ショートステイ（短期入所生活介護）",
    description: "延寿園に併設するショートステイ施設。在宅生活を続けながら短期間の宿泊介護サービスをご利用いただけます。定員20床。ご家族の介護疲れの回復にもご活用ください。",
    color: "bg-[#3A8060]",
    href: "/services/kinoegumi",
  },
  {
    id: "day-service",
    name: "ふれあいかんデイサービスセンター",
    type: "通所介護",
    description: "日帰りで施設に通い、入浴・食事・機能訓練・レクリエーションを楽しめます。送迎付きで安心。「今日も来てよかった」と思っていただける場所づくりを大切にしています。",
    color: "bg-[#2D7A5A]",
    href: "/services/day-service",
  },
  {
    id: "home-help",
    name: "延寿園ホームヘルプセンター",
    type: "訪問介護",
    description: "「住み慣れた自宅で暮らし続けたい」を、ホームヘルパーが直接訪問してサポートします。身体介護・生活援助・通院同行に対応。",
    color: "bg-[#1E6B5A]",
    href: "/services/home-help",
  },
  {
    id: "kaigo-support",
    name: "延寿園在宅介護支援センター",
    type: "居宅介護支援",
    description: "ケアマネジャーが介護の入口から支援します。ケアプラン作成・サービス調整を一括サポート。介護についての相談は無料です。まずはお気軽にご連絡ください。",
    color: "bg-[#1A8066]",
    href: "/services/kaigo-support",
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

const recruitPositions = [
  { title: "介護職員（特養）", facility: "延寿園", type: "正職員・非常勤" },
  { title: "介護職員（ショートステイ）", facility: "季の恵", type: "正職員・非常勤" },
  { title: "介護職員（デイサービス）", facility: "ふれあいかん", type: "正職員・非常勤" },
  { title: "ホームヘルパー", facility: "ホームヘルプセンター", type: "準職員・登録" },
  { title: "看護職員", facility: "延寿園", type: "正職員・パート" },
  { title: "リハビリスタッフ（PT・OT）", facility: "延寿園", type: "正職員・非常勤" },
  { title: "送迎ドライバー", facility: "デイサービス等", type: "非常勤" },
  { title: "ケアマネジャー", facility: "在宅介護支援センター", type: "正職員" },
  { title: "調理員", facility: "延寿園等", type: "正職員・パート" },
  { title: "事務スタッフ", facility: "法人本部", type: "正職員・非常勤" },
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
          <div className="max-w-3xl">
            <p className="text-white/60 text-sm tracking-widest mb-5 uppercase">
              社会福祉法人 三恵会 ｜ 青森県むつ市大畑町
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              大切な家族の介護を、
              <br />
              一緒に考えます。
            </h1>
            <p className="text-white/80 text-lg sm:text-xl leading-loose mb-10 max-w-2xl">
              昭和59年の創設以来、むつ市大畑町を拠点に下北地域の高齢者とご家族を支えてきました。
              施設入所・デイサービス・訪問介護・居宅介護支援まで、どのようなご相談にも丁寧にお応えします。
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
                href="/services"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-4 rounded-full transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                サービスのご案内
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
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ── Quick Access ── */}
      <section className="bg-white border-b border-border py-10 -mt-2">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold tracking-widest text-ink-muted uppercase mb-7">
            どのようなご相談でも、まずはお気軽に
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {[
              {
                label: "施設入所を\n検討したい",
                href: "/services/enshuuen",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
              {
                label: "デイサービスに\n通いたい",
                href: "/services/day-service",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                label: "在宅介護を\n支援してほしい",
                href: "/services/home-help",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
              {
                label: "採用情報を\n見たい",
                href: "/recruit",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col items-center gap-3 bg-bg hover:bg-primary-light border border-border hover:border-primary/40 rounded-2xl px-4 py-6 text-center transition-all duration-200 hover:shadow-sm"
              >
                <span className="w-12 h-12 rounded-xl bg-primary-light group-hover:bg-primary/10 text-primary flex items-center justify-center transition-colors">
                  {item.icon}
                </span>
                <span className="text-sm font-semibold text-ink leading-snug whitespace-pre-line">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── About preview ── */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-border shadow-sm grid grid-cols-1 lg:grid-cols-5">

            {/* Left: dark panel */}
            <div className="lg:col-span-2 bg-primary-dark text-white p-10 sm:p-12 flex flex-col justify-between">
              <div>
                <p className="text-white/50 text-xs tracking-widest uppercase mb-6">Since 1984</p>
                <p className="text-primary-light text-sm font-bold tracking-widest mb-4">
                  「天の恵み・地の恵み・人の恵み」
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
                  三恵会について
                </h2>
                <p className="text-white/65 text-sm leading-loose">
                  昭和59年4月、青森県むつ市大畑町に設立。下北の地域に根差した高齢者福祉を、40年以上にわたって実践してきました。
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold">40<span className="text-lg">年+</span></p>
                  <p className="text-white/50 text-xs mt-1">地域介護の実績</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">5</p>
                  <p className="text-white/50 text-xs mt-1">サービス事業所</p>
                </div>
              </div>
            </div>

            {/* Right: history text */}
            <div className="lg:col-span-3 bg-surface p-10 sm:p-12 flex flex-col justify-between">
              <div>
                <p className="text-primary text-xs font-bold tracking-widest uppercase mb-6">Our History</p>
                <div className="space-y-5 text-ink-muted text-sm leading-[2]">
                  <p>
                    社会福祉法人三恵会は、地域の高齢者を大切にする事を目的として昭和59年4月、特別養護老人ホームを運営するために設立され、開設以来、高齢化社会が進む中で地域から信頼される施設、ご家族・地域に開かれた福祉に貢献できる法人運営を目指して努力を重ねて参りました。
                  </p>
                  <p>
                    平成12年4月に創設された介護保険制度により、高齢者福祉を取り巻く環境は急激に変化して来ました。当法人も平成22年7月、ショートステイ20床を大畑町に開設したほか、多様な福祉事業の機能を持ち、地域における福祉サービスの充実に努めて来ました。
                  </p>
                  <p>
                    長年の経験と実績を生かし新たな知恵を出し合い、下北の地域に根差した質の高いサービスをご利用者の皆様に提供してまいりたいと考えております。今後も創設の精神「老人福祉の充実」を胸に刻み、高齢者福祉の一翼を担ってまいります。
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row gap-3">
                <Link
                  href="/greeting"
                  className="group inline-flex items-center gap-2 bg-primary text-white font-bold text-sm px-5 py-2.5 rounded-full hover:bg-primary-dark transition-all duration-200 shadow-sm"
                >
                  理事長挨拶を読む
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 bg-primary-light text-primary font-bold text-sm px-5 py-2.5 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
                >
                  法人概要を見る
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── All Services ── */}
      <section className="bg-bg py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-bold tracking-widest mb-3 uppercase">Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink">各サービスのご案内</h2>
            <p className="text-ink-muted mt-3 text-sm max-w-xl mx-auto">
              施設入居からデイサービス・訪問介護・ケアプラン作成まで、地域の皆さまを幅広く支援します。
            </p>
          </div>

          <div className="space-y-20 sm:space-y-24">
            {allServices.map((s, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={s.id}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}
                >
                  {/* Circular photo placeholder */}
                  <div className="lg:w-5/12 flex justify-center shrink-0">
                    <div className={`w-56 h-56 sm:w-64 sm:h-64 rounded-full ${s.color} flex flex-col items-center justify-center text-white shadow-xl overflow-hidden`}>
                      <svg className="w-12 h-12 text-white/30 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-white/40 text-xs font-medium">写真準備中</p>
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="lg:w-7/12">
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full text-white ${s.color} mb-4`}>
                      {s.type}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-ink mb-4 leading-snug">
                      {s.name}
                    </h3>
                    <p className="text-ink-muted leading-loose mb-7">
                      {s.description}
                    </p>
                    <Link
                      href={s.href}
                      className={`inline-flex items-center gap-2 ${s.color} text-white font-bold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-sm`}
                    >
                      詳しく見る
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-primary-light hover:bg-primary text-primary hover:text-white font-bold px-7 py-3.5 rounded-full transition-colors border border-primary/30"
            >
              サービス詳細一覧
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Recruitment CTA ── */}
      <section className="bg-primary-dark py-16 sm:py-20" aria-label="採用情報">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
              むつ市大畑町で、
              <br />
              一緒に働きませんか？
            </h2>
            <p className="text-white/75 leading-loose mb-6">
              大畑町に暮らし続けながら、地域の高齢者と向き合えるのが三恵会の仕事です。
              Uターン・地元定着を歓迎。経験・資格は問いません。育児中・介護中のスタッフも多数活躍しています。
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {recruitPositions.map((job) => (
              <Link
                key={job.title}
                href="/recruit"
                className="group bg-white/8 hover:bg-white/15 rounded-xl p-4 border border-white/15 hover:border-white/30 transition-all duration-200"
              >
                <div className="font-bold text-white text-sm mb-1 leading-snug">{job.title}</div>
                <div className="text-white/55 text-xs">{job.facility}</div>
                <div className="text-white/40 text-xs mt-0.5">{job.type}</div>
              </Link>
            ))}
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
          </div>
        </div>
      </section>
    </>
  );
}
