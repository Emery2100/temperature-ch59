for(let i=0; i<4; i++){

    document.writeln("My for is working, value="+i);
}

for(let i=1; i<=10; i++){
    document.write (`<p>${i}<p>`);
}

function multiTable(){
    const num = 2;
    for (let i=1; i<=10; i++){
    console.log(`${num} x ${i} = ${num*i}`);
  }
}

multiTable()

//WHILE LOOP
//start, stop, increment
console.log("--- WHILE ---")
let i=0; //start point
while(i<=10){ //stop condition
    console.log(i);
    i++; //increment/interval
}

//DO-WHILE
//start,stop,increment
console.log("--- DO_WHILE---")
let j=0; //start point

do{
    console.log(j);
    j++; //increment
}while(j<=10); //stop condition

// while function
function startCountDown(){
    let seconds = 10;
    let result="";

    while(seconds>0){
        result += `<p> Launching in .... ${seconds} </p>`;
        console.log(result);
        seconds--;
    }

    document.getElementById("results").innerHTML=result;
}

//do-while function
function passPrompt(){
    let correctPass = "1234";
    let userInput;
    let result="Simulation password input";

    do{
        userInput = prompt("Enter the password: ");
        result += "<p> User input was: " + userInput + "</p>";
    }while(userInput !== correctPass);

    result += "<p> Welcome to the system </p>";
    document.getElementById("results").innerHTML=result;
}

//loop function
function showProducts(){
    let products = ["laptop","display","camera","speaker"];// array
    let result ="";

    for(let i=0;i<products.length;i++){
        result += `<li> ${products[i]} </li>`; 
    }
    document.getElementById("results").innerHTML=result; 
}