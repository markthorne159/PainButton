var SnapCount = 0;

function Increment(id){
	Image = document.getElementById("Button");
	Image.src = "../Images/ButtonB.png";
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
