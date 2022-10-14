// Math Vars
let op = null;
let firstNum = null;
let secondNum = null;
// Display Handling
let displayValue = '';
const currentBox = document.querySelector(".current");
const historyBox = document.querySelector(".history");
currentBox.textContent = "";
historyBox.textContent = "";

// Number Button Handling
const numBtns = document.querySelectorAll('.numbers');
function numberPressed(e){ 
    displayValue += e.target.dataset.key;
    currentBox.textContent = displayValue;
}
numBtns.forEach(btn => btn.addEventListener('click',numberPressed));

// Operator Button Handling
const opBtns = document.querySelectorAll('.op');
function opPressed(e){    
    if(op == null){
        op = e.target.dataset.key;
        firstNum = Number(displayValue);
        historyBox.textContent = displayValue + " " + op;
        displayValue = '';
        currentBox.textContent = '';
    }else{

    }
    
}
opBtns.forEach(btn => btn.addEventListener('click', opPressed));

// Clear Button
const clrBtn = document.querySelector('.clr');
function clr(){
    displayValue = '';
    firstNum = null;
    secondNum = null;
    op = null;
    currentBox.textContent = '';
    historyBox.textContent = '';
}
clrBtn.addEventListener('click',clr);

//Equals Button
const eqBtn = document.querySelector('.eq');
function parseDisplay(){

}

