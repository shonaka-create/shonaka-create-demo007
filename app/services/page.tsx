import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サービスのご案内",
  description:
    "三恵会のデイサービス・在宅介護支援センター・地域包括支援センターのサービス内容をご紹介します。住み慣れた自宅での生活継続を支援します。",
};

const services = [
  {
    title: "デイサービス",
    subtitle: "通所介護",
    label: "三恵苑デイサービスセンター",
    href: "/services/day-service",
    color: "bg-[#2A6B47]",
    description:
      "1991年開設。和風旅館のような落ち着いた雰囲気で、入浴・食事・機能訓練・レクリエーションを提供。日帰りで通える安心の場所です。",
    features: ["入浴・食事・機能訓練", "脳トレ・手芸・季節行事", "送迎サービスあり", "要支援1〜2・要介護1〜5"],
    phone: "048-623-3567",
  },
  {
    title: "在宅介護支援",
    subtitle: "訪問介護・居宅介護支援",
    label: "三恵苑在宅介護支援センター",
    href: "/services/zaitaku-kaigo",
    color: "bg-[#3A8060]",
    description:
      "介護保険制度以前から実績のある在宅支援センター。6名のケアマネジャーが、住み慣れた自宅での生活継続を総合的にサポートします。",
    features: ["訪問介護（ホームヘルパー）", "ケアプラン作成・管理", "介護者サロン開催", "相談費用：無料"],
    phone: "048-620-7531",
  },
  {
    title: "地域包括支援センター",
    subtitle: "シニアサポートセンター",
    label: "西区北部圏域地域包括支援センター三恵苑",
    href: "/services/chiiki-houkatsu",
    color: "bg-[#1A8066]",
    description:
      "さいたま市西区北部の高齢者とその家族を対象とした総合相談窓口。介護・医療・生活支援のあらゆる相談を無料・秘密厳守で受け付けます。",
    features: ["介護保険申請代行", "認知症相談・支援", "高齢者虐待への対応", "相談費用：無料"],
    phone: "048-620-1312",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/60 text-xs tracking-widest uppercase mb-2">Services</p>
          <h1 className="text-3xl sm:text-4xl font-bold">サービスのご案内</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose">
            三恵会では、施設入居だけでなく、地域で暮らし続けるための多様なサービスを提供しています。
          </p>
        </div>
      </div>

      {/* Service Cards */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((s, idx) => (
              <div
                key={s.title}
                className={`rounded-2xl overflow-hidden border border-border ${idx % 2 === 0 ? "bg-surface" : "bg-white"}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Color Header */}
                  <div className={`${s.color} lg:col-span-1 flex flex-col justify-center items-center p-10 text-white`}>
                    <div className="text-3xl font-bold mb-2">{s.title}</div>
                    <div className="text-sm opacity-80">{s.subtitle}</div>
                    <div className="text-xs opacity-70 mt-3 text-center">{s.label}</div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 p-7 sm:p-9">
                    <p className="text-ink-muted leading-loose mb-5">{s.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {s.features.map((f) => (
                        <span
                          key={f}
                          className="text-xs font-medium bg-primary-light text-primary px-3 py-1 rounded-full"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={s.href}
                        className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-full transition-colors text-sm"
                      >
                        詳しく見る
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <a
                        href={`tel:${s.phone}`}
                        className="inline-flex items-center justify-center gap-2 bg-white hover:bg-primary-light text-primary font-medium px-6 py-3 rounded-full border border-border transition-colors text-sm"
                      >
                        📞 {s.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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
