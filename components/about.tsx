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
    <>
      <div className="w-full h-auto px-48 py-10 overflow-hidden bg-gradient-to-tr from-neonDarkPurple via-black to-neonPurple">
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
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="h-auto rounded-xl shadow-2xl shadow-neonPurple overflow-hidden"
          >
            <img
              src="/joel.jpeg"
              alt="Foto Profil"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="h-auto rounded lg:col-span-2">
            <h1 className="text-xl font-semibold text-neonSky pb-5">
              About Me 👨🏻‍💻
            </h1>
            <h1 className="text-5xl font-semibold bg-gradient-to-r from-neonPurple to-neonSky bg-clip-text text-transparent pb-1">
              Joel Christian Ngongoloy
            </h1>
            <h1 className="text-xl font-semibold bg-gradient-to-r from-neonPurple to-neonSky bg-clip-text text-transparent pb-5">
              Fullstack Web & Mobile Developer
            </h1>
            <h1 className="text-lg font-normal text-neonSky pb-5">
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
              <span className="font-semibold text-neonPurple">Backend</span>,
              maupun{" "}
              <span className="font-semibold text-neonPurple">Fullstack</span>.{" "}
              Saya senang belajar hal baru dan suka membangun aplikasi yang
              bermanfaat serta mudah digunakan.
            </h1>
            <div className="w-1/3 pb-5">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4">
                <a
                  href="https://www.linkedin.com/in/joel-christian-ngongoloy-21b194274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-16 w-16 rounded bg-transparent border-4 flex items-center justify-center hover:border-cyan-500"
                >
                  <Linkedin className="text-white w-8 h-8 hover:text-cyan-500" />
                </a>

                <a
                  href="https://github.com/JoelChristianNgongoloy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-16 w-16 rounded bg-transparent border-4 flex items-center justify-center hover:border-gray-700"
                >
                  <Github className="text-white w-8 h-8 hover:text-gray-700" />
                </a>

                <a
                  href="https://www.instagram.com/joelchristiaaan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-16 w-16 rounded bg-transparent border-4 flex items-center justify-center hover:border-pink-500"
                >
                  <Instagram className="text-white w-8 h-8 hover:text-pink-500" />
                </a>
              </div>
            </div>
            <div className="mt-5">
              <a
                href="/CV - Joel Christian Ngongoloy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-transparent border-2 rounded-xl border-neonSky text-neonSky font-semibold hover:bg-neonPurple hover:shadow-lg hover:shadow-neonPurple transition"
              >
                Curriculum Vitae
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
