import { useRef } from "react";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";

function App() {
  const headerRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  const onScrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        onScrollToSection={onScrollToSection}
        headerRef={headerRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
      <Header refProps={headerRef} />
      <section id="skills">
        <h1>Section</h1>
      </section>
      <section id="projects">
        <h1>Section</h1>
      </section>
      <Contact refProps={contactRef} />
    </>
  );
}

export default App;
