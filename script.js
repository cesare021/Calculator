//Program Kalkulator

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    // try{
    //     //mengganti simbol persen
    //     display.value = display.value.replace(/%/g, '*0.01');
    //     //evaluasi ekspresi math
    //     display.value = eval(display.value);
    // }
    // catch(error){
    //     display.value = "Error";
    // }
    display.value = 'Selamat Sidang Azhar';
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