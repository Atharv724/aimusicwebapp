song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload(){
    song1 = loadSound("candyland.mp3");
    song2 = loadSound("heaven.mp3");
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
    posenet = ml5.poseNet(webcam, ModelLoaded);
    posenet.on('pose', gotPoses)


}

function draw(){
    image(webcam, 0, 0, 400, 400);

}

function ModelLoaded(){
    console.log("model has been loaded");
    
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        leftWristX = result[0].pose.leftWrist.x;
        leftWristY = result[0].pose.leftWrist.y;
        rightWristX = result[0].pose.rightWrist.x;
        rightWristY = result[0].pose.rightWrist.y;
    }
}
