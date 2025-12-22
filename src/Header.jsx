import reactLogo from './assets/react.svg'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={reactLogo} alt="Logo Formation React" />
      </div>
      <h1 className="header-title">Introduction à React</h1>
      <h2 className="header-subtitle">A la découverte des premières notions de React</h2>
    </header>
  )
}

export default Header
