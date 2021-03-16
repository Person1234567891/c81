var canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
var x = 0
var y = 0
ctx.beginPath();
ctx.strokeStyle = "red"
ctx.lineWidth = "2"
ctx.arc(400, 300,39,0,2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",myMouseDown)
function myMouseDown(e){
x = e.clientX - canvas.offsetLeft;
y = e.clientY - canvas.offsetTop;
color = document.getElementById("colorInput").value;
ctx.beginPath();
ctx.strokeStyle = color
ctx.lineWidth = "2"
ctx.arc(x, y,39,0,2 * Math.PI);
ctx.stroke();
}
