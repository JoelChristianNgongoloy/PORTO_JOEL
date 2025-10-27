"use client";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
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

  const projects = [
    {
      img: "/mobile.png",
      title: "Tria News App",
      desc: "Mobile App untuk baca berita dibuat menggunakan Flutter dan Laravel.",
      github: "https://github.com/JoyB00/TriaNews_Mobile_Application.git",
    },
    {
      img: "/eclat.png",
      title: "Coffee Shop Dashboard",
      desc: "Website Management Coffee Shop dibuat menggunakan Next.js dan NestJS.",
      github:
        "https://github.com/JoelChristianNgongoloy/fe-web-coffee-shop.git",
    },
    {
      img: "/kasir.png",
      title: "Kasir App",
      desc: "App Kasir Coffee Shop dibuat menggunakan React Native dan NestJS.",
      github: "https://github.com/JoelChristianNgongoloy/FEKASIR.git",
    },
    {
      img: "/image.png",
      title: "AI Clothing Classifier",
      desc: "Prediksi jenis Pakaian Tradisional Sulawesi menggunakan CNN Inception V3 dan Streamlit.",
      github: "https://github.com/JoelChristianNgongoloy/CNN_STREAMLIT.git",
    },
    {
      img: "/port.png",
      title: "Portfolio Website",
      desc: "Website personal portofolio dibuat dengan menggunakan Next.js.",
      github: "https://github.com/username/portfolio",
    },
  ];

  // Variants animasi
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="relative w-full min-h-screen px-10 lg:px-48 py-20 overflow-hidden bg-gradient-to-tr from-neonDarkPurple via-black to-neonPurple"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
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
        className="text-5xl lg:text-6xl font-bold text-center text-white mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Projects 🚀
      </motion.h1>

      {/* Project Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 relative z-10"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-opacity-20 bg-gray-800 border border-neonBlue rounded-2xl shadow-lg shadow-neonSky/30 backdrop-blur-lg hover:shadow-neonBlue/40 hover:border-neonSky p-6 flex flex-col justify-between"
          >
            <div>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-52 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold text-neonSky mb-2 text-center">
                {project.title}
              </h2>
              <p className="text-gray-300 text-center text-sm">
                {project.desc}
              </p>
            </div>

            {/* GitHub Icon */}
            <div className="flex justify-center mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white hover:scale-110 transition-transform"
              >
                <FaGithub className="w-6 h-6" />
                <span className="text-sm">View on GitHub</span>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
