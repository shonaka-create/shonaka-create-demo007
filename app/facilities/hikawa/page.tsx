import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ひかわ（特別養護老人ホーム）",
  description:
    "平成19年開設のユニット型特別養護老人ホーム「ひかわ」。110名定員・全室個室。ひのき風呂・デイサービス・在宅介護支援センター・ショートステイ（10名）を併設。",
};

const subNavItems = [
  { label: "三恵苑", href: "/facilities/sankeien", current: false },
  { label: "ひかわ", href: "/facilities/hikawa", current: true },
  { label: "富士見園", href: "/facilities/fujimien", current: false },
];

export default function HikawaPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#3A8060] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/60 text-xs tracking-widest uppercase mb-2">Facilities</p>
          <p className="text-white/70 text-sm mb-1">特別養護老人ホーム</p>
          <h1 className="text-3xl sm:text-4xl font-bold">ひかわ</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose">
            平成19年（2007年）開設。110名定員のユニット型特養。全室個室でプライバシーを守りながら、家庭的なケアを提供します。
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
                      ? "text-white bg-[#3A8060]"
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

      {/* Overview */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              {/* Facility Visual */}
              <div className="bg-[#3A8060] rounded-2xl h-52 sm:h-64 flex items-center justify-center mb-7">
                <div className="text-center text-white">
                  <div className="text-5xl font-bold mb-2">ひかわ</div>
                  <div className="text-base opacity-80">特別養護老人ホーム</div>
                  <div className="text-sm opacity-60 mt-1">平成19年（2007年）開設</div>
                </div>
              </div>

              <p className="text-ink-muted leading-loose mb-4">
                「マンションと間違われることもしばしば」という外観が特徴の近代的な施設です。
                内部は中庭の日本庭園と木のぬくもりを大切にした和風のフロアで構成されており、
                温かみのある空間の中で生活していただけます。
              </p>
              <p className="text-ink-muted leading-loose mb-4">
                建物2〜4階が居室エリア。各フロアに10名ずつのユニットが4つ配置され、
                少人数の顔なじみスタッフが日常的にケアを行う「ユニットケア」を実践しています。
              </p>
              <p className="text-ink-muted leading-loose mb-6">
                全室個室のため、長年愛用してきた箪笥を持ち込んだり、
                好きなポスターやカレンダーを飾ったりと、
                自分らしい空間づくりが可能です。入居一時金なし・終身利用可能です。
              </p>

              <dl className="space-y-3 text-sm">
                {[
                  { label: "施設種別", value: "特別養護老人ホーム（ユニット型）" },
                  { label: "定員", value: "110名 ＋ ショートステイ10名" },
                  { label: "開設年", value: "平成19年（2007年）" },
                  { label: "居室タイプ", value: "全室個室（ユニット型）" },
                  { label: "構造", value: "2〜4階が居室（各フロア4ユニット×10名）" },
                  { label: "所在地", value: "埼玉県さいたま市西区高木892" },
                  { label: "電話", value: "048-620-7533" },
                  { label: "メール", value: "hikawa@sankeikai.org" },
                  { label: "アクセス", value: "JR大宮駅からバス約20分" },
                ].map((row) => (
                  <div key={row.label} className="flex gap-3">
                    <dt className="font-bold text-ink-subtle w-24 shrink-0 text-xs pt-0.5">{row.label}</dt>
                    <dd className="text-ink-muted text-sm">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="space-y-6">
              {/* Features */}
              <div className="bg-[#E6F4EC] rounded-2xl border border-[#3A8060]/30 p-6">
                <h3 className="font-bold text-ink mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#3A8060] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  主なサービス・特徴
                </h3>
                <ul className="space-y-2">
                  {[
                    "全室個室（ユニット型）・プライバシーを確保",
                    "個別ケア・パーソンセンタードケア",
                    "ひのき風呂による個別入浴（リフト浴も対応）",
                    "和風リビング・ラウンジでのくつろぎ空間",
                    "生活リハビリの推進",
                    "ショートステイ（短期入所・10名定員）",
                    "デイサービス（1階）、在宅介護支援センター 併設",
                    "中庭の日本庭園",
                  ].map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-ink-muted">
                      <span className="text-[#3A8060] mt-1 shrink-0">•</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Admission */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-4">入所条件</h3>
                <ul className="space-y-2">
                  {[
                    "介護保険の要介護認定を受けていること（要介護1〜5）",
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
                  月額<strong className="text-ink">65,640円〜221,280円</strong>（介護度・所得段階・負担割合により変動）。
                  日用品費100円含む。入居一時金なし・終身利用可能。詳細はお問い合わせください。
                </p>
              </div>

              <Link
                href="/application"
                className="flex items-center justify-center gap-2 bg-[#3A8060] hover:bg-primary-dark text-white font-bold px-6 py-3.5 rounded-full transition-colors"
              >
                入所申し込みフォームへ
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Unit Care Section */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Unit Care</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">ユニットケアとは</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "少人数・家庭的",
                icon: "🏠",
                desc: "10名1ユニットという少人数制で、顔なじみのスタッフが毎日ケアを担当。家庭に近い雰囲気の中で生活できます。",
              },
              {
                title: "個室でプライバシー",
                icon: "🚪",
                desc: "全室個室のため、ご自分のペースで過ごしていただけます。愛用品の持ち込みやお部屋の装飾も自由です。",
              },
              {
                title: "その人らしい生活",
                icon: "✨",
                desc: "個人の生活リズムや習慣を尊重した「その人らしい暮らし」を支えます。パーソンセンタードケアを実践しています。",
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
          <h2 className="text-2xl font-bold text-ink mb-4">施設見学・相談受付</h2>
          <p className="text-ink-muted mb-8 leading-loose">
            施設への入所をご検討の方、見学のご希望など、
            お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              お問い合わせ
            </Link>
            <a
              href="tel:048-620-7533"
              className="inline-flex items-center justify-center bg-white hover:bg-primary-light text-primary font-bold px-7 py-3.5 rounded-full border border-border transition-colors"
            >
              📞 048-620-7533
            </a>
            <Link
              href="/application"
              className="inline-flex items-center justify-center bg-white hover:bg-primary-light text-primary font-bold px-7 py-3.5 rounded-full border border-border transition-colors"
            >
              入所申し込み
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
