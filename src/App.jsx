import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Home />
      <Skills />
      <Projects />
      <Education />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
