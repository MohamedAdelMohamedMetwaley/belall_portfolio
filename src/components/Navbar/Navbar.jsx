import { useEffect, useReducer, useRef, useState } from "react";
import styles from "./Navbar.module.css";

const initialHighlight = {
  activeSection: "home",
  highlightPosition: 58,
  highlightWidth: 100,
};

function Navbar({
  onScrollToSection,
  headerRef,
  skillsRef,
  projectsRef,
  contactRef,
}) {
  const [{ activeSection, highlightPosition, highlightWidth }, dispatch] =
    useReducer(reducer, initialHighlight);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);
  const timeoutId = useRef(null);
  const [sections, setSections] = useState([]);
  const ulElements = [
    ["home", headerRef],
    ["skills", skillsRef],
    ["projects", projectsRef],
    ["contact", contactRef],
  ];

  useEffect(() => {
    // This will run after the component has mounted and the DOM is ready
    const sectionElements = document.querySelectorAll("section");
    setSections(sectionElements);
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    // This handles changing the highligted section on scroll
    function handleScroll() {
      if (!isScrolling) {
        let currentSection = "home";

        currentSection = hoveredElement
          ? hoveredElement
          : sectionInView(sections, currentSection);

        dispatch({ type: currentSection });
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrolling]);

  const handleMouseEnter = (section) => {
    setHoveredElement(section);
    if (!isScrolling) {
      dispatch({ type: section });
    }
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
    if (!isScrolling) {
      let currentSection = "home";
      currentSection = sectionInView(sections, currentSection);
      dispatch({ type: currentSection });
    }
  };

  const handleLinkClick = (section) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    const currentSection = section.current.getAttribute("id");
    const allowScrollDelay = Math.min(
      570,
      Math.abs(
        (section.current.offsetTop - window.scrollY) / (window.scrollY || 1)
      ) * 700
    );

    dispatch({ type: currentSection });
    setIsScrolling(true);
    onScrollToSection(section);

    timeoutId.current = setTimeout(() => {
      setIsScrolling(false);
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
        {ulElements.map(([name, ref]) => (
          <li
            key={name}
            className={name === activeSection ? "active" : ""}
            onMouseEnter={() => handleMouseEnter(name)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleLinkClick(ref)}
          >
            <button>{name.charAt(0).toUpperCase() + name.slice(1)}</button>
          </li>
        ))}
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
