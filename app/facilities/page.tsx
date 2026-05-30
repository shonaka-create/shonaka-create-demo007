import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "施設のご案内",
  description:
    "社会福祉法人 三恵会が運営する特別養護老人ホーム（三恵苑・ひかわ）と養護老人ホーム（富士見園）の施設情報・サービス内容・入所案内をご紹介します。",
};

const facilities = [
  {
    id: "sankeien",
    name: "三恵苑",
    type: "特別養護老人ホーム",
    established: "昭和62年（1987年）",
    capacity: "100名（予定）",
    location: "埼玉県さいたま市西区大字中釘",
    color: "bg-[#2A6B47]",
    features: [
      "24時間365日の介護体制",
      "看取り介護（ターミナルケア）",
      "リハビリテーション（機能訓練）",
      "認知症ケア専門棟",
      "ショートステイ（短期入所生活介護）",
    ],
    admission: [
      "要介護3以上の認定を受けていること",
      "在宅での生活が困難な状況にあること",
      "感染症などの入院治療が必要な状態でないこと",
    ],
    description:
      "昭和62年の開設以来、地域の高齢者介護の中核を担う基幹施設です。「その人らしい生活」を支えるための個別ケアを実践し、入居者一人ひとりの尊厳を大切にしたケアを提供しています。医療機関との連携体制も整えており、健康管理から看取りまで、安心してお任せいただける環境です。",
  },
  {
    id: "hikawa",
    name: "ひかわ",
    type: "特別養護老人ホーム",
    established: "平成中期",
    capacity: "80名（予定）",
    location: "埼玉県さいたま市西区内",
    color: "bg-[#3A8060]",
    features: [
      "ユニット型（個室）居室",
      "個別ケア・パーソンセンタードケア",
      "生活リハビリの推進",
      "ショートステイ（短期入所）",
      "家族参加型のケア計画",
    ],
    admission: [
      "要介護3以上の認定を受けていること",
      "在宅での生活が困難な状況にあること",
      "感染症などの入院治療が必要な状態でないこと",
    ],
    description:
      "ユニット型の個室で、プライバシーを確保しながら家庭的な雰囲気の中で生活していただける施設です。少人数のユニットで顔なじみのスタッフが日常的にケアを行うため、「その人の暮らし」に寄り添ったサービスを実現しています。",
  },
  {
    id: "fujimien",
    name: "富士見園",
    type: "養護老人ホーム",
    established: "承継・運営",
    capacity: "50名（予定）",
    location: "埼玉県内",
    color: "bg-[#1A8066]",
    features: [
      "行政（市区町村）との連携入所",
      "生活支援・相談支援",
      "社会参加活動の推進",
      "健康管理・医療連携",
      "地域との交流活動",
    ],
    admission: [
      "65歳以上で、環境上・経済的な理由から自宅での生活が困難な方",
      "市区町村長（行政）による措置決定が必要",
      "医療機関での入院治療が不要な方",
    ],
    description:
      "養護老人ホームは、環境的・経済的な理由で自宅での生活が困難な高齢者を行政措置によって受け入れる施設です。入居者の自立支援を基本として、地域との繋がりを大切にした生活支援を行っています。",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/60 text-xs tracking-widest uppercase mb-2">
            Facilities
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">施設のご案内</h1>
        </div>
      </div>

      {/* Anchor navigation */}
      <nav className="bg-surface border-b border-border sticky top-[64px] lg:top-[80px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex overflow-x-auto gap-1 py-3">
            {facilities.map((f) => (
              <li key={f.id}>
                <a
                  href={`#${f.id}`}
                  className="whitespace-nowrap text-sm font-medium px-4 py-2 rounded-full text-ink-muted hover:text-primary hover:bg-primary-light transition-colors"
                >
                  {f.name}（{f.type}）
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Facilities */}
      {facilities.map((f, idx) => (
        <section
          key={f.id}
          id={f.id}
          className={`py-16 sm:py-20 ${idx % 2 === 0 ? "bg-bg" : "bg-surface"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end gap-3 mb-10">
              <div
                className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center`}
              >
                <span className="text-white text-xl font-bold">
                  {f.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-xs text-ink-subtle mb-1">{f.type}</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-ink">
                  {f.name}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Info */}
              <div>
                {/* Color placeholder for facility image */}
                <div
                  className={`${f.color} rounded-2xl h-48 sm:h-56 flex items-center justify-center mb-7`}
                >
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold mb-1">{f.name}</div>
                    <div className="text-sm opacity-75">{f.type}</div>
                  </div>
                </div>

                <p className="text-ink-muted leading-loose mb-6">{f.description}</p>

                <dl className="space-y-3">
                  <div className="flex gap-3">
                    <dt className="text-xs font-bold text-ink-subtle w-20 shrink-0 pt-0.5">
                      施設種別
                    </dt>
                    <dd className="text-sm text-ink">{f.type}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="text-xs font-bold text-ink-subtle w-20 shrink-0 pt-0.5">
                      定員
                    </dt>
                    <dd className="text-sm text-ink">{f.capacity}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="text-xs font-bold text-ink-subtle w-20 shrink-0 pt-0.5">
                      所在地
                    </dt>
                    <dd className="text-sm text-ink">{f.location}</dd>
                  </div>
                </dl>
              </div>

              {/* Features & Admission */}
              <div className="space-y-7">
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
                    {f.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 text-sm text-ink-muted"
                      >
                        <span className="text-primary mt-1">•</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface rounded-2xl border border-border p-6">
                  <h3 className="font-bold text-ink mb-4">入所条件</h3>
                  <ul className="space-y-2">
                    {f.admission.map((cond) => (
                      <li
                        key={cond}
                        className="flex items-start gap-2 text-sm text-ink-muted"
                      >
                        <span className="text-ink-subtle mt-1">▷</span>
                        {cond}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/application"
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3.5 rounded-full transition-colors w-full"
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
      ))}

      {/* Contact CTA */}
      <section className="bg-primary-light py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-ink mb-4">施設見学・相談受付</h2>
          <p className="text-ink-muted mb-8 leading-loose">
            施設への入所をご検討の方、施設見学のご希望など、
            お気軽にお問い合わせください。専門スタッフが丁寧にご対応いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold px-7 py-3.5 rounded-full transition-colors"
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
