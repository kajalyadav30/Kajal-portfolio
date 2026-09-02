import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Home.css";

const Home = () => {
  return (
    <section className="home-section">

      {/* Background */}
      <div className="home-glow glow-left"></div>
      <div className="home-glow glow-right"></div>
      <div className="home-glow glow-bottom"></div>
      <div className="stars"></div>

      <div className="home-container">

        {/* LEFT PROFILE CARD */}
        <div className="profile-card">

          <div className="profile-image-wrapper">
            <img
              src="/photo.jpg"
              alt="Kajal Yadav"
              className="profile-photo"
            />
          </div>

          <h2>KAJAL YADAV</h2>

          <p className="profile-status">
            Open to Opportunities
          </p>

          <div className="profile-socials">

            <a
              href="https://github.com/kajalyadav30"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.16c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.35.77 1.04.77 2.1v3.11c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/kajal-yadav-787a32260/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <span className="linkedin-icon">in</span>
            </a>

            <a
              href="https://www.instagram.com/_kajal.30_/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>

          </div>
        </div>


        {/* RIGHT CONTENT */}
        <div className="home-info">

          <h1 className="home-title">
            Hi, I'm <span>KAJAL YADAV</span>
          </h1>

          <p className="home-subtitle">
            Full Stack Developer | MERN Stack  Developer | Software Engineer
          </p>


          {/* Profession Tags */}
          <div className="profession-tags">

            <span>MERN Stack Developer</span>
            <span>Full Stack Developer</span>
            <span>Frontend Developer</span>
            <span>Software Developer</span>
            <span>Web Developer</span>

          </div>


          {/* INFO CARDS */}
          <div className="info-cards">

            <div className="info-card">

              <div className="icon-box location-icon">
                📍
              </div>

              <div>
                <h4>Location</h4>
                <p>Bhilai, Chhattisgarh, India</p>
              </div>

            </div>


            <div className="info-card">

              <div className="icon-box expertise-icon">
                💡
              </div>

              <div>
                <h4>Expertise</h4>
                <p>
                  Full-stack development,
                  <br />
                  Problem Solving
                </p>
              </div>

            </div>


            <div className="info-card contact-card">

              <div className="icon-box contact-icon">
                ✉
              </div>

              <div>
                <h4>Contact</h4>
                <p>Kajalapr24@gmail.com</p>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* CONNECT BUTTON */}
      <Link to="/contact" className="connect-button">
        Connect with me
        <span></span>
      </Link>

    </section>
  );
};

export default Home;