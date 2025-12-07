import RotatingGlobe from "../componets/RotatingGlobe";
import { motion } from "framer-motion";
import { skills } from "../data/skillsData";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20"
    >
      {/* ✅ HEADING */}
      <motion.h3
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
        bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h3>

      {/* ✅ SUBTEXT */}
      <motion.p
          className="
            text-sm sm:text-base md:text-lg mb-12 max-w-2xl
            font-medium leading-relaxed
            text-gray-700 dark:text-gray-300
          "
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Core technologies used in real-world full stack development with a focus
          on performance, scalability, and clean architecture.
        </motion.p>


      {/* ✅ GRID */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* ================= LEFT CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="
            relative rounded-3xl p-6 sm:p-8 md:p-10
            bg-white dark:bg-zinc-900
            border border-gray-200 dark:border-zinc-700
            shadow-[0_12px_40px_rgba(0,0,0,0.12)]
            overflow-hidden
            transition-all
          "
        >
          {/* ✅ SOFT PROFESSIONAL ACCENT LINE */}
          <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 dark:bg-blue-500" />

          <div className="space-y-6 relative">
            <h4
              className="text-xl sm:text-2xl font-bold tracking-wide
              text-gray-900 dark:text-white"
            >
              What I Build & How I Think
            </h4>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              I specialize in building{" "}
              <span className="font-semibold">
                clean, responsive, and scalable web applications
              </span>
              . My work focuses on real-world usability, structured code, and
              performance not just making things work, but making them last.
            </p>

            <div className="space-y-3">
              <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  Frontend :
                </span>{" "}
                React, JavaScript, Tailwind CSS, Bootstrap
              </p>

              <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  Backend & Logic :
                </span>{" "}
                Java, Spring Boot (Basics), REST APIs
              </p>

              <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  Database :
                </span>{" "}
                MySQL, MongoDB
              </p>

              <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  Tools :
                </span>{" "}
                GitHub, VS Code, Eclipse
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              I continuously improve my skills by{" "}
              <span className="font-semibold">
                building real projects, debugging real problems,
              </span>{" "}
              and learning how production-grade systems actually work.
            </p>
          </div>
        </motion.div>


        {/* ================= RIGHT AUTO-SCROLL ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            relative h-[380px] sm:h-[440px]
            overflow-hidden flex justify-center
            backdrop-blur-xl
            rounded-3xl
            border border-white/20
          "
        >
          {/* ✅ SOFT FADES (HIDES LOOP JUMP) */}
          {/* <div className="absolute top-0 left-0 right-0 h-24 z-10 
          bg-gradient-to-b from-white dark:from-zinc-950 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 h-24 z-10 
          bg-gradient-to-t from-white dark:from-zinc-950 to-transparent" /> */}

          {/* ✅ SLOWER + SMOOTHER LOOP */}
          <motion.div
            animate={{ y: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: "linear",
            }}
            className="grid grid-cols-3 gap-6 sm:gap-8 place-items-center pt-10"
          >
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ type: "spring", stiffness: 160 }}
                className="
                  w-[110px] h-[110px] sm:w-[140px] sm:h-[140px]
                  p-[3px] rounded-3xl shadow-xl
                  cursor-pointer
                  hover:shadow-[0_0_25px_rgba(168,85,247,0.45)]
                "
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6, #a855f7, #ec4899)",
                }}
              >
                <div
                  className="
                    w-full h-full rounded-[20px]
                    bg-white dark:bg-zinc-900
                    flex flex-col items-center justify-center
                    transition
                  "
                >
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2"
                  />
                  <span className="text-xs sm:text-sm font-semibold 
                  text-gray-800 dark:text-gray-200 text-center">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
