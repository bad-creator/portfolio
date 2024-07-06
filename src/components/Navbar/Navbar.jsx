import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h3>
          Resume<span>.</span>
        </h3>
      </div>
      <div className="navlist">
        <ul>
          <li>home</li>
          <li>services</li>
          <li>resume</li>
          <li>work</li>
          <li>contact</li>
        </ul>
        <button className="btn">Hire me</button>
      </div>
    </nav>
  );
}
