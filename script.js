var character = document.getElementById("character");
var block = document.getElementById("block");
var msg = document.getElementById("msg");
var bg = document.getElementById("game");
var counter = 0;
var start = true;
var t = 5;
function jump() {
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
function check(){
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    if(blockLeft>50 && blockLeft<120 && characterTop>=300){
        block.style.animation = "none";
        bg.style.animation = "none";
        msg.innerHTML = "Try again!!  your score : "+Math.floor(counter/100) +" <br> Press spacebar or tap on the screen to restart";
        clearInterval(checkDead);
        counter = 0;
        start = true;
}else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
}
function fake_jump(){
    if(start == true){
        msg.innerHTML = "Game Started..."
        bg.style.animation = " move 60s infinite linear"
        block.style.animation = "block 1s infinite linear";
        
        start = false
        check();           
    }
    else{
    // var c = Math.floor(counter/100);
    // console.log( c,t/(1*(0.1*c)) )
    // block.style.animation = "block "+(t/(1*(0.1*c)))+"s infinite linear";
     jump();
    }
}
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        if(start == true){
            msg.innerHTML = "Game Started..."
            bg.style.animation = " move 60s infinite linear"
            block.style.animation = "block 1s infinite linear";
            
            start = false
            check();           
        }
        else{
        // var c = Math.floor(counter/100);
        // console.log( c,t/(1*(0.1*c)) )
        // block.style.animation = "block "+(t/(1*(0.1*c)))+"s infinite linear";
         jump();
        }     
    }
}
