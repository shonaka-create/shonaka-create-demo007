"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Position {
  title: string;
  facility: string;
  type: string;
  color: string;
  description: string;
  hours: string[];
  qualifications: string[];
}

// 各事業所 共通待遇（給与の詳細は非公開・お問い合わせ対応）
const commonBenefits = [
  "社会保険完備（健康・厚生年金・雇用・労災）",
  "賞与・定時昇給あり",
  "退職金制度あり",
  "通勤手当あり",
  "年間休日105日",
  "有給休暇（6ヶ月経過後 10日付与）",
  "産前産後・育児・介護休業あり",
  "制服貸与",
];

const allPositions: Position[] = [
  {
    title: "介護職員（特養）",
    facility: "延寿園",
    type: "正職員・非常勤",
    color: "bg-[#2A6B47]",
    description: "施設利用者に対する介護業務全般（入浴・排泄・食事・移動等の介助）",
    hours: ["① 6:45 〜 15:45", "② 8:30 〜 17:30", "③ 16:15 〜 翌9:15（夜勤）"],
    qualifications: ["介護福祉士（保有者優遇）", "普通自動車免許", "資格・経験不問（やる気があれば歓迎）"],
  },
  {
    title: "介護職員（ショートステイ）",
    facility: "季の恵",
    type: "正職員・非常勤",
    color: "bg-[#3A8060]",
    description: "ショートステイ利用者の日常生活全般の介護（食事・入浴・排泄・機能訓練等）",
    hours: ["① 7:00 〜 16:00", "② 9:00 〜 18:00", "③ 夜勤シフトあり（詳細はご相談ください）"],
    qualifications: ["介護福祉士（保有者優遇）", "普通自動車免許", "資格・経験不問（意欲のある方歓迎）"],
  },
  {
    title: "介護職員（デイサービス）",
    facility: "ふれあいかん",
    type: "正職員・非常勤",
    color: "bg-[#2D7A5A]",
    description: "通所介護利用者への介護全般（送迎補助・入浴介助・レクリエーション実施・食事介助等）",
    hours: ["① 8:00 〜 17:00", "② 8:30 〜 17:30（土曜シフトあり）"],
    qualifications: ["介護職員初任者研修修了（歓迎）", "普通自動車免許", "経験・資格不問（やる気があれば歓迎）"],
  },
  {
    title: "ホームヘルパー",
    facility: "ホームヘルプセンター",
    type: "準職員・登録",
    color: "bg-[#1E6B5A]",
    description: "訪問介護計画に基づき、清掃・食事・排泄等の介助全般と付随する業務",
    hours: ["日勤 ① 8:00 〜 17:00"],
    qualifications: [
      "介護職員初任者研修修了者（旧ホームヘルパー２級）以上",
      "普通自動車二種免許 保有者優遇◎",
      "登録ヘルパー同時募集（勤務時間等は相談後決定）",
    ],
  },
  {
    title: "看護職員",
    facility: "延寿園",
    type: "正職員・パート",
    color: "bg-[#1A8066]",
    description: "施設利用者のバイタル測定・服薬管理・処置・医療機関との連携・介護スタッフへの指導等",
    hours: ["① 8:30 〜 17:30（日勤）", "② 勤務形態はご相談ください"],
    qualifications: ["看護師・准看護師免許保有者", "普通自動車免許（歓迎）", "経験不問・ブランクのある方も歓迎"],
  },
  {
    title: "リハビリスタッフ（PT・OT）",
    facility: "延寿園",
    type: "正職員・非常勤",
    color: "bg-[#2A6B47]",
    description: "施設利用者の機能訓練・リハビリテーション計画の立案・実施・評価、日常動作訓練支援",
    hours: ["① 8:30 〜 17:30（平日）", "② 非常勤の場合はご相談ください"],
    qualifications: ["理学療法士または作業療法士の資格保有者", "普通自動車免許（歓迎）", "経験・ブランク不問"],
  },
  {
    title: "送迎ドライバー",
    facility: "デイサービス等",
    type: "非常勤",
    color: "bg-[#3A8060]",
    description: "デイサービス利用者の自宅〜施設間の送迎運転業務。車椅子利用者の乗降補助含む",
    hours: ["送迎時間帯 7:30〜9:30 / 15:30〜17:30（目安）", "勤務日数・時間はご相談ください"],
    qualifications: ["普通自動車免許（AT限定可）", "福祉車両の運転経験（歓迎）", "年齢・経験不問"],
  },
  {
    title: "ケアマネジャー",
    facility: "在宅介護支援センター",
    type: "正職員",
    color: "bg-[#2D7A5A]",
    description: "要介護者のケアプラン作成・サービス調整・モニタリング・医療機関・行政との連携等",
    hours: ["① 8:30 〜 17:30（月〜土）", "② 土曜は隔週など応相談"],
    qualifications: ["介護支援専門員（ケアマネジャー）資格保有者", "普通自動車免許", "実務経験者優遇・ブランク可"],
  },
  {
    title: "調理員",
    facility: "延寿園等",
    type: "正職員・パート",
    color: "bg-[#1E6B5A]",
    description: "施設利用者向けの食事調理・盛付・提供・厨房清掃・食材管理（きざみ食・とろみ食等の対応含む）",
    hours: ["① 6:30 〜 15:30", "② 10:00 〜 19:00（シフト制）"],
    qualifications: ["調理師免許（優遇）または食品衛生責任者", "調理経験者歓迎（経験不問も可）", "普通自動車免許（歓迎）"],
  },
  {
    title: "事務スタッフ",
    facility: "法人本部",
    type: "正職員・非常勤",
    color: "bg-[#1A8066]",
    description: "施設の事務全般（介護保険請求・利用者対応・書類管理・電話対応・会計補助等）",
    hours: ["① 8:30 〜 17:30（平日）", "② 非常勤の場合は週3日〜応相談"],
    qualifications: ["PC基本操作（Word・Excel）", "介護保険事務経験者優遇", "経験不問・未経験から歓迎"],
  },
];

function DetailModal({ pos, onClose }: { pos: Position; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${pos.title}の募集詳細`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Panel */}
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-3xl max-h-[85vh] flex flex-col animate-[modalIn_0.25s_ease-out]">
      {/* Header */}
      <div className={`${pos.color} text-white px-6 py-5 flex items-start justify-between gap-4`}>
        <div>
          <p className="text-white/60 text-xs mb-1">{pos.facility}</p>
          <h3 className="font-bold text-xl">{pos.title}</h3>
          <span className="inline-block mt-2 text-xs bg-white/20 border border-white/30 px-3 py-0.5 rounded-full">
            {pos.type}
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-white/70 hover:text-white transition-colors p-1 mt-0.5 shrink-0"
          aria-label="閉じる"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Body */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto">
        {/* Left */}
        <div className="space-y-5">
          <div>
            <p className="text-[11px] font-bold text-ink-muted uppercase tracking-wider mb-2">仕事内容</p>
            <p className="text-sm text-ink-muted leading-loose">{pos.description}</p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-ink-muted uppercase tracking-wider mb-2">勤務時間</p>
            <ul className="space-y-1.5">
              {pos.hours.map((h) => (
                <li key={h} className="text-sm text-ink-muted">{h}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-bold text-ink-muted uppercase tracking-wider mb-2">必要資格・条件</p>
            <ul className="space-y-1.5">
              {pos.qualifications.map((q) => (
                <li key={q} className="flex items-start gap-2 text-sm text-ink-muted">
                  <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Benefits */}
        <div>
          <p className="text-[11px] font-bold text-ink-muted uppercase tracking-wider mb-2">待遇・福利厚生</p>
          <ul className="space-y-1.5 mb-4">
            {commonBenefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-ink-muted">
                <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
          <div className="bg-bg rounded-xl border border-border p-4 mb-4">
            <p className="text-xs text-ink-muted leading-relaxed">
              ※ 給与の詳細については、お問い合わせまたは面接時にご案内いたします。
            </p>
          </div>
          <Link
            href="/contact"
            className={`flex items-center justify-center gap-2 text-sm font-bold text-white ${pos.color} hover:opacity-90 transition-opacity px-5 py-3 rounded-full w-full`}
          >
            応募・お問い合わせ →
          </Link>
          <a
            href="tel:0175-22-1331"
            className="flex items-center justify-center gap-2 text-sm font-bold text-primary bg-white border border-border hover:border-primary/40 hover:bg-primary-light transition-all px-5 py-3 rounded-full w-full mt-3"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            ハローワーク むつ 0175-22-1331
          </a>
          <p className="text-[11px] text-ink-muted/60 mt-2 text-center">
            ※ ハローワーク経由でもご応募いただけます
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default function PositionsGrid() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <section className="bg-bg py-14 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Open Positions</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink">全募集職種一覧</h2>
          <p className="text-ink-muted text-sm mt-3">
            10職種で仲間を募集しています。気になる職種をタップすると詳細が表示されます。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {allPositions.map((pos, idx) => (
            <button
              key={pos.title}
              onClick={() => setSelectedIdx(idx)}
              className="flex items-center gap-4 bg-white rounded-xl border border-border px-5 py-4 text-left w-full transition-all cursor-pointer hover:border-primary/30 hover:shadow-sm"
            >
              <div className={`w-1.5 h-10 rounded-full shrink-0 ${pos.color}`} />
              <div className="min-w-0 flex-1">
                <p className="font-bold text-ink text-sm leading-tight">{pos.title}</p>
                <p className="text-xs text-ink-muted mt-0.5">{pos.facility}</p>
              </div>
              <span className="shrink-0 text-xs bg-primary-light text-primary font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
                {pos.type}
              </span>
              <svg
                className="w-4 h-4 shrink-0 text-ink-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>

        {selectedIdx !== null && (
          <DetailModal pos={allPositions[selectedIdx]} onClose={() => setSelectedIdx(null)} />
        )}

        <p className="text-center text-xs text-ink-muted/70 mt-5">
          ※ 詳細な条件・募集状況は別途お問い合わせください
        </p>
      </div>
    </section>
  );
}
