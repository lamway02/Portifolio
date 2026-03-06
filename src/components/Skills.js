function Skills({ skills }) {
  return (
    <section className="section reveal" id="skills">
      {/* Skills section with badge-style tags */}
      <h3 className="section-title">Skills</h3>
      <div className="skills-wrap">
        {skills.map((skill) => (
          <span className="skill-badge" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills