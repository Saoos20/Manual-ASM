import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logoAsm from "../assets/logo_nasm.png";  // Importa el logo

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Logo en la parte superior */}
      <div className="logo-container">
        <img src={logoAsm} alt="Logo ASM" className="logo" />
      </div>
      <h2>📚 Manual ASM</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">🏠 Home</Link>
          </li>
          <li>
            <Link to="/intro">📖 Introducción</Link>
          </li>
          <li>
            <Link to="/commands">⚙️ Comandos</Link>
          </li>
          <li>
            <Link to="/examples">💻 Ejemplos</Link>
          </li>
          <li>
            <Link to="/tips">🔧 Consejos</Link>
          </li>
          <li>
            <Link to="/about">ℹ️ Acerca de</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
