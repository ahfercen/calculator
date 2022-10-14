// Consistency Vars
let opLastPressed = false;
// Display Handling
let displayValue = '';
const displayBox = document.querySelector(".display");
displayBox.textContent = "";
function updateDisplay(){
    displayBox.textContent = displayValue;
}

// Number Button Handling
const numBtns = document.querySelectorAll('.numbers');
function numberPressed(e){
    displayValue += e.target.dataset.key;
    opLastPressed = false;
    updateDisplay();
}
numBtns.forEach(btn => btn.addEventListener('click',numberPressed));

// Operator Button Handling
const opBtns = document.querySelectorAll('.op');
function opPressed(e){
    if(displayValue == '') return;
    if(opLastPressed) return;
    displayValue += " " + e.target.dataset.key + " ";
    opLastPressed = true;
    updateDisplay();
}
opBtns.forEach(btn => btn.addEventListener('click', opPressed));

// Clear Button
const clrBtn = document.querySelector('.clr');
function clr(){
    displayValue = '';
    updateDisplay();
}
clrBtn.addEventListener('click',clr);

//Equals Button
const eqBtn = document.querySelector('.eq');
console.log(eq);