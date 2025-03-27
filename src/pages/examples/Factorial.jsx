import React, { useState } from "react";
import "./Factorial.css";

const Factorial = () => {
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
    <div className="factorial-container">
      <h1>Ejemplo: Calcular Factorial en NASM x86 con GCC</h1>
      <p>
        Este código calcula el factorial de un número (en este caso, 5) mediante un ciclo en NASM.
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
nasm -f elf32 factorial.asm -o factorial.o

; 2. Enlazamos
gcc -m32 factorial.o -o factorial -no-pie

; 3. Ejecutamos
./factorial
`}
              </code>
            </pre>
          </div>

          <h3>2️⃣ Sección `.data`: Datos inicializados</h3>
          <p>Define las variables necesarias para almacenar el número y el formato del mensaje de salida:</p>
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
    num dd 5           ; El número cuyo factorial vamos a calcular
    fmt db "Factorial: %d", 10, 0   ; Formato para la salida
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`num`: Número cuyo factorial se calculará (en este caso, 5).</li>
            <li>`fmt`: Formato utilizado para imprimir el resultado del factorial.</li>
          </ul>

          <h3>3️⃣ Sección `.text`: Código principal</h3>
          <p>Contiene el ciclo que calcula el factorial y la lógica de impresión del resultado:</p>
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
    mov eax, 1         ; Inicializar el resultado a 1
    mov ecx, dword [num]  ; Cargar el número (5)

factorial_loop:
    cmp ecx, 1         ; Si el contador (ecx) <= 1, termina
    jle end_loop
    imul eax, ecx      ; Multiplicar eax por ecx
    dec ecx            ; Decrementar el contador
    jmp factorial_loop ; Volver a comprobar

end_loop:
    mov [res], eax     ; Guardar el resultado en la variable res

    push dword [res]   ; Pasar el resultado a printf
    push fmt
    call printf
    add esp, 8         ; Limpiar la pila

    xor eax, eax       ; Código de salida 0
    ret                ; Retornar
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`mov eax, 1`: Inicializa `eax` en 1, que se usará para el resultado del factorial.</li>
            <li>`mov ecx, dword [num]`: Carga el número (5 en este caso) en el registro `ecx`.</li>
            <li>`cmp ecx, 1`: Compara el valor de `ecx` con 1.</li>
            <li>`jle end_loop`: Si `ecx` es menor o igual a 1, salta al final del ciclo.</li>
            <li>`imul eax, ecx`: Multiplica el valor en `eax` por el valor de `ecx` (calculando el factorial).</li>
            <li>`dec ecx`: Decrementa `ecx` en 1 para continuar el ciclo.</li>
            <li>`jmp factorial_loop`: Vuelve al inicio del ciclo.</li>
            <li>`mov [res], eax`: Guarda el resultado en la variable `res`.</li>
            <li>`push dword [res]`: Pasa el resultado a la función `printf` para mostrarlo en la salida.</li>
            <li>`xor eax, eax`: Establece `eax` a 0, para indicar que el programa terminó sin errores.</li>
            <li>`ret`: Termina la ejecución del programa.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Factorial;
