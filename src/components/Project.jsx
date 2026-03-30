import "../styles/Projects.css";

function Project({ props }) {
  return (
    <div className="project-card">
      <a href={props.link} target="_blank">
        <div className="image-container">
          <img src={props.img} alt={props.title} />
          <div className="project-details">
            <div className="details-content">
              <h3>{props.title}</h3>
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
        </div>
      </a>
    </div>
  );
}

export default Project;
