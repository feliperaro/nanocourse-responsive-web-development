$(document).ready(function() {
  $("#todos").click(function() {
    // Se o checkbox todos estiver marcado.
    if ($("#todos").is(':checked')) {
      // Este comando marcaria todos os checkboxes
      //$("input[name='interesses']").prop('checked',true);
      // mas o ideal é disparar um evento de clique em cada
      // um deles e acionar a programação do evento.
      $("input[name='interesses']").trigger("click");
    } else {
      // Se o checkbox todos estiver desmarcado.
      // Desmarca todos os outros checkboxes
      $("input[name='interesses']").prop('checked',false);
    }
  });
  // Quando um dos checkboxes de interesse é clicado,
  // exibe o conteúdo no console.
  $("input[name='interesses']").click(function(){
    console.log($(this).val());
  });
});