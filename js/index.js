function openTab(event, name) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for(i = 0; i < tabcontent.length; i++){
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks")
	for(i = 0; i < tablinks.length; i++){
		tablinks[i].className = tablinks[i].className.replace(" active","");
	}
	document.getElementById(name).style.display = "block";
	event.currentTarget.className += " active";
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
