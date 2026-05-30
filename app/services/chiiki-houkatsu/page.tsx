import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "地域包括支援センター三恵苑（シニアサポートセンター）｜さいたま市西区",
  description:
    "西区北部圏域地域包括支援センター三恵苑（シニアサポートセンター）。さいたま市西区の高齢者・家族の総合相談窓口。介護・医療・生活支援を無料でコーディネート。9:00〜18:00受付。",
};

const subNavItems = [
  { label: "デイサービス", href: "/services/day-service", current: false },
  { label: "在宅介護支援", href: "/services/zaitaku-kaigo", current: false },
  { label: "地域包括支援センター", href: "/services/chiiki-houkatsu", current: true },
];

export default function ChiikiHoukatsuPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="パンくずリスト" className="mb-4">
            <ol className="flex items-center gap-1.5 text-xs text-white/50">
              <li><Link href="/" className="hover:text-white/80 transition-colors">ホーム</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-white/80 transition-colors">サービスのご案内</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">地域包括支援センター</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold">地域包括支援センター</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose">
            西区北部圏域地域包括支援センター三恵苑（シニアサポートセンター）─ 高齢者とその家族のための総合相談窓口
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
      <div className="relative h-56 sm:h-72 overflow-hidden">
        <img src="/service-community.jpg" alt="地域包括支援センターでの相談対応の様子" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-primary-dark/25" />
        <div className="absolute bottom-5 left-6">
          <span className="bg-primary/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
            高齢者総合相談窓口 ／ 相談無料
          </span>
        </div>
      </div>

      {/* Overview */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-primary text-xs font-bold tracking-widest mb-2">Community Care</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-5">
                西区北部圏域
                <br />
                地域包括支援センター三恵苑
                <span className="block text-base font-normal text-ink-muted mt-1">
                  シニアサポートセンター
                </span>
              </h2>
              <p className="text-ink-muted leading-loose mb-4">
                地域包括支援センターは、高齢者の保健・医療・介護・生活支援を包括的にサポートするための
                身近な相談窓口です。さいたま市から委託を受け、三恵会が運営しています。
              </p>
              <p className="text-ink-muted leading-loose mb-6">
                「どこに相談すればいいかわからない」「親の介護が心配」「認知症かもしれない」など、
                高齢者や介護に関するどんな相談でもお気軽にお越しください。
                <strong className="text-ink">相談は無料・秘密厳守</strong>です。
              </p>

              <div className="space-y-2.5">
                <h3 className="font-bold text-ink text-sm">主な相談・支援内容</h3>
                {[
                  "介護保険の申請代行・サービス利用に関する相談",
                  "要支援1・2の方や特定高齢者へのケアプラン作成とサービス調整",
                  "認知症の相談・早期発見支援",
                  "高齢者虐待の防止・早期発見・対応",
                  "権利擁護（成年後見制度の活用支援）",
                  "関係機関・地域とのネットワーク構築",
                  "介護予防ケアマネジメント",
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
                  基本情報
                </h3>
                <dl className="space-y-3 text-sm">
                  {[
                    { label: "センター名", value: "西区北部圏域地域包括支援センター三恵苑（シニアサポートセンター）" },
                    { label: "所在地", value: "〒331-0077 さいたま市西区中釘2162-4 星本ビル1階" },
                    { label: "電話", value: "048-620-1312" },
                    { label: "対応時間", value: "毎日 9:00〜18:00（年末年始を除く）" },
                    { label: "対象地域", value: "さいたま市西区北部圏域の高齢者及びその家族" },
                    { label: "相談費用", value: "無料（秘密厳守）" },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-3">
                      <dt className="font-bold text-ink-muted w-24 shrink-0 text-xs">{row.label}</dt>
                      <dd className="text-ink-muted text-xs">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Staff */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-3">スタッフ構成</h3>
                <p className="text-sm text-ink-muted leading-loose mb-3">
                  社会福祉士・主任介護支援専門員・保健師（または経験豊富な看護師）の
                  3職種が連携し、多角的な視点から支援を行います。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["社会福祉士", "主任介護支援専門員", "保健師・看護師"].map((role) => (
                    <span
                      key={role}
                      className="text-xs font-medium bg-primary-light text-primary px-3 py-1 rounded-full"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3.5 rounded-full transition-colors"
              >
                地域包括支援センターに相談する
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Activities */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Community</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">地域との連携・活動</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg rounded-2xl border border-border p-6 sm:p-7">
              <div className="text-3xl mb-3">🎭</div>
              <h3 className="text-lg font-bold text-ink mb-3">認知症啓発活動「劇団にしく」</h3>
              <p className="text-sm text-ink-muted leading-loose">
                他の地域包括支援センターや民生委員と協力して劇団「にしく」を結成し、
                地域の小学校等での認知症サポーター養成講座を実施しています。
                認知症への正しい理解を地域に広める取り組みです。
              </p>
            </div>

            <div className="bg-bg rounded-2xl border border-border p-6 sm:p-7">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-ink mb-3">介護者向け講座・サロン</h3>
              <p className="text-sm text-ink-muted leading-loose">
                地区社会福祉協議会と協働し、介護者向けの講座を定期的に開催。
                在宅介護支援センターが実施する「話してガッテン、介護者サロン」とも連携し、
                介護している方々を地域全体で支えるネットワークを築いています。
              </p>
            </div>
          </div>

          <div className="mt-8 bg-primary-light rounded-2xl p-7 sm:p-9">
            <h3 className="text-lg font-bold text-ink mb-4">こんな方はご相談ください</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "「介護保険の申請方法がわからない」",
                "「親が認知症かもしれない」",
                "「近所の独居高齢者が心配」",
                "「退院後の生活サポートを探している」",
                "「詐欺や悪質商法の被害にあいそう」",
                "「サービスの利用方法を相談したい」",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-ink-muted">
                  <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary-dark py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            相談は無料・秘密厳守
          </h2>
          <p className="text-white/75 leading-loose mb-8">
            高齢者ご本人だけでなく、ご家族・近所の方・支援者の方、
            どなたでもお気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white hover:bg-primary-light text-primary font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              お問い合わせフォーム
            </Link>
            <a
              href="tel:048-620-1312"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-full border border-white/30 transition-colors"
            >
              📞 048-620-1312
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
