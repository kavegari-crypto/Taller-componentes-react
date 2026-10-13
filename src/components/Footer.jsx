import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contacto">
      <p>ObraControl | Gestión de materiales</p>
      <p>
        © {new Date().getFullYear()} - Hecho para la clase de Desarrollo. 
      </p>
    </footer>
  );
}

export default Footer;