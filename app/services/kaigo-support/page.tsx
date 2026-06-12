import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PhotoSlider from "@/components/PhotoSlider";

export const metadata: Metadata = {
  title: "延寿園在宅介護支援センター（居宅介護支援）｜社会福祉法人 三恵会｜むつ市",
  description:
    "延寿園在宅介護支援センター（青森県むつ市大畑町）。ケアマネジャーによるケアプラン作成・介護サービス調整。介護のお悩みはまずご相談ください。相談は無料です。",
};

const COLOR = "bg-[#1A8066]";

const subNavItems = [
  { label: "延寿園",     href: "/services/enshuuen",    current: false },
  { label: "季の恵",     href: "/services/kinoegumi",   current: false },
  { label: "ふれあいかん", href: "/services/day-service", current: false },
  { label: "ホームヘルプ", href: "/services/home-help",  current: false },
  { label: "在宅介護支援", href: "/services/kaigo-support", current: true  },
];

const features = [
  "ケアプランの作成（費用は介護保険が全額負担）",
  "介護サービス事業者との連絡・調整",
  "医療機関・行政機関との連携",
  "定期的なモニタリング・ケアプランの見直し",
  "介護保険の申請代行サポート",
  "介護に関する相談（無料）",
];

const infoItems = [
  { label: "施設名",   value: "延寿園在宅介護支援センター" },
  { label: "事業種別", value: "居宅介護支援（第2種社会福祉事業）" },
  { label: "所在地",   value: "青森県むつ市大畑町大赤川29番地4" },
  { label: "電話",     value: "0175-34-3297（代表）" },
  { label: "FAX",     value: "0175-34-3495" },
  { label: "開設年",   value: "※ 別途確認中" },
  { label: "営業日",   value: "月〜土（祝日も対応）※詳細はお問い合わせください" },
];

const useCases = [
  "介護保険の申請をしたいが何から始めたらいいかわからない",
  "親の介護が必要になったが、どのサービスを使えばいいか知りたい",
  "今使っているサービスの見直しをしたい",
  "施設入所を検討しているが、まず在宅でできることを探したい",
  "医療と介護、両方のサポートが必要",
];

const faqs = [
  { q: "ケアプランの作成費用はかかりますか？",
    a: "居宅介護支援（ケアプランの作成）は、介護保険が費用を全額負担するため、利用者の自己負担はありません。" },
  { q: "まだ要介護認定を受けていませんが相談できますか？",
    a: "はい、認定前でもご相談いただけます。申請の手続きからお手伝いします。まずはお電話ください。" },
  { q: "他の事業所のケアマネジャーから変更することはできますか？",
    a: "はい、変更は可能です。手続きについてはお気軽にご相談ください。" },
];

export default function KaigoSupportPage() {
  return (
    <>
      {/* 1. Page Header */}
      <div className={`${COLOR} text-white py-14 sm:py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/70 text-sm mb-1">居宅介護支援</p>
          <h1 className="text-3xl sm:text-4xl font-bold">延寿園在宅介護支援センター</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose">
            ケアマネジャーがご本人・ご家族の状況を丁寧にヒアリングし、最適なケアプランを作成・調整します。相談は無料です。
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
        { label: "ケアマネジャーによる相談対応" },
        { label: "ケアプラン作成・打ち合わせの様子" },
        { label: "在宅訪問・モニタリングの様子" },
      ]} />

      {/* 4. Overview */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left */}
            <div>
              <p className="text-ink-muted leading-loose mb-4">
                延寿園在宅介護支援センターは、ケアマネジャー（介護支援専門員）が在籍する居宅介護支援事業所です。ご本人やご家族のご希望・生活状況をしっかりとヒアリングし、最適な介護サービスの組み合わせを考えたケアプランを作成します。
              </p>
              <p className="text-ink-muted leading-loose mb-7">
                「どこに相談したらいいかわからない」「どんなサービスが使えるのかわからない」そんな時も、まず当センターにお気軽にお問い合わせください。介護に関するあらゆるご相談を無料でお受けします。
              </p>
              <div className="space-y-2">
                <p className="text-sm font-bold text-ink mb-3">主な業務内容</p>
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

              {/* Use Cases */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-4">こんな時にご相談ください</h3>
                <ul className="space-y-2">
                  {useCases.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-muted">
                      <span className="text-ink-subtle mt-1 shrink-0">▷</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Free note */}
              <div className="bg-primary-light rounded-2xl border border-primary/20 p-6">
                <h3 className="font-bold text-ink mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  ケアプラン作成・相談は無料です
                </h3>
                <p className="text-sm text-ink-muted leading-loose">
                  居宅介護支援（ケアプランの作成）は、介護保険が費用を全額負担するため、利用者の自己負担はありません。また、相談だけでも無料でお受けしています。
                </p>
              </div>

              <Link
                href="/contact"
                className={`group flex items-center justify-center gap-2 ${COLOR} hover:opacity-90 text-white font-bold px-6 py-3.5 rounded-full transition-all duration-200 hover:shadow-md`}
              >
                ケアマネジャーに相談する
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
          <h2 className="text-2xl font-bold text-ink mb-4">介護のご相談、お気軽にどうぞ</h2>
          <p className="text-ink-muted mb-8 leading-loose">
            ケアマネジャーが丁寧にお話を伺います。相談は無料です。
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
          { label: "在宅介護支援センター" },
        ]}
      />
    </>
  );
}
