let video;
let poseNet;
let count = 0;

/*
- J -
var enemies;
var floor;
var lowbar;
var highbar;
var player;*/

let initalXPos;
let initalYPos;
let newXPos;
let newYPos;
let first = true;

function setup(){
    frameRate(60);
    var canvas = createCanvas(1200,650);
    canvas.parent('canvasArea');
    video = createCapture(VIDEO);
    video.size(1200,650);
    //video.hide();
<<<<<<< HEAD
    poseNet = ml5.poseNet(video,"single"); // This is the posenet object
    
    player = createSprite(windowWidth/2,windowHeight-200,50,100);
=======
    poseNet = ml5.poseNet(video,'single'); // This is the posenet object
    poseNet.on('pose', gotPoses);

    /*
    -J-player = createSprite(windowWidth/2,windowHeight-150,50,50);
>>>>>>> 4bbb064e8d42cac19b40baa2f596cfaf85b02f24
    player.shapeColor = color(255);

    floors = new Group();
    enemies = new Group();
    lowbars = new Group();
    highbars = new Group();*/
}

function draw(){
<<<<<<< HEAD
    
    count++;
    image(video,0,0,1200,650);
    poseNet.on('pose', function(results){
        //console.log(results[0]);
    });
    if(count%30==0){
=======

    //count++;
    //image(video,0,0,1200,650);
    stroke(255);
    fill(255);
    line(initalXPos+200,0,initalXPos+200,650);
    line(initalXPos-200,0,initalXPos-200,650);
    ellipse(newXPos,newYPos,30);

    /*if(count%30==0){
>>>>>>> 4bbb064e8d42cac19b40baa2f596cfaf85b02f24
    	floor = newFloor();
    }
    if(player.collide(floors)){
        player.velocity.y = 0;
    }
    if(keyWentDown(' ')){
        player.velocity.y = -2;
    }
    if(keyWentUp(' ')){
    	player.velocity.y = 2;
    }

    drawSprites(); */
}

function gotPoses(poses){
    if(first){
        //console.log(poses[0]);
        initalXPos = poses[0].pose.keypoints[0].position.x;
        initalYPos = poses[0].pose.keypoints[0].position.y;
        console.log("X: "+initalXPos + "\tY: " + initalYPos);
        first = false;
    }
    else{
        newXPos = poses[0].pose.keypoints[0].position.x;
        newYPos = poses[0].pose.keypoints[0].position.y;
        if(newXPos+200 < initalXPos){
            document.getElementById("canvasArea").style.backgroundColor = "green";
        }
        else if(newXPos-200 > initalXPos){
            document.getElementById("canvasArea").style.backgroundColor = "blue";
        }
        else{
            document.getElementById("canvasArea").style.backgroundColor = "cadetblue";
        }
    }

}

<<<<<<< HEAD
//Functions to create new obstacles, enemies, and floors
=======
/*

- - - JAMES' WORK - - -
- - - commented for other work - - -
>>>>>>> 4bbb064e8d42cac19b40baa2f596cfaf85b02f24
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
*/
