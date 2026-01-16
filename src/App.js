import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home2 from "./Components/HomeSection/Home2";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/workSection/Works";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home2 />} />      
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/experience" element={<Experience />} /> 
        <Route path="/notes" element={<Works/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
