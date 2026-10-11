export default function Header() {
  return (
    <header className="flex min-h-20 w-full items-center justify-between rounded-3xl border border-[#3D0711]/80 bg-gradient-to-r from-[#180307]/98 via-[#2B050D]/98 to-[#180307]/98 px-5 py-4 shadow-[0_12px_40px_rgba(61,7,17,0.4)] backdrop-blur-xl sm:px-6 md:px-10">
      {/* Logo */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#F87171]/30 bg-[#5C101D] text-lg font-bold text-white shadow-[0_0_25px_rgba(220,38,38,0.35)] sm:h-11 sm:w-11">
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
        <button className="rounded-full bg-[#5C101D] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(220,38,38,0.25)] transition duration-300 hover:bg-[#7F1D2D]/50">
          Translate
        </button>

        <button className="rounded-full px-6 py-2.5 text-sm font-medium text-[#FCA5A5] transition duration-300 hover:bg-[#7F1D2D]/50 hover:text-white">
          History
        </button>
      </nav>

      {/* Login */}
      <button className="rounded-full border border-[#F87171]/40 bg-[#7F1D2D]/50 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-[#F87171] hover:bg-[#5C101D] hover:shadow-[0_0_25px_rgba(220,38,38,0.3)] sm:px-6 sm:py-2.5">
        Login
      </button>
    </header>
  );
}
