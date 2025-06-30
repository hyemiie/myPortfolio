import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-page">
     {/* <div className="sectionHeading">
        <h2 className="sectionTitle">About</h2>{" "}
        <div className="sectionBorder"></div>
      </div> */}
      <section className="intro">
        <p>
          I’m a developer who enjoys building secure, efficient tools that solve real problems.
           Whether I'm working on intuitive interfaces or scalable backend systems, 
           I thrive at the intersection of functionality and user experience—where clean code meets real-world impact.

        </p>
      </section>

      <section className="experience">
        <p>
             Currently, I work as a <strong>Backend Developer </strong>at a fintech startup, where I help build secure systems for a financial app serving users across India.

My experience cuts across <strong>fast-paced startups</strong> and creative studios, which has helped me stay adaptable and solve problems across the stack. I’ve also contributed to frontend projects, making sure accessibility and performance are treated as core features—not afterthoughts.

        </p>
      </section>

      <section className="experience">
        <p>
      

Recently, I scratched my own itch by building an AI-powered tool that<strong> scans codebases</strong>, finds <strong>security vulnerabilities</strong> , and explains how to fix them—and why—in plain English. What started as a side project is now something I hope other developers find genuinely useful.

        </p>
      </section>

      <section className="personal">
        <p>
         When I'm not coding, you’ll probably find me exploring recipes from different cultures, deep into a book, or writing about the ones that stick with me.
        </p>
      </section>
    </div>
  );
};

export default About;
