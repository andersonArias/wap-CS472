const module = (function(){
    let speed = 0;
    let direction = 0;
    const gassPaddle = function(){
        if (speed < 120){
            speed += 5;
        }
    };

    const breakCar = function(){
        if (speed > 0){
            speed -= 10;
        }
    }

    const turnLeft = function(degrees){
        direction -= degrees;
    }

    const turnRight = function(degrees){
        direction += degrees;
    }
    
    const status = function(){
        console.log("The car is driving direction " + direction + " at " + speed + "mph");
    }
    return{
        gassPaddle: gassPaddle,
        breakCar: breakCar,
        turnLeft: turnLeft,
        turnRight: turnRight,
        status: status
    }
})();