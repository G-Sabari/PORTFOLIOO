import { Sun, Moon } from "lucide-react";

export default function Header({ theme, setTheme }) {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 h-16 
        flex items-center justify-between px-5 sm:px-6 z-50
        backdrop-blur-xl bg-white/70 dark:bg-gray-950/70
        border-b border-black/5 dark:border-white/10
        shadow-[0_4px_30px_rgba(0,0,0,0.08)]
        transition-all
      "
    >
      {/* ✅ LOGO / BRAND */}
      <h1 className="text-xl font-bold select-none">
        <span
          className="
            font-mono font-extrabold tracking-wider
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            bg-clip-text text-transparent
            drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]
            dark:drop-shadow-[0_1px_6px_rgba(255,255,255,0.12)]
          "
        >
          &lt; SABARI /&gt;
        </span>
      </h1>

      {/* ✅ DARK MODE TOGGLE */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label="Toggle Theme"
        className="
          w-10 h-10 flex items-center justify-center
          rounded-full 
          bg-gray-100 dark:bg-gray-800
          border border-black/5 dark:border-white/10
          shadow-sm
          hover:scale-105 hover:shadow-md
          transition-all duration-200
        "
      >
        {theme === "light" ? (
          <Moon size={18} className="text-gray-800" />
        ) : (
          <Sun size={18} className="text-yellow-400" />
        )}
      </button>
  </header>

  );
}
