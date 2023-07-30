import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Greeting from "./components/Greeting";
import About from "./components/About";
import Index from "./components/Index";
import Music from "./components/Music";
// import Calendar from "./components/Music/Calendar";
import Transcriptions from "./components/Music/Transcriptions";
import Audio from "./components/Music/Audio";
import Video from "./components/Music/Video";
import Code from "./components/Code";
import Projects from "./components/Code/Projects";
import Skills from "./components/Code/Skills";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
// import { Navbar2 as Navbar } from "./components/Navbar2";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <header className="Navbar">
        <Navbar />
      </header>

      <div className="App-header">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="about" element={<About />} />
          <Route path="music" element={<Music />}>
            {/* <Route path="calendar" element={<Calendar />} /> */}
            <Route path="transcriptions" element={<Transcriptions />} />
            <Route path="audio" element={<Audio />} />
            <Route path="video" element={<Video />} />
          </Route>
          <Route path="code" element={<Code />}>
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
