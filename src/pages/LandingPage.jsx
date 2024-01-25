import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SidebarExpanded from "../components/SidebarExpanded";

const LandingPage = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  return (
    <div className="landing-page">
      <Navbar setSidebarExpanded={setSidebarExpanded} />
      <div className="main">
        <Sidebar />
        <SidebarExpanded
          sidebarExpanded={sidebarExpanded}
          setSidebarExpanded={setSidebarExpanded}
        />
      </div>
    </div>
  );
};

export default LandingPage;
