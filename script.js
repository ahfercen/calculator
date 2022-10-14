// Display Handling
let displayValue = '';
const displayBox = document.querySelector(".display");
displayBox.textContent = "";
function updateDisplay(){
    displayBox.textContent = displayValue;
}

// Number Button Handling
const btns = document.querySelectorAll('.numbers');
function numberPressed(e){
    displayValue += e.target.dataset.key;
    updateDisplay();
}
btns.forEach(btn => btn.addEventListener('click',numberPressed));
