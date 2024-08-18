import styles from "./Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faChartLine,
  faImage,
  faCogs,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

const skillsData = [
  { name: "C++", icon: faCode },
  { name: "C", icon: faCode },
  { name: "Python", icon: faCode },
  { name: "C#", icon: faCode },
  { name: "SQL", icon: faDatabase },
  { name: "Data Science", icon: faChartLine },
  { name: "Machine Learning", icon: faCogs },
  { name: "Image Processing", icon: faImage },
  { name: "System Analysis", icon: faProjectDiagram },
];

function Skills({ refProps }) {
  return (
    <section className="full-width" ref={refProps} id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <FontAwesomeIcon
              icon={skill.icon}
              size="3x"
              className="skill-icon"
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <div className={styles.certSlider}>
        <ul
          style={{ "--time": "13s", "--quantity": 5 }}
          onClick={(e) => {
            const img = e.target;
            window.open(img["src"]);
          }}
        >
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
