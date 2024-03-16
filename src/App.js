import Topnav from "./components/topnav.js";
import Home from "./pages/home.js";

function App() {
  return (
    <div className="main">
      <Topnav />
      <div className="body">
        <Home />
      </div>
    </div>
  );
}

export default App;
