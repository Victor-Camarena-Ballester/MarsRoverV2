class Position {
    #directions = ['N','W','S','O'];
    #maxY = 10;
    #mayX = 10;
    #actualIndexDirection=0;

    constructor(direction, x, y) {   
      this.direction = direction;
      this.x = x;
      this.y = y
    }

    getPoint(){
        return [this.x, this.y]
    }

    getDirectionCoordinate(){
        return this.#directions[this.#actualIndexDirection]
    }
    ahead(){        
        switch (getDirectionCoordinate()) {
            case 'N' :
                this.y += 1;                            
                break;
            case 'S':
                this.y -= 1;                            
                break;
            case 'W' :
                this.x += 1;
                break;
            case 'O':
                this.x -= 1;
                break;
            default:
                break;
        }
    }
    behind(){        
        switch (getDirectionCoordinate()) {
            case 'N' :
                this.y -= 1;                            
                break;
            case 'S':
                this.y += 1;                            
                break;
            case 'W' :
                this.x -= 1;
                break;
            case 'O':
                this.x += 1;
                break;
            default:
                break;
        }
    }
    left(){
        this.#actualIndexDirection -= 1;
        if (this.#actualIndexDirection<0) {
            this.#actualIndexDirection = 3
        }
    }
    rigth(){
        this.#actualIndexDirection += 1;
        if (this.#actualIndexDirection>3) {
            this.#actualIndexDirection = 0
        }
    }
}