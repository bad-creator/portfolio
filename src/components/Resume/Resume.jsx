import "./Resume.css";
import ResumeInfoCard from "./ResumeInfoCard/ResumeInfoCard";

export default function Resume() {
  return (
    <main className="resume">
      <div className="container">
        <div className="resume-sidebar">
          <div className="resumme-sidebar-header">
            <h1>Whi hire me?</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
              repellendus quos
            </p>
          </div>
          <ul className="resume-sidebar-nav">
            <li className="resume-sidebar-nav-item active">experience</li>
            <li className="resume-sidebar-nav-item">education</li>
            <li className="resume-sidebar-nav-item">skils</li>
            <li className="resume-sidebar-nav-item">about me</li>
          </ul>
        </div>
        <div className="resume-info">
          <div className="resume-info-header">
            <h2>My experience</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              quidem impedit saepe dolorem beatae vitae laudantium, consequuntur
              voluptates.
            </p>
          </div>
          <div className="resume-info-details">
            <ResumeInfoCard />
            <ResumeInfoCard />
            <ResumeInfoCard />
            <ResumeInfoCard />
          </div>
          {/* <div className="resume-info-icons"></div> */}
          {/* <div className="resume-info-about"></div> */}
        </div>
      </div>
    </main>
  );
}
