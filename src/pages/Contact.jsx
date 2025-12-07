import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

// Icons
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs.sendForm(
      "service_gf310hy",     // ✅ Your real Service ID
      "template_1z6sgm5",    // ✅ Your real Template ID
      form.current,
      "tlhsyFiEfm_Nkt7CN" // Public key
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
        className="mb-14 max-w-2xl text-muted"
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
          className="space-y-10"
        >

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm w-fit">
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
            Available for Projects & Hiring
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-blue-100 text-blue-600 text-xl">
              <MdEmail />
            </div>
            <div>
              <p className="font-semibold text-[var(--text-color)]">Email</p>
              <p className="text-muted text-sm">rohitsabari045@example.com</p>
              <p className="text-xs text-muted mt-1">Response within 24 hours</p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-[var(--text-color)] mb-2">Open For</p>
            <ul className="text-muted text-sm space-y-1 list-disc list-inside">
              <li>Full Stack Developer Roles</li>
              <li>Freelance Web Projects</li>
              <li>Startup & Product Collaboration</li>
            </ul>
          </div>

          <div className="card rounded-xl p-4">
            <p className="font-semibold text-[var(--text-color)] mb-1">Location</p>
            <p className="text-muted text-sm">Chennai / India • Remote Friendly</p>
          </div>

          {/* ✅ FULL BRAND HOVER COLORS */}
          <div>
              <p className="font-semibold text-[var(--text-color)] mb-3">
                Connect With Me
              </p>

              <div className="flex items-center gap-4 flex-wrap">

                {/* X / Twitter */}
                <a
                  href="https://x.com/rohitsabari045?t=6awJwTqmYmyXgcBr5gYv9g&s=09"
                  className="card p-3 rounded-full transition hover:text-black dark:hover:text-white"
                >
                  <FaXTwitter />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/rohit__sabarii?igsh=MWx6eG9jOGN4am04Yg=="
                  className="card p-3 rounded-full transition hover:text-pink-500"
                >
                  <FaInstagram />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/sabari-profile"
                  className="card p-3 rounded-full transition hover:text-blue-600"
                >
                  <FaLinkedin />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/G-Sabari?tab=repositories"
                  className="card p-3 rounded-full transition hover:text-gray-900 dark:hover:text-white"
                >
                  <FaGithub />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918754864826"
                  className="p-3 rounded-full bg-green-500 text-white transition hover:bg-green-600"
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
          className="card shadow-xl rounded-2xl p-8"
        >
          <div className="flex flex-col gap-6">

            {/* ✅ CLEAN INPUTS (NO DUPLICATE PLACEHOLDERS) */}
            <input
              name="user_name"
              type="text"
              className="floating-input"
              placeholder="Your Name"
              required
            />

            <input
              name="user_email"
              type="email"
              className="floating-input"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              rows="5"
              className="floating-textarea"
              placeholder="Tell me anything..."
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white py-3 rounded-lg text-lg 
              hover:bg-blue-700 transition font-semibold disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

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
