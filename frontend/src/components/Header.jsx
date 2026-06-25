import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="/icon.png"
          alt="Logo"
          className="logo-img"
        />
        <h1 className="logo-text">Poções e Soluções</h1>
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/admin">Administrador</Link>
      </nav>
    </header>
  );
}