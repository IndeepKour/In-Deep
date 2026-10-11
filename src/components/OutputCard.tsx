"use client";

import LanguageSelect from "./LanguageSelect";
import TranslatorCard from "./TranslatorCard";

type OutputCardProps = {
  translation: string;
  targetLanguage: string;
  onTargetLanguageChange: (value: string) => void;
};

export default function OutputCard({
  translation,
  targetLanguage,
  onTargetLanguageChange,
}: OutputCardProps) {
  return (
    <TranslatorCard>
      {/* Top controls */}
      <div className="mb-6 flex items-center justify-between gap-3">
        <LanguageSelect
          value={targetLanguage}
          onChange={onTargetLanguageChange}
        />

        <div className="flex gap-2">
          <button className="rounded-full border border-[#542830] bg-[#1E1417] px-4 py-2 text-sm transition hover:border-[#DC2626] hover:text-[#F87171]">
            🔊 Play
          </button>

          <button className="rounded-full border border-[#542830] bg-[#1E1417] px-4 py-2 text-sm transition hover:border-[#DC2626] hover:text-[#F87171]">
            Copy
          </button>
        </div>
      </div>

      {/* Translation output */}
      <div className="h-64 text-xl text-[#A1A1AA]">
        {translation || "Translation will appear here..."}
      </div>
    </TranslatorCard>
  );
}
