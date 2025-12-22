import './Navigation.css'

function Navigation() {
  const menuItems = ['Notes', 'Etudiants', 'Matières', 'A propos']

  const handleMenuClick = (item) => {
    alert(item)
  }

  return (
    <nav className="navigation">
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <button onClick={() => handleMenuClick(item)} className="menu-button">
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
