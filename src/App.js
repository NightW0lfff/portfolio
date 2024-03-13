import Topnav from "./components/topnav.js";
import About from "./pages/about.js";

function App() {
  return (
    <div className="main">
      <Topnav />
      <div className="body">
        <About />
      </div>
    </div>
  );
}

export default App;
