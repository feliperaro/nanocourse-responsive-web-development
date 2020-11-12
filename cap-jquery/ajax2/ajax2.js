$(document).ready(function() {
    // Evento keyup ao digitar na caixa de texto.
    $("#sigla").keyup(function() {
      // Se o tamanho do conteúdo da caixa for igual a 2
      // (sigla digitada completamente)
      if($("#sigla").val().length == 2) {
        $("#resultado").load("ajax1_server.php", { "sigla": $("#sigla").val() });
      } else {
        $("#resultado").html("");
      }
    });
  });