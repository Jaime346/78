var cohete,coheteimg;
var rocas,rocasimg,rocasGroup;
var alien,alienimg,alienGroup;
var espacio,espacioimg;
var gameState = "play"
var gameState = "end"


function preload(){
coheteimg=loadImage("nave.png")
espacioimg=loadImage("2473838.jpg")
alienimg=loadImage("oozr_fe7r_210520.jpg")
rocas=loadImage("pngwing.com.png")
}

function setup() {
 createCanvas(600,600)
 espacio=createSprite(600,600)
 espacio.addImage("espacio",espacioimg)
 espacio.scale=0.6
 espacio.velocityY = 1;

 alienGroup = new Group()
 rocas = new Group()
 
 cohete=createSprite(301,545,50,50)
 cohete.addImage("cohete",coheteimg)
 cohete.scale=0.2

 alien.addImage("alien",alienimg)
 rocas.addImage("rocas",rocasimg)
}


function draw() {
background(255);
if(espacio.y>400){
    espacio.y=300
}
if (gameState === "play"){
if(keyDown("right")){
    cohete.x = cohete.x +7
}
if(keyDown("left")){
    cohete.x = cohete.x -7
}
if(keyDown("up")){
    cohete.y = cohete.y -7
}
if(keyDown("down")){
    cohete.y = cohete.y +7
}

spawnObstacles();

 drawSprites();
}
}
function spawnObstacles()
{
if (frameCount % 240 === 0){
var rocas = createSprite(200,200);
var alien = createSprite(200,10);

rocas.x=Math.round (random(400,300 ));
alien.x=rocas.x;

rocas.addImage(rocasimg);
alien.addImage(alienimg);

rocas.velocityY=1;
alien.velocityY=1;

cohete.depth = alien.depth
cohete.depth = cohete.depth+1
}






}