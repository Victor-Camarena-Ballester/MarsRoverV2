class Rover {
    
    constructor(position) {      
      this.position = position;
    }

    moveForward(){
        this.position.ahead();
    }
    moveBackward(){
      this.position.behind();
    }
    turnLeft(){
        this.position.left();
    }
    turnRight(){
      this.position.rigth();
    }

    getPosition(){
      console.log(this.position.getPoint())
    }

  }