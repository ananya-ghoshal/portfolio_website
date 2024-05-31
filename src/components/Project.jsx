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
        <div className="tech-used">
          <h5>Technology Used</h5>
          <div className="tech-icons">
            <div className="tech-skill">
              <div className="skillName">{props.skill1}</div>
              <div className="skillIcon">
                <img src={props.skill1Img} alt="" />
              </div>
            </div>

            <div className="tech-skill">
              <div className="skillName">{props.skill2}</div>
              <div className="skillIcon">
                <img src={props.skill2Img} alt="" />
              </div>
            </div>

            <div className="tech-skill">
              <div className="skillName">{props.skill3}</div>
              <div className="skillIcon">
                <img src={props.skill3Img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
