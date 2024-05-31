import React from "react";
import "../styles/Projects.css";

function Project({ props }) {
  return (
    <div className="project-card">
      <img src={props.img} />
      <div className="project-details">
        <h3>{props.title}</h3>
        <a href={props.link} target="_blank">
          {props.link}
        </a>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Project;
