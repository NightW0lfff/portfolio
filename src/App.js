import Topnav from "./components/topnav";
import Home from "./pages/home";
import About from "./pages/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Topnav />
      {/* <div className="main-container"> */}
      <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      {/* </div> */}
      <div className="footbar" />
    </div>
  );
}

export default App;
