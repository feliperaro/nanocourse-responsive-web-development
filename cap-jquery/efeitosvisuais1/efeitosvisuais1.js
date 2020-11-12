$(document).ready(function() {
    //quadrado começa visivel
    $("#quadrado").hide();
    //quando o mouse passar pelo alvo, mostra quadrado
    $("#alvo").mouseover(function() {
        $("#quadrado").show();
    });
    //quando o mouse sair do alvo, some com o quadrado
    $("#alvo").mouseout(function() {
        $("#quadrado").hide();
    });
});