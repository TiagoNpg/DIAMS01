import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="site-header">
      <h1>Deadlift championship</h1>
      <nav className="site-nav" aria-label="Navegacao principal">
        <Link to="/">Home</Link>
        <Link to="/galeria">Galeria</Link>
        <Link to="/inquerito">Inquerito</Link>
        <Link to="/voluntariado">Voluntariado</Link>
        <Link to="/bilhetes">Bilhetes</Link>
      </nav>
    </header>
  )
}

export default Header
