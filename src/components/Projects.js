function Projects({ projects }) {
  return (
    <section className="section reveal" id="projects">
      {/* Project highlights section */}
      <h3 className="section-title">Projects</h3>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <h4 className="project-title">{project.name}</h4>
            <p className="project-description">{project.description}</p>
            <p className="project-tech">
              <strong>Technologies:</strong> {project.technologies.join(', ')}
            </p>
            {project.link && (
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                Open Project
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects