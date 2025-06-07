const DateTime = luxon.DateTime;
const dateDiv = document.getElementById('date-display');

function updateDateTime() {
  const now = DateTime.now().setLocale('es'); // Establece el idioma en español

  // Formateamos cada parte manualmente en el orden correcto
  const weekday = now.toFormat('cccc');  // Día de la semana completo en español
  const day = now.toFormat('d');         // Día del mes
  const month = now.toFormat('LLLL');    // Nombre del mes completo en español
  const year = now.toFormat('yyyy');     // Año con 4 dígitos
  const time = now.toFormat('HH:mm:ss'); // Hora con segundos
  const milliseconds = now.toFormat('SSS'); // Milisegundos
  const zone = now.toFormat('ZZZZ');   // Nombre completo de la zona horaria (incluye horario de verano si aplica)

  // Construimos la fecha en el orden correcto
  const formattedDate = `${weekday}, ${day} de ${month} de ${year}, ${time}.${milliseconds} ${zone}`;

  // Actualizamos el contenido del elemento
  dateDiv.textContent = formattedDate;
}

setInterval(updateDateTime, 1); // Actualiza cada milisegundo
updateDateTime();
// Función para convertir texto a binario
function textToBinary(text) {
  return text
    .split('')
    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');
}

// Obtener el texto del elemento con id "content"
document.addEventListener('DOMContentLoaded', () => {
  const contentElement = document.getElementById('content');
  const binaryOutputElement = document.getElementById('binary-output');

  if (contentElement && binaryOutputElement) {
    const contentText = contentElement.innerText || contentElement.textContent;
    const binaryText = textToBinary(contentText);

    // Mostrar el texto en binario en el div con id "binary-output"
    binaryOutputElement.textContent = binaryText;
  }
});
// Función para convertir texto a binario
function textToBinary(text) {
  return text
    .split('')
    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');
}

// Obtener el texto del elemento con id "content"
document.addEventListener('DOMContentLoaded', () => {
  const contentElement = document.getElementById('content');

  if (contentElement) {
    const contentText = contentElement.innerText || contentElement.textContent;
    const binaryText = textToBinary(contentText);

    // Establecer el texto binario como contenido de body::before
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        body::before {
          content: "${binaryText.replace(/"/g, '\\"')}";
          white-space: pre-wrap;
          font-family: monospace;
          font-size: 0.75rem;
          color: rgba(0,0,0,0.1);
          filter: blur(1px);
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          z-index: -1;
        }
      `;
    document.head.appendChild(styleElement);
  }
});