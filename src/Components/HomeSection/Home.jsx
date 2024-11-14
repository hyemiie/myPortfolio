import React from "react";
import "./home.css";
import lightImage from "../../Images/rb_62407.png";
import heroImage from "../../Images/heroImage.gif";
import { useState } from "react";
import "./Responsivehome.css"

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="homeBody">
      <div className="firstDiv">
      <div className="name">
      <h2>Hyemiie</h2></div>
        <div className="lampContainer">
          {darkMode ? (
            <div className="lightImage">
              {/* <img src={lightImage} className="lightImg"></img> */}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="secondDiv">
      <div className="secondDivname">Hyemiie</div>

      <div className="Navbuttons">
      <button className="curly-button">Writing</button>
      <button className="curly-button">Projects</button>
      <button className="curly-button">About</button>
      <button className="curly-button">Contact</button>
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
