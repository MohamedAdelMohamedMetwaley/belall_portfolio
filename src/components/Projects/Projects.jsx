import styles from "./Projects.module.css";
import CurvedSectionDivider from "../CurvedSectionDivider/CurvedSectionDivider";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

function Projects({ refProps }) {
  const moveRef = useRef();
  const [moveContent, setMoveContent] = useState(null);

  useEffect(function () {
    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;
      const offsetX = clientX > window.innerWidth / 2 ? -650 : 50;
      moveRef.current.animate(
        {
          left: `${clientX + offsetX}px`,
          top: `${clientY + 50}px`,
        },
        { duration: 1000, fill: "forwards" }
      );
    };
  }, []);

  function handleHoverStraw() {
    setMoveContent(
      <>
        <img src="../../public/images/straw.png" alt="straw-recycling" />
        {/* <p>
          Straw Recycling is a company committed to creating a greener future.
          We offer innovative and sustainable solutions to combat plastic
          pollution. We are interested in reducing pollution from plastic,
          increasing job opportunities for farmers and reducing pollution from
          burning rice straw.
        </p> */}
      </>
    );
  }
  function handleHoverMediator() {
    setMoveContent(
      <>
        <img src="../../public/images/mediator.png" alt="mediator-app" />
        {/* <p>
          Bridging the Gap Between Doctors and Patients Mediator is a healthcare
          application designed to streamline patient care and minimize
          medication errors by providing a centralized platform for managing
          patient information, drug recommendations, and medical records.
        </p> */}
      </>
    );
  }
  function handleHoverBiber() {
    setMoveContent(
      <img src="../../public/images/biber.png" alt="biber-project" />
    );
  }
  //TODO: create case study websites for second and third project
  return (
    <section
      ref={refProps}
      id="projects"
      onMouseLeave={() => {
        moveRef.current.animate(
          { transform: "scale(0)", opacity: 0 },
          { duration: 300, fill: "forwards" }
        );
      }}
      onMouseEnter={() => {
        moveRef.current.animate(
          { transform: "scale(1)", opacity: 1 },
          { duration: 300, fill: "forwards" }
        );
      }}
    >
      <h2>Projects</h2>
      <div id="move" ref={moveRef}>
        {moveContent}
      </div>
      <div className={styles.projectsList}>
        <ul>
          <a href="https://strawrecycling1.durablesites.com/?pt=NjY2ZTE0YjMwZTlkNjUxOTE1MGJkYjdmOjE3MTg1MTkxMDkuMDQ1OnByZXZpZXc=">
            <li className={styles.projectCard} onMouseEnter={handleHoverStraw}>
              <h2>Straw Recycling</h2>
              <h2>Straw Recycling</h2>
              <h2>Straw Recycling</h2>
              <h2>Straw Recycling</h2>
            </li>
          </a>
          <hr />
          <li className={styles.projectCard} onMouseEnter={handleHoverMediator}>
            <h2>Mediator App</h2>
            <h2>Mediator App</h2>
            <h2>Mediator App</h2>
            <h2>Mediator App</h2>
            <h2>Mediator App</h2>
          </li>
          <hr />
          <li className={styles.projectCard} onMouseEnter={handleHoverBiber}>
            <h2>Biber Project</h2>
            <h2>Biber Project</h2>
            <h2>Biber Project</h2>
            <h2>Biber Project</h2>
            <h2>Biber Project</h2>
          </li>
        </ul>
      </div>
      <CurvedSectionDivider fill="#111" isRotated={true} />
    </section>
  );
}

export default Projects;
