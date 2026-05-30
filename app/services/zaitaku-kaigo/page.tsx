import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "在宅介護支援センター｜三恵苑在宅介護支援センター｜さいたま市西区",
  description:
    "三恵苑在宅介護支援センター（さいたま市西区高木892）。6名のケアマネジャーが居宅介護支援・訪問介護を提供。ケアプラン作成・介護相談は無料。8:30〜17:30受付。",
};

const subNavItems = [
  { label: "デイサービス", href: "/services/day-service", current: false },
  { label: "在宅介護支援", href: "/services/zaitaku-kaigo", current: true },
  { label: "地域包括支援センター", href: "/services/chiiki-houkatsu", current: false },
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
              <li><Link href="/services" className="hover:text-white/80 transition-colors">サービスのご案内</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">在宅介護支援</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold">在宅介護支援</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose">
            三恵苑在宅介護支援センター ─ 介護保険制度以前から、在宅での介護相談を支え続けてきた実績があります。
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
        <img src="/service-care.jpg" alt="在宅介護でお茶を提供する介護スタッフの様子" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-primary-dark/25" />
        <div className="absolute bottom-5 left-6">
          <span className="bg-primary/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
            居宅介護支援 ／ 相談無料
          </span>
        </div>
      </div>

      {/* Overview */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 space-y-5">
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
                    { label: "施設名", value: "三恵苑在宅介護支援センター" },
                    { label: "所在地", value: "埼玉県さいたま市西区高木892（特別養護老人ホーム ひかわ内）" },
                    { label: "電話", value: "048-620-7531" },
                    { label: "FAX", value: "048-620-7537" },
                    { label: "メール", value: "hikawa@sankeikai.org" },
                    { label: "対応時間", value: "毎日 8:30〜17:30（正月三が日を除く）" },
                    { label: "相談費用", value: "無料" },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-3">
                      <dt className="font-bold text-ink-muted w-24 shrink-0">{row.label}</dt>
                      <dd className="text-ink-muted">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Carers Salon */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-3">介護者サロン</h3>
                <p className="text-sm text-ink-muted leading-loose">
                  認知症介護者向けの茶話会「<strong className="text-ink">話してガッテン、介護者サロン</strong>」を定期開催。
                  介護の悩みや不安を、同じ立場の方々と語り合える場です。お気軽にご参加ください。
                </p>
              </div>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3.5 rounded-full transition-colors"
              >
                在宅サービスについて相談する
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
                三恵苑在宅介護支援センター
                <span className="block text-base font-normal text-ink-muted mt-1">
                  訪問介護 ／ 居宅介護支援
                </span>
              </h2>
              <p className="text-ink-muted leading-loose mb-4">
                「住み慣れた自宅で暮らし続けたい」というご本人・ご家族の希望を実現するために、
                専門スタッフが丁寧にサポートします。
                介護保険制度が始まる前から在宅介護の相談を受け付けてきた、長い実績と信頼があります。
              </p>
              <p className="text-ink-muted leading-loose mb-6">
                6名のケアマネジャーがそれぞれの専門性を活かし、
                一人暮らしの方・難病をお持ちの方・遠方にお住まいのご家族からの相談など、
                さまざまな状況に対応しています。
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
              <h3 className="text-lg font-bold text-ink mb-3">訪問介護</h3>
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
              <h3 className="text-lg font-bold text-ink mb-3">居宅介護支援（ケアプラン）</h3>
              <p className="text-sm text-ink-muted leading-loose mb-4">
                介護支援専門員（ケアマネジャー）がご本人・ご家族の状況をていねいにヒアリングし、
                最適なケアプランを作成。必要なサービスの調整・管理を一括して担います。
              </p>
              <ul className="space-y-1.5">
                {[
                  "介護保険サービスのケアプラン作成",
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

      {/* Staff */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Our Staff</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">6名のケアマネジャー</h2>
            <p className="text-ink-muted mt-3 max-w-2xl mx-auto text-sm leading-loose">
              それぞれが異なる専門性と経験を持つケアマネジャーが、多様な状況に対応します。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "地域事情に精通", desc: "地域のサービス事業者や地域資源に詳しく、スムーズな調整が可能です。" },
              { title: "頑固な利用者にも対応", desc: "介護を拒否しがちな利用者との関係づくりも得意としています。" },
              { title: "遠距離介護に対応", desc: "遠方にお住まいのご家族からのご相談も、丁寧にサポートします。" },
              { title: "難病患者の支援実績", desc: "難病をお持ちの独り暮らしの方への支援経験が豊富です。" },
              { title: "地域連携のリーダー", desc: "さいたま市のケアマネジャー団体会長を務める経験豊かなリーダーが在籍。" },
              { title: "チームで支える", desc: "6名が連携することで、休日・緊急時もチームでお客様をサポートします。" },
            ].map((item) => (
              <div key={item.title} className="bg-surface rounded-2xl border border-border p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink text-sm mb-1.5">{item.title}</h3>
                    <p className="text-xs text-ink-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
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
              href="tel:048-620-7531"
              className="inline-flex items-center justify-center bg-white hover:bg-primary-light text-primary font-bold px-7 py-3.5 rounded-full border border-border transition-colors"
            >
              📞 048-620-7531
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
