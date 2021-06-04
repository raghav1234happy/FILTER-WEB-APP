nosex ="";
nosey ="";

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(nose, nosex-20, nosey-15, 50, 50);
    image(nose1, nosex-20, nosey+20, 50, 50);
}

function take_snapshot() {
    save('mustache-filter.png')
}

function preload() {
    nose = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    nose1 = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function modelLoaded() {
    console.log("Model has loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log(nosex);
        console.log(nosey);
    }
}

