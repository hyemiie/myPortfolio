import React from "react";
import "./projects.css";

const projectList = [
  {
    title: "Vyn",
    href: "https://vyn-web-scanner.onrender.com/hero",
    description:
      "A Security scanner powered with Artificial Intelligence (AI) that reviews codebase for vulnerabilities, unsafe practices, and risky configurations and gives actionable fixes.",
    gifClass: "GIFdemo4",
  },
  {
    title: "Tier Editor",
    href: "https://mark-down-editor-qxuh.vercel.app/",
    description:
      "A Markdown Editor that allows users to write and edit articles and view the Markdown format in real time.",
    gifClass: "GIFdemo1",
  },
  {
    title: "Chattr",
    href: "https://chat-application-wrtg.vercel.app/",
    description:
      "A group chat app that allows different members of a team to send and receive messages/files regardless of location.",
    gifClass: "GIFdemo2",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
 <div className="sectionHeading">
        <h2 className="sectionTitle">Featured Projects </h2>{" "}
        <div className="sectionBorder"></div>
      </div>

      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-item" key={index}>
            {/* <span className="project-index">0{index + 1}.</span> */}
            <div className="project-content">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-title"
              >
                <h3>{project.title}</h3>
              </a>
              <p className="project-desc">{project.description}</p>
            </div>
            <div className={`project-demo ${project.gifClass}`}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
