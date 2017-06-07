console.log("hello");

jQuery(function() {

  //land page to race game
  $('button').click(function(){
      window.location.href='index.html';
  });


    var players = [];

  $(".submit-button").click(function() {
    var inputName1 = $("#player1").val();
    // console.log(inputName1);
    // players.push(inputName1);
    $('#yellow').html(inputName1);

    var inputName2 = $("#player2").val();
    // console.log(inputName2);
    // players.push(inputName2);
    $('#red').html(inputName2);

      $('input[name=player]').each(function() {
         players.push($(this).val());
      });
  });

  console.log(players);

});
