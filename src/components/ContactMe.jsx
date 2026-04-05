import React, { useRef, useEffect, useState } from "react";
import "../styles/ContactMe.css";
import GithubImg from "../icons/git.svg";
import LinkedinImg from "../icons/linkedin.svg";
import EmailImg from "../icons/mail.svg";

function ContactMe() {
  const cardRef = useRef(null);
  const frameRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("ananyaghoshal.20@gmail.com");
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();

    mouse.current.x = e.clientX - rect.left;
    mouse.current.y = e.clientY - rect.top;

    if (!frameRef.current) {
      frameRef.current = requestAnimationFrame(update);
    }
  };

  const update = () => {
    const el = cardRef.current;

    current.current.x += (mouse.current.x - current.current.x) * 0.2;
    current.current.y += (mouse.current.y - current.current.y) * 0.2;

    el.style.setProperty("--x", `${current.current.x}px`);
    el.style.setProperty("--y", `${current.current.y}px`);

    frameRef.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <div ref={cardRef} className="ContactMe_card" onMouseMove={handleMouseMove}>
      <div className="spotlight"></div>

      <div className="text">
        <h3>Get in Touch</h3>
      </div>

      <div className="name">
        <div className="icons">
          <span>
            <a
              href="https://www.linkedin.com/in/ananyaghoshal/"
              target="_blank"
            >
              <img src={LinkedinImg} alt="" />
            </a>
          </span>
          <span>
            <a href="https://github.com/ananya-ghoshal" target="_blank">
              <img src={GithubImg} alt="" />
            </a>
          </span>
          <span className="emailWrapper">
            <img src={EmailImg} alt="" onClick={handleCopy} />
            <span className={`tooltip ${copied ? "show" : ""}`}>
              {copied ? "Email id copied!" : ""}
            </span>
          </span>
        </div>
      </div>
      <p style={{ paddingTop: "1rem" }}>
        Handcrafted with ♥ by © Ananya Ghoshal{" "}
      </p>
    </div>
  );
}

export default ContactMe;
