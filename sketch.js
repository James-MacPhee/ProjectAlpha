let video;
let poseNet;
let count = 0;

function setup(){
    var canvas = createCanvas(1200,650);
    canvas.parent('canvasArea');
    video = createCapture(VIDEO);
    video.size(1200,650);
    video.hide();
    poseNet = ml5.poseNet(video,"single"); // This is the posenet object

}

function draw(){
    image(video,0,0,1200,650);
    poseNet.on('pose', function(results){
        //console.log(results[0]);
    });
}
