import React, { useState } from "react";
import "./Raiz.css";

const Raiz = () => {
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
    <div className="raiz-container">
      <h1>Ejemplo: Calcular Raíz Cuadrada en NASM x86 con GCC</h1>
      <p>
        Este código calcula la raíz cuadrada de un número usando operaciones en
        la unidad de punto flotante (FPU).
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
nasm -f elf32 raiz.asm -o raiz.o

; 2. Enlazamos
gcc -m32 raiz.o -o raiz -no-pie

; 3. Ejecutamos
./raiz
`}
              </code>
            </pre>
          </div>

          <h3>2️⃣ Sección `.data`: Datos inicializados</h3>
          <p>Define las variables necesarias para almacenar el número de entrada y el formato de salida:</p>
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
    num dd 25.0             ; Número de entrada
    fmt db "Raíz cuadrada: %lf", 10, 0  ; %lf para double
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`num`: El número cuyo valor se usará para calcular la raíz cuadrada (25 en este caso).</li>
            <li>`fmt`: El formato para mostrar el resultado como un número de tipo `double`.</li>
          </ul>

          <h3>3️⃣ Sección `.bss`: Variables no inicializadas</h3>
          <p>Reserva espacio para almacenar el resultado de la raíz cuadrada:</p>
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
    res resq 1              ; Espacio para un número de 8 bytes (double)
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`res`: Espacio reservado para almacenar el resultado en formato `double` (64 bits).</li>
          </ul>

          <h3>4️⃣ Sección `.text`: Código principal</h3>
          <p>Contiene la lógica para calcular la raíz cuadrada:</p>
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
    finit                   ; Inicializar la FPU para "unidades de punto flotante"
    fld dword [num]         ; Cargar el número en la FPU
    fsqrt                   ; Calcular la raíz cuadrada
    fstp qword [res]        ; Guardar el resultado en 64 bits

    push dword [res+4]      ; Parte alta del double
    push dword [res]        ; Parte baja del double
    push fmt
    call printf
    add esp, 12             ; Limpiar la pila

    xor eax, eax
    ret
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`finit`: Inicializa la FPU (unidad de punto flotante) para realizar cálculos en punto flotante.</li>
            <li>`fld dword [num]`: Carga el número desde la memoria en la FPU.</li>
            <li>`fsqrt`: Calcula la raíz cuadrada del número cargado en la FPU.</li>
            <li>`fstp qword [res]`: Guarda el resultado de la raíz cuadrada en la variable `res` como un `double` (64 bits).</li>
            <li>`push dword [res+4]`: Empuja la parte alta del resultado (de 64 bits) a la pila.</li>
            <li>`push dword [res]`: Empuja la parte baja del resultado a la pila.</li>
            <li>`push fmt`: Pone el formato de salida en la pila.</li>
            <li>`call printf`: Llama a `printf` para mostrar el resultado.</li>
            <li>`add esp, 12`: Limpia la pila después de la llamada a `printf`.</li>
            <li>`xor eax, eax`: Finaliza el programa estableciendo el valor de retorno en 0.</li>
            <li>`ret`: Retorna del procedimiento principal, finalizando el programa.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Raiz;
