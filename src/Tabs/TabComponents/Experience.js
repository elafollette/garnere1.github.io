import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="Experience">
      <div class="alt-vtl">
        <div class="alt-event">
          <p class="date">Aug. 2022 - Present</p>
          <p class="comp">Accenture</p>
          <p class="pos">Technology Architecture Delivery Analyst</p>
          <p class="txt"><ul>
            <li>Executed system integration testing (SIT) and user acceptance testing (UAT)</li>
            <li>Contributed to technical documentation and the development of incoming technologies such as A.I.</li>
            <li>Trained in agile methodologies, data analysis, and devOps processes</li>
          </ul></p>
        </div>
        <div class="alt-event right">
          <p class="date">Summer 2021</p>
          <p class="comp">Condo Roccia Koptiw LLP</p>
          <p class="pos">Summer Associate</p>
          <p class="txt"><ul>
            <li>Researched prior art for conflicting intellectual property of approaching devices</li>
            <li>Examined technical diagrams and preformed a comparative analysis against similar products</li>
            <li>Collaborated in a cross functional team of lawyers and engineers to evolve product designs</li>
          </ul></p>
        </div>
        <div class="alt-event">
          <p class="date">Aug. 2019 - May 2020</p>
          <p class="comp">Purdue University</p>
          <p class="pos">Engineering Undergraduate Teaching Assistant</p>
          <p class="txt"><ul>
            <li>Assistant to a professor for a first-year engineering course at Purdue University</li>
            <li>Taught basics of the C language for new programmers</li>
            <li>Serviced over 100 engineering students with data analysis projects involving MATLAB and Microsoft Excel</li>
          </ul></p>
        </div>
      </div>
    </div>
  );
};
export default Experience;