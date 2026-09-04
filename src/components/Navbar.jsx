import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Navbar.css";

const links = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Certificates", id: "certificates" },
  { label: "Resume", id: "resume" },
  { label: "About Me", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px", // ye main fix hai - beech me aate hi active
        threshold: 0,
      }
    );

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          <button className="logo" onClick={() => scrollToSection("home")}>KY</button>
          <div className="nav-name">
            <h1>KAJAL YADAV</h1>
            <div className="nav-tagline">Full Stack Developer</div>
          </div>
        </div>

        <div className="nav-links">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={activeSection === link.id ? "active" : ""}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="mobile-btn">
          <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "✕" : "☰"}</button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="mobile-dropdown"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
          >
            {links.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className={activeSection === link.id ? "active" : ""}>
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}