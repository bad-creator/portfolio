import "./App.css";
import "@fontsource/jetbrains-mono";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";

export default function App() {
  return (
    <>
      <div className="conntainer">
        <Navbar></Navbar>
        {/* <Home></Home> */}
        <Services />
      </div>
    </>
  );
}
