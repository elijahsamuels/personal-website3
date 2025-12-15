import React from "react";
import { Parallax } from "react-scroll-parallax";
import "./About.css";

document.title = `Elijah Samuels | About`;

const AboutParagraphs = ({ aboutData }) => {
  return aboutData.map((data, index) => (
    <React.Fragment key={index}>
      <p>{data.title}</p>
      <p>{data.paragraph}</p>
    </React.Fragment>
  ));
};
const About = () => {
  const innerHeight = window.innerHeight / 2;

  // const aboutData = [
  //   {
  //     title: "Core Competencies & Technical Expertise",
  //     paragraph:
  //       "I am a highly accomplished Full Stack Software Engineer with a specialization in building secure, resilient, and performant systems. My expertise spans the complete development lifecycle, from modern frontend architecture using React/Redux to robust backend development with Node/Express and optimization of PostgreSQL/NoSQL databases.",
  //   },
  //   {
  //     title: "Quantifiable Impact and Cost Optimization",
  //     paragraph:
  //       "My value is proven by tangible business results. In a prior role, I leveraged my system optimization skills to drive down operational expenses, achieving substantial annual savings by migrating costly infrastructure and optimizing cloud resource allocation, reducing annual AWS spend from $200k to $14k. I have a strong track record of optimizing database query performance under heavy load and leading large-scale initiatives from conception to deployment.",
  //   },
  //   {
  //     title: "Security and Leadership Focus",
  //     paragraph:
  //       "My work is defined by a commitment to security and scalability. I possess significant experience developing and securing high-stakes APIs critical to money movement, including the implementation of advanced security protocols such as Multi-Factor Authentication (MFA), Fraud and Anti-Money Laundering (FRAML) checks, and Attribute-Based Access Control (ABAC), facilitating roughly $150 billion in annual transactions. I excel at fostering technical collaboration and driving consensus within cross-functional teams, always using a data-guided approach to inform development strategy and strategic decision-making.",
  //   },
  // ];

  const aboutData = [
    {
      title: "Mastery of the Modern Web Stack",
      paragraph:
        "I am a highly accomplished Full Stack Software Engineer specializing in secure, resilient, and high-performance systems. I navigate the entire development lifecycle, from architecting modern frontends with React/Redux to building robust APIs with Node/Express, and optimizing PostgreSQL/NoSQL databases for maximum throughput.",
    },
    {
      title: "Delivering Measurable Business Value",
      paragraph:
        "My value is proven by tangible, quantified results. In a prior role, I leveraged system optimization and cloud expertise to drive substantial cost reduction, shrinking annual AWS spend from $200k to just $14k. I have a strong track record of optimizing database query performance under heavy load and leading large-scale initiatives from initial concept to successful deployment.",
    },
    {
      title: "High-Security Systems & Strategic Leadership",
      paragraph:
        "My work is centered on security and scalability for high-stakes applications. I've developed and secured APIs critical to money movement, implementing protocols like MFA (multi factor authentication), FRAML (fraud, risk, anti-money laundery), and ABAC (attribute based access control) that facilitated roughly $150 billion in annual transactions. I excel at fostering technical collaboration, driving consensus, and using a data-guided approach to inform development strategy.",
    },
  ];

  return (
    <div className="about-container">
      <Parallax
        opacity={[0, 1]}
        startScroll={100}
        endScroll={innerHeight}
        // Subtle Zoom In: Starts 5% smaller, scales to normal size
        scale={[0.95, 1]}
        // Keeps the main vertical movement as requested
        translateY={["0px", `-${innerHeight}px`]}>
        <div className="about">
          <h4>About</h4>
          <AboutParagraphs aboutData={aboutData} />
        </div>
      </Parallax>
    </div>
  );
};

export default About;
