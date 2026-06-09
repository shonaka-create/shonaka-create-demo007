"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const serviceDropdownItems = [
  { label: "延寿園", href: "/services/enshuuen", desc: "特別養護老人ホーム" },
  { label: "季の恵", href: "/services/kinoegumi", desc: "ショートステイ（短期入所生活介護）" },
  { label: "ふれあいかんデイサービスセンター", href: "/services/day-service", desc: "通所介護" },
  { label: "延寿園ホームヘルプセンター", href: "/services/home-help", desc: "訪問介護" },
  { label: "延寿園在宅介護支援センター", href: "/services/kaigo-support", desc: "居宅介護支援" },
];

const navLinkClass =
  "text-sm font-medium px-3 py-2 rounded-md text-ink-muted hover:text-primary-dark hover:bg-primary-light transition-colors";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 group-hover:bg-primary-dark transition-colors">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="9" cy="6" r="3.5" fill="white" />
                <circle cx="4.5" cy="13" r="3.5" fill="white" fillOpacity="0.7" />
                <circle cx="13.5" cy="13" r="3.5" fill="white" fillOpacity="0.5" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-[10px] text-ink-muted tracking-widest uppercase font-medium hidden sm:block">
                社会福祉法人
              </div>
              <div className="text-base font-bold text-ink tracking-wide">三恵会</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="メインナビゲーション">
            <Link href="/greeting" className={navLinkClass}>理事長挨拶</Link>
            <Link href="/about" className={navLinkClass}>法人概要</Link>

            {/* サービスのご案内 dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className={`flex items-center gap-1 ${navLinkClass}`}
              >
                サービスのご案内
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-72 bg-white rounded-xl border border-border shadow-lg overflow-hidden z-50">
                  {serviceDropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex flex-col px-4 py-3 hover:bg-primary-light transition-colors border-b border-border last:border-0"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="text-sm font-semibold text-ink">{item.label}</span>
                      <span className="text-xs text-ink-subtle mt-0.5">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/recruit" className={navLinkClass}>求人情報</Link>
            <Link href="/contact" className={navLinkClass}>お問い合わせ</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0175-34-3297"
              className="flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              0175-34-3297
            </a>
            <Link
              href="/recruit"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white text-sm font-bold px-5 py-2 rounded-full transition-colors shadow-sm"
            >
              採用情報
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-ink-muted hover:text-ink hover:bg-primary-light/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="モバイルナビゲーション">
            <Link
              href="/greeting"
              className="text-sm font-medium px-3 py-3 rounded-md text-ink-muted hover:text-primary-dark hover:bg-primary-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
              理事長挨拶
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium px-3 py-3 rounded-md text-ink-muted hover:text-primary-dark hover:bg-primary-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
              法人概要
            </Link>

            <div className="mt-1">
              <p className="text-[10px] font-bold text-ink-subtle px-3 py-1.5 tracking-widest uppercase">
                サービスのご案内
              </p>
              {serviceDropdownItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm font-medium pl-6 pr-3 py-2.5 rounded-md text-ink-muted hover:text-primary-dark hover:bg-primary-light transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>
                    {item.label}
                    <span className="text-xs text-ink-subtle ml-1">（{item.desc}）</span>
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="/recruit"
              className="text-sm font-medium px-3 py-3 rounded-md text-ink-muted hover:text-primary-dark hover:bg-primary-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
              求人情報
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium px-3 py-3 rounded-md text-ink-muted hover:text-primary-dark hover:bg-primary-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
              お問い合わせ
            </Link>

            <a
              href="tel:0175-34-3297"
              className="flex items-center gap-2 text-sm font-bold px-3 py-3 rounded-md text-primary hover:bg-primary-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              0175-34-3297（代表）
            </a>

            <div className="pt-2">
              <Link
                href="/recruit"
                className="flex items-center justify-center bg-primary hover:bg-primary-dark text-white text-sm font-bold px-5 py-3 rounded-full transition-colors"
                onClick={() => setIsOpen(false)}
              >
                採用情報を見る
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
