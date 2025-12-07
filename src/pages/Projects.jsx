import { projects } from "../data/projects";
import ProjectCard from "../componets/ProjectCard";
import TiltWrapper from "../componets/TiltWrapper";
import { motion } from "framer-motion";

// animation variants
const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      {/* ✅ ANIMATED GRADIENT HEADING */}
      <motion.h3
        className="
          text-4xl font-bold mb-12 
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
          bg-clip-text text-transparent
          bg-[length:200%_200%]
        "
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: 1,
          y: 0,
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          scale: [1, 1.02, 1],
        }}
        transition={{
          opacity: { duration: 0.8, ease: "easeOut" },
          y: { duration: 0.8, ease: "easeOut" },
          backgroundPosition: {
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        Projects
      </motion.h3>

      {/* ✅ PROJECT GRID */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((proj) => (
          <motion.div key={proj.id} variants={cardVariant}>
            <TiltWrapper>

              {/* ✅ GRADIENT BORDER SHELL (UNIQUE DESIGN) */}
              <div
                className="relative p-[2px] rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6, #a855f7, #ec4899)",
                }}
              >
                {/* ✅ CLEAN INNER CARD */}
                <div className="rounded-[14px] bg-white h-full shadow-md">
                  <ProjectCard {...proj} />
                </div>

                {/* ✅ SUBTLE OUTLINE FOR PREMIUM FEEL */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 pointer-events-none" />
              </div>

            </TiltWrapper>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
