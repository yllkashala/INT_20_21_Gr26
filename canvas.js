var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


var grad = c.createLinearGradient(0,0,0,350);
grad.addColorStop(0,"#b8b7a5");
grad.addColorStop(1,"#6b705c");
c.fillStyle=grad;
c.fillRect(500,200,400,400);


console.log(canvas);

//line
c.beginPath();
c.moveTo(50,300);
c.lineTo(900,600);
c.lineTo(600,300);
c.lineTo(300,900);
c.lineTo(900,2000);
c.lineTo(2000,590);
c.lineTo(590,800);
c.lineTo(800,90);

c.strokeStyle = "#FFE8D6";
c.stroke();

//circle
for (var i = 0; i< 50;i++){
	var x = Math.random()* window.innerWidth;
	var y= Math.random() * window.innerHeight;
c.beginPath();
c.arc(x,y,100,0, Math.PI *2 , false);
c.strokeStyle = "#FFE8D6";
c.stroke();
}