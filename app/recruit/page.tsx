import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "採用情報｜社会福祉法人 三恵会｜さいたま市西区の介護職求人",
  description:
    "社会福祉法人 三恵会（さいたま市西区）の採用情報。介護職員・ケアマネジャー・調理員・支援員を募集。月給185,500円〜。埼玉県プラチナ認定取得。研修充実・4週9休・育休実績多数。",
};

const jobs = [
  {
    title: "特別養護老人ホーム ひかわ 介護職員",
    facility: "特別養護老人ホーム ひかわ",
    types: ["正社員（新卒・中途）"],
    description:
      "ユニット型施設での介護業務全般（入浴・食事・排泄介助、レクリエーション、記録など）。三交替ローテーション勤務。少人数ユニットで利用者に寄り添ったケアを実践します。",
    qualification: "未経験可・やる気があれば応募可。介護職員初任者研修・実務者研修・介護福祉士保有者優遇。",
    salary: "基本給185,500円〜＋夜勤手当36,000円＋処遇改善費46,000円程度（専門学校卒20歳の例）",
    hours: "07:00〜16:00 / 08:00〜17:00 / 11:00〜20:00 / 13:00〜22:00 / 22:00〜07:00",
    benefits: "資格手当3,000円、住宅手当15,000円、研修費補助、4週9休、有給休暇10日（6ヶ月後）",
    color: "border-primary bg-primary-light",
    badge: "最も募集中",
  },
  {
    title: "特別養護老人ホーム ひかわ 非常勤介護職員",
    facility: "特別養護老人ホーム ひかわ",
    types: ["パートタイム（非常勤）"],
    description:
      "入居者の日常生活支援と身体介護業務全般。夕方のシフト（16:00〜20:00）を中心に、勤務時間は相談に応じます。扶養内勤務も可能です。",
    qualification: "高齢者への愛心があれば未経験可",
    salary: "時給1,390円〜（処遇改善費含む）",
    hours: "16:00〜20:00（応相談）",
    benefits: "介護福祉士資格手当、処遇改善費",
    color: "border-[#3A8060] bg-[#E6F4EC]",
    badge: "急募",
  },
  {
    title: "介護支援専門員（ケアマネジャー）",
    facility: "居宅介護支援事業所",
    types: ["正社員"],
    description:
      "居宅介護支援事業所でのケアプラン作成、サービス調整・連絡、モニタリング業務。月1回日曜出勤以外は基本的に土日休みで、ワークライフバランスを整えやすい環境です。",
    qualification: "介護支援専門員証保有必須、普通自動車免許必須",
    salary: "月給239,000円〜（未経験30歳）／月給259,500円〜（経験10年以上40歳）",
    hours: "08:30〜17:30 / 09:00〜18:00 / 09:30〜18:30",
    benefits: "産休・育休取得可、4週9休、年末年始休暇",
    color: "border-accent bg-accent-light",
    badge: null,
  },
  {
    title: "養護老人ホーム富士見園 常勤支援員",
    facility: "養護老人ホーム 富士見園",
    types: ["正社員（常勤）"],
    description:
      "入居者の生活支援・見守り、レクリエーションの企画・実施。ローテーション勤務（日勤・早番・遅番・宿直）。書道・カラオケ等のクラブ活動をサポートします。",
    qualification: "ホームヘルパー2級以上または介護福祉士",
    salary: "月給244,000〜311,000円（経験考慮、各種手当・夜勤3回分含む）",
    hours: "08:30〜17:30 / 07:45〜16:45 / 10:00〜19:00 / 16:30〜翌09:30",
    benefits: "資格手当3,000円、住宅手当15,000円、扶養手当、通勤手当、職員食300円、年間107日休日",
    color: "border-border bg-surface",
    badge: null,
  },
  {
    title: "養護老人ホーム富士見園 調理員",
    facility: "養護老人ホーム 富士見園",
    types: ["正社員（常勤）"],
    description:
      "入居者への食事提供に関わる調理・盛付・洗浄業務全般。栄養士の指示のもと、入居者に合わせた食事を提供します。ローテーション勤務（早番・日番）。",
    qualification: "特になし（調理師免許保有者優遇）",
    salary: "月給185,500〜234,500円（資格・経験考慮）",
    hours: "06:30〜15:30 / 09:30〜18:00 / 07:00〜16:00（ローテーション）",
    benefits: "調理師手当3,000円、住宅手当15,000円、扶養手当、通勤手当、職員食350円、年間107日休日（月9日）",
    color: "border-border bg-surface",
    badge: null,
  },
];

const benefits = [
  { icon: "💰", title: "給与・賞与", body: "月給185,500円〜（職種・経験・資格により優遇）。処遇改善加算・各種資格手当あり。" },
  { icon: "📅", title: "休日・休暇", body: "4週9休制（シフト制）。年次有給休暇（6ヶ月後に10日付与）。育児・介護休暇取得実績多数。" },
  { icon: "🏥", title: "社会保険", body: "健康保険・厚生年金・雇用保険・労災保険完備。" },
  { icon: "📚", title: "研修・資格支援", body: "新人研修・OJT完備。資格取得費用補助・研修参加費用補助あり。介護福祉士受験支援。" },
  { icon: "🏠", title: "住宅手当", body: "住宅手当15,000円（規定あり）。通勤手当支給。" },
  { icon: "⏰", title: "多様な勤務形態", body: "フルタイム・パートタイム・時短勤務に対応。育児中・介護中のスタッフも多数活躍中。" },
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
              <div className="inline-flex items-center gap-2 bg-yellow-400/15 text-yellow-200 text-sm font-bold px-4 py-2 rounded-full border border-yellow-400/25 mb-6">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.5l-3.71 1.95.71-4.13L2 5.5l4.15-.75L8 1z" />
                </svg>
                埼玉県 多様な働き方実践企業 プラチナ認定取得
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold mb-5">
                三恵会で、
                <br />
                一緒に働きませんか？
              </h1>
              <p className="text-white/75 text-lg leading-loose max-w-xl">
                「天の恵み・地の恵み・人の恵み」の精神を共に体現してくれる仲間を、経験・未経験を問わず募集しています。
              </p>
            </div>

            {/* Staff photo */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden h-64 shadow-xl">
                <img src="/recruit-staff.jpg" alt="三恵会スタッフのイメージ" className="w-full h-full object-cover object-top" loading="lazy" />
                <div className="absolute inset-0 bg-primary-dark/30" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-xs font-bold text-center">
                    ─ あなたのやさしさを、地域の力に ─
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platinum Certification highlight */}
      <section className="bg-surface py-12 sm:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-2xl p-7 sm:p-9">
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center shrink-0">
                <svg className="w-9 h-9 text-white fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-amber-900 mb-2">
                  埼玉県「多様な働き方実践企業 プラチナ認定」取得（令和6年2月）
                </h2>
                <p className="text-amber-800 leading-loose text-sm">
                  三恵会は、育児・介護との両立支援、フレキシブルな勤務制度、
                  ハラスメント防止など、働きやすい職場環境の整備が評価され、
                  埼玉県が認定する最高位の「プラチナ認定」を取得しました。
                  スタッフが長く・安心して働き続けられる職場づくりに取り組んでいます。
                </p>
              </div>
            </div>
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
          </div>

          <div className="space-y-5">
            {jobs.map((job) => (
              <div
                key={job.title}
                className={`rounded-2xl border-2 ${job.color} p-6 sm:p-7`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-ink">{job.title}</h3>
                      {job.badge && (
                        <span className="text-xs font-bold bg-accent text-white px-2.5 py-1 rounded-full">
                          {job.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-ink-subtle mb-3">
                      <span className="font-bold text-ink-muted">施設：</span>{job.facility}
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
                    <div className="space-y-1.5 text-xs text-ink-subtle">
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
            見学・説明会のご参加も随時受け付けています。
            「話を聞いてみたい」という段階でも歓迎です。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-primary-light text-primary font-bold px-8 py-4 rounded-full transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            応募・見学のお問い合わせ
          </Link>
        </div>
      </section>
    </>
  );
}
