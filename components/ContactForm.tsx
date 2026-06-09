"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    category: "",
    name: "",
    nameKana: "",
    email: "",
    phone: "",
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
        <h2 className="text-2xl font-bold text-ink mb-3">お問い合わせを受け付けました</h2>
        <p className="text-ink-muted leading-loose mb-8">
          内容を確認のうえ、3営業日以内にご連絡いたします。
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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Contact info */}
      <aside className="lg:col-span-1 space-y-6">
        <div>
          <h2 className="text-lg font-bold text-ink mb-5">延寿園（法人本部）</h2>
          <address className="not-italic space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="text-sm text-ink-muted leading-loose">
                〒039-4401<br />
                青森県むつ市大畑町<br />
                大赤川29番地4
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:0175-34-3297" className="text-sm text-ink-muted hover:text-primary transition-colors">
                0175-34-3297（代表）
              </a>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span className="text-sm text-ink-muted">FAX：0175-34-3495</span>
            </div>
          </address>
        </div>

        <div className="bg-primary-light rounded-2xl border border-primary/20 p-5">
          <h3 className="font-bold text-ink text-sm mb-3">受付時間</h3>
          <p className="text-sm text-ink-muted leading-loose">
            平日 8:30 〜 17:30<br />
            土・日・祝日はお休みです。<br />
            フォームは24時間受付可能です。
          </p>
        </div>

        <div className="bg-surface rounded-2xl border border-border p-5">
          <h3 className="font-bold text-ink text-sm mb-3">採用に関するお問い合わせ</h3>
          <p className="text-xs text-ink-muted leading-loose mb-3">
            採用についての詳細は採用情報ページもご覧ください。
          </p>
          <Link
            href="/recruit"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
          >
            採用情報を見る
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </aside>

      {/* Form */}
      <div className="lg:col-span-2">
        <h2 className="text-xl font-bold text-ink mb-2">お問い合わせフォーム</h2>
        <p className="text-sm text-ink-muted mb-8">
          <span className="text-accent-dark font-medium">＊</span> は必須項目です。
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-ink mb-2">
              お問い合わせの種類 <span className="text-accent-dark">＊</span>
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg"
            >
              <option value="">選択してください</option>
              <option value="facility">施設入所・見学について</option>
              <option value="service">サービス利用について</option>
              <option value="recruit">採用・働き方について</option>
              <option value="disclosure">公開情報について</option>
              <option value="other">その他</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-bold text-ink mb-2">
                お名前 <span className="text-accent-dark">＊</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="三恵 太郎"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink mb-2">ふりがな</label>
              <input
                type="text"
                name="nameKana"
                value={form.nameKana}
                onChange={handleChange}
                placeholder="さんけい たろう"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-ink mb-2">
              メールアドレス <span className="text-accent-dark">＊</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-ink mb-2">電話番号</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="0175-XX-XXXX"
              className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-ink mb-2">
              お問い合わせ内容 <span className="text-accent-dark">＊</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="ご質問・ご要望を具体的にお書きください。"
              className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg resize-none"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="agree-contact"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              required
              className="mt-1 w-4 h-4 accent-primary"
            />
            <label htmlFor="agree-contact" className="text-sm text-ink-muted leading-relaxed">
              <Link href="/privacy" className="text-primary underline">プライバシーポリシー</Link>
              に同意して送信します。 <span className="text-accent-dark">＊</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-full transition-colors text-base"
          >
            送信する
          </button>
        </form>
      </div>
    </div>
  );
}
