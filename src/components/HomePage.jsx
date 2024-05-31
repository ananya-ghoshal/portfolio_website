import React from "react";
import "../styles/HomePage.css";
import "../components/AboutMe";
import { Link } from "react-scroll";
import Typewriter from "../components/Typewriter";
import ProfileImage from "../images/profilepicture.webp";

function HomePage() {
  return (
    <section className="homepage" id="homepage">
      <div className="homepage__left">
        <span className="homepage__header__name">I'm Ananya</span>
        <br />
        <span className="homepage__header__details">
          <Typewriter text="a frontend developer !" delay={200} />
        </span>
        <br />
      </div>
      <div className="homepage__right">
        <div className="idea" id="idea1">
          {" "}
        </div>
        <div className="idea" id="idea2">
          {" "}
        </div>
        <div className="idea" id="idea3">
          {" "}
        </div>
        <div className="idea" id="idea4">
          {" "}
        </div>
        <div className="aboutMe__img">
          <img src={ProfileImage} alt=""></img>
        </div>
        <Link to="aboutMe" smooth={true}>
          <button className="button__about">Know more about me</button>
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
