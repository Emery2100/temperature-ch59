console.log("Functions");

let firstName = "David";
let lastName = "Emery";

//concatenation
console.log("Hello " + firstName + " " + lastName + ", welcome");
console.log(`Hello ${firstName} ${lastName} ${1+1}, welcome`);

// 1. function declaration (creating a function)
function sayHello(){
    //body of the function
    console.log("Hello Cohort 59");
}

//2. call the function (code, colsole, from the user)
sayHello();
sayHello();

//Example 2 with 1 parameter (inputs)

function greet(name){
    console.log(`Hello ${name}, welcome!`);
}

greet("Tim");
greet("Alex");

//Example 3 with 2 parameter (inputs)
function greet2(name1="someone",name2){
    console.log(`Hello ${name1} and ${name2}, welcome`);

}
greet2("John","Smith");


// Challenge 1: Double the Number
function doubleNumber(num1){
    let total = num1*2;
    console.log(total);
}
doubleNumber(14);



//Example 4, with prompt
    let name2 = prompt("Enter your name");
    let age = prompt("Enter your age:");

    console.log(`Welcome ${name2} - ${age}`);

    //Example 5 default parameters

    function add(num1=0,num2=0){
        console.log(`The total is ${num1 + num2}`);
    }

    add(3,5);
    add();
    add(4);

    function combineNames(firstName="unknown",lastName="unknown"){
    console.log(`${firstName} ${lastName}`);
    }

    combineNames("david","Emery");
    combineNames("david");

    function convertToSeconds(){
        let min=prompt("Enter minutes: ");
        document.getElementById("results").innerHTML += `<p> The conversion is: ${min *60} </p>`;                

    }

    convertToSeconds(6);
    


    //** create a button on the HTML