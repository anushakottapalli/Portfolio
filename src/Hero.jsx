const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="avatar">A</div>
      <h1>Hi, I'm <span>Anusha</span></h1>
      <p>
        Full Stack Developer | React |Flask |Python|mySQL
      </p>
      <div className="hero-btns">
        <button className="btn-primary" onClick={() => scrollTo('projects')}>
          View Projects
        </button>
        <button className="btn-outline" onClick={() => scrollTo('contact')}>
          Contact Me
        </button>
      </div>
    </section>
  )
}

export default Hero