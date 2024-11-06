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
              For the past several months, myself and my two co-founders have been building Roam, a business management platform for digital creatives. Our first tool, the Fee Finder, helps creatives get paid their worth by estimating accurate project fees based off of various metrics, including the living wage in their location.
              </div>
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
              For the past several months, myself and my two co-founders have been building Roam, a business management platform for digital creatives. Our first tool, the Fee Finder, helps creatives get paid their worth by estimating accurate project fees based off of various metrics, including the living wage in their location.
              </div>
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
              For the past several months, myself and my two co-founders have been building Roam, a business management platform for digital creatives. Our first tool, the Fee Finder, helps creatives get paid their worth by estimating accurate project fees based off of various metrics, including the living wage in their location.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
