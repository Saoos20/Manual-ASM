import React, { useState } from "react";
import "./EsPar.css";

const EsPar = () => {
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
    <div className="espar-container">
      <h1>Ejemplo: Verificar si un número es par en NASM x86 con GCC</h1>
      <p>
        Este código verifica si un número es par o impar utilizando el operador `test` y el bit menos significativo del número.
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
nasm -f elf32 es_par.asm -o es_par.o

; 2. Enlazamos
gcc -m32 es_par.o -o es_par -no-pie

; 3. Ejecutamos
./es_par
`}
              </code>
            </pre>
          </div>

          <h3>2️⃣ Sección `.data`: Datos inicializados</h3>
          <p>La sección `.data` define las variables que utilizamos para almacenar el número, así como los mensajes a mostrar:</p>
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
    num dd 10            ; Número a verificar
    par db "El número es par", 10, 0
    inpar db "El número es impar", 10, 0
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`num`: El número a verificar (en este caso, 10).</li>
            <li>`par`: Mensaje para imprimir si el número es par.</li>
            <li>`inpar`: Mensaje para imprimir si el número es impar.</li>
          </ul>

          <h3>3️⃣ Sección `.text`: Código principal</h3>
          <p>La sección `.text` contiene el código que realiza la comprobación del número y muestra el mensaje correspondiente:</p>
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
    extern printf

main:
    mov eax, dword [num]    ; Cargar el número en eax
    test eax, 1             ; Comprobar si el bit menos significativo es 1
    jz print_par            ; Si es 0 (número par), saltar a print_par
    push inpar              ; Si es impar, pasar mensaje a printf
    call printf
    add esp, 4              ; Limpiar la pila
    jmp end_programa        ; Saltar al final del programa

print_par:
    push par                ; Si es par, pasar mensaje a printf
    call printf
    add esp, 4              ; Limpiar la pila

end_programa:
    xor eax, eax            ; Establecer eax a 0 para el código de salida
    ret                     ; Terminar el programa
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`mov eax, dword [num]`: Carga el número a verificar en el registro `eax`.</li>
            <li>`test eax, 1`: Realiza una operación AND entre `eax` y `1` para comprobar si el bit menos significativo es 1 (número impar) o 0 (número par).</li>
            <li>`jz print_par`: Si el resultado de `test` es 0 (número par), salta a la etiqueta `print_par`.</li>
            <li>`push inpar`: Si el número es impar, se pasa el mensaje correspondiente a la función `printf`.</li>
            <li>`call printf`: Llama a `printf` para mostrar el mensaje.</li>
            <li>`add esp, 4`: Limpia la pila después de la llamada a `printf`.</li>
            <li>`jmp end_programa`: Salta al final del programa para evitar ejecutar el bloque de código para números pares.</li>
            <li>`print_par:`: Esta etiqueta se ejecuta si el número es par.</li>
            <li>`xor eax, eax`: Establece `eax` a 0 para terminar el programa sin errores.</li>
            <li>`ret`: Finaliza la ejecución del programa.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default EsPar;
