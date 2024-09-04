var randomNumber1 = Math.floor(Math.random() * 6) + 1; // // Returns a random integer from 1 to 6:

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1 - dice6 png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player One Wins!"
    document.querySelectorAll("p")[0].innerHTML = "🏅Player 1"
}
else if (randomNumber2 > randomNumber1) 
    {
        document.querySelector("h1").innerHTML = "Player Two Wins!"
        document.querySelectorAll("p")[1].innerHTML = "🏅Player 2"
}
else {
    document.querySelector("h1").innerHTML = "😞We Have A Draw!"
}