
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


function drawScore(value) {
  scoreDisplay.text(value);
}

function circle(x,y,radius){
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI*2);
  ctx.stroke();
  ctx.fill();
}

function drawBorder() {
  ctx.fillStyle = "gray";
  ctx.fillRect(0,0,width,blockSize);
  ctx.fillRect(width,0,blocksize,height);
  ctx.fillRect(0,height,width,blocksize);
  ctx.fillRect(0,0,blocksize,height);
};

let Block = function(col,row){
  this.col = col;
  this.row = row;
};



Block.prototype.drawSquare = function(color){
  let x = this.col * blockSize;
  let y = this.row * blockSize;
  ctx.fillStyle = color;
  ctx.fillRect(x,y,blockSize,blockSize);
};

Block.prototype.drawCircle = function(color) {
  let centerX = this.col * blockSize + blockSize/2;
  let centerY = this.row * blockSize + blockSize/2;
  ctx.fillStyle = color;
  circle(centerX, centerY, blockSize/2);
}

let appleBlock = new Block(10,10);
appleBlock.drawCircle('red');
let snakeBlock = new Block(20,20);
snakeBlock.drawSquare('blue');
