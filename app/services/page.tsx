import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "各サービスのご案内｜社会福祉法人 三恵会｜むつ市大畑町",
  description:
    "三恵会（青森県むつ市大畑町）が運営する5つのサービス。特別養護老人ホーム延寿園・ショートステイ季の恵・ふれあいかんデイサービスセンター・ホームヘルプセンター・在宅介護支援センター。",
};

const services = [
  {
    title: "延寿園",
    subtitle: "特別養護老人ホーム",
    href: "/services/enshuuen",
    color: "bg-[#2A6B47]",
    description:
      "むつ市大畑町に位置する三恵会の基幹施設。24時間365日体制の介護と、入居者一人ひとりの尊厳を大切にした個別ケアを提供しています。看取り介護・認知症ケア・リハビリテーションにも対応します。",
    features: ["24時間365日の介護体制", "看取り介護（ターミナルケア）", "認知症ケア", "リハビリテーション"],
    info: "定員：確認中 ／ 開設：昭和59年4月",
  },
  {
    title: "季の恵",
    subtitle: "ショートステイ（短期入所生活介護）",
    href: "/services/kinoegumi",
    color: "bg-[#3A8060]",
    description:
      "延寿園に併設するショートステイ施設。在宅生活を続けながら、短期間の宿泊介護サービスをご利用いただけます。ご家族の介護疲れの回復や、急用時の受け入れとしてご活用ください。",
    features: ["延寿園に併設", "在宅生活を続けながら利用可", "介護・入浴・食事を提供", "要支援1〜要介護5対象"],
    info: "定員：20床 ／ 開設：平成22年7月",
  },
  {
    title: "ふれあいかんデイサービスセンター",
    subtitle: "通所介護",
    href: "/services/day-service",
    color: "bg-[#1A6B80]",
    description:
      "日帰りで施設に通い、入浴・食事・機能訓練・レクリエーションを楽しめます。送迎付きで安心。「今日も来てよかった」と思っていただける場所づくりを大切にしています。",
    features: ["入浴・食事・機能訓練", "レクリエーション・季節行事", "送迎サービスあり", "要支援1〜要介護5対象"],
    info: "開設年：確認中 ／ 営業：月〜土",
  },
  {
    title: "延寿園ホームヘルプセンター",
    subtitle: "訪問介護",
    href: "/services/home-help",
    color: "bg-[#1E6B5A]",
    description:
      "ホームヘルパーが自宅を訪問し、身体介護・生活援助・通院同行を行います。「住み慣れた自宅で暮らし続けたい」を実現するためのサポートを提供します。",
    features: ["身体介護（入浴・排泄・食事）", "生活援助（掃除・洗濯・買い物）", "通院同行", "相談費用：無料"],
    info: "開設年：確認中",
  },
  {
    title: "延寿園在宅介護支援センター",
    subtitle: "居宅介護支援",
    href: "/services/kaigo-support",
    color: "bg-[#1A8066]",
    description:
      "ケアマネジャーがご本人・ご家族の状況を丁寧にヒアリングし、最適なケアプランを作成・調整します。介護のことならどんな相談でも無料で承ります。",
    features: ["ケアプラン作成（無料）", "サービス事業者との調整", "医療機関・行政との連携", "相談費用：無料"],
    info: "開設年：確認中",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/60 text-xs tracking-widest uppercase mb-2">Services</p>
          <h1 className="text-3xl sm:text-4xl font-bold">各サービスのご案内</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose">
            三恵会では、施設入居からデイサービス・訪問介護・居宅介護支援まで、
            地域で暮らし続けるための多様なサービスを提供しています。
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
                  {/* Color block */}
                  <div className={`lg:col-span-1 relative overflow-hidden min-h-[160px] flex flex-col justify-center items-center p-8 ${s.color} text-white`}>
                    <div className="text-2xl font-bold mb-1 text-center">{s.title}</div>
                    <div className="text-sm opacity-80 text-center">{s.subtitle}</div>
                    <div className="text-xs opacity-50 mt-3 text-center">※ 写真は受領次第差し替えます</div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 p-7 sm:p-9">
                    <p className="text-xs text-ink-muted mb-1">{s.info}</p>
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
                        href="tel:0175-34-3297"
                        className="inline-flex items-center justify-center gap-2 bg-white hover:bg-primary-light text-primary font-medium px-6 py-3 rounded-full border border-border transition-colors text-sm"
                      >
                        📞 0175-34-3297
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
