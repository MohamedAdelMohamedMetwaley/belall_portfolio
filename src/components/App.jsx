import { useRef } from "react";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

function App() {
  const headerRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  const onScrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="content-grid">
      <Navbar
        onScrollToSection={onScrollToSection}
        headerRef={headerRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
      <Header
        refProps={headerRef}
        onScroll={() => onScrollToSection(contactRef)}
      />
      <Skills refProps={skillsRef} />
      <Projects refProps={projectsRef} />
      <Contact refProps={contactRef} />
    </main>
  );
}

export default App;
