import { useEffect, useState } from "react";

import Header from "../src/componets/Header";
import Footer from "./componets/Footer";

import Hero from "../src/pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Sidebar from "./componets/Sidebar";
import SkillsSection from "./pages/SkillsSection";

export default function App() {
  const [theme, setTheme] = useState("light");

  // ✅ Load saved theme on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // ✅ Apply theme to <html> using CSS variable system
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Header theme={theme} setTheme={setTheme} />
      <Sidebar />

      <Hero />
      <About />
      <SkillsSection />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}
