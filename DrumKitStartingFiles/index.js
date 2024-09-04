var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var i = 0;

while (i < numberOfDrumButtons) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    

       this.style.color = 'orange'
  });
  i++;
}


// var audio = new Audio('./sounds/tom-1.mp3');
// audio.play();
