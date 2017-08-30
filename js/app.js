
// Begin Game

function newGame () {
    return getColorQuestion(3);
    // this.userChallengeCounter = 0;    
}

$(document).ready(function(){
    $('.play-game').on('click', function(){

});
var response = newGame();
console.log(response.question.a.name)
console.log(response.question.b.name)
console.log(response);

var color1 = response.question.a.name;
$('.position-1').addClass(color1);
var color2 = response.question.b.name;
$('.position-2').addClass(color2);


var answer = newGame();
console.log(response.question.answer.name)
console.log(response);

var colorComb = response.question.answer.name;
$('.option1').addClass(colorComb).text(colorComb);


var operator = newGame();
var colorOperator = response.question.op;
$('.operator').addClass(colorOperator).text(colorOperator);


// Random Colors Question
// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

// function generateHexColor() {
//     var randomColor = getRandomColor();
//     $('#hex-color').html(randomColor);
//     }
//         generateHexColor();
});


// Validate Answer

function validateAnswer () {
    getColorQuestion.question() = getColorQuestion.answers();

};

function returnMessage(){

};



// Timer 
var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 300);
}

function slowAlert() {
  alert('You are out of time!');
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}


// Next Challenge + Counter 

function nextChallenge() {
    $("#counter").html(this.counter);
    newGame.userChallengeCounter += 1;
    
};

// var count = 0;
// for(var i = 0; i < array.length; ++i){
//     if(array[i] == 2)
//         count++;
// }

// Life Status

function lifeStatus () {

}

