import Link from "next/link";

const facilityLinks = [
  { label: "特別養護老人ホーム 三恵苑", href: "/facilities#sankeien" },
  { label: "特別養護老人ホーム ひかわ", href: "/facilities#hikawa" },
  { label: "養護老人ホーム 富士見園", href: "/facilities#fujimien" },
];

const serviceLinks = [
  { label: "デイサービス", href: "/services#day" },
  { label: "在宅介護支援", href: "/services#home" },
  { label: "地域包括支援センター", href: "/services#chiiki" },
];

const infoLinks = [
  { label: "三恵会とは", href: "/about" },
  { label: "採用情報", href: "/recruit" },
  { label: "広報誌", href: "/press" },
  { label: "ブログ", href: "/blog" },
  { label: "公開情報", href: "/disclosure" },
  { label: "入所申し込み", href: "/application" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "プライバシーポリシー", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="9" cy="6" r="3.5" fill="white" />
                  <circle cx="4.5" cy="13" r="3.5" fill="white" fillOpacity="0.7" />
                  <circle cx="13.5" cy="13" r="3.5" fill="white" fillOpacity="0.5" />
                </svg>
              </div>
              <div className="leading-tight">
                <div className="text-[10px] text-white/60 tracking-widest">
                  社会福祉法人
                </div>
                <div className="text-base font-bold tracking-wide">三恵会</div>
              </div>
            </Link>
            <address className="not-italic text-sm text-white/70 leading-loose">
              <p>〒331-0052</p>
              <p>埼玉県さいたま市西区</p>
              <p>大字中釘2219-4</p>
              <p className="mt-3">
                法人番号：6030005001266
              </p>
              <p>設立：昭和62年11月18日</p>
            </address>
          </div>

          {/* Facilities */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white/90 mb-4 pb-2 border-b border-white/20">
              施設のご案内
            </h3>
            <ul className="space-y-2">
              {facilityLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-bold tracking-wider text-white/90 mt-8 mb-4 pb-2 border-b border-white/20">
              サービスのご案内
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info links */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white/90 mb-4 pb-2 border-b border-white/20">
              その他のご案内
            </h3>
            <ul className="space-y-2">
              {infoLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recruit CTA */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white/90 mb-4 pb-2 border-b border-white/20">
              採用情報
            </h3>
            <p className="text-sm text-white/70 mb-5 leading-relaxed">
              三恵会では、介護の仕事に情熱を持つ仲間を随時募集しています。
            </p>
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-200 text-xs font-medium px-3 py-1.5 rounded-full border border-yellow-400/30 mb-5">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.5l-3.71 1.95.71-4.13L2 5.5l4.15-.75L8 1z"/>
              </svg>
              プラチナ認定取得（埼玉県）
            </div>
            <Link
              href="/recruit"
              className="flex items-center justify-center bg-accent hover:bg-accent-dark text-white text-sm font-bold px-5 py-3 rounded-full transition-colors"
            >
              採用情報を見る
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} 社会福祉法人 三恵会. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-xs text-white/50 hover:text-white/80 transition-colors"
          >
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
