const links = ['home', 'about', 'skills', 'projects', 'resume', 'contact']

function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer-logo">Anu<span>sha</span></div>
      <ul className="footer-links">
        {links.map((link) => (
          <li key={link} onClick={() => scrollTo(link)}>
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </li>
        ))}
      </ul>
      <p className="footer-copy">© 2026 Anusha</p>
    </footer>
  )
}

export default Footer