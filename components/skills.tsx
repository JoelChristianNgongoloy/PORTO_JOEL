"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaReact,
  FaLaravel,
  FaNodeJs,
  FaJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNestjs,
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiPostgresql,
  SiMysql,
  SiPrisma,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "NestJS", icon: <SiNestjs className="text-red-600" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
    { name: "Flutter", icon: <SiFlutter className="text-sky-500" /> },
    { name: "Dart", icon: <SiDart className="text-blue-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-orange-400" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Prisma ORM", icon: <SiPrisma className="text-cyan-300" /> },
  ];

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
    <div className="relative w-full h-auto px-10 lg:px-48 py-20 overflow-hidden bg-gradient-to-br from-neonDarkPurple via-black to-neonPurple">
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
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-white font-bold text-5xl lg:text-6xl pb-10 text-center"
      >
        My Skills 💻
      </motion.h1>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl border-2 border-neonBlue bg-transparent flex flex-col items-center justify-center p-6 hover:bg-neonBlue/10 transition-all duration-300 shadow-lg shadow-neonBlue/20"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <h1 className="font-semibold text-lg text-neonBlue text-center">
              {skill.name}
            </h1>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
