"use client";

import { useState } from "react";
import Link from "next/link";

const steps = [
  { number: "01", title: "お問い合わせ・申込書の取り寄せ", body: "まず、入所を希望される施設に電話またはお問い合わせフォームでご連絡ください。申込書類一式をお送りします。" },
  { number: "02", title: "申込書類の提出", body: "申込書・医師の診断書・介護保険被保険者証のコピーなど、必要書類を揃えてご提出ください。" },
  { number: "03", title: "入所判定委員会", body: "申込書類をもとに入所判定委員会で検討を行います。要介護度・在宅での生活状況などを総合的に判断します。" },
  { number: "04", title: "入所順位の決定・待機", body: "判定結果に応じて入所順位をお知らせします。空室が生じた際に、順位に従ってご案内します。" },
  { number: "05", title: "入所・契約", body: "入所が決まりましたら、施設にお越しいただき契約を締結します。持ち物や生活用品についてご説明します。" },
];

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    facilityName: "",
    applicantName: "",
    applicantKana: "",
    birthdate: "",
    gender: "",
    careLevel: "",
    address: "",
    phone: "",
    contactName: "",
    contactRelation: "",
    contactPhone: "",
    message: "",
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-20 text-center max-w-md mx-auto">
        <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-ink mb-3">お申し込みを受け付けました</h2>
        <p className="text-ink-muted leading-loose mb-8">
          内容を確認のうえ、担当者より3営業日以内にご連絡いたします。
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-full transition-colors"
        >
          トップページに戻る
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Flow */}
      <section className="bg-primary-light py-12 sm:py-14 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-xl font-bold text-ink mb-8 text-center">入所までの流れ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative">
              <div className="bg-surface rounded-xl border border-border p-5 h-full">
                <div className="text-3xl font-bold text-primary/30 mb-2">{step.number}</div>
                <h3 className="font-bold text-ink text-sm mb-2 leading-snug">{step.title}</h3>
                <p className="text-xs text-ink-muted leading-relaxed">{step.body}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-6 h-6 bg-primary-light items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-ink mb-2 text-center">入所申込フォーム</h2>
        <p className="text-sm text-ink-muted text-center mb-10">
          <span className="text-accent-dark font-medium">＊</span> は必須項目です。
        </p>

        <form onSubmit={handleSubmit} className="space-y-7 bg-surface rounded-2xl border border-border p-7 sm:p-9">
          <div>
            <label className="block text-sm font-bold text-ink mb-2">
              希望施設 <span className="text-accent-dark">＊</span>
            </label>
            <select
              name="facilityName"
              value={form.facilityName}
              onChange={handleChange}
              required
              className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg"
            >
              <option value="">選択してください</option>
              <option value="sankeien">特別養護老人ホーム 三恵苑</option>
              <option value="hikawa">特別養護老人ホーム ひかわ</option>
              <option value="both">どちらでも可</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-bold text-ink mb-2">
                申請者氏名（漢字） <span className="text-accent-dark">＊</span>
              </label>
              <input
                type="text"
                name="applicantName"
                value={form.applicantName}
                onChange={handleChange}
                required
                placeholder="三恵 太郎"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink mb-2">
                氏名（ふりがな） <span className="text-accent-dark">＊</span>
              </label>
              <input
                type="text"
                name="applicantKana"
                value={form.applicantKana}
                onChange={handleChange}
                required
                placeholder="さんけい たろう"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-bold text-ink mb-2">
                生年月日 <span className="text-accent-dark">＊</span>
              </label>
              <input
                type="date"
                name="birthdate"
                value={form.birthdate}
                onChange={handleChange}
                required
                className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink mb-2">
                性別 <span className="text-accent-dark">＊</span>
              </label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                required
                className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg"
              >
                <option value="">選択</option>
                <option value="male">男性</option>
                <option value="female">女性</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-ink mb-2">
              要介護度 <span className="text-accent-dark">＊</span>
            </label>
            <select
              name="careLevel"
              value={form.careLevel}
              onChange={handleChange}
              required
              className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg"
            >
              <option value="">選択してください</option>
              <option value="3">要介護3</option>
              <option value="4">要介護4</option>
              <option value="5">要介護5</option>
              <option value="pending">申請中・未定</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-ink mb-2">
              現在のご住所 <span className="text-accent-dark">＊</span>
            </label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              placeholder="埼玉県さいたま市〇〇区〇〇町1-2-3"
              className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-ink mb-2">連絡先電話番号</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="048-XXX-XXXX"
              className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg"
            />
          </div>

          <div className="pt-4 border-t border-border">
            <h3 className="font-bold text-ink mb-5 text-sm">ご家族・緊急連絡先</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-ink mb-2">
                  担当者・ご家族氏名 <span className="text-accent-dark">＊</span>
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={form.contactName}
                  onChange={handleChange}
                  required
                  placeholder="三恵 花子"
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-ink mb-2">続柄</label>
                <input
                  type="text"
                  name="contactRelation"
                  value={form.contactRelation}
                  onChange={handleChange}
                  placeholder="長女"
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg"
                />
              </div>
            </div>
            <div className="mt-5">
              <label className="block text-sm font-bold text-ink mb-2">
                緊急連絡先電話番号 <span className="text-accent-dark">＊</span>
              </label>
              <input
                type="tel"
                name="contactPhone"
                value={form.contactPhone}
                onChange={handleChange}
                required
                placeholder="090-XXXX-XXXX"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-ink mb-2">ご要望・ご質問など</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="現在の状況や、施設見学のご希望などお気軽にお書きください。"
              className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg resize-none"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="agree-app"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              required
              className="mt-1 w-4 h-4 accent-primary"
            />
            <label htmlFor="agree-app" className="text-sm text-ink-muted leading-relaxed">
              <Link href="/privacy" className="text-primary underline">プライバシーポリシー</Link>
              に同意のうえ、申し込みます。 <span className="text-accent-dark">＊</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-full transition-colors text-base"
          >
            申し込みを送信する
          </button>
        </form>
      </div>
    </>
  );
}
