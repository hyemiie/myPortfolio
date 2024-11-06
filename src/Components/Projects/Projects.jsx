import React, { useState } from "react";
import "./projects.css";
import Contact from "../Contact/Contact";
import "./responsiveProject.css";

const Projects = () => {
  const [viewSkills, setViewSkills] = useState(false);
  const [viewSecondSkills, setViewSecondSkills] = useState(false);
  const [viewThirdSkills, setViewThirdSkills] = useState(false);
  const [viewFourthSkills, setViewFourthSkills] = useState(false);

  // const viewSkills=()=>{
  //     const y - document.getElementById('hj').setClassname
  // }
  return (
    <div className="projectPage">
      <div className="projectGrid">
        <div
          className="projectDiv"
          onMouseEnter={() => setViewSecondSkills(true)}
          onMouseLeave={() => setViewSecondSkills(false)}
        >
          <div className="projectDemo GIFdemo1"></div>
          {viewSecondSkills && (
            <div className="overlay">
            <div className="head">
            <h2>Tier</h2>
            <div>A Markdown Editor that allows users to write and edit articles and view the Markdown format in real time.</div>
            </div>       
              <div className="skillsUsed">
                <button>React</button>
                <button>Node JS</button>
                <button>Tailwind CSS</button>
                <button>MongoDB</button>
              </div>
              <button className="demo"><a href="https://new-6zp9.vercel.app/">View Demo</a></button>
            </div>
          )}
        </div>
        <div
          className="projectDiv"
          onMouseEnter={() => setViewSecondSkills(true)}
          onMouseLeave={() => setViewSecondSkills(false)}
        >
          <div className="projectDemo GIFdemo2"></div>
          {viewSecondSkills && (
            <div className="overlay">
            <div className="head">
            <h2>TeamChat</h2>
            <div>A group Chat app that allows differnt memebers of a team to send and recieve messages/files regardless of location</div>
            </div>       
              <div className="skillsUsed">
                <button>React</button>
                <button>Node JS</button>
                <button>MongoDB</button>
                <button>Socket.io</button>
              </div>
              <button className="demo"><a href="https://chatapplication-frontend-yrrj.onrender.com/">View Demo</a></button>
            </div>
          )}
        </div>
        <div
          className="projectDiv"
          onMouseEnter={() => setViewSecondSkills(true)}
          onMouseLeave={() => setViewSecondSkills(false)}
        >
          <div className="projectDemo GIFdemo3"></div>
          {viewSecondSkills && (
            <div className="overlay">
            <div className="head">
            <h2>TierSkin</h2>
            <div>An Ecommerce application that allows users to view skincare products, add to their cart and also add to their wishlists</div>
            </div>       
              <div className="skillsUsed">
                <button>React</button>
                <button>Flask</button>
                <button>CSS</button>
                <button>Postgresql</button>
              </div>
              <button className="demo"><a href="https://tier2-ten.vercel.app/">View Demo</a></button>
            </div>
          )}
        </div>
        {/* <div
          className="projectDiv"
          onMouseEnter={() => setViewSecondSkills(true)}
          onMouseLeave={() => setViewSecondSkills(false)}
        >
          <div className="projectDemo GIFdemo4"></div>
          {viewSecondSkills && (
            <div className="overlay">
            <div className="head">
            <h2>Tier</h2>
            <div>A Markdown Editor that allows users to write and edit articles and view the Markdown format in real time.</div>
            </div>       
              <div className="skillsUsed">
                <button>React</button>
                <button>Node JS</button>
                <button>Tailwind CSS</button>
                <button>MongoDB</button>
              </div>
              <button className="demo">View Demo</button>
            </div>
          )}
        </div> */}
       
       
      </div>


    </div>
  );
};

export default Projects;
