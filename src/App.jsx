import './App.css'

function App() {
  const projects = [
    {
      title: 'SpeakEasy – AI Language Platform',
      description:
        'AI-powered language learning platform with real-time conversational practice, REST API integration, and full-stack architecture using React and Node.js.',
      tech: ['React', 'Node.js', 'MongoDB', 'API Integration', 'AI Integration'],
      link: 'https://github.com/Capstone-Projects-2024-Spring/project-speakeasy.git',
    },
    {
      title: 'Connect4 – Voice Control',
      description:
        'Voice-controlled Connect 4 game that converts speech into validated moves with real-time input processing and a heuristic-based AI opponent.',
      tech: ['Python', 'Speech Recognition', 'Input Processing', 'Heuristic AI'],
      link: 'https://github.com/cis3296f23/Connect4_SpeechRecognition.git',
    }
  ]

  const skills = [
      "C#",
      "SQL",
      "JavaScript",
      "Python",
      "React",
      "Node.js",
      "REST APIs",
      "API Integration",
      "Data Transformation (JSON / XML)",
      "AWS",
      "Cloud Computing",
      "Backend Development",
      "Data Analysis",
      "Fraud Detection Systems",
      "Workflow Automation",
      "System Design",
      "Git",
      "Linux"
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
                Building fraud detection and data-driven backend systems.
              </h2>
              <p className="hero-text">
                I build scalable backend solutions using C#, SQL, and AWS,
                specializing in API integration, data transformation,and system
                automation. My focus is on developing reliable systems that
                analyze complex data and support critical business workflows.
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
                <h3>Fraud Analysis & Backend Development</h3>
                <p>
                  <li>API Integration & Distributed System Design</li>
                  <li>Data Transformation & Pipeline Processing (JSON, XML)</li>
                  <li>Fraud Detection & Analytical Systems</li>
                  <li>Workflow Automation & Scalable Backend Solutions</li>
                </p>
              </div>

              <div className="stats-grid">
                <div className="card stat-card">
                  <p className="stat-number">2+</p>
                  <p>Featured Projects</p>
                </div>
                <div className="card stat-card">
                  <p className="stat-number">15+</p>
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
                <p className="section-text">
                  I am a Fraud Data Analyst and Integration Developer at FAST Enterprises, focused on building fraud detection and data-driven systems for government agencies.
                </p>

                <p className="section-text">
                  I specialize in backend development using C#, SQL, and AWS, with a strong emphasis on API integrations, data transformation (JSON/XML), and workflow automation.
                </p>

                <p className="section-text">
                  My work involves analyzing complex datasets to detect fraudulent activity and developing scalable solutions that improve operational efficiency.
                </p>

                <p className="section-text">
                  I collaborate closely with stakeholders to translate business requirements into reliable technical systems that enhance services and streamline processes.
                </p>

                <p className="section-text">
                  I hold a B.S. in Computer Science from Temple University with a focus in Cybersecurity, and have experience across full-stack development, cloud technologies, and system design.
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