import type { Metadata } from "next";
import Link from "next/link";
import PositionsGrid from "./PositionsGrid";

export const metadata: Metadata = {
  title: "採用情報｜社会福祉法人 三恵会｜むつ市の介護職求人",
  description:
    "社会福祉法人 三恵会（青森県むつ市大畑町）の採用情報。介護職員・看護職員・リハビリスタッフ等10職種を募集中。20・30代を積極採用。経験・資格不問のポジションもあります。",
};


const commonBenefits = [
  { label: "休日",     value: "年間105日" },
  { label: "昇給",     value: "定時昇給あり" },
  { label: "社会保険", value: "健康保険・厚生年金・雇用保険・労災保険" },
  { label: "退職金",   value: "退職金制度加入" },
  { label: "有給休暇", value: "6ヶ月経過後 10日有" },
  { label: "育児・介護", value: "産前産後休業・育児休業・介護休業あり" },
  { label: "制服",     value: "制服貸与（登録ヘルパーを除く）" },
];

export default function RecruitPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-primary-dark text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 opacity-[0.06] pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="140" r="140" stroke="white" strokeWidth="2" />
            <circle cx="100" cy="300" r="140" stroke="white" strokeWidth="2" />
            <circle cx="300" cy="300" r="140" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav aria-label="パンくずリスト" className="mb-5">
            <ol className="flex items-center gap-1.5 text-xs text-white/50">
              <li><Link href="/" className="hover:text-white/80 transition-colors">ホーム</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">採用情報</li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <p className="text-white/60 text-sm tracking-widest mb-5 uppercase">
              社会福祉法人 三恵会 ｜ 採用情報
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold mb-6">
              むつ市大畑町で、<br />介護の仕事を選ぶ理由。
            </h1>
            <p className="text-white/80 text-lg sm:text-xl leading-loose">
              昭和59年の創設以来、大畑町に根差してきた三恵会。スタッフの平均勤続年数が長く、安定して働き続けられる環境があります。20代・30代を積極採用中。資格・経験がなくてもOKです。
            </p>
          </div>
        </div>
      </div>

      {/* Why Work Here */}
      <section className="bg-white py-14 sm:py-16 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Why Choose Us</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">三恵会で働く理由</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "長く続けられる安定職場",
                body: "スタッフの平均勤続年数が長く、腰を据えて働ける職場です。育児中・介護中のスタッフも多く活躍しています。",
                note: "※ 平均勤続年数は別途確認中",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                title: "大畑町になくてはならない存在",
                body: "大畑町に唯一の特別養護老人ホームとして、40年以上にわたって地域の介護を担ってきました。「必要とされる仕事」がここにあります。",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "20代・30代を積極採用",
                body: "資格・経験不問の職種多数。Uターン・地元定着を歓迎します。若い世代が長く働けるよう、研修・資格取得を支援しています。",
              },
            ].map((reason) => (
              <div key={reason.title} className="bg-bg rounded-2xl border border-border p-6">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="font-bold text-ink mb-3">{reason.title}</h3>
                <p className="text-sm text-ink-muted leading-loose">{reason.body}</p>
                {reason.note && <p className="text-xs text-ink-muted/60 mt-2">{reason.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <PositionsGrid />

      {/* Common Benefits */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Benefits</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">各事業所 共通待遇</h2>
          </div>

          <div className="bg-bg rounded-2xl border border-border overflow-hidden">
            {commonBenefits.map((item, idx) => (
              <div
                key={item.label}
                className={`flex flex-col sm:flex-row ${idx < commonBenefits.length - 1 ? "border-b border-border" : ""}`}
              >
                <dt className="bg-primary-light text-primary font-bold text-sm px-6 py-4 sm:w-44 shrink-0">
                  {item.label}
                </dt>
                <dd className="text-sm text-ink px-6 py-4 leading-loose">
                  {item.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Voice Placeholder */}
      <section className="bg-primary-light py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Staff Voice</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">職員の声</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white rounded-2xl border border-border p-6 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 border-2 border-dashed border-gray-200 flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-xs text-ink-muted mb-3">※ 写真・氏名は受領次第記載</p>
                <div className="w-full min-h-[80px] bg-gray-50 border border-dashed border-gray-200 rounded-lg flex items-center justify-center p-4">
                  <p className="text-xs text-gray-400 text-center">職員インタビューコメント<br />（受領次第記載）</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-primary-dark py-14 sm:py-16 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">応募・お問い合わせ</h2>
            <p className="text-white/70 leading-loose">
              施設見学・説明会も随時受け付けています。「話を聞いてみたい」という段階でも歓迎です。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-8">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
              <p className="text-white/60 text-xs mb-1">直接応募・見学のご予約</p>
              <p className="font-bold text-sm mb-3">延寿園　採用担当</p>
              <a href="tel:0175-34-3297" className="text-2xl font-bold hover:text-primary-light transition-colors">
                0175-34-3297
              </a>
              <p className="text-white/60 text-xs mt-1">月〜金　9:00〜17:00</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
              <p className="text-white/60 text-xs mb-1">ハローワーク経由</p>
              <p className="font-bold text-sm mb-3">むつ公共職業安定所</p>
              <a href="tel:0175-22-1331" className="text-2xl font-bold hover:text-primary-light transition-colors">
                0175-22-1331
              </a>
              <p className="text-white/60 text-xs mt-1">ハローワーク むつ</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-primary-light text-primary font-bold px-8 py-4 rounded-full transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Webフォームで問い合わせる
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
