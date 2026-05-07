const experience = [
  { role: 'Python Full Stack Developer Trainee', company: 'Codegnan IT', period: 'JULY 2025 – NOV 2025' },
]

const education = [
  { degree: 'B.SC – Computers', college: 'Adikavi Nannaya University – Rajahmundry', period: '2022 – 2025', desc: 'Graduated with 8.23 CGPA. Focused on web technologies.' },
  { degree: 'Intermediate – MPC', college: 'KVM Chambers Junior College – Palakollu', period: '2020 – 2022', desc: 'Scored 54% in board exams. Strong foundation in Maths and Physics.' },
]

function Timeline({ items, isEdu }) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <div className="timeline-item" key={i}>
          <div className="timeline-dot" />
          <div className="timeline-body">
            <h4>{isEdu ? item.degree : item.role}</h4>
            <div className="timeline-meta">
              <span>{isEdu ? item.college : item.company}</span>
              <em>{item.period}</em>
            </div>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function Resume() {
  return (
    <section id="resume" className="section">
      <h2 className="section-title">My <span>Resume</span></h2>
      <div className="resume-grid">
        <div>
          <h3 className="resume-col-title">Experience</h3>
          <Timeline items={experience} isEdu={false} />
        </div>
        <div>
          <h3 className="resume-col-title">Education</h3>
          <Timeline items={education} isEdu={true} />
        </div>
      </div>
    </section>
  )
}

export default Resume