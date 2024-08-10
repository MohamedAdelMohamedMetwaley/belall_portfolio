import { useEffect, useMemo, useReducer, useState } from "react";
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

function Navbar({
  onScrollToSection,
  headerRef,
  skillsRef,
  projectsRef,
  contactRef,
}) {
  const [{ activeSection, highlightPosition, highlightWidth }, dispatch] =
    useReducer(reducer, initialHighlight);
  const [scrollAllowed, setScrollAllowed] = useState(true);

  const sections = useMemo(() => {
    return document.querySelectorAll("section");
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (scrollAllowed) {
        let currentSection = "home";

        currentSection = sectionInView(sections, currentSection);

        dispatch({ type: currentSection });
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollAllowed]);

  const handleMouseEnter = (section) => {
    dispatch({ type: section });
  };

  const handleMouseLeave = () => {
    if (scrollAllowed) {
      let currentSection = "home";
      currentSection = sectionInView(sections, currentSection);

      dispatch({ type: currentSection });
    }
  };

  const handleLinkClick = (section) => {
    clearTimeout();
    const currentSection = section.current.getAttribute("id");
    const allowScrollDelay = Math.min(
      570,
      Math.abs(
        (section.current.offsetTop - window.scrollY) / (window.scrollY || 1)
      ) * 700
    );

    dispatch({ type: currentSection });
    setScrollAllowed(false);
    onScrollToSection(section);

    setTimeout(() => {
      setScrollAllowed(true);
    }, allowScrollDelay);
  };

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
        <li
          onClick={() => handleLinkClick(headerRef)}
          className={activeSection === "home" ? "active" : ""}
          onMouseEnter={() => handleMouseEnter("home")}
          onMouseLeave={handleMouseLeave}
        >
          <button>Home</button>
        </li>
        <li
          onClick={() => handleLinkClick(skillsRef)}
          className={activeSection === "skills" ? "active" : ""}
          onMouseEnter={() => handleMouseEnter("skills")}
          onMouseLeave={handleMouseLeave}
        >
          <button>Skills</button>
        </li>
        <li
          onClick={() => handleLinkClick(projectsRef)}
          className={activeSection === "projects" ? "active" : ""}
          onMouseEnter={() => handleMouseEnter("projects")}
          onMouseLeave={handleMouseLeave}
        >
          <button>Projects</button>
        </li>
        <li
          onClick={() => handleLinkClick(contactRef)}
          className={activeSection === "contact" ? "active" : ""}
          onMouseEnter={() => handleMouseEnter("contact")}
          onMouseLeave={handleMouseLeave}
        >
          <button>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
function sectionInView(sections, currentSection) {
  const middle = window.scrollY + document.documentElement.clientHeight / 3;
  let currentSectionTop;
  for (let i = sections.length - 1; i >= 0; i--) {
    currentSectionTop = sections[i].offsetTop;
    if (middle >= currentSectionTop) {
      currentSection = sections[i].id;
      break;
    }
  }
  return currentSection;
}
