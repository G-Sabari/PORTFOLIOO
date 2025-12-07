import { motion } from "framer-motion";
import { Home, User, FolderKanban, Mail, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState("hero");

  const navItems = [
    { id: "hero", icon: <Home size={20} />, label: "Home", link: "#hero" },
    { id: "about", icon: <User size={20} />, label: "About", link: "#about" },
    { id: "skills", icon: <TrendingUp size={20} />, label: "Skills", link: "#skills" },
    { id: "projects", icon: <FolderKanban size={20} />, label: "Projects", link: "#projects" },
    { id: "contact", icon: <Mail size={20} />, label: "Contact", link: "#contact" },
  ];

  // ✅ Active section tracking (scroll spy)
  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.querySelector(item.link);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      className="
        fixed z-50 
        flex items-center 
        backdrop-blur-xl

        bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700

        /* Desktop Sidebar */
        md:flex-col md:w-20 md:right-6 md:top-1/2 md:-translate-y-1/2 
        md:py-6 md:gap-8 md:rounded-full md:shadow-lg

        /* Mobile Bottom Bar */
        max-md:bottom-4 max-md:left-1/2 max-md:-translate-x-1/2
        max-md:px-5 max-md:py-3
        max-md:flex-row max-md:gap-4 max-md:rounded-full max-md:shadow-lg
      "
    >
      {navItems.map((item) => {
        const isActive = active === item.id;

        return (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <motion.a
              href={item.link}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.08 }}
              className={`
                w-12 h-12 rounded-full 
                flex items-center justify-center 
                transition-all duration-200
                shadow-md

                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-blue-500/40"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }
              `}
            >
              {item.icon}
            </motion.a>

            {/* ✅ TOOLTIP (DESKTOP + MOBILE) */}
            {hovered === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="
                  absolute whitespace-nowrap 
                  text-xs font-medium 
                  bg-gray-900 text-white px-3 py-1.5 
                  rounded-md shadow-lg

                  /* Desktop tooltip */
                  md:right-16 md:top-1/2 md:-translate-y-1/2

                  /* Mobile tooltip */
                  max-md:left-1/2 max-md:-translate-x-1/2 max-md:bottom-16
                "
              >
                {item.label}
              </motion.div>
            )}
          </div>
        );
      })}
    </aside>
  );
}
