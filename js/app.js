
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
    // $('.option').addClass(colorOptions);



// Print operator in question

var operator = newGame();
var colorOperator = response.question.op;
    $('.operator').addClass(colorOperator).text(colorOperator);
    

// Validate Answer
function validateAnswer () {
    $('button').on('click', function(){
        if (this.e === '.correct') {
            return newGame ();
        } else {
            window.location.href = 'game-over.html';
        }
        console.log("hago click");  
    });
    
};


});


// Random Colors Option
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function generateHexColor() {
    var randomColor = getRandomColor();
    $('.option2').html(randomColor);
    }
        generateHexColor();






// Validate Answer

// function validateAnswer () {
//     getColorQuestion.question() = getColorQuestion.answers();

// };

// function returnMessage(){

// };



// // Timer 
// var timeoutID;

// function delayedAlert() {
//   timeoutID = window.setTimeout(slowAlert, 300);
// }

// function slowAlert() {
//   alert('You are out of time!');
// }

// function clearAlert() {
//   window.clearTimeout(timeoutID);
// }


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

