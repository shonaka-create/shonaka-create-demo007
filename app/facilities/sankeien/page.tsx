import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "三恵苑（特別養護老人ホーム）｜社会福祉法人 三恵会｜さいたま市西区",
  description:
    "社会福祉法人 三恵会が運営する特別養護老人ホーム三恵苑（さいたま市西区中釘）。昭和63年開設、80名定員。24時間体制の介護・看取りケア・ショートステイ。入所申込受付中。",
};

const subNavItems = [
  { label: "三恵苑", href: "/facilities/sankeien", current: true },
  { label: "ひかわ", href: "/facilities/hikawa", current: false },
  { label: "富士見園", href: "/facilities/fujimien", current: false },
];

export default function SankeienPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#2A6B47] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="パンくずリスト" className="mb-4">
            <ol className="flex items-center gap-1.5 text-xs text-white/50">
              <li><Link href="/" className="hover:text-white/80 transition-colors">ホーム</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/facilities" className="hover:text-white/80 transition-colors">施設のご案内</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">三恵苑</li>
            </ol>
          </nav>
          <p className="text-white/70 text-sm mb-1">特別養護老人ホーム</p>
          <h1 className="text-3xl sm:text-4xl font-bold">三恵苑</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose">
            昭和63年（1988年）開設。さいたま市西区中釘に位置する三恵会の基幹施設です。
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
                      ? "text-white bg-[#2A6B47]"
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
              <div className="relative rounded-2xl overflow-hidden h-52 sm:h-64 mb-7 shadow-md">
                <img src="/facility-garden.jpg" alt="三恵苑の周辺環境・日本庭園" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-[#2A6B47]/65 flex flex-col items-center justify-center">
                  <div className="text-5xl font-bold text-white mb-2">三恵苑</div>
                  <div className="text-base text-white/90">特別養護老人ホーム</div>
                  <div className="text-sm text-white/70 mt-1">昭和63年（1988年）開設</div>
                </div>
              </div>

              <p className="text-ink-muted leading-loose mb-6">
                「小ぢんまりとした静かな処」として親しまれる三恵会の基幹施設です。
                昭和63年の開設以来、地域の高齢者介護の中核を担い続けています。
                「その人らしい生活」を支えるための個別ケアを実践し、
                入居者一人ひとりの尊厳を大切にしたケアを提供しています。
              </p>
              <p className="text-ink-muted leading-loose mb-6">
                チェアインバスと個浴を備えた入浴設備、隣接する「あじさいの丘公園」での
                花見・運動会・納涼祭などの季節行事を通じて、入居者の生きがいある生活を支えます。
              </p>

              <dl className="space-y-3 text-sm">
                {[
                  { label: "施設種別", value: "特別養護老人ホーム（介護老人福祉施設）" },
                  { label: "定員", value: "80名 ＋ ショートステイ4名" },
                  { label: "開設年", value: "昭和63年（1988年）" },
                  { label: "居室タイプ", value: "4人部屋" },
                  { label: "所在地", value: "埼玉県さいたま市西区中釘2219-4" },
                  { label: "電話", value: "048-622-6727" },
                  { label: "メール", value: "sankeien@sankeikai.org" },
                  { label: "アクセス", value: "JR大宮駅からバス約20分" },
                ].map((row) => (
                  <div key={row.label} className="flex gap-3">
                    <dt className="font-bold text-ink-muted w-24 shrink-0 text-xs pt-0.5">{row.label}</dt>
                    <dd className="text-ink text-sm">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="space-y-6">
              {/* Features */}
              <div className="bg-primary-light rounded-2xl p-6">
                <h3 className="font-bold text-ink mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  主なサービス・特徴
                </h3>
                <ul className="space-y-2">
                  {[
                    "24時間365日の介護体制",
                    "看取り介護（ターミナルケア）",
                    "リハビリテーション（機能訓練）",
                    "認知症ケア",
                    "ショートステイ（短期入所生活介護・4名）",
                    "チェアインバス・個浴設備",
                    "あじさいの丘公園での季節行事",
                    "地域包括支援センター近隣に併設",
                  ].map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-ink-muted">
                      <span className="text-primary mt-1 shrink-0">•</span>
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
                  30日あたり<strong className="text-ink">36,210円〜146,430円</strong>（要介護1の場合、所得段階・負担割合により変動）。
                  ショートステイは日額984円〜5,996円。別途加算費が発生する場合があります。
                  詳細はお問い合わせください。
                </p>
              </div>

              <Link
                href="/application"
                className="flex items-center justify-center gap-2 bg-[#2A6B47] hover:bg-primary-dark text-white font-bold px-6 py-3.5 rounded-full transition-colors"
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

      {/* Contact CTA */}
      <section className="bg-primary-light py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-ink mb-4">施設見学・相談受付</h2>
          <p className="text-ink-muted mb-8 leading-loose">
            施設への入所をご検討の方、見学のご希望など、
            お気軽にお問い合わせください。専門スタッフが丁寧にご対応いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              お問い合わせ
            </Link>
            <a
              href="tel:048-622-6727"
              className="inline-flex items-center justify-center bg-white hover:bg-primary-light text-primary font-bold px-7 py-3.5 rounded-full border border-border transition-colors"
            >
              📞 048-622-6727
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
