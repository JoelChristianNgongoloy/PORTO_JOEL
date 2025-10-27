import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/banner";
import About from "@/components/about";
import Footer from "@/components/footer";
import Skills from "@/components/skills";
import Projects from "@/components/project";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="h-screen w-full bg-neonDarkPurple">
        <Banner />

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
