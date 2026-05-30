import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "公開情報",
  description:
    "社会福祉法人 三恵会の公開情報。社会福祉法第59条の2に基づき、定款・運営規程・決算書・現況報告書・事業報告書を公開しています。",
};

const operationRules = [
  { name: "特別養護老人ホーム 三恵苑", note: "（特別養護老人ホーム）", file: "uneiきlkijun_sankeien.pdf" },
  { name: "短期入所生活介護 三恵苑", note: "（ショートステイ）", file: "unkei_short_sankeien.pdf" },
  { name: "通所介護 三恵苑", note: "（デイサービス）", file: "unkei_day_sankeien.pdf" },
  { name: "特別養護老人ホーム ひかわ", note: "（特別養護老人ホーム）", file: "unkei_hikawa.pdf" },
  { name: "短期入所生活介護 ひかわ", note: "（ショートステイ）", file: "unkei_short_hikawa.pdf" },
  { name: "通所介護 ひかわ", note: "（デイサービス）", file: "unkei_day_hikawa.pdf" },
  { name: "養護老人ホーム 富士見園", note: "（養護老人ホーム）", file: "unkei_fujimien.pdf" },
  { name: "居宅介護支援事業所 三恵苑", note: "（居宅介護支援）", file: "unkei_care_sankeien.pdf" },
  { name: "居宅介護支援事業所 ひかわ", note: "（居宅介護支援）", file: "unkei_care_hikawa.pdf" },
  { name: "訪問介護事業所", note: "（訪問介護）", file: "unkei_houmon.pdf" },
  { name: "地域包括支援センター", note: "（地域包括支援）", file: "unkei_chiiki.pdf" },
  { name: "介護予防支援事業所", note: "（介護予防支援）", file: "unkei_yobo.pdf" },
];

const financialDocs = [
  {
    category: "決算書（財務諸表）",
    items: [
      { year: "令和5年度（2023年度）", file: "financial_2023.pdf" },
      { year: "令和4年度（2022年度）", file: "financial_2022.pdf" },
      { year: "令和3年度（2021年度）", file: "financial_2021.pdf" },
    ],
  },
  {
    category: "現況報告書",
    items: [
      { year: "令和5年度（2023年度）", file: "report_current_2023.pdf" },
      { year: "令和4年度（2022年度）", file: "report_current_2022.pdf" },
    ],
  },
  {
    category: "事業報告書",
    items: [
      { year: "令和5年度（2023年度）", file: "report_business_2023.pdf" },
      { year: "令和4年度（2022年度）", file: "report_business_2022.pdf" },
    ],
  },
];

function PdfLink({ label, file }: { label: string; file: string }) {
  return (
    <a
      href={`/documents/${file}`}
      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark font-medium group"
      aria-label={`${label}（PDF）をダウンロード`}
    >
      <svg
        className="w-5 h-5 text-primary/70 group-hover:text-primary shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      {label}
      <span className="text-xs text-ink-subtle bg-primary-light px-1.5 py-0.5 rounded font-normal">
        PDF
      </span>
    </a>
  );
}

export default function DisclosurePage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/60 text-xs tracking-widest uppercase mb-2">
            Disclosure
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">公開情報</h1>
          <p className="text-white/70 mt-3 max-w-2xl leading-loose text-sm">
            社会福祉法第59条の2に基づき、社会福祉法人 三恵会は以下の書類を公開しています。
            内容についてご不明な点は、法人本部までお問い合わせください。
          </p>
        </div>
      </div>

      {/* Legal notice */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-amber-800 leading-relaxed">
              本ページは、<strong>社会福祉法第59条の2</strong>に基づく法人情報の公開義務に対応しています。
              掲載文書はWAMNET（福祉医療機構）にも届出・公開されています。
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl space-y-14">

          {/* 1. 定款 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-primary rounded-full" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-ink">定款</h2>
            </div>
            <div className="bg-surface rounded-2xl border border-border p-6">
              <PdfLink label="社会福祉法人 三恵会 定款" file="teikan.pdf" />
              <p className="text-xs text-ink-subtle mt-3 leading-relaxed">
                ※ 定款は直近の改定版を掲載しています。変更がある場合は随時更新します。
              </p>
            </div>
          </section>

          {/* 2. 運営規程 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-primary rounded-full" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-ink">運営規程</h2>
            </div>
            <p className="text-sm text-ink-muted mb-5 leading-loose">
              各事業所の運営規程を以下に掲載しています（全12事業所）。
            </p>
            <div className="bg-surface rounded-2xl border border-border overflow-hidden">
              {operationRules.map((rule, idx) => (
                <div
                  key={rule.name}
                  className={`flex flex-col sm:flex-row sm:items-center gap-2 px-6 py-4 ${
                    idx < operationRules.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex-1">
                    <span className="text-sm text-ink font-medium">{rule.name}</span>
                    <span className="text-xs text-ink-subtle ml-2">{rule.note}</span>
                  </div>
                  <PdfLink label={`${rule.name} 運営規程`} file={rule.file} />
                </div>
              ))}
            </div>
          </section>

          {/* 3. Financial Documents */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-primary rounded-full" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-ink">財務・事業報告書類</h2>
            </div>
            <p className="text-sm text-ink-muted mb-6 leading-loose">
              社会福祉法人会計基準に基づく財務諸表（決算書）、現況報告書および事業報告書を掲載しています。
            </p>

            <div className="space-y-6">
              {financialDocs.map((group) => (
                <div key={group.category} className="bg-surface rounded-2xl border border-border overflow-hidden">
                  <div className="bg-primary-light px-6 py-3">
                    <h3 className="font-bold text-ink text-sm">{group.category}</h3>
                  </div>
                  <div>
                    {group.items.map((item, idx) => (
                      <div
                        key={item.year}
                        className={`flex flex-col sm:flex-row sm:items-center gap-2 px-6 py-4 ${
                          idx < group.items.length - 1 ? "border-b border-border" : ""
                        }`}
                      >
                        <span className="text-sm text-ink flex-1">{item.year}</span>
                        <PdfLink label={`${group.category} ${item.year}`} file={item.file} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. WAMNET */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-primary rounded-full" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-ink">WAMNET（外部公開情報）</h2>
            </div>
            <div className="bg-surface rounded-2xl border border-border p-6">
              <p className="text-sm text-ink-muted leading-loose mb-4">
                社会福祉法人の現況報告書等は、独立行政法人福祉医療機構が運営する
                「WAMNET」にも公開されています。下記リンクから検索することができます。
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-ink-muted bg-bg border border-border rounded-lg px-4 py-2">
                <svg className="w-4 h-4 text-ink-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                wam.go.jp（WAMNET）
                <span className="text-xs text-ink-subtle">※デモサイトのためリンクを無効化しています</span>
              </div>
            </div>
          </section>

          {/* 5. Note */}
          <section className="bg-primary-light rounded-2xl border border-primary/20 p-6">
            <h3 className="font-bold text-ink mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              掲載文書についてのご注意
            </h3>
            <ul className="text-sm text-ink-muted space-y-2 leading-loose">
              <li>• 掲載しているPDFファイルはデモサイトのため、実際のファイルは含まれていません。</li>
              <li>• 本番サイトでは、各年度の書類を随時更新して掲載します。</li>
              <li>• 掲載情報に関するお問い合わせは法人本部までご連絡ください。</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
