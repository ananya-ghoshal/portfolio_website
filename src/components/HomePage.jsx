import React from "react";
import "../styles/HomePage.css";
import GifImg from "./balloon.gif";
import "../components/AboutMe";
import { Link } from "react-scroll";
import Typewriter from "../components/Typewriter";

function HomePage() {
  return (
    <section className="homepage" id="homepage">
      <div className="homepage__leftGif"></div>
      <div className="homepage__header">
        <span className="homepage__header__name">I'm Ananya</span>
        <br />
        <span className="homepage__header__details">
          <Typewriter text="a frontend developer !" delay={100} />
        </span>
        <br />
        <Link to="aboutMe" smooth={true}>
          <button className="button__about">Know more about me</button>
        </Link>
      </div>
      <div className="homepage__rightGif">
        <img src={GifImg} alt="" />
      </div>
    </section>
  );
}

export default HomePage;
