import React, { useState } from "react";
import "./LeerGcc.css";

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
      <h1>Ejemplo: Leer un Valor en NASM x86 con GCC</h1>
      <p>
        Este código lee un número desde la entrada estándar, lo almacena y luego lo imprime en la salida.
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
gcc -m32 leer.o -o leer -no-pie

; 3. Ejecutamos
./leer
`}
              </code>
            </pre>
          </div>

          <h3>2️⃣ Sección `.data`: Datos inicializados</h3>
          <p>Define las variables necesarias para mostrar el mensaje de entrada, leer el valor y mostrar el resultado:</p>
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
    prompt db "Ingrese un valor: ", 0      ; Mensaje de entrada
    fmt_in db "%d", 0                      ; Formato para leer un número
    fmt_out db "Valor ingresado: %d", 10, 0 ; Formato para imprimir el número
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`prompt`: El mensaje que pide al usuario ingresar un valor.</li>
            <li>`fmt_in`: El formato de entrada para leer un valor entero.</li>
            <li>`fmt_out`: El formato de salida para imprimir el valor ingresado.</li>
          </ul>

          <h3>3️⃣ Sección `.bss`: Variables no inicializadas</h3>
          <p>Reserva espacio para almacenar el valor ingresado:</p>
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
    num resd 1  ; Reserva espacio para almacenar el número ingresado
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`num`: Variable donde se almacenará el valor ingresado por el usuario.</li>
          </ul>

          <h3>4️⃣ Sección `.text`: Código principal</h3>
          <p>Contiene la lógica principal del programa para leer y mostrar el número:</p>
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
    global main
    extern printf, scanf

main:
    ; Mostrar mensaje de entrada
    push prompt
    call printf
    add esp, 4

    ; Leer el valor desde la consola
    push num
    push fmt_in
    call scanf
    add esp, 8

    ; Imprimir el valor ingresado
    push dword [num]
    push fmt_out
    call printf
    add esp, 8

    ; Terminar el programa
    xor eax, eax
    ret
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`push prompt`: Muestra el mensaje solicitando el valor.</li>
            <li>`call printf`: Llama a la función `printf` para mostrar el mensaje.</li>
            <li>`push num`: Reserva espacio para almacenar el valor ingresado.</li>
            <li>`call scanf`: Llama a la función `scanf` para leer un valor del usuario.</li>
            <li>`push dword [num]`: Imprime el valor ingresado utilizando `printf`.</li>
            <li>`xor eax, eax`: Establece `eax` a 0 para indicar que el programa terminó sin errores.</li>
            <li>`ret`: Retorna de la ejecución del programa.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Leer;
