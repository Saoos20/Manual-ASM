import React, { useState } from "react";
import "./CicloSuma.css";

const SumaYCiclo = () => {
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
    <div className="suma-ciclo-container">
      <h1>Ejemplo: Suma y Ciclo en NASM x86</h1>
      <p>
        Este código suma dos números ingresados, muestra el resultado y luego imprime un mensaje repetidamente en un ciclo.
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
          <p>Para compilar, enlazar y ejecutar el código, usamos los siguientes comandos:</p>
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
; 1. Ensamblar
nasm -f elf32 suma_y_ciclo.asm -o suma_y_ciclo.o

; 2. Enlazar
ld -m elf_i386 -s -o suma_y_ciclo suma_y_ciclo.o

; 3. Ejecutar
./suma_y_ciclo
`}
              </code>
            </pre>
          </div>

          <h3>2️⃣ Sección `.bss`: Variables no inicializadas</h3>
          <p>Reserva memoria para las variables:</p>
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
    num1 resb 1        ; Primer número
    num2 resb 1        ; Segundo número
    resultado resb 1    ; Resultado de la suma
    aux resb 1          ; Variable auxiliar para el ciclo
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`num1`: Almacena el primer número ingresado.</li>
            <li>`num2`: Almacena el segundo número ingresado.</li>
            <li>`resultado`: Guarda la suma.</li>
            <li>`aux`: Almacena la cantidad de repeticiones para el ciclo.</li>
          </ul>

          <h3>3️⃣ Sección `.data`: Variables inicializadas</h3>
          <p>Contiene los mensajes y constantes del programa:</p>
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
    msg1 db "Ingresa el primer número?", 0
    msg2 db "Ingresa el segundo número?", 0
    msg_result db "La suma es: ", 0
    newline db 10, 0        ; Salto de línea
    hello db "Hello", 10    ; Mensaje a imprimir en el ciclo
    hello_len equ $ - hello ; Longitud del mensaje "Hello"
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`msg1`: Mensaje para solicitar el primer número.</li>
            <li>`msg2`: Mensaje para solicitar el segundo número.</li>
            <li>`msg_result`: Mensaje para mostrar la suma.</li>
            <li>`newline`: Salto de línea.</li>
            <li>`hello`: Mensaje que se imprimirá en el ciclo.</li>
            <li>`hello_len`: Longitud del mensaje "Hello" (`6` bytes: 5 caracteres + salto de línea).</li>
          </ul>

          <h3>4️⃣ Sección `.text`: Código principal</h3>
          <p>Contiene la lógica del programa:</p>
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
    global _start
`}
              </code>
            </pre>
          </div>

          <h3>5️⃣ Mostrar mensaje 1</h3>
          <p>Imprime el mensaje para pedir el primer número:</p>
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
    mov ecx, msg1
    mov edx, 25
    int 0x80
`}
              </code>
            </pre>
          </div>

          <h3>6️⃣ Leer primer número</h3>
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
    mov ecx, num1
    mov edx, 2
    int 0x80
`}
              </code>
            </pre>
          </div>

          <h3>7️⃣ Mostrar mensaje 2</h3>
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

          <h3>8️⃣ Leer segundo número</h3>
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

          <h3>9️⃣ Conversión de ASCII a número</h3>
          <p>Convierte los valores ingresados (caracteres) a números:</p>
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
    mov al, [num1]  
    sub al, '0'      ; Convierte de ASCII a valor numérico
    mov bl, [num2]  
    sub bl, '0'
`}
              </code>
            </pre>
          </div>

          <h3>🔟 Sumar los números</h3>
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
    add al, bl
    add al, '0'       ; Convierte resultado a ASCII
    mov [resultado], al
`}
              </code>
            </pre>
          </div>

          <h3>1️⃣1️⃣ Mostrar el resultado</h3>
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

          <h3>1️⃣2️⃣ Ciclo con impresión repetida</h3>
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
    mov al, [num1]  
    sub al, '0'
    mov bl, [num2]  
    sub bl, '0'

    add al, bl
    mov [resultado], al
    movzx ecx, byte[resultado] ; ECX = número de repeticiones

.loop:
    push ecx            ; Guardar el valor del contador
    mov edx, hello_len  ; Longitud del mensaje
    mov ecx, hello      ; Dirección del mensaje
    mov ebx, 1          ; stdout
    mov eax, 4          ; syscall: sys_write
    int 0x80            ; Llamada al sistema
    pop ecx             ; Restaurar el contador
    loop .loop          ; Decrementar ECX y repetir
`}
              </code>
            </pre>
          </div>

          <h3>1️⃣3️⃣ Finalización del programa</h3>
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
    mov eax, 1
    xor ebx, ebx
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

export default SumaYCiclo;
