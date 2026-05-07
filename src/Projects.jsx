const projects = [
  { title: 'Buyroute Clone', desc: 'E-commerce app with cart, search, and product filtering.', tags: ['Python', 'Flask', 'MySQL','Html','JavaScript', 'CSS','Razorpay'] },
  { title:'Simple Notes Management System', desc: 'A simple app to create, edit, and delete notes.', tags: ['python','Flask','MySQL','JavaScript', 'HTML', 'CSS']},
  { title: 'Weather App',    desc: 'Live weather data using OpenWeather API with city search.', tags: ['JavaScript','Html','css', 'API'] },
  { title: 'Airbnb Clone',  desc: 'Clone of the popular vacation rental platform.',       tags: ['Html', 'css','JavaScript'] },
   { title: 'Paytm Clone',  desc: 'Clone of the popular vacation money payment platform.',       tags: ['Html', 'css','JavaScript'] },
]

function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <h2 className="section-title">My <span>Projects</span></h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="proj-card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="proj-bottom">
              <div className="tags">
                {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects