import React from "react";
import "../styles/Projects.css";
import Project from "./Project";
import project1 from "../../dist/assets/myblog.png";
import project2 from "../../dist/assets/gosolo.png";

function ProjectList() {
  return (
    <div className="project-list">
      <p className="title">My Projects</p>
      <Project
        props={{
          img: project1,
          title: "My Blog",
          link: "https://ananya-blog.pages.dev/",
          text: "Personal blog website built using HTML,CSS and Vanilla JS. Added interactive features &animations using CSS and functionalities using vanilla JS.",
        }}
      />
      <Project
        props={{
          img: project2,
          title: "Travel Website",
          link: "https://go-solo.pages.dev/",
          text: "Dummy travel website built majorly using HTML,CSS,SaSS. Applied advanced concepts such as variables, mixins, responsive design principles, media queries etc.",
        }}
      />
    </div>
  );
}

export default ProjectList;
