import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>📚 Acerca de este Manual de ASM y NASM</h1>

      {/* Introducción */}
      <section className="section">
        <h2>🎯 ¿Qué es este proyecto?</h2>
        <p>
          Este proyecto tiene como objetivo proporcionar una guía completa y
          accesible sobre el lenguaje ensamblador, específicamente utilizando NASM
          (Netwide Assembler). Es una herramienta educativa que pretende ayudar a
          estudiantes y desarrolladores a comprender cómo funciona el código de bajo
          nivel, cómo escribir programas en ensamblador, y cómo utilizar NASM de manera
          eficiente. Este manual cubre desde los conceptos básicos hasta técnicas más
          avanzadas, y te guía en la creación y ejecución de programas completos.
        </p>
      </section>

      {/* ¿Qué es ASM y NASM? */}
      <section className="section">
        <h2>🔍 ¿Qué es ASM y NASM?</h2>
        <p>
          El lenguaje ensamblador (ASM) es un lenguaje de programación de bajo
          nivel utilizado para interactuar directamente con la arquitectura de una
          máquina. Cada instrucción en ASM corresponde a una operación que el
          procesador puede ejecutar, lo que lo convierte en un lenguaje eficiente para
          tareas que requieren un control preciso sobre el hardware.
        </p>
        <p>
          NASM (Netwide Assembler) es uno de los ensambladores más populares. Permite
          escribir código de ensamblador para varias plataformas, incluyendo Linux y
          Windows. NASM se caracteriza por su sintaxis clara y poderosa, y es ampliamente
          utilizado en la enseñanza de programación a bajo nivel debido a su facilidad de
          uso y su compatibilidad con diferentes arquitecturas de procesador.
        </p>
      </section>

      {/* Objetivos del proyecto */}
      <section className="section">
        <h2>🎯 Objetivos del Proyecto</h2>
        <ul>
          <li>
            <strong>Proporcionar recursos educativos accesibles:</strong> Crear una
            plataforma donde los usuarios puedan aprender a escribir código en ASM y NASM.
          </li>
          <li>
            <strong>Mejorar la comprensión del código de bajo nivel:</strong> Ayudar a los
            estudiantes y desarrolladores a comprender cómo las computadoras ejecutan
            instrucciones a nivel de hardware.
          </li>
          <li>
            <strong>Facilitar la creación de proyectos en ensamblador:</strong> Guiar a los
            usuarios en la creación de proyectos más complejos utilizando NASM.
          </li>
          <li>
            <strong>Fomentar las buenas prácticas de programación:</strong> Promover la
            escritura de código limpio, modular y optimizado.
          </li>
        </ul>
      </section>

      {/* Metodología utilizada */}
      <section className="section">
        <h2>🧑‍💻 Metodología del Proyecto</h2>
        <p>
          Este manual ha sido estructurado de manera modular para que los usuarios
          puedan avanzar a su propio ritmo. La metodología se enfoca en la enseñanza
          práctica, proporcionando ejemplos de código, ejercicios interactivos y guías
          paso a paso. Los temas están organizados desde los fundamentos hasta las
          técnicas más avanzadas, permitiendo que los usuarios comprendan progresivamente
          cada concepto antes de avanzar a los siguientes temas.
        </p>
        <p>
          Además, el contenido está diseñado para ser accesible tanto a principiantes como
          a personas con experiencia previa en programación. A lo largo del manual, se
          destacan las mejores prácticas y se explican los conceptos clave de forma clara
          y concisa.
        </p>
      </section>

      {/* Contribuciones */}
      <section className="section">
        <h2>🤝 Contribuciones</h2>
        <p>
          Este proyecto está abierto a contribuciones. Si deseas ayudar a mejorar este
          manual, puedes hacerlo de las siguientes maneras:
        </p>
        <ul>
          <li>
            <strong>Mejorando el contenido:</strong> Si tienes ideas para nuevos temas o
            explicaciones más claras, puedes contribuir con nuevos textos y ejemplos.
          </li>
          <li>
            <strong>Corrigiendo errores:</strong> Si encuentras errores o inconsistencias
            en el manual, nos encantaría recibir tus correcciones.
          </li>
          <li>
            <strong>Compartiendo tus proyectos:</strong> Si has creado proyectos o
            ejemplos en NASM, compártelos con nosotros para que otros puedan aprender
            de ellos.
          </li>
        </ul>
        <p>
          Para contribuir, visita nuestro repositorio en GitHub y envíanos un pull
          request con tus mejoras. Estaremos encantados de revisar tus aportes y
          agradecemos mucho tu colaboración.
        </p>
      </section>

      {/* Licencia y Créditos */}
      <section className="section">
        <h2>📜 Licencia y Créditos</h2>
        <p>
          Este proyecto está licenciado bajo la <strong>Licencia MIT</strong>, lo que
          significa que puedes usar, modificar y distribuir este manual de forma libre,
          siempre y cuando se incluya una copia de la licencia original y la renuncia de
          responsabilidad.
        </p>
        <p>
          Agradecemos a todas las personas que han contribuido a este proyecto. También
          queremos dar crédito a los creadores de NASM, cuyo software de ensamblador ha
          hecho posible que este manual sea una herramienta educativa eficaz.
          ATTE: Juan Francisco Campero Enciso
          Contacto: juancampero20@gmail.com
        </p>
      </section>
    </div>
  );
};

export default About;
