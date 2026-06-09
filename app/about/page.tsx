import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "三恵会とは｜社会福祉法人 三恵会の理念・沿革・法人概要",
  description:
    "社会福祉法人 三恵会（青森県むつ市大畑町）の理念・沿革・法人概要。「天の恵み・地の恵み・人の恵み」の精神で地域の介護を支えています。特別養護老人ホーム延寿園・ふれあいかんデイサービス等を運営。",
};

const history = [
  {
    year: "昭和59年2月（1984年）",
    event: "社会福祉法人 三恵会 設立認可（青森県むつ市大畑町）",
  },
  {
    year: "昭和59年4月（1984年）",
    event: "特別養護老人ホーム 延寿園 開設・事業開始（むつ市大畑町大赤川29番地4）",
  },
  {
    year: "平成○○年（○○年）",
    event: "ふれあいかんデイサービスセンター 開設（通所介護）※開設年は別途確認中",
  },
  {
    year: "平成○○年（○○年）",
    event: "延寿園ホームヘルプセンター 開設（訪問介護）※開設年は別途確認中",
  },
  {
    year: "平成○○年（○○年）",
    event: "延寿園在宅介護支援センター 開設（居宅介護支援）※開設年は別途確認中",
  },
  {
    year: "平成22年7月（2010年）",
    event: "ショートステイ 季の恵 開設（短期入所生活介護・定員20床）",
  },
];

const overview = [
  { label: "法人名", value: "社会福祉法人 三恵会" },
  { label: "代表者", value: "理事長　松岡 茂樹" },
  { label: "法人番号", value: "※ 別途確認次第記載" },
  { label: "設立", value: "昭和59年2月7日（1984年）" },
  { label: "事業開始", value: "昭和59年4月1日（1984年）" },
  { label: "所在地", value: "〒039-4401 青森県むつ市大畑町大赤川29番地4" },
  { label: "電話", value: "0175-34-3297" },
  { label: "FAX", value: "0175-34-3495" },
  {
    label: "事業内容",
    value:
      "【第1種】特別養護老人ホーム（延寿園）／【第2種】ショートステイ（季の恵）・デイサービス（ふれあいかん）・訪問介護（延寿園ホームヘルプセンター）・居宅介護支援（延寿園在宅介護支援センター）",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="パンくずリスト" className="mb-4">
            <ol className="flex items-center gap-1.5 text-xs text-white/50">
              <li><Link href="/" className="hover:text-white/80 transition-colors">ホーム</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">三恵会とは</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold">三恵会とは</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose">
            「天の恵み・地の恵み・人の恵み」の精神で、青森県むつ市大畑町の地域介護を支えています。
          </p>
        </div>
      </div>

      {/* About Photo Banner */}
      <div className="relative h-52 sm:h-64 overflow-hidden bg-gray-100 flex flex-col items-center justify-center border-b-2 border-dashed border-gray-200">
        <svg className="w-12 h-12 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-gray-400 font-medium">施設・活動の写真（バナー用）</p>
        <p className="text-sm text-gray-300 mt-1">※ 写真は受領次第差し替えます</p>
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
                  "大地・地域への感謝。青森県むつ市大畑町の地域社会との繋がりを大切にし、地域に根ざした介護・福祉サービスを提供し続けています。",
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
                className="bg-surface rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-44 bg-primary-dark flex items-center justify-center overflow-hidden">
                  <span className="absolute text-[150px] font-black text-white/[0.06] select-none leading-none" aria-hidden="true">
                    {item.kanji}
                  </span>
                  <div className="relative text-center">
                    <span className="text-7xl font-bold text-white block">{item.kanji}</span>
                    <p className="text-primary-light text-sm mt-3 font-bold tracking-widest">{item.title}</p>
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-sm text-ink-muted leading-loose">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* President Greeting */}
      <section className="bg-primary-light py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-4 text-center">
              Greeting
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink text-center mb-10">
              理事長挨拶
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* 理事長写真プレースホルダー */}
              <div className="lg:col-span-1">
                <div className="rounded-2xl overflow-hidden bg-gray-100 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center h-64 shadow-sm">
                  <svg className="w-12 h-12 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-sm text-gray-400 font-medium">理事長 写真</p>
                  <p className="text-xs text-gray-300 mt-1">※ 写真は受領次第差し替えます</p>
                </div>
                <p className="text-center text-sm text-ink-muted mt-3">
                  社会福祉法人 三恵会<br />
                  <strong className="text-ink">理事長　松岡 茂樹</strong>
                </p>
              </div>
              {/* 挨拶文（抜粋） */}
              <div className="lg:col-span-2 bg-white rounded-2xl border border-border p-7 shadow-sm">
                <p className="text-sm text-ink-muted leading-[2] mb-6">
                  社会福祉法人三恵会は、地域の高齢者を大切にする事を目的として昭和59年4月、特別養護老人ホームを運営するために設立され、開設以来、高齢化社会が進む中で地域から信頼される施設、地域に開かれた地域福祉に貢献できる法人運営を目指して努力を重ねて参りました。
                </p>
                <p className="text-sm text-ink-muted leading-[2] mb-6">
                  長年の経験と実績を生かし新たな知恵を出し合い、下北の地域に根差した質の高いサービスをご利用者の皆様に提供してまいりたいと考えております。今後も創設の精神「老人福祉の充実」を胸に刻み、高齢者福祉の一翼を担ってまいります。
                </p>
                <Link
                  href="/greeting"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
                >
                  理事長挨拶の全文を読む
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-ink text-center mb-4">
            沿革
          </h2>
          <p className="text-center text-xs text-ink-subtle mb-12">
            ※ 年号・詳細は別途確認次第正式な情報に更新します
          </p>

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
