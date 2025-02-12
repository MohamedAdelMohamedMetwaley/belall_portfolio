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
                            "--url": "url(https://yga3qpbe01.ufs.sh/f/Gd7ucVL4TMkqnasJIwx0HVrfeUoANi8kwxtZl7LsQYcWOdP2)",
                        }}
                    >
                        <img src="https://yga3qpbe01.ufs.sh/f/Gd7ucVL4TMkqnasJIwx0HVrfeUoANi8kwxtZl7LsQYcWOdP2" alt="cert_1" />
                    </li>
                    <li
                        style={{
                            "--index": 2,
                            "--url": "url(https://yga3qpbe01.ufs.sh/f/Gd7ucVL4TMkqF0i602T5eyCPM9hWAQXcj7Tm8wIGBpnot2gb)",
                        }}
                    >
                        <img src="https://yga3qpbe01.ufs.sh/f/Gd7ucVL4TMkqF0i602T5eyCPM9hWAQXcj7Tm8wIGBpnot2gb" alt="cert_2" />
                    </li>
                    <li
                        style={{
                            "--index": 3,
                            "--url": "url(https://yga3qpbe01.ufs.sh/f/Gd7ucVL4TMkqxszxSLltABR8UadzGEZ6XPQ4bpsFHLwWfNvc)",
                        }}
                    >
                        <img src="https://yga3qpbe01.ufs.sh/f/Gd7ucVL4TMkqxszxSLltABR8UadzGEZ6XPQ4bpsFHLwWfNvc" alt="cert_3" />
                    </li>
                    <li
                        style={{
                            "--index": 4,
                            "--url": "url(https://yga3qpbe01.ufs.sh/f/Gd7ucVL4TMkqaE2gcrIAkXugwDbCQHUopReV65WGZKmOP78v)",
                        }}
                    >
                        <img src="https://yga3qpbe01.ufs.sh/f/Gd7ucVL4TMkqaE2gcrIAkXugwDbCQHUopReV65WGZKmOP78v" alt="cert_4" />
                    </li>
                    <li
                        style={{
                            "--index": 5,
                            "--url": "url(https://yga3qpbe01.ufs.sh/f/Gd7ucVL4TMkqC9qn42YcPldGNhbwskXEjOH5QU7igDZvWpB4)",
                        }}
                    >
                        <img src="https://yga3qpbe01.ufs.sh/f/Gd7ucVL4TMkqC9qn42YcPldGNhbwskXEjOH5QU7igDZvWpB4" alt="cert_5" />
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Skills;
