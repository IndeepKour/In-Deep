import BackgroundVideo from "@/components/BackgroundVideo";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Translator from "@/components/Translator";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B] px-4 py-5 text-[#FAFAFA] sm:px-6 md:px-8">
      <BackgroundVideo />

      {/* HEADER */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <Header />
      </div>

      {/* Space between header and content */}
      <div className="relative z-10 mx-auto h-6 w-full max-w-6xl md:h-8" />

      {/* CONTENT AREA */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="rounded-[2rem] border border-white/10 bg-black/25 p-4 shadow-2xl backdrop-blur-sm md:p-6">
          <Hero />
          <Translator />
        </div>
      </div>
    </main>
  );
}
