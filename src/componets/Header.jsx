import { Sun, Moon } from "lucide-react";

export default function Header({ theme, setTheme }) {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 h-16
        flex items-center justify-between 
        px-4 sm:px-6 md:px-10 
        z-50
        backdrop-blur-xl

        /* ✅ LIGHT MODE GRADIENT */
        bg-gradient-to-r from-gray-50 via-white to-gray-100

        /* ✅ DARK MODE LIGHT-GREY GRADIENT (NOT PURE BLACK) */
        dark:bg-gradient-to-r dark:from-[#0f0f0f] dark:via-[#1a1a1a] dark:to-[#0f0f0f]

        border-b border-black/5 dark:border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        transition-all duration-300
      "
    >

      {/* ✅ BRAND LOGO */}
      <h1 className="text-lg sm:text-xl font-bold select-none flex items-center gap-2">
        <span
          className="
            font-mono font-extrabold tracking-widest
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            bg-clip-text text-transparent
            drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]
            dark:drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]
            relative
          "
        >
          &lt;SABARI/&gt;

          {/* subtle animated underline */}
          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 rounded-full"></span>
        </span>
      </h1>

      {/* ✅ THEME TOGGLE */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label="Toggle Theme"
        className="
          w-10 h-10 sm:w-11 sm:h-11
          flex items-center justify-center
          rounded-full 
          bg-gray-100 dark:bg-gray-800
          border border-black/10 dark:border-white/10
          shadow-md
          hover:scale-110 hover:shadow-lg
          active:scale-95
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
