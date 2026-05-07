const skills = [
  { name: 'Python',      level: 'Advanced',     pct: 85 },
  { name: 'Flask',      level: 'Intermediate',     pct: 75 },
  { name: 'JavaScript', level: 'Intermediate',     pct: 70 },
  { name: 'React',      level: 'Intermediate',     pct: 72},
  { name: 'MySQL',      level: 'Advanced',     pct: 85 },
  { name: 'HTML5',      level: 'Advanced',       pct: 87 },
  { name: 'CSS3',       level: 'Expert',       pct: 92 },
  { name: 'Git',        level: 'Intermediate', pct: 70 },
 
]

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">My <span>Skills</span></h2>
      <div className="skills-grid">
        {skills.map((s) => (
          <div className="skill-card" key={s.name}>
            <div className="skill-top">
              <h3>{s.name}</h3>
              <span>{s.pct}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${s.pct}%` }} />
            </div>
            <p>{s.level}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills