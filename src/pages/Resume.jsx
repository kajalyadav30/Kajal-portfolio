import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0", display: "flex", justifyContent: "center" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: 'rgba(182, 216, 242, 0.81)', 
          borderRadius: 16,
          padding: "24px",
          width: "85%",
          maxWidth: "1100px",
          margin: "0 auto",
          boxShadow: "none",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 26, color: "#0F172A", marginBottom: 4, fontWeight: 700 }}
        >
          📄 Resume
        </motion.h2>
        <p style={{ color: "#334155", marginBottom: 20, fontSize: 14 }}>
          A quick glance at my journey.
        </p>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "#0A0A0A",
            padding: "20px",
            borderRadius: 12,
            color: "white",
          }}
        >
          <div>
            <h3 style={{ fontSize: 22, color: "#38BDF8", marginBottom: 8 }}>
              👨‍💻 KAJAL YADAV
            </h3>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#CBD5E1" }}>
              📍 Bhilai, Chhattisgarh
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#CBD5E1" }}>
              ✉️ kajalapr24@gmail.com | 📞 +91 9343863314
            </p>
          </div>

          <div
            style={{
              background: "#141414",
              borderRadius: 10,
              padding: "14px 18px",
              border: "1px solid rgba(255,255,255,0.08)",
              maxWidth: 520,
              fontSize: 13,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#38BDF8" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#A1A1AA" }}>
              Full Stack Web Developer skilled in the MERN stack with hands-on experience building responsive web applications, RESTful APIs,
              secure authentication systems, and interactive UIs. Focused on clean UI/UX and efficient code.
            </p>
          </div>
        </motion.div>

        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: 20 }}>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              borderRadius: 12,
              padding: "20px",
              background: "#0A0A0A",
              color: "white",
            }}
          >
            <h4 style={{ fontSize: 18, color: "#38BDF8", marginBottom: 12 }}>
              🎓 Education
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.7, fontSize: 13, color: "#D4D4D8" }}>
              <li style={{ marginBottom: 10 }}>
                <strong style={{color: "white"}}>B.Tech in IT</strong> — S.S.T.C Bhilai, 2023–2027
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong style={{color: "white"}}>12th - D.A.V Public School</strong> (CBSE) <br />
                <span style={{ color: "#38BDF8" }}>76%</span>
              </li>
              <li>
                <strong style={{color: "white"}}>10th - D.A.V Public School</strong> (CBSE) <br />
                <span style={{ color: "#38BDF8" }}>82%</span>
              </li>
            </ul>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ background: "#0A0A0A", borderRadius: 12, padding: "20px", color: "white" }}>
              <h4 style={{ fontSize: 18, color: "#38BDF8", marginBottom: 12 }}>💼 Projects</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, fontSize: 13, color: "#D4D4D8" }}>
                <li>1️⃣ CHASKAA - food ordering website</li>
                <li>2️⃣ STUDENTSWAP - campus marketplace</li>
                <li>3️⃣ My portfolio</li>
              </ul>
            </div>

            <div style={{ background: "#0A0A0A", borderRadius: 12, padding: "20px", color: "white" }}>
              <h4 style={{ fontSize: 18, color: "#38BDF8", marginBottom: 12 }}>⚙️ Skills</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["C","C++","Java","HTML","CSS","Node.js","SQL","Express.js","React","MySQL","MongoDB","Git"].map((skill) => (
                  <span key={skill} style={{ background: "#1F1F23", padding: "5px 10px", borderRadius: 6, fontSize: 12, color: "#E4E4E7", border: "1px solid rgba(255,255,255,0.06)" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 24 }}>
          <a href="https://github.com/kajalyadav30" target="_blank" rel="noreferrer" style={{ background: "#0A0A0A", color: "white", padding: "8px 16px", borderRadius: 8, textDecoration: "none", fontSize: 14 }}>💻 GitHub</a>
          <a href="https://www.linkedin.com/in/kajal-yadav-787a32260/" target="_blank" rel="noreferrer" style={{ background: "#0A0A0A", color: "white", padding: "8px 16px", borderRadius: 8, textDecoration: "none", fontSize: 14 }}>💼 LinkedIn</a>
        </div>

        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ marginTop: 20, borderRadius: 12, overflow: "hidden", background: "#0A0A0A", padding: "8px" }}
        >
          <iframe src="/logos/resume.pdf" title="Kajal Yadav Resume" style={{ width: "100%", height: "650px", border: "none", borderRadius: "8px", background: "#111" }} />
        </motion.div>

        <div style={{ textAlign: "center", marginTop: 16 }}>
          <motion.a href="/logos/resume.pdf" download whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: "inline-block", background: "#0A0A0A", color: "#38BDF8", padding: "10px 22px", borderRadius: 8, textDecoration: "none", fontWeight: 600, border: "1px solid #38BDF8" }}>
            ⬇️ Download Resume
          </motion.a>
        </div>

      </motion.div>
    </section>
  );
}
