"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Banner() {
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
    <>
      <div className="w-full h-full overflow-hidden bg-gradient-to-br from-neonDarkPurple via-black to-neonPurple">
        <div className="absolute inset-0 overflow-hidden">
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
        <div className="w-full h-full flex justify-center items-center">
          <div>
            <div className="flex justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-40 h-40 rounded-full shadow-lg shadow-neonPurple ring-4 ring-neonSky"
              >
                <img
                  src="/ban.jpeg"
                  alt="Foto Profil"
                  className="w-full h-full rounded-full object-cover"
                />
              </motion.div>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="font-mono text-center text-lg text-neonBlue pt-6 pb-2 hover:text-neonSky transition"
            >
              Hallo Dunia, dengan Joel disini 👋
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-extrabold text-6xl text-center md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-neonBlue via-neonPurple to-neonSky"
            >
              Fullstack Web & Mobile Developer
            </motion.h1>
            <div className="flex justify-center">
              <motion.a
                href="#about"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-10 z-20 px-8 py-3 border-2 border-neonSky rounded-xl text-neonSky font-semibold hover:bg-neonPurple hover:text-white hover:shadow-[0_0_25px_rgba(142,45,226,0.8)] transition-all duration-300"
              >
                Lihat Tentang Saya
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
