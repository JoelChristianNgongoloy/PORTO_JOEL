"use client";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Experience() {
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

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const experience = [
    {
      tmpt: "PT Piranti Nuswantara Indonesia (PinusTech)",
      website: "https://pinustech.id/",
      posisi: "Fullstack Developer (Intern)",
      waktu: "Agustus 2024 - Januari 2025",
      desc: "Bertanggung jawab dalam pengembangan website manajemen coffee shop menggunakan Next.js, serta membangun aplikasi kasir berbasis React Native. Pada sisi backend, saya mengembangkan REST API menggunakan NestJS dan Prisma ORM dengan PostgreSQL sebagai database utama.",
      logo: "/pinus.webp",
    },
  ];

  return (
    <>
      <div className="relative w-full h-auto px-10 lg:px-48 py-24 overflow-hidden bg-gradient-to-br from-neonDarkPurple via-black to-neonPurple">
        
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
          className="text-center text-5xl lg:text-6xl font-bold text-white mb-10"
        >
          Experience ⭐️
        </motion.h1>

        {/* Experience Card */}
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="bg-opacity-20 bg-gray-800 border border-neonBlue rounded-2xl shadow-lg mb-5 shadow-neonSky/30 backdrop-blur-lg hover:shadow-neonBlue/40 hover:border-neonSky p-10"
          >
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 items-center z-10">

              {/* Logo */}
              <div className="flex justify-center lg:justify-start">
                <div className="bg-white rounded-xl shadow-lg p-4">
                  <Image
                    src={exp.logo}
                    alt={exp.tmpt}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="lg:col-span-2 text-white space-y-3">
                <h2 className="text-3xl font-bold">{exp.posisi}</h2>
                <p className="text-neonSky text-lg font-medium">{exp.tmpt}</p>
                <p className="text-gray-300 text-sm">{exp.waktu}</p>

                <p className="mt-4 text-gray-200 leading-relaxed">
                  {exp.desc}
                </p>

                <a
                  href={exp.website}
                  target="_blank"
                  className="inline-block mt-4 text-neonSky underline hover:text-neonBlue"
                >
                  Kunjungi Website
                </a>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
