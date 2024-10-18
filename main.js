var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');
var colorinput = document.getElementById('colorInput');
var clearButton = document.getElementById('clearButton');
var rangeInput = document.getElementById('rangeInput');
var rangeLabel = document.getElementById('rangeLabel');

canvas.height = 512;
canvas.width = 512;

var isDrawing = false;

var lastMousePositionX = 0;
var lastMousePositionY = 0;

context.lineWidth = rangeInput.value;
context.lineJoin = "round";
context.lineCap = 'round';


var startDrawing = function(e){
	isDrawing = true;
	
	lastMousePositionX = e.offsetX;
	lastMousePositionY = e.offsetY;
}

var draw = function(e){
	if (isDrawing){
		context.beginPath();
		context.moveTo(lastMousePositionX, lastMousePositionY);
		context.lineTo(e.offsetX, e.offsetY);
		
		lastMousePositionX = e.offsetX;
		lastMousePositionY = e.offsetY;
		
		context.stroke();
	}
}

var endDrawing = function(e) {
	isDrawing = false;
}

var onInputChanged = function(e) {
	context.strokeStyle = e.target.value;
}

var clearCanvas = function(e) {
	context.clearRect(0, 0, canvas.width, canvas.height);
}

var changeThickness = function(e){
	context.lineWidth = e.target.value;
}

rangeInput.oninput = changeThickness;
clearButton.onclick = clearCanvas;

colorInput.addEventListener('input', onInputChanged);
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', endDrawing);
canvas.addEventListener('mouseout', endDrawing);