import Topnav from "./components/topnav";
import Home from "./pages/home";
import About from "./pages/about";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Topnav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div className="footbar" />
    </div>
  );
}

export default App;
