import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="Projects">
      <ul class="tilesWrap">
        <li>
          <h2>01</h2>
          <h3>emilyanngarner.com</h3>
          <p>
            This website was written entirely from scratch by myself.
            <br></br>
            <br></br>
            Skills used: Javascript, React, HTML, CSS
          </p>
        </li>
        <li>
          <h2>02</h2>
          <h3>MongoDB Database Manipulator</h3>
          <p>
            Program that creates and edits a repository of food that the user may have in their home. 
            This program is able to retrieve queries and add existing items to the database based on user input.
            <br></br>
            <br></br>
            Skills used: Javascript, Node.js, MongoDB
          </p>
          <a href="https://github.com/garnere1/mongo.git" target = "_blank" rel="noreferrer noopener"><button>View on Github</button></a>
        </li>
        <li>
          <h2>03</h2>
          <h3>XML Parser for an interactive videogame</h3>
          <p>
            Program that parses and XML file to create the layout of a game. This game featured multiple
            interactive commands for the user and required them to complete tasks in order to advance.
            <br></br>
            <br></br>
            Skills used: C++, Full-stack development
          </p>
          <a href="https://github.com/garnere1/XMLParser-VideoGame.git" target = "_blank" rel="noreferrer noopener"><button>View on Github</button></a>
        </li>
        <li>
          <h2>04</h2>
          <h3>Senior Design Project</h3>
          <p>
            Collaborated with a team of 3 other students to create a "Kuerig" type drink machine. 
            
          </p>
        </li>
      </ul>
    </div>
  );
};
export default Projects;