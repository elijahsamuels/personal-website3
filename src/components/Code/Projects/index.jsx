import { useState } from "react";
import ProjectsObject from "./ProjectsObject";
import { SiGitlab, SiGithub, SiNetlify, SiHeroku, SiApplemusic } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { MdAccountTree, MdClose } from "react-icons/md";
import { Parallax } from "react-scroll-parallax";

import "./Projects.css";

const prodLinkReturn = (linkProps) => {
  let size = "1em";
  if (linkProps.includes("netlify")) return <SiNetlify size={size} />;
  if (linkProps.includes("heroku")) return <SiHeroku size={size} />;
  if (linkProps.includes("aws")) return <FaAws size={size} />;
  return <SiApplemusic size={size} />;
};

const ProjectItem = ({ project, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const startScroll = index * 100;
  const endScroll = startScroll + 100;
  const translateYValue = typeof window !== "undefined" ? [`0px`, `-${window.innerHeight / 4}px`] : [`0px`, `-100px`];

  return (
    <>
      <Parallax
        opacity={[0, 2]}
        key={`project-${project.name}`}
        startScroll={startScroll}
        endScroll={endScroll}
        translateY={translateYValue}
      >
        <div className="project">
          <a href={project.prod_link} className="prod-link">
            <div className="project-name">{project.name}</div>
          </a>
          <div className="project-description">{project.description}</div>
          <div className="project-skills-container">
            {project.skills_used.map((skill) => (
              <div className="project-skills" key={`${project.name}-${skill}`}>
                {skill}
              </div>
            ))}
          </div>
          <div className="project-social-media-links">
            <a
              href={project.github_link || project.gitlab_link}
              target="_blank"
              rel="noreferrer"
              className="link social-media-icon github-link"
            >
              {project.github_link && <SiGithub size="1em" />}
              {project.gitlab_link && <SiGitlab size="1em" />}
            </a>
            <a href={project.prod_link} target="_blank" rel="noreferrer" className="link social-media-icon prod-link">
              {prodLinkReturn(project.prod_link)}
            </a>
            {project.diagram_img && (
              <div
                className="link social-media-icon diagram-link"
                onClick={() => setIsOpen(true)}
                title="View Architecture Diagram"
                style={{ cursor: "pointer" }}
              >
                <MdAccountTree size="1.2em" />
              </div>
            )}
          </div>
        </div>
      </Parallax>

{isOpen && (
  <div className="modal-overlay" onClick={() => setIsOpen(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header">
        <h3>{project.name} Architecture</h3>
        <MdClose className="modal-close" onClick={() => setIsOpen(false)} />
      </div>
      
      {/* The Scrollable Viewport */}
      <div className="modal-scroll-area">
        <img 
          src={project.diagram_img} 
          alt="Architecture Diagram" 
          className="modal-image-native" 
        />
      </div>
    </div>
  </div>
)}    </>
  );
};

const ProjectsList = () => {
  return ProjectsObject.map((project, index) => (
    <ProjectItem project={project} index={index} key={project.name} />
  ));
};

const Projects = () => <ProjectsList />;

export default Projects;