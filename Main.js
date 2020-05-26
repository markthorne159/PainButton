var SnapCount = 0;

var S = document.getElementById("myAudio");

console.log("Script loaded!");

function Increment(id){
	Image = document.getElementById("Button");
	Image.src = "/static/ButtonB.png";
	setTimeout("Reset()",100);
	console.log(id);
	SnapCount = SnapCount + 1;
	console.log(SnapCount);
	Num = document.getElementById("SnapNum");
	Num.innerHTML = SnapCount;
}

function Reset(){
	Image = document.getElementById("Button");
	Image.src = "../Images/ButtonA.png";
}

function Sound(){
	S.play();
}