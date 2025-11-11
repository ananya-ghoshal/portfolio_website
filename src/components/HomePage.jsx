import React from "react";
import "../styles/HomePage.css";
import "../components/AboutMe";
import { Link } from "react-scroll";
import Blob from "../components/Blob";
import Typewriter from "../components/Typewriter";
import ProfileImage from "../images/portfolio.cutout.webp";
import Resume from "../images/AnanyaGhoshal.pdf";
import ResumeIcon from "../icons/resume.svg";

function HomePage() {
  return (
    <>
      <section className="homepage" id="homepage">
        <div className="homepage__left">
          <span className="homepage__header__name">I'm Ananya</span>
          <span className="homepage__header__details">
            <Typewriter text="a frontend developer !" delay={200} />
            <br />
            <div className="homepageButtons">
              <Link to="aboutMe" smooth={true}>
                <button className="button__about">Know more about me</button>
              </Link>
              <a href={Resume} target="_blank">
                <button className="CV">
                  <img src={ResumeIcon} />
                  Resume
                </button>
              </a>
            </div>
            <div
              className="details"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <p>
                I am a Computer Science Engineer with more than 4 years of
                industry experience in frontend development. Throughout my
                career, I have collaborated with various clients and worked on
                diverse projects. I have built desktop applications from scratch
                and implemented UI changes to meet design requirements.
              </p>
            </div>
          </span>
        </div>
        <div className="homepage__right">
          <div className="aboutMe__img">
            <Blob />
            <img src={ProfileImage} alt=""></img>
          </div>
        </div>
      </section>
      {/* SCROLL BUTTON  */}
    </>
  );
}

export default HomePage;
