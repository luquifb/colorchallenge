
// Begin Game

function newGame () {    
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
var color1 = response.question.a.name;
    $('.position-1').addClass(color1);
var color2 = response.question.b.name;
    $('.position-2').addClass(color2);


// Generate answer in options

var result = Math.floor(Math.random()*3)+1;
var colorComb = response.question.answer.name;
var colorRandom = response.question.a.name;
var colorRandom2 = response.question.b.name;
var option = $('.option'+result).addClass('correct').text(colorComb);

    if ($('.option1').text() == 'Option'){
        $('.option1').text(colorRandom)
    }
    if ($('.option2').text() == 'Option'){
        $('.option2').text(colorRandom2)
    }
    if ($('.option3').text() == 'Option'){
        $('.option3').text(getRandomColors)
    }


// Random Colors Option

function getRandomColors() {
    var letters = '0F';
    var color = '#';
    for (var i = 0; i < 3; i++) {
      color += letters[Math.floor(Math.random() * 2)];
    }
    return color;
  }

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
    var randomColors = getRandomColors();
        $('.option2').html(randomColor);
        $('.option3').html(randomColors);
    }
        generateHexColor();
   

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
    return alert("A hexadecimal is a color specified with: #RRGGBB.\n\nRR (red), GG (green) and BB (blue) are hexadecimal integers between 00 and FF specifying the intensity of the color.\n\nFor example, #0000FF is displayed as blue, because the blue component is set to its highest value (FF) and the others are set to 00.")
});


});


// Balls changing colors random
   
window.setInterval(function(){
        
    var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
    
        $('.border').css({
        'background-color' : randomColor,
        });

        }, 500);

window.setInterval(function(){
  
    var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
      
        $('.border2').css({
            'background-color' : randomColor,
        });
    
        }, 500);      

window.setInterval(function(){
       
    var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
     
        $('.border3').css({
        'background-color' : randomColor,
        });
    
        }, 500);  
