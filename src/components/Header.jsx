import "./Header.css";

function Header() {
  return (
    <header className="header">
      <a href="#inicio" className="header-logo">
        Obra<span>Control</span>
      </a>

      <nav className="header-nav">
        <a href="#inicio">Inicio</a>
        <a href="#materiales">Materiales</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a href="#materiales" className="header-button">
        Ver costos
      </a>
    </header>
  );
}

export default Header;