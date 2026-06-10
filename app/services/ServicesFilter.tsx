"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  { id: "all",      label: "すべて",       count: 5 },
  { id: "facility", label: "施設・宿泊型", count: 2 },
  { id: "home",     label: "通所・在宅型", count: 3 },
];

const services = [
  {
    title: "延寿園",
    subtitle: "特別養護老人ホーム",
    href: "/services/enshuuen",
    color: "bg-[#2A6B47]",
    category: "facility",
    description:
      "むつ市大畑町に位置する三恵会の基幹施設。24時間365日体制の介護と、入居者一人ひとりの尊厳を大切にした個別ケアを提供しています。",
    features: ["24時間365日の介護体制", "看取り介護（ターミナルケア）", "認知症ケア", "リハビリテーション"],
    info: "開設：昭和59年4月",
  },
  {
    title: "季の恵",
    subtitle: "ショートステイ（短期入所生活介護）",
    href: "/services/kinoegumi",
    color: "bg-[#3A8060]",
    category: "facility",
    description:
      "延寿園に併設するショートステイ施設。在宅生活を続けながら、短期間の宿泊介護サービスをご利用いただけます。",
    features: ["延寿園に併設", "在宅生活を続けながら利用可", "介護・入浴・食事を提供", "定員20床"],
    info: "定員：20床 ／ 開設：平成22年7月",
  },
  {
    title: "ふれあいかんデイサービスセンター",
    subtitle: "通所介護",
    href: "/services/day-service",
    color: "bg-[#2D7A5A]",
    category: "home",
    description:
      "日帰りで施設に通い、入浴・食事・機能訓練・レクリエーションを楽しめます。送迎付きで安心。「今日も来てよかった」と思っていただける場所づくりを大切にしています。",
    features: ["入浴・食事・機能訓練", "レクリエーション・季節行事", "送迎サービスあり", "要支援1〜要介護5対象"],
    info: "開設年：別途確認中 ／ 営業：月〜土",
  },
  {
    title: "延寿園ホームヘルプセンター",
    subtitle: "訪問介護",
    href: "/services/home-help",
    color: "bg-[#1E6B5A]",
    category: "home",
    description:
      "ホームヘルパーが自宅を訪問し、身体介護・生活援助・通院同行を行います。「住み慣れた自宅で暮らし続けたい」を実現するためのサポートを提供します。",
    features: ["身体介護（入浴・排泄・食事）", "生活援助（掃除・洗濯・買い物）", "通院同行", "相談費用：無料"],
    info: "開設年：別途確認中",
  },
  {
    title: "延寿園在宅介護支援センター",
    subtitle: "居宅介護支援",
    href: "/services/kaigo-support",
    color: "bg-[#1A8066]",
    category: "home",
    description:
      "ケアマネジャーがご本人・ご家族の状況を丁寧にヒアリングし、最適なケアプランを作成・調整します。介護のことならどんな相談でも無料で承ります。",
    features: ["ケアプラン作成（無料）", "サービス事業者との調整", "医療機関・行政との連携", "相談費用：無料"],
    info: "開設年：別途確認中",
  },
];

export default function ServicesFilter() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? services : services.filter((s) => s.category === active);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
              active === cat.id
                ? "bg-primary text-white shadow-sm"
                : "bg-white border border-border text-ink-muted hover:text-primary hover:border-primary/40"
            }`}
          >
            {cat.label}
            <span
              className={`text-xs rounded-full w-5 h-5 flex items-center justify-center ${
                active === cat.id ? "bg-white/20 text-white" : "bg-primary-light text-primary"
              }`}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Service Cards */}
      <div className="space-y-5">
        {filtered.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group block rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-md transition-all duration-200 bg-white"
          >
            <div className="flex">
              {/* Color block */}
              <div className={`w-36 sm:w-48 shrink-0 ${s.color} flex flex-col items-center justify-center text-white text-center p-5`}>
                <p className="font-bold text-sm sm:text-base leading-snug">{s.title}</p>
                <p className="text-xs opacity-75 mt-1">{s.subtitle}</p>
              </div>

              {/* Content */}
              <div className="flex-1 px-6 sm:px-8 py-5">
                <p className="text-xs text-ink-muted mb-2">{s.info}</p>
                <p className="text-sm text-ink-muted leading-relaxed mb-4 line-clamp-2">{s.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.features.map((f) => (
                    <span key={f} className="text-xs font-medium bg-primary-light text-primary px-2.5 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden sm:flex items-center pr-6 shrink-0">
                <span className="inline-flex items-center gap-1 text-primary text-sm font-bold group-hover:gap-2 transition-all whitespace-nowrap">
                  詳しく見る
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
