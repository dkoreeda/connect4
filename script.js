console.log("hello");

jQuery(function() {

  //land page to race game
  $('button').click(function(){
      window.location.href='game-page.html';
  });

  //reset button on home page
  $('#reset').click(function(){
      $('.circle').removeClass('yellow');
      $('.circle').removeClass('red');
      $('.circle').text().replace('');
  });

  /*declared variables
   *number of rows, columns and spots on the board
   */
  var row = 5;
  var column = 6;
  var boardCircles = [];
  var players = [];

  //this click event grabs the player's name and save into an array: DOES NOT WORK
  $(".submit-button").click(function() {
    var inputName1 = $("#player1").val();
    console.log(inputName1);
    players.push(inputName1);
    $('#yellow').html(inputName1);

    var inputName2 = $("#player2").val();
    console.log(inputName2);
    players.push(inputName2);
    $('#red').html(inputName2);

      $('input[name=player]').each(function() {
         players.push($(this).val());
      });
  });

  console.log(players);

  //print current player to start the game
  var currentPlayer =  $('#current-player').html("Player 1");

  //creating board spots where index i represents rows and j represents columns
  for (var i = 0; i < row; i++) {
      boardCircles[i] = [];
     for (var j = 0; j < column; j++) {
          boardCircles[i][j] = $('<div>');
          boardCircles[i][j].addClass('circle');
          // console.log('boardCircles -->', boardCircles[i][j]);
          $('.container').append(boardCircles[i][j]);
     }
  }

  var player = 1;

  //this function was created to respond to a click event
  var playGame = function() {

    /*all elements with class "circle" has a click event
     *when the player click on a particular element, it will return its index
     *I noticed that the first column of the grid (board) has indexes that are multiple of 6*/
    $('.circle').click(function() {
        console.log('hi');
        var position = $(this).index();
        console.log('position clicked', position);
        var counter = 0;
        var startPosition = 0;
        var endPosition = 0;


             /*so if the player click on a div from the first column,
              *when it is divided by 6, it will get a remainder of 0,
              which means that the player clicked on the 1st column */
            if(position % 6 === 0) {
                console.log('if statement running');
                var j = 0;
                startPosition = 25;
                endPosition = 25;
                var d = 92;
                // console.log(left);
                if (player === 1) {
                    fillAvailableSlots(j, "yellow");
                    move(j, startPosition, endPosition, "slide-yellow");
                    player += 1;
                    currentPlayer = $('#current-player').text("Player 2");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                } else {
                    fillAvailableSlots(j, "red");
                    move(j, startPosition, endPosition, "slide-red");
                    player = 1;
                    currentPlayer = $('#current-player').text("Player 1");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                }
              }

               /*if the player click on a div from the second column,
                *when it is divided by 6, it will get a remainder of 1,
                which means that the player clicked on the 2nd column and so on*/
              if(position % 6 === 1) {
                var j = 1;
                startPosition = 25+92;
                endPosition = 25+92;
                // console.log(left);
                if (player === 1) {
                    fillAvailableSlots(j, "yellow");
                    move(j, startPosition, endPosition, "slide-yellow");
                    player += 1;
                    currentPlayer = $('#current-player').text("Player 2");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                } else {
                    fillAvailableSlots(j, "red");
                    move(j, startPosition, endPosition, "slide-red");
                    player = 1;
                    currentPlayer = $('#current-player').text("Player 1");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                }

              }
              if(position % 6 === 2) {
                var j = 2;
                startPosition = 25+92*2;
                endPosition = 25+92*2;
                // console.log(left);
                if (player === 1) {
                    fillAvailableSlots(j, "yellow");
                    move(j, startPosition, endPosition, "slide-yellow");
                    player += 1;
                    currentPlayer = $('#current-player').text("Player 2");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                } else {
                    fillAvailableSlots(j, "red");
                    move(j, startPosition, endPosition, "slide-red");
                    player = 1;
                    currentPlayer = $('#current-player').text("Player 1");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                }
              }
              if(position % 6 === 3) {
                var j = 3;
                startPosition = 25+92*3;
                endPosition = 25+92*3;
                // console.log(left);
                if (player === 1) {
                    fillAvailableSlots(j, "yellow");
                    move(j, startPosition, endPosition, "slide-yellow");
                    player += 1;
                    currentPlayer = $('#current-player').text("Player 2");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                } else {
                    fillAvailableSlots(j, "red");
                    move(j, startPosition, endPosition, "slide-red");
                    player = 1;
                    currentPlayer = $('#current-player').text("Player 1");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                }
              }
              if(position % 6 === 4) {
                var j = 4;
                startPosition = 25+92*4;
                endPosition = 25+92*4;
                // console.log(left);
                if (player === 1) {
                    fillAvailableSlots(j, "yellow");
                    move(j, startPosition, endPosition, "slide-yellow");
                    player += 1;
                    currentPlayer = $('#current-player').text("Player 2");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                } else {
                    fillAvailableSlots(j, "red");
                    move(j, startPosition, endPosition, "slide-red");
                    player = 1;
                    currentPlayer = $('#current-player').text("Player 1");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                }
              }
              if(position % 6 === 5) {
                var j = 5;
                startPosition = 25+92*5;
                endPosition = 25+92*5;
                // console.log(left);
                if (player === 1) {
                    fillAvailableSlots(j, "yellow");
                    move(j, startPosition, endPosition, "slide-yellow");
                    player += 1;
                    currentPlayer = $('#current-player').text("Player 2");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                } else {
                    fillAvailableSlots(j, "red");
                    move(j, startPosition, endPosition, "slide-red");
                    player = 1;
                    currentPlayer = $('#current-player').text("Player 1");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                }
              }
      });


}
playGame();


    //This function creates a div and slide it down on the board
    function move(column, leftStart, leftEnd, color)  {

        //total height of container = 350
        var totalHeight = 370;
        var distanceBtwDivs = 80;
        //create a div
        var slideCircle = $('<div>');
        // slideCircle.addClass('slide-circle');
        //add it a class of color
        slideCircle.addClass(color);
        //set left position to it according to the argument given in the function
        slideCircle.css('left', leftStart);
        //append this div to the container, which represents the board
        $('.container').append(slideCircle);

        //account for number of available slots on the board
        var numOfSlots = 0;
        for (var i = 0; i < row; i++) {
            if(boardCircles[i][column].hasClass('circle')){
              numOfSlots += 1;
            }
        }

        /*if there are 5 available slots then distance to slide piece down on the board
         *will be total height of the container
         */
        if (numOfSlots === 5) {
            slideCircle.animate({top: totalHeight, left: leftEnd}, 200);
            slideCircle.fadeOut(50);
        }

        /*if there are 4 available slots then distance to slide piece down on the board
         *will be total height of the container minus 1 slot lenght
         */
        if (numOfSlots === 4) {
            slideCircle.animate({top: totalHeight - distanceBtwDivs, left: leftEnd}, 200);
            slideCircle.fadeOut(50);
        }
        /*if there are 3 available slots then distance to slide piece down on the board
         *will be total height of the container minus 2 slot lenght and so on...
         */
        if (numOfSlots === 3) {
            slideCircle.animate({top: totalHeight - distanceBtwDivs * 2, left: leftEnd}, 200);
            slideCircle.fadeOut(50);
        }
        if (numOfSlots === 2) {
            slideCircle.animate({top: totalHeight - distanceBtwDivs * 3, left: leftEnd}, 200);
            slideCircle.fadeOut(50);
        }
        if (numOfSlots === 1) {
            slideCircle.animate({top: totalHeight - distanceBtwDivs * 4, left: leftEnd}, 200);
            slideCircle.fadeOut(50);
        }
        if (numOfSlots === 0) {
            slideCircle.fadeOut(50);
        }
    }

    //this function scan each row of a particular column and return the number of available slots
    function fillAvailableSlots(column, color, numOfSlots) {
        var numOfSlots = 0;
        for (var i = 0; i < row; i++) {
          console.log('varredura');
            if(boardCircles[i][column].hasClass('circle')){
              numOfSlots += 1;
            }
        }
        console.log('number of available slots', numOfSlots);
        if (numOfSlots !== 0) {
          boardCircles[numOfSlots-1][column].removeClass('circle');
          boardCircles[numOfSlots-1][column].addClass(color);
        }

        setTimeout(fillAvailableSlots, 2000);
    }

    /*this function check if the game was a tie, so it scan all rows and columns
     *it looks for classes yellow and/or red and count how many of them there are in the array (var counter)
     */
    var checkTiedGame = function(array) {
        var counter = 0;
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < column; j++) {
                if (array[i][j].hasClass('yellow') || array[i][j].hasClass('red')) {
                    counter += 1;
                }
            }
        }

        //if counter is equals to 30, which is the total number of slots on the grid, it will send an alert
        if (counter === 30) {
          console.log('checkTiedGame---> if statement')
          setTimeout(function(){
            alert ('Try again!!!');
          }, 250);
        }
    }

    //this function check all the possible combinations to win the game
    var checkForWinner = function(circles) {
        // console.log('checkWinner');
        // console.log(circles);

        //scan rows
        for (var j = 0; j < 3; j++) {
          for (var i = 0; i < row; i++) {
            //if statement that checks if yellow has a sequence in any row
            if (circles[i][j].hasClass('yellow') && circles[i][j+1].hasClass('yellow') && circles[i][j+2].hasClass('yellow') && circles[i][j+3].hasClass('yellow'))
            {
                console.log('checkWinner ---> if statement')
                setTimeout(function(){
                  alert ('Yellow Wins!!!');
                }, 250);
            }
            //if statement that checks if red has a sequence in any row
            if (circles[i][j].hasClass('red') && circles[i][j+1].hasClass('red') && circles[i][j+2].hasClass('red') && circles[i][j+3].hasClass('red'))
            {
                console.log('checkWinner ---> if statement')
                setTimeout(function(){
                  alert ('Red Wins!!!');
                }, 250);
            }
          }
        }

        //scan columns
        for (var i = 0; i < 2; i++) {
          for (var j = 0; j < column; j++) {
            //if statement that check if yellow has a sequence in any column
            if (circles[i][j].hasClass('yellow') && circles[i+1][j].hasClass('yellow') && circles[i+2][j].hasClass('yellow') && circles[i+3][j].hasClass('yellow'))
            {
                console.log('checkWinner ---> if statement')
                setTimeout(function(){
                  alert ('Yellow Wins!!!');
                }, 250);
            }
            //if statement that check if red has a sequence in any column
            if (circles[i][j].hasClass('red') && circles[i+1][j].hasClass('red') && circles[i+2][j].hasClass('red') && circles[i+3][j].hasClass('red'))
            {
                console.log('checkWinner ---> if statement')
                setTimeout(function(){
                  alert ('Red Wins!!!');
                }, 250);
            }
          }
        }

        //scan diagonals
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 3; j++) {
                //if statement = yellow completes a diagonal of 4 in a row
                if (circles[i][j].hasClass('yellow') && circles[i+1][j+1].hasClass('yellow') && circles[i+2][j+2].hasClass('yellow') && circles[i+3][j+3].hasClass('yellow') ||
                    circles[i][j+3].hasClass('yellow') && circles[i+1][j+2].hasClass('yellow') && circles[i+2][j+1].hasClass('yellow') && circles[i+3][j].hasClass('yellow'))
                {
                    console.log('checkWinner ---> if statement')
                    setTimeout(function(){
                      alert ('Yellow Wins!!!');
                    }, 250);
                }
                //if statement = red completes a diagonal of 4 in a row
                if (circles[i][j].hasClass('red') && circles[i+1][j+1].hasClass('red') && circles[i+2][j+2].hasClass('red') && circles[i+3][j+3].hasClass('red')||
                    circles[i][j+3].hasClass('red') && circles[i+1][j+2].hasClass('red') && circles[i+2][j+1].hasClass('red') && circles[i+3][j].hasClass('red'))
                {
                    console.log('checkWinner ---> if statement')
                    setTimeout(function(){
                      alert ('Red Wins!!!');
                    }, 250);
                }
            }
        }
    }


});
