import React from "react";
import "./experience.css";
import "./responsiveExperience.css";

const Experience = () => {
  return (
    <div className="workExperience">
      <div className="heading"><h3>Where I've </h3><h3 className="break">contributed</h3> </div>
      <div className="experiencePage">
        <div className="firstHalf"><div class="star large"></div>
<div class="star medium"></div>
<div class="star extra-small"></div>
</div>
        <div className="secondHalf">
          <div className="experienceDiv">
            <div className="experienceTitle">
              <div className="teamDiv">
                <span className="team">FreeCodeCamp</span>
                <span>September 2023- Present</span>
              </div>
              <div className="skills">
                <div>Technical Writing</div>
                <div>Flask</div>
                <div>HTTP/HTTPS</div>
              </div>
              <div className="experienceDesc">
              As a volunteer Technical Writer at freeCodeCamp, I write tutorials and guides that help people learn to code. In addition to writing, I build real projects to strengthen my understanding of the concepts I write on . This hands-on experience allows me to break down complex coding topics into clear, actionable steps for learners, while growing my own coding and project-building skills.              </div>
            </div>
          </div>
          <div className="experienceDiv">
            <div className="experienceTitle">
              <div className="teamDiv">
                <span className="team">Urbco</span>
                <span>January 2024- September 2024</span>
              </div>
              <div className="skills">
                <div>Node JS</div>
                <div>Mysql</div>
                <div>Git</div>
                <div>Sequelize</div>
                <div>React</div>
              </div>
              <div className="experienceDesc">
              In my role as a developer for an Urbco, I designed and maintained the server-side systems that support key accounting functions, such as handling large datasets and ensuring real-time accuracy in financial transactions. I also contributed to building a Business Intelligence (BI) tool, which allows users to easily manipulate data and create custom reports and charts              </div>
            </div>
          </div>
          <div className="experienceDiv">
            <div className="experienceTitle">
              <div className="teamDiv">
              <span className="team">Tysu Infotech</span>
                <span>May 2023- September 2023</span>
              </div>
              <div className="skills">
                <div>Python</div>
                <div>Technical Writing</div>
                <div>Git</div>
                <div>Javascript</div>
                <div>Canva</div>
                <div>React</div>
              </div>
              <div className="experienceDesc">
              In this role, I developed and maintained backend features using Python and JavaScript, ensuring scalability and performance. I created clear technical documentation to support the frontend team in effectively using APIs, helping improve code quality.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
