let positionLeft = 350;
let character = document.getElementById("character");

function moveLeft(){
    if(positionLeft>0){
        positionLeft = positionLeft-5;
        character.style.left=positionLeft + "px";
        console.log(positionLeft);
    }
    console.log()
}