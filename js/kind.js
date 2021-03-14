//abre a div de cadastgrar os tipos
$("#kindCadBtn").on("click", function(){
  $("#divListarProgramacao").hide();
  $("#divCadastrar").hide();
  $("#divCadChannel").hide();
  $("#divListChannel").hide();
  $("#divCadMedia").hide();
  $("#divListMedia").hide();
  $("#divListKind").hide();
  $("#divCadKind").show();

})

//acao de executar o cadastro do tipo
$("#cad_kind").on("click", function(){
  console.log("teste");
  console.log($("#input_description_kind").val());

  var dados = {"kind":{
        "description": $("#input_description_kind").val(),
      }
  };

  $.post("http://localhost:3000/kinds", dados, function(response, status){
    console.log(status);
    console.log(response);
  })
})



//Lista os tipos
$("#listKindBtn").on("click", function(){
  $("#divListarProgramacao").hide();
  $("#divCadastrar").hide();
  $("#divCadKind").hide();
  $("#divCadChannel").hide();
  $("#divListChannel").hide();
  $("#divCadMedia").hide();
  $("#divListMedia").hide();
  $("#divListKind").show();

  $("#tbodyListKind tr").remove();


  $.get("http://localhost:3000/kinds", function(response, status){
    console.log(response);

     $.each(response, function(index, value){

         let td = "<tr class='tr'><td>"+value.description+
                                 "</td></tr>";
         $("#tbodyListKind").append(td);
     });
  });

})
