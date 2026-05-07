import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    alert(`Thanks ${form.name}! I'll get back to you soon.`)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section section-alt">
      <h2 className="section-title">Get in <span>Touch</span></h2>
      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-item"><span>Email</span><p>anushakottapalli2005@gmail.com</p></div>
          <div className="contact-item"><span>Location</span><p>Andhra Pradesh, India</p></div>
          <div className="contact-item"><span>LinkedIn</span><p><a href="https://www.linkedin.com/in/anusha-kottapalli-304b83332/" target="_blank" rel="noopener noreferrer">linkedin</a></p></div>
          <div className="contact-item"><span>GitHub</span><p><a href="https://github.com/anushakottapalli" target="_blank" rel="noopener noreferrer">github</a></p></div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <input  name="name"    value={form.name}    onChange={handle} placeholder="Your name"     required />
          <input  name="email"   value={form.email}   onChange={handle} placeholder="Your email"    type="email" required />
          <textarea name="message" value={form.message} onChange={handle} placeholder="Your message..." required />
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact