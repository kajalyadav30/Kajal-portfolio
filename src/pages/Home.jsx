import React from "react";
import "../CSS/Home.css";

const Home = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="home-page">
      {/* ================= HERO SECTION ================= */}
      <section className="home-hero" id="home">
        <div className="hero-dot-pattern hero-dots-left"></div>
        <div className="hero-dot-pattern hero-dots-right"></div>
        <div className="hero-wave"></div>

        <div className="home-hero-container">
          {/* LEFT - PHOTO */}
          <div className="home-photo-area">
            <div className="photo-blue-shape"></div>
            <div className="photo-frame">
              <img src="/photo.jpg" alt="Kajal Yadav" className="home-profile-photo" />
            </div>
            <div className="floating-profile-card">
              <div className="floating-icon">&lt;/&gt;</div>
              <div>
                <strong>MERN Stack</strong>
                <span>Developer</span>
              </div>
            </div>
          </div>

          {/* RIGHT - INTRO */}
          <div className="home-intro">
            <div className="availability-badge">
              <span className="availability-dot"></span>
              Available for opportunities
            </div>

            <h1 className="home-heading">
              <span className="heading-hi">Hi, I’m</span>
              <span className="heading-name">KAJAL YADAV</span>
            </h1>

            <h2 className="home-role">Full Stack Developer</h2>

            <p className="home-description">
              I build modern, responsive and user-friendly web applications
              using the MERN stack. Passionate about creating clean interfaces
              and solving real-world problems through code.
            </p>

            <div className="home-tech-stack">
              <span className="tech-item"><span className="tech-symbol react-symbol">⚛</span>React.js</span>
              <span className="tech-item"><span className="tech-symbol node-symbol">⬡</span>Node.js</span>
              <span className="tech-item"><span className="tech-symbol express-symbol">EX</span>Express.js</span>
              <span className="tech-item"><span className="tech-symbol mongo-symbol">●</span>MongoDB</span>
            </div>

            <div className="home-buttons">
              {/* FIX: Link ki jagah scroll button */}
              <button onClick={() => scrollTo("projects")} className="primary-home-btn">
                View My Projects <span>→</span>
              </button>

              <a href="/logos/resume.pdf" target="_blank" rel="noreferrer" className="secondary-home-btn">
                View Resume <span>↓</span>
              </a>
            </div>

            <div className="home-socials">
              <span className="find-me">Find me on</span>
              <a href="https://github.com/kajalyadav30" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-circle">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.16c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1.73.81.77 2.1v3.11c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/kajal-yadav-787a32260/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-circle linkedin-circle">in</a>
              <a href="https://www.instagram.com/_kajal.30_/" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-circle">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="home-info-strip">
        <div className="home-info-item about-info">
          <div className="info-icon"><span>♙</span></div>
          <div className="info-text"><h3>About Me</h3><p>B.Tech Information Technology student and aspiring software developer who loves to build impactful web applications.</p></div>
        </div>
        <div className="home-info-item">
          <div className="info-icon">📍</div>
          <div className="info-text"><h3>Location</h3><p>Bhilai, Chhattisgarh,<br/>India</p></div>
        </div>
        <div className="home-info-item">
          <div className="info-icon">▣</div>
          <div className="info-text"><h3>Education</h3><p>B.Tech (IT)<br/>2023 – 2027</p></div>
        </div>
        <div className="home-info-item">
          <div className="info-icon">💡</div>
          <div className="info-text"><h3>Expertise</h3><p>Full-stack development,<br/>Problem Solving</p></div>
        </div>
        <div className="home-info-item email-info">
          <div className="info-icon">✉</div>
          <div className="info-text"><h3>Email</h3><p>Kajalapr24@gmail.com</p></div>
        </div>
      </section>
    </main>
  );
};

export default Home;