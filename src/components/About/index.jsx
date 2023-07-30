import React from "react";
import Timeline from "../Timeline.jsx";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <h4>About</h4>
      <p>
        Enthusiastically adept software engineer well-versed in JavaScript,
        particularly skilled in leveraging React/Redux and Node/Express for
        dynamic applications. Possessing a rich programming background coupled
        with a profound passion for music and adept people management
        capabilities. Prospective employers will find great value in my proven
        proficiency in steering teams, fostering a positive work environment,
        and driving relentless focus towards achieving objectives.
      </p>
      <p>
        During my tenure in the previous position, I successfully generated
        substantial annual revenue in the multi-million-dollar range. As a
        dedicated software developer and perpetual seeker of knowledge, my
        insatiable curiosity remains a driving force behind my continuous
        exploration of computer science, emerging technologies, and the
        ever-evolving world of music.
      </p>
      <div>
        <Timeline />
      </div>
    </div>
  );
};

export default About;
