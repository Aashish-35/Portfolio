import React from "react";
import { FaPalette, FaLaptopCode, FaLightbulb, FaPython, FaDatabase, FaRobot, FaProjectDiagram, FaChartBar} from "react-icons/fa";
import "./Skills.css";

const skills = [
  { name: "UI/UX", level: "90%", icon: <FaPalette /> },
  { name: "Web Development", level: "90%", icon: <FaLaptopCode /> },
  { name: "Database", level: "85%", icon: <FaDatabase /> },
  { name: "Problem Solving", level: "80%", icon: <FaLightbulb /> },
  { name: "Python", level: "75%", icon: <FaPython /> },
  { name: "NLP", level: "65%", icon: <FaProjectDiagram /> },
  { name: "Machine Learning", level: "65%", icon: <FaRobot /> },
  { name: "Data Visualization", level: "65%", icon: <FaChartBar /> },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: skill.level }}></div>
            </div>
            <span className="skill-level">{skill.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
