import { useState, useEffect, useMemo } from "react";
import ColorChanger from "./ColorChanger";
import "./Greeting.css";
import { Parallax } from "react-scroll-parallax";

const Greeting = () => {
  const hello = useMemo(
    () => [
      "Hello",
      "Hi",
      "Hey there!",
      "¡Hola!",
      "Bonjour",
      "Salut",
      "Privet",
      "Nǐ hǎo",
      "Ciao",
      "Konnichiwa",
      "Guten Tag",
      "Olá",
      "Anyoung",
      "Ahlan",
      "Hej, Halløj",
      "Hoi, Hallo",
      "Yassou",
      "Cześć, Witaj",
      "Hai, Helo",
      "Selam",
      "Shalom",
      "Hej, Tjena",
      "God dag",
      "Kumusta",
    ],
    []
  );

  const [greeting, setGreeting] = useState(hello[Math.floor(Math.random() * hello.length)]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setGreeting(hello[Math.floor(Math.random() * hello.length)]);
        setFade(true);
      }, 500);
    }, 1000);

    return () => clearInterval(interval);
  }, [hello]);

  return (
    <div className="greeting">
      <Parallax 
        opacity={[1, 0]} 
        startScroll={0}
        endScroll={600}
        translateX={["0px", "-200px"]}
      >
        <div className={fade ? "fade-in" : "fade-out"}>{ColorChanger(greeting)}</div>
      </Parallax>
      <Parallax 
        opacity={[1, 0]}
        startScroll={0}
        endScroll={600}
        translateX={["0px", "200px"]}
      >
        <div>{ColorChanger("I'm Elijah Samuels")}</div>
      </Parallax>
    </div>
  );
};

export default Greeting;
