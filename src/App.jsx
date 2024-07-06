import "./App.css";
import "@fontsource/jetbrains-mono";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <div className="conntainer">
        <Navbar></Navbar>
        <Home></Home>
      </div>
    </>
  );
}

export default App;
