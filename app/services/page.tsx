import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ServicesFilter from "./ServicesFilter";

export const metadata: Metadata = {
  title: "各サービスのご案内｜社会福祉法人 三恵会｜むつ市大畑町",
  description:
    "三恵会（青森県むつ市大畑町）が運営する5つのサービス。特別養護老人ホーム延寿園・ショートステイ季の恵・ふれあいかんデイサービスセンター・ホームヘルプセンター・在宅介護支援センター。",
};

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

      {/* Filter + Cards */}
      <section className="bg-bg py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesFilter />
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
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0175-34-3297 お電話
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-primary-light text-primary font-bold px-8 py-4 rounded-full border border-border transition-all duration-200 hover:shadow-sm"
            >
              お問い合わせフォーム
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "各サービスのご案内" }]} />
    </>
  );
}
