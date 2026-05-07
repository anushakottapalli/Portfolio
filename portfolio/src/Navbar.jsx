const links = ['home', 'skills', 'projects', 'contact']

function Navbar({ active, setActive }) {
  return (
    <nav className="nav">
      <div className="logo">Anu<span>sha</span></div>
      <ul className="nav-links">
        {links.map(link => (
          <li
            key={link}
            className={active === link ? 'active' : ''}
            onClick={() => setActive(link)}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar