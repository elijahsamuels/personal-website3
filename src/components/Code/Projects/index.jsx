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
					<a href={project.prod_links ? project.prod_links[0].url : project.prod_link} className="prod-link">
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
					<div className="project-social-media-links" style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", padding: "10px 0" }}>
						
						{/* Ensure the Github/Gitlab anchors only render if they exist to prevent empty block issues */}
						{(project.github_link || project.gitlab_link) && (
							<a
								href={project.github_link || project.gitlab_link}
								target="_blank"
								rel="noreferrer"
								className="link social-media-icon github-link"
								style={{ display: "flex", height: "68px", alignItems: "center" }}
							>
								{project.github_link && <SiGithub size="1em" />}
								{!project.github_link && project.gitlab_link && <SiGitlab size="1em" />}
							</a>
						)}

						{project.prod_links ? (
							project.prod_links.map((linkItem, idx) => (
								<a
									key={idx}
									href={linkItem.url}
									target="_blank"
									rel="noreferrer"
									className="link prod-link"
									title={linkItem.name}
									style={{ textDecoration: 'none', display: 'flex' }}
								>
									<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", width: "120px" }}>
										
										{/* Wrapper enforcing fixed bounds */}
										<div style={{
											width: "120px", height: "68px", overflow: "hidden", position: "relative",
											borderRadius: "6px", border: "1px solid rgba(255, 255, 255, 0.3)",
											boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)", background: "#fff", flexShrink: 0
										}}>
											{/* Iframe explicitly avoiding max-width overrides to guarantee desktop mode scaling */}
											<iframe
												src={linkItem.url}
												title={`${linkItem.name} preview`}
												scrolling="no"
												loading="lazy"
												tabIndex="-1"
												style={{
													width: "1200px", minWidth: "1200px", maxWidth: "none", height: "680px",
													border: "none", transform: "scale(0.1)", transformOrigin: "0 0",
													pointerEvents: "none", position: "absolute", top: 0, left: 0
												}}
											/>
										</div>

										<span className="site-preview-label" style={{ 
											fontSize: "0.75rem", color: "#fff", textAlign: "center", 
											lineHeight: "1.2", fontWeight: "500", 
											whiteSpace: "normal", wordWrap: "break-word", width: "100%" 
										}}>
											{linkItem.name}
										</span>
									</div>
								</a>
							))
						) : (
							<a href={project.prod_link} target="_blank" rel="noreferrer" className="link social-media-icon prod-link" style={{ display: "flex", height: "68px", alignItems: "center" }}>
								{prodLinkReturn(project.prod_link)}
							</a>
						)}

						{project.diagram_img && (
							<div
								className="link social-media-icon diagram-link"
								onClick={() => setIsOpen(true)}
								title="View Architecture Diagram"
								style={{ cursor: "pointer", display: "flex", height: "68px", alignItems: "center" }}
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