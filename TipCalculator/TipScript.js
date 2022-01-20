
/grabbing pieces of the HTML page to store as a later use
let directions = document.getElementById('directions');
let input = document.getElementById('input')
let button = document.getElementById('button')
let output = document.getElementById("output");

// change the text on the page for the directions. 
Directions.innerHtml = "enter the cost of the meal . /npress'calculate to get tip"

/"Write the fuction that will calculate the tip amount from the cost of the meal at 155"/
function calculate Tip ()
 {
    let cost = parseFloat(input.value);
  let percent = 15;
  let tip = cost percent/100;
  Tip = Tip.Tofixed(2);
  Let outputText = "The tip at " + percent + "S will be S " + tip;
output.innerHTML = outputText;
}
