import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

// Icons
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ✅ FINAL WORKING EMAIL FUNCTION (NO NESTING, NO ERRORS)
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_gf310hy",     // ✅ Your Service ID
        "template_1z6sgm5",    // ✅ Your Template ID
        form.current,         // ✅ Your Form Ref
        "tlhsyFiEfm_Nkt7CN"    // ✅ Your Public Key
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      {/* ✅ HEADING */}
      <motion.h3
        className="text-4xl md:text-5xl font-extrabold mb-3 
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
        bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Let’s Work Together
      </motion.h3>

      {/* ✅ SUBTEXT */}
      <motion.p
        className="mb-14 max-w-2xl text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Have a project in mind, a collaboration idea, or a job opportunity?
        Send a message — I respond fast and professionally.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* ================= LEFT PANEL ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8 sm:space-y-10"
        >
          {/* ✅ STATUS BADGE */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full 
          bg-green-100 dark:bg-green-900/30 
          text-green-700 dark:text-green-400 
          font-semibold text-xs sm:text-sm w-fit">
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
            Available for Projects & Hiring
          </div>

          {/* ✅ EMAIL */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg 
            bg-blue-100 dark:bg-blue-900/30 
            text-blue-600 dark:text-blue-400 text-xl">
              <MdEmail />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                Email
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm break-all">
                rohitsabari045@example.com
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                Response within 24 hours
              </p>
            </div>
          </div>

          {/* ✅ OPEN FOR */}
          <div>
            <p
              className="
                text-xs sm:text-sm uppercase tracking-wide font-bold mb-3
                text-gray-800 dark:text-gray-300
              "
            >
              Open For
            </p>

            <ul
              className="
                text-sm space-y-2 list-disc list-inside
                text-gray-600 dark:text-gray-400
              "
            >
              <li className="leading-relaxed">Full Stack Developer Roles</li>
              <li className="leading-relaxed">Freelance Web Projects</li>
              <li className="leading-relaxed">Startup & Product Collaboration</li>
            </ul>
          </div>


          {/* ✅ LOCATION */}
          <div className="rounded-xl p-4 
          bg-gray-100 dark:bg-zinc-800">
            <p className="font-semibold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">
              Location
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Chennai / India • Remote Friendly
            </p>
          </div>

          {/* ✅ SOCIAL LINKS */}
          <div>
            <p
              className="
                text-xs sm:text-sm uppercase tracking-wide font-bold mb-4
                text-gray-800 dark:text-gray-300
              "
            >
              Connect With Me
            </p>

            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">

              {/* X / Twitter */}
              <a
                href="https://x.com/rohitsabari045"
                className="
                  p-3 rounded-full
                  bg-gray-100 dark:bg-zinc-800
                  text-gray-700 dark:text-gray-300
                  hover:bg-black hover:text-white
                  dark:hover:bg-white dark:hover:text-black
                  transition
                "
              >
                <FaXTwitter />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/rohit__sabarii"
                className="
                  p-3 rounded-full
                  bg-gray-100 dark:bg-zinc-800
                  text-gray-700 dark:text-gray-300
                  hover:bg-pink-500 hover:text-white
                  transition
                "
              >
                <FaInstagram />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                className="
                  p-3 rounded-full
                  bg-gray-100 dark:bg-zinc-800
                  text-gray-700 dark:text-gray-300
                  hover:bg-blue-600 hover:text-white
                  transition
                "
              >
                <FaLinkedin />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/G-Sabari"
                className="
                  p-3 rounded-full
                  bg-gray-100 dark:bg-zinc-800
                  text-gray-700 dark:text-gray-300
                  hover:bg-gray-900 hover:text-white
                  dark:hover:bg-white dark:hover:text-black
                  transition
                "
              >
                <FaGithub />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918754864826"
                className="
                  p-3 rounded-full
                  bg-green-500 text-white
                  hover:bg-green-600
                  transition
                "
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

        </motion.div>


        {/* ================= RIGHT FORM ================= */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-zinc-900 shadow-xl rounded-2xl p-8"
        >
          <div className="flex flex-col gap-6">

            {/* NAME */}
            <input
              name="user_name"
              type="text"
              className="
                border rounded-lg p-3
                bg-white dark:bg-zinc-900
                text-gray-900 dark:text-white
                placeholder-gray-500 dark:placeholder-gray-400
                border-gray-300 dark:border-zinc-700
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
              placeholder="Your Name"
              required
            />

            {/* EMAIL */}
            <input
              name="user_email"
              type="email"
              className="
                border rounded-lg p-3
                bg-white dark:bg-zinc-900
                text-gray-900 dark:text-white
                placeholder-gray-500 dark:placeholder-gray-400
                border-gray-300 dark:border-zinc-700
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
              placeholder="Your Email"
              required
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              rows="5"
              className="
                border rounded-lg p-3
                bg-white dark:bg-zinc-900
                text-gray-900 dark:text-white
                placeholder-gray-500 dark:placeholder-gray-400
                border-gray-300 dark:border-zinc-700
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
              placeholder="Tell me anything..."
              required
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold
                hover:bg-blue-700 transition
                disabled:opacity-60
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* SUCCESS MESSAGE */}
            {success && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 font-medium text-center mt-2"
              >
                ✅ Message sent successfully! I’ll get back to you soon.
              </motion.p>
            )}

          </div>
        </motion.form>

      </div>
    </section>
  );
}
