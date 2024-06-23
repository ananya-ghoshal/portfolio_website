import React from "react";
import "../../src/styles/NavBar.css";
import { Link } from "react-scroll";
import "../components/AboutMe";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="homepage" smooth={true}>
        <div className="navbar__links">
          <button>Home</button>
        </div>
      </Link>

      <Link to="aboutMe" smooth={true}>
        <div className="navbar__links">
          <button>About</button>
        </div>
      </Link>

      <Link to="project-list" smooth={true}>
        <div className="navbar__links">
          <button>Projects</button>
        </div>
      </Link>

      <Link to="contact" smooth={true}>
        <div className="navbar__links">
          <button>Contact</button>
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
