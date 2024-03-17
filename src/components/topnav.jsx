import "./topnav.css";
import Dropdown from "./Dropdown";

export default function Topnav() {
  return (
    <div className="topbar">
      <div className="title-box">
        <img
          className="logo"
          src={require("../resources/icons/code-book.png")}
          alt="coding book"
        />
        <h2 className="title">Software Engineer</h2>
      </div>
      <Dropdown />
    </div>
  );
}
