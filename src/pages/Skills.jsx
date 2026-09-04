import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const SKILLS = [
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
];

const ROWS = [
  [
    { title: "Programming Languages", items: [ "C", "C++", "Java"] },
    { title: "Web Technologies", items: ["HTML", "CSS", "JavaScript", "React"] },
    { title: "Databases & Tools", items: ["MySQL", "MongoDB", "Git",] },
    { title: "Frameworks & Libraries", items: ["React", "Node.js", "Express"] },
  ],
  [
    {
      title: "Core Concepts",
      items: ["Data Structures & Algorithms", "DBMS", "OOPS", "OS", "CN"],
    },
    {
      title: "Soft Skills",
      items: ["Teamwork", "Problem Solving", "Creativity", "Adaptability", "Communication"],
    },
  ],
];

export default function Skills() {
  const stageRef = useRef();

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const circles = Array.from(stage.querySelectorAll(".skill-circle"));
    const rect = stage.getBoundingClientRect();
    const placed = [];

    const isOverlapping = (x, y, size) =>
      placed.some((p) => {
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + 30;
      });

    circles.forEach((circle) => {
      const size = circle.offsetWidth;
      let x, y, tries = 0;
      do {
        x = Math.random() * (rect.width - size - 10);
        y = Math.random() * (rect.height - size - 10);
        tries++;
      } while (isOverlapping(x, y, size) && tries < 150);

      placed.push({ x, y, size });
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * 80;
      const dy = (Math.random() - 0.5) * 80;
      circle.animate(
        [{ transform: "translate(0, 0)" }, { transform: `translate(${dx}px, ${dy}px)` }],
        {
          duration: 5000 + Math.random() * 2000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }, []);

  return (
    <section style={{ background: "#ffffff", minHeight: "100vh", padding: "20px 0 50px" }} id="skills">
      {/* Header */}
      <motion.div
        style={{ textAlign: "center", margin: "10px auto 20px auto", display: "flex", flexDirection: "column", alignItems: "center" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ fontSize: "1.8rem", color: "#0f172a", fontWeight: 800, margin: 0 }}>My Skills</h2>
        <div style={{ width: "60px", height: "3px", background: "#16a34a", margin: "8px auto 10px auto", borderRadius: "10px" }}></div>
        <p style={{ color: "#475569", fontSize: "15px", maxWidth: "600px", margin: 0, textAlign: "center" }}>
          Technical expertise blended with creativity — explore my core competencies below.
        </p>
      </motion.div>

      {/* Floating Orbs */}
      <motion.div
        className="skills-stage"
        ref={stageRef}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{
          width: "94%",
          maxWidth: "1200px",
          height: "400px",
          margin: "20px auto 40px",
          borderRadius: "16px",
          background: 'rgba(182, 216, 242, 0.81)',
          border: "1px solid #e5e7eb",
          boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            className="skill-circle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            whileHover={{
              scale: 1.25,
              boxShadow: "0 0 25px 6px rgba(22,163,74,0.35)",
              background: "#f0fdf4",
              borderColor: "#16a34a"
            }}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "#ffffff",
              border: "1px solid #dcfce7",
              boxShadow: "0 4px 12px rgba(22,163,74,0.12)",
              cursor: "pointer",
            }}
          >
            <motion.img
              src={s.logo}
              alt={s.name}
              style={{
                width: "36px",
                height: "36px",
                objectFit: "contain",
                marginBottom: "4px",
              }}
              whileHover={{ rotate: [0, 6, -6, 0] }}
            />
            <span style={{ color: "#0f172a", fontSize: "10px", fontWeight: 700 }}>
              {s.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Table - FIXED CENTERED WITH STAGE REFERENCE */}
      <div style={{ display: "flex", flexDirection: "column", gap: "28px", width: "94%", maxWidth: "1200px", margin: "0 auto", alignItems: "center" }}>
        {ROWS.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
            {row.map((col, colIndex) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, boxShadow: "0 12px 28px rgba(22,163,74,0.15)" }}
                transition={{ duration: 0.2, delay: colIndex * 0.1 }}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "14px",
                  padding: "18px 22px",
                  width: "280px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                }}
              >
                <h3 style={{ color: "#0f172a", fontSize: "15px", fontWeight: 800, margin: "0 0 12px", borderLeft: "3px solid #16a34a", paddingLeft: "10px" }}>
                  {col.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {col.items.map((item, i) => (
                    <motion.li 
                      key={i} 
                      whileHover={{ x: 5, color: "#16a34a" }}
                      style={{ color: "#475569", fontSize: "13px", padding: "5px 0", borderBottom: "1px solid #f8fafc" }}
                    >
                      • {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
