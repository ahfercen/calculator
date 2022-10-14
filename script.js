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
    updateDisplay();
}
numBtns.forEach(btn => btn.addEventListener('click',numberPressed));

// Operator Button Handling

const opBtns = document.querySelectorAll('.op');
console.log(opBtns);