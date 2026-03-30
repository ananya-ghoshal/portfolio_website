import React, { useRef, useEffect } from "react";
import "../styles/ContactMe.css";
import GithubImg from "../icons/git.svg";
import LinkedinImg from "../icons/linkedin.svg";

function ContactMe() {
  const cardRef = useRef(null);
  const frameRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

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
        <p className="email">ananyaghoshal.20@gmail.com</p>
        <div className="icons">
          <a href="https://github.com/ananya-ghoshal" target="_blank">
            <img src={GithubImg} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/ananyaghoshal/" target="_blank">
            <img src={LinkedinImg} alt="" />
          </a>
        </div>
      </div>

      <p>Handcrafted with ♥ by © Ananya Ghoshal </p>
    </div>
  );
}

export default ContactMe;
