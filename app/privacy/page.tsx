import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "社会福祉法人 三恵会のプライバシーポリシー（個人情報の取り扱い方針）をご確認いただけます。",
};

const sections = [
  {
    title: "個人情報の収集について",
    body: `社会福祉法人 三恵会（以下「当法人」）は、お問い合わせフォーム・入所申込フォーム等を通じて、氏名・住所・電話番号・メールアドレスその他必要な情報を収集する場合があります。個人情報は、各フォームに明示された目的の範囲内でのみ収集します。`,
  },
  {
    title: "個人情報の利用目的",
    body: `当法人が収集した個人情報は、以下の目的のために利用します。\n\n① 入所申し込みの受付および入所手続きに関する業務\n② 施設・サービスに関するお問い合わせへの回答\n③ 採用選考に関する業務\n④ 広報誌・お知らせ等の発送（希望者のみ）\n⑤ サービス提供に必要な関係機関との情報共有（必要な範囲に限る）`,
  },
  {
    title: "個人情報の第三者提供",
    body: `当法人は、以下の場合を除き、収集した個人情報を第三者に提供しません。\n\n① ご本人の同意がある場合\n② 法令に基づく場合\n③ サービス提供上必要な委託先（ケアプランに関連する医療機関・行政機関等）への提供で、適切な管理を義務付けている場合`,
  },
  {
    title: "個人情報の安全管理",
    body: `当法人は、個人情報の漏洩・滅失・毀損を防止するため、適切な安全管理措置を講じます。個人情報を取り扱う職員に対して、適切な教育・監督を行います。`,
  },
  {
    title: "個人情報の開示・訂正・削除",
    body: `ご本人から個人情報の開示・訂正・削除のご要望がある場合は、ご本人確認のうえ、合理的な範囲で対応します。ご要望は法人本部のお問い合わせ窓口までご連絡ください。`,
  },
  {
    title: "Cookieおよびアクセスログについて",
    body: `当サイトでは、サイトの利用状況把握・改善のためにCookieおよびアクセスログを使用する場合があります。これらはサービス向上のためにのみ利用し、個人の特定には使用しません。`,
  },
  {
    title: "プライバシーポリシーの変更",
    body: `当法人は、法令の改正やサービス内容の変更に伴い、本プライバシーポリシーを変更することがあります。変更がある場合は、本サイトに掲載します。`,
  },
  {
    title: "お問い合わせ窓口",
    body: `個人情報の取り扱いに関するご質問・苦情については、下記の窓口にお問い合わせください。\n\n社会福祉法人 三恵会 法人本部\n〒331-0052 埼玉県さいたま市西区大字中釘2219-4`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/60 text-xs tracking-widest uppercase mb-2">Privacy</p>
          <h1 className="text-3xl sm:text-4xl font-bold">プライバシーポリシー</h1>
          <p className="text-white/70 mt-3 text-sm">
            個人情報の取り扱いに関する方針
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl">
          {/* Intro */}
          <div className="bg-primary-light rounded-2xl border border-primary/20 p-6 mb-12">
            <p className="text-sm text-ink-muted leading-loose">
              社会福祉法人 三恵会（以下「当法人」）は、利用者・入居者・求職者をはじめ、当サイトをご利用の皆さまの個人情報の保護を重要な責務と考えています。以下の方針に従って個人情報を適切に取り扱います。
            </p>
            <p className="text-xs text-ink-subtle mt-4">
              制定日：令和7年5月　最終更新：令和7年5月
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, idx) => (
              <section key={section.title}>
                <h2 className="text-lg font-bold text-ink mb-4 flex items-center gap-3">
                  <span className="text-sm font-bold text-primary bg-primary-light px-2 py-0.5 rounded">
                    第{idx + 1}条
                  </span>
                  {section.title}
                </h2>
                <div className="text-sm text-ink-muted leading-loose whitespace-pre-line pl-4 border-l-2 border-border">
                  {section.body}
                </div>
              </section>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 pt-10 border-t border-border">
            <p className="text-sm text-ink-muted mb-6">
              プライバシーポリシーに関するお問い合わせは下記よりご連絡ください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-full transition-colors"
            >
              お問い合わせフォーム
            </Link>
          </div>
        </div>
      </div>

      <Breadcrumb items={[{ label: "プライバシーポリシー" }]} />
    </>
  );
}
