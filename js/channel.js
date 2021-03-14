$("#channelCadBtn").on("click", function(){
  $("#divListarProgramacao").hide();
  $("#divCadastrar").hide();
  $("#divCadKind").hide();
  $("#divListChannel").hide();
  $("#divCadMedia").hide();
  $("#divListMedia").hide();
  $("#divListKind").hide();
  $("#divCadChannel").show();

})


//acao de executar o cadastro do tipo
$("#cad_channel").on("click", function(){
  console.log("teste");
  console.log($("#input_description_channel").val());

  var dados = {"channel":{
        "description": $("#input_description_kind").val(),
      }
  };

  $.post("http://localhost:3000/channels", dados, function(response, status){
    console.log(status);
    console.log(response);
  })
})


//lista os canais
$("#listChannelBtn").on("click", function(){
  $("#divListarProgramacao").hide();
  $("#divCadastrar").hide();
  $("#divCadKind").hide();
  $("#divCadChannel").hide();
  $("#divListChannel").show();
  $("#divCadMedia").hide();
  $("#divListMedia").hide();
  $("#divListKind").hide();

  $("#tbodyListChannel tr").remove();

  $.get("http://localhost:3000/channels", function(response, status){
    console.log(response);

     $.each(response, function(index, value){

         let td = "<tr class='tr'><td>"+value.description+
                                 "</td></tr>";
         $("#tbodyListChannel").append(td);
     });
  });

})
