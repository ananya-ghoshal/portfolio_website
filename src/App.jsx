import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ProjectList from "./components/ProjectList";
import WorkExp from "./components/WorkExp";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <ProjectList />
      <AboutMe />
      <WorkExp />
      <ContactMe />
    </>
  );
}

export default App;
