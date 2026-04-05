import { useRef, useEffect } from "react";
import "../styles/HomePage.css";
import "../components/AboutMe";
import Blob from "../components/Blob";
import Typewriter from "../components/Typewriter";
import ProfileImage from "../images/portfolio.cutout.webp";
import Resume from "../images/AnanyaGhoshal.pdf";

function HomePage() {
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
    <>
      <div ref={cardRef} className="hero" onMouseMove={handleMouseMove}>
        <div className="spotlight"></div>

        <div className="hero__bgText">Hey, there</div>

        <div className="hero__imageWrapper">
          <Blob />
          <img src={ProfileImage} alt="profile" />
        </div>
        <div className="hero__content">
          <div className="hero__left">
            <h1 className="name">
              <span className="name__prefix">I AM</span>
              <span className="name__main">
                <Typewriter text="ANANYA" delay={300} />
              </span>
            </h1>
          </div>

          <div className="hero__right">
            <p className="role">
              <Typewriter text="SOFTWARE ENGINEER" delay={200} />
            </p>

            <p className="desc">
              Specializing in Frontend Development, Backend Systems, and
              Conversational AI Flows.
            </p>

            <a href={Resume} target="_blank">
              <button className="CV">RESUME</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
