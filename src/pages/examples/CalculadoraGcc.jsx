import React, { useState } from "react";
import "./CalculadoraGcc.css";

const Calculadora = () => {
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
    <div className="calculadora-container">
      <h1>Ejemplo: Calculadora en NASM x86 con GCC</h1>
      <p>
        Este código realiza una suma simple entre dos números definidos
        en la sección `.data` y muestra el resultado usando la función `printf`.
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

          <h3>2️⃣ Sección `.data`: Datos inicializados</h3>
          <p>La sección `.data` define las variables `num1`, `num2`, y el formato para mostrar el resultado:</p>
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
    num1 dd 500          ; Definir el primer número
    num2 dd 10           ; Definir el segundo número
    fmt db "Resultado: %d", 10, 0 ; Formato para imprimir el resultado
`}
              </code>
            </pre>
          </div>

          <h3>3️⃣ Sección `.bss`: Variables no inicializadas</h3>
          <p>La sección `.bss` se utiliza para reservar espacio para el resultado de la operación:</p>
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
    res resb 4           ; Reserva 4 bytes para el resultado
`}
              </code>
            </pre>
          </div>

          <h3>4️⃣ Sección `.text`: Código principal</h3>
          <p>La sección `.text` contiene el código principal, que realiza la suma y llama a la función `printf` para mostrar el resultado:</p>
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
    add eax, dword [num2]  ; Sumar num2 a eax
    mov [res], eax         ; Guardar el resultado en la variable res

    push dword [res]       ; Pasar el resultado a printf
    push fmt               ; Pasar el formato a printf
    call printf            ; Llamar a printf
    add esp, 8             ; Limpiar la pila

    xor eax, eax           ; Preparar el valor de retorno (0)
    ret                    ; Salir del programa
`}
              </code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculadora;
