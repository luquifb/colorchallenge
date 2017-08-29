    
function getRandomColors () {
    var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
};

  
//   function setRandomColor() {
//     $("#colorpad").css("background-color", getRandomColor());
//   }

// function generateOptions ();



// function needHelp ();
//     $('#help').on('click', function(){
//         $('#help').addClass('help');        
//     })


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