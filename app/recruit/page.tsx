import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "採用情報",
  description:
    "社会福祉法人 三恵会の採用情報。介護職員・看護職員・相談員など各種職種を募集。埼玉県「多様な働き方実践企業 プラチナ認定」取得。充実した待遇・研修制度で長く働ける環境です。",
};

const jobs = [
  {
    title: "介護職員",
    types: ["正規職員", "パートタイム"],
    description:
      "特別養護老人ホーム・デイサービスでの介護業務全般。入居者・利用者の日常生活支援（食事・入浴・排泄介助）、レクリエーション、記録業務など。",
    qualification: "介護福祉士・初任者研修・実務者研修（いずれも歓迎。未経験でも応募可）",
    color: "border-primary bg-primary-light",
    badge: "最も募集中",
  },
  {
    title: "看護職員",
    types: ["正規職員", "パートタイム"],
    description:
      "施設での健康管理、投薬管理、医療処置補助、看取り支援など。医師・介護職との連携のもとで、入居者の健康を包括的に支えます。",
    qualification: "看護師・准看護師資格必須",
    color: "border-[#3A8060] bg-[#E6F4EC]",
    badge: null,
  },
  {
    title: "生活相談員",
    types: ["正規職員"],
    description:
      "入居者・ご家族との相談対応、行政・医療機関との連絡調整、入所審査・契約業務、地域との連携など。",
    qualification: "社会福祉士・精神保健福祉士・介護支援専門員のいずれか",
    color: "border-accent bg-accent-light",
    badge: null,
  },
  {
    title: "介護支援専門員（ケアマネ）",
    types: ["正規職員"],
    description:
      "居宅介護支援事業所でのケアプラン作成、サービス調整、モニタリングなど。在宅利用者を多角的に支援します。",
    qualification: "介護支援専門員証保有",
    color: "border-primary bg-primary-light",
    badge: null,
  },
  {
    title: "事務職員",
    types: ["正規職員", "パートタイム"],
    description:
      "施設事務（受付・書類管理・請求業務）または法人本部事務（経理・労務・広報）。",
    qualification: "特になし（PCスキル歓迎）",
    color: "border-border bg-surface",
    badge: null,
  },
];

const benefits = [
  { icon: "💰", title: "給与・賞与", body: "月給20万円〜（経験・資格により優遇）。年2回の賞与。資格取得手当・処遇改善加算あり。" },
  { icon: "📅", title: "休日・休暇", body: "4週8休制（シフト制）。年次有給休暇（初年度10日）。育児・介護休暇取得実績多数。" },
  { icon: "🏥", title: "社会保険", body: "健康保険・厚生年金・雇用保険・労災保険完備。" },
  { icon: "📚", title: "研修・資格支援", body: "新人研修・OJT完備。資格取得費用補助・研修参加費用補助あり。介護福祉士受験支援。" },
  { icon: "🏠", title: "住宅手当", body: "自宅から通勤する職員への住宅手当（規定あり）。" },
  { icon: "⏰", title: "多様な勤務形態", body: "フルタイム・パートタイム・時短勤務に対応。育児中・介護中のスタッフも活躍中。" },
];

const voices = [
  {
    name: "A.M.（介護職員・入職3年目）",
    text: "未経験から入職しましたが、先輩スタッフが丁寧に教えてくれるため安心して仕事を覚えられました。資格取得の支援も充実していて、昨年介護福祉士を取得できました。",
    dept: "三恵苑",
  },
  {
    name: "K.T.（看護師・入職5年目）",
    text: "育児休業から復帰後も時短勤務を利用しながら働いています。職場全体で子育てを応援する雰囲気があり、家庭と仕事を両立できています。",
    dept: "ひかわ",
  },
  {
    name: "S.Y.（生活相談員・入職8年目）",
    text: "入居者やご家族との信頼関係を築きながら、地域の介護課題に携われることに大きなやりがいを感じています。三恵会は相談しやすい職場環境です。",
    dept: "三恵苑",
  },
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
          <div className="inline-flex items-center gap-2 bg-yellow-400/15 text-yellow-200 text-sm font-bold px-4 py-2 rounded-full border border-yellow-400/25 mb-6">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.5l-3.71 1.95.71-4.13L2 5.5l4.15-.75L8 1z" />
            </svg>
            埼玉県 多様な働き方実践企業 プラチナ認定取得
          </div>
          <p className="text-white/60 text-xs tracking-widest uppercase mb-2">Recruit</p>
          <h1 className="text-3xl sm:text-5xl font-bold mb-5">
            三恵会で、
            <br />
            一緒に働きませんか？
          </h1>
          <p className="text-white/75 text-lg leading-loose max-w-xl">
            「天の恵み・地の恵み・人の恵み」の精神を共に体現してくれる仲間を、経験・未経験を問わず募集しています。
          </p>
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
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-ink">{job.title}</h3>
                      {job.badge && (
                        <span className="text-xs font-bold bg-accent text-white px-2.5 py-1 rounded-full">
                          {job.badge}
                        </span>
                      )}
                    </div>
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
                    <p className="text-sm text-ink-muted leading-loose mb-3">
                      {job.description}
                    </p>
                    <p className="text-xs text-ink-subtle">
                      <span className="font-bold text-ink-muted">応募資格：</span>
                      {job.qualification}
                    </p>
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

      {/* Staff Voices */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">
              Staff Voices
            </p>
            <h2 className="text-3xl font-bold text-ink">スタッフの声</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {voices.map((v) => (
              <div
                key={v.name}
                className="bg-surface rounded-2xl border border-border p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary font-bold text-lg">
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-ink text-sm">{v.name}</div>
                    <div className="text-xs text-ink-subtle">{v.dept}</div>
                  </div>
                </div>
                <p className="text-sm text-ink-muted leading-loose italic">
                  「{v.text}」
                </p>
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
