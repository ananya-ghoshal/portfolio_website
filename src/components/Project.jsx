import React from "react";
import "../styles/Projects.css";
import RedirectIcon from "../icons/redirectWhite.png";

function Project({ props }) {
  return (
    <div className="project-card">
      <a href={props.link} target="_blank">
        <img src={props.img} />
      </a>
      <div className="project-details">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3>{props.title}</h3>
          <a href={props.link} target="_blank">
            <img
              src={RedirectIcon}
              style={{
                height: "1.8rem",
                width: "1.8rem",
                paddingLeft: "1rem",
                paddingTop: "0.25rem",
              }}
            />
            {/* {props.link} */}
          </a>
        </div>
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
