/*
Raymond Koerner - 7th period programming class -
    On my honor I have not given or received any unauthorized help.
*/

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

const ball = {
  x: 100,
  y:100,
  xSpeed: -2,
  ySpeed: 3,
  draw(){
    circle(this.x, this.y, 4);
  },
  move(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  },
  checkCollision(){
    if(this.x<0 || this.x>400){
      this.xSpeed = -this.xSpeed;
    }
    if(this.y<0 || this.y>400){
      this.ySpeed = -this.ySpeed;
    }
  },
  setDirection(direction){
    if(direction === 'up'){
      this.ySpeed = -3;
    } else if (direction === 'down'){
      this.ySpeed = +3;
    } else if (direction === 'left'){
      this.xSpeed = -3;
    } else if (direction === 'right'){
      this.xSpeed = +3;
    } else if (direction === 'stop'){
      this.xSpeed = 0;
      this.ySpeed = 0;
    }
  }
}

function circle(x,y,radius){
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI*2);
  ctx.stroke();
  ctx.fillStyle = 'red';
  ctx.fill();
}

setInterval(function() {
  ctx.clearRect(0,0,400,400);
  ball.draw();
  ball.move();
  ball.checkCollision();
  ctx.lineWidth = 4;
  ctx.strokeRect(0,0,400,400);
})

const keyActions = {
  Space: "stop",
  ArrowLeft: "left",
  ArrowUp: "up",
  ArrowRight: "right",
  ArrowDown: "down"
};




$('body').keydown(function(event){
  let direction = keyActions[event.code];
  ball.setDirection(direction);
  console.log(keyActions[event.code]);
});
