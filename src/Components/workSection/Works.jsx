import React from "react";
import "./Works.css";
import './ResponsiveWorks.css'

const Works = () => {
  return (
    <div className="workSection">
    <h2>Writings</h2>
      <div className="workGrid">
      <div className="workContainer">

        <div className="workDiv left">
          <div className="dots"> <div></div> 
          <div></div> 
          <div></div>  </div>
          <div className="worKDescription"><h2>How to Use JSON Web Tokens for Secure Authentication</h2>
          <p>JSON Web Tokens (JWTs) are a compact, secure way to transfer information between two parties—like a server and a client. They’re like your app’s way of saying, “We know who you are, so come on in.” But how exactly do they work, and why are they such a popular choice for authentication?
          </p>
          </div>
</div>
        </div>
        <div className="workContainer ">
        <div className="workDiv right">
          <div className="dots"> 
          
          <div></div> 
          <div></div> 
          <div></div> 
          </div>
          <div className="worKDescription"><h2>6 Techniques for Conditional Rendering in React</h2>
          <p>
          The ability to display different parts of your UI based on user actions or incoming data is essential for efficient web development. React offers several methods to handle these changes, making it easy to show (or hide) exactly what you need, exactly when you need it. In this article, we’ll dive into six techniques for conditional rendering in React, helping you keep your app dynamic, flexible, and engagin          </p>
          </div>
</div>
        </div>
        <div className="workContainer ">
        <div className="workDiv left">
          <div className="dots"> <div></div> 
          <div></div> 
          <div></div>  </div>
          <div className="worKDescription"><h2>How to Create Interactive Animations Using React Spring</h2>
          <p>
          Adding interactive animations gives your React app that extra bit of flair, making it feel more  captivating for users. React Spring offers a powerful set of tools for developers to create animations that bring designs to life. In this guide, we’ll explore how to use React Spring to transform static elements into engaging, interactive experiences.
          </p>
          </div>
</div>
        </div>
        <div className="workContainer">
        <div className="workDiv right">
          <div className="dots"> <div></div> 
          <div></div> 
          <div></div>  </div>
          <div className="worKDescription"><h2>Idempotence in HTTP Methods – Explained with CRUD Examples</h2>
          <p>
          Imagine you have a button that opens a door each time it's pressed. However, this button doesn’t have the capability to close the door; once it’s open, it stays that way, even if you press it repeatedly. It simply maintains the state established by the first press.

This concept mirrors the behavior of idempotent HTTP methods. Just like the button, these methods ensure that multiple identical requests will have the same effect as a single request, without altering the state any further after the initial action.          </p>
          </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Works;
