import "./topnav.css";
import Dropdown from "./Dropdown";

export default function Topnav() {
  return (
    <div className="topbar">
      <div className="title-box">
        <a href="/">
          <img
            className="logo"
            src={require("../resources/icons/code-book.png")}
            alt="coding book"
          />
        </a>
        <a href="/">
          <h2 className="title">Software Engineer</h2>
        </a>
      </div>
      <Dropdown />
    </div>
  );
}
