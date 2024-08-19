import styles from "./Projects.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

function Projects({ refProps }) {
  const moveRef = useRef();
  const [moveContent, setMoveContent] = useState(null);
  const videoRef = useRef();

  useEffect(function () {
    refProps.current.onpointermove = (event) => {
      const { clientX, clientY } = event;
      // const offsetX = clientX > window.innerWidth / 2 ? -550 : 50;
      // const offsetY = clientY > window.innerHeight * 0.55 ? -300 : 50;
      moveRef.current.animate(
        {
          left: `${clientX + 50}px`,
          top: `${clientY + 50}px`,
        },
        { duration: 200, fill: "forwards" }
      );
    };
  }, []);

  function handleHoverStraw() {
    setMoveContent(
      <>
        {/* <img src="./images/straw.png" alt="straw-recycling" /> */}
        <video
          ref={videoRef}
          src="./video/clip1.mp4"
          autoPlay
          playsInline
          muted
          loop
          onCanPlay={() => (videoRef.current.playbackRate = 2)}
        />
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
        {/* <img src="./images/mediator.png" alt="mediator-app" />
         */}
        <video
          ref={videoRef}
          src="./video/clip2.mp4"
          autoPlay
          playsInline
          muted
          loop
          onCanPlay={() => (videoRef.current.playbackRate = 2)}
        />
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
      // <img src="./images/biber.png" alt="biber-project" />
      <video
        ref={videoRef}
        src="./video/clip3.mp4"
        autoPlay
        playsInline
        muted
        loop
        onCanPlay={() => (videoRef.current.playbackRate = 2)}
      />
    );
  }
  //TODO: create case study websites for second and third project
  return (
    <section className={`full-width`} ref={refProps} id="projects">
      <h2>Projects</h2>
      <div id="move" ref={moveRef}>
        {moveContent}
      </div>
      <div
        className={styles.projectsList}
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
        <ul>
          <hr className={styles.hr1} />
          <a href="https://strawrecycling1.durablesites.com/?pt=NjY2ZTE0YjMwZTlkNjUxOTE1MGJkYjdmOjE3MTg1MTkxMDkuMDQ1OnByZXZpZXc=">
            <li className={styles.projectCard} onMouseEnter={handleHoverStraw}>
              <h2>Straw Recycling</h2>
              <h2>Straw Recycling</h2>
              <h2>Straw Recycling</h2>
              <h2>Straw Recycling</h2>
              <div className={styles.projectVideo}>
                <div className={styles.videoContainer}>
                  <video
                    ref={videoRef}
                    src="./video/clip1.mp4"
                    // autoPlay
                    playsInline
                    muted
                    loop
                    onCanPlay={() => (videoRef.current.playbackRate = 2)}
                  />
                </div>
              </div>
            </li>
          </a>
          <hr />
          <li className={styles.projectCard} onMouseEnter={handleHoverMediator}>
            <h2>Mediator App</h2>
            <h2>Mediator App</h2>
            <h2>Mediator App</h2>
            <h2>Mediator App</h2>
            <h2>Mediator App</h2>
            <div className={styles.projectVideo}>
              <div className={styles.videoContainer}>
                <video
                  ref={videoRef}
                  src="./video/clip2.mp4"
                  // autoPlay
                  playsInline
                  muted
                  loop
                  onCanPlay={() => (videoRef.current.playbackRate = 2)}
                />
              </div>
            </div>
          </li>
          <hr />
          <li className={styles.projectCard} onMouseEnter={handleHoverBiber}>
            <h2>Biber Project</h2>
            <h2>Biber Project</h2>
            <h2>Biber Project</h2>
            <h2>Biber Project</h2>
            <h2>Biber Project</h2>
            <div className={styles.projectVideo}>
              <div className={styles.videoContainer}>
                <video
                  ref={videoRef}
                  src="./video/clip3.mp4"
                  // autoPlay
                  playsInline
                  muted
                  loop
                  onCanPlay={() => (videoRef.current.playbackRate = 2)}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
