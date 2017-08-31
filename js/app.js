
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
    // console.log(response.question.a.name)
    // console.log(response.question.b.name)
    // console.log(response);

var color1 = response.question.a.name;
    $('.position-1').addClass(color1);
var color2 = response.question.b.name;
    $('.position-2').addClass(color2);


// Generate answer in options

// var answer = newGame();
//     console.log(response.question.answer.name)
//     console.log(response);

var result = Math.floor(Math.random()*3)+1;
var colorComb = response.question.answer.name;
var option = $('.option'+result).addClass('correct').text(colorComb);

    if ($('.option1').text() == 'Option'){
        $('.option1').addClass('correct').text('cuak')
    }
    if ($('.option2').text() == 'Option'){
        $('.option2').addClass('correct').text('trash')
    }
    if ($('.option3').text() == 'Option'){
        $('.option3').addClass('correct').text('guau')
    }



   


    // for(var i = 0; i < 3; i++){
    //     var colorComb = response.question.answer.name;

    //     var option = $('<button>').addClass('correct').attr('option',colorComb);
    //         option.click(function(e){

    //         $(this).attr('option').attr('option',colorComb).text(colorComb);
    //         console.log('has hecho click en la opción ' + option);
    //     })
    // }

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

// Ask for help
$('.btn-info').on('click', function(){
    return alert("I'm sorry, try harder!!")
});


// Random Colors Option
// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

//   function getRandomColors() {
//     var letters = '0F';
//     var color = '#';
//     for (var i = 0; i < 3; i++) {
//       color += letters[Math.floor(Math.random() * 2)];
//     }
//     return color;
//   }

// function generateHexColor() {
//     var randomColor = getRandomColor();
//     var randomColors = getRandomColors();
//         $('.option2').html(randomColor);
//         $('.option3').html(randomColors);
//     }
//         generateHexColor();


// function colorPositions() { 
//     var position1 = colorComb;
//     var position2 = randomColor;
//     var position3 = randomColors;
//     var position = {position1, position2, position3};

//      return colorPositions(position);
//     }



// Timer 

// var startTimer = function(){
//     timer = setInterval(function(){
//         timePassed += 1000;
//         var minutes = Math.floor(timePassed/(1000*60));
//         var seconds = (timePassed/1000)%60;
//         if(seconds < 10) {
//             var timeDisplay = minutes + ":0" + seconds;
//         } else {
//             var timeDisplay = minutes + ":" + seconds;
//         }
//         $("#timer").text(timeDisplay);
//     },1000);
// }

// function returnMessage(){

// };

// Counter 

// // var count = 0;
// // for(var i = 0; i < array.length; ++i){
// //     if(array[i] == 2)
// //         count++;
// // }

// // Life Status

// function lifeStatus () {

// }


});




    // for(var i = 0; i < 3; i++){
    //     var colorComb = response.question.answer.name;

    //     var option = $('<button>').addClass('correct').attr('option',colorComb);
    //         option.click(function(e){

    //         $(this).attr('option').attr('option',colorComb).text(colorComb);
    //         console.log('has hecho click en la opción ' + option);
    //     })
    // }