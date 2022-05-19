
for( var i = 0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//event can be any name. It is the event from eventlistener. function is a callback with 
// condition of "keypress".
document.addEventListener("keypress", function(event){
    console.log(event);
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
   
    switch(key){
        case "w":
            var sound = "crash";
            break;
        case "a":
            var sound = "kick-bass";
            break;
        case "s":
            var sound = "snare";
            break;
        case "d":
            var sound = "tom-1";
            break;
        case "j":
            var sound = "tom-2";
            break;
        case "k":
            var sound = "tom-3";
            break;
        case "l":
            var sound = "tom-4";
            break;

        default: console.log(key);
    }
    var audio = new Audio('sounds/'+sound+'.mp3');
    audio.play();
}

function buttonAnimation(key){
    var buttionChange=document.querySelector("."+key);
    buttionChange.classList.add("pressed");
    setTimeout(function(){
        buttionChange.classList.remove("pressed");
    }, 100);
}



// interface in js
function add(numa, numb){
    return numa+numb;
}

function multiply(numa, numb){
    return numa*numb;
}

function calculator(numa, numb, operator){
    return operator(numa, numb);
}

//