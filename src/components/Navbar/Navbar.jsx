import { useEffect, useReducer } from "react";
import styles from "./Navbar.module.css";

const initialHighlight = {
  activeSection: "home",
  highlightPosition: 58,
  highlightWidth: 100,
};

function reducer(state, action) {
  switch (action.type) {
    case "home":
      return initialHighlight;

    case "skills":
      return {
        ...state,
        activeSection: "skills",
        highlightPosition: 140,
        highlightWidth: 100,
      };
    case "projects":
      return {
        activeSection: "projects",
        highlightPosition: 232,
        highlightWidth: 120,
      };
    case "contact":
      return {
        activeSection: "contact",
        highlightPosition: 335,
        highlightWidth: 120,
      };
  }
}

function Navbar() {
  const [{ activeSection, highlightPosition, highlightWidth }, dispatch] =
    useReducer(reducer, initialHighlight);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });

      dispatch({ type: currentSection });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(function () {}, [activeSection]);

  return (
    <nav className={styles.navbar}>
      <div
        className="highlight"
        style={{
          left: `${highlightPosition}px`,
          width: `${highlightWidth}px`,
        }}
      />
      <ul>
        <li className={activeSection === "home" ? "active" : ""}>
          <button>Home</button>
        </li>
        <li className={activeSection === "skills" ? "active" : ""}>
          <button>Skills</button>
        </li>
        <li className={activeSection === "projects" ? "active" : ""}>
          <button>Projects</button>
        </li>
        <li className={activeSection === "contact" ? "active" : ""}>
          <button>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
