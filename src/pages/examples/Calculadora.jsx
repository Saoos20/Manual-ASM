import React, { useState } from "react";
import "./Calculadora.css";

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
      <h1>Calculadora NASM x86</h1>
      <p>Este es un ejemplo de una calculadora sencilla escrita en NASM x86.</p>

      <div className="botones">
        <button onClick={toggleMemoria}>
          {mostrarMemoria ? "Ocultar Memoria Técnica" : "Mostrar Memoria Técnica"}
        </button>
      </div>

      {mostrarMemoria && (
        <div className="memoria-section">
          <h2>Memoria Técnica</h2>

          <h3>1️⃣ Sección de Datos</h3>
          <p>Define los mensajes a imprimir y las variables que almacenan los números ingresados y el resultado.</p>
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
    msg1     db    10,'-Calculadora-',10,0
    msg2     db    10,'Numero 1: ',0
    msg3     db    'Numero 2: ',0
    msg4     db    10,'1. Sumar',10,0
    msg5     db    '2. Restar',10,0
    msg6     db    '3. Multiplicar',10,0
    msg7     db    '4. Dividir',10,0
    msg8     db    'Operacion: ',0
    msg9     db    10,'Resultado: ',0
    msg10    db    10,'Opcion Invalida',10,0
`}
              </code>
            </pre>
          </div>

          <h3>2️⃣ Sección BSS (Memoria reservada)</h3>
          <p>Reserva memoria para las variables que almacenarán los valores ingresados.</p>
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
    opcion:     resb  2
    num1:       resb  2
    num2:       resb  2
    resultado:  resb  2
`}
              </code>
            </pre>
          </div>

          <h3>3️⃣ Lógica del Programa</h3>
          <p>El programa muestra los mensajes, toma los valores ingresados, realiza la operación seleccionada y muestra el resultado.</p>
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
    mov eax, 4
    mov ebx, 1
    mov ecx, msg1
    mov edx, lmsg1
    int 80h

    ; Leer número 1
    mov eax, 3
    mov ebx, 0
    mov ecx, num1
    mov edx, 2
    int 80h

    ; Leer número 2
    mov eax, 3
    mov ebx, 0
    mov ecx, num2
    mov edx, 2
    int 80h
`}
              </code>
            </pre>
          </div>

          <h3>4️⃣ Operaciones</h3>
          <p>El código contiene secciones específicas para cada operación: suma, resta, multiplicación y división.</p>

          <h4>✅ Suma</h4>
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
sumar:
    mov al, [num1]
    mov bl, [num2]
    sub al, '0'
    sub bl, '0'
    add al, bl
    add al, '0'
    mov [resultado], al
`}
              </code>
            </pre>
          </div>

          <h4>➖ Resta</h4>
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
restar:
    mov al, [num1]
    mov bl, [num2]
    sub al, '0'
    sub bl, '0'
    sub al, bl
    add al, '0'
    mov [resultado], al
`}
              </code>
            </pre>
          </div>

          <h4>✖️ Multiplicación</h4>
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
multiplicar:
    mov al, [num1]
    mov bl, [num2]
    sub al, '0'
    sub bl, '0'
    mul bl
    add ax, '0'
    mov [resultado], ax
`}
              </code>
            </pre>
          </div>

          <h4>➗ División</h4>
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
dividir:
    mov al, [num1]
    mov bl, [num2]
    mov dx, 0
    mov ah, 0
    sub al, '0'
    sub bl, '0'
    div bl
    add ax, '0'
    mov [resultado], ax
`}
              </code>
            </pre>
          </div>

          <h3>5️⃣ Finalización</h3>
          <p>El programa muestra el resultado y finaliza la ejecución.</p>
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
salir:
    mov eax, 1
    mov ebx, 0
    int 80h
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
