import "./about.css";

export default function About() {
  return (
    <div className="main-container">
      <div className="info-container">
        <div className="content">
          <h1>Hi there,</h1>
          <h1>I'm Long Nguyen</h1>
          <h3>| Software Engineer |</h3>
          <p>
            This is my introduction about who am I and (with about link)
            asdasdsad adsadsadasdasd asdsad asdada sdad asdasd
          </p>
        </div>

        <div className="contact-container">
          <a
            href="https://www.facebook.com/longnguyen1701/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../resources/icons/facebook.png")}
              alt="facebook icon"
            />
          </a>
          <a
            href="https://www.instagram.com/long._.nguyen17/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../resources/icons/instagram.png")}
              alt="instagram icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/long-nguyen-62a3a41b0/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../resources/icons/linkedin.png")}
              alt="linkedin icon"
            />
          </a>
          <a
            href="https://github.com/NightW0lfff/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              id="github-icon"
              src={require("../resources/icons/github.png")}
              alt="github icon"
            />
          </a>
        </div>
      </div>

      <div className="portfolio-image">
        <img
          src={require("../resources/images/guru.jpeg")}
          alt="Guru standing alone"
        />
      </div>
    </div>
  );
}
