import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const menuItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Notes', path: '/notes' },
    { name: 'Etudiants', path: '/etudiants' },
    { name: 'Matières', path: '/matieres' },
    { name: 'A propos', path: '/apropos' }
  ]

  return (
    <nav className="navigation">
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <Link to={item.path} className="menu-button">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
