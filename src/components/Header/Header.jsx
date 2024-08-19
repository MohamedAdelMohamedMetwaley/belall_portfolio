import GlowingButton from "../GlowingButton/GlowingButton";
import styles from "./Header.module.css";

function Header({ refProps, onScroll }) {
  return (
    <section
      ref={refProps}
      className={`${styles.section} content-grid full-width`}
      id="home"
    >
      <div className="breakout">
        <div className={styles.introContainer}>
          <h1>Hello, I&apos;m Belall</h1>
          <p>
            I&apos;m a Highly motivated CS student, strong in problem solving
            and programming.
          </p>
          <GlowingButton onClick={onScroll}>Contact Me</GlowingButton>
        </div>
        <div className={styles.imageContainer}>
          <img src="./images/bellal.jpg" alt="profile-photo" />
        </div>
      </div>
    </section>
  );
}

export default Header;
