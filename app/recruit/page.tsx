import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "採用情報｜社会福祉法人 三恵会｜むつ市の介護職求人",
  description:
    "社会福祉法人 三恵会（青森県むつ市大畑町）の採用情報。介護職員・ケアマネジャー・看護師・調理員を募集。Uターン・地元定着歓迎。経験・資格不問のポジションもあります。",
};

const jobs = [
  {
    title: "延寿園 介護職員（正社員）",
    facility: "特別養護老人ホーム 延寿園",
    types: ["正社員（新卒・中途）"],
    description:
      "特別養護老人ホームでの介護業務全般（入浴・食事・排泄介助、レクリエーション、記録など）。三交替ローテーション勤務。入居者に寄り添ったケアを実践します。",
    qualification: "未経験可・やる気があれば応募可。介護職員初任者研修・実務者研修・介護福祉士保有者優遇。",
    salary: "※ 詳細はお問い合わせください（各種手当・処遇改善加算あり）",
    hours: "※ 詳細はお問い合わせください（日勤・早番・遅番・夜勤のローテーション）",
    benefits: "資格手当・各種社会保険完備・研修費補助・有給休暇あり",
  },
  {
    title: "延寿園 介護職員（非常勤）",
    facility: "特別養護老人ホーム 延寿園",
    types: ["パートタイム（非常勤）"],
    description:
      "入居者の日常生活支援と身体介護業務全般。勤務時間・日数は相談に応じます。扶養内勤務も可能です。育児中・介護中の方も活躍しています。",
    qualification: "高齢者への愛心があれば未経験可",
    salary: "※ 詳細はお問い合わせください（処遇改善費含む）",
    hours: "※ 詳細はお問い合わせください（応相談）",
    benefits: "資格手当・処遇改善費",
  },
  {
    title: "介護支援専門員（ケアマネジャー）",
    facility: "延寿園在宅介護支援センター",
    types: ["正社員"],
    description:
      "居宅介護支援事業所でのケアプラン作成、サービス調整・連絡、モニタリング業務。地域の高齢者・ご家族に寄り添いながら、チームでサポートする環境です。",
    qualification: "介護支援専門員証保有必須、普通自動車免許必須",
    salary: "※ 詳細はお問い合わせください（経験・資格により優遇）",
    hours: "※ 詳細はお問い合わせください",
    benefits: "産休・育休取得可・各種社会保険完備",
  },
  {
    title: "延寿園 看護職員",
    facility: "特別養護老人ホーム 延寿園",
    types: ["正社員・パートタイム"],
    description:
      "施設内での医療的ケア・健康管理業務全般。入居者の健康状態の把握・処置・服薬管理など。医師・介護スタッフと連携しながら安全なケアを提供します。",
    qualification: "看護師・准看護師免許保有者",
    salary: "※ 詳細はお問い合わせください（経験・資格により優遇）",
    hours: "※ 詳細はお問い合わせください",
    benefits: "資格手当・各種社会保険完備・研修支援あり",
  },
  {
    title: "延寿園 調理員",
    facility: "特別養護老人ホーム 延寿園",
    types: ["正社員・パートタイム"],
    description:
      "入居者への食事提供に関わる調理・盛付・洗浄業務全般。栄養士の指示のもと、入居者に合わせた安全でおいしい食事を提供します。",
    qualification: "特になし（調理師免許保有者優遇）",
    salary: "※ 詳細はお問い合わせください（経験・資格考慮）",
    hours: "※ 詳細はお問い合わせください",
    benefits: "調理師手当（保有者）・各種社会保険完備",
  },
];

const benefits = [
  { icon: "💰", title: "給与・賞与", body: "各職種・経験・資格により優遇。処遇改善加算・各種資格手当あり。詳細はお問い合わせください。" },
  { icon: "📅", title: "休日・休暇", body: "シフト制。年次有給休暇。育児・介護休暇取得実績あり。" },
  { icon: "🏥", title: "社会保険", body: "健康保険・厚生年金・雇用保険・労災保険完備。" },
  { icon: "📚", title: "研修・資格支援", body: "新人研修・OJT完備。資格取得費用補助・研修参加費用補助あり。介護福祉士受験支援。" },
  { icon: "🏠", title: "交通費", body: "通勤手当支給（規定あり）。詳細はお問い合わせください。" },
  { icon: "⏰", title: "多様な勤務形態", body: "フルタイム・パートタイムに対応。育児中・介護中のスタッフも多数活躍中。" },
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-5xl font-bold mb-5">
                地元・下北で、
                <br />
                一緒に働きませんか？
              </h1>
              <p className="text-white/75 text-lg leading-loose max-w-xl">
                むつ市大畑町で暮らし続けながら、地域の高齢者と向き合えるのが三恵会の仕事です。
                「天の恵み・地の恵み・人の恵み」の精神を共に体現してくれる仲間を、
                経験・未経験を問わず募集しています。
              </p>
            </div>

            {/* スタッフ写真プレースホルダー */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden h-64 bg-gray-700/30 border-2 border-dashed border-white/20 flex flex-col items-center justify-center">
                <svg className="w-12 h-12 text-white/30 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-white/40 text-sm font-medium">スタッフ写真</p>
                <p className="text-white/30 text-xs mt-1">※ 写真は受領次第差し替えます</p>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/40 text-xs font-bold text-center">
                    ─ あなたのやさしさを、地域の力に ─
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appeal Points */}
      <section className="bg-surface py-12 sm:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Why Join Us</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">三恵会で働く理由</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                title: "地域密着の職場",
                desc: "むつ市大畑町という地元に根ざした職場で、地域の高齢者とそのご家族に直接貢献できます。",
                icon: "🏘️",
              },
              {
                title: "スタッフを大切にする職場",
                desc: "育児中・介護中のスタッフも多数活躍中。多様な働き方に対応した環境を整えています。",
                icon: "🤝",
              },
              {
                title: "成長できる環境",
                desc: "新人研修・OJT・資格取得支援が充実。未経験から介護のプロを目指せます。",
                icon: "📈",
              },
            ].map((item) => (
              <div key={item.title} className="bg-bg rounded-2xl border border-border p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-ink-muted leading-loose">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Voice Placeholder */}
      <section className="bg-primary-light py-12 sm:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Staff Voice</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">職員の声</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white rounded-2xl border border-border p-6 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 border-2 border-dashed border-gray-200 flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-xs text-ink-subtle mb-2">※ 写真・氏名は受領次第記載</p>
                <div className="w-full h-20 bg-gray-50 border border-dashed border-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-xs text-gray-400 text-center">職員インタビューコメント<br />（受領次第記載）</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">
              Job Listings
            </p>
            <h2 className="text-3xl font-bold text-ink">募集職種</h2>
            <p className="text-xs text-ink-subtle mt-2">※ 給与・勤務時間の詳細は確認次第更新します。お問い合わせください。</p>
          </div>

          <div className="space-y-5">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="rounded-2xl border border-border bg-surface p-6 sm:p-7"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-ink">{job.title}</h3>
                    </div>
                    <p className="text-xs text-ink-muted mb-3">
                      <span className="font-bold text-ink">施設：</span>{job.facility}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {job.types.map((type) => (
                        <span
                          key={type}
                          className="text-xs font-medium bg-white border border-border text-ink-muted px-2.5 py-1 rounded-full"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-ink-muted leading-loose mb-4">
                      {job.description}
                    </p>
                    <div className="space-y-1.5 text-xs text-ink">
                      <p>
                        <span className="font-bold text-ink-muted">給与：</span>{job.salary}
                      </p>
                      <p>
                        <span className="font-bold text-ink-muted">勤務時間：</span>{job.hours}
                      </p>
                      <p>
                        <span className="font-bold text-ink-muted">待遇・休日：</span>{job.benefits}
                      </p>
                      <p>
                        <span className="font-bold text-ink-muted">応募資格：</span>
                        {job.qualification}
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="shrink-0 inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
                  >
                    応募・問い合わせ
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">
              Benefits
            </p>
            <h2 className="text-3xl font-bold text-ink">待遇・福利厚生</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-bg rounded-2xl border border-border p-6"
              >
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-ink mb-2">{b.title}</h3>
                <p className="text-sm text-ink-muted leading-loose">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            まずはお気軽にご連絡ください
          </h2>
          <p className="text-white/80 leading-loose mb-8">
            施設見学・説明会のご参加も随時受け付けています。
            「話を聞いてみたい」という段階でも歓迎です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-primary-light text-primary font-bold px-8 py-4 rounded-full transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              応募・見学のお問い合わせ
            </Link>
            <a
              href="tel:0175-34-3297"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0175-34-3297 お電話
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
