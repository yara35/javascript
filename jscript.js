class Engine{
    static #count = 0;
    constructor(source){
        if(new.target.name == Engine){
            throw new Error("Engine is an abstract class and cannot be instantiated")
        }
        this.source = source;
        Engine.#count++;
    }
    
}


class Car extends Engine{
    constructor(top, left, source){
        super(source);
        this.top = top;
        this.left = left;

        this.car = document.getElementById("car");

        this.space = 5;
    };
    set Top (value){
        this.top = value;
        this.car.style.top = `${this.top}px`
    };
    set Left(value){
        this.left = value;
        this.car.style.left = `${this.left}px`
    };
    moveLeft(){
        if(this.left > 0){
            this.Left -= this.space;
            this.left = this.left;
        }
    };
    moveRight(){
        let roadwidth = document.getElementById("road").clientWidth;
        let carwidth = this.car.clientWidth;
        if(this.left + carwidth < roadwidth ){
            this.left += this.space;
            this.left = this.left;
        }
    };
    ChangeStyle(styleobj){
        Object.assign(this.car.style, styleobj)
    };
    moveCar(direction){
        if (this.intervalId) clearInterval(this.intervalId);

        this.intervalId = setInterval(() => {
          if (direction === "left") {
            if (this.left <= 0) {
              clearInterval(this.intervalId);
            } else {
              this.moveLeft();
            }
          } else if (direction === "right") {
            const roadWidth = document.getElementById("road").clientWidth;
            const carWidth = this.car.clientWidth;
            if (this.left + carWidth >= roadWidth) {
              clearInterval(this.intervalId);
            } else {
              this.moveRight();
            }
          }
        }, 30);
    };
}
const car = new Car(100, 50, "images/car.jpg") 
