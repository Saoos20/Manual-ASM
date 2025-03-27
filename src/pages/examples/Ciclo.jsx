import React, { useState } from "react";
import "./Ciclo.css";

const Ciclo = () => {
  const [mostrarMemoria, setMostrarMemoria] = useState(false);

  const toggleMemoria = () => {
    setMostrarMemoria(!mostrarMemoria);
  };

  // Función para copiar el código al portapapeles usando textarea
  const copyCode = (button) => {
    const codeBlock = button.nextElementSibling.querySelector("code");
    const textArea = document.createElement("textarea");

    textArea.value = codeBlock.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    // Cambiar el texto del botón temporalmente para indicar que se copió
    button.textContent = "¡Copiado!";
    setTimeout(() => {
      button.textContent = "Copiar";
    }, 1500);
  };

  return (
    <div className="ciclo-container">
      <h1>Ejemplo de Ciclo en NASM x86</h1>
      <p>
        Este código imprime el mensaje <strong>"Hello"</strong> N veces, utilizando un ciclo en NASM.
      </p>

      <div className="botones">
        <button onClick={toggleMemoria}>
          {mostrarMemoria ? "Ocultar Memoria Técnica" : "Mostrar Memoria Técnica"}
        </button>
      </div>

      {mostrarMemoria && (
        <div className="memoria-section">
          <h2>Memoria Técnica</h2>

          <h3>1️⃣ Ensamblado, Enlace y Ejecución</h3>
          <p>Para compilar, enlazar y ejecutar el código, utilizamos los siguientes comandos:</p>
          <div className="code-block">
            <button
              className="copy-btn"
              onClick={(e) => copyCode(e.target)}
            >
              Copiar
            </button>
            <pre>
              <code>
{`
; 1. Ensamblamos
nasm -f elf32 ciclo.asm -o ciclo.o

; 2. Enlazamos
ld -m elf_i386 -s -o ciclo ciclo.o

; 3. Ejecutamos
./ciclo
`}
              </code>
            </pre>
          </div>

          <h3>2️⃣ Sección de Datos</h3>
          <p>Se definen las variables y las constantes del programa:</p>
          <div className="code-block">
            <button
              className="copy-btn"
              onClick={(e) => copyCode(e.target)}
            >
              Copiar
            </button>
            <pre>
              <code>
{`
section .data
    hello db "Hello", 10    ; "Hello" seguido de un salto de línea
    hello_len equ $ - hello ; Calcula la longitud del mensaje
    N equ 10                ; Número de repeticiones
`}
              </code>
            </pre>
          </div>

          <h3>3️⃣ Sección de Texto</h3>
          <p>Contiene el punto de entrada principal (`_start`) y la lógica del ciclo.</p>
          <div className="code-block">
            <button
              className="copy-btn"
              onClick={(e) => copyCode(e.target)}
            >
              Copiar
            </button>
            <pre>
              <code>
{`
section .text
    global _start           ; Punto de entrada

_start:
    mov ecx, N              ; Cargar el contador (N repeticiones)
`}
              </code>
            </pre>
          </div>

          <h3>4️⃣ Lógica del Ciclo</h3>
          <p>El ciclo imprime "Hello" N veces:</p>
          <div className="code-block">
            <button
              className="copy-btn"
              onClick={(e) => copyCode(e.target)}
            >
              Copiar
            </button>
            <pre>
              <code>
{`
.loop:
    push ecx                ; Guarda el valor del contador en la pila

    ; Preparar la syscall para imprimir
    mov edx, hello_len      ; Longitud del mensaje
    mov ecx, hello          ; Dirección del mensaje
    mov ebx, 1              ; Descriptor de archivo (stdout)
    mov eax, 4              ; syscall: sys_write
    int 0x80                ; Llamada al sistema

    pop ecx                  ; Restaura el contador
    loop .loop               ; Decrementa ECX y repite si no es 0
`}
              </code>
            </pre>
          </div>

          <h3>5️⃣ Finalización</h3>
          <p>El programa finaliza limpiamente utilizando `sys_exit`:</p>
          <div className="code-block">
            <button
              className="copy-btn"
              onClick={(e) => copyCode(e.target)}
            >
              Copiar
            </button>
            <pre>
              <code>
{`
    mov eax, 1              ; syscall: sys_exit
    xor ebx, ebx            ; Código de salida 0
    int 0x80                ; Llamada al sistema
`}
              </code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ciclo;
