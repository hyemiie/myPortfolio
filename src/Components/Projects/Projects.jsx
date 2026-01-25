import React from "react";
import "./projects.css";
import Nav from "../Nav/Nav";
import BottomNav from "../Nav/BottomNav";

const projectList = [
  {
    title: "Vyn",
    href: "https://vyn-web-scanner.vercel.app/",
    git_link:"https://github.com/hyemiie/vyn-web-demo",
    description:

    `Vyn is a security scanner powered by Artificial Intelligence (AI) that analyzes codebases for vulnerabilities, unsafe practices, and risky configurations and returns clear, actionable fixes. It’s available as both:
- a CLI package you can install and run locally, and
- a web-based version that can clone and scan GitHub repositories directly, with no setup required.
 Built this to explore how AI can make security checks more useful by explaining issues in plain terms instead of just flagging them.`,
    gifClass: "GIFdemo4",
  },
  {
    title: "Gitxen",
    href: "https://gitxen-zq9s.vercel.app/home",
    git_link: "https://github.com/hyemiie/git-chat",
    description:

    `GitXen is a dev-focused tool that transforms codebase communication using RAG with embeddings to answer natural language questions about commits, code changes, and project history.`,
    gifClass: "GIFdemo5",
  },
  {
    title: "CollabMd",
    href: "https://mark-down-editor-qxuh-git-collaborative-change-hyemies-projects.vercel.app/",
        git_link: "https://github.com/hyemiie/vyn-web-demo",
    description:

"A real-time Markdown editor that lets multiple writers collaborate simultaneously on the same document. I built this to understand how real-time editing works—handling concurrent edits, syncing changes instantly, and keeping the interface simple when multiple people are working together. Supports headings, lists, links, images, code blocks, and inline comments.",
    gifClass: "GIFdemo1",
  },
  // {
  //   title: "Chattr",
  //   href: "https://chat-application-wrtg.vercel.app/",
  //       git_link: "https://github.com/hyemiie/vyn-web-demo",
  //   description:
  //     "A group chat app that allows different members of a team to send and receive messages/files regardless of location.",
  //   gifClass: "GIFdemo2",
  // },
  {
    title: "JWT + OAuth + TOTP Authentication System",
    href: "https://auth-client-eight.vercel.app/",
    git_link: "https://github.com/hyemiie/authentication_system",
    description:
"THis projects explores how modern login systems actually work. It combines three different ways to authenticate into a single system using regular email and password with JWT tokens, Google sign-in, and two-factor authentication codes. Built this to understand security patterns at a deeper level, like how sessions are maintained, how third-party login flows work, and how an extra layer of verification can be added without breaking the experience. Also included a React interface that walks through each flow, from signup to protected access."  ,
 gifClass: "GIFdemo2",
  },
//   {
//     title: "Purchase Regret Predictor",
//     href: "https://addons.mozilla.org/addon/purchase-regret-predictor/",
//     git_link: "https://github.com/hyemiie/regret_predictor-server",
//     description:
// "A browser extension that predicts shopping regret before checkout. Trained a model on synthetic purchase data, analyzing price, product type, browsing time, and shopping patterns to identify impulse buy patterns. When risk is detected, it shows a pop-up with a user-friendly analysis and an optional close button. Built this to learn supervised learning workflows and Chrome extension APIs, focusing on how to use ML predictions without disrupting user experience.",
//     gifClass: "GIFdemo2",
//   },
];


const Projects = () => {
  return (
    <div className="projects-page">
    <section className="projects-section">
    <Nav/>
 <div className="sectionHeading">
        <h2 className="sectionTitle">Featured Projects </h2>{" "}
        {/* <div className="sectionBorder"></div> */}
      </div>
<span className="sectionIntro">
        <h2>Projects & Contributions</h2>
<p>
This section highlights a collection of the tools, applications, and systems I’ve built, with brief notes on how they work and my approach to building them.

</p>

</span>

      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-item" key={index}>
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
             <div className="project-links"><a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-title"
              >
               Demo
              </a>
              <a
                href={project.git_link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-title"
              >
                Source code
              </a>

            </div>
            </div> 


            
          
          </div>
        ))}
      </div>
    </section>
          <BottomNav/>
</div>
  );
};

export default Projects;
