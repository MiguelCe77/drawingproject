var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');


//background 1st square
canvas.fillStyle = "LightSkyBlue";
canvas.fillRect(1, 90, 1000, 1000);


//grass  1st triangle
canvas.beginPath();
canvas.fillStyle = "green";
canvas.moveTo(1500,800);
canvas.lineTo(1,80);
canvas.lineTo(800,800);
canvas.fill();

//Grey post 2nd square
canvas.fillStyle = "black";
canvas.fillRect(490, 200, 20, 850);

//Grey notch in post 3rd sqaure
canvas.fillStyle = "black";
canvas.fillRect(470, 254, 20, 20);

//light box 4th square
canvas.fillStyle = "black";
canvas.fillRect(420, 200, 50, 150);

//red circle 1st circle
canvas.beginPath();
canvas.fillStyle = "red";
canvas.arc(445,230,20,0,2*Math.PI,true);
canvas.fill();

//red circle 2nd circle
canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(445,275,20,0,2*Math.PI,true);
canvas.fill();

//green circle 3rd circle
canvas.beginPath();
canvas.fillStyle = "green";
canvas.arc(445,320,20,0,2*Math.PI,true);
canvas.fill();

//sun circle 4th circle
canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(745,145,50,0,2*Math.PI,true);
canvas.fill();

//Grey long triangle 2nd trignale
canvas.beginPath();
canvas.fillStyle = "grey";
canvas.moveTo(1,800);
canvas.lineTo(1,80);
canvas.lineTo(800,800);
canvas.fill();

//black triangle 3rd
canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(200,800);
canvas.lineTo(1,80);
canvas.lineTo(800,800);
canvas.fill();


//4th triangle
canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.moveTo(400,800);
canvas.lineTo(1,80);
canvas.lineTo(800,800);
canvas.fill();

//5th triangle
canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(600,800);
canvas.lineTo(1,80);
canvas.lineTo(800,800);
canvas.fill();

//6th square
canvas.beginPath();
canvas.fillStyle = "grey";
canvas.moveTo(700,800);
canvas.lineTo(1,80);
canvas.lineTo(800,800);
canvas.fill();


//5th circle
canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(400,128,25,0,2*Math.PI,true);
canvas.fill();

//6th circle
canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(420,152,25,0,2*Math.PI,true);
canvas.fill();

//7th circle
canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(430,128,20,0,2*Math.PI,true);
canvas.fill();

//flower 5th square

canvas.fillStyle = "black";
canvas.fillRect(598, 519, 5, 20);


//final object
canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(601,519,9,0,2*Math.PI,true);
canvas.fill();
