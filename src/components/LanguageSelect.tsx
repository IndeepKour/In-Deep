"use client";

import { languages } from "@/lib/languages";

type LanguageSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function LanguageSelect({
  value,
  onChange,
}: LanguageSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-full border border-[#542830] bg-[#1E1417] px-4 py-2 text-sm text-[#FAFAFA] outline-none transition focus:border-[#DC2626]"
    >
      {languages.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </select>
  );
}
