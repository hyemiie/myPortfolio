import React, { useState } from "react";
import "./experience.css";
import './responsiveExperience.css'

const experiences = [
  {
    company: "Protip",
    title: "Backend Developer",
    date: "Dec 2024 – Present",
    skills: [
      "PostgreSQL",
      "FastAPI",
      "Python",
      "Docker",
      "Azure",
      "Git",
      "Swagger",
      "HTTP/HTTPS",
    ],
    description: `Built and maintained secure, scalable backend infrastructure for a mutual fund investment platform serving Indian users—integrating KYC, transaction flows, third-party financial services, and writing comprehensive tests to ensure reliability and compliance.`,
  },
  {
    company: "FreeCodeCamp",
    title: "Technical Author",
    date: "Sep 2023 – Present",
    skills: ["Technical Writing", "Flask", "HTTP/HTTPS"],
    description: `As a volunteer Technical Writer at freeCodeCamp, I write tutorials and guides that help people learn to code. In addition to writing, I build real projects to strengthen my understanding of the concepts I write on . This hands-on experience allows me to break down complex coding topics into clear, actionable steps for learners, while growing my own coding and project-building skills`,
  },
  {
    company: "Urbco",
    title: "FullStack Developer",
    date: "Jan 2024 – Sep 2024",
    skills: ["Node.js", "MySQL", "Git", "Sequelize", "React"],
    description: `Designed and maintained the server-side systems that support key accounting functions, such as handling large datasets and ensuring real-time accuracy in financial transactions. I also contributed to building a Business Intelligence (BI) tool, which allows users to easily manipulate data and create custom reports and charts`,
  },
  {
    company: "Tysu Infotech",
    title: "Software Engineering Intern",
    date: "May 2023 – Sep 2023",
    skills: [
      "Python",
      "Technical Writing",
      "Git",
      "JavaScript",
      "Node",
      "Canva",
      "React",
    ],
    description: `In this role, I developed and maintained backend features using Python and JavaScript, ensuring scalability and performance. I created clear technical documentation to support the frontend team in effectively using APIs, helping improve code quality.
`,
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { company, title, date, skills, description } =
    experiences[activeIndex];

  return (
    <section className="experienceSection">
      <div className="sectionHeading">
        <h2 className="sectionTitle">Places I've contributed to </h2>{" "}
        <div className="sectionBorder"></div>
      </div>
      <div className="experienceContainer">
        <div className="tabList">
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              className={`tabButton ${idx === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(idx)}
            >
              {exp.company}
            </button>
          ))}
        </div>

        <div className="tabContent">
          <h3>
            {title} <span className="companyName">@ {company}</span>
          </h3>
          <p className="date">{date}</p>
          <p className="description">{description}</p>
          <ul className="skillsList">
            {skills.map((skill, i) => (
              <li key={i} className="skill">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
