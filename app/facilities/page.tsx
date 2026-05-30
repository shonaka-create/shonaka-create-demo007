import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "施設のご案内｜社会福祉法人 三恵会｜さいたま市西区の特別養護老人ホーム",
  description:
    "社会福祉法人 三恵会が運営するさいたま市西区の3施設。特別養護老人ホーム三恵苑（80名定員）・ひかわ（110名・ユニット型全室個室）・養護老人ホーム富士見園。入所申込受付中。",
};

const facilities = [
  {
    id: "sankeien",
    name: "三恵苑",
    type: "特別養護老人ホーム",
    established: "昭和63年（1988年）開設",
    capacity: "80名 ＋ ショートステイ4名",
    location: "埼玉県さいたま市西区中釘2219-4",
    phone: "048-622-6727",
    href: "/facilities/sankeien",
    color: "bg-[#2A6B47]",
    description:
      "昭和63年の開設以来、地域の高齢者介護の中核を担う基幹施設。「小ぢんまりとした静かな処」として、24時間体制の個別ケアと看取り介護を提供しています。あじさいの丘公園での季節行事も人気です。",
    features: ["24時間365日の介護体制", "看取り介護（ターミナルケア）", "ショートステイ（4名）", "4人部屋居室"],
  },
  {
    id: "hikawa",
    name: "ひかわ",
    type: "特別養護老人ホーム",
    established: "平成19年（2007年）開設",
    capacity: "110名 ＋ ショートステイ10名",
    location: "埼玉県さいたま市西区高木892",
    phone: "048-620-7533",
    href: "/facilities/hikawa",
    color: "bg-[#3A8060]",
    description:
      "平成19年開設のユニット型特養。全室個室・10名1ユニットという家庭的な環境で、「その人らしい生活」を支えます。ひのき風呂が自慢で、デイサービスと在宅介護支援センターを1階に併設しています。",
    features: ["全室個室（ユニット型）", "個別ケア・パーソンセンタードケア", "ひのき風呂", "ショートステイ（10名）"],
  },
  {
    id: "fujimien",
    name: "富士見園",
    type: "養護老人ホーム",
    established: "昭和31年（1956年）設立 / 平成18年〜三恵会直営",
    capacity: "50室（二人部屋40室・個室10室）",
    location: "埼玉県さいたま市西区清河寺796",
    phone: "048-624-6253",
    href: "/facilities/fujimien",
    color: "bg-[#1A8066]",
    description:
      "昭和31年設立の歴史ある養護老人ホーム。令和4年より契約入所も開始。通院送迎・理容サービス・買物ツアー・クラブ活動（書道・カラオケ等）など充実した生活支援を提供します。",
    features: ["措置入所・契約入所（令和4年〜）対応", "通院送迎バス・理容サービス", "書道・カラオケ等クラブ活動", "敷地面積8,185㎡"],
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
            三恵会では3つの施設を運営し、さまざまなニーズをお持ちの高齢者の生活を支援しています。
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
                  {/* Photo Header */}
                  <div className="lg:col-span-1 relative overflow-hidden min-h-[180px]">
                    <img
                      src={idx === 1 ? "/hero-bg.jpg" : "/facility-garden.jpg"}
                      alt={`${f.name}の施設環境`}
                      className="w-full h-full object-cover absolute inset-0"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 ${f.color}/75 flex flex-col justify-center items-center p-10 text-white`}>
                      <div className="text-3xl font-bold mb-2">{f.name}</div>
                      <div className="text-sm opacity-90">{f.type}</div>
                      <div className="text-xs opacity-70 mt-3 text-center">{f.established}</div>
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
