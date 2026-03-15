let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let historyList = document.getElementById("historyList");
let sound = document.getElementById("clickSound");

let current = "";

/* Button click */

buttons.forEach(btn => {

btn.addEventListener("click", () => {

sound.play();

let value = btn.dataset.value;

handleInput(value);

});

});


function handleInput(value){

if(value === "C")
{
current = "";
display.value = "";
}

else if(value === "DEL")
{
current = current.slice(0,-1);
display.value = current;
}

else if(value === "=")
{
calculate();
}

else
{
current += value;
display.value = current;
}

}

/* Calculation */

function calculate(){

try{

let result = Function("return " + current)();

addHistory(current + " = " + result);

display.value = result;

current = result.toString();

}

catch{

display.value = "Error";

}

}

/* History */

function addHistory(text){

let li = document.createElement("li");

li.textContent = text;

historyList.prepend(li);

}

/* Keyboard support */

document.addEventListener("keydown",(e)=>{

let key = e.key;

if("0123456789+-*/.%".includes(key))
handleInput(key);

if(key==="Enter")
handleInput("=");

if(key==="Backspace")
handleInput("DEL");

if(key==="Escape")
handleInput("C");

});
