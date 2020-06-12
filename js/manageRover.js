
const RoverPosition = new Position('N', 0, 0);
const Rover1 = new Rover(RoverPosition)


window.onload = function() { document.onkeypress = detectKeyPress}

function detectKeyPress(evObject){    
  switch (evObject.keyCode){      
    case 100:  
        Rover1.turnRight();          
        break;
    case 97:
        Rover1.turnLeft();        
        break;
    case 119:
        Rover1.moveForward();        
        break;
    case 115:
        Rover1.moveBackward();        
        break;
    default:
        Rover1.getPosition();
        break;
  }
}