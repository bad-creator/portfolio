import "./App.css";
import "@fontsource/jetbrains-mono";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Resume from "./components/Resume/Resume";
import React, { useState } from "react";

export default function App() {
  const [activeComponent, setActiveComponent] = useState("home");
  return (
    <>
      <div className="conntainer">
        <Navbar
          setActiveComponent={setActiveComponent}
          activeComponent={activeComponent}
        />
        {activeComponent === "home" && <Home />}
        {activeComponent === "services" && <Services />}
        {activeComponent === "resume" && <Resume />}
      </div>
    </>
  );
}
