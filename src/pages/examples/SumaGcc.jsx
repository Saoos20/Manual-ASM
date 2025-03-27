import React, { useState } from "react";
import "./SumaGcc.css";

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
      <h1>Ejemplo: Suma de Dos Números en NASM x86 con GCC</h1>
      <p>
        Este código realiza la suma de dos números almacenados en la memoria y
        muestra el resultado utilizando `printf`.
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
gcc -m32 suma.o -o suma -no-pie

; 3. Ejecutamos
./suma
`}
              </code>
            </pre>
          </div>

          <h3>2️⃣ Sección `.data`: Datos Inicializados</h3>
          <p>Define las variables necesarias para almacenar los dos números y el formato de salida:</p>
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
    num1 dd 500
    num2 dd 10
    fmt db "Resultado: %d", 10, 0
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`num1`: Primer número para la suma (500).</li>
            <li>`num2`: Segundo número para la suma (10).</li>
            <li>`fmt`: Formato de salida para `printf` que mostrará el resultado de la suma.</li>
          </ul>

          <h3>3️⃣ Sección `.bss`: Espacio para el Resultado</h3>
          <p>Reserva espacio para almacenar el resultado de la suma:</p>
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
    res resb 4
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`res`: Espacio reservado para almacenar el resultado de la suma (4 bytes).</li>
          </ul>

          <h3>4️⃣ Sección `.text`: Código Principal</h3>
          <p>Contiene la lógica para realizar la suma y mostrar el resultado:</p>
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
    mov eax, dword [num1]  ; Cargar num1 en eax
    add eax, dword [num2]  ; Sumar num2
    mov [res], eax         ; Guardar resultado

    push dword [res]       ; Pasar el resultado a printf
    push fmt
    call printf
    add esp, 8             ; Limpiar pila

    xor eax, eax
    ret
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`mov eax, dword [num1]`: Carga el primer número (`num1`) en el registro `eax`.</li>
            <li>`add eax, dword [num2]`: Suma el segundo número (`num2`) al valor de `eax`.</li>
            <li>`mov [res], eax`: Guarda el resultado de la suma en la variable `res`.</li>
            <li>`push dword [res]`: Pone el resultado en la pila para pasarlo a `printf`.</li>
            <li>`push fmt`: Pone el formato de salida en la pila.</li>
            <li>`call printf`: Llama a `printf` para imprimir el resultado.</li>
            <li>`add esp, 8`: Limpia la pila después de la llamada a `printf`.</li>
            <li>`xor eax, eax`: Establece el valor de retorno en 0.</li>
            <li>`ret`: Retorna del procedimiento principal, finalizando el programa.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Suma;
