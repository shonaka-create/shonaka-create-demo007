"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const serviceDropdownItems = [
  { label: "デイサービス", href: "/services/day-service", desc: "通所介護" },
  { label: "在宅介護支援", href: "/services/zaitaku-kaigo", desc: "訪問介護・居宅支援" },
  { label: "地域包括支援センター", href: "/services/chiiki-houkatsu", desc: "高齢者総合相談" },
];

const facilityDropdownItems = [
  { label: "三恵苑", href: "/facilities/sankeien", desc: "特別養護老人ホーム" },
  { label: "ひかわ", href: "/facilities/hikawa", desc: "特別養護老人ホーム" },
  { label: "富士見園", href: "/facilities/fujimien", desc: "養護老人ホーム" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [facilitiesOpen, setFacilitiesOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement>(null);
  const facilitiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (facilitiesRef.current && !facilitiesRef.current.contains(e.target as Node)) {
        setFacilitiesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isServicesActive = pathname?.startsWith("/services");
  const isFacilitiesActive = pathname?.startsWith("/facilities");

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 group-hover:bg-primary-dark transition-colors">
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
              <div className="text-[10px] text-ink-muted tracking-widest uppercase font-medium hidden sm:block">
                社会福祉法人
              </div>
              <div className="text-base font-bold text-ink tracking-wide">
                三恵会
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="メインナビゲーション">
            <Link
              href="/about"
              className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                pathname === "/about"
                  ? "text-primary bg-primary-light"
                  : "text-ink-muted hover:text-primary hover:bg-primary-light/50"
              }`}
            >
              三恵会とは
            </Link>

            {/* 施設のご案内 dropdown */}
            <div className="relative" ref={facilitiesRef}>
              <button
                onClick={() => {
                  setFacilitiesOpen((v) => !v);
                  setServicesOpen(false);
                }}
                className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                  isFacilitiesActive
                    ? "text-primary bg-primary-light"
                    : "text-ink-muted hover:text-primary hover:bg-primary-light/50"
                }`}
              >
                施設のご案内
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${facilitiesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {facilitiesOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-56 bg-white rounded-xl border border-border shadow-lg overflow-hidden z-50">
                  {facilityDropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex flex-col px-4 py-3 hover:bg-primary-light transition-colors border-b border-border last:border-0"
                      onClick={() => setFacilitiesOpen(false)}
                    >
                      <span className="text-sm font-semibold text-ink">{item.label}</span>
                      <span className="text-xs text-ink-subtle mt-0.5">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* サービスのご案内 dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => {
                  setServicesOpen((v) => !v);
                  setFacilitiesOpen(false);
                }}
                className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                  isServicesActive
                    ? "text-primary bg-primary-light"
                    : "text-ink-muted hover:text-primary hover:bg-primary-light/50"
                }`}
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
                <div className="absolute top-full left-0 mt-1.5 w-60 bg-white rounded-xl border border-border shadow-lg overflow-hidden z-50">
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

            {[
              { label: "広報誌", href: "/press" },
              { label: "ブログ", href: "/blog" },
              { label: "公開情報", href: "/disclosure" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                  pathname === item.href
                    ? "text-primary bg-primary-light"
                    : "text-ink-muted hover:text-primary hover:bg-primary-light/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm text-ink-muted hover:text-primary transition-colors"
            >
              お問い合わせ
            </Link>
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
          <nav
            className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1"
            aria-label="モバイルナビゲーション"
          >
            <Link
              href="/about"
              className={`text-sm font-medium px-3 py-3 rounded-md transition-colors ${
                pathname === "/about" ? "text-primary bg-primary-light" : "text-ink-muted hover:text-primary hover:bg-primary-light/50"
              }`}
              onClick={() => setIsOpen(false)}
            >
              三恵会とは
            </Link>

            <div className="mt-1">
              <p className="text-[10px] font-bold text-ink-subtle px-3 py-1.5 tracking-widest uppercase">
                施設のご案内
              </p>
              {facilityDropdownItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm font-medium pl-6 pr-3 py-2.5 rounded-md text-ink-muted hover:text-primary hover:bg-primary-light/50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item.label}
                  <span className="text-xs text-ink-subtle ml-1">({item.desc})</span>
                </Link>
              ))}
            </div>

            <div className="mt-1">
              <p className="text-[10px] font-bold text-ink-subtle px-3 py-1.5 tracking-widest uppercase">
                サービスのご案内
              </p>
              {serviceDropdownItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm font-medium pl-6 pr-3 py-2.5 rounded-md text-ink-muted hover:text-primary hover:bg-primary-light/50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item.label}
                </Link>
              ))}
            </div>

            {[
              { label: "広報誌", href: "/press" },
              { label: "ブログ", href: "/blog" },
              { label: "公開情報", href: "/disclosure" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium px-3 py-3 rounded-md transition-colors ${
                  pathname === item.href ? "text-primary bg-primary-light" : "text-ink-muted hover:text-primary hover:bg-primary-light/50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm font-medium px-3 py-3 rounded-md text-ink-muted hover:text-primary hover:bg-primary-light/50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              お問い合わせ
            </Link>
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
