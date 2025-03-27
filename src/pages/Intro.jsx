import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro-container">

      {/* Header */}
      <header className="header">
        <h1>Introducción Completa a ASM (NASM)</h1>
        <p>Guía detallada sobre programación en ensamblador en Linux con NASM.</p>
      </header>

      {/* Sección: ¿Qué es ASM? */}
      <section className="section">
        <h2>🛠️ ¿Qué es ASM?</h2>
        <p>
          ASM (Assembly) es un lenguaje de bajo nivel que interactúa directamente con la arquitectura del procesador. 
          En Linux, uno de los ensambladores más utilizados es <strong>NASM (Netwide Assembler)</strong>.
        </p>
        <p>
          NASM convierte el código fuente en un archivo de objeto binario, que luego se enlaza para crear un ejecutable.
        </p>
      </section>

      {/* Sección: Estructura de un programa NASM */}
      <section className="section">
        <h2>📑 Estructura básica de un programa en NASM</h2>
        <p>Todo programa en NASM consta de tres secciones principales:</p>
        
        <ul>
          <li>
            <strong>🔹 .data:</strong> Contiene datos inicializados (como cadenas, variables con valores iniciales).
          </li>
          <li>
            <strong>🔹 .bss:</strong> Para variables sin inicializar (reservadas en tiempo de ejecución).
          </li>
          <li>
            <strong>🔹 .text:</strong> Contiene el código ejecutable (instrucciones del programa).
          </li>
        </ul>
      </section>

      {/* Sección: Comandos básicos */}
      <section className="section">
        <h2>⚙️ Comandos básicos en ASM</h2>
        <table className="command-table">
          <thead>
            <tr>
              <th>Comando</th>
              <th>Descripción</th>
              <th>Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>mov</td>
              <td>Mueve un valor a un registro o memoria.</td>
              <td><code>mov eax, 5</code></td>
            </tr>
            <tr>
              <td>add</td>
              <td>Suma dos valores.</td>
              <td><code>add eax, ebx</code></td>
            </tr>
            <tr>
              <td>sub</td>
              <td>Resta dos valores.</td>
              <td><code>sub eax, 10</code></td>
            </tr>
            <tr>
              <td>int</td>
              <td>Invoca una interrupción del sistema.</td>
              <td><code>int 0x80</code></td>
            </tr>
            <tr>
              <td>cmp</td>
              <td>Compara dos valores.</td>
              <td><code>cmp eax, ebx</code></td>
            </tr>
            <tr>
              <td>jmp</td>
              <td>Salto incondicional a otra parte del código.</td>
              <td><code>jmp etiqueta</code></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Sección: Compilar y ejecutar */}
      <section className="section">
        <h2>🚀 Cómo compilar y ejecutar en Linux</h2>
        <p>
          Para ejecutar un programa NASM en Linux, sigue estos pasos:
        </p>
        <ol>
          <li>🔹 <strong>1. Escribir el código ASM:</strong> Guarda el archivo con extensión `.asm`, por ejemplo, `programa.asm`.</li>
          <li>🔹 <strong>2. Compilar:</strong> Convierte el código fuente en un archivo objeto:
            <pre className="code-block"><code>nasm -f elf64 -o programa.o programa.asm</code></pre>
          </li>
          <li>🔹 <strong>3. Enlazar:</strong> Crea el ejecutable:
            <pre className="code-block"><code>ld -o programa programa.o</code></pre>
          </li>
          <li>🔹 <strong>4. Ejecutar:</strong> Corre el programa:
            <pre className="code-block"><code>./programa</code></pre>
          </li>
        </ol>
      </section>

      {/* Sección: Ejemplo práctico */}
      <section className="section">
        <h2>💻 Ejemplo práctico: Sumar dos números</h2>
        <p>Este programa suma dos números y muestra el resultado:</p>

        <pre className="code-block">
          <code>
{`
section .data
    msg db "La suma es: ", 0x0A
    len equ $ - msg

section .bss
    result resb 10

section .text
    global _start

_start:
    mov eax, 5          ; Primer número
    mov ebx, 7          ; Segundo número
    add eax, ebx        ; Suma
    call print_result

    ; Terminar el programa
    mov eax, 1
    xor ebx, ebx
    int 0x80

print_result:
    ; Convertir EAX a cadena ASCII
    mov ecx, result
    add eax, '0'
    mov [ecx], eax
    mov edx, 1
    mov eax, 4
    mov ebx, 1
    int 0x80
    ret
`}
          </code>
        </pre>

        <p>🔍 <strong>Explicación:</strong></p>
        <ul>
          <li>📌 `mov eax, 5` → Carga el primer número.</li>
          <li>📌 `mov ebx, 7` → Carga el segundo número.</li>
          <li>📌 `add eax, ebx` → Suma los dos valores.</li>
          <li>📌 `call print_result` → Llama a la función para imprimir el resultado.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Manual ASM - Todos los derechos reservados.</p>
      </footer>

    </div>
  );
};

export default Intro;
