import React from "react";
import "../styles/HomePage.css";
import "../components/AboutMe";
import { Link } from "react-scroll";
import Blob from "../components/Blob";
import Typewriter from "../components/Typewriter";
import ProfileImage from "../images/portfolio.cutout.png";
import Up from "../images/up.png";
import Resume from "../images/Resume.pdf";
import ResumeIcon from "../icons/resume.svg";

function HomePage() {
  let myButton = document.getElementById("myBtn");
  window.onscroll = function () {
    scrollfunction();
  };
  // When the user scrolls down 20px from the top of the document, show the button
  function scrollfunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
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
                I am a Computer Science Engineer with three years of industry
                experience in frontend development. Throughout my career, I have
                collaborated with various clients and worked on diverse
                projects. I have built desktop applications from scratch and
                implemented UI changes to meet design requirements.
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

      <button type="button" id="myBtn" onClick={topFunction}>
        <img src={Up} style={{ height: "2rem", width: "2rem" }} />
      </button>
    </>
  );
}

export default HomePage;
