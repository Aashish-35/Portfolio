import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      <h2 className="about-title">About Me</h2>
      
      <p className="about-intro">
        Hi! I'm <strong>Aashish</strong>, an enthusiastic learner and developer passionate about 
        <strong> Artificial Intelligence</strong>, <strong>Data Science</strong>, and 
        <strong> cutting-edge technologies</strong>. My journey began with curiosity about how 
        technology can transform the world, and today, I’m focused on building 
        <strong> innovative projects</strong> that solve real-world problems.
      </p>

      <div className="about-extra">
        <h3>Who I Am</h3>
        <p>
          A creative thinker and problem-solver who enjoys exploring the intersection of 
          <strong> AI</strong> and <strong>human impact</strong>. I believe in using data and 
          intelligent systems to create solutions that are both meaningful and sustainable.
        </p>

        <h3>What I Do</h3>
        <p>
          I work on projects ranging from <strong>AI-powered applications</strong> to 
          <strong> web development platforms</strong>. Whether it's building predictive 
          models, interactive dashboards, or smart IoT systems, I strive to create 
          products that make a positive difference.
        </p>

        <h3>My Vision</h3>
        <p>
          My ultimate goal is to contribute to a future where <strong>AI</strong> and 
          <strong> technology</strong> empower individuals and communities, ensuring 
          <strong> sustainability</strong>, <strong>accessibility</strong>, and 
          <strong> innovation</strong> for everyone.
        </p>
      </div>

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


