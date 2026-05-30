import type { Metadata } from "next";
import ApplicationForm from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "入所申し込み",
  description:
    "社会福祉法人 三恵会の特別養護老人ホーム（三恵苑・ひかわ）への入所申込フォームです。入所までの流れもご確認いただけます。",
};

export default function ApplicationPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/60 text-xs tracking-widest uppercase mb-2">Application</p>
          <h1 className="text-3xl sm:text-4xl font-bold">入所申し込み</h1>
          <p className="text-white/70 mt-3 text-sm leading-loose max-w-xl">
            特別養護老人ホーム（三恵苑・ひかわ）への入所をご希望の方は、
            以下のフォームよりお申し込みください。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <ApplicationForm />
      </div>
    </>
  );
}
