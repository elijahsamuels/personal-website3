import { useEffect, useMemo, useState } from "react";
import Greeting from "../staticComponents/Greeting.jsx";
import About from "../components/About";
import Projects from "../components/Code/Projects";
import './index.css'

const Index = () => {
  const submitted = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("submitted") === "true";
  }, []);

  const [showToast, setShowToast] = useState(submitted);

  useEffect(() => {
    if (!submitted) return;

    const timer = setTimeout(() => {
      setShowToast(false);
    }, 4000);

    window.history.replaceState({}, "", "/");

    return () => clearTimeout(timer);
  }, [submitted]);

  return (
    <>
      {showToast && (
        <div className="toast success-toast">
          Message sent successfully 🎉
        </div>
      )}

      <Greeting />
      <About />
      <Projects />
    </>
  );
};

export default Index;
