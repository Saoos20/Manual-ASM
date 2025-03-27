import React from "react";
import "./Commands.css";

const Commands = () => {
  return (
    <div className="commands-container">
      <h1>⚙️ Comandos Esenciales para NASM</h1>

      {/* Introducción */}
      <section className="section">
        <h2>📌 Introducción</h2>
        <p>
          NASM (Netwide Assembler) es un ensamblador para arquitectura x86 que
          permite crear programas en lenguaje ensamblador. Para ejecutar un
          programa ensamblador, necesitas ensamblar, vincular y ejecutar el
          binario generado. A continuación, encontrarás los comandos más
          utilizados para trabajar con NASM.
        </p>
      </section>

      {/* Comandos Básicos */}
      <section className="section">
        <h2>🛠️ Comandos Básicos</h2>
        <ul>
          <li>
            <code>nasm -f elf64 archivo.asm -o archivo.o</code> → Ensambla un
            archivo ASM en formato ELF de 64 bits.
          </li>
          <li>
            <code>ld archivo.o -o ejecutable</code> → Vincula el archivo objeto
            para generar un ejecutable.
          </li>
          <li>
            <code>./ejecutable</code> → Ejecuta el programa ensamblado.
          </li>
        </ul>
      </section>

      {/* Explicación detallada */}
      <section className="section">
        <h2>🔍 Explicación Paso a Paso</h2>
        <p>
          Para crear y ejecutar un programa básico en NASM, sigue estos pasos:
        </p>
        <ol>
          <li>
            <strong>Escribir el código ASM:</strong> Crea un archivo llamado
            <code>hola.asm</code> con el siguiente contenido:
            <pre>
{`
section .data
    msg db "Hola, mundo!", 0x0A  ; Mensaje a imprimir

section .text
    global _start

_start:
    ; syscall para escribir
    mov rax, 1          ; syscall: escribir
    mov rdi, 1          ; file descriptor: stdout
    lea rsi, [msg]      ; dirección del mensaje
    mov rdx, 14         ; longitud del mensaje
    syscall

    ; syscall para salir
    mov rax, 60         ; syscall: exit
    xor rdi, rdi        ; código de salida: 0
    syscall
`}
            </pre>
          </li>
          <li>
            <strong>Compilar:</strong> Usa el siguiente comando:
            <pre>
              nasm -f elf64 hola.asm -o hola.o
            </pre>
          </li>
          <li>
            <strong>Vincular:</strong> Crea el ejecutable:
            <pre>
              ld hola.o -o hola
            </pre>
          </li>
          <li>
            <strong>Ejecutar:</strong> Ejecuta el programa:
            <pre>
              ./hola
            </pre>
          </li>
        </ol>
      </section>

      {/* Comandos Avanzados */}
      <section className="section">
        <h2>⚡ Comandos Avanzados</h2>
        <ul>
          <li>
            <code>objdump -d ejecutable</code> → Muestra el código ensamblador
            del binario.
          </li>
          <li>
            <code>strace ./ejecutable</code> → Muestra las llamadas al sistema
            que realiza el programa.
          </li>
          <li>
            <code>gdb ./ejecutable</code> → Inicia la depuración del binario
            con GDB.
          </li>
        </ul>
      </section>

      {/* Depuración */}
      <section className="section">
        <h2>🔎 Depuración con GDB</h2>
        <p>
          Para depurar un programa NASM, puedes usar <code>gdb</code> con los
          siguientes comandos:
        </p>
        <ul>
          <li>
            <code>gdb ./ejecutable</code> → Inicia GDB con tu programa.
          </li>
          <li>
            <code>break _start</code> → Establece un punto de interrupción en
            la etiqueta <code>_start</code>.
          </li>
          <li>
            <code>run</code> → Inicia la ejecución hasta el punto de
            interrupción.
          </li>
          <li>
            <code>info registers</code> → Muestra los registros actuales.
          </li>
          <li>
            <code>stepi</code> → Ejecuta una instrucción ensamblador a la vez.
          </li>
          <li>
            <code>disassemble _start</code> → Muestra el código ensamblador del
            punto de entrada.
          </li>
        </ul>
      </section>

      {/* Consejos */}
      <section className="section">
        <h2>✅ Consejos Útiles</h2>
        <ul>
          <li>
            Usa <code>strace</code> para verificar las llamadas al sistema.
          </li>
          <li>
            Aplica <code>objdump</code> para inspeccionar el código ensamblador.
          </li>
          <li>
            Si usas <code>gdb</code>, combina con <code>pwndbg</code> para
            mejorar la visualización.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Commands;
