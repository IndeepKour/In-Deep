"use client";

import { useEffect, useRef, useState } from "react";

const languages = [
  "English",
  "Hindi",
  "Punjabi",
  "French",
  "Spanish",
];

export default function Home() {
  const [sourceLanguage, setSourceLanguage] = useState("English");
  const [targetLanguage, setTargetLanguage] = useState("Hindi");
  const [text, setText] = useState("");

  const videoRef = useRef<HTMLVideoElement>(null);

  const [inputMouse, setInputMouse] = useState({
    x: 0,
    y: 0,
  });

  const [outputMouse, setOutputMouse] = useState({
    x: 0,
    y: 0,
  });

  // Slow down background video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B] px-4 py-5 text-[#FAFAFA] sm:px-6 md:px-8">

      {/* ===================================================== */}
      {/* BACKGROUND VIDEO */}
      {/* ===================================================== */}

      <video
        
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none fixed inset-0 h-full w-full object-cover object-center"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* General dark overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[#09090B]/30" />

      {/* Dark edges / vignette */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 20%, rgba(9,9,11,0.25) 50%, rgba(9,9,11,0.92) 100%)",
        }}
      />

      {/* Top and bottom darkness */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-[#09090B]/60 via-transparent to-[#09090B]/75" />

      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl">

        <header className="flex min-h-20 w-full items-center justify-between rounded-3xl border border-[#7F1D2D]/70 bg-gradient-to-r from-[#3B0A12]/95 via-[#5C101D]/95 to-[#3B0A12]/95 px-5 py-4 shadow-[0_12px_40px_rgba(127,29,45,0.25)] backdrop-blur-xl sm:px-6 md:px-10">

          {/* Logo */}
          <div className="flex items-center gap-3 sm:gap-4">

            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#F87171]/30 bg-[#991B1B] text-lg font-bold text-white shadow-[0_0_25px_rgba(220,38,38,0.35)] sm:h-11 sm:w-11">
              I
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight text-white sm:text-xl md:text-2xl">
                In Deep
                <span className="text-[#F87171]">.</span>
              </h1>

              <p className="hidden text-[10px] uppercase tracking-[0.18em] text-[#FCA5A5] sm:block">
                Speak. Write. Translate.
              </p>
            </div>

          </div>

          {/* Navigation */}
          <nav className="hidden items-center gap-2 md:flex">

            <button className="rounded-full bg-[#991B1B] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(220,38,38,0.25)] transition duration-300 hover:bg-[#7F1D2D]/50">
              Translate
            </button>

            <button className="rounded-full px-6 py-2.5 text-sm font-medium text-[#FCA5A5] transition duration-300 hover:bg-[#7F1D2D]/50 hover:text-white">
              History
            </button>

          </nav>

          {/* Login */}
          <button className="rounded-full border border-[#F87171]/40 bg-[#7F1D2D]/50 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-[#F87171] hover:bg-[#DC2626] hover:shadow-[0_0_25px_rgba(220,38,38,0.3)] sm:px-6 sm:py-2.5">
            Login
          </button>

        </header>

      </div>

      {/* Space between header and content */}
      <div className="relative z-10 mx-auto h-6 w-full max-w-6xl md:h-8" />

      {/* ===================================================== */}
      {/* CONTENT AREA */}
      {/* ===================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-6xl">

        <div className="rounded-[2rem] border border-white/10 bg-black/25 p-4 shadow-2xl backdrop-blur-sm md:p-6">

          {/* ================================================= */}
          {/* HERO */}
          {/* ================================================= */}

          <section className="px-2 pb-10 pt-16 md:px-2 md:pb-12 md:pt-20">

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#F87171]">
              Your language companion
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Break the
              <span className="text-[#DC2626]">
                {" "}language barrier.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#E4E4E7]">
              Translate what you write or speak and understand the world
              without language getting in the way.
            </p>

          </section>

          {/* ================================================= */}
          {/* TRANSLATOR */}
          {/* ================================================= */}

          <section className="grid gap-5 md:grid-cols-2">

            {/* ================================================= */}
            {/* INPUT CARD */}
            {/* ================================================= */}

            <div
              className="group relative overflow-hidden rounded-3xl border border-[#542830] bg-[#151012]/80 p-6 backdrop-blur-md transition duration-300 hover:border-[#7F1D2D]"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();

                setInputMouse({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }}
            >

              {/* Magic cursor glow */}
              <div
                className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  left: inputMouse.x,
                  top: inputMouse.y,
                  width: "140px",
                  height: "140px",
                  background: "rgba(220, 38, 38, 0.22)",
                }}
              />

              {/* Card content */}
              <div className="relative z-10">

                {/* Top controls */}
                <div className="mb-6 flex items-center justify-between gap-3">

                  <select
                    value={sourceLanguage}
                    onChange={(e) =>
                      setSourceLanguage(e.target.value)
                    }
                    className="rounded-full border border-[#542830] bg-[#1E1417] px-4 py-2 text-sm text-[#FAFAFA] outline-none transition focus:border-[#DC2626]"
                  >
                    {languages.map((language) => (
                      <option key={language} value={language}>
                        {language}
                      </option>
                    ))}
                  </select>

                  <button className="rounded-full border border-[#542830] bg-[#1E1417] px-4 py-2 text-sm transition hover:border-[#DC2626] hover:text-[#F87171]">
                    🎙 Speak
                  </button>

                </div>

                {/* Text input */}
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Type or speak something..."
                  className="h-64 w-full resize-none bg-transparent text-xl text-[#FAFAFA] outline-none placeholder:text-[#A1A1AA]"
                />

                {/* Character count */}
                <div className="mt-4 flex justify-end">

                  <span className="text-xs text-[#71717A]">
                    {text.length} characters
                  </span>

                </div>

              </div>
            </div>

            {/* ================================================= */}
            {/* OUTPUT CARD */}
            {/* ================================================= */}

            <div
              className="group relative overflow-hidden rounded-3xl border border-[#542830] bg-[#151012]/80 p-6 backdrop-blur-md transition duration-300 hover:border-[#7F1D2D]"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();

                setOutputMouse({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }}
            >

              {/* Magic cursor glow */}
              <div
                className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  left: outputMouse.x,
                  top: outputMouse.y,
                  width: "140px",
                  height: "140px",
                  background: "rgba(220, 38, 38, 0.22)",
                }}
              />

              {/* Card content */}
              <div className="relative z-10">

                {/* Top controls */}
                <div className="mb-6 flex items-center justify-between gap-3">

                  <select
                    value={targetLanguage}
                    onChange={(e) =>
                      setTargetLanguage(e.target.value)
                    }
                    className="rounded-full border border-[#542830] bg-[#1E1417] px-4 py-2 text-sm text-[#FAFAFA] outline-none transition focus:border-[#DC2626]"
                  >
                    {languages.map((language) => (
                      <option key={language} value={language}>
                        {language}
                      </option>
                    ))}
                  </select>

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
                  Translation will appear here...
                </div>

              </div>
            </div>

          </section>

          {/* ================================================= */}
          {/* TRANSLATE BUTTON */}
          {/* ================================================= */}

          <div className="flex justify-center py-10">

            <button className="rounded-full bg-[#DC2626] px-12 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(220,38,38,0.18)] transition duration-300 hover:bg-[#B91C1C] hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]">
              Translate →
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}