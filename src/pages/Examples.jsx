import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Examples.css";

const Examples = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const nasmExamples = [
    "Calculadora",
    "Ciclo",
    "Hola",
    "Leer",
    "Suma",
    "Ciclo Suma",
  ];

  const asmGccExamples = [
    "Calculadora",
    "Es Par",
    "Factorial",
    "Leer",
    "Piramide",
    "Raiz",
    "Suma",
  ];

  return (
    <div className="examples-container">
      <h1>💻 Ejemplos de Código</h1>

      {/* Selección de Lenguaje */}
      <div className="options">
        <button className="option-btn" onClick={() => setSelectedLanguage("nasm")}>
          Ejemplos NASM x86
        </button>
        <button className="option-btn" onClick={() => setSelectedLanguage("asmGcc")}>
          Ejemplos ASM GCC
        </button>
      </div>

      {/* Mostrar opciones según el lenguaje seleccionado */}
      {selectedLanguage === "nasm" && (
        <div className="examples-list">
          <h2>Ejemplos NASM x86</h2>
          <ul>
            {nasmExamples.map((example, index) => (
              <li key={index}>
                <Link to={`/examples/nasm/${example.toLowerCase().replace(" ", "-")}`}>
                  {example}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedLanguage === "asmGcc" && (
        <div className="examples-list">
          <h2>Ejemplos ASM GCC</h2>
          <ul>
            {asmGccExamples.map((example, index) => (
              <li key={index}>
                <Link to={`/examples/asm-gcc/${example.toLowerCase().replace(" ", "-")}`}>
                  {example}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Examples;
