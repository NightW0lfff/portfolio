import "./Dropdown.css";
import React from "react";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [smallVer, setSmall] = useState(() => {
    return window.innerWidth < 650;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 750) {
        setSmall(true);
      } else {
        setSmall(false);
      }
    };

    // Call handleResize immediately to set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    // window.addEventListener("resize");

    // Clean-up function to remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const changeState = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div
      className={smallVer ? "list-container small" : "list-container"}
      style={{
        flexFlow: smallVer ? (isOpen ? "column-reverse" : "column") : "initial",
      }}
    >
      <div
        className={smallVer ? "links-container small" : "links-container"}
        style={{
          display: isOpen ? "flex" : "none",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="">Projects</Link>
        <Link to="">Resume</Link>
      </div>

      {!isOpen ? (
        <List
          className="list-icon"
          size={25}
          color="#f1f8ff"
          onClick={changeState}
        />
      ) : (
        <X
          className="list-icon"
          size={25}
          color="#f1f8ff"
          onClick={changeState}
        />
      )}
    </div>
  );
}
