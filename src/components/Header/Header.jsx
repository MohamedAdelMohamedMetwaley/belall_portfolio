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
          <img src="https://yga3qpbe01.ufs.sh/f/Gd7ucVL4TMkqZNHbh3p6HAIgWT5qrCnEkfjtQbV9Yvpl4h0B" alt="profile-photo" />
        </div>
      </div>
    </section>
  );
}

export default Header;
