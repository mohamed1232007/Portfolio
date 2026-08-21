function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="title" data-aos="fade-up" data-aos-duration="1500">
          <span>Contact Me</span>
        </div>
        <div className="text">
          <div
            className="topic"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            Let's Build Something Great Together!
          </div>
          <p>
            Available for full-time Full-Stack, Front-End, and Back-End
            positions, freelance clients, and engineering collaborations.
          </p>
          <div
            className="button"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            <a href="mailto:mohamedibraim1232007@gmail.com" className="btn">
              Let's Chat
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;