import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "理事長挨拶｜社会福祉法人 三恵会",
  description:
    "社会福祉法人 三恵会 理事長 松岡茂樹からのご挨拶。昭和59年の設立以来、青森県むつ市大畑町を拠点に下北地域の高齢者福祉を支え続けています。",
};

export default function GreetingPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="パンくずリスト" className="mb-4">
            <ol className="flex items-center gap-1.5 text-xs text-white/50">
              <li><Link href="/" className="hover:text-white/80 transition-colors">ホーム</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">理事長挨拶</li>
            </ol>
          </nav>
          <p className="text-white/60 text-xs tracking-widest uppercase mb-2">Greeting</p>
          <h1 className="text-3xl sm:text-4xl font-bold">理事長挨拶</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose">
            社会福祉法人 三恵会 理事長よりご挨拶申し上げます。
          </p>
        </div>
      </div>

      {/* Greeting Content */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

            {/* Photo */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl overflow-hidden bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center aspect-[3/4] max-w-xs mx-auto lg:mx-0">
                <svg className="w-14 h-14 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-sm text-gray-400 font-medium text-center px-4">理事長 写真</p>
                <p className="text-xs text-gray-300 mt-1 text-center px-4">※ 写真は受領次第差し替えます</p>
              </div>
              <div className="mt-5 text-center lg:text-left">
                <p className="text-xs text-ink-muted tracking-widest mb-1">社会福祉法人 三恵会</p>
                <p className="text-lg font-bold text-ink">理事長　松岡 茂樹</p>
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <p className="text-primary text-xs font-bold tracking-widest mb-3">Message from the Director</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-2">ご挨拶</h2>
              </div>

              <div className="space-y-5 text-ink-muted leading-[2] text-sm sm:text-base">
                <p>
                  社会福祉法人三恵会は、地域の高齢者を大切にする事を目的として昭和59年4月、特別養護老人ホームを運営するために設立され、開設以来30年余り、高齢化社会が進む中で地域から信頼される施設、ご家族、地域に開かれた地域福祉に貢献できる法人運営を目指して努力を重ねて参りました。
                </p>
                <p>
                  これ迄法人運営にご支援、ご協力を賜った多くの方々にはあらためて厚くお礼申し上げます。
                </p>
                <p>
                  平成12年4月に創設された介護保険制度により、高齢者福祉を取り巻く環境は急激に変化して来ました。当法人も平成22年7月、ショートステイ20床を大畑町に開設したほか、多様な福祉事業の機能を持ち、地域における福祉サービスの充実に努めて来ました。
                </p>
                <p>
                  今後、益々進む高齢者社会に対して当法人に課せられた使命と役割は大きなものとなっていくと思われますが、長年の経験と実績を生かし新たな知恵を出し合い、下北の地域に根差した質の高いサービスをご利用者の皆様に提供してまいりたいと考えております。
                </p>
                <p>
                  今後も創設の精神「老人福祉の充実」を胸に刻み、高齢者福祉の一翼を担ってまいる所存ですので皆様方からのご支援ご協力をよろしくお願い申し上げます。
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-border text-right">
                <p className="text-sm text-ink-muted">社会福祉法人 三恵会</p>
                <p className="text-lg font-bold text-ink mt-1">理事長　松岡 茂樹</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-surface py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-xs font-bold tracking-widest uppercase mb-3">Philosophy</p>
          <h2 className="text-2xl font-bold text-ink mb-8">三恵会の理念</h2>
          <p className="text-ink-muted leading-loose max-w-2xl mx-auto text-base">
            私達はご利用者の尊厳を尊重し、安心と信頼のある施設を目指すと共に、ご家族、地域に開かれた地域福祉に貢献できる法人運営を目指します。
          </p>
          <p className="text-xs text-ink-muted/60 mt-4">※ 正式な理念文は別途確認中</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-light py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-ink mb-4">法人についてさらに詳しく</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              法人概要を見る
            </Link>
            <Link
              href="/services/enshuuen"
              className="inline-flex items-center justify-center bg-white hover:bg-primary-light text-primary font-bold px-7 py-3.5 rounded-full border border-border transition-colors"
            >
              各サービスのご案内
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
