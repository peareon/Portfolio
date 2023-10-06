import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from "./components/Contact.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}
