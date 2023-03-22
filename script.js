//Update Loop
import Ball from "./Ball.js"
import Paddle from "./Paddle.js"


const ball = new Ball(document.getElementById("ball")); //selecting ball html element and making a new class for the ball
const playerPaddle = new Paddle(document.getElementById("player-paddle"));
const computerPaddle = new Paddle(document.getElementById("computer-paddle"));

let lastTime;
function update(time){
    if(lastTime != null){
        const delta = time - lastTime;
        //ball.update(delta);
    }
    lastTime = time;
    window.requestAnimationFrame(update);
}

document.addEventListener("mousemove", e =>{
    playerPaddle = (e.y / window.innerHeight) * 100;
});

window.requestAnimationFrame(update);
