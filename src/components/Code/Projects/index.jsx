// import { useId } from "react";
import ProjectsObject from "./ProjectsObject";
import "./Projects.css";
import { SiGitlab, SiGithub, SiNetlify, SiHeroku, SiApplemusic } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";

document.title = `Elijah Samuels | Projects`;

// Helper function: prodLinkReturn
const prodLinkReturn = (linkProps) => {
  let size = "1em";
  if (linkProps.includes("netlify")) {
    return <SiNetlify size={size} />;
  } else if (linkProps.includes("heroku")) {
    return <SiHeroku size={size} />;
  } else if (linkProps.includes("aws")) {
    return <FaAws size={size} />;
  } else {
    return <SiApplemusic size={size} />;
  }
};

// Component: ProjectsList (formerly ProjectsReturn)
const ProjectsList = () => {
  return ProjectsObject.map((project, index) => {
    const startScroll = index * 100;
    const endScroll = startScroll + 300;
    const translateYValue = typeof window !== 'undefined' 
      ? [`0px`, `-${window.innerHeight / 4}px`] 
      : [`0px`, `-100px`];

    return (
      <Parallax
        opacity={[0, 2]}
        key={`project-${project.name}`}
        startScroll={startScroll}
        endScroll={endScroll}
        translateY={translateYValue}>
        <div className="project">
          <a href={project.prod_link} className={"prod-link"}>
            <div className="project-name">{project.name}</div>
          </a>
          <div className="project-description">{project.description}</div>
          {project.skills_used.map((skill) => (
            <div className="project-skills" key={`${project.name}-${skill}`}>
              {skill}
            </div>
          ))}
          <div className="project-social-media-links">
            <a
              href={project.github_link || project.gitlab_link}
              target="_blank"
              rel="noreferrer"
              className="link social-media-icon github-link">
              {project.github_link && <SiGithub size="1em" />}
              {project.gitlab_link && <SiGitlab size="1em" />}
            </a>
            <a
              href={project.prod_link}
              target="_blank"
              rel="noreferrer"
              className="link social-media-icon prod-link">
              {prodLinkReturn(project.prod_link)}
            </a>
          </div>
        </div>
      </Parallax>
    );
  });
};


// Main Component: Projects
const Projects = () => {
  // useId is not strictly needed here if we use project.name as the key 
  // in the ProjectsList component, which is a better practice.
  // let id = useId(); 

  // The rest of the component's state/logic can remain here.

  return (
    <div>
      {/* 3. Now, call ProjectsList as a standard React component.
        This ensures it is only defined once and rendered correctly. 
      */}
      <ProjectsList />
    </div>
  );
};

export default Projects;