import React, { useState } from "react";
import "./Leer.css";

const Leer = () => {
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
    <div className="leer-container">
      <h1>Ejemplo: Leer un número en NASM x86</h1>
      <p>
        Este código permite leer un número desde la entrada estándar, lo almacena en un buffer y lo muestra en la terminal.
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
nasm -f elf32 leer.asm -o leer.o

; 2. Enlazamos
ld -m elf_i386 leer.o -o leer

; 3. Ejecutamos
./leer
`}
              </code>
            </pre>
          </div>

          <h3>2️⃣ Sección `.bss`: Variables no inicializadas</h3>
          <p>La sección `.bss` define variables sin inicializar:</p>
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
section .bss
    buffer resb 10  ; Reserva 10 bytes para almacenar el número ingresado
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`buffer`: Es un área de memoria donde se almacenará el número ingresado.</li>
            <li>`resb 10`: Reserva 10 bytes (suficiente para almacenar números de varios dígitos).</li>
          </ul>

          <h3>3️⃣ Sección `.data`: Variables inicializadas</h3>
          <p>Define mensajes y constantes utilizadas por el programa:</p>
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
    msg db "Ingresa un número: ", 0          ; Mensaje para la entrada
    msg_result db "Número ingresado: ", 0    ; Mensaje para mostrar el resultado
    newline db 10, 0                         ; Salto de línea
`}
              </code>
            </pre>
          </div>

          <h3>4️⃣ Sección `.text`: Código principal</h3>
          <p>Contiene el punto de entrada principal (`_start`) y la lógica del programa.</p>
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
    global _start       ; Punto de entrada principal
`}
              </code>
            </pre>
          </div>

          <h3>5️⃣ Mostrar mensaje inicial</h3>
          <p>Se imprime el mensaje `Ingresa un número:`:</p>
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
_start:
    mov eax, 4          ; syscall write
    mov ebx, 1          ; stdout (descriptor 1)
    mov ecx, msg        ; Dirección del mensaje
    mov edx, 18         ; Longitud del mensaje
    int 0x80            ; Llamada al sistema
`}
              </code>
            </pre>
          </div>

          <h3>6️⃣ Leer número desde la entrada</h3>
          <p>Se captura el número ingresado:</p>
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
    mov eax, 3          ; syscall read
    mov ebx, 0          ; stdin (descriptor 0)
    mov ecx, buffer     ; Dirección del buffer
    mov edx, 10         ; Longitud máxima
    int 0x80            ; Llamada al sistema
`}
              </code>
            </pre>
          </div>

          <h3>7️⃣ Mostrar el mensaje de resultado</h3>
          <p>Se imprime `Número ingresado:`:</p>
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
    mov eax, 4
    mov ebx, 1
    mov ecx, msg_result
    mov edx, 18
    int 0x80
`}
              </code>
            </pre>
          </div>

          <h3>8️⃣ Mostrar el número ingresado</h3>
          <p>Se imprime el contenido del buffer:</p>
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
    mov eax, 4
    mov ebx, 1
    mov ecx, buffer
    mov edx, 10
    int 0x80
`}
              </code>
            </pre>
          </div>

          <h3>9️⃣ Imprimir salto de línea</h3>
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
    mov eax, 4
    mov ebx, 1
    mov ecx, newline
    mov edx, 1
    int 0x80
`}
              </code>
            </pre>
          </div>

          <h3>🔟 Salir del programa</h3>
          <p>El programa termina con la syscall `sys_exit`:</p>
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
    mov eax, 1          ; syscall exit
    xor ebx, ebx        ; Código de salida 0
    int 0x80
`}
              </code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leer;
