export default function Footer() {
  return (
    <footer
      className="
        relative mt-20 py-6
        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
        text-white text-center
        dark:from-white dark:via-gray-100 dark:to-white
        dark:text-gray-800
        transition-colors
      "
    >
      {/* Subtle top glow line */}
      <div className="
        absolute top-0 left-0 right-0 h-[1px]
        bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40
      " />

      <p className="text-sm tracking-wide">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white dark:text-gray-900">
          Sabari
        </span>{" "}
        Portfolio · All rights reserved.
      </p>
    </footer>
  );
}
