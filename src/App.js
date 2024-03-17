import Topnav from "./components/topnav.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Topnav />
      <BrowserRouter basename="">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <div className="footbar" />
    </div>
  );
}

export default App;
