//Program Kalkulator

window.onload = function() {
    document.getElementById('display').value = "";
}

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
    document.getElementById('display').textContent = display.value;
    document.getElementById('display').scrollLeft = document.getElementById('display').scrollWidth;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        //mengganti simbol persen
        display.value = display.value.replace(/%/g, '*0.01');
        //evaluasi ekspresi math
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
calculate();

//Operasi Kurung
let isBracketOpen = true;


function toogleParenthesis() {
    const display = document.getElementById("display");
    if (isBracketOpen){
        display.value += '(';
    }
    else{
        display.value += ')';
    }
    isBracketOpen = !isBracketOpen;
}
