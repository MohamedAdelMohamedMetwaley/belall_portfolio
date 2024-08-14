import CurvedSectionDivider from "../CurvedSectionDivider/CurvedSectionDivider";
import styles from "./Skills.module.css";

function Skills({ refProps }) {
  return (
    <section ref={refProps} id="skills">
      <CurvedSectionDivider fill="#111" />
      {/* <h1>Skills</h1> */}
      <div className={styles.certSlider}>
        <ul style={{ "--time": "13s", "--quantity": 5 }}>
          <li
            style={{
              "--index": 1,
              "--url": "url(../../../public/images/cert_1.png)",
            }}
          >
            <img src="./images/cert_1.png" alt="cert_1" />
          </li>
          <li
            style={{
              "--index": 2,
              "--url": "url(../../../public/images/cert_2.jpg)",
            }}
          >
            <img src="./images/cert_2.jpg" alt="cert_2" />
          </li>
          <li
            style={{
              "--index": 3,
              "--url": "url(../../../public/images/cert_3.jpg)",
            }}
          >
            <img src="./images/cert_3.jpg" alt="cert_3" />
          </li>
          <li
            style={{
              "--index": 4,
              "--url": "url(../../../public/images/cert_4.jpg)",
            }}
          >
            <img src="./images/cert_4.jpg" alt="cert_4" />
          </li>
          <li
            style={{
              "--index": 5,
              "--url": "url(../../../public/images/cert_5.jpg)",
            }}
          >
            <img src="./images/cert_5.jpg" alt="cert_5" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
