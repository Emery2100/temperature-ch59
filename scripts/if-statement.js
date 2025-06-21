console.log("Conditionals");

//if-statement (condition = y/n?)
//if(condition){
// code to be executed if the condition is true
//}

if(3<5){
    console.log("This is true");
}

let student1 = 45;
let student2 = 45;

if(student1==student2){
    console.log("The values are the same");
}

// if-else statement
//if(condition){
// code to be executed if the condition is true
//}else{
// code to run if the condition is false
//}

let isTrue = false;

if(isTrue == true){
    console.log("Yes");
}else{
    console.log("No");
}

let waterTemp = 102;

if(waterTemp >= 100){
    console.log("The water is boiling");
}else{
    console.log("The water is NOT boiling");
}

let age = 30;

if(age>21){
    console.log("you are an adult");
}else{
    console.log("over age");
}

// esle-if statement
//if(condition1){
// code to be executed if the condition is true
//}else if(condition2){
// code to run if the condition2 is true
//}else{
//code to run if condition were false
//}

age = prompt("Enter your age:");

if(age<13){
    console.log("You are a child");
}else if(age<21){
    console.log("You are a teenager");
}else if(age<64){
    console.log("You are an adult");
}else{
    console.log("You are a senior");
}

let light = prompt("Enter color");


if(light=="green"){
    console.log("Go!");
}else if(light=="yellow"){
    console.log("Slow!");
}else if(light=="red"){2
    console.log("Stop!");
}else{
    console.log("Invalid color!");
}

function ticketCalculator(){
    // the code of your conditions should be here
    let age = prompt("Enter your age");
    let price =0;
    if(age<12){
        price=5;
    }else if(age<18){12
        price=8;
    }else{
        price=10;
    }
        
    return "Your ticket price is " + price;
}

document.write(ticketCalculator());


function weatherOutfit(){
    let tmp = prompt("Enter the temperature");
    let outfit="";
    let p = document.getElementById("outfit");

    if(tmp<15){
        outfit="Jacket";
    }else if(tmp<25){
        outfit="Sweater";
    }else{
        outfit="T-shirt";
    }

    p.innerHTML="You should wear: " + outfit;
}

//Swith-case
// use it for checking one single variable or expression

let action = prompt("Choose an action: jump, run, attack, defense, roll, or hide");

switch(action){
    case "jump":
    console.log("you jumped over and obstacle");
    break;
    case "run":
    console.log("You are running really fast");
    break;
    case "attack":
    console.log("You are attacking the enemy");
    break;
    case "defend":
    console.log("You block the attack");
    break;
    case "roll":
    console.log("You roll away from the enemy");
    break;
    case "hide":
    console.log("You hide from the enemy");
    break;
    default:
    console.log("Unkown action. Try again");

}