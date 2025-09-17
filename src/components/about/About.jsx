import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        I am passionate about <strong>AI</strong>, <strong>Data Science</strong>, and
        creating <strong>innovative projects</strong> that make a difference.
      </p>

      <div className="about-skills">
        <div className="skill-card">
          <div className="skill-icon">🤖</div>
          <h3>AI & ML</h3>
          <p>Developing intelligent systems and predictive models.</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">🛠️</div>
          <h3>Projects</h3>
          <p>Building impactful projects using modern tech stacks.</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">💡</div>
          <h3>Innovation</h3>
          <p>Generating creative ideas to solve real-world problems.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
