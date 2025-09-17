import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-section">
      <div className="section-content">
        <div className="text-content">
          <h1 className="animate-text">Hi, I'm Aashish 👋</h1>
          <p className="instant-text">
            AI & Data Science Student | Aspiring Innovator
          </p>
          <p className="animate-text delay-1">
            Passionate about{" "}
            <span className="highlight">Machine Learning</span> and building
            impactful solutions with <span className="highlight">AI</span>.
          </p>
          <a href="./projects" className="cta-button animate-text delay-2">
            View My Work
          </a>

          <div className="social-icons animate-text delay-3">
            <a
              href="https://github.com/Aashish-35"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/aashish-shreestha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://x.com/aashish_stha___"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={28} />
            </a>
          </div>
        </div>

        <div className="image-content animate-text delay-2">
          <img src="/profile.png" alt="Aashish Profile" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;

