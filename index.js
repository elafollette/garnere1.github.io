function openTab(event, name) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for(i = 0; i < tabcontent.length; i++){
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks")
	for(i = 0; i < tablinks.length; i++){
		tablinks[i].className = tablinks[i].className.replace("active","");
	}
	document.getElementById(name).style.display = "block";
	event.currentTarget.className += "active";
}

function checkKey(e) {
	if(e.keyCode == 119) {
		jump();
	}
	if(e.keyCode == 120) {
		block.style.animation = "block 1s infinite linear";
		x= 0;
	}
}


//REFERENCE: https://github.com/Beat0154/easiest-game-ever/blob/master/index.html

var character = document.getElementById("character");
var block = document.getElementById("block");
block.style.animation = "none";
var counter = 0;
var x = 1;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        x = 1;
        counter = 0;
    }else{
    	if(x != 1) {
    		counter++;
        	document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    	} 
    }
}, 10);
