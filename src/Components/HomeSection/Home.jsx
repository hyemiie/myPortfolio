import React, { useState, useEffect, useRef } from "react";
import "./home.css";
import lightImage from "../../Images/rb_62407.png";
import heroImage from "../../Images/heroImage.gif";
import "./Responsivehome.css";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import Works from "../workSection/Works";
import About from "../About/About";
import { Search, GithubIcon, Sun, Moon, BookOpen } from "lucide-react";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Refs for smooth scroll
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const articlesRef = useRef(null);

  const sectionRefs = {
    about: aboutRef,
    experience: experienceRef,
    projects: projectsRef,
    articles: articlesRef,
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  const toggleTheme = () => {
    console.log('clicked')
    setDarkMode(!darkMode);

  };

  const sections = [
    {
      id: "about",
      title: "Read more about me ->",
    },
    {
      id: "experience",
      title: "Experience",
      overview: ["Protip", "urbco", "tysu", "freecodecamp"],
    },
    {
      id: "projects",
      title: "Projects",
      overview: [
        "Security scanner Package for Devs",
        "Markdown Editor",
        "Work Chat App",
      ],
    },
    {
      id: "articles",
      title: "Articles",
      overview: [
        "JWT for authentication",
        "Interactive Animation with React Spring",
        "Idempotence in HTTP methods",
        "Conditional rendering in react",
      ],
    },
  ];

  const getSubItemEmoji = (parentId, item) => {
    const key = item.toLowerCase();
    if (parentId === "experience") {
      if (key.includes("protip")) return "🧠";
      if (key.includes("urbco")) return "🏙️";
      if (key.includes("tysu")) return "💼";
      if (key.includes("freecodecamp")) return "🌐";
    }
    if (parentId === "projects") {
      if (key.includes("security")) return "🔒";
      if (key.includes("markdown")) return "📝";
      if (key.includes("chat")) return "💬";
    }
    if (parentId.toLowerCase() === "articles") {
      if (key.includes("jwt")) return "🔐";
      if (key.includes("animation")) return "🎞️";
      if (key.includes("idempotence")) return "🔁";
      if (key.includes("conditional")) return "⚙️";
    }
    return "🔹";
  };

  return (
    <div className="homePage">
      <nav>
        <div className="navIcons">
       
            {darkMode  ? <Sun size={20} onClick={toggleTheme} aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}/> : <Moon size={20} onClick={toggleTheme}/>}
          <a
            href="https://github.com/hyemiie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.sitepoint.com/author/yojedapo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen size={20} />
          </a>
        </div>
      </nav>

      <div className="homeBody">
        <div className="firstDiv">
          <div className="personIntro">
            <h2 className="name">Yemi Ojedapo</h2>
            <h2 className="jobtitle">Software developer</h2>
            <p>
              I build{" "}
              <span className="highlight" data-text="software">
                software
              </span>{" "}
              and{" "}
              <span className="highlight" data-text="write">
                write
              </span>{" "}
              to better understand how and why we{" "}
              <span className="highlight" data-text="build">
                build
              </span>{" "}
              the way we do.
              <p>
                This is a collection of a few of the{" "}
                <span className="highlight" data-text="projects">
                  projects
                </span>{" "}
                I’ve worked on.
              </p>
            </p>
            {/* <h2>Read more about me →</h2> */}
          </div>

          <div className="sidebar">
            <div className="section-list">
              {sections.map((section) => (
                <div key={section.id} className="nav-section">
                  <a
                    href={`#${section.id}`}
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      sectionRefs[section.id]?.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {section.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="secondDiv">
          <div id="about" ref={aboutRef}>
            {" "}
            <div className="sectionHeading aboutTitle">
              <h2 className="sectionTitle">About me </h2>{" "}
              {/* <div className="sectionBorder"></div> */}
            </div>
            <About />
          </div>
          <div id="experience" ref={experienceRef}>
            <Experience />
          </div>
          <div id="projects" ref={projectsRef}>
            <Projects />
          </div>
          <div id="articles" ref={articlesRef}>
            <Works />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
