$(document).ready(function() {
  //Implementa o evento de click no elemento cujo id é "botao".
  $("#botao").click(function() {
    //Aplica a folha de estilo "vermelho" em todos os elementos <p>
    $("p").addClass("vermelho");
  });
});