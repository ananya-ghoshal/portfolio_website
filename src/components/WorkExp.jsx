import React from "react";
import "../styles/WorkExp.css";

function WorkExp() {
  return (
    <div className="workExp">
      <h3>Work Experience</h3>
      <hr style={{ width: "10rem" }} />
      <div className="experience_section">
        <div className="experience">
          <h5>Senior Software Engineer</h5>
          <p style={{ fontSize: "0.9rem" }}>Zaggle Prepaid Ocean Services</p>
          <p className="date">Aug 2025 - Present</p>
          <ul>
            <li>
              Built an Expense Management System using React, Redux, & Material
              UI with responsive design, improving load time by 40% via SSR.
              Mentored juniors, led code reviews, and maintained Git
              documentation.
            </li>
            <li>
              Engineered advanced caching, memoization, and component-level
              optimizations to eliminate redundant re-renders and API calls.
            </li>
          </ul>
        </div>
        <div className="experience">
          <h5>Conversational AI Engineer</h5>
          <p style={{ fontSize: "0.9rem" }}>Avaamo Technologies Pvt. Ltd.</p>
          <p className="date">July 2024 - July 2025</p>
          <ul>
            <li>
              Designed and developed Agentic AI chatbot and voice assistant UIs,
              using React, JavaScript (ES6+), & Context API, accelerating
              deployment by 30% and improving accuracy by 20%.
            </li>
            <li>
              Implemented secure auth workflows with JWT, session refresh, and
              TypeScript-based test suites achieving more than 90% coverage.
            </li>
            <li>
              Built schema-driven dynamic forms with Redux & Ant Design,
              leveraging modern web standards, SCSS, and enhanced browser
              internals (JS engine performance, reflow, repaint, shadow DOM).
            </li>
            <li>
              Worked on Node.js APIs with npm, and optimized SEO and performance
              through Service Workers, dynamic rendering, and Google Lighthouse
              audits.
            </li>
          </ul>
        </div>
        <div className="experience">
          <h5>System Engineer</h5>
          <p style={{ fontSize: "0.9rem" }}>Tata Consultancy Services</p>
          <p className="date">April 2021 - March 2024</p>
          <ul>
            <li>
              Customized Oracle CPQ & HCM Cloud frontends using modern
              JavaScript (ES6+), modular architecture & REST APIs delivering
              scalable, high performance UIs for enterprise clients.
            </li>
            <li>
              Improved engagement by 20% and reduced load time by 10% using
              Webpack optimization, lazy loading, code splitting, & React
              Router–driven dynamic routing with SASS preprocessing for modular
              styling.
            </li>
            <li>
              Enhanced Agile delivery processes by optimizing JIRA workflows and
              integrating automation with Git and CI/CD pipelines, driving
              end-to-end implementation from design to deployment and improving
              release efficiency
            </li>
          </ul>
        </div>
        <div className="experience">
          <h5>Summer Intern</h5>
          <p style={{ fontSize: "0.9rem" }}>NIT Durgapur</p>
          <p className="date">June 2019 - July 2019</p>
          <ul>
            <li>
              Developed Network Intrusion Detection model using SVM & t-SNE
              feature extraction with 93% test accuracy.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkExp;
