import React, { useState } from "react";
import "./experience.css";
import './responsiveExperience.css'
import Nav from "../Nav/Nav";
import BottomNav from "../Nav/BottomNav";

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
    ],
    description: 
      "Built and maintained secure, scalable backend infrastructure for a mutual fund investment platform serving Indian users—integrating KYC, transaction flows, third-party financial services, and writing comprehensive tests to ensure reliability and compliance.",
    impacts: [
      "Reduced onboarding friction – Implemented automated KYC verification flows, cutting manual review time and improving user sign-up rates",
      "Ensured financial compliance –  Built secure transaction pipelines with audit trails, encryption, and data validation to meet Indian financial regulations",
      "Improved system reliability – through thorough test coverage and monitoring, minimizing downtime during critical investment periods",
      "Streamlined third-party integrations – Designed clean API interfaces for payment gateways and fund providers, reducing integration bugs and support requests",
      "Enhanced developer experience – Documented APIs with Swagger and using Docker for consistent development environments"
    ]
  },
  {
    company: "FreeCodeCamp",
    title: "Technical Author",
    date: "Sep 2023 – Present",
    skills: ["Technical Writing", "Flask", "HTTP/HTTPS"],
    description: "As a volunteer Technical Writer at freeCodeCamp, I write tutorials and guides that help people learn to code. In addition to writing, I build real projects to strengthen my understanding of the concepts I write on. This hands-on experience allows me to break down complex coding topics into clear, actionable steps for learners, while growing my own coding and project-building skills.",
    impacts: []
  },
  {
    company: "Urbco",
    title: "FullStack Developer",
    date: "Jan 2024 – Sep 2024",
    skills: ["Node.js", "MySQL", "Git", "Sequelize", "React"],
    description: "Designed and maintained server-side systems supporting core accounting functions, including large dataset processing and real-time financial transaction accuracy. Built a Business Intelligence (BI) tool enabling users to create custom reports and data visualizations, with responsive frontend interfaces.",
    impacts: [
      "Improved financial accuracy – Built real-time transaction processing with validation and reconciliation",
      "Enabled self-service analytics – Created a BI tool letting non-technical users generate reports",
      "Built intuitive interfaces – Developed React components for data visualization, report customization, and dashboard management",
      "Optimized for scale – Improved database queries and processing pipelines to handle large accounting datasets efficiently",
      "Reduced manual work – Automated report generation and data tasks that previously required spreadsheets"
    ]
  },
  {
    company: "Tysu Info",
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
    description: "Developed and maintained backend features using Python and JavaScript, ensuring scalability and performance. Created clear technical documentation to support the frontend team in effectively using APIs, helping improve code quality.",
    impacts: [
      "Improved team efficiency – Wrote clear API documentation reducing frontend integration time",
      "Built scalable features – Developed backend endpoints handling growing user loads",
      "Enhanced code quality – Participated in code reviews and implemented best practices",
      "Simplified communication – Created visual docs and diagrams explaining system architecture",
      "Enabled smooth integration – Worked with React developers ensuring clean API connections"
    ]
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { company, title, date, skills, description, impacts } =
    experiences[activeIndex];

  return (
    <div className="experiencePage">
      <section className="experienceSection">
        <Nav/>
        <div className="sectionHeading">
          <h2 className="sectionTitle">Places I've contributed to</h2>
        </div>
        <span className="experience-sectionIntro">
          <h2>Work & Experience</h2>
          <p>
            A record of the work I've done, the problems I've solved, and the teams I've built with.
          </p>
        </span>
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
            {impacts.length >1 ? <h3>Key Contributions & Impact:</h3> : null}
           {impacts.map((impact, i) => {
  const parts = impact.split(' – ');

  if (parts.length > 1) {
    
    return (
      <li key={i} className="impactItem">
        <strong className="points-title">{parts[0]}</strong> – {parts[1]}
      </li>
    );
  }
  return <li key={i} className="impactItem">{impact}</li>;
})}

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
      <BottomNav/>
    </div>
  );
};

export default Experience;