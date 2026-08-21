function Projects() {
  return (
    <>
      <section className="projects" id="projects">
        <div className="title" data-aos="fade-up" data-aos-duration="1200">
          <span>My Projects</span>
        </div>
        <div className="projects-container">
          <div
            className="project-card"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <div className="project-info">
              <h3>Advanced E-Commerce Platform</h3>
              <div className="tech-tags">
                <span>React 19</span> <span>TypeScript</span>
                <span>Vite</span> <span>AWS</span>
                <span>Vercel</span>
              </div>
              <p>
                Comprehensive e-commerce application engineered with React 19
                and TypeScript for compile-time type-safety and bug prevention.
                Integrated dynamic product fetching and hosted on AWS.
              </p>
              <div className="project-links">
                <a
                  href="https://ecommerce-project-virid-zeta.vercel.app/"
                  target="_blank"
                  className="btn-sm"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  Live Demo
                </a>
                <a
                  href="https://github.com/mohamed1232007/ecommerce-project"
                  target="_blank"
                  className="btn-sm outline"
                >
                  <i className="fa-brands fa-github"></i> Source Code
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-card"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            <div className="project-info">
              <h3>Store-Tech E-Commerce Platform</h3>
              <div className="tech-tags">
                <span>Vanilla JS</span> <span>JSON</span>
                <span>LocalStorage</span> <span>CSS3</span>
              </div>
              <p>
                Fully responsive tech-products online store. Features dynamic
                data fetching and parsing from local <strong>JSON files</strong>{" "}
                to mimic real APIs, with cart persistence via LocalStorage.
              </p>
              <div className="project-links">
                <a
                  href="https://mohamed1232007.github.io/store-tech/"
                  target="_blank"
                  className="btn-sm"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  Live Demo
                </a>
                <a
                  href="https://github.com/mohamed1232007/store-tech"
                  target="_blank"
                  className="btn-sm outline"
                >
                  <i className="fa-brands fa-github"></i> Source Code
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-card"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="600"
          >
            <div className="project-info">
              <h3>AI Chatbot Application</h3>
              <div className="tech-tags">
                <span>React.js</span> <span>Context API</span>
                <span>CSS</span>
              </div>
              <p>
                Interactive chatbot UI built using modular React components and
                state management. Features real-time message log updates, event
                handling, and modern UI responses.
              </p>
              <div className="project-links">
                <a
                  href="https://chatbot-mo-1207.vercel.app/"
                  target="_blank"
                  className="btn-sm"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  Live Demo
                </a>
                <a
                  href="https://github.com/mohamed1232007/chatbot"
                  target="_blank"
                  className="btn-sm outline"
                >
                  <i className="fa-brands fa-github"></i> Source Code
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-card"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            <div className="project-info">
              <h3>Customer Support System</h3>
              <div className="tech-tags">
                <span>JavaScript</span>
                <span>Firebase Firestore</span>
                <span>Firebase Hosting</span> <span>CSS</span>
              </div>
              <p>
                Real-time customer support platform featuring instant live chat,
                a ticketing system for complaints, and a protected Admin
                Dashboard for managing active sessions.
              </p>
              <div className="project-links">
                <a
                  href="https://cs-system-8b279.web.app/"
                  target="_blank"
                  className="btn-sm"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  Live Demo
                </a>
                <a
                  href="https://github.com/mohamed1232007/cs-system"
                  target="_blank"
                  className="btn-sm outline"
                >
                  <i className="fa-brands fa-github"></i> Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Projects;