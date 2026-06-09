import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "季の恵（ショートステイ）｜社会福祉法人 三恵会｜むつ市大畑町",
  description:
    "社会福祉法人 三恵会が運営するショートステイ「季の恵」（青森県むつ市大畑町）。延寿園に併設する短期入所生活介護。在宅介護を続けながら、短期間の施設利用が可能。ご家族の介護負担軽減に。",
};

const subNavItems = [
  { label: "延寿園", href: "/services/enshuuen", current: false },
  { label: "季の恵", href: "/services/kinoegumi", current: true },
  { label: "ふれあいかん", href: "/services/day-service", current: false },
  { label: "ホームヘルプ", href: "/services/home-help", current: false },
  { label: "在宅介護支援", href: "/services/kaigo-support", current: false },
];

export default function KinoegumiPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#3A8060] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="パンくずリスト" className="mb-4">
            <ol className="flex items-center gap-1.5 text-xs text-white/50">
              <li><Link href="/" className="hover:text-white/80 transition-colors">ホーム</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services/enshuuen" className="hover:text-white/80 transition-colors">サービスのご案内</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">季の恵</li>
            </ol>
          </nav>
          <p className="text-white/70 text-sm mb-1">ショートステイ（短期入所生活介護）</p>
          <h1 className="text-3xl sm:text-4xl font-bold">季の恵</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose">
            延寿園に併設するショートステイ施設です。
            在宅生活を続けながら、短期間の宿泊介護サービスをご利用いただけます。
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
                      ? "text-white bg-[#3A8060]"
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

      {/* Overview */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              {/* 施設写真プレースホルダー */}
              <div className="relative rounded-2xl overflow-hidden h-52 sm:h-64 mb-7 bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center shadow-sm">
                <svg className="w-12 h-12 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-gray-500 font-medium">ショートステイ 季の恵 施設写真</p>
                <p className="text-xs text-gray-400 mt-1">※ 写真は受領次第差し替えます</p>
              </div>

              <p className="text-ink-muted leading-loose mb-4">
                「季の恵」は、延寿園に併設するショートステイ（短期入所生活介護）施設です。
                在宅での生活を続けながら、短期間だけ施設に宿泊して介護・看護を受けることができます。
              </p>
              <p className="text-ink-muted leading-loose mb-6">
                ご本人の体調管理・機能維持はもちろん、介護をされているご家族の
                疲れの回復や、仕事・急用などへの対応として幅広くご利用いただいています。
              </p>

              <dl className="space-y-3 text-sm">
                {[
                  { label: "施設種別", value: "ショートステイ（短期入所生活介護）" },
                  { label: "定員", value: "20床" },
                  { label: "開設", value: "平成22年7月（2010年）" },
                  { label: "所在地", value: "〒039-4401 青森県むつ市大畑町大赤川29番地4（延寿園内）" },
                  { label: "電話", value: "0175-34-3297" },
                  { label: "FAX", value: "0175-34-3495" },
                  { label: "メール", value: "※ クライアントより確認中" },
                ].map((row) => (
                  <div key={row.label} className="flex gap-3">
                    <dt className="font-bold text-ink-muted w-24 shrink-0 text-xs pt-0.5">{row.label}</dt>
                    <dd className="text-ink text-sm">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="space-y-6">
              {/* Features */}
              <div className="bg-[#E6F4EC] rounded-2xl border border-[#3A8060]/30 p-6">
                <h3 className="font-bold text-ink mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#3A8060] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  主なサービス・特徴
                </h3>
                <ul className="space-y-2">
                  {[
                    "日常生活の介護・見守り",
                    "入浴サービス（個浴・機械浴対応）",
                    "食事提供（朝・昼・夕・おやつ）",
                    "機能訓練・リハビリテーション",
                    "レクリエーション・季節行事",
                    "延寿園の専門スタッフによるケア",
                    "緊急時の対応体制あり",
                  ].map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-ink-muted">
                      <span className="text-[#3A8060] mt-1 shrink-0">•</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* こんな時に */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-4">こんな時にご利用ください</h3>
                <ul className="space-y-2">
                  {[
                    "介護しているご家族が疲れて休みたいとき",
                    "ご家族が急用・出張・旅行のとき",
                    "ご本人の体調変化後の試験的な施設体験",
                    "特別養護老人ホーム入所前のお試し利用",
                    "定期的に自宅と施設を行き来する生活スタイル",
                  ].map((cond) => (
                    <li key={cond} className="flex items-start gap-2 text-sm text-ink-muted">
                      <span className="text-ink-subtle mt-1 shrink-0">▷</span>
                      {cond}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Usage */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-4">ご利用条件</h3>
                <p className="text-sm text-ink-muted leading-loose mb-3">
                  介護保険の要介護認定を受けた<strong className="text-ink">要支援1〜要介護5</strong>の方が対象です。
                </p>
                <p className="text-sm text-ink-muted leading-loose">
                  利用期間は介護保険の範囲内（原則30日以内）で、連続利用や定期的な利用も可能です。
                  詳しくはケアマネジャーまたは当施設までご相談ください。
                </p>
              </div>

              {/* Fee */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-3">費用の目安</h3>
                <p className="text-sm text-ink-muted leading-loose">
                  費用は介護度・所得段階・負担割合により異なります。
                  詳しくはお電話またはお問い合わせフォームよりご相談ください。
                </p>
                <p className="text-xs text-ink-subtle mt-3 border-t border-border pt-3">
                  ※ 具体的な費用はクライアントより確認次第記載します
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary-light py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-ink mb-4">ご利用のご相談</h2>
          <p className="text-ink-muted mb-8 leading-loose">
            見学・体験利用も随時受け付けています。
            お気軽にお問い合わせください。
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
