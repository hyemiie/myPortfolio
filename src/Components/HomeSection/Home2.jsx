import React from "react";
import Nav from "../Nav/Nav";
import "./home2.css";
import { ArrowRight } from "lucide-react";
import BottomNav from "../Nav/BottomNav";

const Home2 = () => {
  return (
    <div className="landing-div">
    <div className="landing-page">
      <Nav />
      {/* <div>
        <div className="section1">
          <p className="title">Explorations</p>
          <p className="heading">Work I'm Looking Into</p>
          <p className="heading-note">
            Instead of a list of things I “own”, this space is for work I've
            explored or contributed to, with short notes on why it matters to
            me.
          </p>
        </div>
        <div className="section2">
          I’m a developer who enjoys building secure, efficient tools that solve
          real problems. Whether I'm working on intuitive interfaces or scalable
          backend systems, I thrive at the intersection of functionality and
          user experience—where clean code meets real-world impact. Currently, I
          work as a Backend Developer at a fintech startup, where I help build
          secure systems for a financial app serving users across India.
          <div className="experience">
            My experience cuts across fast-paced startups and creative studios,
            which has helped me stay adaptable and solve problems across the
            stack. I’ve also contributed to frontend projects, making sure
            accessibility and performance are treated as core features—not
            afterthoughts.
          </div>
          <div className="section2b">
            Recently, I scratched my own itch by building an AI-powered tool
            that scans codebases, finds security vulnerabilities , and explains
            how to fix them—and why—in plain English. What started as a side
            project is now something I hope other developers find genuinely
            useful. When I'm not coding, you’ll probably find me exploring
            recipes from different cultures, deep into a book, or writing about
            the ones that stick with me.
          </div>
        </div>
      </div> */}

<div className="section1">
      <h2 className="role-title">Software Engineer · AI /Machine Learning</h2>
      <div className="intro">
I'm Yemi, a developer based in Mauritius, currently working on backend systems in fintech and spending most of my time outside work exploring application security, AI/ML, scalable software, cultural recipes, and football.
</div>
<p className="intro-paragraph">
I also contribute to freeCodeCamp, where I write articles that explore how technologies work and why they work the way they do.
</p>
      </div>
      <h3 className="link-heading">Follow my Journey</h3>
        <div className='hero-links'>
            
                <a href="/experience"> Places I've contributed to<ArrowRight size={16}/></a>
                <a href="/projects"> Projects Done  <ArrowRight size={16}/></a>
                <a href="/notes">Notes on Projects  <ArrowRight size={16}/></a>
                
            
        </div>
    </div>
            <BottomNav/>

    </div>
  );
};

export default Home2;
