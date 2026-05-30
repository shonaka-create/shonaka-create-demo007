import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "三恵会とは",
  description:
    "社会福祉法人 三恵会の理念・沿革・法人概要。「天の恵み・地の恵み・人の恵み」の精神で、埼玉県さいたま市を拠点に38年間、地域の介護サービスを支えています。",
};

const history = [
  { year: "昭和62年（1987年）", event: "社会福祉法人 三恵会 設立認可。特別養護老人ホーム 三恵苑 開設（さいたま市西区）" },
  { year: "平成初期", event: "デイサービス開始。地域の在宅介護需要に応じてサービスを拡充" },
  { year: "平成中期", event: "特別養護老人ホーム ひかわ 開設。養護老人ホーム 富士見園 事業承継・運営開始" },
  { year: "平成後期", event: "地域包括支援センター 受託開始。訪問介護・居宅介護支援事業所を開設" },
  { year: "令和6年（2024年）2月", event: "埼玉県「多様な働き方実践企業 プラチナ認定」取得" },
];

const overview = [
  { label: "法人名", value: "社会福祉法人 三恵会" },
  { label: "法人番号", value: "6030005001266" },
  { label: "所在地", value: "〒331-0052 埼玉県さいたま市西区大字中釘2219-4" },
  { label: "設立", value: "昭和62年11月18日（1987年）" },
  {
    label: "事業内容",
    value:
      "特別養護老人ホーム（三恵苑・ひかわ）/ 養護老人ホーム（富士見園）/ デイサービス / 訪問介護 / 居宅介護支援 / 地域包括支援センター",
  },
  { label: "受賞・認定", value: "埼玉県「多様な働き方実践企業 プラチナ認定」（令和6年2月1日取得）" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/60 text-xs tracking-widest uppercase mb-2">About Us</p>
          <h1 className="text-3xl sm:text-4xl font-bold">三恵会とは</h1>
        </div>
      </div>

      {/* Philosophy */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-4">
              Philosophy
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6">
              法人の理念
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-primary leading-loose">
              「天の恵み・地の恵み・人の恵み」
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "天の恵み",
                kanji: "天",
                description:
                  "自然の恵みへの感謝。気候・風土・環境と調和した暮らしを大切にし、入居者・利用者が心豊かに生活できる環境を整えます。",
              },
              {
                title: "地の恵み",
                kanji: "地",
                description:
                  "大地・地域への感謝。地域社会との繋がりを大切にし、地域に根ざした介護・福祉サービスを38年にわたって提供し続けています。",
              },
              {
                title: "人の恵み",
                kanji: "人",
                description:
                  "人と人との繋がりへの感謝。スタッフ・入居者・ご家族・地域の方々との絆を大切に、互いに支え合う関係性を育んでいます。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface rounded-2xl border border-border overflow-hidden"
              >
                <div className="bg-primary h-20 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white/90">
                    {item.kanji}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink mb-3">{item.title}</h3>
                  <p className="text-sm text-ink-muted leading-loose">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platinum Certification */}
      <section className="bg-primary-dark py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-400/15 text-yellow-200 text-sm font-bold px-4 py-2 rounded-full border border-yellow-400/25 mb-6">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.5l-3.71 1.95.71-4.13L2 5.5l4.15-.75L8 1z" />
                </svg>
                令和6年2月1日 取得
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                埼玉県
                <br />
                「多様な働き方実践企業
                <br />
                プラチナ認定」
              </h2>
              <p className="text-white/75 leading-loose">
                埼玉県が認定する「多様な働き方実践企業」制度において、
                最高位の「プラチナ認定」を取得しました。
                育児・介護との両立支援、フレキシブルな勤務体制、
                職員の定着・育成への取り組みが高く評価されました。
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl border border-white/20 p-7">
              <h3 className="text-white font-bold mb-5">認定のポイント</h3>
              <ul className="space-y-4">
                {[
                  "育児休業・介護休業の積極的な取得促進",
                  "短時間勤務制度・時差出勤制度の整備",
                  "職員の働きやすさ向上のための施設環境改善",
                  "法人全体でのハラスメント防止体制の確立",
                  "キャリアアップ支援と職員研修プログラムの充実",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/80 text-sm">
                    <svg
                      className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-sm font-bold tracking-widest uppercase mb-4 text-center">
            History
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink text-center mb-12">
            沿革
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 border-l-2 border-border space-y-10">
              {history.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary border-4 border-surface top-1" />
                  <time className="text-primary text-sm font-bold mb-2 block">
                    {item.year}
                  </time>
                  <p className="text-ink-muted text-sm leading-loose">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Table */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-sm font-bold tracking-widest uppercase mb-4 text-center">
            Overview
          </p>
          <h2 className="text-3xl font-bold text-ink text-center mb-12">
            法人概要
          </h2>

          <div className="max-w-3xl mx-auto bg-surface rounded-2xl border border-border overflow-hidden">
            {overview.map((row, idx) => (
              <div
                key={row.label}
                className={`flex flex-col sm:flex-row ${
                  idx < overview.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <dt className="bg-primary-light text-primary font-bold text-sm px-6 py-4 sm:w-40 shrink-0">
                  {row.label}
                </dt>
                <dd className="text-sm text-ink px-6 py-4 leading-loose">
                  {row.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruit CTA */}
      <section className="bg-primary-light py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-ink mb-4">三恵会で働きませんか？</h2>
          <p className="text-ink-muted mb-8 leading-loose">
            私たちの理念に共感し、ともに地域の介護を支えてくれる仲間を募集しています。
          </p>
          <Link
            href="/recruit"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full transition-colors"
          >
            採用情報を見る
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
