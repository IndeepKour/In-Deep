"use client";

import { useState } from "react";

import InputCard from "./InputCard";
import OutputCard from "./OutputCard";

export default function Translator() {
  const [sourceLanguage, setSourceLanguage] = useState("English");
  const [targetLanguage, setTargetLanguage] = useState("Hindi");
  const [text, setText] = useState("");

  return (
    <>
      <section className="grid gap-5 md:grid-cols-2">
        <InputCard
          text={text}
          onTextChange={setText}
          sourceLanguage={sourceLanguage}
          onSourceLanguageChange={setSourceLanguage}
        />

        <OutputCard
          translation=""
          targetLanguage={targetLanguage}
          onTargetLanguageChange={setTargetLanguage}
        />
      </section>

      {/* Translate button */}
      <div className="flex justify-center py-10">
        <button className="rounded-full bg-[#5C101D] px-12 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(220,38,38,0.18)] transition duration-300 hover:bg-[#B91C1C] hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]">
          Translate →
        </button>
      </div>
    </>
  );
}
