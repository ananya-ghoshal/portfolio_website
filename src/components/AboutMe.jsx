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

function AboutMe() {
  function openCity(evt, skillTab) {
    // Declare all variables
    let i, tabcontent, tablinks, allTab;
    allTab = document.getElementById("allTab");

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(skillTab).style.display = "flex";
    evt.currentTarget.className += " active";
  }
  return (
    <section className="aboutMe" id="about">
      <div className="aboutMe__text">
        <h3>Hello!</h3>
        <br />
        <p>
          I'm a Computer Science Engineer with 3 years of industry experience.
          <br />
          I've designed,developed, and maintained captivating user interfaces
          along the way & am passionate about expanding my learning horizons as
          I go!
        </p>
      </div>
      <div className="skills_card">
        <div className="skills_header">
          <p>My Tech Skills</p>
        </div>

        {/* Tab links */}
        <div className="tab">
          <button
            type="button"
            id="allTab"
            className="tablinks"
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

        {/* Tab content  */}

        {/* All Tab  */}
        <div id="All" className="tabcontent" style={{ display: "flex" }}>
          <div className="skill">
            <div className="skillName">HTML5</div>
            <div className="skillIcon">
              <img src={HTML} alt="" />
            </div>
          </div>

          <div className="skill">
            <div className="skillName">CSS3</div>
            <div className="skillIcon">
              <img src={CSS} alt="" />
            </div>
          </div>

          <div className="skill">
            <div className="skillName">JavaScript</div>
            <div className="skillIcon">
              <img src={JS} alt="" />
            </div>
          </div>

          <div className="skill">
            <div className="skillName">ReactJS</div>
            <div className="skillIcon">
              <img src={ReactJS} alt="" />
            </div>
          </div>

          <div className="skill">
            <div className="skillName">Redux</div>
            <div className="skillIcon">
              <img src={Redux} alt="" />
            </div>
          </div>
          <div className="skill">
            <div className="skillName">TailwindCSS</div>
            <div className="skillIcon">
              <img src={TailwindCSS} alt="" />
            </div>
          </div>

          <div className="skill">
            <div className="skillName">SaSS</div>
            <div className="skillIcon">
              <img src={SaSS} alt="" />
            </div>
          </div>

          <div className="skill">
            <div className="skillName">Bootstrap</div>
            <div className="skillIcon">
              <img src={Bootstrap} alt="" />
            </div>
          </div>

          <div className="skill">
            <div className="skillName">Vite</div>
            <div className="skillIcon">
              <img src={Vite} alt="" />
            </div>
          </div>

          <div className="skill">
            <div className="skillName">Jest</div>
            <div className="skillIcon">
              <img src={Jest} alt="" />
            </div>
          </div>
          <div className="skill">
            <div className="skillName">GIT</div>
            <div className="skillIcon">
              <img src={GIT} alt="" />
            </div>
          </div>
        </div>

        {/* Languages Tab  */}

        <div id="Languages" class="tabcontent">
          <div className="skill">
            <div className="skillName">HTML5</div>
            <div className="skillIcon">
              <img src={HTML} alt="" />
            </div>
          </div>

          <div className="skill">
            <div className="skillName">CSS3</div>
            <div className="skillIcon">
              <img src={CSS} alt="" />
            </div>
          </div>

          <div className="skill">
            <div className="skillName">JavaScript</div>
            <div className="skillIcon">
              <img src={JS} alt="" />
            </div>
          </div>
        </div>

        {/* Libraries tab  */}

        <div id="Libraries" className="tabcontent">
          <div className="skill">
            <div className="skillName">ReactJS</div>
            <div className="skillIcon">
              <img src={ReactJS} alt="" />
            </div>
          </div>

          <div className="skill">
            <div className="skillName">Redux</div>
            <div className="skillIcon">
              <img src={Redux} alt="" />
            </div>
          </div>
          <div className="skill">
            <div className="skillName">TailwindCSS</div>
            <div className="skillIcon">
              <img src={TailwindCSS} alt="" />
            </div>
          </div>

          <div className="skill">
            <div className="skillName">SaSS</div>
            <div className="skillIcon">
              <img src={SaSS} alt="" />
            </div>
          </div>
          <div className="skill">
            <div className="skillName">Bootstrap</div>
            <div className="skillIcon">
              <img src={Bootstrap} alt="" />
            </div>
          </div>
        </div>

        {/* Tools tab  */}
        <div id="Tools" class="tabcontent">
          <div className="skill">
            <div className="skillName">Vite</div>
            <div className="skillIcon">
              <img src={Vite} alt="" />
            </div>
          </div>

          <div className="skill">
            <div className="skillName">Jest</div>
            <div className="skillIcon">
              <img src={Jest} alt="" />
            </div>
          </div>
          <div className="skill">
            <div className="skillName">GIT</div>
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
