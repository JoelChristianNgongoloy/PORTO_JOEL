"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const [stars, setStars] = useState<
    { top: string; left: string; delay: string; duration: string }[]
  >([]);

  useEffect(() => {
    const generatedStars = [...Array(20)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 3}s`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <section className="relative w-full h-auto px-10 lg:px-48 py-24 overflow-hidden bg-gradient-to-tr from-neonDarkPurple via-black to-neonPurple">
      {/* Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-neonSky rounded-full opacity-30 animate-ping"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          ></span>
        ))}
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-5xl lg:text-6xl font-bold text-white mb-6"
      >
        Contact Me 💬
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-gray-300 max-w-2xl mx-auto text-lg mb-16"
      >
        Kamu bisa hubungi aku lewat email, LinkedIn, GitHub, atau langsung chat
        via WhatsApp 📱
      </motion.p>

      {/* Contact Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center relative z-10"
      >
        {/* Email */}
        <a
          href="mailto:joelchristian059@gmail.com"
          className="group border-2 border-neonBlue rounded-xl p-6 hover:bg-neonBlue/10 transition-all duration-300 hover:scale-105 shadow-lg shadow-neonSky/30"
        >
          <FaEnvelope className="text-neonSky text-4xl mb-4 mx-auto group-hover:animate-pulse" />
          <h2 className="text-white font-semibold text-lg mb-2">Email</h2>
          <p className="text-gray-400 text-sm">Joel Christian Ngongoloy</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/JoelChristianNgongoloy"
          target="_blank"
          rel="noopener noreferrer"
          className="group border-2 border-neonBlue rounded-xl p-6 hover:bg-neonBlue/10 transition-all duration-300 hover:scale-105 shadow-lg shadow-neonSky/30"
        >
          <FaGithub className="text-neonSky text-4xl mb-4 mx-auto group-hover:animate-pulse" />
          <h2 className="text-white font-semibold text-lg mb-2">GitHub</h2>
          <p className="text-gray-400 text-sm">Joel Christian Ngongoloy</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/joel-christian-ngongoloy-21b194274"
          target="_blank"
          rel="noopener noreferrer"
          className="group border-2 border-neonBlue rounded-xl p-6 hover:bg-neonBlue/10 transition-all duration-300 hover:scale-105 shadow-lg shadow-neonSky/30"
        >
          <FaLinkedin className="text-neonSky text-4xl mb-4 mx-auto group-hover:animate-pulse" />
          <h2 className="text-white font-semibold text-lg mb-2">LinkedIn</h2>
          <p className="text-gray-400 text-sm">Joel Christian Ngongoloy</p>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/6281347162305"
          target="_blank"
          rel="noopener noreferrer"
          className="group border-2 border-neonBlue rounded-xl p-6 hover:bg-neonBlue/10 transition-all duration-300 hover:scale-105 shadow-lg shadow-neonSky/30"
        >
          <FaWhatsapp className="text-neonSky text-4xl mb-4 mx-auto group-hover:animate-pulse" />
          <h2 className="text-white font-semibold text-lg mb-2">WhatsApp</h2>
          <p className="text-gray-400 text-sm">+62 813-4716-2305</p>
        </a>

        {/* Location */}
        <div className="group border-2 border-neonBlue rounded-xl p-6 bg-transparent hover:bg-neonBlue/10 transition-all duration-300 hover:scale-105 shadow-lg shadow-neonSky/30">
          <FaMapMarkerAlt className="text-neonSky text-4xl mb-4 mx-auto group-hover:animate-pulse" />
          <h2 className="text-white font-semibold text-lg mb-2">Location</h2>
          <p className="text-gray-400 text-sm">Bandung, Indonesia</p>
        </div>
      </motion.div>
    </section>
  );
}
