var list = document.querySelectorAll(".drum");

for (var i = 0; i < list.length; i++)
{
    list[i].addEventListener ("click", function () {
        triggerSound(this.innerHTML);
        buttonPressed (this.innerHTML);
    });
}

document.addEventListener ("keypress", function (event){
    triggerSound(event.key);
    buttonPressed(event.key);
});

function playSound (sound) {
    var audio = new Audio("./sounds/"+sound+".mp3");
    audio.play();
}

function triggerSound (char) {

    switch(char) {
        case "w":
            playSound("crash");
            break;

        case "a":
            playSound("kick-bass");
            break;

        case "s":
            playSound("snare");
            break;

        case "d":
            playSound("tom-1");
            break;

        case "j":
            playSound("tom-2");
            break;
        
        case "k":
            playSound("tom-3");
            break;
    
        case "l":
            playSound("tom-4");
            break;

        default: console.log(object.innerHTML);
            break;
    }
}

function buttonPressed(key) {

    var button = document.querySelector("."+key);

    button.classList.add("pressed");
    button.style.color = "white";

    setTimeout(function() {
    button.style.color = "red";
    button.classList.remove("pressed");
    }, 100);
}