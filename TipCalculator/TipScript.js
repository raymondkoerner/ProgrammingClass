
//grabbing pieces of the HTML page to store as a later use
let directions = document.getElementById('directions');
let input = document.getElementById('input');
let button = document.getElementById('button');
let output = document.getElementById("output");

// change the text on the page for the directions.
directions.innerHTML = "Enter the cost of the meal. \nPress 'calculate' to get tip.";


/*Write the fuction that will calculate the tip amount from the
  cost of the meal at 155*/
function calculateTip ()
 {
    let cost = parseFloat(input.value);
    let percent = 15;
    let tip = cost * percent/100;
    tip = tip.toFixed(2);
    let outputText = "The tip at " + percent + "% will be $" + tip;
    output.innerHTML = outputText;
}

button.onclick = calculateTip;
