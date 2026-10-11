"use client";

import LanguageSelect from "./LanguageSelect";
import TranslatorCard from "./TranslatorCard";

type InputCardProps = {
  text: string;
  onTextChange: (value: string) => void;
  sourceLanguage: string;
  onSourceLanguageChange: (value: string) => void;
};

export default function InputCard({
  text,
  onTextChange,
  sourceLanguage,
  onSourceLanguageChange,
}: InputCardProps) {
  return (
    <TranslatorCard>
      {/* Top controls */}
      <div className="mb-6 flex items-center justify-between gap-3">
        <LanguageSelect
          value={sourceLanguage}
          onChange={onSourceLanguageChange}
        />

        <button className="rounded-full border border-[#542830] bg-[#1E1417] px-4 py-2 text-sm transition hover:border-[#DC2626] hover:text-[#F87171]">
          🎙 Speak
        </button>
      </div>

      {/* Text input */}
      <textarea
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Type or speak something..."
        className="h-64 w-full resize-none bg-transparent text-xl text-[#FAFAFA] outline-none placeholder:text-[#A1A1AA]"
      />

      {/* Character count */}
      <div className="mt-4 flex justify-end">
        <span className="text-xs text-[#71717A]">
          {text.length} characters
        </span>
      </div>
    </TranslatorCard>
  );
}
