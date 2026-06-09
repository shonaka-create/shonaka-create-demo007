import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "採用情報｜社会福祉法人 三恵会｜むつ市の介護職求人",
  description:
    "社会福祉法人 三恵会（青森県むつ市大畑町）の採用情報。介護職員・ホームヘルパーを募集中。年間賃金300万円〜、処遇改善手当あり。ハローワーク求人あり。",
};

const jobs = [
  {
    id: "caregiver",
    title: "介護職員",
    facility: "特別養護老人ホーム 延寿園",
    tag: "正職員",
    count: "3名",
    description: "施設利用者に対する介護業務全般（入浴・排泄・食事・移動等の介助）",
    hours: [
      "① 6:45 〜 15:45",
      "② 8:30 〜 17:30",
      "③ 16:15 〜 翌 9:15（夜勤）",
    ],
    salary: {
      base: "148,100円〜",
      items: [
        { label: "資格手当", value: "5,000円（介護福祉士）" },
        { label: "業務手当", value: "8,000〜26,000円" },
        { label: "処遇改善手当", value: "13,000円" },
        { label: "夜勤手当", value: "5,000円 / 回（月3〜5回）" },
        { label: "通勤手当", value: "上限 15,000円" },
        { label: "処遇改善手当（年）", value: "610,000円（3月・10月 2回払）" },
        { label: "賞与（年）", value: "300,000円〜（昨年実績）" },
        { label: "年間賃金", value: "3,000,000円〜" },
      ],
    },
    qualifications: [
      "介護福祉士（保有者優遇）",
      "普通自動車免許",
      "資格・経験不問（やる気があれば歓迎）",
    ],
    color: "bg-[#2A6B47]",
  },
  {
    id: "homehelper",
    title: "ホームヘルパー",
    facility: "延寿園ホームヘルプセンター",
    tag: "準職員",
    count: "2名",
    description: "訪問介護計画に基づき、清掃・食事・排泄等の介助全般と付随する業務",
    hours: [
      "日勤 ① 8:00 〜 17:00",
    ],
    salary: {
      base: "148,100円〜",
      items: [
        { label: "資格手当", value: "5,000円（介護福祉士）" },
        { label: "処遇改善手当", value: "13,000円" },
        { label: "通勤手当", value: "上限 15,000円" },
        { label: "処遇改善手当（年）", value: "200,000円（3月・10月 2回払）" },
        { label: "賞与（年）", value: "300,000円〜（昨年実績）" },
        { label: "年間賃金", value: "2,400,000円〜" },
      ],
    },
    qualifications: [
      "介護職員初任者研修修了者（旧ホームヘルパー２級）以上",
      "普通自動車二種免許 保有者優遇◎",
      "登録ヘルパー同時募集（勤務時間等は相談後決定）",
    ],
    color: "bg-[#1E6B5A]",
  },
];

const commonBenefits = [
  { label: "休日", value: "年間105日" },
  { label: "昇給", value: "定時昇給あり" },
  { label: "社会保険", value: "健康保険・厚生年金・雇用保険・労災保険" },
  { label: "退職金", value: "退職金制度加入" },
  { label: "有給休暇", value: "6ヶ月経過後 10日有" },
  { label: "育児・介護", value: "産前産後休業・育児休業・介護休業あり" },
  { label: "制服", value: "制服貸与（登録ヘルパーを除く）" },
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
            <h1 className="text-3xl sm:text-5xl font-bold mb-5">
              むつ市大畑町で、<br />一緒に働きませんか？
            </h1>
            <p className="text-primary-light text-lg font-bold mb-4">
              「天の恵み・地の恵み・人の恵み」
            </p>
            <p className="text-white/80 text-lg sm:text-xl leading-loose">
              昭和59年の創設以来、大畑町に根差してきた三恵会で、
              地域の高齢者の生活を支える仕事をしませんか。
              Uターン・地元定着を歓迎。経験・資格不問のポジションもあります。
            </p>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Job Listings</p>
            <h2 className="text-3xl font-bold text-ink">募集職種</h2>
          </div>

          <div className="space-y-10">
            {jobs.map((job) => (
              <div key={job.id} className="bg-surface rounded-2xl border border-border overflow-hidden shadow-sm">
                {/* Header */}
                <div className={`${job.color} text-white relative overflow-hidden`}>
                  <div className="absolute right-0 top-0 w-64 h-full opacity-[0.07]" aria-hidden="true">
                    <svg viewBox="0 0 200 120" fill="none" className="w-full h-full">
                      <circle cx="160" cy="60" r="90" stroke="white" strokeWidth="2" />
                      <circle cx="60" cy="60" r="55" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="relative px-7 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="text-white/60 text-xs font-medium mb-1.5">{job.facility}</p>
                      <h3 className="text-2xl sm:text-3xl font-bold">{job.title}</h3>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="text-sm font-bold bg-white/20 border border-white/30 px-4 py-1.5 rounded-full">
                        {job.tag}
                      </span>
                      <div>
                        <p className="text-white/50 text-[10px] uppercase tracking-wider">募集人数</p>
                        <p className="text-xl font-bold">{job.count}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-7 sm:p-9 grid grid-cols-1 lg:grid-cols-5 gap-8">
                  {/* Left: Job Details */}
                  <div className="lg:col-span-3 space-y-7">
                    {/* 仕事内容 */}
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </span>
                        <h4 className="text-sm font-bold text-ink">仕事内容</h4>
                      </div>
                      <p className="text-sm text-ink-muted leading-loose pl-[34px]">{job.description}</p>
                    </div>

                    {/* 勤務時間 */}
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                        <h4 className="text-sm font-bold text-ink">勤務時間</h4>
                      </div>
                      <ul className="pl-[34px] space-y-2">
                        {job.hours.map((h) => (
                          <li key={h} className="text-sm text-ink-muted">{h}</li>
                        ))}
                      </ul>
                    </div>

                    {/* 応募資格 */}
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                        <h4 className="text-sm font-bold text-ink">必要資格・応募条件</h4>
                      </div>
                      <ul className="pl-[34px] space-y-2">
                        {job.qualifications.map((q) => (
                          <li key={q} className="text-sm text-ink-muted flex items-baseline gap-2">
                            <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Salary */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-2.5 mb-4">
                      <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <span className="text-white text-xs font-black leading-none">¥</span>
                      </span>
                      <h4 className="text-sm font-bold text-ink">給与・手当</h4>
                    </div>

                    <div className={`${job.color} rounded-xl p-5 mb-3 text-white`}>
                      <p className="text-white/70 text-xs mb-1">基本給</p>
                      <p className="text-3xl font-bold">{job.salary.base}</p>
                    </div>

                    <div className="bg-bg rounded-xl overflow-hidden border border-border">
                      {job.salary.items.map((item, idx) => {
                        const isAnnual = item.label === "年間賃金";
                        return (
                          <div
                            key={item.label}
                            className={`flex text-sm ${idx < job.salary.items.length - 1 ? "border-b border-border" : ""} ${isAnnual ? "bg-primary-light" : ""}`}
                          >
                            <dt className={`px-4 py-2.5 w-36 shrink-0 font-medium ${isAnnual ? "text-primary" : "text-ink-muted"}`}>
                              {item.label}
                            </dt>
                            <dd className={`px-4 py-2.5 ${isAnnual ? "text-primary font-bold text-base" : "text-ink font-medium"}`}>
                              {item.value}
                            </dd>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Benefits */}
      <section className="bg-surface py-14">
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
                <p className="text-xs text-ink-subtle mb-3">※ 写真・氏名は受領次第記載</p>
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
