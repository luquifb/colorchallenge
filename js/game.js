$(document).ready(function(){
    $('.play-game').on('click', function(){
        location.href = 'game.html';   
    })

var colors = {
    primary: ['red', 'blue', 'yellow'];
    secondary: ['green', 'violet', 'cyan', 'white', 'black']
    tertiary: ['']
}


    
function getRandomColor () {
    var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
    // $('.bouncing-color')    
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
//   function setRandomColor() {
//     $("#colorpad").css("background-color", getRandomColor());
//   }



// function generateOptions ();

// function validateAnswer ();

// function nextChallenge ();

// function needHelp ();
//     $('#help').on('click', function(){
//         $('#help').addClass('help');        
//     })

function generateHexColor () {
    var randomColor = getRandomColor();
    $('#hex-color').html(randomColor);
}

generateHexColor();
});

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