import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "延寿園在宅介護支援センター（居宅介護支援）｜社会福祉法人 三恵会｜むつ市",
  description:
    "延寿園在宅介護支援センター（青森県むつ市大畑町）。ケアマネジャーによるケアプラン作成・介護サービス調整。介護のお悩みはまずご相談ください。相談は無料です。",
};

const subNavItems = [
  { label: "延寿園", href: "/services/enshuuen", current: false },
  { label: "季の恵", href: "/services/kinoegumi", current: false },
  { label: "ふれあいかん", href: "/services/day-service", current: false },
  { label: "ホームヘルプ", href: "/services/home-help", current: false },
  { label: "在宅介護支援", href: "/services/kaigo-support", current: true },
];

export default function KaigoSupportPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#1A8066] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="パンくずリスト" className="mb-4">
            <ol className="flex items-center gap-1.5 text-xs text-white/50">
              <li><Link href="/" className="hover:text-white/80 transition-colors">ホーム</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services/enshuuen" className="hover:text-white/80 transition-colors">サービスのご案内</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">在宅介護支援センター</li>
            </ol>
          </nav>
          <p className="text-white/70 text-sm mb-1">居宅介護支援</p>
          <h1 className="text-3xl sm:text-4xl font-bold">延寿園在宅介護支援センター</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose">
            ケアマネジャーがご本人・ご家族の状況を丁寧にヒアリングし、
            最適なケアプランを作成・調整します。相談は無料です。
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
                      ? "text-white bg-[#1A8066]"
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
        <p className="text-gray-400 font-medium">ケアマネジャーによる相談対応（バナー用）</p>
        <p className="text-sm text-gray-300 mt-1">※ 写真は受領次第差し替えます</p>
      </div>

      {/* Overview */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary text-xs font-bold tracking-widest mb-2">Care Management</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-5">
                延寿園在宅介護支援センター
                <span className="block text-base font-normal text-ink-muted mt-1">居宅介護支援</span>
              </h2>
              <p className="text-ink-muted leading-loose mb-4">
                延寿園在宅介護支援センターは、ケアマネジャー（介護支援専門員）が在籍する居宅介護支援事業所です。
                ご本人やご家族のご希望・生活状況をしっかりとヒアリングし、
                最適な介護サービスの組み合わせを考えたケアプランを作成します。
              </p>
              <p className="text-ink-muted leading-loose mb-6">
                「どこに相談したらいいかわからない」「どんなサービスが使えるのかわからない」
                そんな時も、まず当センターにお気軽にお問い合わせください。
                介護に関するあらゆるご相談を無料でお受けします。
              </p>

              <div className="space-y-2.5">
                <h3 className="font-bold text-ink text-sm">主な業務内容</h3>
                {[
                  "ケアプランの作成（費用は介護保険が全額負担）",
                  "介護サービス事業者との連絡・調整",
                  "医療機関・行政機関との連携",
                  "定期的なモニタリング・ケアプランの見直し",
                  "介護保険の申請代行サポート",
                  "介護に関する相談（無料）",
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
                    { label: "施設名", value: "延寿園在宅介護支援センター" },
                    { label: "事業種別", value: "居宅介護支援（第2種社会福祉事業）" },
                    { label: "所在地", value: "青森県むつ市大畑町大赤川29番地4" },
                    { label: "電話", value: "0175-34-3297（代表）" },
                    { label: "FAX", value: "0175-34-3495" },
                    { label: "開設年", value: "※ クライアントより確認中" },
                    { label: "営業日", value: "月〜土（祝日も対応）※詳細はお問い合わせください" },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-3">
                      <dt className="font-bold text-ink-muted w-20 shrink-0">{row.label}</dt>
                      <dd className="text-ink-muted">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* こんな時に */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-4">こんな時にご相談ください</h3>
                <ul className="space-y-2">
                  {[
                    "介護保険の申請をしたいが何から始めたらいいかわからない",
                    "親の介護が必要になったが、どのサービスを使えばいいか知りたい",
                    "今使っているサービスの見直しをしたい",
                    "施設入所を検討しているが、まず在宅でできることを探したい",
                    "医療と介護、両方のサポートが必要",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-muted">
                      <span className="text-ink-subtle mt-1 shrink-0">▷</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 相談無料 */}
              <div className="bg-[#E6F4EC] rounded-2xl border border-[#1A8066]/30 p-6">
                <h3 className="font-bold text-ink mb-3 flex items-center gap-2">
                  <span className="text-[#1A8066] text-lg">✓</span>
                  ケアプラン作成・相談は無料です
                </h3>
                <p className="text-sm text-ink-muted leading-loose">
                  居宅介護支援（ケアプランの作成）は、介護保険が費用を全額負担するため、
                  利用者の自己負担はありません。また、相談だけでも無料でお受けしています。
                  「まだ介護保険を申請していない」という方もお気軽にどうぞ。
                </p>
              </div>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[#1A8066] hover:bg-primary-dark text-white font-bold px-6 py-3.5 rounded-full transition-colors"
              >
                ケアマネジャーに相談する
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary-light py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-ink mb-4">介護のご相談、お気軽にどうぞ</h2>
          <p className="text-ink-muted mb-8 leading-loose">
            ケアマネジャーが丁寧にお話を伺います。相談は無料です。
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
