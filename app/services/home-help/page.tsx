import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PhotoSlider from "@/components/PhotoSlider";

export const metadata: Metadata = {
  title: "延寿園ホームヘルプセンター（訪問介護）｜社会福祉法人 三恵会｜むつ市",
  description:
    "延寿園ホームヘルプセンター（青森県むつ市大畑町）。ホームヘルパーが自宅を訪問し、身体介護・生活援助・通院同行を提供。住み慣れた自宅での暮らしを支えます。",
};

const COLOR = "bg-[#1E6B5A]";

const subNavItems = [
  { label: "延寿園",     href: "/services/enshuuen",    current: false },
  { label: "季の恵",     href: "/services/kinoegumi",   current: false },
  { label: "ふれあいかん", href: "/services/day-service", current: false },
  { label: "ホームヘルプ", href: "/services/home-help",  current: true  },
  { label: "在宅介護支援", href: "/services/kaigo-support", current: false },
];

const features = [
  "身体介護（入浴・排泄・食事の介助）",
  "生活援助（掃除・洗濯・買い物・調理）",
  "通院同行（病院への付き添い）",
  "服薬確認・健康状態の観察",
  "相談・助言（無料）",
];

const infoItems = [
  { label: "施設名",   value: "延寿園ホームヘルプセンター" },
  { label: "事業種別", value: "訪問介護（第2種社会福祉事業）" },
  { label: "所在地",   value: "青森県むつ市大畑町大赤川29番地4" },
  { label: "電話",     value: "0175-34-3297（代表）" },
  { label: "FAX",     value: "0175-34-3495" },
  { label: "開設年",   value: "※ 別途確認中" },
  { label: "営業時間", value: "※ 別途確認中" },
];

const visitFlow = [
  { step: "STEP 1", text: "お電話・フォームにてご相談（0175-34-3297）" },
  { step: "STEP 2", text: "ケアマネジャーによる訪問アセスメント" },
  { step: "STEP 3", text: "ケアプランの作成・サービス内容の確認" },
  { step: "STEP 4", text: "訪問介護計画書の作成" },
  { step: "STEP 5", text: "サービス開始" },
];

const faqs = [
  { q: "まだ介護保険を申請していませんが相談できますか？",
    a: "はい、もちろんです。介護保険の申請手続きについても一緒にサポートいたします。まずはお気軽にお電話ください。" },
  { q: "土日・祝日も対応できますか？",
    a: "対応状況は別途確認が必要です。まずはお電話にてご相談ください。" },
  { q: "ヘルパーを自分で指定できますか？",
    a: "ご要望はできる限りお聞きします。担当ヘルパーについてのご希望はお気軽にご相談ください。" },
];

export default function HomeHelpPage() {
  return (
    <>
      {/* 1. Page Header */}
      <div className={`${COLOR} text-white py-14 sm:py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/70 text-sm mb-1">訪問介護</p>
          <h1 className="text-3xl sm:text-4xl font-bold">延寿園ホームヘルプセンター</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose">
            ホームヘルパーが自宅を訪問し、身体介護・生活援助を提供します。「住み慣れた自宅で暮らし続けたい」を実現するためのサポートです。
          </p>
        </div>
      </div>

      {/* 2. Sub Navigation */}
      <nav className="bg-surface border-b border-border sticky top-[64px] lg:top-[80px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex overflow-x-auto gap-1 py-3">
            {subNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`whitespace-nowrap text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                    item.current ? `text-white ${COLOR}` : "text-ink-muted hover:text-primary hover:bg-primary-light"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 3. Photo Slider */}
      <PhotoSlider slides={[
        { label: "訪問介護 身体介護の様子" },
        { label: "訪問介護 生活援助の様子" },
        { label: "訪問介護 通院同行の様子" },
      ]} />

      {/* 4. Overview */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left */}
            <div>
              <p className="text-ink-muted leading-loose mb-4">
                延寿園ホームヘルプセンターは、ホームヘルパーがご自宅を訪問して、身体介護や生活援助などのサービスを提供する訪問介護事業所です。
              </p>
              <p className="text-ink-muted leading-loose mb-7">
                「住み慣れた自宅で、これからも安心して暮らし続けたい」という願いをかなえるために、利用者の状態や生活スタイルに合わせた、きめ細かなサービスを提供します。
              </p>
              <div className="space-y-2">
                <p className="text-sm font-bold text-ink mb-3">主なサービス内容</p>
                {features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2 text-sm text-ink-muted">
                    <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="space-y-5">
              {/* Facility Info */}
              <div className="bg-primary-light rounded-2xl p-6">
                <h3 className="font-bold text-ink mb-4">施設概要</h3>
                <dl className="space-y-2.5 text-sm">
                  {infoItems.map((row) => (
                    <div key={row.label} className="flex gap-3">
                      <dt className="font-bold text-ink-muted w-20 shrink-0 text-xs pt-0.5">{row.label}</dt>
                      <dd className="text-ink-muted text-sm">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Visit Flow */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-4">ご利用の流れ</h3>
                <ol className="space-y-3">
                  {visitFlow.map((item) => (
                    <li key={item.step} className="flex items-start gap-3 text-sm text-ink-muted">
                      <span className="text-xs font-bold text-white bg-primary rounded-full px-2 py-0.5 shrink-0 mt-0.5">{item.step}</span>
                      {item.text}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Target */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-4">ご利用対象</h3>
                <p className="text-sm text-ink-muted leading-loose">
                  介護保険の要介護認定を受けた<strong className="text-ink">要支援1〜2・要介護1〜5</strong>の方が対象です。まずはケアマネジャーまたは当センターにご相談ください。
                </p>
              </div>

              {/* Fee */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-3">利用料金</h3>
                <p className="text-sm text-ink-muted leading-loose">
                  利用料は介護保険の自己負担割合（1〜3割）により異なります。詳細はお問い合わせください。
                </p>
                <p className="text-xs text-ink-subtle mt-3 border-t border-border pt-3">
                  ※ 具体的な料金は別途確認次第更新します
                </p>
              </div>

              <Link
                href="/contact"
                className={`group flex items-center justify-center gap-2 ${COLOR} hover:opacity-90 text-white font-bold px-6 py-3.5 rounded-full transition-all duration-200 hover:shadow-md`}
              >
                訪問介護について相談する
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="bg-surface py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">よくある質問</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <div key={idx} className="bg-bg rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-2 flex items-start gap-2">
                  <span className="text-primary font-bold shrink-0">Q.</span>
                  {item.q}
                </h3>
                <p className="text-sm text-ink-muted leading-loose pl-6">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact CTA */}
      <section className="bg-primary-light py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-ink mb-4">ご利用のご相談</h2>
          <p className="text-ink-muted mb-8 leading-loose">
            まずはお気軽にお問い合わせください。相談は無料です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0175-34-3297" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              0175-34-3297 お電話
            </a>
            <Link href="/contact" className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-primary-light text-primary font-bold px-7 py-3.5 rounded-full border border-border transition-all duration-200 hover:shadow-sm">
              お問い合わせフォーム
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Breadcrumb
        items={[
          { label: "サービスのご案内", href: "/services" },
          { label: "ホームヘルプセンター" },
        ]}
      />
    </>
  );
}
