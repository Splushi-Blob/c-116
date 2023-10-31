noseX=0
noseY=0
function preload(){

}

function setup(){
    canvas = createCanvas(500, 500)
    canvas.center()
    video = createCapture(VIDEO);
    video.size(500, 500)
    video.hide()
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function gotPoses(results){
    if(results.length > 0) {
        console.log(results)
        nosex = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("nose x = " + results[0].pose.nose.x)
        console.log("nose y = " + results[0].pose.nose.y)
    }
}
function modelLoaded(){
    console.log("poseNet is loaded")
}

function draw(){
    image(video, 0, 0, 500, 500)
    image(mousache.jpg, noseX, noseY-10, 30, 30)
}
 function take_snapshot(){
 }