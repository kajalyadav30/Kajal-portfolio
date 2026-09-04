import React from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SkillNetwork from "./pages/Skills";
import Certificates from "./pages/Certificates";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="app">
      
      {/* NAVBAR */}
      <Navbar />

      <main>

        {/* ================= HOME ================= */}
        <section id="home">
          <Home />
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects">
          <Projects />
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills">
          <SkillNetwork />
        </section>

        {/* ================= CERTIFICATES ================= */}
        <section id="certificates">
          <Certificates />
        </section>

        {/* ================= RESUME ================= */}
        <section id="resume">
          <Resume />
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about">
          <About />
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact">
          <Contact />
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Kajal yadav — Built with React
      </footer>

    </div>
  );
}
