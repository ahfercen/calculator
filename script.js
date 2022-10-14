// Consistency and Math Vars
let op = null;
let firstNum = null;
let secondNum = null;
// Display Handling
let displayValue = '';
const displayBox = document.querySelector(".display");
displayBox.textContent = "";
function updateDisplay(){

}

// Number Button Handling
const numBtns = document.querySelectorAll('.numbers');
function numberPressed(e){

}
numBtns.forEach(btn => btn.addEventListener('click',numberPressed));

// Operator Button Handling
const opBtns = document.querySelectorAll('.op');
function opPressed(e){

}
opBtns.forEach(btn => btn.addEventListener('click', opPressed));

// Clear Button
const clrBtn = document.querySelector('.clr');
function clr(){
    displayValue = '';
    firstNum = null;
    secondNum = null;
    op = null;
}
clrBtn.addEventListener('click',clr);

//Equals Button
const eqBtn = document.querySelector('.eq');
function parseDisplay(){

}

