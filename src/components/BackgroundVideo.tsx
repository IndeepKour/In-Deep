"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <>
      <video
        ref={videoRef}
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
    </>
  );
}
