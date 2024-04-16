import React from "react";
import "../styles/ContactMe.css";
import { useState } from "react";
import GithubImg from "../icons/git.png";
import LinkedinImg from "../icons/linkedin.png";

function ContactMe() {
  const [inputs, setInputs] = useState("");
  const [textarea, setTextarea] = useState("");
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleText = (event) => {
    setTextarea(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your message has been sent");
  };
  return (
    <section className="ContactMe" id="contact">
      <div className="ContactMe_card">
        <div className="Contactme_cardLeft">
          <div className="text">
            <h3>Get in Touch</h3>
          </div>
          <div className="name">
            <p className="myName">Ananya Ghoshal</p>
            <p className="email">ananyaghoshal.20@gmail.com</p>
            <div className="icons">
              <img src={GithubImg} alt="" />
              <img src={LinkedinImg} alt="" />
            </div>
          </div>
        </div>
        <div className="Contactme_cardRight">
          <form className="contactForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={inputs.name || ""}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={inputs.email || ""}
              onChange={handleChange}
            />
            <textarea
              value={textarea}
              placeholder="Enter your message"
              onChange={handleText}
            />
            <input type="submit" value="<Send/>" role="button" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
