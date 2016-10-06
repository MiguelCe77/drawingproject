var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');


//background
canvas.fillStyle = "black";
canvas.fillRect(80, 150, 1000, 1000);

//pink square
canvas.fillStyle = "pink";
canvas.fillRect(80, 150, 100, 100);

//blue circle
canvas.beginPath();
canvas.fillStyle = "blue";
canvas.arc(200,200,50,0,2*Math.PI,true);
canvas.fill();

//Orange triangle
canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(1,800);
canvas.lineTo(1,80);
canvas.lineTo(800,800);
canvas.fill();

//Pank triangle
canvas.beginPath();
canvas.fillStyle = "pink";
canvas.moveTo(200,800);
canvas.lineTo(1,80);
canvas.lineTo(800,800);
canvas.fill();

//
canvas.beginPath();
canvas.fillStyle = "blue";
canvas.arc(200,200,50,0,2*Math.PI,true);
canvas.fill();

//
canvas.beginPath();
canvas.fillStyle = "blue";
canvas.arc(400,200,50,0,2*Math.PI,true);
canvas.fill();
