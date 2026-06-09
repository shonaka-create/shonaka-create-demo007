import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "延寿園ホームヘルプセンター（訪問介護）｜社会福祉法人 三恵会｜むつ市",
  description:
    "延寿園ホームヘルプセンター（青森県むつ市大畑町）。ホームヘルパーが自宅を訪問し、身体介護・生活援助・通院同行を提供。住み慣れた自宅での暮らしを支えます。",
};

const subNavItems = [
  { label: "延寿園", href: "/services/enshuuen", current: false },
  { label: "季の恵", href: "/services/kinoegumi", current: false },
  { label: "ふれあいかん", href: "/services/day-service", current: false },
  { label: "ホームヘルプ", href: "/services/home-help", current: true },
  { label: "在宅介護支援", href: "/services/kaigo-support", current: false },
];

export default function HomeHelpPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#1E6B5A] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="パンくずリスト" className="mb-4">
            <ol className="flex items-center gap-1.5 text-xs text-white/50">
              <li><Link href="/" className="hover:text-white/80 transition-colors">ホーム</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services/enshuuen" className="hover:text-white/80 transition-colors">サービスのご案内</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">ホームヘルプセンター</li>
            </ol>
          </nav>
          <p className="text-white/70 text-sm mb-1">訪問介護</p>
          <h1 className="text-3xl sm:text-4xl font-bold">延寿園ホームヘルプセンター</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose">
            ホームヘルパーが自宅を訪問し、身体介護・生活援助を提供します。
            「住み慣れた自宅で暮らし続けたい」を実現するためのサポートです。
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
                      ? "text-white bg-[#1E6B5A]"
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

      {/* Photo Banner */}
      <div className="relative h-48 sm:h-64 overflow-hidden bg-gray-100 border-b-2 border-dashed border-gray-200 flex flex-col items-center justify-center">
        <svg className="w-12 h-12 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-gray-400 font-medium">訪問介護・ホームヘルプの様子（バナー用）</p>
        <p className="text-sm text-gray-300 mt-1">※ 写真は受領次第差し替えます</p>
      </div>

      {/* Overview */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary text-xs font-bold tracking-widest mb-2">Home Help Service</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-5">
                延寿園ホームヘルプセンター
                <span className="block text-base font-normal text-ink-muted mt-1">訪問介護</span>
              </h2>
              <p className="text-ink-muted leading-loose mb-4">
                延寿園ホームヘルプセンターは、ホームヘルパーがご自宅を訪問して、
                身体介護や生活援助などのサービスを提供する訪問介護事業所です。
              </p>
              <p className="text-ink-muted leading-loose mb-6">
                「住み慣れた自宅で、これからも安心して暮らし続けたい」という願いを
                かなえるために、利用者の状態や生活スタイルに合わせた、きめ細かなサービスを提供します。
              </p>

              <div className="space-y-2.5">
                <h3 className="font-bold text-ink text-sm">主なサービス内容</h3>
                {[
                  "身体介護（入浴・排泄・食事の介助）",
                  "生活援助（掃除・洗濯・買い物・調理）",
                  "通院同行（病院への付き添い）",
                  "服薬確認・健康状態の観察",
                  "相談・助言（無料）",
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
                <h3 className="font-bold text-ink mb-4">施設概要</h3>
                <dl className="space-y-3 text-sm">
                  {[
                    { label: "施設名", value: "延寿園ホームヘルプセンター" },
                    { label: "事業種別", value: "訪問介護（第2種社会福祉事業）" },
                    { label: "所在地", value: "青森県むつ市大畑町大赤川29番地4" },
                    { label: "電話", value: "0175-34-3297（代表）" },
                    { label: "FAX", value: "0175-34-3495" },
                    { label: "開設年", value: "※ クライアントより確認中" },
                    { label: "営業時間", value: "※ クライアントより確認中" },
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
                  まずはケアマネジャーまたは当センターにご相談ください。
                </p>
              </div>

              {/* Fee */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-3">利用料金</h3>
                <p className="text-sm text-ink-muted leading-loose">
                  利用料は介護保険の自己負担割合（1〜3割）により異なります。
                  詳細はお問い合わせください。
                </p>
                <p className="text-xs text-ink-subtle mt-3 border-t border-border pt-3">
                  ※ 具体的な料金はクライアントより確認次第記載します
                </p>
              </div>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[#1E6B5A] hover:bg-primary-dark text-white font-bold px-6 py-3.5 rounded-full transition-colors"
              >
                訪問介護について相談する
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary-light py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-ink mb-4">ご利用のご相談</h2>
          <p className="text-ink-muted mb-8 leading-loose">
            まずはお気軽にお問い合わせください。相談は無料です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0175-34-3297"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              📞 0175-34-3297 お電話
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white hover:bg-primary-light text-primary font-bold px-7 py-3.5 rounded-full border border-border transition-colors"
            >
              お問い合わせフォーム
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
