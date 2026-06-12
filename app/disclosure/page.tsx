import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "情報公開｜社会福祉法人 三恵会",
  description:
    "社会福祉法人 三恵会（青森県むつ市大畑町）の情報公開ページ。定款・各種規程、ならびに各年度の決算資料（財産目録・貸借対照表・資金収支計算書・事業活動計算書）を公開しています。",
};

const regulations = [
  { title: "定款", note: "令和7年度版", href: "#" },
  { title: "経理規程", note: "", href: "#" },
  { title: "役員報酬及び費用弁償に関する規程", note: "", href: "#" },
];

const docTypes = [
  "監査報告書（むつ市長）",
  "監査報告書（理事長）",
  "財産目録",
  "貸借対照表",
  "資金収支計算書",
  "事業活動計算書",
];

const financialYears = [
  "令和7年度",
  "令和6年度",
  "令和5年度",
];

export default function DisclosurePage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">情報公開</h1>
          <p className="text-white/70 mt-3 max-w-2xl leading-loose">
            社会福祉法人 三恵会は、社会福祉法第59条の2に基づく情報公表制度に則り、法人の財務・運営に関する情報を公開しています。
          </p>
        </div>
      </div>

      {/* 各種規程 */}
      <section className="bg-bg py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Regulations</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">各種規程</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {regulations.map((reg) => (
              <a
                key={reg.title}
                href={reg.href}
                className="group bg-white rounded-2xl border border-border hover:border-primary/40 hover:shadow-md p-6 flex flex-col gap-3 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-ink text-sm group-hover:text-primary transition-colors leading-snug">{reg.title}</p>
                  {reg.note && <p className="text-xs text-ink-muted mt-0.5">{reg.note}</p>}
                </div>
                <span className="text-xs text-primary font-bold mt-auto flex items-center gap-1 group-hover:gap-2 transition-all">
                  PDF をダウンロード
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
          <p className="text-xs text-ink-muted/60 mt-4">
            ※ ファイルは順次更新予定です。最新版についてはお問い合わせください。
          </p>
        </div>
      </section>

      {/* 現況報告書・決算資料 */}
      <section className="bg-surface py-14 sm:py-16 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Financial Reports</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">現況報告書・決算資料</h2>
            <p className="text-ink-muted text-sm mt-2 leading-loose">
              社会福祉法人 三恵会の各年度決算資料を公開しています。
            </p>
          </div>

          <div className="space-y-5">
            {financialYears.map((year) => (
              <div key={year} className="bg-white rounded-2xl border border-border overflow-hidden">
                <div className="px-6 py-4 bg-primary-light">
                  <h3 className="font-bold text-base text-ink">{year}</h3>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {docTypes.map((doc) => (
                      <a
                        key={doc}
                        href="#"
                        className="group flex items-center gap-2.5 bg-bg hover:bg-primary-light rounded-xl px-3.5 py-3 border border-border hover:border-primary/30 transition-all duration-200"
                      >
                        <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span className="text-xs text-ink group-hover:text-primary font-medium transition-colors leading-snug">
                          {/* （…）の途中で折り返さず、括弧の前で改行する */}
                          {doc.split(/(?=（)/).map((part, i) => (
                            <span key={i} className="inline-block">{part}</span>
                          ))}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-ink-muted/60 mt-6">
            ※ PDFファイルは順次掲載予定です。閲覧をご希望の方はお問い合わせください。
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-primary-light py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-ink mb-4">書類・内容についてのお問い合わせ</h2>
          <p className="text-ink-muted mb-7 text-sm leading-loose">
            掲載されている書類の内容についてご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0175-34-3297"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0175-34-3297 お電話
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-primary-light text-primary font-bold px-7 py-3.5 rounded-full border border-border transition-all duration-200 hover:shadow-sm"
            >
              お問い合わせフォーム
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "情報公開" }]} />
    </>
  );
}
