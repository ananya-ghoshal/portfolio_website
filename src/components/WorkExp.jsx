import React from "react";
import "../styles/WorkExp.css";

function WorkExp() {
  return (
    <div className="workExp">
      <h3>Work Experience</h3>
      <hr style={{ width: "10rem" }} />
      <div className="experience_section">
        <div className="experiences">
          <div className="experience">
            <h5>System Engineer</h5>
            <h5>Tata Consultancy Services</h5>
            <p>(OCT ’22-MAR ‘24)</p>
            <ul>
              <li>
                Built and maintained the user interface (UI) components of the
                Oracle CPQ website using HTML, CSS, and JavaScript.
              </li>
              <li>
                Implemented responsive design techniques & integrated frontend
                components with the backend CPQ platform using restFUL API
                methods.
              </li>
              <li>
                Enhanced user experience by incorporating interactive elements
                and dynamic content using JavaScript frameworks/libraries such
                as jQuery, React JS.
              </li>
              <li>
                Implemented frontend optimisation techniques that reduced page
                load time by 10%.
              </li>
              <li>
                Handled events and callbacks to trigger actions within the CPQ
                platform based on user interactions on the website.
              </li>
              <li>
                Worked with cross-functional teams using Agile methodologies.
              </li>
            </ul>
          </div>
          <div className="experience">
            <h5>Assistant System Engineer</h5>
            <h5>Tata Consultancy Services</h5>
            <p>(APR ’21-OCT ‘22)</p>
            <ul>
              <li>
                Possess expertise in working with enterprise applications such
                as Oracle CPQ (Configure, Price, Quote) and Oracle HCM Cloud,
                where I closely interacted with the functionalities of these
                tools. Worked extensively with Java Script for backend
                development tasks and BML (BigMachines Language).
              </li>
              <li>
                Proficient in guiding clients through the entire implementation
                lifecycle, from requirement gathering and design to testing,
                training, and post-implementation support.
              </li>
              <li>
                Introduced Kanban Board style ticketing system to promote highly
                efficient asynchronous and synchronous work, increasing
                efficiency by 12%.
              </li>
              <li>
                Competent with JIRA,Confluence,Visual Studio Code, MS Office
                applications.
              </li>
            </ul>
          </div>
          <div className="experience">
            <h5>Summer Intern</h5>
            <h5>NIT Durgapur</h5>
            <p>(JUN ’19-JUL ‘19)</p>
            <ul>
              <li>
                Worked on Network Intrusion Detection using SVM Classifier with
                t-SNE based feature extraction technique.
              </li>
              <li>
                Participated in developing ideas and implementing them to ensure
                a safe cyber space using IDSs(Intrusion Detection Systems)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExp;
