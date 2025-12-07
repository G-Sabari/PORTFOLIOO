import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">

      {/* SECTION HEADING */}
      <motion.h3
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
        bg-clip-text text-transparent text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h3>

      {/* MAIN ABOUT TEXT */}
      <motion.p
        className="
          text-base 
          sm:text-lg 
          md:text-xl 
          lg:text-lg 
          xl:text-xl 
          leading-relaxed mb-14 
          max-w-4xl 
          text-gray-700 dark:text-gray-300 
          mx-auto md:mx-0
        "
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >

        I’m a <span className="font-semibold text-grey-300 dark:text-amber-50">Full Stack Web Development learner</span> focused on building
        <span className="font-semibold"> clean, responsive, and functional web applications</span>. I work primarily with{" "}
        <span className="font-semibold">React, JavaScript, basic Java & Python, REST APIs</span>, and databases like{" "}
        <span className="font-semibold">MySQL and MongoDB</span>. I care about{" "}
        <span className="font-semibold">code quality, performance, and real-world usability</span>, and I actively
        build projects to move from{" "}
        <span className="font-semibold">academic-level code to production-ready applications</span>.
      </motion.p>

      {/* QUICK STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-20">
        {[
          { label: "Projects Built", value: "3+" },
          { label: "Primary Stack", value: "Java + React" },
          { label: "Internships", value: "2+" },
          { label: "Work Preference", value: "Remote / Hybrid / Onsite" }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative p-[1.5px] rounded-xl 
            bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
          >
            <div className="rounded-[10px] bg-white dark:bg-zinc-900 
            px-4 py-5 text-center shadow-lg">
              <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                {item.value}
              </p>
              <p className="text-xs uppercase tracking-wide text-gray-600 dark:text-gray-400 mt-1">
                {item.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= ACADEMIC SECTION ================= */}
      <div className="mb-20">

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold mb-12 
          bg-gradient-to-r from-purple-600 to-pink-600 
          bg-clip-text text-transparent text-center md:text-left"
        >
          Academic Background
        </motion.h3>

        {/* SCHOOL CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.01 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative p-[2px] rounded-2xl 
          bg-gradient-to-br from-purple-500 to-pink-500 mb-10"
        >
          <div className="rounded-[16px] p-7 bg-white dark:bg-zinc-900 shadow-xl">
            <h4 className="text-xl font-bold mb-4 
            bg-gradient-to-r from-blue-600 to-pink-600 
            bg-clip-text text-transparent">
              School Education
            </h4>

           <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              I completed my higher secondary education at a{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Government Higher Secondary School
              </span>{" "}
              in{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                 Namakkal District
              </span>, with a{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Computer Science background
              </span>. I secured{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                75% in my 12th standard
              </span>, which built my logical thinking, problem-solving ability, and strong
              foundation for a career in software development.
            </p>



          </div>
        </motion.div>

        {/* COLLEGE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.01 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative p-[2px] rounded-2xl 
          bg-gradient-to-br from-purple-500 to-pink-500"
        >
          <div className="rounded-[16px] p-7 bg-white dark:bg-zinc-900 shadow-xl">
            <h4 className="text-xl font-bold mb-4 
            bg-gradient-to-r from-blue-600 to-pink-600 
            bg-clip-text text-transparent">
              College Education
            </h4>

           <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              I am currently pursuing my degree from{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                St. Peter’s College of Engineering and Technology
              </span>{" "}
              in{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Information Technology
              </span>. I have a{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                clean academic record with no backlogs
              </span>{" "}
              and I am an{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Honors student
              </span>. My academic journey has strengthened my foundation in{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                logical reasoning, system-level thinking, and structured problem-solving
              </span>, directly supporting my growth as a software engineer.
            </p>

          </div>
        </motion.div>
      </div>

      {/* ================= INTERNSHIP SECTION ================= */}
      <div>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold mb-10 
          bg-gradient-to-r from-blue-600 to-cyan-600 
          bg-clip-text text-transparent text-center md:text-left"
        >
          Internship Experience
        </motion.h3>

        {/* ELITE TECH */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.01 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative p-[2px] rounded-2xl 
          bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600"
        >
          <div className="rounded-[16px] p-7 bg-white dark:bg-zinc-900 shadow-xl">

            <h4 className="text-xl font-bold mb-4 
            bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 
            bg-clip-text text-transparent">
              Frontend Developer - Elite Tech Company
            </h4>

            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              Completed a{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Frontend Developer role
              </span>{" "}
              at{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Elite Tech Company
              </span>. I worked on real-world user interfaces using{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                React, HTML, CSS, and JavaScript
              </span>. This experience strengthened my skills in{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                responsive design, component-driven architecture, UI debugging, and Git workflows
              </span>.
            </p>

          </div>
        </motion.div>

        {/* BLUESTOCK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.01 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative p-[2px] rounded-2xl mt-10
          bg-gradient-to-br from-emerald-500 via-teal-400 to-emerald-600"
        >
          <div className="rounded-[16px] p-7 bg-white dark:bg-zinc-900 shadow-xl">

            <h4 className="text-xl font-bold mb-4 
            bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 
            bg-clip-text text-transparent">
              Software Engineer - Bluestock Company
            </h4>

            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              Worked as a{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Software Engineer
              </span>{" "}
              at{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Bluestock Company
              </span>, where I built{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                complete MERN stack applications
              </span>{" "}
              and production-ready web solutions using{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                MongoDB, Express.js, React, and Node.js
              </span>. This role strengthened my skills in{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                full stack architecture, API integration, authentication, and real-world debugging
              </span>.
            </p>

          </div>
        </motion.div>
      </div>

    </section>
  );
}
