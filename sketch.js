let video;
let poseNet;
let count = 0;

var enemies;
var floor;
var lowbar;
var highbar;
var player;

function setup(){
    frameRate(60);
    var canvas = createCanvas(1200,650);
    canvas.parent('canvasArea');
    video = createCapture(VIDEO);
    video.size(1200,650);
    //video.hide();
    poseNet = ml5.poseNet(video,"single"); // This is the posenet object
    
    player = createSprite(windowWidth/2,windowHeight-150,50,50);
    player.shapeColor = color(255);

    floors = new Group();
    enemies = new Group();
    lowbars = new Group();
    highbars = new Group();
}

function draw(){
    
    count++;
    image(video,0,0,1200,650);
    poseNet.on('pose', function(results){
        //console.log(results[0]);
    });
    
    if(count%30==0){
    	floor = newFloor();
    }

    drawSprites();
}

function newFloor(){
    var floor = createSprite(windowWidth*2,windowHeight-100,windowWidth,100);
    floor.shapeColor = color("green");
    floor.velocity.x = -10;
    floors.add(floor);
}
function newLowbar(){
    var lowbar = createSprite(windowWidth*2,windowHeight,50,200);
    lowbar.shapeColor = color("red");
    lowbar.velocity.x = -10;
    lowbars.add(lowbar);
}
function newHighbar(){
    var highbar = createSprite(windowWidth*2,0,50,windowHeight-150);
    highbar.shapeColor = color("red");
    highbar.velocity.x = -10;
    highbars.add(highbar);    
}
function newEnemy(){
    var enemy = createSprite(windowWidth*2,windowHeight-150,50,50);
    enemy.shapeColor = color(0);
    enemy.velocity.x = -10;
    enemies.add(enemy);
}
