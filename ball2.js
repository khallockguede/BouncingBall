//Set global variable that would contain the position, velocity and the html element "ball"
var ball = document.getElementById('ball');
var velocityX = 50;
var velocityY = 10;
var positionX = 0;
var reverse = false;
var positionY = 0;
//write a function that can change the position of the html element "ball"
function moveBall() {
  var Xmin = 0;
  var Xmax = 300;
  var Ymin = 0;
  var Ymax = 300;
  
  if(reverse){
  positionX = positionX - velocityX;
  ball.style.left = positionX + 'px';
  positionY = positionY - velocityY;
  ball.style.top = positionY + 'px';
  
} else {
  positionX = positionX + velocityX;
  ball.style.left = positionX + 'px';
  positionY = positionY + velocityY;
  ball.style.top = positionY + 'px';
  }

  if(positionX > Xmax || positionX === Xmin 
    || positionY > Ymax || positionY === Ymin) 
    {
   reverse = !reverse;
  }
  }
  
  // two fixed x-axis coordinates (you will use these variable in step 3)
  


// This call the moveBall function every 100ms
setInterval(moveBall, 300);
