import profileImg from "../assets/Sabari.jpg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const title = "Java Full Stack Developer".split("");

const letterAnimation = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.35,
      ease: "easeOut",
    },
  }),
};

// ✅ Clean count-up hook
function useCountUp(target) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      if (start <= target) setCount(start);
      else clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [target]);

  return count;
}

export default function Hero() {
  const projects = useCountUp(3);

  return (
    <section
      id="hero"
      className="w-full max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 mt-8">
        {/* -------- LEFT CONTENT -------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-[55%] w-full text-center md:text-left flex flex-col justify-center" 
        >
          {/* STATUS BADGE */}
          <span className="inline-flex items-center px-4 py-1 mb-5 mt-5 text-sm font-semibold text-blue-700 bg-blue-50 rounded-full w-fit mx-auto md:mx-0">
            Open for Opportunities
          </span>

          {/* TITLE */}
          <motion.h1
            className="
              text-[28px] 
              sm:text-4xl 
              md:text-5xl 
              lg:text-6xl 
              font-extrabold mb-4 
              flex flex-wrap justify-center md:justify-start
              bg-gradient-to-r from-blue-600 to-purple-600 
              bg-clip-text text-transparent
              leading-tight
            "
            initial="hidden"
            animate="visible"
          >
            {title.map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterAnimation}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>


          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.55 }}
            className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            I specialize in building reliable, scalable web applications using{" "}
            <span className="font-semibold">React, Java, and Spring Boot</span>. My focus is on
            clean architecture, backend performance, secure APIs, and building systems
            that are ready for real users - Not just demos.

          </motion.p>

          {/* TRUST METRICS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center md:justify-start gap-10 mb-7 text-sm font-semibold text-gray-600"
          >
            <div className="text-center md:text-left">
              <p className="text-xl font-bold text-blue-600">{projects}+</p>
              <p>Projects</p>
            </div>

            <div className="text-center md:text-left">
              <p className="text-xl font-bold text-blue-600">Java + React</p>
              <p>Primary Stack</p>
            </div>

            <div className="text-center md:text-left">
              <p className="text-xl font-bold text-blue-600">Remote</p>
              <p>Friendly</p>
            </div>
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-7 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-7 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
            >
              Hire Me
            </a>

            <a
              href="./Resume.pdf"
              download
              className="px-7 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* -------- RIGHT IMAGE -------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="md:w-[45%] w-full flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [6, -6, 6] }}   // ✅ lowered + floating
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex items-center justify-center mt-6 md:mt-10"
          >
            {/* ✅ MULTI-COLOR ANIMATED ROUND BORDER */}
            <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full p-[3px] bg-[conic-gradient(from_0deg,#3b82f6,#a855f7,#ec4899,#f59e0b,#3b82f6)] animate-spin-slow">
              <div className="w-full h-full bg-white rounded-full"></div>
            </div>

            {/* ✅ PROFILE IMAGE (LOWERED SLIGHTLY) */}
            <motion.img
              src={profileImg}
              alt="Profile"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 160 }}
              className="w-52 h-52 md:w-60 md:h-60 rounded-full object-cover shadow-xl z-10 mt-1"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL HINT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="mt-10 text-center text-gray-400 text-sm"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
