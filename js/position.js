export default class Position {
    #directions = ['N','W','S','O'];
    #maxY = 10;
    #mayX = 10;

    constructor(direction, x, y) {   
      this.direction = direction;
      this.x = x;
      this.y = y
    }

    getPoint(){
        return [this.x, this.y]
    }

    moveF(){
        switch (this.direction) {
            case 'N', 'S':
                this.y += 1;
                break;
            case 'W', 'O':
                this.x += 1;
                break;        
            default:
                break;
        }
    }

}