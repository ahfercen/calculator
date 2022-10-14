
let displayValue = '';
 
const displayBox = document.querySelector(".display");
displayBox.textContent = "";



const btns = document.querySelectorAll('.numbers');
function numberPressed(e){
    displayValue += e.target.dataset.key;
}
btns.forEach(btn => btn.addEventListener('click',numberPressed));