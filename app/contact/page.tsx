import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "社会福祉法人 三恵会へのお問い合わせフォーム。施設・サービスに関するご相談、採用についてのお問い合わせなどお気軽にご連絡ください。",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/60 text-xs tracking-widest uppercase mb-2">Contact</p>
          <h1 className="text-3xl sm:text-4xl font-bold">お問い合わせ</h1>
          <p className="text-white/70 mt-3 text-sm leading-loose max-w-xl">
            施設・サービスに関するご相談・ご質問、採用についてのお問い合わせなど、お気軽にご連絡ください。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <ContactForm />
      </div>
    </>
  );
}
