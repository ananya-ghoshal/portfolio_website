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
      <div
        ref={cardRef}
        className="homepage"
        id="homepage"
        onMouseMove={handleMouseMove}
      >
        <div className="spotlight"></div>
        <div className="homepage__left">
          <div className="homepage__header__name">
            <span>I'm</span> <span className="name-highlight">Ananya</span>
          </div>
          <div className="typewriter">
            <Typewriter text="a software engineer !" delay={200} />
          </div>
          <div className="homepage__header__details">
            <div
              className="details"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <p>
                A Computer Science graduate with around 5 years of experience
                working on enterprise-grade applications from design to
                implementation.
              </p>
            </div>
            <div className="homepageButtons">
              <a href={Resume} target="_blank">
                <button className="CV">RESUME</button>
              </a>
            </div>
          </div>
        </div>
        <div className="homepage__right">
          <div className="aboutMe__img">
            <Blob />
            <img src={ProfileImage} alt=""></img>
          </div>
        </div>
      </div>
      {/* <div className="homepage" id="homepage">
        <div className="homepage__left">
          <div className="homepage__header__name">
            I'm <span className="name-highlight">Ananya</span>
          </div>
          <Typewriter text="a software engineer !" delay={200} />
          <div className="homepage__header__details">
            <div
              className="details"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <p>
                A Computer Science graduate with around 5 years of experience
                working on enterprise-grade applications from design to
                implementation.
              </p>
            </div>
            <div className="homepageButtons">
              <a href={Resume} target="_blank">
                <button className="CV">RESUME</button>
              </a>
            </div>
          </div>
        </div>
        <div className="homepage__right">
          <div className="aboutMe__img">
            <Blob />
            <img src={ProfileImage} alt=""></img>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default HomePage;
