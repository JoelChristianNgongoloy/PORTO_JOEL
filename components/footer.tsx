"use client";
import { Github, Linkedin, Phone } from "lucide-react";
export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-tr from-neonDarkPurple via-black to-neonPurple text-gray-300 py-8 border-t border-gray-700">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo / Nama */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-neonSky text-black font-bold rounded-full shadow-lg">
              JC
            </div>
            <span className="text-lg font-semibold tracking-wide">
              Joel Christian Ngongoloy
            </span>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-6 text-gray-400">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neonSky transition-colors duration-300"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neonSky transition-colors duration-300"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neonSky transition-colors duration-300"
            >
              <Phone size={22} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center md:text-right">
            © {new Date().getFullYear()} Joel Christian. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
