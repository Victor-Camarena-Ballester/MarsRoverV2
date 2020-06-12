export default class Rover {
    
    constructor(position) {      
      this.position = position;
    }

    moveForward(){
        this.position.x += 1;
    }


  }