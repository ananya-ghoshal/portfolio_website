import React from "react";
import "../styles/WorkExp.css";

function WorkExp() {
  return (
    <div className="workExp">
      <h3>Work Experience</h3>
      <hr style={{ width: "10rem" }} />
      <div className="experience_section">
        <div className="experience">
          <h5>Senior Frontend Developer</h5>
          <p style={{ fontSize: "0.9rem" }}>Avaamo Technologies Pvt. Ltd.</p>
          <p className="date">JUL'24 - Present</p>
          <ul>
            <li>
              Frontend Developer with expertise in React.js and JavaScript (ES6)
              , building intuitive interfaces and integrating chatbots for
              Generative AI platforms.
            </li>
            <li>
              Designed and deployed Generative AI-driven UIs using React.js and
              CSS to ensure dynamic, responsive and user-friendly experiences.
            </li>
            <li>
              Developed and integrated RESTful APIs with React.js & Next.js.
              Processed and visualized large JSON datasets to enhance chatbot
              functionality.
            </li>
            <li>
              Experienced with browser testing, debugging, and frontend build
              tools like Webpack and Babel.Proficient in Git, with hands-on
              experience using Jest for frontend testing.Familiar with Docker
              and Kubernetes.
            </li>
          </ul>
        </div>
        <div className="experience">
          <h5>System Engineer(Digital Cadre)</h5>
          <p style={{ fontSize: "0.9rem" }}>Tata Consultancy Services</p>
          <p className="date">OCT ’22 - MAR ‘24</p>
          <ul>
            <li>
              Built and maintained the user interface (UI) components of the
              Oracle CPQ website using HTML, CSS, and JavaScript.
            </li>
            <li>
              Implemented responsive design techniques & integrated frontend
              components with the backend CPQ platform using RESTful API methods
              and asynchronous request handling.
            </li>
            <li>
              Enhanced user experience by 20% by incorporating interactive
              elements and dynamic content using jQuery and React JS.Worked with
              state management libraries such as Redux.
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
          <p style={{ fontSize: "0.9rem" }}>Tata Consultancy Services</p>
          <p className="date">APR ’21 - OCT ‘22</p>
          <ul>
            <li>
              Worked on the frontend integration and user interface enhancements
              for enterprise applications such as Oracle CPQ and Oracle HCM
              Cloud.
            </li>
            <li>
              Skilled in gathering and analyzing business requirements,
              configuring applications to meet client needs.
            </li>
            <li>
              Proficient in guiding clients through the entire implementation
              lifecycle, from requirement gathering and design to testing,
              training, and post-implementation support.
            </li>
            <li>
              Introduced Kanban Board style ticketing system to promote highly
              efficient asynchronous and synchronous work, increasing efficiency
              by 12%.
            </li>
            <li>
              Competent with Google Lighthouse,JIRA,Confluence,Figma,Visual
              Studio Code, MS Office applications.
            </li>
          </ul>
        </div>
        <div className="experience">
          <h5>Summer Intern</h5>
          <p style={{ fontSize: "0.9rem" }}>NIT Durgapur</p>
          <p className="date">JUN ’19 - JUL ‘19</p>
          <ul>
            <li>
              Worked on Network Intrusion Detection using SVM Classifier with
              t-SNE based feature extraction technique.
            </li>
            <li>
              Participated in developing ideas and implementing them to ensure a
              safe cyber space using IDSs(Intrusion Detection Systems)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkExp;
