song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("candyland.mp3");
    song2 = loadSound("heaven.mp3");
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();


}

function draw(){
    image(webcam, 0, 0, 400, 400);
}