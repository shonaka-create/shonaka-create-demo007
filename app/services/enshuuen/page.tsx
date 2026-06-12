import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PhotoSlider from "@/components/PhotoSlider";

export const metadata: Metadata = {
  title: "延寿園（特別養護老人ホーム）｜社会福祉法人 三恵会｜むつ市大畑町",
  description:
    "社会福祉法人 三恵会が運営する特別養護老人ホーム延寿園（青森県むつ市大畑町大赤川）。24時間体制の介護・看取りケア・認知症ケアに対応。入所申込受付中。お気軽にご相談ください。",
};

const COLOR = "bg-[#2A6B47]";

const subNavItems = [
  { label: "延寿園",     href: "/services/enshuuen",    current: true  },
  { label: "季の恵",     href: "/services/kinoegumi",   current: false },
  { label: "ふれあいかん", href: "/services/day-service", current: false },
  { label: "ホームヘルプ", href: "/services/home-help",  current: false },
  { label: "在宅介護支援", href: "/services/kaigo-support", current: false },
];

const features = [
  "24時間365日の介護体制",
  "看取り介護（ターミナルケア）",
  "リハビリテーション（機能訓練）",
  "認知症ケア",
  "入浴サービス（個浴・機械浴対応）",
  "季節行事・レクリエーション",
  "ショートステイ 季の恵 併設",
];

const infoItems = [
  { label: "施設種別", value: "特別養護老人ホーム（介護老人福祉施設）" },
  { label: "開設",    value: "昭和59年4月1日（1984年）" },
  { label: "定員",    value: "※ 別途確認中" },
  { label: "居室タイプ", value: "※ 別途確認中" },
  { label: "所在地",  value: "〒039-4401 青森県むつ市大畑町大赤川29番地4" },
  { label: "電話",    value: "0175-34-3297" },
  { label: "FAX",    value: "0175-34-3495" },
  { label: "メール",  value: "※ 別途確認中" },
];

const admissionFlow = [
  { step: "STEP 1", text: "まずお電話ください（0175-34-3297）" },
  { step: "STEP 2", text: "施設見学（無料・予約制）" },
  { step: "STEP 3", text: "入所申し込み書類のご提出" },
  { step: "STEP 4", text: "判定会議・優先順位の確認" },
  { step: "STEP 5", text: "入所日の決定・契約" },
];

const faqs = [
  { q: "待機期間はどのくらいですか？",
    a: "空き状況によって異なります。まずはお電話にてご相談ください。現在の状況をお知らせします。" },
  { q: "費用が払えるか心配です。減額制度はありますか？",
    a: "所得段階に応じて、食費・居住費の負担軽減制度（補足給付）があります。詳しくはスタッフまでお気軽にご相談ください。" },
  { q: "認知症でも入所できますか？",
    a: "はい、認知症の方も入所いただけます。認知症ケアに対応したスタッフが個別に支援します。" },
  { q: "見学は一人で来ても大丈夫ですか？",
    a: "もちろん大丈夫です。見学は無料・予約制で随時受け付けています。お電話にてご予約ください。" },
];

export default function EnshuuenPage() {
  return (
    <>
      {/* 1. Page Header */}
      <div className={`${COLOR} text-white py-14 sm:py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/70 text-sm mb-1">特別養護老人ホーム</p>
          <h1 className="text-3xl sm:text-4xl font-bold">延寿園</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose">
            青森県むつ市大畑町に位置する三恵会の基幹施設です。地域の高齢者介護の中核として、入居者一人ひとりに寄り添ったケアを提供しています。
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
        { label: "延寿園 外観" },
        { label: "延寿園 居室・共用スペース" },
        { label: "延寿園 食堂・レクリエーション" },
      ]} />

      {/* 4. Overview */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left */}
            <div>
              <p className="text-ink-muted leading-loose mb-4">
                延寿園は、社会福祉法人 三恵会が青森県むつ市大畑町に運営する特別養護老人ホームです。24時間365日体制の介護体制のもと、「その人らしい生活」を支えるための個別ケアを実践し、入居者一人ひとりの尊厳を大切にしたケアを提供しています。
              </p>
              <p className="text-ink-muted leading-loose mb-7">
                リハビリテーション・認知症ケア・看取り介護に対応し、季節の行事や日常のプログラムを通じて、入居者の生きがいある生活を支えます。
              </p>
              <div className="space-y-2">
                <p className="text-sm font-bold text-ink mb-3">主なサービス・特徴</p>
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
                      <dt className="font-bold text-ink-muted w-24 shrink-0 text-xs pt-0.5">{row.label}</dt>
                      <dd className="text-ink text-sm">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Admission Flow */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-4">入所の流れ</h3>
                <ol className="space-y-3">
                  {admissionFlow.map((item) => (
                    <li key={item.step} className="flex items-start gap-3 text-sm text-ink-muted">
                      <span className="text-xs font-bold text-white bg-primary rounded-full px-2 py-0.5 shrink-0 mt-0.5">{item.step}</span>
                      {item.text}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Admission Conditions */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-4">入所条件</h3>
                <ul className="space-y-2">
                  {[
                    "介護保険の要介護認定を受けていること（原則として要介護3以上）",
                    "在宅での生活が困難な状況にあること",
                    "感染症などの入院治療が必要な状態でないこと",
                  ].map((cond) => (
                    <li key={cond} className="flex items-start gap-2 text-sm text-ink-muted">
                      <span className="text-ink-subtle mt-1 shrink-0">▷</span>
                      {cond}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fee */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-3">費用の目安</h3>
                <p className="text-sm text-ink-muted leading-loose">
                  費用は介護度・所得段階・負担割合により異なります。減額制度（食費・居住費の負担軽減）もございます。詳しくはお電話またはお問い合わせフォームよりご相談ください。
                </p>
                <p className="text-xs text-ink-subtle mt-3 border-t border-border pt-3">
                  ※ 具体的な費用は別途確認次第更新します
                </p>
              </div>

              <Link
                href="/contact"
                className={`group flex items-center justify-center gap-2 ${COLOR} hover:opacity-90 text-white font-bold px-6 py-3.5 rounded-full transition-all duration-200 hover:shadow-md`}
              >
                施設見学・入所のご相談
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
          <h2 className="text-2xl font-bold text-ink mb-4">施設見学・入所のご相談</h2>
          <p className="text-ink-muted mb-8 leading-loose">
            施設への入所をご検討の方、見学のご希望など、お気軽にお問い合わせください。専門スタッフが丁寧にご対応いたします。
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
          { label: "延寿園" },
        ]}
      />
    </>
  );
}
