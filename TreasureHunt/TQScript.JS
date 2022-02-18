
/*
Raymond Koerner - 7th period programming class -
    On my honor I have not given or received any unauthorized help.
*/
$('#map').click(play);
let clicks = $('#clicks');
let message = $('#message');

let width = 1000;
let height = 500;
let clickCounter = 30;

let won = false;

function getRandomNumber(value) {
   return Math.floor(Math.random()*value);
}

let treasure = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

function play(event) {
      clickCounter--;
      clicks.text(clickCounter);
      let d = getDistance(event,treasure);
      let lose = checkForLoss();
      if(!lose){
        let m = getMessage(d);
        message.text(m);
      } else {
        message.text("You lost!");
      }
}

function getDistance(event, target) {
    let diffX = Math.abs(event.offsetX - target.x);
    let diffY = Math.abs(event.offsetY - target.y);
    let distanceToTreasure = Math.sqrt(diffX**2 + diffY**2);
    return distanceToTreasure;
}

function getMessage(distance) {
    let mess = " ";
    if(distance < height/50){
      mess = "You have found the treasure!";
      won = true;
    } else if (distance < height/20){
      mess = "You are extremely close. Distance: " + distance;
    } else if ( distance < height/10 ){
      mess = "You are really close. Distance: " + distance;
    } else if (distance < height/5  ){
      mess = "You are pretty close. Distance: " + distance;
    } else if (distance < height/2  ){
      mess = "You are sort of close. Distance: " + distance;
    } else {
      mess = "Your are very far away. Distance: " + distance;
    }
    return mess;
}

function checkForLoss() {
    let lost = false;
    if (clickCounter <= 0){
      lost = true;
    }
    return lost;
}

function replay() {
  treasure = {
      x: getRandomNumber(width),
      y: getRandomNumber(height)
  }
  clickCounter = 30;
  clicks.text(clickCounter);
  message.text("Starting a new game");
}
