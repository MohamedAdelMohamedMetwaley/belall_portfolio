import styles from "./Header.module.css";

function Header({ refProps }) {
  return (
    <section ref={refProps} className={styles.section} id="home">
      <div>
        <h1>Hello, I&apos;m Belall</h1>
        <p>
          I&apos;m a Highly motivated CS student, strong in problem solving and
          programming.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src="./images/bellal.jpg" alt="profile-photo" />
      </div>
    </section>
  );
}

export default Header;
