import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "施設のご案内｜社会福祉法人 三恵会｜むつ市大畑町の介護施設",
  description:
    "社会福祉法人 三恵会が運営する施設のご案内。特別養護老人ホーム延寿園・ショートステイ季の恵（青森県むつ市大畑町）。入所申込受付中。お気軽にご相談ください。",
};

const facilities = [
  {
    id: "enshuuen",
    name: "延寿園",
    type: "特別養護老人ホーム",
    established: "開設年 ※確認中",
    capacity: "定員 ※確認中",
    location: "〒039-4401 青森県むつ市大畑町大赤川29番地4",
    phone: "0175-34-3297",
    href: "/facilities/sankeien",
    color: "bg-[#2A6B47]",
    description:
      "むつ市大畑町に位置する三恵会の基幹施設。24時間365日体制の介護と、入居者一人ひとりの尊厳を大切にした個別ケアを提供しています。看取り介護・認知症ケア・リハビリテーションにも対応します。",
    features: ["24時間365日の介護体制", "看取り介護（ターミナルケア）", "認知症ケア", "リハビリテーション"],
  },
  {
    id: "kinoegumi",
    name: "季の恵",
    type: "ショートステイ（短期入所生活介護）",
    established: "開設年 ※確認中",
    capacity: "定員 ※確認中",
    location: "〒039-4401 青森県むつ市大畑町大赤川29番地4（延寿園内）",
    phone: "0175-34-3297",
    href: "/facilities/hikawa",
    color: "bg-[#3A8060]",
    description:
      "延寿園に併設するショートステイ施設。在宅生活を続けながら、短期間の宿泊介護サービスをご利用いただけます。ご家族の介護疲れの回復や、急用時の受け入れとしてご活用ください。",
    features: ["延寿園に併設", "在宅生活を続けながら利用可", "介護・入浴・食事を提供", "ご家族の介護負担軽減に"],
  },
];

export default function FacilitiesPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/60 text-xs tracking-widest uppercase mb-2">Facilities</p>
          <h1 className="text-3xl sm:text-4xl font-bold">施設のご案内</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose">
            三恵会では青森県むつ市大畑町を拠点に、特別養護老人ホーム「延寿園」と
            ショートステイ「季の恵」を運営しています。
          </p>
        </div>
      </div>

      {/* Facility Cards */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {facilities.map((f, idx) => (
              <div
                key={f.id}
                className={`rounded-2xl overflow-hidden border border-border ${idx % 2 === 0 ? "bg-surface" : "bg-white"}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Photo Placeholder */}
                  <div className="lg:col-span-1 relative overflow-hidden min-h-[180px] bg-gray-100 border-r-2 border-dashed border-gray-200 flex flex-col items-center justify-center">
                    <div className={`absolute inset-0 ${f.color}/75 flex flex-col justify-center items-center p-10 text-white`}>
                      <div className="text-3xl font-bold mb-2">{f.name}</div>
                      <div className="text-sm opacity-90">{f.type}</div>
                      <div className="text-xs opacity-60 mt-3 text-center">※ 写真は受領次第差し替えます</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 p-7 sm:p-9">
                    <p className="text-ink-muted leading-loose mb-4">{f.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {f.features.map((feat) => (
                        <span
                          key={feat}
                          className="text-xs font-medium bg-primary-light text-primary px-3 py-1 rounded-full"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    <div className="text-xs text-ink mb-5 space-y-1">
                      <p><span className="font-bold text-ink-muted">定員：</span>{f.capacity}</p>
                      <p><span className="font-bold text-ink-muted">所在地：</span>{f.location}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={f.href}
                        className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-full transition-colors text-sm"
                      >
                        詳しく見る
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <a
                        href={`tel:${f.phone}`}
                        className="inline-flex items-center justify-center gap-2 bg-white hover:bg-primary-light text-primary font-medium px-6 py-3 rounded-full border border-border transition-colors text-sm"
                      >
                        📞 {f.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="bg-primary-light py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-ink mb-4">施設見学・入所申し込み</h2>
          <p className="text-ink-muted mb-8 leading-loose">
            施設への入所をご検討の方、施設見学のご希望など、
            お気軽にお問い合わせください。専門スタッフが丁寧にご対応いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0175-34-3297"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              📞 0175-34-3297 お電話
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white hover:bg-primary-light text-primary font-bold px-7 py-3.5 rounded-full border border-border transition-colors"
            >
              お問い合わせ
            </Link>
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
