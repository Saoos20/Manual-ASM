import React from "react";
import "./Tips.css";

const Tips = () => {
  return (
    <div className="tips-container">
      <h1>🔧 Consejos Útiles para Programar en ASM</h1>

      {/* Introducción */}
      <section className="section">
        <h2>📌 Introducción</h2>
        <p>
          Programar en ensamblador puede ser complicado, pero siguiendo ciertas
          buenas prácticas y consejos, podrás escribir código más limpio,
          eficiente y fácil de depurar. En esta sección, te compartimos algunos
          consejos prácticos para mejorar tu experiencia programando en NASM.
        </p>
      </section>

      {/* Consejos generales */}
      <section className="section">
        <h2>⚡ Consejos Generales</h2>
        <ul>
          <li>
            <strong>Escribe código modular:</strong> Divide tu código en secciones
            o procedimientos pequeños y reutilizables. Esto hace que sea más fácil
            entender, mantener y depurar el código.
          </li>
          <li>
            <strong>Comentarios claros:</strong> Usa comentarios descriptivos para
            explicar lo que hace cada bloque de código. No asumas que lo recordarás
            todo; otros (o tú mismo en el futuro) necesitarán entender lo que has
            hecho.
          </li>
          <li>
            <strong>Optimiza el uso de registros:</strong> Los registros son
            limitados, así que usa los registros de forma eficiente. Cuando sea
            posible, reutiliza registros o usa memoria si no puedes evitar usar más
            registros.
          </li>
          <li>
            <strong>Minimiza el uso de saltos condicionales:</strong> Aunque los
            saltos pueden ser útiles, abusar de ellos puede hacer que el flujo del
            programa sea difícil de seguir. Usa saltos solo cuando sean necesarios.
          </li>
          <li>
            <strong>Presta atención a las instrucciones de acceso a memoria:</strong> 
            El acceso a memoria puede ser lento. Asegúrate de que tus accesos a
            memoria sean eficientes, evitando accesos innecesarios.
          </li>
        </ul>
      </section>

      {/* Consejos para la depuración */}
      <section className="section">
        <h2>🔍 Consejos para Depurar</h2>
        <ul>
          <li>
            <strong>Usa GDB para depurar:</strong> GDB es una herramienta excelente
            para depurar código ensamblador. Coloca puntos de interrupción en lugares
            clave, examina los registros y el flujo de ejecución para encontrar
            errores.
          </li>
          <li>
            <strong>Verifica los registros y la memoria:</strong> Cuando tengas
            errores, inspecciona los valores de los registros y la memoria en GDB
            para asegurarte de que los valores se están almacenando correctamente.
          </li>
          <li>
            <strong>Prueba tu código en etapas:</strong> En lugar de escribir todo
            el código de una vez, prueba secciones de tu programa a medida que
            avanzas. Esto te permitirá detectar errores más temprano en el proceso.
          </li>
          <li>
            <strong>Agrega instrucciones de depuración:</strong> Usa instrucciones
            como <code>mov</code> para almacenar valores en registros y luego
            imprimirlos en la consola o verlos en un depurador.
          </li>
          <li>
            <strong>Analiza el flujo de ejecución:</strong> Utiliza herramientas como
            <code>strace</code> o <code>ltrace</code> para rastrear las llamadas al
            sistema y asegurarte de que el flujo de ejecución de tu código sea el
            esperado.
          </li>
        </ul>
      </section>

      {/* Consejos de optimización */}
      <section className="section">
        <h2>⚙️ Consejos para Optimizar Código</h2>
        <ul>
          <li>
            <strong>Usa las instrucciones más eficientes:</strong> Algunas
            instrucciones en NASM son más rápidas que otras. Asegúrate de usar las
            instrucciones más eficientes en términos de rendimiento para cada tarea.
          </li>
          <li>
            <strong>Evita operaciones costosas:</strong> Las operaciones de
            multiplicación y división pueden ser mucho más lentas que las sumas y
            restas. Siempre que sea posible, usa sumas o restas en lugar de
            multiplicación.
          </li>
          <li>
            <strong>Evita la repetición de cálculos:</strong> Si necesitas usar un
            valor o resultado varias veces, guárdalo en un registro o en memoria
            temporalmente en lugar de volver a calcularlo.
          </li>
          <li>
            <strong>Reduce la cantidad de saltos:</strong> El uso excesivo de saltos
            puede hacer que el flujo de ejecución del programa sea más difícil de
            seguir, lo que puede aumentar el riesgo de errores. Usa saltos solo cuando
            sean absolutamente necesarios.
          </li>
          <li>
            <strong>Utiliza técnicas de optimización de memoria:</strong> Organiza tus
            variables en la memoria para que los accesos sean lo más rápido posible,
            evitando accesos innecesarios a la memoria.
          </li>
        </ul>
      </section>

      {/* Consejos para la organización del proyecto */}
      <section className="section">
        <h2>🗂️ Consejos para Organizar tu Proyecto</h2>
        <ul>
          <li>
            <strong>Usa un archivo de encabezado:</strong> Mantén un archivo de
            encabezado separado con definiciones de constantes y macros para que tu
            código sea más limpio y reutilizable.
          </li>
          <li>
            <strong>Comenta tu código correctamente:</strong> Agrega comentarios
            al inicio de cada sección de tu código para describir qué hace cada parte.
            Además, documenta el propósito de los procedimientos y funciones.
          </li>
          <li>
            <strong>Usa un sistema de control de versiones:</strong> Utiliza Git o
            cualquier otra herramienta de control de versiones para realizar un
            seguimiento de las versiones de tu código y colaborar con otros.
          </li>
          <li>
            <strong>Divide tu código en módulos:</strong> Para proyectos más grandes,
            organiza tu código en módulos o archivos independientes para mejorar la
            mantenibilidad.
          </li>
          <li>
            <strong>Usa la convención de nombres consistente:</strong> Asegúrate de
            usar una convención de nombres coherente para etiquetas, procedimientos
            y variables, lo que facilitará la comprensión de tu código a otros
            desarrolladores.
          </li>
        </ul>
      </section>

      {/* Consejos para evitar errores comunes */}
      <section className="section">
        <h2>❌ Errores Comunes a Evitar</h2>
        <ul>
          <li>
            <strong>Olvidar inicializar registros:</strong> Muchos errores en código
            ASM se deben a registros no inicializados. Asegúrate de inicializar los
            registros antes de usarlos.
          </li>
          <li>
            <strong>Errores con las direcciones de memoria:</strong> Siempre que
            trabajes con memoria, verifica las direcciones que estás utilizando para
            evitar errores de acceso ilegal.
          </li>
          <li>
            <strong>Confundir los tipos de datos:</strong> Asegúrate de que los datos
            que estás manipulando coincidan con el tipo adecuado (por ejemplo, enteros
            de 32 bits vs 64 bits).
          </li>
          <li>
            <strong>No verificar los valores de retorno:</strong> Al hacer llamadas
            al sistema, siempre verifica los valores de retorno para asegurarte de que
            no haya errores de ejecución.
          </li>
          <li>
            <strong>Confundir el uso de registros y memoria:</strong> Es fácil
            equivocarse entre usar registros o memoria. Asegúrate de entender cómo
            funcionan y cuándo usar cada uno.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Tips;
