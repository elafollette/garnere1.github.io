import React, { useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import Home from "./TabComponents/Home";
import Education from "./TabComponents/Education";
import Experience from "./TabComponents/Experience";
import Projects from "./TabComponents/Projects";
import Contact from "./TabComponents/Contact";
 
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem title="Home" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Education" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Experience" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Projects" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Contact" id="tab5" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <Home />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <Education />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <Experience />
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
          <Projects />
        </TabContent>
        <TabContent id="tab5" activeTab={activeTab}>
          <Contact />
        </TabContent>
      </div>
    </div>
  );
};
 
export default Tabs;