import React, { useId } from "react";
import ProjectsObject from "./ProjectsObject";
import "./Projects.css";
import { SiGithub, SiNetlify, SiHeroku, SiApplemusic } from "react-icons/si";

const Projects = () => {
  let id = useId();

  // const [projectHover, setProjectHover] = useState("project");

  // useEffect(() => {
  // 	if (/* element is hovered */) {
  // 		setProjectHover("project")

  // 	}
  // }, [projectHover])

  // console.log("projectHover:", projectHover);
  const prodLinkReturn = (linkProps) => {
    let size = "1em";
    if (linkProps.includes("netlify")) {
      return <SiNetlify size={size} />;
    } else if (linkProps.includes("heroku")) {
      return <SiHeroku size={size} />;
    } else {
      return <SiApplemusic size={size} />;
    }
  };

  const ProjectsReturn = () => {
    return ProjectsObject.map((project) => {
      return (
        <div className="project" key={`${project.name}-${id}`}>
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
              href={project.github_link}
              target="_blank"
              rel="noreferrer"
              className="link social-media-icon github-link">
              <SiGithub size="1em" />
            </a>
            <a
              href={project.prod_link}
              target="_blank"
              rel="noreferrer"
              className="link social-media-icon github-link">
              {prodLinkReturn(project.prod_link)}
            </a>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <ProjectsReturn />
    </div>
  );
};

export default Projects;
