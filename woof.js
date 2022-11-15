Woof = function(){
    var audio = new Audio("./static/woof.wav")
    audio.loop = false;
    audio.play(); 
}

document.addEventListener("keydown", function(event){
    Woof()
})