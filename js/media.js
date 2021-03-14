$("#mediaCadBtn").on("click", function(){
  $("#divListarProgramacao").hide();
  $("#divCadastrar").hide();
  $("#divCadKind").hide();
  $("#divListChannel").hide();
  $("#divListMedia").hide();
  $("#divListKind").hide();
  $("#divCadChannel").hide();
  $("#divCadMedia").show();

})


//acao de executar o cadastro do tipo
$("#cad_media").on("click", function(){
  console.log("teste");
  console.log($("#input_description_media").val());

  var dados = {"channel":{
        "description": $("#input_description_media").val(),
      }
  };

  $.post("http://localhost:3000/media", dados, function(response, status){
    console.log(status);
    console.log(response);
  })
})


//lista os canais
$("#listMediaBtn").on("click", function(){
  $("#divListarProgramacao").hide();
  $("#divCadastrar").hide();
  $("#divCadKind").hide();
  $("#divCadChannel").hide();
  $("#divListChannel").hide();
  $("#divCadMedia").hide();
  $("#divListMedia").show();
  $("#divListKind").hide();

  $("#tbodyListMedia tr").remove();

  $.get("http://localhost:3000/media", function(response, status){
    console.log(response);

     $.each(response, function(index, value){

         let td = "<tr class='tr'><td>"+value.description+
                                 "</td></tr>";
         $("#tbodyListMedia").append(td);
     });
  });

})
