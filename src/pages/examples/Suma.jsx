import React, { useState } from "react";
import "./Suma.css";

const Suma = () => {
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
    <div className="suma-container">
      <h1>Ejemplo: Suma en NASM x86</h1>
      <p>
        Este código permite realizar la suma de dos números. A continuación se
        muestra el código en NASM que implementa esta operación.
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
nasm -f elf32 suma.asm -o suma.o

; 2. Enlazamos
ld -m elf_i386 suma.o -o suma

; 3. Ejecutamos
./suma
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
    num1 resb 2    ; Reserva 2 bytes para num1
    num2 resb 2    ; Reserva 2 bytes para num2
    resultado resb 64  ; Reserva 64 bytes para el resultado
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`num1`: Área de memoria para almacenar el primer número.</li>
            <li>`num2`: Área de memoria para almacenar el segundo número.</li>
            <li>`resultado`: Área de memoria para almacenar el resultado de la suma.</li>
          </ul>

          <h3>3️⃣ Sección `.data`: Variables inicializadas</h3>
          <p>Define los mensajes y constantes que se usan en el programa:</p>
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
    msg1 db "Ingresa el primer número:", 0
    msg2 db "Ingresa el segundo número:", 0
    msg_result db "La suma es: ", 0
    newline db 10, 0
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`msg1`: Mensaje para solicitar el primer número.</li>
            <li>`msg2`: Mensaje para solicitar el segundo número.</li>
            <li>`msg_result`: Mensaje para mostrar el resultado.</li>
            <li>`newline`: Salto de línea.</li>
          </ul>

          <h3>4️⃣ Sección `.text`: Código principal</h3>
          <p>El código principal del programa donde se ejecutan las operaciones:</p>
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

          <h3>5️⃣ Mostrar mensaje de solicitud</h3>
          <p>Se muestra el mensaje para solicitar el primer número:</p>
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
    mov ebx, 1          ; stdout
    mov ecx, msg1       ; Dirección del mensaje
    mov edx, 25         ; Longitud del mensaje
    int 0x80            ; Llamada al sistema
`}
              </code>
            </pre>
          </div>

          <h3>6️⃣ Leer el primer número</h3>
          <p>Se captura el primer número desde la entrada estándar:</p>
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
    mov ebx, 0          ; stdin
    mov ecx, num1       ; Dirección del primer número
    mov edx, 2          ; Longitud
    int 0x80            ; Llamada al sistema
`}
              </code>
            </pre>
          </div>

          <h3>7️⃣ Mostrar el mensaje para el segundo número</h3>
          <p>Se muestra el mensaje para solicitar el segundo número:</p>
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
    mov ecx, msg2
    mov edx, 26
    int 0x80
`}
              </code>
            </pre>
          </div>

          <h3>8️⃣ Leer el segundo número</h3>
          <p>Se captura el segundo número desde la entrada estándar:</p>
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
    mov eax, 3
    mov ebx, 0
    mov ecx, num2
    mov edx, 2
    int 0x80
`}
              </code>
            </pre>
          </div>

          <h3>9️⃣ Realizar la suma</h3>
          <p>Se realiza la suma de los dos números:</p>
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
    mov al, [num1]      ; Cargar num1 en al
    sub al, '0'         ; Convertir de ASCII a número
    mov bl, [num2]      ; Cargar num2 en bl
    sub bl, '0'         ; Convertir de ASCII a número
    add al, bl          ; Sumar los números
    add al, '0'         ; Convertir resultado de vuelta a ASCII
    mov [resultado], al ; Almacenar el resultado
`}
              </code>
            </pre>
          </div>

          <h3>🔟 Mostrar el resultado</h3>
          <p>Se muestra el resultado de la suma:</p>
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
    mov edx, 13
    int 0x80
    mov eax, 4
    mov ebx, 1
    mov ecx, resultado
    mov edx, 1
    int 0x80
`}
              </code>
            </pre>
          </div>

          <h3>1️⃣1️⃣ Salir del programa</h3>
          <p>Finalmente, el programa termina:</p>
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
    int 0x80            ; Llamada al sistema
`}
              </code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default Suma;
