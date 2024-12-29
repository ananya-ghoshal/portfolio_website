import React from "react";
import "../styles/Projects.css";
import Project from "./Project";
import project1 from "../images/myblog.png";
import project2 from "../images/gosolo.png";
import project3 from "../images/cake_shop.png";
import HTML from "../icons/html.svg";
import CSS from "../icons/css.svg";
import JS from "../icons/js.svg";
import SaSS from "../icons/sass.svg";
import ReactJS from "../icons/react.svg";
import Redux from "../icons/redux.svg";

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
            title: "Cake shop",
            link: "https://cake-shop.pages.dev/",
            text: "A visually appealing and user-friendly cake shop website built using React.js for a dynamic frontend experience and Redux for robust state management.",
            skill1: "React JS",
            skill1Img: ReactJS,
            skill2: "Redux",
            skill2Img: Redux,
            skill3: "CSS",
            skill3Img: CSS,
          }}
        />
      </div>
    </div>
  );
}

export default ProjectList;
