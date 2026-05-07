function About() {
  return (
    <section id="about" className="section section-alt">
      <h2 className="section-title">About <span>Me</span></h2>
      <div className="about-grid">
        <div className="about-card">
          <div className="avatar-sm">A</div>
          <h3>Anusha</h3>
          <p>Full Stack Developer</p>
          <div className="socials">
            <a href="https://github.com/anushakottapalli" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/anusha-kottapalli-304b83332/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div>
          <p className="bio">
            Hi! I'm Anusha, a passionate Full Stack Developer from Andhra Pradesh, India.
            I love turning ideas into beautiful, functional web experiences using React
            and modern CSS. I enjoy clean code, good design, and continuous learning.
          </p>
          <div className="info-list">
            <div className="info-row"><span>Name</span><p>Kottapalli Anusha</p></div>
            <div className="info-row"><span>Location</span><p>Andhra Pradesh, India</p></div>
            <div className="info-row"><span>Email</span><p>anushakottapalli2005@gmail.com</p></div>
            <div className="info-row"><span>Degree</span><p>B.sc Computers</p></div>
            <div className="info-row"><span>Experience</span><p>Fresher</p></div>
            <div className="info-row"><span>Available</span><p className="open">Open to work</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About