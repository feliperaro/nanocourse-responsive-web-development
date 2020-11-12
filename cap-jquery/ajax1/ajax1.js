$(document).ready(function() {
    // Evento keyup ao digitar na caixa de texto.
    $("#sigla").keyup(function() {
      // Se o tamanho do conteúdo da caixa for igual a 2
      // (sigla digitada completamente)
      if($("#sigla").val().length == 2) {
        $.ajax({
          url: "ajax1_server.php",
          method: "POST",
          // enviar a sigla
          data: "sigla="+$("#sigla").val(),
          // Se a requisição voltar com sucesso.
          success: function(result){
            $("#resultado").html(result);
          },
          // Se a requisição NÃO voltar com sucesso.
          error: function(){
            $("#resultado").html("Houve uma falha na requisição.");
          }
        });
      } else {
        $("#resultado").html("");
      }
    });
  });