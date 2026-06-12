import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 lg:gap-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="9" cy="6" r="3.5" fill="white" />
                  <circle cx="4.5" cy="13" r="3.5" fill="white" fillOpacity="0.7" />
                  <circle cx="13.5" cy="13" r="3.5" fill="white" fillOpacity="0.5" />
                </svg>
              </div>
              <div className="leading-tight">
                <div className="text-[10px] text-white/60 tracking-widest">社会福祉法人</div>
                <div className="text-base font-bold tracking-wide">三恵会</div>
              </div>
            </Link>
            <address className="not-italic text-sm text-white/70 leading-loose">
              <p>〒039-4401</p>
              <p>青森県むつ市大畑町大赤川29番地4</p>
              <p className="mt-2">
                <a href="tel:0175-34-3297" className="hover:text-white transition-colors">
                  TEL: 0175-34-3297
                </a>
              </p>
              <p>FAX: 0175-34-3495</p>
            </address>
          </div>

          {/* Menu */}
          <nav aria-label="フッターナビゲーション" className="md:text-right">
            <ul className="space-y-2">
              {[
                { label: "理事長挨拶", href: "/greeting" },
                { label: "法人概要", href: "/about" },
                { label: "情報公開", href: "/disclosure" },
                { label: "サービスのご案内", href: "/services" },
                { label: "求人情報", href: "/recruit" },
                { label: "お問い合わせ", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} 社会福祉法人 三恵会. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
