import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        padding: "60px 0",
      }}
    >
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          width: "85%",
          maxWidth: "1100px",
          background: "#C5D9EB",
          padding: "24px",
          borderRadius: "16px",
        }}
      >
        <h2 style={{ fontSize: "26px", marginBottom: "8px", color: "#0F172A", fontWeight: 700 }}>
          About Me
        </h2>

        
        <div style={{
          background: "#0A0A0A",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "20px"
        }}>
          <p style={{ fontSize: "14px", color: "#D4D4D8", marginBottom: "12px", lineHeight: 1.7 }}>
            Hi, I'm <strong style={{color: "white"}}>Kajal Yadav</strong> — an aspiring <strong style={{color: "white"}}>Full Stack Developer</strong> and <strong style={{color: "white"}}>Software Engineer</strong> passionate about building modern, scalable, and user-friendly web applications. I enjoy turning ideas into functional digital experiences using technologies like React.js, Node.js, Express.js, and MongoDB.
          </p>
          <p style={{ fontSize: "14px", color: "#A1A1AA", lineHeight: 1.7 }}>
            I'm deeply interested in solving real-world problems through clean code, efficient solutions, and continuous learning. Beyond development, I enjoy exploring new technologies and building projects that challenge me to grow.
          </p>
        </div>

        <h3 style={{ fontSize: "20px", marginBottom: "16px", color: "#0F172A", fontWeight: 600 }}>
          Education
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          
          <motion.div whileHover={{ scale: 1.01 }} style={{
            background: "#0A0A0A",
            borderRadius: "12px",
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}>
            <FaUniversity size={32} color="#38BDF8" />
            <div>
              <h4 style={{ color: "#38BDF8", marginBottom: "4px", fontSize: "16px" }}>B.Tech in INFORMATION TECHNOLOGY</h4>
              <p style={{ color: "#E4E4E7", fontSize: "13px" }}><strong>S.S.T.C (Shri Shankaracharya Technical Campus)</strong> — Bhilai, Chhattisgarh</p>
              <p style={{ color: "#A1A1AA", fontSize: "12px" }}>4th Year (Pursuing) | 2023 – 2027</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }} style={{
            background: "#0A0A0A",
            borderRadius: "12px",
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}>
            <FaGraduationCap size={30} color="#38BDF8" />
            <div>
              <h4 style={{ color: "#38BDF8", marginBottom: "4px", fontSize: "16px" }}>Higher Secondary Education (12th)</h4>
              <p style={{ color: "#E4E4E7", fontSize: "13px" }}><strong>DAV Public School</strong> — Bagicha, Chhattisgarh</p>
              <p style={{ color: "#A1A1AA", fontSize: "12px" }}>CBSE Board | Percentage: 76%</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }} style={{
            background: "#0A0A0A",
            borderRadius: "12px",
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}>
            <FaSchool size={28} color="#38BDF8" />
            <div>
              <h4 style={{ color: "#38BDF8", marginBottom: "4px", fontSize: "16px" }}>Secondary Education (10th)</h4>
              <p style={{ color: "#E4E4E7", fontSize: "13px" }}><strong>DAV Public School</strong> — Bagicha, Chhattisgarh</p>
              <p style={{ color: "#A1A1AA", fontSize: "12px" }}>CBSE Board | Percentage: 82%</p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
