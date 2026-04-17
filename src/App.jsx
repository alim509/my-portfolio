import './App.css'

function App() {
  const projects = [
    {
      title: 'Integration Project One',
      description:
        'A placeholder project for an API or integration build. Replace this with a real project summary, stack, and outcome.',
      tech: ['React', 'REST API', 'JSON'],
      link: '#',
    },
    {
      title: 'Integration Project Two',
      description:
        'Use this to describe a transformation, middleware, or automation project with measurable impact.',
      tech: ['XML', 'XSLT', 'Node.js'],
      link: '#',
    },
    {
      title: 'Integration Project Three',
      description:
        'Highlight a project that shows backend logic, data mapping, or enterprise workflow understanding.',
      tech: ['Python', 'Workflows', 'APIs'],
      link: '#',
    },
  ]

  const skills = [
    'React',
    'JavaScript',
    'REST APIs',
    'JSON',
    'XML',
    'XSLT',
    'Python',
    'Integration Design',
    'Data Mapping',
    'Troubleshooting',
  ]

  return (
    <div className="page">
      <header className="site-header">
        <div className="container nav">
          <div>
            <h1 className="site-name">Angelo Vino Lim</h1>
            <p className="site-subtitle">Integration Developer</p>
          </div>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Portfolio Website</p>
              <h2 className="hero-title">
                Building modern integration and API solutions.
              </h2>
              <p className="hero-text">
                I design and build technical solutions across APIs, data
                transformation, automation, and backend workflows. This site is
                a starting point for showcasing projects, technical strengths,
                and business impact.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="button button-primary">
                  View Projects
                </a>
                <a href="#contact" className="button button-secondary">
                  Contact Me
                </a>
              </div>
            </div>

            <div className="hero-cards">
              <div className="card">
                <p className="card-label">Current Focus</p>
                <h3>Enterprise integrations</h3>
                <p>
                  APIs, structured data, transformations, validation logic, and
                  systems that connect business workflows.
                </p>
              </div>

              <div className="stats-grid">
                <div className="card stat-card">
                  <p className="stat-number">3+</p>
                  <p>Featured Projects</p>
                </div>
                <div className="card stat-card">
                  <p className="stat-number">10+</p>
                  <p>Core Skills</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="card">
              <p className="eyebrow">About</p>
              <h3>A clean base you can grow fast</h3>
              <p className="section-text">
                Replace this section with a short introduction about your
                background, what you specialize in, and the kinds of roles you
                are targeting. Keep it concise, clear, and focused on value.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <p className="eyebrow">Projects</p>
            <h3 className="section-title">Featured work</h3>

            <div className="projects-grid">
              {projects.map((project) => (
                <div className="card project-card" key={project.title}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.tech.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <a href={project.link} className="project-link">
                    View project →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="card">
              <p className="eyebrow">Skills</p>
              <h3 className="section-title">Core strengths</h3>

              <div className="tag-list">
                {skills.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <div className="card contact-card">
              <p className="eyebrow">Contact</p>
              <h3 className="section-title">Let’s connect</h3>
              <p className="section-text">
                Add your email, LinkedIn, GitHub, and any other place you want
                recruiters or hiring managers to reach you.
              </p>

              <div className="contact-links">
                <a
                  href="mailto:angelovinolim@gmail.com"
                  className="contact-pill"
                >
                  angelovinolim@gmail.com
                </a>

                <a
                  href="https://www.linkedin.com/in/angelo-lim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-pill"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/alim509"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-pill"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App