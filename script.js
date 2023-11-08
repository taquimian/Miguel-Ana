// Define la fecha de la primera cita (Año, Mes (0-11), Día, Hora, Minuto, Segundo)
const primeraCita = new Date(2023, 10, 8, 18, 0, 0); // 10 es noviembre (0-11)

function actualizarContador() {
  const ahora = new Date();
  let diferencia = ahora - primeraCita;

  if (diferencia < 0) {
    diferencia = 0;
  }

  const segundos = Math.floor(diferencia / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const segundosRestantes = segundos % 60;
  const minutosRestantes = minutos % 60;
  const horasRestantes = horas % 24;

  const contadorMensaje = `Han pasado ${dias} días, ${horasRestantes} horas, ${minutosRestantes} minutos, y ${segundosRestantes} segundos`;
  const mensaje = `<p>${contadorMensaje}</p><p>desde nuestra primera cita.</p>`;

  document.getElementById("contador").innerHTML = mensaje;

  // Obtiene la fecha y hora actual
  const fechaActual = ahora.toLocaleString();
  document.getElementById("fecha-actual").textContent = `Hoy es ${fechaActual}`;
}

actualizarContador();

// Actualiza el contador cada segundo
setInterval(actualizarContador, 1000);
