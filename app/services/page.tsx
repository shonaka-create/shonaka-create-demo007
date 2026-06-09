import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サービスのご案内｜社会福祉法人 三恵会｜むつ市大畑町",
  description:
    "三恵会（青森県むつ市大畑町）のデイサービス・訪問介護・居宅介護支援のご案内。ふれあいかんデイサービスセンター・延寿園ホームヘルプセンター・延寿園在宅介護支援センター。まずはお気軽にご相談ください。",
};

const services = [
  {
    title: "デイサービス",
    subtitle: "通所介護",
    label: "ふれあいかんデイサービスセンター",
    href: "/services/day-service",
    color: "bg-[#2A6B47]",
    imageAlt: "デイサービスの活動写真（写真受領次第差し替えます）",
    description:
      "日帰りで施設に通い、入浴・食事・機能訓練・レクリエーションを楽しめます。送迎付きで安心。「今日も来てよかった」と思っていただける場所づくりを大切にしています。",
    features: ["入浴・食事・機能訓練", "レクリエーション・季節行事", "送迎サービスあり", "要支援1〜2・要介護1〜5"],
    phone: "0175-34-3297",
  },
  {
    title: "訪問介護",
    subtitle: "ホームヘルプサービス",
    label: "延寿園ホームヘルプセンター",
    href: "/services/zaitaku-kaigo",
    color: "bg-[#3A8060]",
    imageAlt: "在宅介護サービスの写真（写真受領次第差し替えます）",
    description:
      "ホームヘルパーが自宅を訪問し、身体介護・生活援助・通院同行を行います。「住み慣れた自宅で暮らし続けたい」を実現するためのサポートを提供します。",
    features: ["身体介護（入浴・排泄・食事）", "生活援助（掃除・洗濯・買い物）", "通院同行", "相談費用：無料"],
    phone: "0175-34-3297",
  },
  {
    title: "居宅介護支援",
    subtitle: "ケアプラン作成・サービス調整",
    label: "延寿園在宅介護支援センター",
    href: "/services/zaitaku-kaigo",
    color: "bg-[#1A8066]",
    imageAlt: "ケアマネジャーによる相談対応（写真受領次第差し替えます）",
    description:
      "ケアマネジャーがご本人・ご家族の状況を丁寧にヒアリングし、最適なケアプランを作成・調整します。介護のことならどんな相談でも無料で承ります。",
    features: ["ケアプラン作成（無料）", "サービス事業者との調整", "医療機関・行政との連携", "相談費用：無料"],
    phone: "0175-34-3297",
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
                  {/* Photo Placeholder */}
                  <div className="lg:col-span-1 relative overflow-hidden min-h-[180px] bg-gray-100 border-r-2 border-dashed border-gray-200 flex flex-col items-center justify-center">
                    <div className={`absolute inset-0 ${s.color}/75 flex flex-col justify-center items-center p-10 text-white`}>
                      <div className="text-3xl font-bold mb-2">{s.title}</div>
                      <div className="text-sm opacity-90">{s.subtitle}</div>
                      <div className="text-xs opacity-70 mt-2 text-center">{s.label}</div>
                      <div className="text-xs opacity-50 mt-1 text-center">※ 写真は受領次第差し替えます</div>
                    </div>
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
            各種サービスの詳細・利用開始手続きについては、お気軽にお問い合わせください。相談は無料です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0175-34-3297"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              📞 0175-34-3297 お電話
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-primary-light text-primary font-bold px-8 py-4 rounded-full border border-border transition-colors"
            >
              お問い合わせフォーム
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
