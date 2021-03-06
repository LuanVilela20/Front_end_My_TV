//Abre a div de cadastrar a programacao
$(".teste").on("click", function(){
  $("#divCadastrar").show();
  $("#divCadKind").hide();
  $("#divCadChannel").hide();
  $("#divListChannel").hide();
  $("#divCadMedia").hide();
  $("#divListMedia").hide();
  $("#divListKind").hide();
  $("#divListarProgramacao").hide();

  $(".span").remove();
  $("#select_kind").remove();
  $("#select_channel").remove();
  $("#select_media").remove();
  $.get("http://localhost:3000/kinds", function(response, status){

    let selectKind = '<select id="select_kind"  name="select_kind" style="width:500px;"><option selected value="">Tipo</option> </select><span class="span" style="color:red;">* Campo obrigatório!</span>';
    $("#divKind").append(selectKind);
    $.each(response, function(index, value){

      let option = "<option value="+value.id+">"+value.description+"</option>";
      $("#select_kind").append(option);
    });


  })


  $.get("http://localhost:3000/channels", function(response, status){

    let selectChanndel = '<select id="select_channel"  name="select_channel" style="width:500px;"><option selected value="">Canais</option></select><span class="span" style="color:red;">* Campo obrigatório!</span>';
    $("#divChannel").append(selectChanndel);
    $.each(response, function(index, value){

      let option = "<option value="+value.id+">"+value.description+"</option>";
      $("#select_channel").append(option);
    });


  })


  $.get("http://localhost:3000/media", function(response, status){

    let selectMedia = '<select id="select_media"  name="select_media" style="width:500px;"><option selected value="">Plataformas</option> </select><span class="span" style="color:red;">* Campo obrigatório!</span>';
    $("#divMedia").append(selectMedia);
    $.each(response, function(index, value){

      let option = "<option value="+value.id+">"+value.description+"</option>";
      $("#select_media").append(option);
    });
  })
})




//Lista a programacao cadastrada
$("#programListBtn").on("click", function(){
  $("#divCadastrar").hide();
  $("#divCadKind").hide();
  $("#divCadChannel").hide();
  $("#divListChannel").hide();
  $("#divCadMedia").hide();
  $("#divListMedia").hide();
  $("#divListKind").hide();
  $("#divListarProgramacao").show();

  $("#tbodyListProgam tr").remove();

  $.get("http://localhost:3000/attractions", function(response, status){
    console.log(response);

     $.each(response, function(index, value){

         let td = "<tr class='tr'><td>"+value.attraction_name+
                     "</td><td>"+value.desc_att+
                        "</td><td>"+value.transmission_date+
                          "</td><td>"+value.desc_kind+
                            "</td><td>"+value.desc_media+
                              "</td><td>"+value.desc_channel+
                                 "</td></tr>";
         $("#tbodyListProgam").append(td);
     });
  });

})



//acao de executar o cadastro a programacao
$("#cad_att").on("click", function(){

  if($("#select_kind").val() == "" && $("#select_channel").val() == "" && $("#select_media").val() == ""){
      alert("Campo obrigatorio vazio!");
  }else{
    var dados = {"attraction":{
      "attraction_name": $("#input_attraction_name").val(),
      "description": $("#input_description").val(),
      "transmission_date": $("#transmission_date").val(),
      "kind_id": $("#select_kind").val(),
      "channel_id": $("#select_channel").val(),
      "medium_id": $("#select_media").val()
    }
    };
  console.log(dados)

    $.post("http://localhost:3000/attractions", dados, function(response, status){
      console.log(status);
      console.log(response);
    })
  }
})
