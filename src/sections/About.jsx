import heroImg from "../assets/img/a7860cbbf06f03f750d6d14f3825946b.jpg";
function About() {
  const startDownload = () => {
    window.open("./Mohamed_Ibrahim_CV.pdf", "_blank");
  };

  return (
    <>
      <section className="about" id="about">
        <div className="content">
          <div className="title" data-aos="fade-up" data-aos-duration="1500">
            <span>About Me</span>
          </div>
          <div className="about-details">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              <img src={heroImg} alt="img-portfolio" />
            </div>

            <div className="right">
              <div
                className="topic"
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-delay="200"
              >
                Full-Stack Developer
              </div>
              <p
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-delay="300"
              >
                I am a detail-oriented Full-Stack Developer dedicated to
                building scalable, end-to-end web applications. Skilled in
                crafting dynamic React interfaces and engineering robust
                Node.js/Express backends with database integration, secure
                authentication, and RESTful APIs.
              </p>
            </div>

            <div
              className="button"
              data-aos="zoom-in-right"
              data-aos-duration="1500"
              data-aos-delay="400"
            >
              <button onClick={startDownload} className="btn">
                View My CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
