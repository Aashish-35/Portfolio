import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Smart Waste Management System",
      description: "An AI-powered system to optimize waste collection and recycling.",
      emoji: "♻️",
      tech: ["AI", "IoT", "Python", "Flask"],
    },
    {
      title: "AI-powered Air Quality Monitoring",
      description: "Monitors air quality in real-time and provides health recommendations.",
      emoji: "🌬️",
      tech: ["React", "Node.js", "Air Quality API", "TensorFlow"],
    },
    {
      title: "Mock Interview Platform",
      description: "A web app that uses AI to simulate job interviews and provide feedback.",
      emoji: "💼",
      tech: ["React", "Django", "NLP", "Bootstrap"],
    },
    {
      title: "AI Career Path Finder",
      description: "Helps students and professionals find suitable career paths using AI.",
      emoji: "🧭",
      tech: ["React", "Python", "Scikit-learn", "Django"],
    },
  ];

  return (
    <div className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-emoji">{project.emoji}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
