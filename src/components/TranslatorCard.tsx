"use client";

import { useState, type ReactNode } from "react";

type TranslatorCardProps = {
  children: ReactNode;
};

export default function TranslatorCard({ children }: TranslatorCardProps) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-[#542830] bg-[#151012]/80 p-6 backdrop-blur-md transition duration-300 hover:border-[#7F1D2D]"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setMouse({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
    >
      {/* Magic cursor glow */}
      <div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
        style={{
          left: mouse.x,
          top: mouse.y,
          width: "140px",
          height: "140px",
          background: "rgba(220, 38, 38, 0.22)",
        }}
      />

      {/* Card content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
