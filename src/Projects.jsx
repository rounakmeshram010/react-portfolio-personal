import React from "react";

const placeholderProjects = [
  { id: 1, title: "Project 1", description: "Description coming soon.", link: "#" },
  { id: 2, title: "Project 2", description: "Description coming soon.", link: "#" },
  { id: 3, title: "Project 3", description: "Description coming soon.", link: "#" },
];

const Projects = () => {
  return (
    <div className="section projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {placeholderProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;