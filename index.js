var RandomNumber1 = Math.floor(Math.random() *6)+1;
var RandomDiceImage1 = "images/dice" + RandomNumber1 +".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", RandomDiceImage1);

var RandomNumber2 = Math.floor(Math.random()*6)+1;
var RandomDiceImage2= "images/dice" + RandomNumber2 +".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",RandomDiceImage2);

if (RandomNumber1>RandomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Won!!"
}
else if (RandomNumber2>RandomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Won!!"
}
else{
    document.querySelector("h1").innerHTML="DRAW!!"
}