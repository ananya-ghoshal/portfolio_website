import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <AboutMe />
      <ProjectList />
      <ContactMe />
    </>
  );
}

export default App;
