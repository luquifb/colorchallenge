
// Begin Game

function newGame () {
    // this.response = response;
    // this.operator = operator;
    // this.answer = answer;
    
    return getColorQuestion(3);
}

newGame.prototype.start = function(){
    var newGame = new newGame();
  };

$(document).ready(function(){
    $('.play-game').on('click', function(){
        newGame();
});


// Generate Colors in circles

var response = newGame();
    console.log(response.question.a.name)
    console.log(response.question.b.name)
    console.log(response);

var color1 = response.question.a.name;
    $('.position-1').addClass(color1);
var color2 = response.question.b.name;
    $('.position-2').addClass(color2);


// Generate answer in options

var answer = newGame();
    console.log(response.question.answer.name)
    console.log(response);

var colorComb = response.question.answer.name;
var colorOptions = response.question.answers;
    $('.option1').addClass(colorComb).addClass('correct').text(colorComb);


// Print operator in question

var operator = newGame();
var colorOperator = response.question.op;
    $('.operator').addClass(colorOperator).text(colorOperator);
    

// Validate Answer

$('#options').on('click', function(e){
    if ($(e.target).hasClass('correct') == true) {
        window.location.href = 'game.html';
        console.log(button);
    } else {
        window.location.href = 'game-over.html';   
    }
});


// Timer 

var startTimer = function(){
    timer = setInterval(function(){
        timePassed += 1000;
        var minutes = Math.floor(timePassed/(1000*60));
        var seconds = (timePassed/1000)%60;
        if(seconds < 10) {
            var timeDisplay = minutes + ":0" + seconds;
        } else {
            var timeDisplay = minutes + ":" + seconds;
        }
        $("#timer").text(timeDisplay);
    },1000);
}


// Random Colors Option
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getRandomColors() {
    var letters = '0F0F0F';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 2)];
    }
    return color;
  }

function generateHexColor() {
    var randomColor = getRandomColor();
    var randomColors = getRandomColors();
    $('.option2').html(randomColor);
    $('.option3').html(randomColors);
    }
        generateHexColor();


// functions colorPositions() { 
//     var position1 = colorComb;
//     var position2 = randomColor;
//     var position3 = randomColors;

//      return _.shuffle(colorPositions);
//     }



// function returnMessage(){

// };


// // Next Challenge + Counter 

// function nextChallenge() {
//     $("#counter").html(this.counter);
//     newGame.userChallengeCounter += 1;
    
// };

// // var count = 0;
// // for(var i = 0; i < array.length; ++i){
// //     if(array[i] == 2)
// //         count++;
// // }

// // Life Status

// function lifeStatus () {

// }


});