import React from "react";
import "../styles/ContactMe.css";
import GithubImg from "../icons/git.png";
import LinkedinImg from "../icons/linkedin.png";

function ContactMe() {
  return (
    <div className="ContactMe" id="contact">
      <div className="ContactMe_card">
        <div className="text">
          <h3>Get in Touch</h3>
        </div>
        <div className="name">
          <p className="email">ananyaghoshal.20@gmail.com</p>
          <div className="icons">
            <a href="https://github.com/ananya-ghoshal" target="_blank">
              <img src={GithubImg} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/ananyaghoshal1/"
              target="_blank"
            >
              <img src={LinkedinImg} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
