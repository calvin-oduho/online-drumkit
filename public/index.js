
var button = document.querySelectorAll(".drum");
var numOfDrumButtons = button.length;

//Listens to button events
for( var i = 0; i < numOfDrumButtons; i++ ) {
    button[i].addEventListener("click", function () {
        makeSoundBasedOnThisKey(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

//Listens to keyboard events
document.addEventListener("keydown", function(evt) {
    makeSoundBasedOnThisKey(evt.key);
    buttonAnimation(evt.key);
});

//This functions makes a sound based on the key passed in as an argument.
function makeSoundBasedOnThisKey(key) {
    switch (key) {
        case "l":
            var crash = new Audio("../assets/sounds/kick-bass.mp3");
            crash.play();         
            break;
        case "k":
            var kickbass = new Audio("../assets/sounds/crash.mp3");
            kickbass.play(); 
            break;
        case "j":
            var snare = new Audio("../assets/sounds/snare.mp3");
            snare.play(); 
            break;
        case "w":
            var tom1 = new Audio("../assets/sounds/tom-1.mp3");
            tom1.play(); 
            break;
        case "a":
            var tom2 = new Audio("../assets/sounds/tom-2.mp3");
            tom2.play(); 
            break;
        case "s":
            var tom3 = new Audio("../assets/sounds/tom-3.mp3");
            tom3.play(); 
            break;
        case "d":
            var tom4 = new Audio("../assets/sounds/tom-4.mp3");
            tom4.play(); 
            break;
        default:
            console.log(this.innerHTML);
            break;
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 200);
}
