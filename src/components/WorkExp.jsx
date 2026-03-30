import React from "react";
import "../styles/WorkExp.css";

function WorkExp() {
  return (
    <div className="workExp">
      <p>Work Experience</p>
      <div className="experience_section">
        <div className="experience">
          <h5>Senior Software Engineer</h5>
          <p className="org">Zaggle Prepaid Ocean Services</p>
          <p className="date">Aug 2025 - Mar 2026</p>
          <ul>
            <li>
              Built a scalable Expense Management System, contributing to
              end-to-end development with a focus on performance, resulting in a
              40% reduction in load time through server-side rendering and
              optimized data handling.
            </li>
            <li>
              Implemented advanced caching, memoization, and rendering
              optimizations, significantly reducing redundant computations and
              improving overall system efficiency.
            </li>
            <li>
              Designed robust data flow and state management strategies to
              ensure consistency, scalability, and maintainability across
              complex user interactions.
            </li>
            <li>
              Mentored junior developers, led code reviews, and established best
              practices, improving code quality, team productivity, and
              development consistency.
            </li>
          </ul>
        </div>
        <div className="experience">
          <h5>Conversational AI Engineer</h5>
          <p className="org">Avaamo Technologies Pvt. Ltd.</p>
          <p className="date">July 2024 - July 2025</p>
          <ul>
            <li>
              Designed and developed AI-driven chatbot and voice assistant
              systems, contributing to end-to-end application development and
              improving deployment efficiency by 30% and system accuracy by 20%.
            </li>
            <li>
              Implemented secure authentication workflows using token-based
              systems and session management, along with automated test suites
              achieving over 90% coverage.
            </li>
            <li>
              Contributed to backend services and API integrations, optimizing
              overall application performance, reliability, and search
              visibility through structured audits and performance enhancements.
            </li>
          </ul>
        </div>
        <div className="experience">
          <h5>System Engineer</h5>
          <p className="org">Tata Consultancy Services</p>
          <p className="date">April 2021 - March 2024</p>
          <ul>
            <li>
              Customized and enhanced enterprise SaaS platforms, driving
              scalable solutions and integrating complex workflows across
              systems.
            </li>
            <li>
              Led performance optimization initiatives, improving system
              responsiveness and user engagement through efficient architecture
              and loading strategies.
            </li>
            <li>
              Improved development and release cycles by streamlining Agile
              workflows and implementing automation across version control and
              CI/CD pipelines.
            </li>
          </ul>
        </div>
        <div className="experience">
          <h5>Summer Intern</h5>
          <p className="org">NIT Durgapur</p>
          <p className="date">June 2019 - July 2019</p>
          <ul>
            <li>
              Developed a Network Intrusion Detection model using SVM with
              t-SNE-based feature extraction, achieving 93% test accuracy.
            </li>
            <li>
              Preprocessed and analyzed large-scale network traffic datasets,
              including feature engineering, normalization, and dimensionality
              reduction.
            </li>
            <li>
              Visualized high-dimensional data patterns and model outputs to
              interpret anomalies and improve detection strategies.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkExp;
