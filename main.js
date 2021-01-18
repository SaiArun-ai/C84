var canvas = document.getElementById("myCanvas");
var rx = 10;
var ry = 10;
var rh = 100;
var rw = 100;
ctx = canvas.getContext("2d");
var rImage = "rover.png";
var cImage = "mars.jpg";
function add(){
    CanvasBackgroundImg = new Image();
    CanvasBackgroundImg.onload = uploadBackground;
    CanvasBackgroundImg.src = cImage;
    RoverImg = new Image();
    RoverImg.onload = roverBackground;
    RoverImg.src = rImage;
}
function uploadBackground(){
    ctx.drawImage(CanvasBackgroundImg, 0, 0, canvas.width, canvas.height);
}
function roverBackground(){
    ctx.drawImage(RoverImg, rx, ry, rw, rh);
}
