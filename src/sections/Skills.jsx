function Skills() {
  return (
    <section className="Skills" id="skills">
      <div className="title" data-aos="fade-up" data-aos-duration="1500">
        <span>My Skills</span>
      </div>

      <div
        className="skills-details"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        <div className="text">
          <h3 className="topic">Tech Stack & Engineering Tools</h3>
          <p>
            I specialize in building full-stack web applications, combining
            interactive React frontends with scalable Node.js/Express backends,
            relational and NoSQL databases, and secure authentication systems.
          </p>

          <div className="experience">
            <div className="num">
              <i className="fas fa-layer-group"></i>
            </div>
            <div className="exp">
              Full-Cycle Web
              <br />
              <span>Development</span>
            </div>
          </div>
        </div>

        <div
          className="skill-boxes"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="400"
        >
          <div className="boxes">
            <i className="fab fa-react"></i>
            <div className="box-info">
              <span className="topic">React.js</span>
              <span className="level">Frontend Framework</span>
            </div>
          </div>

          <div className="boxes">
            <i className="fab fa-node-js"></i>
            <div className="box-info">
              <span className="topic">Node.js & Express</span>
              <span className="level">Backend & REST APIs</span>
            </div>
          </div>

          <div className="boxes">
            <i className="fab fa-js-square"></i>
            <div className="box-info">
              <span className="topic">JavaScript / TypeScript</span>
              <span className="level">ES6+ / Async</span>
            </div>
          </div>

          <div className="boxes">
            <i className="fas fa-database"></i>
            <div className="box-info">
              <span className="topic">MySQL & MongoDB</span>
              <span className="level">Database Management</span>
            </div>
          </div>

          <div className="boxes">
            <i className="fas fa-shield-alt"></i>
            <div className="box-info">
              <span className="topic">JWT & Bcrypt</span>
              <span className="level">Authentication & Security</span>
            </div>
          </div>

          <div className="boxes">
            <i className="fab fa-git-alt"></i>
            <div className="box-info">
              <span className="topic">Git & GitHub</span>
              <span className="level">Version Control</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
