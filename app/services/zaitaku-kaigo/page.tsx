import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "訪問介護・居宅介護支援｜延寿園ホームヘルプセンター｜社会福祉法人 三恵会",
  description:
    "延寿園ホームヘルプセンター（訪問介護）・延寿園在宅介護支援センター（居宅介護支援）｜むつ市大畑町。住み慣れた自宅での生活を、ホームヘルパー・ケアマネジャーが支援します。相談無料。",
};

const subNavItems = [
  { label: "ふれあいかんデイサービスセンター", href: "/services/day-service", current: false },
  { label: "訪問介護・居宅介護支援", href: "/services/zaitaku-kaigo", current: true },
];

export default function ZaitakuKaigoPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="パンくずリスト" className="mb-4">
            <ol className="flex items-center gap-1.5 text-xs text-white/50">
              <li><Link href="/" className="hover:text-white/80 transition-colors">ホーム</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services/zaitaku-kaigo" className="hover:text-white/80 transition-colors">サービスのご案内</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">訪問介護・居宅介護支援</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold">訪問介護・居宅介護支援</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose">
            延寿園ホームヘルプセンター（訪問介護）と延寿園在宅介護支援センター（居宅介護支援）が、
            住み慣れた自宅での生活を支えます。
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
      <div className="relative h-56 sm:h-72 overflow-hidden bg-gray-100 border-b-2 border-dashed border-gray-200 flex flex-col items-center justify-center">
        <svg className="w-14 h-14 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-gray-400 font-medium">在宅介護サービスの写真（バナー用）</p>
        <p className="text-sm text-gray-300 mt-1">※ 写真は受領次第差し替えます</p>
      </div>

      {/* Overview */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 space-y-5">
              {/* 延寿園ホームヘルプセンター 概要 */}
              <div className="bg-primary-light rounded-2xl p-6">
                <h3 className="font-bold text-ink mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  延寿園ホームヘルプセンター
                </h3>
                <dl className="space-y-3 text-sm">
                  {[
                    { label: "事業種別", value: "訪問介護（ホームヘルプサービス）" },
                    { label: "所在地", value: "青森県むつ市大畑町（詳細はクライアント確認中）" },
                    { label: "電話", value: "0175-34-3297（代表）" },
                    { label: "FAX", value: "0175-34-3495" },
                    { label: "対応時間", value: "毎日 8:30〜17:30（詳細はお問い合わせください）" },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-3">
                      <dt className="font-bold text-ink-muted w-24 shrink-0">{row.label}</dt>
                      <dd className="text-ink-muted">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* 延寿園在宅介護支援センター 概要 */}
              <div className="bg-primary-light rounded-2xl p-6">
                <h3 className="font-bold text-ink mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  延寿園在宅介護支援センター
                </h3>
                <dl className="space-y-3 text-sm">
                  {[
                    { label: "事業種別", value: "居宅介護支援（ケアプラン作成・サービス調整）" },
                    { label: "所在地", value: "青森県むつ市大畑町（詳細はクライアント確認中）" },
                    { label: "電話", value: "0175-34-3297（代表）" },
                    { label: "FAX", value: "0175-34-3495" },
                    { label: "対応時間", value: "毎日 8:30〜17:30（詳細はお問い合わせください）" },
                    { label: "相談費用", value: "無料" },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-3">
                      <dt className="font-bold text-ink-muted w-24 shrink-0">{row.label}</dt>
                      <dd className="text-ink-muted">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3.5 rounded-full transition-colors"
              >
                在宅サービスについて相談する（無料）
              </Link>
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <p className="text-primary text-xs font-bold tracking-widest mb-2">Home Care</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-5">
                住み慣れた自宅で、
                <br />
                暮らし続けるために。
                <span className="block text-base font-normal text-ink-muted mt-1">
                  訪問介護 ／ 居宅介護支援
                </span>
              </h2>
              <p className="text-ink-muted leading-loose mb-4">
                「住み慣れた自宅で暮らし続けたい」というご本人・ご家族の希望を実現するために、
                専門スタッフが丁寧にサポートします。
              </p>
              <p className="text-ink-muted leading-loose mb-6">
                ホームヘルパーが自宅を訪問する訪問介護と、
                ケアマネジャーがケアプランを作成・調整する居宅介護支援の、
                2つのサービスを提供しています。
              </p>

              <h3 className="font-bold text-ink text-sm mb-3">こんな時にご相談ください</h3>
              <div className="space-y-2">
                {[
                  "要介護認定の申請をしたい",
                  "退院後の生活が心配で、介護サービスを始めたい",
                  "親の介護について家族で相談したい",
                  "一人暮らしの親が心配",
                  "福祉用具（ベッド・車いす等）の購入・レンタルを検討している",
                  "緊急に介護サービスが必要になった",
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
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Services</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">提供サービス</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg rounded-2xl border border-border p-6 sm:p-7">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink mb-3">延寿園ホームヘルプセンター（訪問介護）</h3>
              <p className="text-sm text-ink-muted leading-loose mb-4">
                ホームヘルパーが自宅に訪問し、身体介護（入浴・排泄・食事の介助）や
                生活援助（掃除・洗濯・買い物代行）を行います。
                本人が自宅で安心して生活できるよう、日常的なサポートを提供します。
              </p>
              <ul className="space-y-1.5">
                {[
                  "身体介護（入浴・排泄・食事・移動の介助）",
                  "生活援助（掃除・洗濯・調理・買い物）",
                  "通院時の乗降介助",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-ink-muted">
                    <span className="text-primary mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-bg rounded-2xl border border-border p-6 sm:p-7">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink mb-3">延寿園在宅介護支援センター（居宅介護支援）</h3>
              <p className="text-sm text-ink-muted leading-loose mb-4">
                介護支援専門員（ケアマネジャー）がご本人・ご家族の状況をていねいにヒアリングし、
                最適なケアプランを作成。必要なサービスの調整・管理を一括して担います。
                ケアプラン作成・相談は無料です。
              </p>
              <ul className="space-y-1.5">
                {[
                  "介護保険サービスのケアプラン作成（無料）",
                  "サービス事業者との調整・連絡",
                  "定期的なモニタリング・プラン見直し",
                  "医療機関・行政との連携",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-ink-muted">
                    <span className="text-primary mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary-light py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-ink mb-4">相談は無料・お気軽にどうぞ</h2>
          <p className="text-ink-muted mb-8 leading-loose">
            介護についてのどんな疑問・不安もお気軽にご相談ください。
            ご本人だけでなく、ご家族からのご相談も歓迎しています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              お問い合わせはこちら
            </Link>
            <a
              href="tel:0175-34-3297"
              className="inline-flex items-center justify-center bg-white hover:bg-primary-light text-primary font-bold px-7 py-3.5 rounded-full border border-border transition-colors"
            >
              📞 0175-34-3297
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
