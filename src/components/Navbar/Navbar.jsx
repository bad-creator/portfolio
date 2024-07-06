import "./Navbar.css";

export default function Navbar({ setActiveComponent, activeComponent }) {
  const handleNavClick = (component) => {
    setActiveComponent(component);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <h3>
          Resume<span>.</span>
        </h3>
      </div>
      <div className="navlist">
        <ul>
          <li
            className={activeComponent === "home" ? "active" : ""}
            onClick={() => handleNavClick("home")}
          >
            home
          </li>
          <li
            className={activeComponent === "services" ? "active" : ""}
            onClick={() => handleNavClick("services")}
          >
            services
          </li>
          <li
            className={activeComponent === "resume" ? "active" : ""}
            onClick={() => handleNavClick("resume")}
          >
            resume
          </li>
          {/* <li
            className={activeComponent === "home" ? "active" : ""}
            onClick={() => handleNavClick("home")}
          >
            work
          </li>
          <li
            className={activeComponent === "home" ? "active" : ""}
            onClick={() => handleNavClick("home")}
          >
            contact
          </li> */}
        </ul>
        <button className="btn">Hire me</button>
      </div>
    </nav>
  );
}
