import React from "react";
import "../styles/AboutMe.css";
import HTML from "../icons/html.svg";
import CSS from "../icons/css.svg";
import JS from "../icons/js.svg";
import ReactJS from "../icons/react.svg";
import Redux from "../icons/redux.svg";
import TailwindCSS from "../icons/tailwind.svg";
import SaSS from "../icons/sass.svg";
import Bootstrap from "../icons/bootstrap.svg";
import Vite from "../icons/vite.svg";
import Jest from "../icons/jest.svg";
import GIT from "../icons/git.svg";
import Webpack from "../icons/webpack.svg";

function AboutMe() {
  function openCity(evt, skillTab) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(skillTab).style.display = "flex";
    evt.currentTarget.className += " active";
  }
  return (
    <section className="aboutMe" id="about">
      <div className="skills_card">
        <div className="skills_header">
          <p>Technical Skills</p>
        </div>

        <div className="tab">
          <button
            type="button"
            id="allTab"
            className="tablinks active"
            onClick={(e) => openCity(e, "All")}
          >
            All
          </button>
          <button
            type="button"
            className="tablinks"
            onClick={(e) => openCity(e, "Languages")}
          >
            Languages
          </button>
          <button
            type="button"
            className="tablinks"
            onClick={(e) => openCity(e, "Libraries")}
          >
            Libraries
          </button>
          <button
            type="button"
            className="tablinks"
            onClick={(e) => openCity(e, "Tools")}
          >
            Tools
          </button>
        </div>

        <div id="All" className="tabcontent" style={{ display: "flex" }}>
          <div className="skill">
            <div className="skillIcon">
              <img src={HTML} alt="" />
            </div>
            <div className="skillName">HTML5</div>
          </div>

          <div className="skill">
            <div className="skillIcon">
              <img src={CSS} alt="" />
            </div>
            <div className="skillName">CSS3</div>
          </div>

          <div className="skill">
            <div className="skillIcon">
              <img src={JS} alt="" />
            </div>
            <div className="skillName">JavaScript</div>
          </div>

          <div className="skill">
            <div className="skillIcon">
              <img src={ReactJS} alt="" />
            </div>
            <div className="skillName">ReactJS</div>
          </div>

          <div className="skill">
            <div className="skillIcon">
              <img src={Redux} alt="" />
            </div>
            <div className="skillName">Redux</div>
          </div>
          <div className="skill">
            <div className="skillIcon">
              <img src={TailwindCSS} alt="" />
            </div>
            <div className="skillName">TailwindCSS</div>
          </div>

          <div className="skill">
            <div className="skillIcon">
              <img src={SaSS} alt="" />
            </div>
            <div className="skillName">SaSS</div>
          </div>

          <div className="skill">
            <div className="skillIcon">
              <img src={Bootstrap} alt="" />
            </div>
            <div className="skillName">Bootstrap</div>
          </div>

          <div className="skill">
            <div className="skillIcon">
              <img src={Vite} alt="" />
            </div>
            <div className="skillName">Vite</div>
          </div>

          <div className="skill">
            <div className="skillIcon">
              <img src={Jest} alt="" />
            </div>
            <div className="skillName">Jest</div>
          </div>
          <div className="skill">
            <div className="skillIcon">
              <img src={GIT} alt="" />
            </div>
            <div className="skillName">GIT</div>
          </div>
          <div className="skill">
            <div className="skillIcon">
              <img src={Webpack} alt="" />
            </div>
            <div className="skillName">Webpack</div>
          </div>
        </div>

        <div id="Languages" className="tabcontent">
          <div className="skill">
            <div className="skillIcon">
              <img src={HTML} alt="" />
            </div>
            <div className="skillName">HTML5</div>
          </div>

          <div className="skill">
            <div className="skillIcon">
              <img src={CSS} alt="" />
            </div>
            <div className="skillName">CSS3</div>
          </div>

          <div className="skill">
            <div className="skillIcon">
              <img src={JS} alt="" />
            </div>
            <div className="skillName">JavaScript</div>
          </div>
        </div>

        <div id="Libraries" className="tabcontent">
          <div className="skill">
            <div className="skillIcon">
              <img src={ReactJS} alt="" />
            </div>
            <div className="skillName">ReactJS</div>
          </div>

          <div className="skill">
            <div className="skillIcon">
              <img src={Redux} alt="" />
            </div>
            <div className="skillName">Redux</div>
          </div>
          <div className="skill">
            <div className="skillIcon">
              <img src={TailwindCSS} alt="" />
            </div>
            <div className="skillName">TailwindCSS</div>
          </div>

          <div className="skill">
            <div className="skillIcon">
              <img src={SaSS} alt="" />
            </div>
            <div className="skillName">SaSS</div>
          </div>
          <div className="skill">
            <div className="skillIcon">
              <img src={Bootstrap} alt="" />
            </div>
            <div className="skillName">Bootstrap</div>
          </div>
        </div>

        <div id="Tools" className="tabcontent">
          <div className="skill">
            <div className="skillIcon">
              <img src={Vite} alt="" />
            </div>
            <div className="skillName">Vite</div>
          </div>

          <div className="skill">
            <div className="skillIcon">
              <img src={Jest} alt="" />
            </div>
            <div className="skillName">Jest</div>
          </div>
          <div className="skill">
            <div className="skillIcon">
              <img src={GIT} alt="" />
            </div>
            <div className="skillName">GIT</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
