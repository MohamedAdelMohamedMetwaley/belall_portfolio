import { useEffect, useReducer, useRef, useState } from "react";
import styles from "./Navbar.module.css";

const windowWidth = window.innerWidth;
const onMobile = windowWidth < 1024;
const SCALE = onMobile ? 1.25 : 1;

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
  const [sections, setSections] = useState([]);
  const [navIsHidden, setNavIsHidden] = useState(false);
  const timeoutId = useRef(null);
  const navTimeoutId = useRef(null);
  const ulElements = [
    ["home", headerRef],
    ["skills", skillsRef],
    ["projects", projectsRef],
    ["contact", contactRef],
  ];
  //TODO: a simple solution for highlighting navbar on small devices is to just not render the .highlight div and use .active:after instead
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
      //when we scroll, check if the navIsHidden, if it is then show it
      if (navIsHidden) setNavIsHidden(false);
      //If we are scrolling and there is a pending timeout function to hide the navbar, delete that function
      if (navTimeoutId.current) {
        clearTimeout(navTimeoutId.current);
      }
      //Hide the navbar after three seconds of not scrolling
      navTimeoutId.current = setTimeout(() => {
        setNavIsHidden(true);
      }, 3000);
      //If we are in the very top of the page don't hide the navbar
      if (!window.scrollY) {
        clearTimeout(navTimeoutId.current);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling, hoveredElement, sections, navTimeoutId, navIsHidden]);

  const handleMouseEnter = (section) => {
    clearTimeout(navTimeoutId.current);
    if (!isScrolling) {
      dispatch({ type: section });
      setHoveredElement(section);
      setNavIsHidden(false);
    }
  };

  const handleMouseLeave = () => {
    if (!isScrolling) {
      let currentSection = "home";
      currentSection = sectionInView(sections, currentSection);
      dispatch({ type: currentSection });
      setHoveredElement(null);
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
    <nav className={`${styles.navbar} ${navIsHidden ? styles.hidden : ""}`}>
      <div
        className="highlight"
        style={{
          "--left": `${highlightPosition * SCALE}px`,
          "--width": `${highlightWidth * SCALE}px`,
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
  sections.forEach((section) => {
    currentSectionTop = section.offsetTop;
    if (middle >= currentSectionTop) {
      currentSection = section.id;
    }
  });
  return currentSection;
}

function reducer(state, action) {
  switch (action.type) {
    case "home":
      return initialHighlight;
    case "skills":
      return {
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
