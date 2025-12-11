import { useState, useEffect, useMemo } from "react";
import ColorChanger from "./ColorChanger.jsx";
import "./Greeting.css";
import { Parallax } from "react-scroll-parallax";

const Greeting = () => {
  const hello = useMemo(
    () => [
      "Hello,",
      "Hi,",
      "Hey there,",
      "¡Hola,",
      "Bonjour,",
      "Salut,",
      "Privet,",
      "Nǐ hǎo,",
      "Ciao,",
      "Konnichiwa,",
      "Guten Tag,",
      "Olá,",
      "Anyoung,",
      "Ahlan,",
      "Hej, Halløj,",
      "Hoi, Hallo,",
      "Yassou,",
      "Cześć Witaj,",
      "Hai Helo,",
      "Selam,",
      "Shalom,",
      "Hej Tjena,",
      "God dag,",
      "Kumusta,",
    ],
    []
  );

  const [greeting, setGreeting] = useState(() => {
    return hello[Math.floor(Math.random() * hello.length)];
  });

  const [fade, setFade] = useState(true);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setGreeting(hello[Math.floor(Math.random() * hello.length)]);
        setFade(true);
        setTick((t) => t + 1);
      }, 500);
    }, 1500);

    return () => clearInterval(interval);
  }, [hello]);

  return (
    <div className="greeting">
      <Parallax opacity={[1, 0]} startScroll={0} endScroll={600} translateX={["0px", "-200px"]}>
        <div className={fade ? "fade-in" : "fade-out"}>
          <ColorChanger string={greeting} tick={tick} />
        </div>
      </Parallax>

      <Parallax opacity={[1, 0]} startScroll={0} endScroll={600} translateX={["0px", "200px"]}>
        <div className={"greeting-name"}>
          <ColorChanger string="I'm Elijah Samuels" tick={tick} />
        </div>
      </Parallax>
    </div>
  );
};

export default Greeting;
