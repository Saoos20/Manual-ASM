import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">

      {/* Header */}
      <header className="header">
        <h1>Manual de ASM (NASM) en Linux</h1>
        <p>Aprende ensamblador desde cero con ejemplos prácticos y explicaciones detalladas.</p>
      </header>

      {/* Introducción */}
      <section className="intro">
        <h2>🛠️ ¿Qué es ASM (NASM)?</h2>
        <p>
          El lenguaje ensamblador (ASM) es un lenguaje de bajo nivel que interactúa directamente con la arquitectura del procesador. 
          NASM (Netwide Assembler) es un ensamblador popular utilizado para crear programas en Linux, siendo conocido por su simplicidad y eficiencia.
        </p>
        <p>
          Este manual te guiará paso a paso a través de la sintaxis, instrucciones básicas, uso de registros, llamadas al sistema y técnicas avanzadas.
        </p>
      </section>

      {/* Datos Relevantes */}
      <section className="data-section">
        <h2>📊 Datos Relevantes</h2>
        <div className="data-grid">
          <div className="data-card">
            <h3>📌 Arquitectura</h3>
            <p>NASM es compatible con arquitecturas x86 y x86-64, ampliamente usadas en sistemas Linux.</p>
          </div>

          <div className="data-card">
            <h3>⚙️ Eficiencia</h3>
            <p>El código ASM es más rápido y consume menos recursos que lenguajes de alto nivel.</p>
          </div>

          <div className="data-card">
            <h3>💻 Uso común</h3>
            <p>Se usa para programación de sistemas, drivers y optimización de software.</p>
          </div>
        </div>
      </section>

      {/* Navegación */}
      <section className="navigation">
        <h2>📚 Navegación</h2>
        <nav>
          <ul>
            <li><Link to="/intro">Introducción</Link></li>
            <li><Link to="/exercises">Ejercicios</Link></li>
            <li><Link to="/references">Referencias</Link></li>
          </ul>
        </nav>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Manual ASM - Todos los derechos reservados.</p>
      </footer>

    </div>
  );
};

export default Home;
