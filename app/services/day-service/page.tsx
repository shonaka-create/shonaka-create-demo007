import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ふれあいかんデイサービスセンター（通所介護）｜社会福祉法人 三恵会｜むつ市",
  description:
    "ふれあいかんデイサービスセンター（青森県むつ市）。入浴・食事・機能訓練・レクリエーション・送迎付きの通所介護。要支援1〜要介護5対象。体験利用・見学随時受付中。",
};

const subNavItems = [
  { label: "延寿園", href: "/services/enshuuen", current: false },
  { label: "季の恵", href: "/services/kinoegumi", current: false },
  { label: "ふれあいかん", href: "/services/day-service", current: true },
  { label: "ホームヘルプ", href: "/services/home-help", current: false },
  { label: "在宅介護支援", href: "/services/kaigo-support", current: false },
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
              <li><Link href="/services/day-service" className="hover:text-white/80 transition-colors">サービスのご案内</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">デイサービス</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold">ふれあいかんデイサービスセンター</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose">
            むつ市大畑町で運営する通所介護施設です。「今日も来てよかった」と思っていただける
            プログラムと雰囲気づくりを大切にしています。
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
        <p className="text-gray-400 font-medium">デイサービスの活動写真（バナー用）</p>
        <p className="text-sm text-gray-300 mt-1">※ 写真は受領次第差し替えます</p>
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
                ふれあいかんデイサービスセンター
                <span className="block text-base font-normal text-ink-muted mt-1">
                  通所介護
                </span>
              </h2>
              <p className="text-ink-muted leading-loose mb-4">
                ふれあいかんデイサービスセンターは、日帰りで施設に通い、
                入浴・食事・機能訓練などのサービスを受けながら、
                仲間との交流や社会参加の機会をもてる通所介護施設です。
              </p>
              <p className="text-ink-muted leading-loose mb-6">
                「今日も楽しかった」「また来たい」と思っていただけるよう、
                スタッフ一同、日々のプログラムと施設の雰囲気づくりを大切にしています。
                ご家族の介護負担軽減にも貢献します。
              </p>

              <div className="space-y-2.5">
                <h3 className="font-bold text-ink text-sm">主なサービス内容</h3>
                {[
                  "入浴サービス（個浴・機械浴対応）",
                  "食事提供（栄養バランスのとれた昼食・おやつ）",
                  "機能訓練・リハビリテーション",
                  "脳トレ・体操・レクリエーション・手芸等の活動プログラム",
                  "季節行事（新年会・夏祭り・クリスマス会 等）",
                  "昼食後の個別活動時間",
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
                    { label: "施設名", value: "ふれあいかんデイサービスセンター" },
                    { label: "所在地", value: "青森県むつ市大畑町（詳細は別途確認中）" },
                    { label: "電話", value: "0175-34-3297（代表）" },
                    { label: "開設年", value: "※ 別途確認中" },
                    { label: "営業日", value: "月〜土（祝日も営業）※詳細はお問い合わせください" },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-3">
                      <dt className="font-bold text-ink-muted w-20 shrink-0">{row.label}</dt>
                      <dd className="text-ink-muted">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* 1日のスケジュール */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-4">1日のスケジュール（目安）</h3>
                <ol className="space-y-2">
                  {[
                    { time: "8:30〜", text: "送迎スタート（自宅までお迎え）" },
                    { time: "9:30〜", text: "到着・健康チェック・午前のプログラム" },
                    { time: "12:00〜", text: "昼食" },
                    { time: "13:00〜", text: "個別活動時間（趣味・休憩）" },
                    { time: "14:00〜", text: "午後プログラム・入浴・機能訓練" },
                    { time: "16:00〜", text: "送迎（自宅までお送り）" },
                  ].map((item) => (
                    <li key={item.time} className="flex items-start gap-3 text-sm text-ink-muted">
                      <span className="font-bold text-primary w-16 shrink-0 text-xs pt-0.5">{item.time}</span>
                      {item.text}
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-ink-subtle mt-3">※ スケジュールは目安です。詳細はお問い合わせください。</p>
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
                <h3 className="font-bold text-ink mb-4">利用料金の目安</h3>
                <p className="text-sm text-ink-muted leading-loose">
                  利用料は介護保険の自己負担割合（1〜3割）により異なります。
                  食費・日用品費は別途発生します。詳細はお問い合わせください。
                </p>
                <p className="text-xs text-ink-subtle mt-3 border-t border-border pt-3">
                  ※ 具体的な料金は別途確認次第更新します
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
                desc: "脳トレ・手芸・塗り絵・カラオケなど、個人の趣味や関心に合わせた活動を提供。",
              },
              {
                title: "季節の行事",
                icon: "🎊",
                desc: "新年会・夏祭り・クリスマス会など、四季折々の行事で日常に彩りを添えます。",
              },
              {
                title: "交流・つながり",
                icon: "🌸",
                desc: "仲間との交流や会話を通じて、社会参加の機会を提供します。孤立防止にも貢献。",
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
