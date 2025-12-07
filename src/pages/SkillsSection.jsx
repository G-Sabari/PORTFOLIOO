import RotatingGlobe from "../componets/RotatingGlobe";
import { motion } from "framer-motion";
import { skills } from "../data/skillsData"; // ✅ CORRECT IMPORT

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">

      {/* HEADING */}
      <motion.h3
        className="text-4xl md:text-5xl font-extrabold mb-3 
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
        bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h3>

      {/* SUBTEXT */}
      <motion.p
      className="text-lg md:text-xl mb-10 max-w-2xl font-semibold text-gray-800 dark:text-amber-200"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      >
      Core technologies used in real-world full stack development with a focus
      on performance, scalability, and clean architecture.
      </motion.p>


      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT: UNIQUE TECH SKILLS EXPLANATION CARD */}
<motion.div
  initial={{ opacity: 0, x: 60, scale: 0.9 }}
  whileInView={{ opacity: 1, x: 0, scale: 1 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  viewport={{ once: true }}
  className="relative rounded-3xl p-8
  bg-gradient-to-br from-white/80 to-white/50
  backdrop-blur-xl
  shadow-[0_0_80px_rgba(168,85,247,0.35)]
  border border-white/40"
>
  {/* Soft Accent Glow */}
  <div className="absolute inset-0 rounded-3xl 
  bg-gradient-to-tr from-purple-500/10 via-cyan-400/10 to-pink-500/10" />

  <div className="relative z-10 space-y-6">

        <h4 className="text-2xl font-bold 
        bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
        bg-clip-text text-transparent">
          What I Build & How I Think
        </h4>

        <p className="text-gray-700 leading-relaxed">
          I specialize in building <span className="font-semibold">clean, responsive, and scalable web applications</span>. 
          My work focuses on real-world usability, structured code, and performance—not just making things work, but making them last.
        </p>

        <div className="space-y-3">
          <p className="text-gray-800">
            <span className="font-bold">Frontend : </span> React, JavaScript, Tailwind CSS, Bootstrap  
          </p>
          <p className="text-gray-800">
            <span className="font-bold">Backend & Logic : </span> Java, Spring Boot (Basics), REST APIs  
          </p>
          <p className="text-gray-800">
            <span className="font-bold">Database : </span> MySQL, MongoDB  
          </p>
          <p className="text-gray-800">
            <span className="font-bold">Tools : </span> GitHub, VS Code, Eclipse
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          I continuously improve my skills by <span className="font-semibold">building real projects, debugging real problems,</span> 
          and learning how production-grade systems actually work.
        </p>

      </div>
    </motion.div>


        {/* RIGHT: 3-COLUMN AUTO SCROLL LOGOS (SOFT FADE + NO CUT) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative h-[460px] overflow-hidden flex justify-center px-4"
        >
      
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 
          bg-gradient-to-b" />

         
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 
          " /> 

          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: "linear",
            }}
            className="grid grid-cols-3 gap-8 place-items-center pt-10 pb-10"
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="w-[130px] h-[130px] sm:w-[140px] sm:h-[140px]
                flex flex-col items-center justify-center
                rounded-3xl
                p-[3px]
                shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6, #a855f7, #ec4899)",
                }}
              >
                {/* INNER CARD */}
                <div
                  className="w-full h-full flex flex-col items-center justify-center
                  rounded-[20px] bg-white"
                >
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain mb-3"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800 text-center">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>



      </div>
    </section>
  );
}
