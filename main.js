nose_x=0;
nose_y=0;
difference=0;
leftwrist_x=0;
rightwrist_x=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses)
}
function draw(){
    background('#969A97');
    document.getElementById("square_side").innerHTML="width and height of the square= "+difference+"px";
    fill("#F90093");
    stroke("#F90093");
    square(nose_x,nose_y,difference);
    
}
function modelLoaded(){
    console.log("posenet loaded");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    leftwrist_x=results[0].pose.leftWrist.x;
    rightwrist_x=results[0].pose.rightWrist.x;
    difference=floor(leftwrist_x-rightwrist_x);
}
}