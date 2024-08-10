import { useEffect, useReducer, useState } from "react";
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

  useEffect(() => {
    function handleScroll() {
      if (scrollAllowed) {
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
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollAllowed]);

  const handleMouseEnter = (section) => {
    dispatch({ type: section });
  };

  const handleMouseLeave = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "home";
    if (scrollAllowed) {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });

      dispatch({ type: currentSection });
    }
  };
  const handleScrollToSection = (section, runAfter) => {
    dispatch({ type: section.current.getAttribute("id") });
    onScrollToSection(section);
    runAfter();
  };

  const handleLinkClick = (section) => {
    setScrollAllowed(false);

    handleScrollToSection(section, () => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        setScrollAllowed(true);
        console.log("running");
      }
    });
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
