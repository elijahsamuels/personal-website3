import Greeting from "../staticComponents/Greeting.jsx";
import About from "../components/About";
import Projects from "../components/Code/Projects";

const Index = () => {
  return (
    <>
      <Greeting />
      <About />
      <Projects />
    </>
  );
};

export default Index;
