const screen = document.getElementById("screen");
const ac = document.getElementById("AC");
const changeSign = document.getElementById("plus-minus");
const percent = document.getElementById("percent");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const sqr = document.getElementById("sqr");
const evalu = document.getElementById("equals");


function removeC(){
    screen.value = screen.value.slice(0, screen.value.length - 1)
}


function onAc(){
    screen.value = ''
}

function percentage(){
    screen.value = screen.value / 100
}

function showValue(e){
    screen.value += e
}

function sqRoot(){
    screen.value = Math.sqrt(screen.value).toFixed(3)
}

function giveAnswer(){
    calcu = screen.value.split(" ");
    screen.value = eval(screen.value).toFixed(3)
}