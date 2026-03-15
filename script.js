let display = document.getElementById("display");

let buttons = document.querySelectorAll("button");

let current = "";


buttons.forEach(button => {

button.addEventListener("click", () => {

let value = button.dataset.value;

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


function calculate(){

try{

let result = Function("return " + current)();

display.value = result;

current = result.toString();

}

catch{

display.value = "Error";

}

}

document.addEventListener("keydown", (e)=>{

let key = e.key;

if("0123456789+-*/.%".includes(key))
{
handleInput(key);
}

if(key === "Enter")
{
handleInput("=");
}

if(key === "Backspace")
{
handleInput("DEL");
}

if(key === "Escape")
{
handleInput("C");
}

});
