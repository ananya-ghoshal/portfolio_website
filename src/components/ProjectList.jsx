import React from "react";
import "../styles/Projects.css";
import Project from "./Project";
import project1 from "../images/myblog.png";
import project2 from "../images/gosolo.png";
import project3 from "../images/WeatherApp.png";
import HTML from "../icons/html.svg";
import CSS from "../icons/css.svg";
import JS from "../icons/js.svg";
import SaSS from "../icons/sass.svg";
import ReactJS from "../icons/react.svg";

function ProjectList() {
  return (
    <div className="project-list">
      <p className="title">Personal Projects</p>
      <div>
        <Project
          props={{
            img: project1,
            title: "My Blog",
            link: "https://ananya-blog.pages.dev/",
            text: "Personal blog website built using HTML,CSS and Vanilla JS. Added interactive features &animations using CSS and functionalities using vanilla JS.",
            skill1: "HTML",
            skill1Img: HTML,
            skill2: "CSS",
            skill2Img: CSS,
            skill3: "JS",
            skill3Img: JS,
          }}
        />
        <Project
          props={{
            img: project2,
            title: "Travel Website",
            link: "https://go-solo.pages.dev/",
            text: "Dummy travel website built majorly using HTML,CSS,SaSS. Applied advanced concepts such as variables, mixins, responsive design principles, media queries etc.",
            skill1: "HTML",
            skill1Img: HTML,
            skill2: "CSS",
            skill2Img: CSS,
            skill3: "SaSS",
            skill3Img: SaSS,
          }}
        />
        <Project
          props={{
            img: project3,
            title: "Weather App",
            link: "https://weather-app-anw.pages.dev/",
            text: "Weather application built majorly using React JS.",
            skill1: "HTML",
            skill1Img: HTML,
            skill2: "CSS",
            skill2Img: CSS,
            skill3: "React JS",
            skill3Img: ReactJS,
          }}
        />
      </div>
    </div>
  );
}

export default ProjectList;
