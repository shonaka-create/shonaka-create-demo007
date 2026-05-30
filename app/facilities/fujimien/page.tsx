import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "富士見園（養護老人ホーム）｜社会福祉法人 三恵会｜さいたま市西区",
  description:
    "社会福祉法人 三恵会が運営する養護老人ホーム富士見園（さいたま市西区清河寺）。昭和31年設立、令和4年から契約入所も開始。敷地8,185㎡、50室。クラブ活動・通院送迎充実。",
};

const subNavItems = [
  { label: "三恵苑", href: "/facilities/sankeien", current: false },
  { label: "ひかわ", href: "/facilities/hikawa", current: false },
  { label: "富士見園", href: "/facilities/fujimien", current: true },
];

export default function FujimienPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#1A8066] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="パンくずリスト" className="mb-4">
            <ol className="flex items-center gap-1.5 text-xs text-white/50">
              <li><Link href="/" className="hover:text-white/80 transition-colors">ホーム</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/facilities" className="hover:text-white/80 transition-colors">施設のご案内</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">富士見園</li>
            </ol>
          </nav>
          <p className="text-white/70 text-sm mb-1">養護老人ホーム</p>
          <h1 className="text-3xl sm:text-4xl font-bold">富士見園</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose">
            昭和31年（1956年）設立の歴史ある養護老人ホーム。環境的・経済的な理由で自宅での生活が困難な高齢者を支援します。
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
                      ? "text-white bg-[#1A8066]"
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
                <img src="/facility-garden.jpg" alt="富士見園の緑豊かな敷地環境" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-[#1A8066]/65 flex flex-col items-center justify-center">
                  <div className="text-5xl font-bold text-white mb-2">富士見園</div>
                  <div className="text-base text-white/90">養護老人ホーム</div>
                  <div className="text-sm text-white/70 mt-1">昭和31年（1956年）設立</div>
                </div>
              </div>

              <p className="text-ink-muted leading-loose mb-4">
                昭和31年（1956年）の設立から70年近い歴史を持つ養護老人ホームです。
                平成18年（2006年）にさいたま市より施設移譲を受け、三恵会の直営施設となりました。
                令和4年（2022年）7月からは「契約入所」制度も開始し、より広い方々へのサービス提供が可能になりました。
              </p>
              <p className="text-ink-muted leading-loose mb-4">
                「利用者の自立と個人の尊重を重視し、生きがいを持ち安心して楽しい生活が営まれるように支援する」を基本方針に、
                入居者一人ひとりの充実した日常生活をサポートしています。
              </p>
              <p className="text-ink-muted leading-loose mb-6">
                敷地面積8,185㎡という広大な敷地に、2階建ての施設が広がります。
                50室の居室（二人部屋40室・個室10室）のほか、食堂・集会室・娯楽室・医務室など
                充実した設備を備えています。
              </p>

              <dl className="space-y-3 text-sm">
                {[
                  { label: "施設種別", value: "養護老人ホーム" },
                  { label: "設立", value: "昭和31年（1956年）" },
                  { label: "三恵会直営", value: "平成18年（2006年）〜" },
                  { label: "定員", value: "50室（二人部屋40室・個室10室）＋ 短期入所室2室" },
                  { label: "構造", value: "鉄筋コンクリート2階建" },
                  { label: "敷地面積", value: "8,185.30㎡ / 延床面積3,102.21㎡" },
                  { label: "所在地", value: "埼玉県さいたま市西区清河寺796" },
                  { label: "電話", value: "048-624-6253" },
                  { label: "メール", value: "fujimien@sankeikai.org" },
                  { label: "アクセス", value: "JR大宮駅からバス約20分、高木バス停より徒歩5分" },
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
              <div className="bg-[#E0F4EF] rounded-2xl border border-[#1A8066]/30 p-6">
                <h3 className="font-bold text-ink mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#1A8066] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  主なサービス・特徴
                </h3>
                <ul className="space-y-2">
                  {[
                    "行事：お花見・納涼祭・運動会・敬老会・クリスマス会",
                    "クラブ活動：書道・カラオケ・相撲愛好会 など",
                    "通院送迎バス",
                    "理容サービス",
                    "買物ツアー",
                    "短期入所室2室（ショートステイ）",
                    "食堂・集会室・娯楽室・医務室・浴室完備",
                    "地域の福祉推進者としての地域連携活動",
                  ].map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-ink-muted">
                      <span className="text-[#1A8066] mt-1 shrink-0">•</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Admission */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-4">入所条件・対象者</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-ink-muted mb-1.5">措置入所（従来制度）</p>
                    <ul className="space-y-1.5">
                      {[
                        "65歳以上で、環境上・経済的な理由から自宅での生活が困難な方",
                        "市区町村長（行政）による措置決定が必要",
                      ].map((cond) => (
                        <li key={cond} className="flex items-start gap-2 text-xs text-ink-muted">
                          <span className="text-ink-subtle mt-0.5 shrink-0">▷</span>
                          {cond}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-border pt-3">
                    <p className="text-xs font-bold text-ink-muted mb-1.5">契約入所（令和4年7月〜）</p>
                    <ul className="space-y-1.5">
                      {[
                        "65歳以上で、身体上・精神上または環境上の理由から養護を必要とする方",
                        "医療機関での入院治療が不要な方",
                      ].map((cond) => (
                        <li key={cond} className="flex items-start gap-2 text-xs text-ink-muted">
                          <span className="text-ink-subtle mt-0.5 shrink-0">▷</span>
                          {cond}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Fee */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <h3 className="font-bold text-ink mb-3">費用について</h3>
                <p className="text-sm text-ink-muted leading-loose">
                  月額料金は年収（年金等）により異なります。費用については、
                  お住まいの市区町村の担当窓口にお問い合わせいただくか、
                  直接施設へご連絡ください。
                </p>
              </div>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[#1A8066] hover:bg-primary-dark text-white font-bold px-6 py-3.5 rounded-full transition-colors"
              >
                入所のご相談・お問い合わせ
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Life</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">豊かな生活・行事・クラブ活動</h2>
            <p className="text-ink-muted mt-3 max-w-2xl mx-auto text-sm leading-loose">
              入居者の「生きがい」と「楽しみ」を大切に、充実した日常生活をサポートしています。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "季節の行事", icon: "🌸", desc: "お花見・納涼祭・運動会・敬老会・クリスマス会など、季節ごとに入居者みんなで楽しむ行事を開催しています。" },
              { title: "クラブ活動", icon: "✏️", desc: "書道・カラオケ・相撲愛好会など、趣味を活かしたクラブ活動で日常に楽しみと充実感をもたらします。" },
              { title: "通院サポート", icon: "🚌", desc: "通院送迎バスを運行し、医療機関への通院をサポート。健康管理を継続できる環境を整えています。" },
              { title: "理容サービス", icon: "💈", desc: "施設内での理容サービスを提供。外出が困難な方も、清潔でさっぱりとした生活を維持できます。" },
              { title: "買物ツアー", icon: "🛍️", desc: "定期的な買物ツアーで、自分で商品を選ぶ楽しみを提供。外出の機会が生活の活性化につながります。" },
              { title: "地域との交流", icon: "🤝", desc: "地域の福祉推進者として、地域住民や団体との交流活動を積極的に推進しています。" },
            ].map((item) => (
              <div key={item.title} className="bg-bg rounded-2xl border border-border p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
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
            入所のご相談、施設見学のご希望など、お気軽にお問い合わせください。
            措置入所・契約入所のいずれについても丁寧にご説明します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              お問い合わせ
            </Link>
            <a
              href="tel:048-624-6253"
              className="inline-flex items-center justify-center bg-white hover:bg-primary-light text-primary font-bold px-7 py-3.5 rounded-full border border-border transition-colors"
            >
              📞 048-624-6253
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
