
//Raymond Koerner
//On my honor as a student, I have neither given nor received any unauthorized aid on this assignment.

let puzzle = document.getElementById("puzzle");
let letters = document.getElementById('letters');
let totalPts = document.getElementById('totalPts');
let spinPts = document.getElementById('spinPts') ;

const wordbank = ["chocolate", "vanilla", "strawberry", "caramel", "cinnamon",
            "hazelnut", "mocha"];
let emptyPiece = "<div class='piece'></div>";
let usedLetters = [];
let word = getPuzzle();
let shownWord = [];
let shownWordString = " ";

let displayWord = getArray(word);
let userInput = document.getElementById('userInput');
let choice = " ";
let pts = 0;
let score = 0;


function play(){

    usedLetters = [];
    letters.innerHTML = " ";

    word = getPuzzle();

    shownWord = [];
    shownWordString = " ";

    displayWord = getArray(word);
    pts = 0;
    score = 0;
    updateBoard();
    spinPts.innerHTML = pts;

    //displayArray();
    console.log(word);

}
function getPuzzle(){
  let index = Math.floor(Math.random()*wordbank.length);
  return wordbank[index];
}

function getArray(puzzleWord){
  shownWord = [];
  for(let i=0; i<word.length; i++){
    shownWord.push("_");
  }
  return puzzleWord.split("");
}

function displayArray() {
  puzzle.innerHTML = "";
  for (let i = 0; i < displayWord.length; i++){
    if(shownWord[i] === "_"){
       puzzle.innerHTML += emptyPiece;
    } else {
       let filledPiece = "<div class='piece'>" + shownWord[i] + "</div>";
       puzzle.innerHTML += filledPiece;
    }
  }
}

function updateBoard() {
      totalPts.innerHTML = score;
      displayArray();
}

function getInput() {
   choice = userInput.value;
   usedLetters.push(choice);
   letters.innerHTML = usedLetters;
   choice = choice.toLowerCase();
   for(let j=0; j<word.length; j++){
     if(displayWord[j] === choice){
       shownWord[j] = choice;
       score = score + pts;
     }
   }
   updateBoard();
}

function spin() {
   pts = Math.floor(Math.random()*10)*10 + 10;
   spinPts.innerHTML = pts;
}
