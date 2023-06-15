import React from "react";
import "./Home.css";
import computer from "../../Assets/computer.png"

const Home = () => {
  return (
    <div className="home">
      <img src={computer} className="computer" alt="computer" />
      <div className="HomeText">
        <h1>About Me:</h1>
        <p>I am a programmer whose primary interest is in software development.
          In May 2022, I graduated from Purdue University with a degree in computer engineering.
          Shortly after, I started working as a Tech Architecture Delivery Analyst where I have
           continued to hone my existing skills while continuing to advance with developing innovations
            and technologies in the field.
        </p>
        <div className="skills">
          <h2>Skills</h2>
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>React.js</li>
            <li>SQL</li>
            <li>MATLAB</li>
            <li>OpenGL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Microsoft Products</li>
            <li>MongoDB</li>
            <li>AWS</li>
            <li>Agile Methodology</li>
            <li>Oracle CPQ</li>
            <li>Business Requirements Analysis</li>
            <li>Test Execution and Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Home;