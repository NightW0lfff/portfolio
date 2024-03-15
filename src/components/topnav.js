import "./topnav.css";

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

      <div className="links-container">
        <a href="#">Home</a>
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Resume</a>
      </div>
      <img
        className="list-icon"
        src={require("../resources/icons/list.png")}
        alt="list icon"
      />
    </div>
  );
}
