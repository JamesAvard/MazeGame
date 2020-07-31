
var canvas=document.querySelector('canvas');
canvas.width = 483;
canvas.height = 483;

var vertRectx=[0,0,0,0,0,80,80,160,160,240,240,320,320,320,400,400,480,480,480,480,480];
var vertRecty=[0,80,160,240,320,80,160,0,320,240,320,0,80,320,240,320,80,160,240,320,400];
var vertRectWidth=[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];
var vertRectHeight=[80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80];

var horRectx=[0,80,160,240,320,400,80,240,400,160,240,320,80,160,240,80,400,0,160,320,0,80,160,240,320,400];
var horRecty=[0,0,0,0,0,0,80,80,80,160,160,160,240,240,240,320,320,400,400,400,480,480,480,480,480,480];
var horRectWidth=[80,80,80,80,80,83,83,80,80,80,80,80,80,80,80,80,80,80,83,83,80,80,80,80,80,83];
var horRectHeight=[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];

var endRectx=[479];
var endRecty=[3];
var endRectWidth=[3];
var endRectHeight=[77];


var img= new Image();
img.src="player1.png";
var complete = new Image();
complete.src= "levelComplete.png"//(Textcraft, n.d.)
var gameOver = new Image();
gameOver.src = "gameOver.png"//(Textcraft, n.d.)

var playerX=3;
var playerY=407;
var playerWidth=54;
var playerHeight=70;
var playState=true

var c=canvas.getContext('2d');

c.fillStyle="#FFFFFF";
c.fillRect(0,0,canvas.width,canvas.height);
c.fillStyle="#000000"

for(i=0;i<vertRectx.length;i++){
	vertWalls = c.fillRect(vertRectx[i],vertRecty[i],vertRectWidth[i],vertRectHeight[i]);
}
for(i=0;i<horRectx.length;i++){
	horWalls = c.fillRect(horRectx[i],horRecty[i],horRectWidth[i],horRectHeight[i]);
}
for(i=0;i<endRectx.length;i++){
	c.fillStyle="#FFFFFF";
	end = c.fillRect(endRectx[i],endRecty[i],endRectWidth[i],endRectHeight[i]);
}
//(pimvdb, 2011)
img.onload = function(){
	c.drawImage(img,playerX,playerY,playerWidth,playerHeight);
}


function move(e){

	if(e.keyCode==39){
		if(playerX>=canvas.width-playerWidth-3){
			playerX=canvas.width-playerWidth-3;
		}
		hitwallflag=0;
		for(j=0;j<vertRectx.length;j++){
			if((playerX+playerWidth>vertRectx[j]-3 && playerX+playerWidth<vertRectx[j]+vertRectWidth[j]) && ( (playerY>vertRecty[j] && playerY<vertRecty[j]+vertRectHeight[j]) || (playerY+playerHeight>vertRecty[j] && playerY+playerHeight<vertRecty[j]+vertRectHeight[j]))){
				hitwallflag=1;
			}else{}
		}
		if (hitwallflag==0){
			playerX+=2;
		}else {
			playerX+=0;
		}
		if((playerX+playerWidth>endRectx && playerX+playerWidth<endRectx+endRectWidth) && (playerY>endRecty-3 && playerY<endRecty+endRectHeight)){
			playState=false;
		}else{}
	}

	if(e.keyCode==37){
		if(playerX<=3){
			playerX=3;
		}
		hitwallflag=0;
		for(j=0;j<vertRectx.length;j++){
			if( (playerX>vertRectx[j] && playerX<vertRectx[j]+vertRectWidth[j]+3) && ( (playerY>vertRecty[j] && playerY<vertRecty[j]+vertRectHeight[j]) || (playerY+playerHeight>vertRecty[j] && playerY+playerHeight<vertRecty[j]+vertRectHeight[j]))){
				hitwallflag=1;
			}else{}
		}
		if (hitwallflag==0){
			playerX-=2;
		}else {
			playerX+=0;
		}
	}

	if(e.keyCode==38){
		if(playerY<=3){
			playerY=3;
		}
		hitwallflag=0;
		for(j=0;j<horRecty.length;j++){
			if( (playerY>horRecty[j] && playerY<horRecty[j]+horRectHeight[j]+2) && ( (playerX>horRectx[j] && playerX<horRectx[j]+horRectWidth[j]) || (playerX+playerWidth>horRectx[j] && playerX+playerWidth<horRectx[j]+horRectWidth[j]) ) ){
				hitwallflag=1;
			}else{}
		}
		if (hitwallflag==0){
			playerY-=2;

		}else {
			playerY+=0;
		}
	}
	if(e.keyCode==40){
		if(playerY>=canvas.height-playerHeight-3){
			playerY=canvas.height-playerHeight-3;
		}
		hitwallflag=0;
		for(j=0;j<horRecty.length;j++){
			if( (playerY+playerHeight>horRecty[j]-3 && playerY+playerHeight<horRecty[j]+horRectHeight[j]) && ( (playerX>horRectx[j] && playerX<horRectx[j]+horRectWidth[j]) || (playerX+playerWidth>horRectx[j] && playerX+playerWidth<horRectx[j]+horRectWidth[j]) ) ){
				hitwallflag=1;
			}else{}
		}
		if (hitwallflag==0){
			playerY+=2;

		}else {
			playerY+=0;
		}
	}

  if(playState==false){
		canvas.width=600;
		c.fillStyle="#FFFFFF";
		c.fillRect(0,0,canvas.width,canvas.height);
		c.fillStyle="#000000"
		c.drawImage(complete,52,200,500,80);
		c.lineWidth="3";
		c.strokeStyle="black";
		c.rect(3,3,594,477);
		c.stroke();
		window.clearTimeout(timeoutID);
	}else{
		canvas.width=canvas.width;

		c.fillStyle="#FFFFFF";
		c.fillRect(0,0,canvas.width,canvas.height);
		c.fillStyle="#000000"

		for(i=0;i<vertRectx.length;i++){
			vertWalls = c.fillRect(vertRectx[i],vertRecty[i],vertRectWidth[i],vertRectHeight[i]);
		}
		for(i=0;i<horRectx.length;i++){
			horWalls = c.fillRect(horRectx[i],horRecty[i],horRectWidth[i],horRectHeight[i]);
		}
		for(i=0;i<endRectx.length;i++){
			c.fillStyle="#FFFFFF";
			end = c.fillRect(endRectx[i],endRecty[i],endRectWidth[i],endRectHeight[i]);
		}
		player = c.drawImage(img,playerX,playerY,playerWidth,playerHeight);
	}
}

//(W3schools.com, n.d.)
function reset(){
	location.reload();
}
function timeUp(){
	canvas.width=600;
	c.fillStyle="#FFFFFF";
	c.fillRect(0,0,canvas.width,canvas.height);
	c.fillStyle="#000000"
	c.drawImage(gameOver,52,200,500,80);
	c.lineWidth="3";
	c.strokeStyle="black";
	c.rect(3,3,594,477);
	c.stroke();
}


var timeoutID = window.setTimeout(timeUp,[25000]);

document.onkeydown=move;
