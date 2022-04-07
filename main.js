//Create a reference for canvas 
var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverx=10;
rovery=10;
roverwidth=100;
roverheight=100;

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
    backgroundimagetag=new Image();
backgroundimagetag.onload=uploadBackground;
backgroundimagetag.src=background_image;
roverimagetag=new Image();
roverimagetag.onload=uploadgreencar;
roverimagetag.src=greencar_image;
}


function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(backgroundimagetag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
    ctx.drawImage(roverimagetag,roverx,rovery,roverwidth,roverheight);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
    if(rovery>0){
      rovery=rovery-10;
      uploadBackground();
      uploadgreencar();
    }
}
function down(){
    if(rovery<500){
      rovery=rovery+10;
      uploadBackground();
      uploadgreencar();
    }
}
function right(){
    if(roverx<700){
      roverx=roverx+10;
      uploadBackground();
      uploadgreencar();
    }
}
function left(){
    if(roverx>0){
      roverx=roverx-10;
      uploadBackground();
      uploadgreencar();
    }
}
