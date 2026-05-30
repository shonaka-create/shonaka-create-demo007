import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "デイサービス（通所介護）｜三恵苑デイサービスセンター｜さいたま市西区",
  description:
    "三恵苑デイサービスセンター（さいたま市西区高木892）。1991年開設。入浴・食事・機能訓練・レクリエーション・送迎付き。要支援1〜2・要介護1〜5対象。通所介護のご相談は無料。",
};

const subNavItems = [
  { label: "デイサービス", href: "/services/day-service", current: true },
  { label: "在宅介護支援", href: "/services/zaitaku-kaigo", current: false },
  { label: "地域包括支援センター", href: "/services/chiiki-houkatsu", current: false },
];

export default function DayServicePage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="パンくずリスト" className="mb-4">
            <ol className="flex items-center gap-1.5 text-xs text-white/50">
              <li><Link href="/" className="hover:text-white/80 transition-colors">ホーム</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-white/80 transition-colors">サービスのご案内</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">デイサービス</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold">デイサービス</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose">
            三恵苑デイサービスセンター ─ 1991年の開設以来、地域の在宅高齢者の生活を支える通所介護施設です。
          </p>
        </div>
      </div>

      {/* Sub Navigation */}
      <nav className="bg-surface border-b border-border sticky top-[64px] lg:top-[80px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex overflow-x-auto gap-1 py-3">
            {subNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`whitespace-nowrap text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                    item.current
                      ? "text-white bg-primary"
                      : "text-ink-muted hover:text-primary hover:bg-primary-light"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Service Photo Banner */}
      <div className="relative h-56 sm:h-72 overflow-hidden">
        <img src="/service-dayservice.jpg" alt="デイサービスでグループ体操を行う高齢者の様子" className="w-full h-full object-cover object-top" loading="lazy" />
        <div className="absolute inset-0 bg-primary-dark/25" />
        <div className="absolute bottom-5 left-6">
          <span className="bg-primary/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
            通所介護 ／ 1991年開設
          </span>
        </div>
      </div>

      {/* Overview */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-primary text-xs font-bold tracking-widest mb-2">Day Service</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-5">
                三恵苑デイサービスセンター
                <span className="block text-base font-normal text-ink-muted mt-1">
                  通所介護 ／ 平成3年（1991年）開設
                </span>
              </h2>
              <p className="text-ink-muted leading-loose mb-4">
                特別養護老人ホーム「ひかわ」の1階に位置する三恵苑デイサービスセンターは、
                1991年の開設から30年以上の歴史を持つ通所介護施設です。
                和風旅館のような落ち着いた雰囲気が自慢で、施設の看板犬「ふわり」が皆さまをお迎えします。
              </p>
              <p className="text-ink-muted leading-loose mb-6">
                日帰りで施設に通い、入浴・食事・機能訓練などのサービスを受けながら、
                仲間との交流や社会参加の機会を持てます。ご家族の介護負担軽減にも貢献しています。
              </p>

              <div className="space-y-2.5">
                <h3 className="font-bold text-ink text-sm">主なサービス内容</h3>
                {[
                  "入浴サービス（ひのき・ひばの香る浴槽 / リフト式浴槽による個浴）",
                  "食事提供（週1回メイン料理選択制 / 月1回「郷土料理の日」）",
                  "機能訓練・リハビリテーション",
                  "脳トレ・体操・遊びリテーション・手芸等の活動プログラム",
                  "季節行事（新年会・夏祭り・クリスマス会 等）",
                  "さつまいも栽培などの農芸活動",
                  "昼食後の個別活動時間（塗り絵・脳トレプリント・トランプ等）",
                  "送迎サービス（自宅まで）",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-ink-muted">
                    <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {/* Facility Info */}
              <div className="bg-primary-light rounded-2xl p-6">
                <h3 className="font-bold text-ink mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  施設概要
                </h3>
                <dl className="space-y-3 text-sm">
                  {[
                    { label: "施設名", value: "三恵苑デイサービスセンター" },
                    { label: "所在地", value: "埼玉県さいたま市西区高木892（特別養護老人ホーム ひかわ内）" },
                    { label: "電話", value: "048-623-3567" },
                    { label: "開設年", value: "平成3年（1991年）" },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-3">
                      <dt className="font-bold text-ink-muted w-20 shrink-0">{row.label}</dt>
                      <dd className="text-ink-muted">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Target */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-4">ご利用対象</h3>
                <p className="text-sm text-ink-muted leading-loose">
                  介護保険の要介護認定を受けた<strong className="text-ink">要支援1〜2・要介護1〜5</strong>の方が対象です。
                  要支援1・2の方は介護予防通所介護（総合事業）をご利用いただけます。
                  まずはケアマネジャーまたは地域包括支援センターにご相談ください。
                </p>
              </div>

              {/* Fee */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-4">利用料金の目安</h3>
                <p className="text-sm text-ink-muted leading-loose">
                  利用料は介護保険の自己負担割合（1〜3割）により異なります。
                  例：要介護1・1割負担の場合、基本料703円＋加算・食費等。
                  要支援者は月単位でのご請求となります。詳細はお問い合わせください。
                </p>
              </div>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3.5 rounded-full transition-colors"
              >
                デイサービスについて相談する
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Highlights */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Activities</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">充実した活動プログラム</h2>
            <p className="text-ink-muted mt-3 max-w-2xl mx-auto text-sm leading-loose">
              「生きがい」と「楽しみ」を大切に、心身の健康を維持するためのプログラムを毎日ご提供しています。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "身体機能維持",
                icon: "🏋️",
                desc: "体操・機能訓練・リハビリテーションで身体機能の維持・向上をサポートします。",
              },
              {
                title: "脳トレ・趣味活動",
                icon: "🧩",
                desc: "脳トレプリント・手芸・塗り絵・トランプなど、個人の趣味や関心に合わせた活動を提供。",
              },
              {
                title: "季節の行事",
                icon: "🎊",
                desc: "新年会・夏祭り・クリスマス会など、四季折々の行事で日常に彩りを添えます。",
              },
              {
                title: "農芸・自然",
                icon: "🌱",
                desc: "さつまいも栽培など農芸活動を通じて、自然とのふれあいや達成感を育みます。",
              },
            ].map((item) => (
              <div key={item.title} className="bg-bg rounded-2xl border border-border p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-xs text-ink-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary-light py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-ink mb-4">ご利用のご相談</h2>
          <p className="text-ink-muted mb-8 leading-loose">
            見学・体験利用も随時受け付けています。まずはお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              お問い合わせはこちら
            </Link>
            <a
              href="tel:048-623-3567"
              className="inline-flex items-center justify-center bg-white hover:bg-primary-light text-primary font-bold px-7 py-3.5 rounded-full border border-border transition-colors"
            >
              📞 048-623-3567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
