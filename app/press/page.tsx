import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "広報誌",
  description:
    "社会福祉法人 三恵会の広報誌「あじさい」「ほほえみだより」のバックナンバーをPDFでご覧いただけます。",
};

const ajisai = [
  { title: "あじさい 2025年春号", date: "2025年3月発行", file: "ajisai_2025_spring.pdf" },
  { title: "あじさい 2024年冬号", date: "2024年12月発行", file: "ajisai_2024_winter.pdf" },
  { title: "あじさい 2024年秋号", date: "2024年9月発行", file: "ajisai_2024_autumn.pdf" },
  { title: "あじさい 2024年夏号", date: "2024年6月発行", file: "ajisai_2024_summer.pdf" },
  { title: "あじさい 2024年春号", date: "2024年3月発行", file: "ajisai_2024_spring.pdf" },
  { title: "あじさい 2023年冬号", date: "2023年12月発行", file: "ajisai_2023_winter.pdf" },
];

const hohoemi = [
  { title: "ほほえみだより 2025年4月号", date: "2025年4月発行", file: "hohoemi_2025_04.pdf" },
  { title: "ほほえみだより 2025年1月号", date: "2025年1月発行", file: "hohoemi_2025_01.pdf" },
  { title: "ほほえみだより 2024年10月号", date: "2024年10月発行", file: "hohoemi_2024_10.pdf" },
  { title: "ほほえみだより 2024年7月号", date: "2024年7月発行", file: "hohoemi_2024_07.pdf" },
  { title: "ほほえみだより 2024年4月号", date: "2024年4月発行", file: "hohoemi_2024_04.pdf" },
  { title: "ほほえみだより 2024年1月号", date: "2024年1月発行", file: "hohoemi_2024_01.pdf" },
];

function PressCard({ title, date, file }: { title: string; date: string; file: string }) {
  return (
    <div className="bg-surface rounded-xl border border-border p-5 flex items-center gap-4 hover:border-primary hover:shadow-sm transition-all">
      <div className="w-12 h-16 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-ink text-sm leading-tight truncate">{title}</p>
        <p className="text-xs text-ink-subtle mt-1">{date}</p>
      </div>
      <a
        href={`/press/${file}`}
        className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary-light hover:bg-primary hover:text-white px-3 py-1.5 rounded-full transition-colors"
        aria-label={`${title}をPDFで開く`}
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        PDF
      </a>
    </div>
  );
}

export default function PressPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/60 text-xs tracking-widest uppercase mb-2">Press</p>
          <h1 className="text-3xl sm:text-4xl font-bold">広報誌</h1>
          <p className="text-white/70 mt-3 max-w-xl leading-loose text-sm">
            三恵会では「あじさい」「ほほえみだより」の2種類の広報誌を発行しています。
            バックナンバーをPDFでご覧いただけます。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl space-y-14">

          {/* あじさい */}
          <section>
            <div className="flex items-center gap-4 mb-7">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white text-lg font-bold">
                紫
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ink">あじさい</h2>
                <p className="text-sm text-ink-muted">法人広報誌（年4回発行）</p>
              </div>
            </div>
            <p className="text-sm text-ink-muted leading-loose mb-6">
              三恵会全体の活動報告や施設紹介、スタッフコラム、地域イベント情報などをお届けしています。
            </p>
            <div className="space-y-3">
              {ajisai.map((item) => (
                <PressCard key={item.file} {...item} />
              ))}
            </div>
          </section>

          {/* ほほえみだより */}
          <section>
            <div className="flex items-center gap-4 mb-7">
              <div className="w-12 h-12 rounded-2xl bg-[#3A8060] flex items-center justify-center text-white text-lg font-bold">
                笑
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ink">ほほえみだより</h2>
                <p className="text-sm text-ink-muted">施設利用者・家族向け（年4回発行）</p>
              </div>
            </div>
            <p className="text-sm text-ink-muted leading-loose mb-6">
              施設内の行事報告、入居者・利用者の活動紹介、季節のレクリエーション情報などを掲載しています。
              ご家族の皆さまへの「施設の今」をお伝えする一冊です。
            </p>
            <div className="space-y-3">
              {hohoemi.map((item) => (
                <PressCard key={item.file} {...item} />
              ))}
            </div>
          </section>

          {/* Note */}
          <div className="bg-primary-light rounded-xl border border-primary/20 p-5">
            <p className="text-sm text-ink-muted leading-loose">
              ※ 掲載しているPDFはデモサイトのため、実際のファイルは含まれていません。
              バックナンバーのご請求は、お問い合わせフォームよりご連絡ください。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
