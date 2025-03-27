import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importación de componentes
import Sidebar from "./components/Sidebar"; // Barra lateral de navegación
import Home from "./pages/Home"; // Página principal
import Intro from "./pages/Intro"; // Página de introducción
import Commands from "./pages/Commands"; // Página de comandos
import Examples from "./pages/Examples"; // Página de ejemplos
import Tips from "./pages/Tips"; // Página de consejos
import About from "./pages/About"; // Página de "Acerca de"

// Importación de ejemplos de NASM x86
import Calculadora from "./pages/examples/Calculadora";
import Ciclo from "./pages/examples/Ciclo";
import Hola from "./pages/examples/Hola";
import Leer from "./pages/examples/Leer";
import Suma from "./pages/examples/Suma";
import CicloSuma from "./pages/examples/CicloSuma";

// Importación de ejemplos de ASM GCC
import CalculadoraGcc from "./pages/examples/CalculadoraGcc";
import EsPar from "./pages/examples/EsPar";
import Factorial from "./pages/examples/Factorial";
import LeerGcc from "./pages/examples/LeerGcc";
import Piramide from "./pages/examples/Piramide";
import Raiz from "./pages/examples/Raiz";
import SumaGcc from "./pages/examples/SumaGcc";


import "./App.css"; // Estilos de la aplicación

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Barra lateral de navegación */}
        <Sidebar />
        <div className="content">
          {/* Rutas de la aplicación */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/commands" element={<Commands />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/about" element={<About />} />

            {/* Rutas de ejemplos de NASM x86 */}
            <Route path="/examples/nasm/calculadora" element={<Calculadora />} />
            <Route path="/examples/nasm/ciclo" element={<Ciclo />} />
            <Route path="/examples/nasm/hola" element={<Hola />} />
            <Route path="/examples/nasm/leer" element={<Leer />} />
            <Route path="/examples/nasm/suma" element={<Suma />} />
            <Route path="/examples/nasm/ciclo-suma" element={<CicloSuma />} />

            {/* Rutas de ejemplos de ASM GCC */}
            <Route path="/examples/asm-gcc/calculadora" element={<CalculadoraGcc />} />
            <Route path="/examples/asm-gcc/es-par" element={<EsPar />} />
            <Route path="/examples/asm-gcc/factorial" element={<Factorial />} />
            <Route path="/examples/asm-gcc/leer" element={<LeerGcc />} />
            <Route path="/examples/asm-gcc/piramide" element={<Piramide />} />
            <Route path="/examples/asm-gcc/raiz" element={<Raiz />} />
            <Route path="/examples/asm-gcc/suma" element={<SumaGcc />} />

            {/* Ejemplos asm x86 */}
            <Route path="/examples/nasm-x86/calculadora" element={<Calculadora />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
