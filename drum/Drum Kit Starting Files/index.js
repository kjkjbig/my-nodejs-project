var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var msg = document.getElementById("msg")
var txt = document.getElementById("txt")



for(let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        msg.innerHTML = i+1 + " click"
        var buttonInnerHTML = this.innerHTML
        switch(buttonInnerHTML){
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;   
            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break; 
        }
    });
}

document.getElementById("btn").addEventListener("click" , function(event){
    msg.innerHTML = txt.value;
});

for(let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("mousedown" , function(event){
    this.style.color = "white"
    });
}

for(let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("mouseup" , function(event){
    this.style.color = "#DA0463"
    });
}


document.body.addEventListener("keydown" , function(event){
    var key = event.key;
    switch(key){
        case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;   
            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break; 
        }
});