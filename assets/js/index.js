const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$(document).ready(function () {
  $("#enviarMensaje").click(function () {
    alert("El mensaje fue enviado correctamente...");
  });
});

$(document).ready(function () {
    $(".card").click(function () {
      $(".card-body").toggle();
    });
  });