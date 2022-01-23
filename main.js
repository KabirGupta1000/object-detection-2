img = "";
status = "";
function preload(){
    img1 = loadImage('IMG_4730.JPG');
    img2 = loadImage('IMG_4731.JPG');
    img3 = loadImage('IMG_4732.JPG');
    img4 = loadImage('IMG_4733.JPG');
    img1 = loadImage('IMG_4735.JPG');
}
function setup(){
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}
function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img , gotResult);
}
function gotResult(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000")
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);

}
