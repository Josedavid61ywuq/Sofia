document.getElementById("startQuiz").addEventListener("click", function() {
  document.getElementById("quiz").style.display = "block";
});

function checkAnswer() {
  const respuesta1 = document.getElementById("respuesta1").checked;
  const resultado = document.getElementById("resultado");

  if (respuesta1) {
      resultado.innerHTML = "¡Correcto! El grupo funcional de las amidas es el grupo carbonilo unido a un grupo amino.";
      resultado.style.color = "green";
  } else {
      resultado.innerHTML = "Incorrecto. Inténtalo de nuevo.";
      resultado.style.color = "red";
  }
}
