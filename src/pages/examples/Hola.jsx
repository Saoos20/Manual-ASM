import React, { useState } from "react";
import "./Hola.css";

const Hola = () => {
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
    <div className="hola-container">
      <h1>Ejemplo: "Hola, mundo!" en NASM x86</h1>
      <p>
        Este código imprime el mensaje <strong>"Hola, mundo!"</strong> en la terminal utilizando NASM y llamadas al sistema.
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
nasm -f elf32 hola.asm -o hola.o

; 2. Enlazamos
ld -m elf_i386 -s -o hola hola.o

; 3. Ejecutamos
./hola
`}
              </code>
            </pre>
          </div>

          <h3>2️⃣ Tipos de Variables en NASM</h3>
          <p>Explicación de las directivas para definir variables:</p>
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
; db:  define una variable de tipo byte (8 bits)
; dw:  define una variable de tipo palabra (16 bits)
; dd:  define una variable de tipo doble palabra (32 bits)
; dq:  define una variable de tipo cuádruple palabra (64 bits)
`}
              </code>
            </pre>
          </div>

          <h3>3️⃣ Sección de Datos</h3>
          <p>Se definen las variables del programa:</p>
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
    mensaje db "Hola, mundo!", 0xA   ; Mensaje con salto de línea (\n)
    len equ $ - mensaje              ; Longitud del mensaje
`}
              </code>
            </pre>
          </div>
          <ul>
            <li><strong>mensaje:</strong> Contiene la cadena `Hola, mundo!` seguida de un salto de línea (`0xA`).</li>
            <li><strong>len:</strong> Calcula la longitud del mensaje desde la dirección actual (`$`) hasta la dirección inicial del mensaje.</li>
          </ul>

          <h3>4️⃣ Sección de Texto</h3>
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
    global _start          ; Punto de entrada
`}
              </code>
            </pre>
          </div>

          <h3>5️⃣ Llamada al sistema `sys_write`</h3>
          <p>Escribe el mensaje en la terminal:</p>
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
    mov eax, 4             ; syscall: sys_write
    mov ebx, 1             ; File descriptor 1 (stdout)
    mov ecx, mensaje       ; Dirección del mensaje
    mov edx, len           ; Longitud del mensaje
    int 0x80               ; Llamada al kernel
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`mov eax, 4`: Carga el número de la syscall `4` (`sys_write`).</li>
            <li>`mov ebx, 1`: Usa el descriptor de archivo `1` para la salida estándar (`stdout`).</li>
            <li>`mov ecx, mensaje`: Carga la dirección del mensaje en `ecx`.</li>
            <li>`mov edx, len`: Carga la longitud del mensaje en `edx`.</li>
            <li>`int 0x80`: Llama al kernel de Linux para ejecutar la syscall.</li>
          </ul>

          <h3>6️⃣ Finalización del Programa</h3>
          <p>El programa finaliza con `sys_exit`:</p>
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
    mov eax, 1             ; syscall: sys_exit
    xor ebx, ebx           ; Código de salida 0
    int 0x80               ; Llamada al kernel
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`mov eax, 1`: Carga la syscall `1` (`sys_exit`) para finalizar el programa.</li>
            <li>`xor ebx, ebx`: Establece el código de salida en `0` (sin errores).</li>
            <li>`int 0x80`: Llama al kernel para finalizar la ejecución.</li>
          </ul>

          <h3>7️⃣ Nota para Sistemas de 64 bits</h3>
          <p>En sistemas de 64 bits, puede ser necesario instalar bibliotecas de 32 bits:</p>
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
sudo apt install gcc-multilib
`}
              </code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hola;
