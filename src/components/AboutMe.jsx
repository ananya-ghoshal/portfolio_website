import React from "react";
import "../styles/AboutMe.css";
import HTML from "../icons/html.png";
import CSS from "../icons/css.png";
import JS from "../icons/js.png";
import ReactJS from "../icons/react.png";
import Redux from "../icons/redux.png";
import TailwindCSS from "../icons/tailwind.png";
import SaSS from "../icons/sass.png";
import Bootstrap from "../icons/bootstrap.png";
import Vite from "../icons/vite.png";
import Jest from "../icons/jest.png";
import GIT from "../icons/git.png";

function AboutMe() {
  return (
    <section className="aboutMe" id="about">
      <div className="aboutMe_card">
        <div className="aboutMe__text">
          <h3>Hello!</h3>
          <br />
          <p>
            I'm a Computer Science Engineer with 3 years of industry experience.
            <br />
            I've designed,developed, and maintained captivating user interfaces
            along the way & am paasionate about expanding my learning horizons
            as I go!
          </p>
        </div>
        <div className="skills_header">
          <p>My Tech Skills</p>
        </div>
        <div className="skillSet">
          {/* skills*/}
          <div className="skill">
            {" "}
            <div
              className="skillName

          "
            >
              HTML5
            </div>
            <div className="skillIcon">
              <img src={HTML} alt="" />
            </div>
          </div>

          <div className="skill">
            <div
              className="skillName

          "
            >
              CSS3
            </div>
            <div className="skillIcon">
              <img src={CSS} alt="" />
            </div>
          </div>

          <div className="skill">
            <div
              className="skillName

          "
            >
              JavaScript
            </div>
            <div className="skillIcon">
              <img src={JS} alt="" />
            </div>
          </div>
          <div className="skill">
            <div
              className="skillName

          "
            >
              ReactJS
            </div>
            <div className="skillIcon">
              <img src={ReactJS} alt="" />
            </div>
          </div>

          <div className="skill">
            <div
              className="skillName

          "
            >
              Redux
            </div>
            <div className="skillIcon">
              <img src={Redux} alt="" />
            </div>
          </div>
          <div className="skill">
            {" "}
            <div
              className="skillName

          "
            >
              TailwindCSS
            </div>
            <div className="skillIcon">
              <img src={TailwindCSS} alt="" />
            </div>
          </div>

          <div className="skill">
            <div
              className="skillName

          "
            >
              SaSS
            </div>
            <div className="skillIcon">
              <img src={SaSS} alt="" />
            </div>
          </div>
          <div className="skill">
            <div
              className="skillName

          "
            >
              Bootstrap
            </div>
            <div className="skillIcon">
              <img src={Bootstrap} alt="" />
            </div>
          </div>

          <div className="skill">
            <div
              className="skillName

          "
            >
              Vite
            </div>
            <div className="skillIcon">
              <img src={Vite} alt="" />
            </div>
          </div>
          <div className="skill">
            <div
              className="skillName

          "
            >
              Jest
            </div>
            <div className="skillIcon">
              <img src={Jest} alt="" />
            </div>
          </div>
          <div className="skill">
            <div
              className="skillName

          "
            >
              GIT
            </div>
            <div className="skillIcon">
              <img src={GIT} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
