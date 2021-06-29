noseX=0;
noseY=0;

function preload(){
   clown_nose=loadImage('https://i.postimg.cc/nhMwbwmd/output-onlinepngtools.png'); 
   clown_hat=loadImage('https://i.postimg.cc/bY9yVL1D/output-onlinepngtools-1.png'); 
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is working');
}

function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,100,100);
image(clown_hat,noseX,noseY-100,100,100);

}
function take_snapshot(){
    save('myFilterImage.png');
}
function gotPoses(results){
    if(results.length>0){
            console.log(results);
            noseX=results[0].pose.nose.x-50;
            noseY=results[0].pose.nose.y-50;
            console.log("nose x="+noseX);
            console.log("nose x="+noseX);             
    }
}