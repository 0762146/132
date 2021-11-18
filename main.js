var img = "";
var status = "";
function preload(){
 img = loadImage('dog_cat.jpg')
}
function setup(){
var canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded)
document.getElementById('status').innerHTML = "status: detecting objects";
}

function draw(){
image(img , 0, 0, 640, 420)
fill("#4682b4")
text("Dog", 45, 75);
noFill();
stroke("#4682b4");
rect(30, 60, 450, 350);

fill("#DC143C")
text("Cat", 320, 120);
noFill();
stroke("#DC143C");
rect(300, 90, 270, 320);
}

function modelLoaded(){
  console.log("Model Loaded!");
  status=true;
  objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
console.error(error);
    }
    else{
        console.log(results);
    }
    
}