import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サービスのご案内",
  description:
    "三恵会のデイサービス・在宅介護支援・地域包括支援センターのサービス内容をご紹介します。住み慣れた自宅での生活継続を支援します。",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/60 text-xs tracking-widest uppercase mb-2">
            Services
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">サービスのご案内</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose">
            三恵会では、施設入居だけでなく、地域で暮らし続けるための多様なサービスを提供しています。
          </p>
        </div>
      </div>

      {/* Anchor nav */}
      <nav className="bg-surface border-b border-border sticky top-[64px] lg:top-[80px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex overflow-x-auto gap-1 py-3">
            {[
              { label: "デイサービス", href: "#day" },
              { label: "在宅介護支援", href: "#home" },
              { label: "地域包括支援センター", href: "#chiiki" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="whitespace-nowrap text-sm font-medium px-4 py-2 rounded-full text-ink-muted hover:text-primary hover:bg-primary-light transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Day Service */}
      <section id="day" className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-primary text-xs font-bold tracking-widest mb-2">Day Service</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-5">
                デイサービス
                <span className="block text-base font-normal text-ink-muted mt-1">
                  通所介護
                </span>
              </h2>
              <p className="text-ink-muted leading-loose mb-6">
                日帰りで施設に通い、入浴・食事・機能訓練などのサービスを受けながら、
                仲間との交流や社会参加の機会を持てるサービスです。
                ご家族の介護負担軽減にも貢献しています。
              </p>
              <p className="text-ink-muted leading-loose mb-8">
                三恵苑・ひかわの両施設で提供しており、
                利用者の状態やご希望に合わせた個別プログラムを組み立てています。
              </p>

              <div className="space-y-3">
                <h3 className="font-bold text-ink text-sm">主なサービス内容</h3>
                {[
                  "入浴サービス（個浴・機械浴）",
                  "食事提供（栄養士による献立管理）",
                  "機能訓練（リハビリテーション）",
                  "レクリエーション・趣味活動",
                  "健康チェック・バイタル測定",
                  "送迎サービス（自宅まで）",
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
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-4">利用対象</h3>
                <p className="text-sm text-ink-muted leading-loose">
                  要介護1〜5の認定を受けた方。要支援1・2の方は、介護予防通所介護（総合事業）をご利用いただけます。まずはケアマネジャーまたは地域包括支援センターにご相談ください。
                </p>
              </div>
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-4">利用時間・費用</h3>
                <p className="text-sm text-ink-muted leading-loose">
                  平日・土曜（一部施設）の通常営業です。利用料は介護保険の自己負担割合（1〜3割）により異なります。詳細はお問い合わせください。
                </p>
              </div>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3.5 rounded-full transition-colors"
              >
                デイサービスについて相談する
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Home Care */}
      <section id="home" className="bg-surface py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 space-y-5">
              <div className="bg-bg rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-4">訪問介護</h3>
                <p className="text-sm text-ink-muted leading-loose">
                  ホームヘルパーが自宅に訪問し、身体介護（入浴・排泄・食事）や生活援助（掃除・洗濯・買い物）を行います。
                </p>
              </div>
              <div className="bg-bg rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-4">居宅介護支援（ケアマネ）</h3>
                <p className="text-sm text-ink-muted leading-loose">
                  介護支援専門員（ケアマネジャー）がケアプランを作成し、適切なサービス調整・管理を行います。在宅での生活継続を総合的にサポートします。
                </p>
              </div>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3.5 rounded-full transition-colors"
              >
                在宅サービスについて相談する
              </Link>
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <p className="text-primary text-xs font-bold tracking-widest mb-2">Home Care</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-5">
                在宅介護支援
                <span className="block text-base font-normal text-ink-muted mt-1">
                  訪問介護 / 居宅介護支援
                </span>
              </h2>
              <p className="text-ink-muted leading-loose mb-6">
                「住み慣れた自宅で暮らし続けたい」というご本人・ご家族の希望を実現するために、
                専門スタッフが自宅に訪問し、必要なサービスを提供します。
              </p>
              <p className="text-ink-muted leading-loose">
                居宅介護支援（ケアマネジャー）との連携により、
                利用者の状態に合わせた最適なサービスプランを組み立てます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Care Support Center */}
      <section id="chiiki" className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-primary text-xs font-bold tracking-widest mb-2">
                Community Care
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-5">
                地域包括支援センター
                <span className="block text-base font-normal text-ink-muted mt-1">
                  高齢者の総合相談窓口
                </span>
              </h2>
              <p className="text-ink-muted leading-loose mb-6">
                地域包括支援センターは、高齢者の保健・医療・介護・生活支援を包括的にサポートするための
                身近な相談窓口です。さいたま市から委託を受け、三恵会が運営しています。
              </p>
              <p className="text-ink-muted leading-loose mb-8">
                「どこに相談すればいいかわからない」「親の介護が心配」など、
                高齢者や介護に関するどんな相談でもお気軽にお越しください。
              </p>

              <div className="space-y-3">
                <h3 className="font-bold text-ink text-sm">主な相談・支援内容</h3>
                {[
                  "介護保険の申請・サービス利用に関する相談",
                  "認知症の相談・早期発見支援",
                  "高齢者虐待の防止・早期発見",
                  "権利擁護（成年後見制度の活用支援）",
                  "介護予防ケアマネジメント",
                  "地域のネットワーク構築・連携",
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
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-4">相談は無料・秘密厳守</h3>
                <p className="text-sm text-ink-muted leading-loose">
                  地域包括支援センターへの相談は無料です。相談内容の秘密は厳守いたします。高齢者ご本人だけでなく、家族・近所の方・ケアマネジャーなど、どなたでもご相談いただけます。
                </p>
              </div>
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-4">スタッフ構成</h3>
                <p className="text-sm text-ink-muted leading-loose">
                  社会福祉士・主任介護支援専門員・保健師（または経験豊富な看護師）の3職種が連携し、多角的な視点から支援を行います。
                </p>
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

      {/* Contact */}
      <section className="bg-primary-light py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-ink mb-4">サービス利用のご相談</h2>
          <p className="text-ink-muted mb-8 leading-loose">
            各種サービスの詳細・利用開始手続きについては、お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full transition-colors"
          >
            お問い合わせはこちら
          </Link>
        </div>
      </section>
    </>
  );
}
