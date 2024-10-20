import About from "./About";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Welcome from "./Welcome";
import Skills from "./Skills";
import Connect from "./Connect";
import React from "react";


function Layout(){
    return(
        <>
        <div className="bg-[#09101a]">
            <Navbar />
            <Welcome />
            <About />
            <Projects />
            <Skills />
            <Connect />
        </div>
        </>
    );
}

export default Layout;