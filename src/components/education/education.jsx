import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import "./Education.css";

const Education = () => {
  return (
    <section className="education-section" id="education">
      {/* Centered Heading */}
      <h2 className="education-title">Education</h2>

      {/* Education Cards */}
      <div className="education-cards">
        <div className="education-card">
          <FaGraduationCap className="edu-icon" />
          <h3 className="card-title">BSc in AI & Data Science</h3>
          <h4 className="card-subtitle">Birmingham City University, UK</h4>
          <p className="card-date">2024 - Present</p>
          <p className="card-description">
            Specialized in AI, Machine Learning, and Data Analysis with hands-on projects in predictive modeling and neural networks.
          </p>
        </div>

        <div className="education-card">
          <FaGraduationCap className="edu-icon" />
          <h3 className="card-title">High School Diploma</h3>
          <h4 className="card-subtitle">Reliance Int'l Academy, Kathmandu, Nepal</h4>
          <p className="card-date">2022 - 2024</p>
          <p className="card-description">
            Focused on Science and Mathematics, building a strong foundation in programming and analytical skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;