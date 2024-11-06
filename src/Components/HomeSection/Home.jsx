import React from "react";
import "./home.css";
import lightImage from "../../Images/light3.png";
import heroImage from "../../Images/heroImage.gif";
import { useState } from "react";
import "./Responsivehome.css"

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="homeBody">
      <div className="firstDiv">
      <div className="name">Hyemiie</div>
        <div className="lampContainer">
          <div className="lampString"></div>
          <div className="lampCover"></div>
          <div className="lampLid"></div>
          {darkMode ? (
            <div className="lightImage">
              <img src={lightImage} className="lightImg"></img>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="secondDiv">
      <div className="secondDivname">Hyemiie</div>

      <div className="Navbuttons">
        <button>Writing</button>
        <button>Projects</button>
        <button>About</button>
        <button>Contact</button>
      </div>
   <div className="personIntro"><h2>
    Hii, I'm Yemi
   </h2>
   
   <p> I love bringing <span class="highlight" data-text="ideas">ideas</span> to life through <span class="highlight" data-text="code">code</span> and sharing what I've learned through <span class="highlight" data-text="writing">writing</span>.</p>
   </div>
  
      </div>
      <div className="heroImgDiv">
          {" "}
          {/* <img src={heroImage} className="heroImg"></img> */}
        </div>
    </div>
  );
};

export default Home;
