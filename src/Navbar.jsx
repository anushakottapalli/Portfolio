import { useState, useEffect } from 'react'

const links = ['home', 'about', 'skills', 'projects', 'resume', 'contact']

function Navbar() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    links.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav">
      <div className="logo" onClick={() => scrollTo('home')}>
        Anu<span>sha</span>
      </div>
      <ul className="nav-links">
        {links.map((link) => (
          <li
            key={link}
            className={active === link ? 'active' : ''}
            onClick={() => scrollTo(link)}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar