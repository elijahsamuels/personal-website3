import { useState, useEffect } from "react";
import ProjectsObject from "./ProjectsObject";
import { SiGitlab, SiGithub } from "react-icons/si";
import { MdAccountTree, MdClose, MdLaunch } from "react-icons/md";
import "./Projects.css";

const ProjectCard = ({ project, onOpenDiagram }) => {
  return (
    <article className="hig-card">
      <div className="hig-card-content">
        <div className="hig-card-header">
          {project.category && (
            <span className="hig-category-pill">{project.category}</span>
          )}
          <div className="hig-card-top-actions">
            {project.diagram_img && (
              <button
                type="button"
                className="hig-icon-btn"
                onClick={() => onOpenDiagram(project)}
                title="View Architecture Diagram"
                aria-label={`View ${project.name} Architecture Diagram`}
              >
                <MdAccountTree size="1.15em" />
              </button>
            )}
            {(project.github_link || project.gitlab_link) && (
              <a
                href={project.github_link || project.gitlab_link}
                target="_blank"
                rel="noreferrer"
                className="hig-icon-btn"
                title="View Source Code"
                aria-label={`View ${project.name} Source Code`}
              >
                {project.github_link ? <SiGithub size="1.05em" /> : <SiGitlab size="1.05em" />}
              </a>
            )}
          </div>
        </div>

        <h3 className="hig-card-title">{project.name}</h3>
        <p className="hig-card-description">{project.description}</p>

        {project.prod_links && project.prod_links.length > 0 && (
          <div className="hig-previews-container">
            {project.prod_links.map((linkItem, idx) => (
              <a
                key={idx}
                href={linkItem.url}
                target="_blank"
                rel="noreferrer"
                className="hig-preview-card"
                title={`Open ${linkItem.name}`}
              >
                <div className="hig-iframe-wrapper">
                  <iframe
                    src={linkItem.url}
                    title={`${linkItem.name} preview`}
                    scrolling="no"
                    loading="lazy"
                    tabIndex="-1"
                    inert=""
                    aria-hidden="true"
                    className="hig-preview-iframe"
                  />
                </div>
                <span className="hig-preview-label">
                  <span>{linkItem.name}</span>
                  <MdLaunch className="hig-preview-launch-icon" size="0.85em" />
                </span>
              </a>
            ))}
          </div>
        )}

        {project.skills_used && project.skills_used.length > 0 && (
          <div className="hig-tags-wrapper">
            {project.skills_used.map((skill) => (
              <span className="hig-skill-tag" key={`${project.name}-${skill}`}>
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  useEffect(() => {
    document.title = "Elijah Samuels | Projects";
  }, []);

  const categories = ["All", "Desktop Apps", "Web Tools", "Full Stack", "Web Apps"];

  const filteredProjects = selectedCategory === "All"
    ? ProjectsObject
    : ProjectsObject.filter((p) => p.category === selectedCategory);

  return (
    <div className="hig-projects-page">
      <header className="hig-projects-header">
        <h1 className="hig-page-title">Projects</h1>
        <p className="hig-page-subtitle">
          Web applications, interactive client-side tools, and distributed systems.
        </p>

        <nav className="hig-segmented-control" aria-label="Project Categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`hig-segment-btn ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </nav>
      </header>

      <section className="hig-projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            onOpenDiagram={setActiveModalProject}
          />
        ))}
      </section>

      {activeModalProject && (
        <div className="hig-modal-overlay" onClick={() => setActiveModalProject(null)}>
          <div className="hig-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="hig-modal-header">
              <h3 className="hig-modal-title">{activeModalProject.name} Architecture</h3>
              <button
                type="button"
                className="hig-modal-close"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
              >
                <MdClose size="1.3em" />
              </button>
            </div>
            <div className="hig-modal-body">
              <img
                src={activeModalProject.diagram_img}
                alt={`${activeModalProject.name} Architecture Diagram`}
                className="hig-modal-image"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;