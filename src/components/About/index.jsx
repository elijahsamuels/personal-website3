import "./About.css";
import { Parallax } from "react-scroll-parallax";

const About = () => {
  const innerHeight = window.innerHeight / 2;
  const aboutParagraph = `
		Experienced software engineer with expertise in JavaScript, React/Redux, and Node/Express. Proven track record of delivering scalable, secure, and innovative solutions that align with business goals. Strong leadership in fostering collaboration and problem-solving within cross-functional teams.`;

  return (
    <div className="about-container">
      <Parallax
        opacity={[0, 1]}
        startScroll={0}
        // endScroll={500}
        endScroll={innerHeight} // fade in by mid-viewport
        translateY={["0px", `-${innerHeight}px`]}>
        <div className="about">
          <h4>About</h4>
          <p>{aboutParagraph}</p>
        </div>
      </Parallax>
    </div>
  );
};

export default About;
