/*  Raymond Koerner - 7th period programming class -
    On my honor I have not given or received any unauthorized help. */
let numberPennies = 23;
/*Complete these three lines of code to grab the correct elements
from the HTML file to set up the program. */
let info = document.getElementById('info');
let feedback = document.getElementById('feedback');
let pieces = document.getElementById('pieces');

let intro = "<h3>23 Pennies</h3>";
intro += "Take turns removing 1, 2, or 3 pennies. ";
intro += "Whoever takes the last penny loses. "
info.innerHTML = intro;

displayPennies();

/*updates the pieces div in the HTML to display the proper number of 'pennies' */
function displayPennies() {
     pieces.innerHTML = "";
     for (let i = 0; i < numberPennies; i++){
       let penny = document.createElement('penny');
       penny.classList.add('penny');
       pieces.appendChild(penny);
     }
}

/*This is the players turn, each button in the HTML will call this function when clicked on
by the player, sending the corresponding number of pennies selected to the function and updating
the game. */
function take(num) {
    if(num <= numberPennies){
       numberPennies = numberPennies - num;
       displayPennies();
       if(numberPennies == 0){
         feedback.innerHTML = "You took the last penny." + "<br />" + "You lost :( ";
         return;
       }

       feedback.innerHTML = "You took " + num + " pennies. ";
       setTimeout(() => {computerTurn();}, 1500); //last line of the function
    } else{
          feedback.innerHTML = "You need to choose a lesser number of pennies."
          return;
    }
}

/*This is the computer's turn, it should have the computer select a number of pennies, check to see
if it lost, and update the game.*/
function computerTurn(){
     let computerPennies = Math.floor(Math.random()*3 + 1);
     //Don't let the computer lose when it doesn't have to lose:
     if(computerPennies == numberPennies && numberPennies > 1){
       computerTurn();
     }

     if(computerPennies <= numberPennies){
        numberPennies = numberPennies - computerPennies;
        feedback.innerHTML = "The computer took " + computerPennies + " pennies. "
            + "<br />" + "There are " + numberPennies + " left.";
        if(numberPennies == 0){
          feedback.innerHTML = "The computer took the last penny. It lost.";
        }
        displayPennies();
     } else {
       computerTurn();
     }
}

/*This function will reset the game board and the game will start fresh*/
function reset() {
    numberPennies = 23;
    displayPennies();
}
