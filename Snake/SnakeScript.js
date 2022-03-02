
/*
Raymond Koerner - 7th period programming class -
    On my honor I have not given or received any unauthorized help.
*/

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

let blockSize = 10;
let widthInBlocks = width/blockSize;
let heightInBlocks = height/blockSize;

let score = 0;
let scoreDisplay = $('#score');

let directions = {
  ArrowLeft: "left",
  ArrowUp: "up",
  ArrowRight: "right",
  ArrowDown: "down"
}

$("body").keydown(function(event){
  let newDirection = directions[event.code];
  if(newDirection !== undefined) {
    snake.setDirection(newDirection);
  }
});


function drawScore(value) {
  scoreDisplay.text(value);
}

function circle(x,y,radius){
  console.log("circle");

  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI*2);
  ctx.stroke();
  ctx.fill();
}

function drawBorder() {
  console.log("width: " + width + "  height: " + height);
  ctx.fillStyle = "gray";
  ctx.fillRect(0,0,width,blockSize);
  ctx.fillStyle = "yellow";
  ctx.fillRect(width-blockSize,0,blockSize,height);
  ctx.fillStyle = "red";
  ctx.fillRect(0,width-blockSize,width,blockSize);
  ctx.fillStyle = "purple";
  ctx.fillRect(0,0,blockSize,height);
};

function gameOver(){
  clearInterval(intervalId);
  scoreDisplay.text("Game Over");
}

let Block = function(col,row){
  this.col = col;
  this.row = row;
};

Block.prototype.drawSquare = function(color){
  console.log("draw square" + "  " + color);
  let x = this.col * blockSize;
  let y = this.row * blockSize;
  ctx.fillStyle = color;
  ctx.fillRect(x,y,blockSize,blockSize);
};

Block.prototype.drawCircle = function(color) {
  console.log("draw circle");

  let centerX = this.col * blockSize + blockSize/2;
  let centerY = this.row * blockSize + blockSize/2;
  ctx.fillStyle = color;
  circle(centerX, centerY, blockSize/2);
}

Block.prototype.equal = function(otherBlock){
  return (this.col == otherBlock.col) && (this.row == otherBlock.row);
}

let Snake = function(){
  this.segments = [
    new Block(7,5),
    new Block(6,5),
    new Block(5,5)
  ];
  this.direction = 'right';
  this.nextDirection = 'right';
};

Snake.prototype.setDirection = function(newDirection) {
  if(this.direction === 'up' && newDirection === 'down'){
    return;
  } else if (this.direction === 'down' && newDirection === 'up') {
    return;
  } else if (this.direction === 'left' && newDirection === 'right') {
    return;
  } else if(this.direction === 'right' && newDirection === 'left') {
    return;
  }
  this.nextDirection = newDirection;
};

Snake.prototype.draw = function(){
  for(let i=0; i< this.segments.length; i++){
    this.segments[i].drawSquare('blue');
  }
};

Snake.prototype.move = function(){
  let head = this.segments[0];
  let newHead;
  this.direction = this.nextDirection;
  if(this.direction === 'right'){
    newHead = new Block(head.col + 1, head.row);
  } else if (this.direction === 'down'){
    newHead = new Block(head.col, head.row + 1);
  } else if (this.direction === 'left'){
    newHead = new Block(head.col - 1, head.row);
  } else {
    newHead = new Block(head.col, head.row -1);
  }
  if(this.checkCollision(newHead)){
    gameOver();
    return;
  }
  this.segments.unshift(newHead);
  if(newHead.equal(apple.position)) {
    score++;
    apple.move();
  } else {
  this.segments.pop();
  }
};

let intervalId = setInterval(function() {
  ctx.clearRect(0,0,width,height);
  drawScore();
  snake.move();
  snake.draw();
  apple.draw();
  apple.move();
  drawBorder();
},200);

Snake.prototype.checkCollision = function(head){
  let leftCollision = (head.col <= 0);
  let topCollision = (head.row <= 0);
  let rightCollision = (head.col >= width/blockSize);
  let bottomCollision = (head.row >= height/blockSize)
  let wallCollision = (leftCollision || topCollision || rightCollision || bottomCollision);

  let selfCollision = false;
  for(let i=0; i<this.segments.length; i++){
    if (head.equal(this.segments[i])){
      selfCollision = true;
    }
  }
  return wallCollision || selfCollision;
};

let Apple = function(){
  this.position = new Block(10,10);
};

Apple.prototype.draw = function() {
  this.position.drawCircle("red");
};

Apple.prototype.move = function(){
  let randomCol = Math.floor(Math.random()*(width/blockSize));
  let randomRow = Math.floor(Math.random()*(height/blockSize));
  this.position = new Block(randomCol,randomRow);
}


let snake = new Snake();
let apple = new Apple();
