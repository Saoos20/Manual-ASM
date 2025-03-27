import React, { useState } from "react";
import "./Piramide.css";

const Piramide = () => {
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
    <div className="piramide-container">
      <h1>Ejemplo: Pirámide de Asteriscos en NASM x86 con GCC</h1>
      <p>
        Este código lee un número de filas y luego imprime una pirámide de asteriscos
        en la consola.
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
nasm -f elf32 piramide.asm -o piramide.o

; 2. Enlazamos
gcc -m32 piramide.o -o piramide -no-pie

; 3. Ejecutamos
./piramide
`}
              </code>
            </pre>
          </div>

          <h3>2️⃣ Sección `.data`: Datos inicializados</h3>
          <p>Define las variables necesarias para mostrar mensajes, leer el número de filas, y los caracteres a imprimir:</p>
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
    prompt db "Ingrese el numero de filas: ", 0   ; Mensaje para pedir el número de filas
    fmt_in db "%d", 0                             ; Formato para leer un número
    fmt_out db "%c", 0                            ; Formato para imprimir caracteres
    newline db 10, 0                              ; Salto de línea
    space db " ", 0                               ; Espacio
    asterisk db " * ", 0                          ; Asterisco
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`prompt`: El mensaje que solicita al usuario ingresar el número de filas.</li>
            <li>`fmt_in`: El formato de entrada para leer el número de filas.</li>
            <li>`fmt_out`: El formato de salida para imprimir un carácter.</li>
            <li>`newline`: El salto de línea para separar las filas.</li>
            <li>`space`: El espacio en blanco antes de los asteriscos.</li>
            <li>`asterisk`: El carácter que representa el asterisco para la pirámide.</li>
          </ul>

          <h3>3️⃣ Sección `.bss`: Variables no inicializadas</h3>
          <p>Reserva espacio para almacenar el número de filas ingresado:</p>
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
    filas resd 1  ; Reserva espacio para almacenar el número de filas
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`filas`: Variable donde se almacenará el número de filas que el usuario ingrese.</li>
          </ul>

          <h3>4️⃣ Sección `.text`: Código principal</h3>
          <p>Contiene la lógica para imprimir la pirámide:</p>
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
    ; Pedir el número de filas
    push prompt
    call printf
    add esp, 4

    push filas
    push fmt_in
    call scanf
    add esp, 8

    ; Cargar el número de filas en ECX
    mov ecx, [filas]
    mov edi, 1   ; Controla la cantidad de asteriscos por fila

fila_loop:
    push ecx  ; Guardar ECX en la pila

    ; Imprimir espacios antes de los asteriscos
    mov eax, [filas]
    sub eax, edi  ; Calcular los espacios a imprimir
    mov ebx, eax

espacio_loop:
    cmp ebx, 0
    je imprimir_asteriscos
    push space
    call printf
    add esp, 4
    dec ebx
    jmp espacio_loop

imprimir_asteriscos:
    mov ebx, edi  ; EBX controla la cantidad de asteriscos en la fila

asterisco_loop:
    cmp ebx, 0
    je nueva_linea
    push asterisk
    call printf
    add esp, 4
    dec ebx
    jmp asterisco_loop

nueva_linea:
    push newline
    call printf
    add esp, 4

    pop ecx   ; Restaurar ECX
    inc edi   ; Aumentar la cantidad de asteriscos en la siguiente fila
    loop fila_loop  ; Repetir hasta completar todas las filas

    xor eax, eax
    ret
`}
              </code>
            </pre>
          </div>
          <ul>
            <li>`push prompt`: Muestra el mensaje solicitando el número de filas.</li>
            <li>`call printf`: Llama a la función `printf` para mostrar el mensaje.</li>
            <li>`push filas`: Almacena el número de filas ingresado.</li>
            <li>`call scanf`: Llama a la función `scanf` para leer el número de filas desde la entrada estándar.</li>
            <li>`mov ecx, [filas]`: Carga el número de filas en el registro `ecx`.</li>
            <li>`mov edi, 1`: Inicializa el contador de asteriscos (1 por fila).</li>
            <li>`sub eax, edi`: Calcula el número de espacios a imprimir.</li>
            <li>`push space`: Imprime los espacios antes de los asteriscos.</li>
            <li>`push asterisk`: Imprime los asteriscos en cada fila.</li>
            <li>`push newline`: Imprime un salto de línea después de cada fila.</li>
            <li>`inc edi`: Incrementa la cantidad de asteriscos para la siguiente fila.</li>
            <li>`loop fila_loop`: Repite hasta que se impriman todas las filas de la pirámide.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Piramide;
