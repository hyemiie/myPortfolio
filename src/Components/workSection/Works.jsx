import React from "react";
import "./Works.css";
import "./ResponsiveWorks.css";
import Nav from "../Nav/Nav";
import BottomNav from "../Nav/BottomNav";

const Works = () => {
  return (
    <div className="notesPage">
    <div className="workSection">
    <Nav/>
     <div className="sectionHeading">
        <h2 className="sectionTitle"> Articles </h2>{" "}
        {/* <div className="sectionBorder"></div> */}
       
      </div>
       <span className="sectionIntro">
        <h2>Building Notes</h2>
<p>
Notes on systems, tools, and problems that make me curious, covering patterns I notice in technology and sharing what I learn along the way.</p>
</span>
      <div className="workGrid">
        <div className="workContainer">
          <div className="workDiv">
            <div className="worKDescription">
             <a href="https://www.freecodecamp.org/news/jwt-authentication-in-flask/" rel="noopener noreferrer" target="_blank"> <h2>How to Use JSON Web Tokens for Secure Authentication</h2></a>
              <p>
                JSON Web Tokens (JWTs) are an  app’s way of saying, “We know who you are, so
                come on in.” But how exactly do they work, and why are they such
                a popular choice for authentication?
              </p>
            </div>
          </div>
        </div>
        <div className="workContainer ">
          <div className="workDiv">
            <div className="worKDescription">
             <a href="https://www.sitepoint.com/conditional-rendering-in-react/" rel="noopener noreferrer" target="_blank"> <h2>6 Techniques for Conditional Rendering in React</h2></a>
              <p>
               React offers several options to handle changes in the user interface, making it easy to show or hide exactly what you need, when you need it. This article covers six techniques for conditional rendering in React{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="workContainer ">
          <div className="workDiv">
            <div className="worKDescription">
              <a href="https://www.sitepoint.com/react-spring-interactive-animations/" target="_blank" rel="noopener noreferrer"><h2>How to Create Interactive Animations Using React Spring</h2></a>
              <p>
               React Spring is a library built for adding spring-based animations to React apps. It gives you tools to create motion that responds naturally to user interactions and state changes. This guide walks through how to use it to build animations that feel smooth and purposeful.
              </p>
            </div>
          </div>
        </div>
        <div className="workContainer">
          <div className="workDiv">
            <div className="worKDescription">
             <a href="https://www.freecodecamp.org/news/idempotency-in-http-methods/"><h2>
                Idempotence in HTTP Methods – Explained with CRUD Examples
                
              </h2>
              </a> 
              <p>
          An elevator button doesn't call multiple elevators or revert when it's pressed repeatedly, it continues its action and heads to the specified floor. Idempotent HTTP methods work the same way, so repeated identical requests produce the same result as a single request.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
          <BottomNav/>

    </div>
  );
};

export default Works;
