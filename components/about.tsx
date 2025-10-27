"use client";
import { useState, useEffect } from "react";
import { Linkedin, Github, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
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
    <div className="relative w-full h-auto px-6 sm:px-12 md:px-20 lg:px-48 py-12 sm:py-16 overflow-hidden bg-gradient-to-tr from-neonDarkPurple via-black to-neonPurple">
      {/* 🌟 Bintang latar */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star, i) => (
          <span
            key={i}
            className="absolute w-1.5 h-1.5 bg-neonSky rounded-full opacity-40 animate-ping"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          ></span>
        ))}
      </div>

      {/* 📦 Grid utama */}
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 items-center z-10">
        {/* Foto profil */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center lg:justify-start"
        >
          <img
            src="/joel.jpeg"
            alt="Foto Profil"
            className="w-40 h-40 sm:w-56 sm:h-56 lg:w-full lg:h-auto rounded-xl object-cover shadow-2xl shadow-neonPurple"
          />
        </motion.div>

        {/* Teks dan konten */}
        <div className="lg:col-span-2 text-center lg:text-left">
          <h1 className="text-base sm:text-lg font-semibold text-neonSky pb-3">
            About Me 👨🏻‍💻
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-neonPurple to-neonSky bg-clip-text text-transparent pb-1">
            Joel Christian Ngongoloy
          </h2>

          <h3 className="text-base sm:text-lg md:text-xl font-semibold bg-gradient-to-r from-neonPurple to-neonSky bg-clip-text text-transparent pb-5">
            Fullstack Web & Mobile Developer
          </h3>

          <p className="text-sm sm:text-base md:text-lg font-normal text-neonSky pb-6 leading-relaxed">
            Halo, saya lulusan S1 Informatika Universitas Atma Jaya Yogyakarta
            tahun 2025. Saya punya minat besar di bidang{" "}
            <span className="font-semibold text-neonPurple">
              pengembangan website
            </span>{" "}
            dan{" "}
            <span className="font-semibold text-neonPurple">
              aplikasi mobile
            </span>
            , baik di sisi{" "}
            <span className="font-semibold text-neonPurple">Frontend</span>,{" "}
            <span className="font-semibold text-neonPurple">Backend</span>, dan{" "}
            <span className="font-semibold text-neonPurple">Fullstack</span>.
          </p>

          {/* 🌐 Ikon sosial */}
          <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 pb-6 flex-wrap">
            <a
              href="https://www.linkedin.com/in/joel-christian-ngongoloy-21b194274"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded border-2 flex items-center justify-center hover:border-cyan-500 transition"
            >
              <Linkedin className="text-white w-5 h-5 sm:w-6 sm:h-6 hover:text-cyan-500" />
            </a>

            <a
              href="https://github.com/JoelChristianNgongoloy"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded border-2 flex items-center justify-center hover:border-gray-700 transition"
            >
              <Github className="text-white w-5 h-5 sm:w-6 sm:h-6 hover:text-gray-700" />
            </a>

            <a
              href="https://www.instagram.com/joelchristiaaan/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded border-2 flex items-center justify-center hover:border-pink-500 transition"
            >
              <Instagram className="text-white w-5 h-5 sm:w-6 sm:h-6 hover:text-pink-500" />
            </a>
          </div>

          {/* 📄 Tombol CV */}
          <div className="flex justify-center lg:justify-start">
            <a
              href="/CV - Joel Christian Ngongoloy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 sm:px-8 py-2 sm:py-3 bg-transparent border-2 rounded-xl border-neonSky text-neonSky font-semibold hover:bg-neonPurple hover:shadow-lg hover:shadow-neonPurple transition"
            >
              Curriculum Vitae
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
