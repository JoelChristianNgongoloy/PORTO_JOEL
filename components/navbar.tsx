"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full transition-colors duration-300 z-50 ${
        isScrolled
          ? "bg-transparent bg-opacity-70 backdrop-blur-md shadow-md"
          : "overflow-hidden bg-gradient-to-br from-neonDarkPurple to-black"
      }`}
    >
      <div className="mx-auto max-w-screen-xl sm:px-6">
        <div className="flex h-16 items-center justify-around px-20">
          <a className="block text-neonSky font-bold text-xl transition hover:text-neonBlue">
            JOEL CHRISTIAN 👨🏻‍💻
          </a>

          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-9 text-lg font-bold">
              <li>
                <a
                  className="text-neonSky transition hover:text-neonBlue"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-neonSky transition hover:text-neonBlue"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="text-neonSky transition hover:text-neonBlue"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="text-neonSky transition hover:text-neonBlue"
                  href="#experience"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  className="text-neonSky transition hover:text-neonBlue"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
